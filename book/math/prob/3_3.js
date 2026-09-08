window.SECTION_CONTENT = `
<h4>📐 相互独立的随机变量</h4>

<p>随机变量的独立性是概率论中最核心的概念之一。它描述了变量之间"互不影响"的关系，是简化复杂概率问题的重要工具。</p>

<h5>1. 两个随机变量的独立性</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 是二维随机变量。若对任意实数 <span class="formula-inline" data-latex="x, y"></span>，都有</p>

<div class="formula-block" data-latex="P(X \\le x, Y \\le y) = P(X \\le x) P(Y \\le y)"></div>

<p>即 <span class="formula-inline" data-latex="F(x, y) = F_X(x) F_Y(y)"></span>，则称 <span class="formula-inline" data-latex="X"></span> 与 <span class="formula-inline" data-latex="Y"></span> <strong>相互独立</strong>。</p>

<p><strong>等价条件：</strong></p>
<ul>
  <li><strong>离散型：</strong> <span class="formula-inline" data-latex="P(X = x_i, Y = y_j) = P(X = x_i) P(Y = y_j)"></span> 对所有 <span class="formula-inline" data-latex="i, j"></span> 成立</li>
  <li><strong>连续型：</strong> <span class="formula-inline" data-latex="f(x, y) = f_X(x) f_Y(y)"></span> 几乎处处成立</li>
</ul>

<h4>📘 例题 1：判断离散型随机变量的独立性</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合分布律为：</p>
  
  <table style="width:60%; margin:10px auto; border-collapse:collapse; text-align:center;">
    <tr><th style="border:1px solid #ddd; padding:6px;">Y\\X</th><th style="border:1px solid #ddd; padding:6px;">0</th><th style="border:1px solid #ddd; padding:6px;">1</th></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">0</td><td style="border:1px solid #ddd; padding:6px;">0.2</td><td style="border:1px solid #ddd; padding:6px;">0.3</td></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">1</td><td style="border:1px solid #ddd; padding:6px;">0.2</td><td style="border:1px solid #ddd; padding:6px;">0.3</td></tr>
  </table>
  
  <p>判断 <span class="formula-inline" data-latex="X, Y"></span> 是否独立。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="P(X=0) = 0.4, P(X=1) = 0.6"></span></p>
  <p><span class="formula-inline" data-latex="P(Y=0) = 0.5, P(Y=1) = 0.5"></span></p>
  <p><span class="formula-inline" data-latex="P(X=0, Y=0) = 0.2</span>，而 <span class="formula-inline" data-latex="P(X=0)P(Y=0) = 0.4 \\times 0.5 = 0.2"></span></p>
  <p>对所有组合逐一验证，均相等。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 独立</p>
</div>

<h4>📘 例题 2：判断连续型随机变量的独立性</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合密度为 <span class="formula-inline" data-latex="f(x, y) = \\begin{cases} 2e^{-(x+2y)}, & x > 0, y > 0 \\\\ 0, & \\text{其他} \\end{cases}"></span>，判断 <span class="formula-inline" data-latex="X, Y"></span> 是否独立。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_X(x) = \\int_0^{\\infty} 2e^{-(x+2y)} dy = 2e^{-x} \\cdot \\frac{1}{2} = e^{-x}, \\quad x > 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Y(y) = \\int_0^{\\infty} 2e^{-(x+2y)} dx = 2e^{-2y} \\cdot 1 = 2e^{-2y}, \\quad y > 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_X(x) f_Y(y) = e^{-x} \\cdot 2e^{-2y} = 2e^{-(x+2y)} = f(x, y)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 独立</p>
</div>

<h5>2. 独立性的性质</h5>

<p><strong>性质 1：</strong> 若 <span class="formula-inline" data-latex="X, Y"></span> 独立，则 <span class="formula-inline" data-latex="g(X), h(Y)"></span> 也独立（<span class="formula-inline" data-latex="g, h"></span> 为任意函数）。</p>

<p><strong>性质 2：</strong> 若 <span class="formula-inline" data-latex="X, Y"></span> 独立，则</p>
<div class="formula-block" data-latex="E(XY) = E(X)E(Y)"></div>
<div class="formula-block" data-latex="Var(X + Y) = Var(X) + Var(Y)"></div>

<h4>📘 例题 3：独立性的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X, Y"></span> 独立同分布，且 <span class="formula-inline" data-latex="P(X=1) = 0.4, P(X=0) = 0.6"></span>。求 <span class="formula-inline" data-latex="P(X+Y = 1)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>由独立性：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X+Y=1) = P(X=1, Y=0) + P(X=0, Y=1)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= P(X=1)P(Y=0) + P(X=0)P(Y=1) = 0.4 \\times 0.6 + 0.6 \\times 0.4 = 0.48"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.48"></span></p>
</div>

<h5>3. 随机变量独立性总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>独立条件</th>
    <th>重要结论</th>
  </tr>
  <tr>
    <td><strong>离散型</strong></td>
    <td><span class="formula-inline" data-latex="p_{ij} = p_{i\\cdot} p_{\\cdot j}"></span></td>
    <td>联合律 = 边缘律乘积</td>
  </tr>
  <tr>
    <td><strong>连续型</strong></td>
    <td><span class="formula-inline" data-latex="f(x, y) = f_X(x) f_Y(y)"></span></td>
    <td>联合密度 = 边缘密度乘积</td>
  </tr>
  <tr>
    <td><strong>一般情形</strong></td>
    <td><span class="formula-inline" data-latex="F(x, y) = F_X(x) F_Y(y)"></span></td>
    <td>联合分布 = 边缘分布乘积</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 随机变量的独立性是概率论中最重要的概念之一。它描述了变量之间的"无影响"关系。在独立条件下，联合分布可以分解为边缘分布的乘积，这大大简化了概率计算。独立性是统计推断、随机过程等后续内容的基础。
  </p>
</div>
`;