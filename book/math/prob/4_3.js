window.SECTION_CONTENT = `
<h4>📐 协方差与相关系数</h4>

<p>协方差和相关系数是描述两个随机变量之间线性关系的重要数字特征。协方差反映了变量间的"协同变化"程度，相关系数则是对协方差的标准化处理，取值范围在 [-1, 1] 之间。</p>

<h5>1. 协方差的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="X, Y"></span> 是两个随机变量，称</p>

<div class="formula-block" data-latex="\\text{Cov}(X, Y) = E[(X - E(X))(Y - E(Y))]"></div>

<p>为 <span class="formula-inline" data-latex="X</span> 与 <span class="formula-inline" data-latex="Y"></span> 的<strong>协方差</strong>。</p>

<p><strong>计算简化公式：</strong></p>
<div class="formula-block" data-latex="\\text{Cov}(X, Y) = E(XY) - E(X)E(Y)"></div>

<h4>📘 例题 1：协方差的计算</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合分布律为：</p>
  
  <table style="width:60%; margin:10px auto; border-collapse:collapse; text-align:center;">
    <tr><th style="border:1px solid #ddd; padding:6px;">Y\\X</th><th style="border:1px solid #ddd; padding:6px;">0</th><th style="border:1px solid #ddd; padding:6px;">1</th></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">0</td><td style="border:1px solid #ddd; padding:6px;">0.2</td><td style="border:1px solid #ddd; padding:6px;">0.3</td></tr>
    <tr><td style="border:1px solid #ddd; padding:6px;">1</td><td style="border:1px solid #ddd; padding:6px;">0.2</td><td style="border:1px solid #ddd; padding:6px;">0.3</td></tr>
  </table>
  
  <p>求 <span class="formula-inline" data-latex="\\text{Cov}(X, Y)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X) = 0 \\times 0.4 + 1 \\times 0.6 = 0.6"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(Y) = 0 \\times 0.5 + 1 \\times 0.5 = 0.5"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(XY) = 1 \\times 1 \\times 0.3 = 0.3"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\text{Cov}(X, Y) = 0.3 - 0.6 \\times 0.5 = 0.3 - 0.3 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0"></span></p>
</div>

<h5>2. 协方差的性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="\\text{Cov}(X, X) = Var(X)"></span></p>
<p><strong>性质 2：</strong> <span class="formula-inline" data-latex="\\text{Cov}(X, Y) = \\text{Cov}(Y, X)"></span></p>
<p><strong>性质 3：</strong> <span class="formula-inline" data-latex="\\text{Cov}(aX + b, cY + d) = ac \\cdot \\text{Cov}(X, Y)"></span></p>
<p><strong>性质 4：</strong> 若 <span class="formula-inline" data-latex="X, Y"></span> 相互独立，则 <span class="formula-inline" data-latex="\\text{Cov}(X, Y) = 0"></span>（反之不成立）</p>

<h5>3. 相关系数</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="X, Y"></span> 的方差存在且大于 0，称</p>

<div class="formula-block" data-latex="\\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sqrt{Var(X) Var(Y)}}"></div>

<p>为 <span class="formula-inline" data-latex="X, Y"></span> 的<strong>相关系数</strong>，记作 <span class="formula-inline" data-latex="\\rho_{XY}"></span>。</p>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="-1 \\le \\rho_{XY} \\le 1"></span></li>
  <li><span class="formula-inline" data-latex="|\\rho_{XY}| = 1 \Leftrightarrow"></span> <span class="formula-inline" data-latex="X, Y"></span> 以概率 1 线性相关</li>
  <li><span class="formula-inline" data-latex="\\rho_{XY} = 0"></span> 称为<strong>不相关</strong></li>
</ul>

<h4>📘 例题 2：相关系数</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="Var(X) = 4, Var(Y) = 9, \\text{Cov}(X, Y) = 3"></span>，求相关系数 <span class="formula-inline" data-latex="\\rho_{XY}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\rho_{XY} = \\frac{3}{\\sqrt{4 \\times 9}} = \\frac{3}{6} = 0.5"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.5"></span></p>
</div>

<h5>4. 协方差与相关系数的关系</h5>

<table>
  <tr>
    <th>相关系数</th>
    <th>含义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\rho = 1"></span></td>
    <td>完全正线性相关</td>
    <td><span class="formula-inline" data-latex="Y = aX + b, a > 0"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\rho = -1"></span></td>
    <td>完全负线性相关</td>
    <td><span class="formula-inline" data-latex="Y = aX + b, a < 0"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="0 < \\rho < 1"></span></td>
    <td>正相关</td>
    <td>身高与体重</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="-1 < \\rho < 0"></span></td>
    <td>负相关</td>
    <td>价格与需求量</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\rho = 0"></span></td>
    <td>不相关（不代表独立）</td>
    <td><span class="formula-inline" data-latex="Y = X^2"></span> 可能不相关</td>
  </tr>
</table>

<h5>5. 协方差与相关系数总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>取值范围</th>
  </tr>
  <tr>
    <td><strong>协方差</strong></td>
    <td><span class="formula-inline" data-latex="E[(X-\\mu_X)(Y-\\mu_Y)]"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><strong>相关系数</strong></td>
    <td><span class="formula-inline" data-latex="\\text{Cov}(X,Y)/(\\sigma_X\\sigma_Y)"></span></td>
    <td><span class="formula-inline" data-latex="[-1, 1]"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 协方差和相关系数是描述两个随机变量线性关系的基本工具。协方差的大小依赖于变量的量纲，相关系数则消除了量纲的影响，使得不同变量间的相关性可以比较。独立一定不相关，但不相关不一定独立。
  </p>
</div>
`;