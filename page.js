window.onload = function () {
  document.title = '稿纸';

  // 清空 body
  document.body.innerHTML = '';

  // ---------- 1. 外部 CSS ----------
  const katexCss = document.createElement('link');
  katexCss.rel = 'stylesheet';
  katexCss.href = `${window.FP}katex.min.css`;
  document.head.appendChild(katexCss);

  const styleCss = document.createElement('link');
  styleCss.rel = 'stylesheet';
  styleCss.href = `${window.FP}css/style.css`;
  document.head.appendChild(styleCss);

  const longimgCss = document.createElement('link');
  longimgCss.rel = 'stylesheet';
  longimgCss.href = `${window.FP}css/longimg.css`;
  document.head.appendChild(longimgCss);

  // ---------- 2. 页面骨架 ----------
  const app = document.createElement('div');
  app.innerHTML = `
    <header class="app-header">
      <div class="logo"><span class="icon">🎨</span><span>稿纸</span></div>
      <div class="header-actions">
        <a class="btn-header btn-home" href="?file=${window.FP}home.js" style="text-decoration:none;">🏠 首页</a>
        <a class="btn-header" href="?file=${window.FP}phy.js" style="text-decoration:none;">🧮 计算器</a>
        <a class="btn-header active" href="?file=${window.FP}page.js" style="text-decoration:none;">🎨 图文合成器</a>
        <button class="btn-header" id="btnDownload">⬇️ 下载图片</button>
      </div>
    </header>
    <div id="app-longimg"></div>
  `;
  document.body.appendChild(app);

  // ---------- 3. 库加载顺序 ----------
  const scripts = [
    `${window.FP}katex.min.js`,
    `${window.FP}html2canvas.min.js`,
    `${window.FP}js/longimg.js`
  ];

  let index = 0;
  function loadNext() {
    if (index >= scripts.length) {
      // 全部加载完毕 → 挂载
      const container = document.getElementById('app-longimg');
      if (typeof window.initLongImg === 'function') {
        window.initLongImg(container);
      } else {
        container.innerHTML = '<p style="padding:20px;color:#c0392b">❌ longimg.js 未加载成功，请检查路径</p>';
      }
      return;
    }
    const s = document.createElement('script');
    s.src = scripts[index];
    s.onload = () => { index++; loadNext(); };
    s.onerror = () => {
      console.error('❌ 加载失败:', scripts[index]);
      index++;
      loadNext();
    };
    document.body.appendChild(s);
  }
  loadNext();

  // ---------- 4. 下载按钮 ----------
  // 挂在 document 上，因为 #btnDownload 在 initLongImg 之后才存在事件
  document.addEventListener('click', e => {
    if (e.target && e.target.id === 'btnDownload') {
      const btn = document.getElementById('btnExport');
      if (btn) btn.click();
    }
  });
};