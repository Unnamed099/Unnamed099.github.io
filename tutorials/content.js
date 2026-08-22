window.onload = function() {
  const params = new URLSearchParams(location.search);
  const dataFile = params.get('data');
  
  if (!dataFile) {
    document.body.innerHTML = '<h1>缺少 data 参数</h1>';
    return;
  }
  
  document.title = '加载中...';
  document.body.innerHTML = '';
  
  // 固定 CSS
  const style = document.createElement('style');
  style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    
    body {
      background: linear-gradient(135deg, #f5e6c8 0%, #efebe9 50%, #d7ccc8 100%);
      font-family: 'Georgia', '宋体', serif;
      color: #3e2723;
      min-height: 100vh;
      line-height: 1.8;
    }
    
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
    
    .logo { font-size: 1.2rem; font-weight: bold; letter-spacing: 1px; }
    
    .header-actions { display: flex; gap: 6px; flex-wrap: wrap; }
    
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
    }
    
    .btn-header:hover { background: #5d4037; border-color: #c9a84c; }
    
    .content-container {
      max-width: 800px;
      margin: 20px auto;
      padding: 0 15px;
    }
    
    .content-header {
      background: #fffef8;
      border: 3px solid #8d6e63;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
      text-align: center;
    }
    
    .content-title { font-size: 1.5rem; color: #5d4037; }
    .content-subtitle { font-size: 0.85rem; color: #666; font-style: italic; }
    
    .section-card {
      background: #fffef8;
      border: 2px solid #d7ccc8;
      border-radius: 6px;
      padding: 20px;
      margin-bottom: 15px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .section-title {
      font-size: 1.1rem;
      color: #5d4037;
      border-bottom: 2px solid #c9a84c;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    
    .section-content {
      font-size: 0.9rem;
      color: #3e2723;
    }
    
    .section-content h3 {
      font-size: 1rem;
      color: #5d4037;
      margin: 12px 0 6px;
    }
    
    .section-content p {
      margin: 6px 0;
    }
    
    .section-content ul {
      margin: 6px 0 6px 20px;
    }
    
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
      transition: all 0.3s;
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
  `;
  document.head.appendChild(style);
  
  // 加载教程数据文件
  const dataScript = document.createElement('script');
  dataScript.src = dataFile;
  dataScript.onload = function() {
    renderContent();
  };
  dataScript.onerror = function() {
    document.body.innerHTML = `<h1>数据加载失败：${dataFile}</h1>`;
  };
  document.head.appendChild(dataScript);
};

function renderContent() {
  const data = window.TUTORIAL_DATA;
  
  if (!data) {
    document.body.innerHTML = '<h1>教程数据未找到</h1>';
    return;
  }
  
  document.title = `${data.title} - 格物志`;
  document.body.innerHTML = '';
  
  // 创建页面
  const app = document.createElement('div');
  app.innerHTML = `
    <header class="app-header">
      <div class="logo">${data.icon || '📖'} 格物志</div>
      <div class="header-actions">
        <a class="btn-header" href="?file=library.js">🏠 首页</a>
        <a class="btn-header" href="?file=home.js">🧮 计算器</a>
        <a class="btn-header" href="?file=page.js">🎨 图文合成器</a>
      </div>
    </header>
    
    <div class="content-container">
      <div class="content-header">
        <h1 class="content-title">${data.icon || ''} ${data.title}</h1>
        ${data.subtitle ? `<p class="content-subtitle">${data.subtitle}</p>` : ''}
      </div>
      
      <div id="sectionDisplay"></div>
      
      <div class="section-indicator" id="sectionIndicator"></div>
      
      <div class="nav-buttons">
        <button class="nav-btn" id="btnPrev">⬅️ 上一节</button>
        <button class="nav-btn" id="btnNext">下一节 ➡️</button>
      </div>
    </div>
  `;
  document.body.appendChild(app);
  
  // 当前小节索引
  let currentIndex = 0;
  const sections = data.sections || [];
  
  if (sections.length === 0) {
    document.getElementById('sectionDisplay').innerHTML = '<p>暂无内容</p>';
    return;
  }
  
  // 显示小节
  function showSection(index) {
    const section = sections[index];
    const display = document.getElementById('sectionDisplay');
    
    display.innerHTML = `
      <div class="section-card">
        <h2 class="section-title">${section.title}</h2>
        <div class="section-content">${section.content || ''}</div>
      </div>
    `;
    
    // 更新指示器
    document.getElementById('sectionIndicator').textContent = 
      `${index + 1} / ${sections.length}`;
    
    // 更新按钮状态
    document.getElementById('btnPrev').disabled = index === 0;
    document.getElementById('btnNext').disabled = index === sections.length - 1;
    
    // 更新标题
    document.title = `${section.title} - ${data.title} - 格物志`;
    
    // 滚动到顶部
    window.scrollTo(0, 0);
  }
  
  // 按钮事件
  document.getElementById('btnPrev').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
      showSection(currentIndex);
    }
  });
  
  document.getElementById('btnNext').addEventListener('click', function() {
    if (currentIndex < sections.length - 1) {
      currentIndex++;
      showSection(currentIndex);
    }
  });
  
  // 显示第一节
  showSection(0);
  
  console.log('✅ 教程内容渲染完成');
}