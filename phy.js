window.onload = function() {
  document.title = '稿纸计算器';
  
  // 清空 body
  document.body.innerHTML = '';
  
  // 添加外部资源（CSS）
  const katexCss = document.createElement('link');
  katexCss.rel = 'stylesheet';
  katexCss.href = `${window.FP}katex.min.css`;
  document.head.appendChild(katexCss);
  
  const styleCss = document.createElement('link');
  styleCss.rel = 'stylesheet';
  styleCss.href = `${window.FP}css/style.css`;
  document.head.appendChild(styleCss);
  
  // 添加图书馆风格导航
  const navStyle = document.createElement('style');
  navStyle.textContent = `
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
    
    .container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
    }
    
    .main-input-area textarea {
      width: 100%;
      padding: 15px;
      border: 3px solid var(--wood-medium);
      border-radius: 8px;
      background: #fffef8;
      color: var(--ink);
      font-family: 'Georgia', serif;
      font-size: 1.1rem;
      min-height: 80px;
      box-shadow: 0 4px 12px rgba(62, 39, 35, 0.15);
    }
    
    .main-input-area textarea:focus {
      outline: none;
      border-color: var(--gold);
      box-shadow: 0 0 15px rgba(201, 168, 76, 0.3);
    }
    
    .preview-area {
      background: #fffef8;
      border: 3px solid var(--wood-light);
      border-radius: 8px;
      padding: 20px;
      margin: 15px 0;
      min-height: 60px;
      box-shadow: 0 4px 12px rgba(62, 39, 35, 0.15);
    }
    
    .tool-card {
      background: #fffef8;
      border: 2px solid var(--wood-light);
      border-radius: 8px;
      margin-bottom: 10px;
      box-shadow: 0 2px 8px rgba(62, 39, 35, 0.1);
    }
    
    .tool-card-header {
      background: linear-gradient(to bottom, #8d6e63, #6d4c41);
      color: var(--parchment);
      padding: 10px 15px;
      border-radius: 6px 6px 0 0;
      cursor: pointer;
      font-weight: bold;
      letter-spacing: 1px;
    }
    
    .tool-card-body {
      padding: 15px;
    }
    
    .btn {
      padding: 8px 14px;
      border: 2px solid var(--wood-medium);
      border-radius: 6px;
      background: var(--wood-light);
      color: var(--ink);
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Georgia', '宋体', serif;
    }
    
    .btn:hover {
      background: var(--wood-medium);
      color: var(--parchment);
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    
    .btn.primary {
      background: var(--gold);
      border-color: var(--wood-dark);
      font-weight: bold;
    }
    
    .btn.primary:hover {
      background: #b8953a;
    }
    
    .result-box {
      background: #faf3e0;
      border: 1px solid var(--wood-light);
      border-radius: 4px;
      padding: 8px 12px;
      color: var(--ink);
      font-family: monospace;
    }
    
    .row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin: 8px 0;
    }
    
    .label {
      color: var(--wood-dark);
      font-weight: bold;
    }
    
    input[type="number"],
    input[type="text"],
    select {
      padding: 6px 10px;
      border: 2px solid var(--wood-light);
      border-radius: 4px;
      background: #fffef8;
      color: var(--ink);
      font-family: 'Georgia', serif;
    }
    
    input:focus,
    select:focus {
      outline: none;
      border-color: var(--gold);
    }
    
    .symbol-float-btn {
      background: var(--gold);
      color: var(--ink);
      border: 2px solid var(--wood-dark);
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }
    
    .symbol-float-btn:hover {
      background: #b8953a;
      transform: translateY(-3px);
    }
  `;
  document.head.appendChild(navStyle);
  
  // 创建页面结构
  const app = document.createElement('div');
  app.innerHTML = `
    <header class="app-header">
      <div class="logo"><span class="icon">∑</span><span>稿纸计算器</span></div>
      <div class="header-actions">
        <a class="btn-header btn-home" href="?file=${window.FP}home.js" style="text-decoration:none;">🏠 首页</a>
        <a class="btn-header active" href="?file=${window.FP}phy.js" style="text-decoration:none;">🧮 计算器</a>
        <a class="btn-header" href="?file=${window.FP}page.js" style="text-decoration:none;">🎨 图文合成器</a>
        <button class="btn-header" id="btnCopyLatex">📋 复制</button>
        <button class="btn-header" id="btnClearAll">🗑️ 清空</button>
        <button class="btn-header" id="btnExample">📐 示例</button>
      </div>
    </header>

    <div class="container">
      <div class="main-input-area">
        <textarea id="mainInput" placeholder="在此输入 LaTeX 公式..." spellcheck="false"></textarea>
      </div>
      <div class="preview-area" id="previewArea">
        <span class="preview-empty">📝 上方输入后此处显示渲染结果</span>
      </div>

      <div class="tools-container" id="toolsContainer">
        <!-- 数值计算 -->
        <div class="tool-card" data-tool="calc">
          <div class="tool-card-header"><span class="title">🧮 数值计算</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <div class="row"><span class="label">解析表达式：</span><code id="calcExprDisplay" class="result-box" style="flex:1;">—</code></div>
            <div id="calcVarsArea" class="row"></div>
            <div class="row">
              <button class="btn primary" id="btnCalculate">🧮 计算</button>
              <span class="label">结果：</span><span id="calcResultDisplay" class="result-box" style="font-size:1.2rem;">—</span>
            </div>
            <div id="calcError" class="error-box"></div>
          </div></div>
        </div>

        <!-- 向量可视化 -->
        <div class="tool-card" data-tool="vector">
          <div class="tool-card-header"><span class="title">📐 向量可视化</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入向量，如：\\begin{pmatrix}3 \\\\ 2\\end{pmatrix}</p>
            <div class="row">
              <button class="btn" id="btnDrawVector">🎨 绘制向量</button>
              <label><input type="checkbox" id="vectorGrid" checked> 显示网格</label>
            </div>
            <div id="vectorCanvasContainer"></div>
          </div></div>
        </div>

        <!-- 函数绘图 -->
        <div class="tool-card" data-tool="plot">
          <div class="tool-card-header"><span class="title">📈 函数绘图</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入函数，如：x^2 或 \\sin(x)</p>
            <div class="row">
              <span class="label">x 范围：</span>
              <input type="number" id="xMin" value="-5"> <span>到</span>
              <input type="number" id="xMax" value="5">
              <button class="btn" id="btnPlot">📈 绘图</button>
              <label><input type="checkbox" id="plotGrid" checked> 网格</label>
            </div>
            <div id="plotCanvasContainer"></div>
          </div></div>
        </div>

        <!-- 数值积分 -->
        <div class="tool-card" data-tool="integral">
          <div class="tool-card-header"><span class="title">∫ 数值积分</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入被积函数，如：x^2</p>
            <div class="row">
              <span class="label">下限 a：</span><input type="number" id="intLower" value="0">
              <span class="label">上限 b：</span><input type="number" id="intUpper" value="1">
              <button class="btn" id="btnIntegrate">∫ 计算</button>
            </div>
            <div id="integralResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- 多重积分 -->
        <div class="tool-card" data-tool="multi-integral">
          <div class="tool-card-header"><span class="title">∫∫ 多重积分</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入函数，如：x*y 或 x*y*z</p>
            <div class="row">
              <span class="label">类型：</span>
              <select id="multiIntType">
                <option value="double">二重积分</option>
                <option value="triple">三重积分</option>
              </select>
            </div>
            <div class="row" id="doubleIntBounds">
              <span class="label">x:</span><input type="number" id="ax" value="0"><span>到</span><input type="number" id="bx" value="1">
              <span class="label">y:</span><input type="number" id="ay" value="0"><span>到</span><input type="number" id="by" value="1">
            </div>
            <div class="row" id="tripleIntBounds" style="display:none;">
              <span class="label">x:</span><input type="number" id="tax" value="0"><span>到</span><input type="number" id="tbx" value="1">
              <span class="label">y:</span><input type="number" id="tay" value="0"><span>到</span><input type="number" id="tby" value="1">
              <span class="label">z:</span><input type="number" id="taz" value="0"><span>到</span><input type="number" id="tbz" value="1">
            </div>
            <button class="btn" id="btnMultiIntegrate">∫∫ 计算</button>
            <div id="multiIntegralResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- 数值求导 -->
        <div class="tool-card" data-tool="derivative">
          <div class="tool-card-header"><span class="title">∂ 数值求导</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入函数，如：x^2</p>
            <div class="row">
              <span class="label">求导点 x：</span><input type="number" id="derivPoint" value="1">
              <span class="label">方法：</span>
              <select id="derivMethod">
                <option value="central">中心差分</option>
                <option value="forward">前向差分</option>
                <option value="backward">后向差分</option>
                <option value="fivePoint">五点法</option>
              </select>
              <button class="btn" id="btnDerivative">∂ 求导</button>
            </div>
            <div id="derivativeResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- 矩阵运算 -->
        <div class="tool-card" data-tool="matrix">
          <div class="tool-card-header"><span class="title">🔢 矩阵运算</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入矩阵：\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}</p>
            <div class="row">
              <button class="btn" data-matrix-op="transpose">Aᵀ</button>
              <button class="btn" data-matrix-op="det">det(A)</button>
              <button class="btn" data-matrix-op="inverse">A⁻¹</button>
              <button class="btn" data-matrix-op="trace">tr(A)</button>
            </div>
            <div id="matrixResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- 特征值 -->
        <div class="tool-card" data-tool="eigen">
          <div class="tool-card-header"><span class="title">📊 特征值</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入矩阵：\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}</p>
            <button class="btn" id="btnEigen">计算特征值</button>
            <div id="eigenResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- LU 分解 -->
        <div class="tool-card" data-tool="lu">
          <div class="tool-card-header"><span class="title">🧩 LU 分解</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入矩阵：\\begin{pmatrix}2&1\\\\6&8\\end{pmatrix}</p>
            <button class="btn" id="btnLU">分解</button>
            <div id="luResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- ODE -->
        <div class="tool-card" data-tool="ode">
          <div class="tool-card-header"><span class="title">📉 ODE 求解</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入 dy/dx，如：y</p>
            <div class="row">
              <span class="label">x0：</span><input type="number" id="odeX0" value="0">
              <span class="label">y0：</span><input type="number" id="odeY0" value="1">
              <span class="label">xEnd：</span><input type="number" id="odeXEnd" value="1">
              <select id="odeMethod">
                <option value="rk4">RK4</option>
                <option value="euler">欧拉</option>
                <option value="heun">改进欧拉</option>
                <option value="rk45">RK45</option>
              </select>
              <button class="btn" id="btnODE">求解</button>
            </div>
            <div id="odeResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- PDE -->
        <div class="tool-card" data-tool="pde">
          <div class="tool-card-header"><span class="title">📊 PDE 求解</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">支持热传导、波动方程、泊松方程</p>
            <div class="row">
              <span class="label">方程类型：</span>
              <select id="pdeType">
                <option value="heat">热传导 u_t = α u_xx</option>
                <option value="wave">波动方程 u_tt = c² u_xx</option>
                <option value="poisson">泊松方程 ∇²u = f</option>
              </select>
            </div>
            <div class="row">
              <span class="label">初始条件：</span><input type="text" id="pdeInitial" value="sin(pi*x)" style="flex:1;">
            </div>
            <div class="row">
              <span class="label">系数：</span><input type="number" id="pdeCoeff" value="0.1" step="0.01">
              <span class="label">时间 T：</span><input type="number" id="pdeTMax" value="1" step="0.1">
              <span class="label">nx：</span><input type="number" id="pdeNx" value="30">
              <span class="label">nt：</span><input type="number" id="pdeNt" value="50">
              <button class="btn" id="btnPDESolve">求解</button>
            </div>
            <div id="pdeResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- 插值 -->
        <div class="tool-card" data-tool="interpolation">
          <div class="tool-card-header"><span class="title">📈 插值</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入数据点矩阵：\\begin{pmatrix}0 & 0 \\\\ 1 & 1 \\\\ 2 & 4\\end{pmatrix}</p>
            <div class="row">
              <span class="label">插值点 x：</span><input type="number" id="interpX" value="1.5">
              <span class="label">方法：</span>
              <select id="interpMethod">
                <option value="lagrange">拉格朗日</option>
                <option value="newton">牛顿</option>
                <option value="cubicSpline">三次样条</option>
                <option value="piecewiseLinear">分段线性</option>
              </select>
              <button class="btn" id="btnInterp">计算</button>
            </div>
            <div id="interpResult" class="result-box">结果：—</div>
          </div></div>
        </div>

        <!-- 表达式生成向量 -->
        <div class="tool-card" data-tool="expr-vector">
          <div class="tool-card-header"><span class="title">📐 表达式生成向量</span><span class="toggle-icon">▼</span></div>
          <div class="tool-card-body"><div class="tool-card-content">
            <p class="hint">在主输入框输入函数，如：x^2，生成 x 和 y 向量</p>
            <div class="row">
              <span class="label">x 范围：</span>
              <input type="number" id="evXMin" value="0"> <span>到</span>
              <input type="number" id="evXMax" value="4">
              <span class="label">点数：</span>
              <input type="number" id="evCount" value="5">
              <button class="btn" id="btnGenVector">生成向量</button>
            </div>
            <div id="evResult" class="result-box">结果：—</div>
          </div></div>
        </div>
      </div>
    </div>

    <button class="symbol-float-btn" id="symbolFloatBtn" title="打开符号面板">∑</button>
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
  

const scripts = [
  `${window.FP}katex.min.js`,
  `${window.FP}math.js`,
  `${window.FP}data.js`,
  `${window.FP}tool/brace-parser.js`,
  `${window.FP}tool/token-classifier.js`,
  `${window.FP}tool/latex-parser.js`,
  `${window.FP}tool/expression-vector.js`,
  `${window.FP}tool/vector-visualizer.js`,
  `${window.FP}math/numerical-integration.js`,
  `${window.FP}math/numerical-differentiation.js`,
  `${window.FP}math/matrix-operations.js`,
  `${window.FP}math/eigen.js`,
  `${window.FP}math/lu-decomposition.js`,
  `${window.FP}math/ode-solver.js`,
  `${window.FP}math/pde-solver.js`,
  `${window.FP}math/interpolation.js`,
  `${window.FP}calculator/core.js`,
  `${window.FP}app.js`
];
  
  // 顺序加载脚本
  let index = 0;
  function loadNextScript() {
    if (index >= scripts.length) return;
    
    const script = document.createElement('script');
    script.src = scripts[index];
    script.onload = function() {
      index++;
      loadNextScript();
    };
    script.onerror = function() {
      console.error('加载失败：', scripts[index]);
      index++;
      loadNextScript();
    };
    document.body.appendChild(script);
  }
  
  loadNextScript();
};