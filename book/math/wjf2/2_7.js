window.SECTION_CONTENT = `
<h4>📐 方向导数与梯度</h4>

<p>偏导数只刻画了函数沿坐标轴方向的变化率。在实际问题中，我们需要知道函数沿任意方向的变化率，这就是方向导数。而梯度则是方向导数的最大值方向。</p>

<h5>1. 方向导数</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 的某邻域内有定义，<span class="formula-inline" data-latex="\\mathbf{e}_l = (\\cos\\alpha, \\cos\\beta)"></span> 是单位向量，若极限</p>

<div class="formula-block" data-latex="\\lim_{t \\to 0^+} \\frac{f(x_0 + t\\cos\\alpha, y_0 + t\\cos\\beta) - f(x_0, y_0)}{t}"></div>

<p>存在，则称此极限为函数在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 沿方向 <span class="formula-inline" data-latex="\\mathbf{e}_l"></span> 的<strong>方向导数</strong>，记作</p>

<div class="formula-block" data-latex="\\frac{\\partial f}{\\partial l}\\bigg|_{(x_0, y_0)}"></div>

<p><strong>计算公式：</strong> 若 <span class="formula-inline" data-latex="f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处可微，则</p>

<div class="formula-block" data-latex="\\frac{\\partial f}{\\partial l} = f_x(x_0, y_0)\\cos\\alpha + f_y(x_0, y_0)\\cos\\beta"></div>

<p>其中 <span class="formula-inline" data-latex="\\cos\\alpha, \\cos\\beta"></span> 是方向 <span class="formula-inline" data-latex="l"></span> 的方向余弦。</p>

<h5>2. 梯度</h5>

<p><strong>定义：</strong> 函数 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处的<strong>梯度</strong>定义为</p>

<div class="formula-block" data-latex="\\nabla f(x_0, y_0) = (f_x(x_0, y_0), f_y(x_0, y_0))"></div>

<p>读作 "grad f" 或 "nabla f"。</p>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="\\frac{\\partial f}{\\partial l} = \\nabla f \\cdot \\mathbf{e}_l = |\\nabla f| \\cos\\theta"></span>（<span class="formula-inline" data-latex="\\theta"></span> 是梯度与方向 <span class="formula-inline" data-latex="l"></span> 的夹角）</li>
  <li>当 <span class="formula-inline" data-latex="\\theta = 0"></span>（沿梯度方向）时，方向导数最大，值为 <span class="formula-inline" data-latex="|\\nabla f|"></span></li>
  <li>当 <span class="formula-inline" data-latex="\\theta = \\pi"></span>（沿梯度反方向）时，方向导数最小，值为 <span class="formula-inline" data-latex="-|\\nabla f|"></span></li>
  <li>当 <span class="formula-inline" data-latex="\\theta = \\pi/2"></span>（垂直于梯度）时，方向导数为 0</li>
</ul>

<h4>📘 例题 1：计算方向导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x, y) = x^2 + y^2"></span> 在点 <span class="formula-inline" data-latex="(1, 1)"></span> 沿方向 <span class="formula-inline" data-latex="\\mathbf{l} = (1, 1)"></span> 的方向导数。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f_x = 2x = 2, f_y = 2y = 2"></span></p>
  <p>方向 <span class="formula-inline" data-latex="\\mathbf{l} = (1, 1)"></span> 的单位向量为 <span class="formula-inline" data-latex="\\mathbf{e}_l = \\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial f}{\\partial l} = 2 \\cdot \\frac{1}{\\sqrt{2}} + 2 \\cdot \\frac{1}{\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = 2\\sqrt{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2\\sqrt{2}"></span></p>
</div>

<h4>📘 例题 2：计算梯度</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x, y) = x^2 + y^2"></span> 在点 <span class="formula-inline" data-latex="(1, 1)"></span> 处的梯度，并求方向导数的最大值。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\nabla f(1, 1) = (2, 2)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|\\nabla f| = \\sqrt{2^2 + 2^2} = 2\\sqrt{2}"></span>
  </p>
  <p>方向导数的最大值就是 <span class="formula-inline" data-latex="|\\nabla f|"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\nabla f = (2, 2)</span>，最大值 <span class="formula-inline" data-latex="2\\sqrt{2}"></span>（沿 <span class="formula-inline" data-latex="(1, 1)"></span> 方向）</p>
</div>

<h5>3. 梯度与等值线</h5>

<p>梯度方向是函数值<strong>增长最快</strong>的方向，其大小等于最大方向导数。</p>

<p><strong>重要性质：</strong> 梯度方向垂直于等值线（等位面）。</p>

<p>即：在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处，梯度向量 <span class="formula-inline" data-latex="\\nabla f"></span> 与等值线 <span class="formula-inline" data-latex="f(x, y) = C"></span> 的切线方向垂直。</p>

<h4>📘 例题 3：梯度的几何意义</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x, y) = x^2 + y^2"></span> 在点 <span class="formula-inline" data-latex="(1, 1)"></span> 处的梯度，并指出其与等值线的关系。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\nabla f(1, 1) = (2, 2)"></span></p>
  <p>等值线 <span class="formula-inline" data-latex="x^2 + y^2 = 2"></span> 在 <span class="formula-inline" data-latex="(1, 1)"></span> 处的切线方向为 <span class="formula-inline" data-latex">(-1, 1)</span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(2, 2) \\cdot (-1, 1) = -2 + 2 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 梯度与等值线垂直，指向函数增长最快的方向。</p>
</div>

<h5>4. 三元函数的梯度</h5>

<p>对于三元函数 <span class="formula-inline" data-latex="u = f(x, y, z)"></span>，</p>
<div class="formula-block" data-latex="\\nabla f = (f_x, f_y, f_z)"></div>

<p>方向导数公式推广为</p>
<div class="formula-block" data-latex="\\frac{\\partial f}{\\partial l} = f_x\\cos\\alpha + f_y\\cos\\beta + f_z\\cos\\gamma"></div>

<h5>5. 方向导数与梯度总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>性质</th>
  </tr>
  <tr>
    <td><strong>方向导数</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{\\partial f}{\\partial l} = \\nabla f \\cdot \\mathbf{e}_l"></span></td>
    <td>沿方向 <span class="formula-inline" data-latex="l"></span> 的变化率</td>
  </tr>
  <tr>
    <td><strong>梯度</strong></td>
    <td><span class="formula-inline" data-latex="\\nabla f = (f_x, f_y)"></span></td>
    <td>方向导数取最大值的方向</td>
  </tr>
  <tr>
    <td><strong>最大方向导数</strong></td>
    <td><span class="formula-inline" data-latex="|\\nabla f|"></span></td>
    <td>沿梯度方向</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 方向导数和梯度是多元函数微分学中极为重要的概念。方向导数给出了函数沿任意方向的变化率，而梯度则给出了变化最快的方向及其大小。在优化理论、机器学习、物理场分析中，梯度有着核心的地位。
  </p>
</div>
`;