window.onload = function() {
  const params = new URLSearchParams(location.search);
  const tutorialId = params.get('tutorial');
  
  if (!tutorialId) { 
    document.body.innerHTML = '<h1>缺少教程ID</h1>'; 
    return; 
  }
  
  document.title = '加载中...';
  document.body.innerHTML = '';
  
  // KaTeX CSS
  const katexCss = document.createElement('link');
  katexCss.rel = 'stylesheet';
  katexCss.href = `${window.FP}katex.min.css`;
  document.head.appendChild(katexCss);
  
  // 完整样式
  const style = document.createElement('style');
  style.textContent = `
    /* ===== 基础重置 & 全局样式 ===== */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: linear-gradient(135deg, #f5e6c8, #efebe9, #d7ccc8);
      font-family: 'Georgia', '宋体', serif;
      color: #3e2723;
      min-height: 100vh;
      line-height: 1.8;
    }

    /* ===== 头部样式 ===== */
    .app-header {
      background: linear-gradient(to bottom, #4e342e, #5d4037);
      color: #f5e6c8;
      padding: 12px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 4px solid #c9a84c;
      flex-wrap: wrap;
      gap: 8px;
    }

    .logo {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .header-actions {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .btn-header {
      padding: 6px 12px;
      border: 1px solid #d7ccc8;
      border-radius: 4px;
      background: #8d6e63;
      color: #f5e6c8;
      cursor: pointer;
      font-size: 0.8rem;
      text-decoration: none;
      font-family: 'Georgia', serif;
      transition: background 0.2s;
    }

    .btn-header:hover {
      background: #5d4037;
    }

    /* ===== 容器 ===== */
    .container {
      max-width: 800px;
      margin: 20px auto;
      padding: 0 15px;
    }

    /* ===== 目录页样式 ===== */
    .toc-header {
      background: #fffef8;
      border: 3px solid #8d6e63;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
      text-align: center;
    }

    .toc-title {
      font-size: 1.5rem;
      color: #5d4037;
    }

    .chapter-title {
      font-size: 1.2rem;
      color: #5d4037;
      margin: 15px 0 8px;
      border-left: 4px solid #c9a84c;
      padding-left: 10px;
    }

    .subsection-list {
      list-style: none;
      padding: 0;
    }

    .subsection-item {
      background: #fffef8;
      border: 2px solid #d7ccc8;
      border-radius: 6px;
      padding: 10px 15px;
      margin: 6px 0;
      cursor: pointer;
      transition: all 0.3s;
      font-weight: bold;
      color: #5d4037;
    }

    .subsection-item:hover {
      border-color: #c9a84c;
      transform: translateX(5px);
      background: #faf3e0;
    }

    /* ===== 内容页样式 ===== */
    .content-header {
      background: #fffef8;
      border: 3px solid #8d6e63;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 15px;
      text-align: center;
    }

    .content-title {
      font-size: 1.2rem;
      color: #5d4037;
    }

    .section-card {
      background: #fffef8;
      border: 2px solid #d7ccc8;
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 15px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .section-content {
      font-size: 0.95rem;
    }

    /* ===== 内容元素样式 ===== */
    .section-content h3 {
      font-size: 1.1rem;
      color: #5d4037;
      margin: 15px 0 8px;
    }

    .section-content h4 {
      font-size: 1rem;
      color: #6d4c41;
      margin: 12px 0 6px;
    }

    .section-content p {
      margin: 8px 0;
    }

    .section-content ul,
    .section-content ol {
      margin: 8px 0 8px 25px;
    }

    .section-content li {
      margin: 4px 0;
    }

    .section-content img {
      max-width: 100%;
      border-radius: 6px;
      margin: 15px 0;
      border: 2px solid #d7ccc8;
    }

    /* ===== 公式块样式 ===== */
    .section-content .formula-block {
      background: #faf3e0;
      border: 2px solid #d7ccc8;
      border-radius: 6px;
      padding: 15px;
      margin: 15px 0;
      text-align: center;
      font-size: 1.1rem;
      overflow-x: auto;
      min-height: 40px;
    }

    .section-content .formula-inline {
      display: inline-block;
      padding: 0 4px;
    }

    .section-content .formula-block .katex-display {
      margin: 0;
    }

    /* ===== 笔记 & 示例框 ===== */
    .section-content .note {
      background: #e8f5e9;
      border-left: 4px solid #4caf50;
      padding: 12px 15px;
      margin: 15px 0;
      border-radius: 0 6px 6px 0;
    }

    .section-content .note strong {
      color: #2e7d32;
    }

    .section-content .example {
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
      padding: 12px 15px;
      margin: 15px 0;
      border-radius: 0 6px 6px 0;
    }

    .section-content .example strong {
      color: #0d47a1;
    }

    /* ===== 表格样式 ===== */
    .section-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 12px 0;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    }

    .section-content th {
      background: #e6f0fa;
      padding: 10px 12px;
      border-bottom: 2px solid #b0c9e0;
      text-align: left;
      font-weight: bold;
      color: #3e2723;
    }

    .section-content td {
      padding: 8px 12px;
      border-bottom: 1px solid #dde7f0;
      vertical-align: top;
    }

    .section-content tr:last-child td {
      border-bottom: none;
    }

    .section-content tr:hover td {
      background: #f5f9ff;
    }

    /* ===== 导航按钮 ===== */
    .nav-buttons {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      margin: 15px 0;
    }

    .nav-btn {
      padding: 10px 20px;
      border: 2px solid #8d6e63;
      border-radius: 6px;
      background: #fffef8;
      color: #5d4037;
      cursor: pointer;
      font-size: 0.9rem;
      font-family: 'Georgia', serif;
      transition: all 0.2s;
      flex: 1;
      max-width: 200px;
      text-align: center;
    }

    .nav-btn:hover:not(:disabled) {
      background: #8d6e63;
      color: #f5e6c8;
    }

    .nav-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .section-indicator {
      text-align: center;
      font-size: 0.8rem;
      color: #666;
      margin: 10px 0;
    }

    .btn-back-toc {
      display: block;
      margin: 10px auto;
      padding: 8px 16px;
      border: 2px solid #8d6e63;
      border-radius: 6px;
      background: #fffef8;
      color: #5d4037;
      cursor: pointer;
      font-size: 0.85rem;
      font-family: 'Georgia', serif;
      transition: all 0.2s;
    }

    .btn-back-toc:hover {
      background: #8d6e63;
      color: #f5e6c8;
    }

    /* ===== 响应式调整 ===== */
    @media (max-width: 600px) {
      .app-header {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
      }

      .header-actions {
        justify-content: center;
      }

      .container {
        padding: 0 10px;
      }

      .section-card {
        padding: 15px;
      }

      .nav-buttons {
        flex-direction: column;
        align-items: center;
      }

      .nav-btn {
        max-width: 100%;
        width: 100%;
      }

      .subsection-item {
        font-size: 0.9rem;
        padding: 8px 12px;
      }

      .section-content table {
        font-size: 0.85rem;
      }

      .section-content th,
      .section-content td {
        padding: 6px 8px;
      }
    }

    /* ===== 打印样式 ===== */
    @media print {
      .app-header,
      .nav-buttons,
      .btn-back-toc,
      .section-indicator {
        display: none !important;
      }

      body {
        background: white;
      }

      .section-card {
        border: 1px solid #ccc;
        box-shadow: none;
        page-break-inside: avoid;
      }

      .content-header {
        border: 1px solid #ccc;
      }
    }

    /* ===== 滚动条美化 ===== */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #efebe9;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background: #8d6e63;
      border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #5d4037;
    }

    /* ===== 加载提示 ===== */
    .loading-text {
      text-align: center;
      padding: 40px;
      color: #5d4037;
      font-size: 1.1rem;
    }
  `;
  document.head.appendChild(style);
  
  // 加载 KaTeX
  const katexScript = document.createElement('script');
  katexScript.src = `${window.FP}katex.min.js`;
  katexScript.onload = function() {
    // 加载目录数据
    const catalogScript = document.createElement('script');
    catalogScript.src = `${window.FP}book/catalog.js`;
    catalogScript.onload = function() {
      initTutorial(tutorialId);
    };
    catalogScript.onerror = function() {
      document.body.innerHTML = `<h1>目录数据加载失败: ${catalogScript.src}</h1>`;
    };
    document.head.appendChild(catalogScript);
  };
  katexScript.onerror = function() {
    document.body.innerHTML = '<h1>KaTeX 加载失败</h1>';
  };
  document.head.appendChild(katexScript);
};

function initTutorial(tutorialId) {
  const catalog = window.TUTORIAL_CATALOG;
  
  if (!catalog) {
    document.body.innerHTML = '<h1>目录数据未加载</h1>';
    return;
  }
  
  const tutorial = catalog.getTutorial(tutorialId);
  
  if (!tutorial) {
    document.body.innerHTML = `<h1>教程不存在: ${tutorialId}</h1>`;
    return;
  }
  
  document.title = `${tutorial.title} - 物理菜鸟`;
  document.body.innerHTML = '';
  
  const app = document.createElement('div');
  app.innerHTML = `
    <header class="app-header">
      <div class="logo">${tutorial.icon || '📖'} 物理菜鸟</div>
      <div class="header-actions">
        <a class="btn-header" href="?file=home.js">🏠 首页</a>
        <a class="btn-header" href="?file=phy.js">🧮 计算器</a>
        <a class="btn-header" href="?file=page.js">🎨 图文合成器</a>
      </div>
    </header>
    <div class="container" id="container">
      <div class="loading-text">📚 加载中...</div>
    </div>
  `;
  document.body.appendChild(app);
  
  const container = document.getElementById('container');
  
  // 扁平化所有小节
  const flatSections = [];
  tutorial.chapters.forEach(chapter => {
    chapter.subsections.forEach(sub => {
      flatSections.push({
        chapterTitle: chapter.title,
        title: sub.title,
        file: sub.file
      });
    });
  });
  
  // 显示目录
  function showTOC() {
    let html = `
      <div class="toc-header">
        <h1 class="toc-title">${tutorial.icon || ''} ${tutorial.title}</h1>
        <p style="color: #6d4c41; font-size: 0.9rem; margin-top: 5px;">${tutorial.description || ''}</p>
      </div>
    `;
    
    tutorial.chapters.forEach(chapter => {
      html += `<h2 class="chapter-title">${chapter.title}</h2>`;
      html += `<ul class="subsection-list">`;
      chapter.subsections.forEach(sub => {
        const flatIndex = flatSections.findIndex(s => s.file === sub.file);
        html += `<li class="subsection-item" data-index="${flatIndex}">${sub.title}</li>`;
      });
      html += `</ul>`;
    });
    
    container.innerHTML = html;
    
    container.querySelectorAll('.subsection-item').forEach(item => {
      item.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        loadSectionContent(index);
      });
    });
  }
  
  // 加载小节内容
  function loadSectionContent(index) {
    const section = flatSections[index];
    if (!section) return;
    
    container.innerHTML = '<div class="loading-text">📖 加载章节内容...</div>';
    
    // 清除之前加载的 SECTION_CONTENT
    delete window.SECTION_CONTENT;
    
    const sectionScript = document.createElement('script');
    sectionScript.src = window.FP +''+ section.file;
    sectionScript.onload = function() {
      const content = window.SECTION_CONTENT || '<p style="color: #c62828;">⚠️ 内容加载失败或为空</p>';
      renderContent(index, content);
    };
    sectionScript.onerror = function() {
      container.innerHTML = `
        <div class="section-card" style="text-align:center;padding:40px;">
          <h3 style="color:#c62828;">❌ 内容加载失败</h3>
          <p style="color:#666;margin-top:10px;">！无法加载文件：${sectionScript.src}</p>
          <button class="btn-back-toc" onclick="document.querySelector('#container') && showTOC()">📑 返回目录</button>
        </div>
      `;
    };
    document.head.appendChild(sectionScript);
  }
  
  // 渲染内容
  function renderContent(index, contentHTML) {
    const section = flatSections[index];
    
    container.innerHTML = `
      <div class="content-header">
        <h2 class="content-title">${section.title}</h2>
        <p style="font-size:0.8rem;color:#6d4c41;margin-top:4px;">${section.chapterTitle}</p>
      </div>
      <div class="section-card">
        <div class="section-content">${contentHTML}</div>
      </div>
      <div class="section-indicator">${index + 1} / ${flatSections.length}</div>
      <div class="nav-buttons">
        <button class="nav-btn" id="btnPrev">⬅️ 上一节</button>
        <button class="nav-btn" id="btnNext">下一节 ➡️</button>
      </div>
      <button class="btn-back-toc" id="btnBackToc">📑 返回目录</button>
    `;
    
    document.getElementById('btnPrev').disabled = index === 0;
    document.getElementById('btnNext').disabled = index === flatSections.length - 1;
    
    document.getElementById('btnPrev').addEventListener('click', function() {
      if (index > 0) loadSectionContent(index - 1);
    });
    
    document.getElementById('btnNext').addEventListener('click', function() {
      if (index < flatSections.length - 1) loadSectionContent(index + 1);
    });
    
    document.getElementById('btnBackToc').addEventListener('click', showTOC);
    
    // 渲染 KaTeX 公式
    renderFormulas(container);
    window.scrollTo(0, 0);
  }
  
  // 渲染 KaTeX 公式
  function renderFormulas(root) {
    if (!window.katex) return;
    
    // 渲染块级公式
    root.querySelectorAll('.formula-block').forEach(el => {
      const latex = el.getAttribute('data-latex');
      if (latex) {
        try {
          katex.render(latex, el, { 
            displayMode: true, 
            throwOnError: false,
            trust: true
          });
        } catch (err) {
          console.warn('KaTeX渲染错误:', err);
          el.textContent = latex;
        }
      }
    });
    
    // 渲染行内公式
    root.querySelectorAll('.formula-inline').forEach(el => {
      const latex = el.getAttribute('data-latex');
      if (latex) {
        try {
          katex.render(latex, el, { 
            displayMode: false, 
            throwOnError: false,
            trust: true
          });
        } catch (err) {
          console.warn('KaTeX渲染错误:', err);
          el.textContent = latex;
        }
      }
    });
  }
  
  // 将 showTOC 暴露到全局，以便错误处理时调用
  window.showTOC = showTOC;
  
  showTOC();
}