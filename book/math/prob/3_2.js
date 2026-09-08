window.SECTION_CONTENT = `
<h4>📐 边缘分布与条件分布</h4>

<p>在二维随机变量中，除了联合分布外，我们还需要研究每个分量自身的分布（边缘分布）以及在一个分量取定值的条件下另一个分量的分布（条件分布）。</p>

<h5>1. 边缘分布</h5>

<p><strong>定义：</strong> 由二维随机变量 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合分布得到的 <span class="formula-inline" data-latex="X"></span> 或 <span class="formula-inline" data-latex="Y"></span> 各自的分布，称为<strong>边缘分布</strong>。</p>

<p><strong>离散型：</strong></p>
<div class="formula-block" data-latex="P(X = x_i) = \\sum_j P(X = x_i, Y = y_j) = \\sum_j p_{ij} = p_{i\\cdot}"></div>
<div class="formula-block" data-latex="P(Y = y_j) = \\sum_i P(X = x_i, Y = y_j) = \\sum_i p_{ij} = p_{\\cdot j}"></div>

<p><strong>连续型：</strong></p>
<div class="formula-block" data-latex="f_X(x) = \\int_{-\\infty}^{+\\infty} f(x, y) dy"></div>
<div class="formula-block" data-latex="f_Y(y) = \\int_{-\\infty}^{+\\infty} f(x, y) dx"></div>

<h4>📘 例题 1：离散型边缘分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设二维随机变量 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合分布律为：</p>
  
  <table style="width:70%; margin:10px auto; border-collapse:collapse; text-align:center;">
    <tr><th style="border:1px solid #ddd; padding:6px;">Y\\X</th><th style="border:1px solid #ddd; padding:6px;">0</th><th style="border:1px solid #ddd; padding:6px;">1</th><th style="border:1px solid #ddd; padding:6px;">边缘</th></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">0</td><td style="border:1px solid #ddd; padding:6px;">0.1</td><td style="border:1px solid #ddd; padding:6px;">0.3</td><td style="border:1px solid #ddd; padding:6px;">0.4</td></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">1</td><td style="border:1px solid #ddd; padding:6px;">0.2</td><td style="border:1px solid #ddd; padding:6px;">0.4</td><td style="border:1px solid #ddd; padding:6px;">0.6</td></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">边缘</td><td style="border:1px solid #ddd; padding:6px;">0.3</td><td style="border:1px solid #ddd; padding:6px;">0.7</td><td style="border:1px solid #ddd; padding:6px;">1</td></tr>
  </table>
  
  <p>求 <span class="formula-inline" data-latex="X"></span> 和 <span class="formula-inline" data-latex="Y"></span> 的边缘分布。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X=0) = 0.3, \\quad P(X=1) = 0.7"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(Y=0) = 0.4, \\quad P(Y=1) = 0.6"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 如上</p>
</div>

<h4>📘 例题 2：连续型边缘密度</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合密度为 <span class="formula-inline" data-latex="f(x, y) = \\begin{cases} 4xy, & 0 \\le x \\le 1, 0 \\le y \\le 1 \\\\ 0, & \\text{其他} \\end{cases}"></span>，求 <span class="formula-inline" data-latex="f_X(x)"></span> 和 <span class="formula-inline" data-latex="f_Y(y)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_X(x) = \\int_0^1 4xy dy = 4x \\cdot \\frac{1}{2} = 2x, \\quad 0 \\le x \\le 1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Y(y) = \\int_0^1 4xy dx = 4y \\cdot \\frac{1}{2} = 2y, \\quad 0 \\le y \\le 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f_X(x) = 2x, f_Y(y) = 2y, 0 \\le x, y \\le 1"></span></p>
</div>

<h5>2. 条件分布</h5>

<p><strong>离散型：</strong> 在 <span class="formula-inline" data-latex="Y = y_j"></span> 的条件下，<span class="formula-inline" data-latex="X"></span> 的<strong>条件分布律</strong>为</p>

<div class="formula-block" data-latex="P(X = x_i \\mid Y = y_j) = \\frac{P(X = x_i, Y = y_j)}{P(Y = y_j)} = \\frac{p_{ij}}{p_{\\cdot j}}"></div>

<p><strong>连续型：</strong> 在 <span class="formula-inline" data-latex="Y = y"></span> 的条件下，<span class="formula-inline" data-latex="X"></span> 的<strong>条件密度函数</strong>为</p>

<div class="formula-block" data-latex="f_{X \\mid Y}(x \\mid y) = \\frac{f(x, y)}{f_Y(y)} \\quad (f_Y(y) > 0)"></div>

<h4>📘 例题 3：条件分布</h4>

<div class="example">
  <p><strong>题目：</strong> 承例题 1，求 <span class="formula-inline" data-latex="P(X = 1 \\mid Y = 1)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X = 1 \\mid Y = 1) = \\frac{P(X=1, Y=1)}{P(Y=1)} = \\frac{0.4}{0.6} = \\frac{2}{3} \\approx 0.667"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2/3"></span></p>
</div>

<h5>3. 边缘分布与条件分布总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>边缘分布</th>
    <th>条件分布</th>
  </tr>
  <tr>
    <td><strong>离散型</strong></td>
    <td>行/列求和</td>
    <td>联合概率除以边缘概率</td>
  </tr>
  <tr>
    <td><strong>连续型</strong></td>
    <td>对另一变量积分</td>
    <td>联合密度除以边缘密度</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 边缘分布和条件分布是从联合分布中提取信息的重要方式。边缘分布描述了单变量的分布规律，条件分布则反映了变量之间的依赖关系。条件分布是研究随机变量之间关系的重要工具。
  </p>
</div>
`;