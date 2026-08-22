
window.onload = function() {
  document.title = '格物志';
  document.body.innerHTML = '';
  
  const style = document.createElement('style');
  style.textContent = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: linear-gradient(135deg, #f5e6c8, #efebe9, #d7ccc8);
      font-family: 'Georgia', '宋体', serif;
      color: #3e2723;
      min-height: 100vh;
    }
    .library-header {
      background: linear-gradient(to bottom, #4e342e, #5d4037);
      color: #f5e6c8;
      padding: 20px;
      text-align: center;
      border-bottom: 4px solid #c9a84c;
    }
    .library-title { font-size: 1.8rem; font-weight: bold; letter-spacing: 2px; }
    .library-subtitle { font-size: 0.85rem; opacity: 0.8; font-style: italic; margin-top: 5px; }
    .library-nav { background: #6d4c41; padding: 10px; text-align: center; }
    .library-nav a {
      color: #f5e6c8; text-decoration: none; margin: 0 10px;
      padding: 6px 12px; border-radius: 4px; font-size: 0.9rem;
    }
    .library-nav a:hover { background: #8d6e63; }
    .shelf-section { max-width: 1200px; margin: 20px auto; padding: 0 15px; }
    .shelf-title {
      font-size: 1.2rem; color: #5d4037;
      border-left: 4px solid #c9a84c;
      padding-left: 10px; margin-bottom: 10px;
    }
    .bookshelf {
      background: linear-gradient(to bottom, #8d6e63, #6d4c41);
      padding: 15px 12px; border-radius: 6px;
      border: 2px solid #5d4037;
    }
    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
      gap: 10px;
    }
    .book-card {
      background: #fffef8; border-radius: 4px; padding: 10px 8px;
      cursor: pointer; border: 1px solid #d7ccc8;
      text-align: center; transition: all 0.3s;
    }
    .book-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.25);
      border-color: #c9a84c;
    }
    .book-icon { font-size: 1.5rem; display: block; margin-bottom: 5px; }
    .book-title { font-size: 0.8rem; font-weight: bold; margin: 5px 0; }
    .book-desc { font-size: 0.65rem; color: #666; }
  `;
  document.head.appendChild(style);
  
  const script = document.createElement('script');
  script.src = `${window.FP}book/catalog.js`;
  script.onload = function() { renderCatalog(); };
  script.onerror = function() { document.body.innerHTML = '<h1>目录数据加载失败</h1>'; };
  document.head.appendChild(script);
};

function renderCatalog() {
  const catalog = window.TUTORIAL_CATALOG;
  if (!catalog) { document.body.innerHTML = '<h1>目录数据未找到</h1>'; return; }
  
  const app = document.createElement('div');
  app.innerHTML = `
    <header class="library-header">
      <h1 class="library-title">📚 格物志</h1>
      <p class="library-subtitle">Nature is written in mathematical language</p>
    </header>
    <nav class="library-nav">
      <a href="?file=home.js">🧮 计算器</a>
      <a href="?file=page.js">🎨 图文合成器</a>
    </nav>
    <div id="shelvesContainer"></div>
  `;
  document.body.appendChild(app);
  
  const container = document.getElementById('shelvesContainer');
  
  catalog.categories.forEach(category => {
    const section = document.createElement('div');
    section.className = 'shelf-section';
    section.innerHTML = `
      <h2 class="shelf-title">${category.icon} ${category.name}</h2>
      <div class="bookshelf">
        <div class="books-grid">
          ${category.tutorials.map(t => `
            <div class="book-card" data-tutorial-id="${t.id}">
              <span class="book-icon">${t.icon}</span>
              <div class="book-title">${t.title}</div>
              <div class="book-desc">${t.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    container.appendChild(section);
  });
  
  document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', function() {
      const tutorialId = this.getAttribute('data-tutorial-id');
      location.href = `?file=content.js&tutorial=${tutorialId}`;
    });
  });
}