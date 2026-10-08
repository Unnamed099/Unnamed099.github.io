/* ============================================================
   长图生成器 - 主逻辑
   依赖：
     - window.FP       资源前缀（CDN 或空）
     - katex           （调用方预先加载）
     - html2canvas     （调用方预先加载）
   挂载：
     window.initLongImg(container)
     或 <div data-longimg></div> 自动初始化
   ============================================================ */
(function () {
  'use strict';

  const DRAFT_KEY = 'code_long_image_draft';
  const SPACING_KEY = 'code_long_image_spacing';

  // ==================== 状态 ====================
  let blocks = [];
  let history = [];
  let editingId = null;
  let creatingAt = null;
  let _uid = 1;
  let exporting = false;
  let el = {};
  let _container = null;

  const newId = () => 'b' + (_uid++) + '_' + Date.now().toString(36);

  // ==================== 工具 ====================
  function snapshot() {
    history.push(JSON.stringify(blocks));
    if (history.length > 100) history.shift();
    updateUndoBtn();
  }
  function updateUndoBtn() {
    const disabled = history.length === 0;
    if (el.btnUndo) el.btnUndo.disabled = disabled;
    if (el.mUndo) el.mUndo.disabled = disabled;
  }

  let toastTimer = null;
  function showToast(msg, ms = 1800) {
    if (!el.toast) return;
    el.toast.textContent = msg;
    el.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.toast.classList.remove('show'), ms);
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function isMobile() {
    return window.matchMedia('(max-width: 900px)').matches;
  }

  function containerQueryAll(sel) {
    return _container ? _container.querySelectorAll(sel) : [];
  }

  // ==================== 语法高亮 ====================
  const KEYWORDS = {
    python: ['def','class','return','if','elif','else','for','while','import','from','as','try','except','finally','with','lambda','yield','global','nonlocal','pass','break','continue','raise','assert','del','in','is','not','and','or','None','True','False','async','await'],
    javascript: ['function','var','let','const','if','else','for','while','do','return','class','extends','new','this','try','catch','finally','throw','switch','case','break','continue','import','export','default','from','async','await','yield','typeof','instanceof','in','of','delete','void','null','undefined','true','false'],
    java: ['public','private','protected','class','interface','extends','implements','static','final','void','int','long','double','float','boolean','char','byte','short','if','else','for','while','do','return','new','try','catch','finally','throw','throws','import','package','this','super','null','true','false','abstract','synchronized','volatile','transient','enum'],
    cpp: ['int','long','short','char','float','double','bool','void','class','struct','public','private','protected','virtual','static','const','if','else','for','while','do','return','new','delete','try','catch','throw','namespace','using','template','typename','auto','nullptr','true','false','include','define','ifndef','endif'],
    c: ['int','long','short','char','float','double','void','struct','union','enum','const','static','extern','if','else','for','while','do','return','switch','case','break','continue','sizeof','typedef','include','define','ifndef','endif','NULL'],
    go: ['func','package','import','var','const','type','struct','interface','map','chan','go','defer','if','else','for','range','return','switch','case','break','continue','select','nil','true','false','make','new'],
    rust: ['fn','let','mut','const','struct','enum','impl','trait','pub','use','mod','crate','self','Self','if','else','match','for','while','loop','return','break','continue','move','ref','as','where','dyn','async','await','true','false','Some','None','Ok','Err'],
    sql: ['SELECT','FROM','WHERE','INSERT','INTO','VALUES','UPDATE','SET','DELETE','CREATE','TABLE','DROP','ALTER','JOIN','LEFT','RIGHT','INNER','OUTER','ON','GROUP','BY','ORDER','HAVING','LIMIT','OFFSET','AS','AND','OR','NOT','NULL','PRIMARY','KEY','FOREIGN','REFERENCES','INDEX','DISTINCT','UNION','ALL','IN','BETWEEN','LIKE','CASE','WHEN','THEN','ELSE','END'],
    bash: ['if','then','else','elif','fi','for','while','do','done','case','esac','function','return','echo','exit','export','source','local','read','cd','ls','mkdir','rm','cp','mv','grep','sed','awk','cat'],
    json: ['true','false','null'],
    html: [],
    css: []
  };

  const BUILTINS = {
    python: ['print','len','range','str','int','float','list','dict','set','tuple','sum','min','max','abs','round','sorted','enumerate','zip','map','filter','open','input','type','isinstance','super','self','append','extend','format','join','split','strip','replace'],
    javascript: ['console','log','document','window','Math','JSON','Array','Object','String','Number','Boolean','parseInt','parseFloat','setTimeout','setInterval','Promise','fetch','alert'],
    java: ['System','String','Integer','Double','Math','List','ArrayList','Map','HashMap','Set','HashSet'],
    cpp: ['std','cout','cin','endl','vector','string','map','set','pair','make_pair','printf','scanf'],
    c: ['printf','scanf','malloc','free','memcpy','memset','strlen','strcpy','strcmp'],
    go: ['fmt','Println','Printf','Sprintf','Errorf','len','cap','append','make'],
    rust: ['println','print','vec','Vec','String','Some','None','Ok','Err'],
    sql: ['COUNT','SUM','AVG','MIN','MAX','NOW','COALESCE','CAST'],
    bash: [], json: [], html: [], css: []
  };

  function highlightCode(code, lang) {
    const keywords = new Set((KEYWORDS[lang] || []).map(k => lang === 'sql' ? k.toUpperCase() : k));
    const builtins = new Set(BUILTINS[lang] || []);
    const isSQL = lang === 'sql';
    const tokens = [];
    let i = 0;
    const n = code.length;
    const push = (type, text) => tokens.push({ type, text });

    while (i < n) {
      const ch = code[i];
      const rest = code.slice(i);
      let m;

      if ((m = rest.match(/^\/\/[^\n]*/)) || (m = rest.match(/^#[^\n]*/)) || (m = rest.match(/^\/\*[\s\S]*?\*\//))) {
        push('comment', m[0]); i += m[0].length; continue;
      }
      if (ch === '"' || ch === "'" || ch === '`') {
        const quote = ch;
        let j = i + 1;
        while (j < n && code[j] !== quote) {
          if (code[j] === '\\') j++;
          j++;
        }
        if (j < n) j++;
        push('string', code.slice(i, j)); i = j; continue;
      }
      if (/[0-9]/.test(ch)) {
        const m2 = rest.match(/^[0-9]+(\.[0-9]+)?([eE][+-]?[0-9]+)?/);
        push('number', m2[0]); i += m2[0].length; continue;
      }
      if (/[A-Za-z_$]/.test(ch)) {
        const m2 = rest.match(/^[A-Za-z_$][A-Za-z0-9_$]*/);
        const word = m2[0];
        const key = isSQL ? word.toUpperCase() : word;
        let j = i + word.length;
        while (j < n && code[j] === ' ') j++;
        const nextIsParen = code[j] === '(';
        const prevIsDot = i > 0 && code[i-1] === '.';

        if (keywords.has(key)) push('keyword', word);
        else if (builtins.has(word)) push('builtin', word);
        else if (nextIsParen && !prevIsDot) push('function', word);
        else if (/^[A-Z]/.test(word) && word.length > 1) push('class', word);
        else push('plain', word);
        i += word.length; continue;
      }
      if (/[+\-*/%=<>!&|^~?:]/.test(ch)) {
        const m2 = rest.match(/^[+\-*/%=<>!&|^~?:]+/);
        push('operator', m2[0]); i += m2[0].length; continue;
      }
      push('plain', ch);
      i++;
    }

    return tokens.map(t => {
      const safe = escapeHtml(t.text);
      if (t.type === 'plain') return safe;
      return `<span class="tok-${t.type}">${safe}</span>`;
    }).join('');
  }

  // ==================== 文字渲染 ====================
  function stripHash(content) {
    return content.split('\n').map(line => line.replace(/^#{1,6}\s*/, '')).join('\n');
  }

  function renderInline(text) {
    let s = escapeHtml(text);
    const formulas = [];
    s = s.replace(/\$([^$\n]+)\$/g, (m, expr) => {
      const idx = formulas.length;
      formulas.push(expr);
      return `\u0000FORMULA${idx}\u0000`;
    });

    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    s = s.replace(/`([^`]+)`/g, '<code class="inline">$1</code>');
    s = s.replace(/&lt;u&gt;([\s\S]*?)&lt;\/u&gt;/g, '<u>$1</u>');

    s = s.replace(/\u0000FORMULA(\d+)\u0000/g, (m, i) => {
      try { return katex.renderToString(formulas[i], { throwOnError: false }); }
      catch (e) { return formulas[i]; }
    });

    s = s.replace(/\n/g, '<br>');
    return s;
  }

  // ==================== 构建块元素 ====================
  function buildBlockEl(b) {
    let node;
    if (b.type === 'text') {
      const level = b.level || 'p';
      node = document.createElement(level === 'p' ? 'p' : level);
      node.className = 'block-text ' + level;
      node.innerHTML = renderInline(stripHash(b.content));
    } else if (b.type === 'code') {
      node = document.createElement('div');
      node.className = 'block-code';
      node.innerHTML = `
        <div class="code-head">
          <span class="dot r"></span>
          <span class="dot y"></span>
          <span class="dot g"></span>
          <span class="code-lang">${b.lang || 'code'}</span>
        </div>
        <pre><code></code></pre>
      `;
      node.querySelector('code').innerHTML = highlightCode(b.content, b.lang);
    } else if (b.type === 'formula') {
      node = document.createElement('div');
      node.className = 'block-formula';
      try {
        katex.render(b.content, node, { displayMode: true, throwOnError: false });
      } catch (e) { node.textContent = b.content; }
    } else if (b.type === 'image') {
      const align = b.align || 'center';
      node = document.createElement('div');
      node.className = 'block-image align-' + align;
      const img = document.createElement('img');
      img.src = b.content;
      img.alt = b.alt || '';
      if (b.width)  img.style.width  = b.width + 'px';
      if (b.height) img.style.height = b.height + 'px';
      if (b.width && b.height) img.style.objectFit = 'cover';
      node.appendChild(img);
    }
    return node;
  }

  // ==================== 内联编辑器 ====================
  function makeEditor(block, index) {
    const isNew = !block;
    const wrap = document.createElement('div');
    wrap.className = 'block-editor';

    wrap.innerHTML = `
      <div class="ie-toolbar">
        <select class="ie-type">
          <option value="text">文字</option>
          <option value="code">代码</option>
          <option value="formula">公式</option>
          <option value="image">图片</option>
        </select>
        <select class="ie-level">
          <option value="p">正文</option>
          <option value="h1">H1 大标题</option>
          <option value="h2">H2 中标题</option>
          <option value="h3">H3 小标题</option>
        </select>
        <select class="ie-lang">
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
          <option value="c">C</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="sql">SQL</option>
          <option value="bash">Bash</option>
          <option value="json">JSON</option>
          <option value="go">Go</option>
          <option value="rust">Rust</option>
        </select>
      </div>

      <div class="ie-image-panel" style="display:none">
        <label>宽 <input type="number" class="ie-img-w" min="20" max="2000" step="1"></label>
        <label>高 <input type="number" class="ie-img-h" min="20" max="2000" step="1"></label>
        <label><input type="checkbox" class="ie-img-lock" checked> 锁定比例</label>
        <label>对齐
          <select class="ie-img-align">
            <option value="left">左</option>
            <option value="center" selected>中</option>
            <option value="right">右</option>
          </select>
        </label>
        <button type="button" class="ie-img-reset">原始尺寸</button>
        <button type="button" class="ie-img-replace">替换图片</button>
      </div>

      <div class="ie-image-preview" style="display:none"></div>

      <textarea class="ie-content" rows="3" autocapitalize="off" autocorrect="off" spellcheck="false"></textarea>

      <div class="ie-actions">
        <span class="ie-hint">Ctrl/⌘+Enter 保存 · Esc 取消</span>
        <button type="button" data-act="cancel">取消</button>
        <button type="button" data-act="save" class="primary">${isNew ? '插入' : '保存'}</button>
      </div>
    `;

    const typeSel  = wrap.querySelector('.ie-type');
    const levelSel = wrap.querySelector('.ie-level');
    const langSel  = wrap.querySelector('.ie-lang');
    const ta       = wrap.querySelector('.ie-content');
    const imgPanel = wrap.querySelector('.ie-image-panel');
    const imgPrev  = wrap.querySelector('.ie-image-preview');
    const imgW     = wrap.querySelector('.ie-img-w');
    const imgH     = wrap.querySelector('.ie-img-h');
    const imgLock  = wrap.querySelector('.ie-img-lock');
    const imgAlign = wrap.querySelector('.ie-img-align');

    const imgState = {
      dataUrl: block && block.type === 'image' ? (block.content || '') : '',
      naturalW: 0,
      naturalH: 0,
      width:  block && block.width  || 0,
      height: block && block.height || 0,
      align:  block && block.align  || 'center'
    };

    if (block && block.type !== 'image') {
      typeSel.value  = block.type;
      levelSel.value = block.level || 'p';
      langSel.value  = block.lang || 'python';
      ta.value       = block.content || '';
    }
    if (block && block.type === 'image') {
      typeSel.value = 'image';
      imgAlign.value = imgState.align;
    }

    function syncControls() {
      const t = typeSel.value;
      levelSel.style.display = t === 'text' ? '' : 'none';
      langSel.style.display  = t === 'code' ? '' : 'none';
      ta.style.display       = t === 'image' ? 'none' : '';
      imgPanel.style.display = t === 'image' ? 'flex' : 'none';
      imgPrev.style.display  = t === 'image' ? 'flex' : 'none';

      ta.classList.toggle('is-code', t === 'code');
      if (t === 'code') {
        ta.setAttribute('autocapitalize', 'off');
        ta.setAttribute('autocorrect', 'off');
        ta.setAttribute('spellcheck', 'false');
      } else {
        ta.removeAttribute('autocapitalize');
        ta.removeAttribute('autocorrect');
        ta.removeAttribute('spellcheck');
      }
      ta.placeholder =
        t === 'formula' ? 'LaTeX，如 \\frac{a}{b}' :
        t === 'code'    ? '粘贴或输入代码…' :
                          '支持 **加粗**、*斜体*、`行内代码`、$行内公式$';
      adjustRows();

      if (t === 'image') renderImagePreview();
    }

    function adjustRows() {
      if (typeSel.value === 'code') {
        const lines = ta.value.split('\n').length + 1;
        ta.rows = Math.min(24, Math.max(5, lines));
      } else {
        ta.rows = 3;
      }
    }

    // -------- 图片预览渲染 --------
    function renderImagePreview() {
      imgPrev.innerHTML = '';

      if (!imgState.dataUrl) {
        const dz = document.createElement('div');
        dz.className = 'ie-image-dropzone';
        dz.innerHTML = `
          <div class="big">🖼️</div>
          <div>点击选择图片，或拖拽/粘贴到这里</div>
          <div style="font-size:11px;color:#a2b0c2">支持 PNG / JPG / GIF / WebP / SVG</div>
        `;
        dz.onclick = () => pickImageFile();
        dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('dragover'); });
        dz.addEventListener('dragleave', () => dz.classList.remove('dragover'));
        dz.addEventListener('drop', e => {
          e.preventDefault();
          dz.classList.remove('dragover');
          const f = e.dataTransfer.files[0];
          if (f && f.type.startsWith('image/')) readImageFile(f);
        });
        imgPrev.appendChild(dz);
        return;
      }

      const img = document.createElement('img');
      img.src = imgState.dataUrl;
      img.onload = () => {
        if (!imgState.naturalW) {
          imgState.naturalW = img.naturalWidth;
          imgState.naturalH = img.naturalHeight;
          if (!imgState.width)  imgState.width  = img.naturalWidth;
          if (!imgState.height) imgState.height = img.naturalHeight;
          syncImageInputs();
          applyPreviewSize();
        }
      };
      if (imgState.width)  img.style.width  = imgState.width + 'px';
      if (imgState.height) img.style.height = imgState.height + 'px';
      if (imgState.width && imgState.height) img.style.objectFit = 'cover';
      imgPrev.appendChild(img);

      if (imgState.naturalW) syncImageInputs();
    }

    function syncImageInputs() {
      imgW.value = Math.round(imgState.width)  || imgState.naturalW || '';
      imgH.value = Math.round(imgState.height) || imgState.naturalH || '';
      imgAlign.value = imgState.align;
      imgW.max = imgState.naturalW ? imgState.naturalW * 4 : 2000;
      imgH.max = imgState.naturalH ? imgState.naturalH * 4 : 2000;
    }

    imgW.addEventListener('input', () => {
      const v = parseFloat(imgW.value);
      if (!v) return;
      imgState.width = v;
      if (imgLock.checked && imgState.naturalW) {
        imgState.height = Math.round(v * imgState.naturalH / imgState.naturalW);
        imgH.value = imgState.height;
      }
      applyPreviewSize();
    });
    imgH.addEventListener('input', () => {
      const v = parseFloat(imgH.value);
      if (!v) return;
      imgState.height = v;
      if (imgLock.checked && imgState.naturalH) {
        imgState.width = Math.round(v * imgState.naturalW / imgState.naturalH);
        imgW.value = imgState.width;
      }
      applyPreviewSize();
    });
    imgAlign.addEventListener('change', () => {
      imgState.align = imgAlign.value;
      imgPrev.style.textAlign = imgAlign.value;
    });

    function applyPreviewSize() {
      const im = imgPrev.querySelector('img');
      if (!im) return;
      im.style.width  = imgState.width  + 'px';
      im.style.height = imgState.height + 'px';
      im.style.objectFit = (imgState.width && imgState.height) ? 'cover' : '';
    }

    wrap.querySelector('.ie-img-reset').onclick = () => {
      if (!imgState.naturalW) return;
      imgState.width  = imgState.naturalW;
      imgState.height = imgState.naturalH;
      syncImageInputs();
      applyPreviewSize();
    };
    wrap.querySelector('.ie-img-replace').onclick = () => pickImageFile();

    function pickImageFile() {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = () => {
        const f = input.files[0];
        if (f) readImageFile(f);
      };
      input.click();
    }

    function readImageFile(file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('图片太大（>8MB），请压缩后再用');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        imgState.dataUrl = reader.result;
        imgState.naturalW = 0;
        imgState.naturalH = 0;
        imgState.width = 0;
        imgState.height = 0;
        renderImagePreview();
      };
      reader.readAsDataURL(file);
    }

    // 粘贴图片
    wrap.addEventListener('paste', e => {
      if (typeSel.value !== 'image') return;
      const items = e.clipboardData && e.clipboardData.items;
      if (!items) return;
      for (const it of items) {
        if (it.type.startsWith('image/')) {
          e.preventDefault();
          readImageFile(it.getAsFile());
          return;
        }
      }
    });

    typeSel.onchange = () => { syncControls(); };
    ta.addEventListener('input', adjustRows);

    ta.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault(); save();
      } else if (e.key === 'Escape') {
        e.preventDefault(); cancel();
      }
    });

    wrap.querySelector('[data-act="save"]').onclick = save;
    wrap.querySelector('[data-act="cancel"]').onclick = cancel;

    function save() {
      let data;
      if (typeSel.value === 'image') {
        if (!imgState.dataUrl) {
          alert('请先选择图片');
          return;
        }
        data = {
          type: 'image',
          level: 'p',
          lang: 'png',
          content: imgState.dataUrl,
          width:  Math.round(imgState.width)  || imgState.naturalW || 0,
          height: Math.round(imgState.height) || imgState.naturalH || 0,
          align:  imgState.align
        };
      } else {
        data = readEditor(wrap);
        if (!data.content.trim() && isNew) { cancel(); return; }
      }

      snapshot();
      if (isNew) {
        blocks.splice(index, 0, { id: newId(), ...data });
      } else {
        const target = blocks.find(x => x.id === block.id);
        if (target) Object.assign(target, data);
      }
      editingId = null;
      creatingAt = null;
      renderBlocks();
    }

    function cancel() {
      editingId = null;
      creatingAt = null;
      renderBlocks();
    }

    syncControls();

    requestAnimationFrame(() => {
      if (typeSel.value !== 'image') {
        ta.focus();
        ta.setSelectionRange(ta.value.length, ta.value.length);
      }
      if (isMobile()) {
        setTimeout(() => wrap.scrollIntoView({ behavior: 'smooth', block: 'center' }), 250);
      }
    });

    return wrap;
  }

  function readEditor(editor) {
    const type = editor.querySelector('.ie-type').value;
    let content = editor.querySelector('.ie-content').value;
    if (type === 'text') content = stripHash(content);
    return {
      type,
      level: editor.querySelector('.ie-level').value,
      lang:  editor.querySelector('.ie-lang').value,
      content
    };
  }

  // ==================== 渲染 ====================
  function renderBlocks() {
    if (!el.blocks) return;
    el.blocks.innerHTML = '';

    blocks.forEach((b, i) => {
      if (creatingAt === i) {
        el.blocks.appendChild(makeEditor(null, i));
      } else {
        el.blocks.appendChild(makeInsertBar(i));
      }
      el.blocks.appendChild(makeBlockRow(b, i));
    });

    if (creatingAt === blocks.length) {
      el.blocks.appendChild(makeEditor(null, blocks.length));
    } else {
      el.blocks.appendChild(makeInsertBar(blocks.length));
    }

    autoSave();
  }

  function makeInsertBar(index) {
    const bar = document.createElement('div');
    bar.className = 'insert-bar';

    const btn = document.createElement('button');
    btn.className = 'insert-btn';
    btn.type = 'button';
    btn.textContent = '+';
    btn.title = '在此插入新块';
    btn.setAttribute('aria-label', '在此插入新块');

    let busy = false;
    function doInsert(e) {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      if (busy) return;
      busy = true;
      setTimeout(() => { busy = false; }, 400);

      try {
        const existingEditor = el.blocks && el.blocks.querySelector('.block-editor');
        if (existingEditor && (editingId !== null || creatingAt !== null)) {
          try {
            const t = existingEditor.querySelector('.ie-type').value;
            let data;
            if (t === 'image') {
              // 图片块若未选图则丢弃
              const src = existingEditor.querySelector('.ie-image-preview img');
              if (!src) throw new Error('skip');
              data = { type: 'image', level: 'p', lang: 'png',
                       content: src.src,
                       width: parseInt(src.style.width) || 0,
                       height: parseInt(src.style.height) || 0,
                       align: (existingEditor.querySelector('.ie-img-align')||{}).value || 'center' };
            } else {
              data = readEditor(existingEditor);
            }
            if (editingId !== null) {
              const idx = blocks.findIndex(b => b.id === editingId);
              if (idx >= 0 && (data.content || '').trim !== undefined) {
                if (data.type === 'image' || data.content.trim()) {
                  blocks[idx] = { ...blocks[idx], ...data };
                }
              }
            } else if (creatingAt !== null) {
              if (data.type === 'image' || data.content.trim()) {
                let at = creatingAt;
                if (at <= index) index++;
                blocks.splice(at, 0, { id: newId(), ...data });
              }
            }
          } catch (err) {
            if (err.message !== 'skip') {
              console.warn('[insert] 提交上一个编辑器失败，忽略：', err);
            }
          }
        }
        editingId = null;
        creatingAt = index;
        renderBlocks();
      } catch (err) {
        console.error('[insert] 失败：', err);
        alert('插入失败：' + err.message);
      }
    }
    btn.addEventListener('click', doInsert);
    btn.addEventListener('touchend', doInsert, { passive: false });

    bar.appendChild(btn);
    return bar;
  }

  function makeBlockRow(b, i) {
    const row = document.createElement('div');
    row.className = 'block-row';
    row.dataset.id = b.id;

    const ops = document.createElement('div');
    ops.className = 'block-ops';
    ops.innerHTML = `
      <button type="button" data-op="up"   title="上移">↑</button>
      <button type="button" data-op="down" title="下移">↓</button>
      <button type="button" data-op="edit" title="编辑">✎</button>
      <button type="button" data-op="dup"  title="复制">⧉</button>
      <button type="button" data-op="del"  title="删除">✕</button>
    `;
    ops.addEventListener('click', e => {
      const op = e.target.dataset.op;
      if (op) handleOp(op, i);
    });
    row.appendChild(ops);

    const content = document.createElement('div');
    content.className = 'block-content';
    if (editingId === b.id) {
      content.appendChild(makeEditor(b, i));
    } else {
      content.appendChild(buildBlockEl(b));
    }
    row.appendChild(content);

    return row;
  }

  // ==================== 提交/操作 ====================
  function commitActiveEdit() {
    if (editingId === null && creatingAt === null) return;
    const editor = el.blocks && el.blocks.querySelector('.block-editor');
    if (!editor) { editingId = null; creatingAt = null; return; }

    const type = editor.querySelector('.ie-type').value;
    let data;
    try {
      if (type === 'image') {
        const im = editor.querySelector('.ie-image-preview img');
        if (!im) { editingId = null; creatingAt = null; return; }
        const alignSel = editor.querySelector('.ie-img-align');
        data = {
          type: 'image', level: 'p', lang: 'png',
          content: im.src,
          width: parseInt(im.style.width) || im.naturalWidth || 0,
          height: parseInt(im.style.height) || im.naturalHeight || 0,
          align: alignSel ? alignSel.value : 'center'
        };
      } else {
        data = readEditor(editor);
      }
    } catch (err) {
      console.warn('[commit] readEditor 失败，放弃提交：', err);
      editingId = null;
      creatingAt = null;
      return;
    }

    try {
      if (editingId !== null) {
        const idx = blocks.findIndex(b => b.id === editingId);
        if (idx >= 0) {
          if (data.type === 'image' || (data.content || '').trim()) {
            snapshot();
            blocks[idx] = { ...blocks[idx], ...data };
          }
        }
      } else if (creatingAt !== null) {
        if (data.type === 'image' || (data.content || '').trim()) {
          snapshot();
          blocks.splice(creatingAt, 0, { id: newId(), ...data });
        }
      }
    } catch (err) { console.error('[commit] 失败：', err); }

    editingId = null;
    creatingAt = null;
  }

  function handleOp(op, i) {
    const b = blocks[i];
    if (!b) return;

    if (op === 'edit') {
      commitActiveEdit();
      editingId = b.id;
      creatingAt = null;
      renderBlocks();
      return;
    }
    commitActiveEdit();

    if (op === 'up' && i > 0) {
      snapshot();
      [blocks[i - 1], blocks[i]] = [blocks[i], blocks[i - 1]];
    } else if (op === 'down' && i < blocks.length - 1) {
      snapshot();
      [blocks[i + 1], blocks[i]] = [blocks[i], blocks[i + 1]];
    } else if (op === 'del') {
      snapshot(); blocks.splice(i, 1);
    } else if (op === 'dup') {
      snapshot(); blocks.splice(i + 1, 0, { ...b, id: newId() });
    } else { return; }
    renderBlocks();
  }

  // ==================== 草稿 ====================
  function autoSave() {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({
        title: el.inTitle.value,
        subtitle: el.inSubtitle.value,
        blocks: blocks
      }));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        showToast('草稿过大（图片太多），自动保存失败，建议导出备份');
      }
    }
  }

  function applySpacing() {
    const gapSel = el.inGap.value;
    const custom = el.inGapCustom.value;
    const lineH = el.inLineHeight.value;
    const fontS = el.inFontSize.value;

    let gap = 22;
    if (gapSel === 'compact') gap = 10;
    else if (gapSel === 'normal') gap = 22;
    else if (gapSel === 'loose') gap = 36;
    else gap = parseFloat(custom) || 22;

    el.preview.style.setProperty('--block-gap', gap + 'px');
    el.preview.style.setProperty('--line-h', lineH);
    el.preview.style.setProperty('--font-s', fontS + 'px');

    el.inGapCustom.style.display = gapSel === 'custom' ? 'block' : 'none';
    autoSaveSpacing();
  }

  function autoSaveSpacing() {
    try {
      localStorage.setItem(SPACING_KEY, JSON.stringify({
        gap: el.inGap.value,
        gapCustom: el.inGapCustom.value,
        lineH: el.inLineHeight.value,
        fontS: el.inFontSize.value
      }));
    } catch (e) {}
  }

  function loadSpacing() {
    try {
      const s = JSON.parse(localStorage.getItem(SPACING_KEY) || '{}');
      if (s.gap) el.inGap.value = s.gap;
      if (s.gapCustom) el.inGapCustom.value = s.gapCustom;
      if (s.lineH) el.inLineHeight.value = s.lineH;
      if (s.fontS) el.inFontSize.value = s.fontS;
    } catch (e) {}
    applySpacing();
  }

  // ==================== 添加/撤销/清空 ====================
  function addToEnd() {
    const type = el.inType.value;

    if (type === 'image') {
      commitActiveEdit();
      creatingAt = blocks.length;
      editingId = null;
      renderBlocks();
      showToast('请在编辑区选择图片');
      if (isMobile()) {
        setTimeout(() => {
          const ed = el.blocks.querySelector('.block-editor');
          if (ed) ed.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
      return;
    }

    const lang = el.inLang.value;
    const level = el.inLevel.value || 'p';
    let content = el.inContent.value;

    if (!content.trim()) { showToast('内容不能为空'); return; }
    if (type === 'text') content = stripHash(content);

    commitActiveEdit();
    snapshot();
    blocks.push({ id: newId(), type, lang, level, content });
    el.inContent.value = '';
    renderBlocks();

    if (isMobile()) {
      setTimeout(() => {
        const rows = el.blocks.querySelectorAll('.block-row');
        const last = rows[rows.length - 1];
        if (last) last.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 120);
    }
  }

  function undo() {
    if (history.length === 0) return;
    editingId = null;
    creatingAt = null;
    blocks = JSON.parse(history.pop());
    renderBlocks();
    updateUndoBtn();
  }

  function clearAll() {
    if (confirm('确定清空所有内容？')) {
      commitActiveEdit();
      snapshot();
      blocks.length = 0;
      renderBlocks();
    }
  }

  // ==================== 导入/导出备份 ====================
  function exportBackup() {
    commitActiveEdit();
    const data = {
      version: 3,
      savedAt: new Date().toISOString(),
      title: el.inTitle.value,
      subtitle: el.inSubtitle.value,
      blocks: blocks,
      spacing: {
        gap: el.inGap.value,
        gapCustom: el.inGapCustom.value,
        lineH: el.inLineHeight.value,
        fontS: el.inFontSize.value
      }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '备份_' + new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-') + '.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('已导出备份');
  }

  function importBackup(file) {
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.blocks || !Array.isArray(data.blocks)) {
          alert('文件格式不对，缺少 blocks 字段');
          return;
        }
        if (!confirm('导入会覆盖当前内容，确定继续？')) return;

        editingId = null;
        creatingAt = null;
        snapshot();

        blocks = data.blocks.map(b => ({
          id: b.id || newId(),
          type: b.type || 'text',
          lang: b.lang || 'python',
          level: b.level || 'p',
          content: b.content || '',
          width: b.width || 0,
          height: b.height || 0,
          align: b.align || 'center'
        }));

        if (data.title !== undefined) el.inTitle.value = data.title;
        if (data.subtitle !== undefined) el.inSubtitle.value = data.subtitle;
        el.pvTitle.textContent = el.inTitle.value || ' ';
        el.pvSubtitle.textContent = el.inSubtitle.value || ' ';

        if (data.spacing) {
          if (data.spacing.gap) el.inGap.value = data.spacing.gap;
          if (data.spacing.gapCustom) el.inGapCustom.value = data.spacing.gapCustom;
          if (data.spacing.lineH) el.inLineHeight.value = data.spacing.lineH;
          if (data.spacing.fontS) el.inFontSize.value = data.spacing.fontS;
          applySpacing();
        }
        renderBlocks();
        showToast('导入成功，共 ' + blocks.length + ' 个块');
      } catch (err) {
        alert('解析失败：' + err.message);
      }
    };
    reader.readAsText(file, 'utf-8');
  }

  // ==================== 导出长图 ====================
  async function exportImage() {
    if (exporting) return;
    exporting = true;

    const oldText = el.btnExport.textContent;
    el.btnExport.textContent = '⏳ 生成中...';
    el.btnExport.disabled = true;
    el.mExport.disabled = true;

    commitActiveEdit();
    el.preview.classList.add('exporting');

    const prevScroll = window.scrollY;
    window.scrollTo(0, 0);

    try {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

      const w = el.preview.scrollWidth;
      const h = el.preview.scrollHeight;

      const MAX_SIDE = 16384;
      const MAX_AREA = 16_000_000;
      let scale = window.devicePixelRatio > 1 ? 2 : 1.5;
      if (Math.max(w, h) * scale > MAX_SIDE) {
        scale = Math.max(1, MAX_SIDE / Math.max(w, h));
      }
      if (w * h * scale * scale > MAX_AREA) {
        scale = Math.sqrt(MAX_AREA / (w * h));
      }

      const canvas = await html2canvas(el.preview, {
        scale, useCORS: true, backgroundColor: '#ffffff',
        windowWidth: w, windowHeight: h,
        scrollX: 0, scrollY: 0
      });

      const dataUrl = canvas.toDataURL('image/png');

      if (isMobile() && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const w2 = window.open('', '_blank');
        if (w2) {
          w2.document.write(`
            <!DOCTYPE html><html><head>
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <title>长图 - 长按保存</title>
            <style>body{margin:0;background:#333;display:flex;justify-content:center;padding:16px;font-family:sans-serif}
            img{max-width:100%;box-shadow:0 4px 20px rgba(0,0,0,.5);border-radius:8px}
            .tip{position:fixed;top:0;left:0;right:0;background:rgba(0,0,0,.75);color:#fff;padding:10px;text-align:center;font-size:14px}
            </style></head><body>
            <div class="tip">长按图片可保存到相册</div>
            <img src="${dataUrl}">
            </body></html>
          `);
          w2.document.close();
        } else {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = '长图_' + Date.now() + '.png';
          link.click();
        }
      } else {
        const link = document.createElement('a');
        link.download = '长图_' + Date.now() + '.png';
        link.href = dataUrl;
        link.click();
        showToast('已导出长图');
      }
    } catch (e) {
      alert('导出失败：' + e.message);
    } finally {
      el.preview.classList.remove('exporting');
      el.btnExport.textContent = oldText;
      el.btnExport.disabled = false;
      el.mExport.disabled = false;
      exporting = false;
      window.scrollTo(0, prevScroll);
    }
  }

  // ==================== 构建 DOM ====================
  function buildUI(container) {
    container.innerHTML = `
      <div class="editor-pane">
        <h2>📝 内容编辑</h2>
        <label>文档标题</label>
        <input type="text" id="inTitle" value="我的技术笔记" />

        <label>副标题（可留空）</label>
        <input type="text" id="inSubtitle" value="代码 · 文字 · 公式 混排" />

        <label>块类型（快捷追加到末尾）</label>
        <div class="row">
          <select id="inType">
            <option value="text">文字 / 标题</option>
            <option value="code">代码</option>
            <option value="formula">公式</option>
            <option value="image">图片</option>
          </select>
          <select id="inLang">
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="c">C</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="sql">SQL</option>
            <option value="bash">Bash</option>
            <option value="json">JSON</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
          </select>
        </div>

        <label>文字级别（选“文字/标题”时生效）</label>
        <select id="inLevel">
          <option value="p">正文</option>
          <option value="h1">H1 大标题</option>
          <option value="h2">H2 中标题</option>
          <option value="h3">H3 小标题</option>
        </select>

        <label>间距设置</label>
        <div class="row">
          <select id="inGap">
            <option value="compact">紧凑</option>
            <option value="normal" selected>标准</option>
            <option value="loose">宽松</option>
            <option value="custom">自定义</option>
          </select>
          <input type="number" id="inGapCustom" min="0" max="80" value="22" style="display:none" placeholder="px">
        </div>
        <div class="row" style="margin-top:6px">
          <input type="number" id="inLineHeight" min="1.2" max="3" step="0.1" value="1.9" placeholder="行高">
          <input type="number" id="inFontSize" min="12" max="22" step="0.5" value="15" placeholder="正文字号">
        </div>

        <div id="textTools">
          <label>文字格式（先选中文字再点）</label>
          <div class="toolbar">
            <button type="button" data-action="bold"><b>B</b> 加粗</button>
            <button type="button" data-action="italic"><i>I</i> 斜体</button>
            <button type="button" data-action="underline"><u>U</u> 下划线</button>
            <button type="button" data-action="code">&lt;/&gt; 行内代码</button>
            <button type="button" data-action="clear">清除格式</button>
          </div>
        </div>

        <label>内容 <span style="color:#bbb;font-weight:400">（公式用 LaTeX，如 <code style="font-size:11px">E=mc^2</code>）</span></label>
        <textarea id="inContent" placeholder="在这里输入内容..."></textarea>

        <div class="desktop-only">
          <button class="btn" id="btnAdd">➕ 添加到末尾</button>
          <button class="btn secondary" id="btnUndo">↩ 撤销上一步</button>
          <button class="btn secondary" id="btnExport">📸 导出长图</button>
          <button class="btn secondary" id="btnSave">💾 导出备份</button>
          <button class="btn secondary" id="btnLoad">📂 导入备份</button>
          <button class="btn danger" id="btnClear">🗑 清空文档</button>
        </div>
        <input type="file" id="fileInput" accept=".json" style="display:none">

        <div class="hint">
          <b>用法：</b><br>
          1. <b>任意位置插入</b>：点到两块之间的 ➕<br>
          2. <b>修改</b>：点块上方 ✎ 原地编辑<br>
          3. <b>排序 / 复制 / 删除</b>：↑ ↓ ⧉ ✕<br>
          4. 编辑时 <code>Ctrl/⌘+Enter</code> 保存，<code>Esc</code> 取消<br>
          5. <b>图片</b>：选"图片"类型 → 点上传区 → 拖拽/粘贴/选择<br>
          6. 图片可改宽高、锁定比例、对齐方式<br>
          7. 标题直接选 H1/H2/H3，<b>不用写 #</b><br>
          8. 内容自动保存，刷新后仍在
        </div>
      </div>

      <div class="preview-wrap">
        <div id="preview">
          <h1 id="pvTitle">我的技术笔记</h1>
          <div class="subtitle" id="pvSubtitle">代码 · 文字 · 公式 混排</div>
          <div id="blocks"></div>
        </div>
      </div>

      <div class="mobile-bar" id="mobileBar">
        <button type="button" class="sec" id="mUndo"><span class="ic">↩</span>撤销</button>
        <button type="button" id="mAdd"><span class="ic">➕</span>追加</button>
        <button type="button" id="mExport"><span class="ic">📸</span>导出</button>
        <button type="button" class="sec" id="mMore"><span class="ic">⋯</span>更多</button>
      </div>

      <div class="toast" id="toast"></div>
    `;

    const ids = [
      'inTitle','inSubtitle','inType','inLang','inLevel','inGap','inGapCustom',
      'inLineHeight','inFontSize','inContent','fileInput','preview','pvTitle','pvSubtitle',
      'blocks','btnAdd','btnUndo','btnExport','btnSave','btnLoad','btnClear',
      'mUndo','mAdd','mExport','mMore','toast'
    ];
    el = {};
    ids.forEach(id => { el[id] = container.querySelector('#' + id); });
  }

  // ==================== 绑定事件 ====================
  function bindEvents() {
    el.btnAdd.onclick = addToEnd;
    el.btnUndo.onclick = undo;
    el.btnClear.onclick = clearAll;
    el.btnExport.onclick = exportImage;
    el.btnSave.onclick = exportBackup;
    el.btnLoad.onclick = () => el.fileInput.click();
    el.mExport.onclick = exportImage;

    el.fileInput.onchange = (e) => {
      const f = e.target.files[0];
      if (f) importBackup(f);
      e.target.value = '';
    };

    el.inTitle.oninput = () => {
      el.pvTitle.textContent = el.inTitle.value || ' ';
      autoSave();
    };
    el.inSubtitle.oninput = () => {
      el.pvSubtitle.textContent = el.inSubtitle.value || ' ';
      autoSave();
    };

    el.inGap.addEventListener('change', applySpacing);
    el.inGapCustom.addEventListener('input', applySpacing);
    el.inLineHeight.addEventListener('input', applySpacing);
    el.inFontSize.addEventListener('input', applySpacing);

    // 文字格式工具条
    containerQueryAll('#textTools [data-action]').forEach(btn => {
      btn.onclick = () => {
        const ta = el.inContent;
        const action = btn.dataset.action;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const val = ta.value;
        const selected = val.slice(start, end);
        let insert = '';
        switch (action) {
          case 'bold': insert = `**${selected || '加粗文字'}**`; break;
          case 'italic': insert = `*${selected || '斜体文字'}*`; break;
          case 'underline': insert = `<u>${selected || '下划线文字'}</u>`; break;
          case 'code': insert = `\`${selected || '行内代码'}\``; break;
          case 'clear':
            insert = selected
              .replace(/\*\*(.+?)\*\*/g, '$1')
              .replace(/\*(.+?)\*/g, '$1')
              .replace(/`(.+?)`/g, '$1')
              .replace(/<\/?u>/g, '')
              .replace(/^#+\s*/gm, '');
            break;
        }
        ta.value = val.slice(0, start) + insert + val.slice(end);
        ta.focus();
        ta.setSelectionRange(start + insert.length, start + insert.length);
      };
    });

    // 移动端底部条
    el.mUndo.onclick = undo;
    el.mAdd.onclick = () => {
      el.inContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => el.inContent.focus(), 350);
    };
    el.mMore.onclick = () => {
      const choice = prompt('选择操作：\n1. 导出备份\n2. 导入备份\n3. 清空文档\n\n输入序号：', '1');
      if (choice === '1') exportBackup();
      else if (choice === '2') el.btnLoad.click();
      else if (choice === '3') clearAll();
    };

    // 全局快捷键
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (e.target.classList && e.target.classList.contains('ie-content')) return;
        if (e.target === el.inContent) { e.preventDefault(); addToEnd(); }
      }
    });
  }

  // ==================== 初始化 ====================
  function init(container) {
    _container = typeof container === 'string'
      ? document.querySelector(container)
      : container;
    if (!_container) { console.error('[longimg] 容器未找到'); return; }

    buildUI(_container);
    bindEvents();
    loadSpacing();

    const draft = localStorage.getItem(DRAFT_KEY);
    if (draft) {
      try {
        const d = JSON.parse(draft);
        blocks = (d.blocks || []).map(b => ({
          id: b.id || newId(),
          type: b.type || 'text',
          lang: b.lang || 'python',
          level: b.level || 'p',
          content: b.content || '',
          width: b.width || 0,
          height: b.height || 0,
          align: b.align || 'center'
        }));
        if (d.title !== undefined) el.inTitle.value = d.title;
        if (d.subtitle !== undefined) el.inSubtitle.value = d.subtitle;
        el.pvTitle.textContent = el.inTitle.value || ' ';
        el.pvSubtitle.textContent = el.inSubtitle.value || ' ';
        renderBlocks();
        updateUndoBtn();
        return;
      } catch (e) {}
    }

    blocks = [
      { id: newId(), type: 'text', level: 'h2', content: '示例标题' },
      { id: newId(), type: 'text', level: 'p',
        content: '这是一个示例文档。行内公式可以这样写：$E = mc^2$，也支持 **加粗**、*斜体*、`行内代码`、<u>下划线</u>。' },
      { id: newId(), type: 'code', lang: 'python',
        content: `def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        a, b = b, a + b\n    return a\n\nprint([fib(i) for i in range(10)])` },
      { id: newId(), type: 'formula',
        content: '\\int_{0}^{\\infty} e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}' },
      { id: newId(), type: 'text', level: 'p',
        content: '以上就是全部示例。把手指点到块之间试试 ➕，块上方有 ↑ ↓ ✎ ⧉ ✕ 操作。图片块在下方工具栏的"块类型"里选。' }
    ];
    renderBlocks();
    updateUndoBtn();
  }

  // ==================== 对外暴露 ====================
  window.initLongImg = init;
  window.addEventListener('load', () => {
    document.querySelectorAll('[data-longimg]').forEach(node => {
      if (!node.__longimgInited) {
        node.__longimgInited = true;
        init(node);
      }
    });
  });

})();