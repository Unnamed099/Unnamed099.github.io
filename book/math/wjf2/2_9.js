window.SECTION_CONTENT = `
<h4>📐 二元函数的泰勒公式</h4>

<p>泰勒公式将一元函数的研究方法推广到二元函数。它用多项式逼近二元函数，是多元函数近似计算和理论分析的重要工具。</p>

<h5>1. 二元函数的泰勒公式</h5>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 的某邻域内具有 <span class="formula-inline" data-latex="n+1"></span> 阶连续偏导数，则对于该邻域内任意点 <span class="formula-inline" data-latex="(x_0 + h, y_0 + k)"></span>，有</p>

<div class="formula-block" data-latex="f(x_0 + h, y_0 + k) = f(x_0, y_0) + \\left(h\\frac{\\partial}{\\partial x} + k\\frac{\\partial}{\\partial y}\\right)f(x_0, y_0) + \\frac{1}{2!}\\left(h\\frac{\\partial}{\\partial x} + k\\frac{\\partial}{\\partial y}\\right)^2 f(x_0, y_0) + \\cdots + \\frac{1}{n!}\\left(h\\frac{\\partial}{\\partial x} + k\\frac{\\partial}{\\partial y}\\right)^n f(x_0, y_0) + R_n"></div>

<p>其中 <span class="formula-inline" data-latex="R_n"></span> 为拉格朗日余项。</p>

<p><strong>展开到二阶的具体形式：</strong></p>

<div class="formula-block" data-latex="f(x_0 + h, y_0 + k) = f(x_0, y_0) + f_x(x_0, y_0)h + f_y(x_0, y_0)k"></div>
<div class="formula-block" data-latex="+ \\frac{1}{2!}[f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2] + R_2"></div>

<h4>📘 例题 1：二元函数的泰勒展开</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x, y) = e^{x+y}"></span> 在点 <span class="formula-inline" data-latex="(0, 0)"></span> 处展开到二阶。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(0,0) = 1, f_x = e^{x+y}, f_y = e^{x+y}, f_x(0,0) = 1, f_y(0,0) = 1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_{xx} = e^{x+y}, f_{xy} = e^{x+y}, f_{yy} = e^{x+y}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_{xx}(0,0) = 1, f_{xy}(0,0) = 1, f_{yy}(0,0) = 1"></span>
  </p>
  
  <p>代入二阶泰勒公式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="e^{x+y} \\approx 1 + (x+y) + \\frac{1}{2}(x^2 + 2xy + y^2)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e^{x+y} = 1 + x + y + \\frac{1}{2}x^2 + xy + \\frac{1}{2}y^2 + \\cdots"></span></p>
</div>

<h4>📘 例题 2：用泰勒公式近似计算</h4>

<div class="example">
  <p><strong>题目：</strong> 利用泰勒公式计算 <span class="formula-inline" data-latex="\\sqrt{1.02^2 + 1.97^2}"></span> 的近似值。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="f(x, y) = \\sqrt{x^2 + y^2}"></span>，<span class="formula-inline" data-latex="(x_0, y_0) = (1, 2)"></span>，<span class="formula-inline" data-latex="h = 0.02, k = -0.03"></span></p>
  
  <p><span class="formula-inline" data-latex="f(1,2) = \\sqrt{5} \\approx 2.2361"></span></p>
  <p><span class="formula-inline" data-latex="f_x = \\frac{x}{\\sqrt{x^2+y^2}}, f_x(1,2) = \\frac{1}{\\sqrt{5}} \\approx 0.4472"></span></p>
  <p><span class="formula-inline" data-latex="f_y = \\frac{y}{\\sqrt{x^2+y^2}}, f_y(1,2) = \\frac{2}{\\sqrt{5}} \\approx 0.8944"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(1.02, 1.97) \\approx 2.2361 + 0.4472 \\times 0.02 + 0.8944 \\times (-0.03) = 2.2182"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2.2182"></span></p>
</div>

<h5>2. 极值充分条件的证明</h5>

<p>利用二元函数的泰勒公式，可以证明极值的充分条件（<span class="formula-inline" data-latex="\\Delta = AC - B^2"></span> 判别法）。</p>

<p><strong>证明思路：</strong> 在驻点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处，泰勒展开为</p>

<div class="formula-block" data-latex="\\Delta f = \\frac{1}{2}(A h^2 + 2B hk + C k^2) + o(h^2 + k^2)"></div>

<p>二次型 <span class="formula-inline" data-latex="A h^2 + 2B hk + C k^2"></span> 的正负号由 <span class="formula-inline" data-latex="\\Delta = AC - B^2"></span> 决定：</p>

<ul>
  <li><span class="formula-inline" data-latex="\\Delta > 0</span> 且 <span class="formula-inline" data-latex="A > 0"></span>：正定 → 极小值</li>
  <li><span class="formula-inline" data-latex="\\Delta > 0</span> 且 <span class="formula-inline" data-latex="A < 0"></span>：负定 → 极大值</li>
  <li><span class="formula-inline" data-latex="\\Delta < 0"></span>：不定 → 鞍点</li>
  <li><span class="formula-inline" data-latex="\\Delta = 0"></span>：需进一步分析</li>
</ul>

<h5>3. 二元函数的泰勒公式总结</h5>

<table>
  <tr>
    <th>阶数</th>
    <th>展开式</th>
    <th>余项</th>
  </tr>
  <tr>
    <td><strong>一阶</strong></td>
    <td><span class="formula-inline" data-latex="f \\approx f(x_0,y_0) + f_x h + f_y k"></span></td>
    <td><span class="formula-inline" data-latex="o(\\rho)"></span></td>
  </tr>
  <tr>
    <td><strong>二阶</strong></td>
    <td><span class="formula-inline" data-latex="f \\approx f + f_x h + f_y k + \\frac{1}{2}(f_{xx}h^2 + 2f_{xy}hk + f_{yy}k^2)"></span></td>
    <td><span class="formula-inline" data-latex="o(\\rho^2)"></span></td>
  </tr>
  <tr>
    <td><strong>拉格朗日余项</strong></td>
    <td colspan="2"><span class="formula-inline" data-latex="R_n = \\frac{1}{(n+1)!}(h\\partial_x + k\\partial_y)^{n+1} f(\\xi, \\eta)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二元函数的泰勒公式是一元泰勒公式的推广，它为多元函数的近似计算、误差估计和极值判别提供了理论基础。理解泰勒展开的本质——用多项式逼近函数——是掌握多元微分学的关键。
  </p>
</div>
`;