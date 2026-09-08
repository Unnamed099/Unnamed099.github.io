window.SECTION_CONTENT = `
<h4>📐 全微分</h4>

<p>在一元函数中，微分 <span class="formula-inline" data-latex="dy = f'(x)dx"></span> 是函数增量的线性主部。在多元函数中，全微分则是函数增量的线性主部，它刻画了函数在一点附近的变化与自变量变化之间的线性关系。</p>

<h5>1. 全微分的定义</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x, y)"></span> 的某邻域内有定义。若函数在点 <span class="formula-inline" data-latex="(x, y)"></span> 处的全增量</p>

<div class="formula-block" data-latex="\\Delta z = f(x + \\Delta x, y + \\Delta y) - f(x, y)"></div>

<p>可以表示为</p>

<div class="formula-block" data-latex="\\Delta z = A\\Delta x + B\\Delta y + o(\\rho)"></div>

<p>其中 <span class="formula-inline" data-latex="\\rho = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}"></span>，<span class="formula-inline" data-latex="A, B"></span> 与 <span class="formula-inline" data-latex="\\Delta x, \\Delta y"></span> 无关，则称函数在点 <span class="formula-inline" data-latex="(x, y)"></span> 处<strong>可微</strong>，并称 <span class="formula-inline" data-latex="A\\Delta x + B\\Delta y"></span> 为函数的<strong>全微分</strong>，记作</p>

<div class="formula-block" data-latex="dz = A\\Delta x + B\\Delta y = f_x(x, y)dx + f_y(x, y)dy"></div>

<div class="note">
  <strong>💡 核心理解：</strong>
  <p>• <span class="formula-inline" data-latex="A = f_x(x, y)"></span>，<span class="formula-inline" data-latex="B = f_y(x, y)"></span></p>
  <p>• 全微分是<strong>线性主部</strong>，<span class="formula-inline" data-latex="o(\\rho)"></span> 是比 <span class="formula-inline" data-latex="\\rho"></span> 高阶的无穷小</p>
  <p>• 可微 <span class="formula-inline" data-latex="\\Rightarrow"></span> 偏导数存在，但反之不成立</p>
  <p>• 若偏导数连续 <span class="formula-inline" data-latex="\\Rightarrow"></span> 可微</p>
</div>

<h4>📘 例题 1：求全微分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="z = x^2 + 3xy + y^3"></span> 的全微分。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_x = 2x + 3y, \\quad f_y = 3x + 3y^2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="dz = (2x + 3y)dx + (3x + 3y^2)dy"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="dz = (2x+3y)dx + (3x+3y^2)dy"></span></p>
</div>

<h4>📘 例题 2：计算全增量与全微分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="z = x^2 + y^2"></span> 在点 <span class="formula-inline" data-latex="(1, 2)"></span>，<span class="formula-inline" data-latex="\\Delta x = 0.1, \\Delta y = 0.1"></span> 时的全增量与全微分。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta z = (1.1)^2 + (2.1)^2 - (1^2 + 2^2) = 1.21 + 4.41 - 5 = 0.62"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_x = 2x = 2, \\quad f_y = 2y = 4"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="dz = 2 \\times 0.1 + 4 \\times 0.1 = 0.6"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\Delta z = 0.62</span>，<span class="formula-inline" data-latex="dz = 0.6"></span></p>
</div>

<h5>2. 全微分在近似计算中的应用</h5>

<p>当 <span class="formula-inline" data-latex="\\Delta x, \\Delta y"></span> 很小时，有近似公式</p>

<div class="formula-block" data-latex="f(x + \\Delta x, y + \\Delta y) \\approx f(x, y) + f_x(x, y)\\Delta x + f_y(x, y)\\Delta y"></div>

<h4>📘 例题 3：利用全微分近似计算</h4>

<div class="example">
  <p><strong>题目：</strong> 利用全微分近似计算 <span class="formula-inline" data-latex="\\sqrt{1.02^2 + 1.97^2}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="f(x, y) = \\sqrt{x^2 + y^2}"></span>，<span class="formula-inline" data-latex="(x_0, y_0) = (1, 2)"></span>，<span class="formula-inline" data-latex="\\Delta x = 0.02, \\Delta y = -0.03"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(1, 2) = \\sqrt{5} \\approx 2.2361"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_x = \\frac{x}{\\sqrt{x^2 + y^2}} = \\frac{1}{\\sqrt{5}} \\approx 0.4472"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_y = \\frac{y}{\\sqrt{x^2 + y^2}} = \\frac{2}{\\sqrt{5}} \\approx 0.8944"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(1.02, 1.97) \\approx 2.2361 + 0.4472 \\times 0.02 + 0.8944 \\times (-0.03)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 2.2361 + 0.0089 - 0.0268 = 2.2182"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sqrt{1.02^2 + 1.97^2} \\approx 2.2182"></span></p>
</div>

<h5>3. 可微、偏导数存在、连续的关系</h5>

<div style="text-align:center; margin:15px 0;">
  <pre style="display:inline-block; text-align:left; padding:15px; background:#f5f5f5; border-radius:6px; font-family:serif; font-size:1rem;">
    偏导数连续 
        ↓
    <strong>可微</strong>  ——→  连续
        ↓
    偏导数存在
  </pre>
</div>

<ul>
  <li>偏导数连续 <span class="formula-inline" data-latex="\\Rightarrow"></span> 可微</li>
  <li>可微 <span class="formula-inline" data-latex="\\Rightarrow"></span> 连续</li>
  <li>可微 <span class="formula-inline" data-latex="\\Rightarrow"></span> 偏导数存在</li>
  <li>偏导数存在 + 连续 <span class="formula-inline" data-latex="\\Leftrightarrow"></span> 可微</li>
</ul>

<h5>4. 全微分总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>一元函数</th>
    <th>二元函数</th>
  </tr>
  <tr>
    <td><strong>微分</strong></td>
    <td><span class="formula-inline" data-latex="dy = f'(x)dx"></span></td>
    <td><span class="formula-inline" data-latex="dz = f_x dx + f_y dy"></span></td>
  </tr>
  <tr>
    <td><strong>几何意义</strong></td>
    <td>切线的纵坐标增量</td>
    <td>切平面的竖坐标增量</td>
  </tr>
  <tr>
    <td><strong>近似公式</strong></td>
    <td><span class="formula-inline" data-latex="f(x+\\Delta x) \\approx f(x) + f'(x)\\Delta x"></span></td>
    <td><span class="formula-inline" data-latex="f(x+\\Delta x, y+\\Delta y) \\approx f(x,y) + f_x\\Delta x + f_y\\Delta y"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 全微分是多元函数微分学的核心概念。它给出了函数增量的线性近似，是多元函数近似计算和误差估计的理论基础。理解可微、偏导数存在、连续三者之间的关系，是掌握多元函数微分学的关键。
  </p>
</div>
`;