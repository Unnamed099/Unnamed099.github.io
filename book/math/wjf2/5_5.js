window.SECTION_CONTENT = `
<h4>📐 函数的幂级数展开式的应用</h4>

<p>将函数展开成幂级数后，我们可以利用幂级数进行近似计算、求解微分方程等。本节将介绍这些应用。</p>

<h5>1. 近似计算</h5>

<p><strong>基本思想：</strong> 用幂级数的部分和来近似函数值，误差由余项控制。</p>

<p>对于函数 <span class="formula-inline" data-latex="f(x) = \\sum_{n=0}^{\\infty} a_n x^n"></span>，其 <span class="formula-inline" data-latex="n"></span> 次部分和为</p>
<div class="formula-block" data-latex="S_n(x) = \\sum_{k=0}^{n} a_k x^k"></div>
<p>误差 <span class="formula-inline" data-latex="|R_n(x)| = |f(x) - S_n(x)|"></span>。</p>

<h4>📘 例题 1：近似计算 <span class="formula-inline" data-latex="e^x"></span></h4>

<div class="example">
  <p><strong>题目：</strong> 利用 <span class="formula-inline" data-latex="e^x"></span> 的展开式近似计算 <span class="formula-inline" data-latex="e^{0.5}"></span>，使误差不超过 <span class="formula-inline" data-latex="10^{-4}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="e^{0.5} = \\sum_{n=0}^{\\infty} \\frac{0.5^n}{n!}"></span></p>
  <p>取 <span class="formula-inline" data-latex="n = 6"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="e^{0.5} \\approx 1 + 0.5 + \\frac{0.25}{2} + \\frac{0.125}{6} + \\frac{0.0625}{24} + \\frac{0.03125}{120} + \\frac{0.015625}{720}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 + 0.5 + 0.125 + 0.0208333 + 0.0026042 + 0.0002604 + 0.0000217 = 1.6487196"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e^{0.5} \\approx 1.64872"></span></p>
</div>

<h4>📘 例题 2：近似计算 <span class="formula-inline" data-latex="\\sin x"></span></h4>

<div class="example">
  <p><strong>题目：</strong> 利用 <span class="formula-inline" data-latex="\\sin x"></span> 的展开式近似计算 <span class="formula-inline" data-latex="\\sin 1"></span>，取 <span class="formula-inline" data-latex="n = 3"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sin 1 \\approx 1 - \\frac{1}{3!} + \\frac{1}{5!} - \\frac{1}{7!}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 - 0.1666667 + 0.0083333 - 0.0001984 = 0.8414682"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sin 1 \\approx 0.84147"></span></p>
</div>

<h5>2. 微分方程的幂级数解法</h5>

<p>对于某些微分方程（特别是变系数线性微分方程），可以用幂级数表示解。</p>

<p><strong>步骤：</strong></p>
<ol>
  <li>设解为幂级数 <span class="formula-inline" data-latex="y = \\sum_{n=0}^{\\infty} a_n x^n"></span></li>
  <li>逐项求导得到 <span class="formula-inline" data-latex="y', y''"></span></li>
  <li>代入原方程，比较系数得到递推关系</li>
  <li>确定系数，得到级数解</li>
</ol>

<h4>📘 例题 3：用幂级数法解微分方程</h4>

<div class="example">
  <p><strong>题目：</strong> 用幂级数法解 <span class="formula-inline" data-latex="y' = y"></span>，满足 <span class="formula-inline" data-latex="y(0) = 1"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="y = \\sum_{n=0}^{\\infty} a_n x^n"></span>，则 <span class="formula-inline" data-latex="y' = \\sum_{n=1}^{\\infty} n a_n x^{n-1}"></span></p>
  <p>代入 <span class="formula-inline" data-latex="y' = y"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} n a_n x^{n-1} = \\sum_{n=0}^{\\infty} a_n x^n"></span>
  </p>
  <p>比较系数：<span class="formula-inline" data-latex="a_{n+1} = \\frac{a_n}{n+1}"></span></p>
  <p><span class="formula-inline" data-latex="y(0) = a_0 = 1"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="a_n = \\frac{1}{n!}, \\quad y = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!} = e^x"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="y = e^x"></span></p>
</div>

<h4>📘 例题 4：二阶微分方程的幂级数解</h4>

<div class="example">
  <p><strong>题目：</strong> 用幂级数法解 <span class="formula-inline" data-latex="y'' + y = 0"></span>，满足 <span class="formula-inline" data-latex="y(0) = 1, y'(0) = 0"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="y = \\sum_{n=0}^{\\infty} a_n x^n"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y'' = \\sum_{n=2}^{\\infty} n(n-1) a_n x^{n-2}"></span>
  </p>
  <p>代入 <span class="formula-inline" data-latex="y'' + y = 0"></span>，得递推关系：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="a_{n+2} = -\\frac{a_n}{(n+1)(n+2)}"></span>
  </p>
  <p><span class="formula-inline" data-latex="a_0 = 1, a_1 = 0"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots = \\cos x"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="y = \\cos x"></span></p>
</div>

<h5>3. 欧拉公式</h5>

<p>由 <span class="formula-inline" data-latex="e^x"></span>、<span class="formula-inline" data-latex="\\sin x"></span>、<span class="formula-inline" data-latex="\\cos x"></span> 的展开式，可得<strong>欧拉公式</strong>：</p>

<div class="formula-block" data-latex="e^{ix} = \\cos x + i \\sin x"></div>

<p>它建立了指数函数与三角函数之间的联系，是复分析中最基本的公式之一。</p>

<h5>4. 幂级数展开的应用总结</h5>

<table>
  <tr>
    <th>应用类型</th>
    <th>方法</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>近似计算</strong></td>
    <td>取部分和，控制余项</td>
    <td><span class="formula-inline" data-latex="e^x, \\sin x"></span></td>
  </tr>
  <tr>
    <td><strong>微分方程</strong></td>
    <td>设级数解，比较系数</td>
    <td><span class="formula-inline" data-latex="y' = y, y'' + y = 0"></span></td>
  </tr>
  <tr>
    <td><strong>欧拉公式</strong></td>
    <td>将指数函数与三角函联系起来</td>
    <td><span class="formula-inline" data-latex="e^{i\\pi} + 1 = 0"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 幂级数展开式的应用非常广泛。它不仅在数值计算中提供了高效的近似方法，还在微分方程求解中提供了一种系统化的途径。欧拉公式则将微积分与复分析联系起来，被誉为"数学中最美的公式"之一。
  </p>
</div>
`;