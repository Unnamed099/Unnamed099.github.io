window.SECTION_CONTENT = `
<h4>📐 隐函数及由参数方程所确定的函数的导数 相关变化率</h4>

<h5>1. 隐函数的导数</h5>

<p><strong>定义：</strong> 如果变量 <span class="formula-inline" data-latex="x"></span> 和 <span class="formula-inline" data-latex="y"></span> 之间的函数关系由一个方程</p>

<div class="formula-block" data-latex="F(x, y) = 0"></div>

<p>所确定，则称这种函数为<strong>隐函数</strong>。例如：<span class="formula-inline" data-latex="x^2 + y^2 = 1"></span> 确定了隐函数 <span class="formula-inline" data-latex="y = \\pm\\sqrt{1-x^2}"></span>。</p>

<p><strong>隐函数求导法：</strong> 对方程 <span class="formula-inline" data-latex="F(x, y) = 0"></span> 两边关于 <span class="formula-inline" data-latex="x"></span> 求导，将 <span class="formula-inline" data-latex="y"></span> 视为 <span class="formula-inline" data-latex="x"></span> 的函数，然后解出 <span class="formula-inline" data-latex="\\frac{dy}{dx}"></span>。</p>

<div class="note">
  <strong>💡 关键：</strong>
  <p>在对包含 <span class="formula-inline" data-latex="y"></span> 的项求导时，要使用<strong>链式法则</strong>，乘以 <span class="formula-inline" data-latex="\\frac{dy}{dx}"></span>。</p>
</div>

<h4>📘 例题：隐函数求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求由方程 <span class="formula-inline" data-latex="x^2 + y^2 = 25"></span> 所确定的隐函数的导数 <span class="formula-inline" data-latex="\\frac{dy}{dx}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>方程两边对 <span class="formula-inline" data-latex="x"></span> 求导：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(x^2)' + (y^2)' = (25)'"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2x + 2y \\cdot \\frac{dy}{dx} = 0"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{x}{y} \\quad (y \\neq 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{x}{y}"></span></p>
</div>

<h4>📘 例题：隐函数求导（含乘积）</h4>

<div class="example">
  <p><strong>题目：</strong> 求由方程 <span class="formula-inline" data-latex="xy + \\sin y = 0"></span> 所确定的隐函数的导数 <span class="formula-inline" data-latex="\\frac{dy}{dx}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>方程两边对 <span class="formula-inline" data-latex="x"></span> 求导：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(xy)' + (\\sin y)' = 0"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y + x\\frac{dy}{dx} + \\cos y \\cdot \\frac{dy}{dx} = 0"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(x + \\cos y)\\frac{dy}{dx} = -y"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{y}{x + \\cos y} \\quad (x + \\cos y \\neq 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{y}{x + \\cos y}"></span></p>
</div>

<h5>2. 由参数方程所确定的函数的导数</h5>

<p><strong>定义：</strong> 若参数方程</p>

<div class="formula-block" data-latex="\\begin{cases} x = \\varphi(t) \\\\ y = \\psi(t) \\end{cases} \\quad (t \\in I)"></div>

<p>确定了 <span class="formula-inline" data-latex="y"></span> 是 <span class="formula-inline" data-latex="x"></span> 的函数，则</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{\\psi'(t)}{\\varphi'(t)} \\quad (\\varphi'(t) \\neq 0)"></div>

<p><strong>二阶导数：</strong></p>

<div class="formula-block" data-latex="\\frac{d^2 y}{dx^2} = \\frac{d}{dx}\\left(\\frac{dy}{dx}\\right) = \\frac{\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)}{\\frac{dx}{dt}}"></div>

<h4>📘 例题：参数方程求导</h4>

<div class="example">
  <p><strong>题目：</strong> 已知参数方程 <span class="formula-inline" data-latex="\\begin{cases} x = t^2 \\\\ y = t^3 \\end{cases}"></span>，求 <span class="formula-inline" data-latex="\\frac{dy}{dx}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\frac{dx}{dt} = 2t, \\quad \\frac{dy}{dt} = 3t^2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3}{2}t \\quad (t \\neq 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{3}{2}t"></span></p>
</div>

<h4>📘 例题：参数方程求二阶导数</h4>

<div class="example">
  <p><strong>题目：</strong> 已知参数方程 <span class="formula-inline" data-latex="\\begin{cases} x = a\\cos t \\\\ y = a\\sin t \\end{cases}"></span>，求 <span class="formula-inline" data-latex="\\frac{d^2 y}{dx^2}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\frac{dx}{dt} = -a\\sin t, \\quad \\frac{dy}{dt} = a\\cos t"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{a\\cos t}{-a\\sin t} = -\\cot t"></span>
  </p>
  
  <p>再求二阶导数：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{d^2 y}{dx^2} = \\frac{\\frac{d}{dt}(-\\cot t)}{\\frac{dx}{dt}} = \\frac{\\csc^2 t}{-a\\sin t} = -\\frac{1}{a\\sin^3 t}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{d^2 y}{dx^2} = -\\frac{1}{a\\sin^3 t}"></span></p>
</div>

<h5>3. 相关变化率</h5>

<p><strong>定义：</strong> 如果两个变量 <span class="formula-inline" data-latex="x"></span> 和 <span class="formula-inline" data-latex="y"></span> 之间存在某种关系（如 <span class="formula-inline" data-latex="F(x, y) = 0"></span>），且它们都随时间 <span class="formula-inline" data-latex="t"></span> 变化，则它们的变化率 <span class="formula-inline" data-latex="\\frac{dx}{dt}"></span> 和 <span class="formula-inline" data-latex="\\frac{dy}{dt}"></span> 之间存在<strong>相关关系</strong>。</p>

<p><strong>求解步骤：</strong></p>
<ol>
  <li>建立变量之间的函数关系式（几何关系、物理关系等）</li>
  <li>对关系式两边关于时间 <span class="formula-inline" data-latex="t"></span> 求导</li>
  <li>代入已知条件，解出未知变化率</li>
</ol>

<div class="note">
  <strong>💡 注意：</strong>
  <p>相关变化率问题的关键是<strong>建立正确的等量关系</strong>，通常涉及几何图形（如直角三角形、相似三角形、圆等）或物理规律。</p>
</div>

<h4>📘 例题：相关变化率</h4>

<div class="example">
  <p><strong>题目：</strong> 一个气球以 <span class="formula-inline" data-latex="3\\text{ m/s}"></span> 的速度垂直上升。当气球离地面 <span class="formula-inline" data-latex="20\\text{ m}"></span> 时，观察者与气球起始点的水平距离为 <span class="formula-inline" data-latex="15\\text{ m}"></span>。求此时观察者到气球的距离的变化率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="h"></span> 为气球高度，<span class="formula-inline" data-latex="l"></span> 为观察者到气球的直线距离，水平距离 <span class="formula-inline" data-latex="d = 15\\text{ m}"></span> 不变。</p>
  
  <p>由勾股定理：<span class="formula-inline" data-latex="l^2 = h^2 + d^2 = h^2 + 225"></span></p>
  
  <p>两边对 <span class="formula-inline" data-latex="t"></span> 求导：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2l \\cdot \\frac{dl}{dt} = 2h \\cdot \\frac{dh}{dt}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dl}{dt} = \\frac{h}{l} \\cdot \\frac{dh}{dt}"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="h = 20\\text{ m}"></span> 时，<span class="formula-inline" data-latex="l = \\sqrt{20^2 + 15^2} = \\sqrt{625} = 25\\text{ m}"></span>，<span class="formula-inline" data-latex="\\frac{dh}{dt} = 3\\text{ m/s}"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dl}{dt} = \\frac{20}{25} \\times 3 = \\frac{12}{5} = 2.4\\text{ m/s}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 距离的变化率为 <span class="formula-inline" data-latex="2.4\\text{ m/s}"></span></p>
</div>

<h4>📘 例题：相关变化率（面积变化）</h4>

<div class="example">
  <p><strong>题目：</strong> 一个圆的半径以 <span class="formula-inline" data-latex="2\\text{ cm/s}"></span> 的速度增大。当半径 <span class="formula-inline" data-latex="r = 5\\text{ cm}"></span> 时，圆的面积变化率是多少？</p>
  
  <p><strong>解：</strong></p>
  <p>面积 <span class="formula-inline" data-latex="A = \\pi r^2"></span></p>
  
  <p>两边对 <span class="formula-inline" data-latex="t"></span> 求导：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dA}{dt} = 2\\pi r \\cdot \\frac{dr}{dt}"></span>
  </p>
  
  <p>代入 <span class="formula-inline" data-latex="r = 5, \\frac{dr}{dt} = 2"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dA}{dt} = 2\\pi \\times 5 \\times 2 = 20\\pi\\text{ cm}^2/\\text{s}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="20\\pi\\text{ cm}^2/\\text{s}"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 隐函数求导、参数方程求导和相关变化率是导数应用的重要方面。隐函数求导拓展了可求导函数的范围，参数方程求导为描述复杂曲线提供了工具，相关变化率则将导数与实际问题联系起来，体现了微积分在物理和工程中的广泛应用。
  </p>
</div>
`