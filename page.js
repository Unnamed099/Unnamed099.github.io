window.onload = function() {
  document.title = '稿纸';
  
  // 清空 body
  document.body.innerHTML = '';
  
  // 添加外部 CSS
  const katexCss = document.createElement('link');
  katexCss.rel = 'stylesheet';
  katexCss.href = `${window.FP}katex.min.css`;
  document.head.appendChild(katexCss);
  
  const styleCss = document.createElement('link');
  styleCss.rel = 'stylesheet';
  styleCss.href = `${window.FP}css/style.css`;
  document.head.appendChild(styleCss);
  
  // 添加图书馆风格样式
  const libraryStyle = document.createElement('style');
  libraryStyle.textContent = `
    :root {
      --wood-dark: #5d4037;
      --wood-medium: #8d6e63;
      --wood-light: #d7ccc8;
      --parchment: #f5e6c8;
      --ink: #3e2723;
      --gold: #c9a84c;
    }
    
    body {
      background: linear-gradient(135deg, #f5e6c8 0%, #efebe9 50%, #d7ccc8 100%);
      font-family: 'Georgia', '宋体', serif;
      color: var(--ink);
      min-height: 100vh;
    }
    
    .app-header {
      background: linear-gradient(to bottom, #4e342e 0%, #5d4037 100%);
      color: var(--parchment);
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 4px solid var(--gold);
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.4rem;
      font-weight: bold;
      letter-spacing: 2px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      color: var(--parchment);
    }
    
    .logo .icon {
      font-size: 1.8rem;
      opacity: 0.9;
    }
    
    .header-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      align-items: center;
    }
    
    .btn-header {
      padding: 8px 14px;
      border: 2px solid var(--wood-light);
      border-radius: 6px;
      background: var(--wood-medium);
      color: var(--parchment);
      cursor: pointer;
      font-size: 0.85rem;
      transition: all 0.3s;
      text-decoration: none;
      display: inline-block;
      white-space: nowrap;
      font-family: 'Georgia', '宋体', serif;
      letter-spacing: 1px;
    }
    
    .btn-header:hover {
      background: var(--wood-dark);
      border-color: var(--gold);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    
    .btn-header.active {
      background: var(--gold);
      color: var(--ink);
      border-color: var(--parchment);
      font-weight: bold;
    }
    
    .btn-home {
      background: #6d4c41;
      border-color: var(--gold);
    }
    
    .btn-home:hover {
      background: #4e342e;
    }
    
    .composer-container {
      max-width: 900px;
      margin: 20px auto;
      padding: 20px;
    }
    
    .composer-container h2 {
      color: var(--wood-dark);
      border-left: 5px solid var(--gold);
      padding-left: 15px;
      margin-bottom: 15px;
      letter-spacing: 1px;
    }
    
    .toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: 16px 0;
      padding: 15px;
      background: linear-gradient(to bottom, #8d6e63, #6d4c41);
      border-radius: 8px;
      border: 2px solid #5d4037;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    
    .btn {
      padding: 8px 14px;
      border: 2px solid var(--wood-light);
      border-radius: 6px;
      background: var(--parchment);
      color: var(--ink);
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Georgia', '宋体', serif;
      font-size: 0.85rem;
      letter-spacing: 1px;
      white-space: nowrap;
    }
    
    .btn:hover {
      background: var(--wood-dark);
      color: var(--parchment);
      border-color: var(--gold);
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    
    .btn.primary {
      background: var(--gold);
      border-color: var(--wood-dark);
      font-weight: bold;
      color: var(--ink);
    }
    
    .btn.primary:hover {
      background: #b8953a;
      color: var(--ink);
    }
    
    .btn.small {
      padding: 5px 10px;
      font-size: 0.75rem;
    }
    
    .row-item {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      padding: 12px;
      margin: 8px 0;
      background: #fffef8;
      border: 2px solid var(--wood-light);
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(62, 39, 35, 0.1);
    }
    
    .row-type-select {
      padding: 6px 10px;
      border: 2px solid var(--wood-light);
      border-radius: 4px;
      background: #fffef8;
      color: var(--ink);
      font-family: 'Georgia', serif;
    }
    
    .row-latex-input {
      flex: 1;
      min-width: 150px;
      padding: 8px 12px;
      border: 2px solid var(--wood-light);
      border-radius: 4px;
      font-family: monospace;
      font-size: 0.9rem;
      background: #fffef8;
      color: var(--ink);
    }
    
    .row-latex-input:focus {
      outline: none;
      border-color: var(--gold);
    }
    
    .row-symbol-btn {
      padding: 6px 10px;
      border: 2px solid var(--wood-light);
      border-radius: 4px;
      background: var(--parchment);
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s;
    }
    
    .row-symbol-btn:hover {
      background: var(--gold);
      border-color: var(--wood-dark);
      transform: translateY(-1px);
    }
    
    .row-preview {
      padding: 8px 12px;
      background: #faf3e0;
      border: 1px solid var(--wood-light);
      border-radius: 4px;
      font-size: 1.2rem;
      min-width: 60px;
      text-align: center;
      display: inline-block;
    }
    
    .row-delete-btn {
      background: #c0392b;
      color: white;
      border: 2px solid #922b21;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Georgia', serif;
    }
    
    .row-delete-btn:hover {
      background: #922b21;
      transform: translateY(-1px);
    }
    
    .output-canvas {
      display: block;
      margin: 20px auto;
      border: 3px solid var(--wood-medium);
      border-radius: 8px;
      background: #fffef8;
      max-width: 100%;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .font-control {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .font-control label {
      color: var(--parchment);
      font-size: 0.85rem;
    }
    
    .font-control input {
      width: 60px;
      padding: 5px 8px;
      border: 2px solid var(--wood-light);
      border-radius: 4px;
      background: #fffef8;
      color: var(--ink);
      font-family: 'Georgia', serif;
    }
    
    .font-control input:focus {
      outline: none;
      border-color: var(--gold);
    }
    
    #renderArea {
      position: absolute;
      left: -9999px;
      top: 0;
      background: #fffef8;
      padding: 10px;
      font-size: 24px;
    }
    
    .modal-popup {
      background: #fffef8;
      border: 3px solid var(--wood-medium);
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    
    .modal-popup-header {
      background: linear-gradient(to bottom, #4e342e, #5d4037);
      color: var(--parchment);
      border-bottom: 2px solid var(--gold);
    }
    
    .popup-search input {
      border: 2px solid var(--wood-light);
      background: #fffef8;
      color: var(--ink);
      font-family: 'Georgia', serif;
    }
    
    .popup-search input:focus {
      outline: none;
      border-color: var(--gold);
    }
  `;
  document.head.appendChild(libraryStyle);
  
  // 创建页面结构
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

    <div class="composer-container">
      <h2>📝 组合内容编辑</h2>
      <div class="toolbar">
        <button class="btn primary" id="btnAddLatexRow">➕ 公式行</button>
        <button class="btn" id="btnAddImageRow">🖼️ 图片行</button>
        <button class="btn" id="btnAddCanvasRow">🎨 画板行</button>
        <button class="btn" id="btnClearAllRows">🗑️ 清空</button>
        <button class="btn primary" id="btnGenerate">⚡ 生成图片</button>
        <button class="btn" id="btnExportData">📤 导出</button>
        <button class="btn" id="btnImportData">📥 导入</button>
        <div class="font-control">
          <label>字体：</label>
          <input type="number" id="fontSizeInput" value="24" min="12" max="72">
          <button class="btn small" id="btnApplyFontSize">应用</button>
        </div>
      </div>
      <div id="rowsContainer"></div>
      <h2>📊 合成预览</h2>
      <canvas id="outputCanvas" class="output-canvas" width="800" height="300"></canvas>
    </div>

    <div id="renderArea"></div>

    <!-- 符号面板 -->
    <div class="modal-overlay" id="modalOverlay"></div>
    <div class="modal-popup" id="symbolPopup">
      <div class="modal-popup-header">
        <h3>📊 符号面板</h3>
        <button id="symbolPopupClose">✕</button>
      </div>
      <div class="modal-popup-body">
        <div class="popup-categories" id="popupCategories"></div>
        <div class="popup-search"><input type="text" id="popupSearch" placeholder="搜索符号..."></div>
        <div class="popup-grid" id="popupGrid"></div>
      </div>
    </div>

    <div class="toast" id="toast"></div>
  `;
  
  document.body.appendChild(app);
  
  // 加载所有外部 JS 库
  const scripts = [
    `${window.FP}katex.min.js`,
    `${window.FP}html2canvas.min.js`,
    `${window.FP}data.js`,
    `${window.FP}js/composer-render.js`,
    `${window.FP}js/composer-storage.js`,
    `${window.FP}page_main.js`
  ];
  
  // 顺序加载脚本
  let index = 0;
  function loadNextScript() {
    if (index >= scripts.length) {
      console.log('✅ 所有脚本加载完成');
      return;
    }
    
    const script = document.createElement('script');
    script.src = scripts[index];
    script.onload = function() {
      console.log(`✅ 加载成功: ${scripts[index]}`);
      index++;
      loadNextScript();
    };
    script.onerror = function() {
      console.error(`❌ 加载失败: ${scripts[index]}`);
      index++;
      loadNextScript();
    };
    document.body.appendChild(script);
  }
  
  loadNextScript();
};