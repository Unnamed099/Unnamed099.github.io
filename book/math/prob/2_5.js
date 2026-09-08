window.SECTION_CONTENT = `
<h4>📐 随机变量函数的分布</h4>

<p>在实际问题中，我们经常需要研究随机变量函数的分布。例如，已知 <span class="formula-inline" data-latex="X"></span> 的分布，求 <span class="formula-inline" data-latex="Y = g(X)"></span> 的分布。本节介绍离散型和连续型两种情形下随机变量函数分布的求解方法。</p>

<h5>1. 离散型随机变量函数的分布</h5>

<p>若 <span class="formula-inline" data-latex="X"></span> 是离散型随机变量，<span class="formula-inline" data-latex="Y = g(X)"></span>，则 <span class="formula-inline" data-latex="Y"></span> 的分布律为</p>

<div class="formula-block" data-latex="P(Y = y) = \\sum_{x: g(x) = y} P(X = x)"></div>

<p>即把 <span class="formula-inline" data-latex="X"></span> 的所有取值中使 <span class="formula-inline" data-latex="g(x) = y"></span> 的概率相加。</p>

<h4>📘 例题 1：离散型随机变量函数的分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X"></span> 的分布律为 <span class="formula-inline" data-latex="P(X=-1)=0.3, P(X=0)=0.4, P(X=1)=0.3"></span>，求 <span class="formula-inline" data-latex="Y = X^2"></span> 的分布律。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="Y = X^2"></span> 的取值为 0, 1。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(Y=0) = P(X=0) = 0.4"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(Y=1) = P(X=-1) + P(X=1) = 0.3 + 0.3 = 0.6"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="P(Y=0)=0.4, P(Y=1)=0.6"></span></p>
</div>

<h5>2. 连续型随机变量函数的分布</h5>

<p><strong>方法一：分布函数法</strong></p>

<p>先求 <span class="formula-inline" data-latex="Y = g(X)"></span> 的分布函数 <span class="formula-inline" data-latex="F_Y(y) = P(Y \\le y) = P(g(X) \\le y)"></span>，然后对 <span class="formula-inline" data-latex="y"></span> 求导得密度函数。</p>

<p><strong>方法二：公式法（单调函数）</strong></p>

<p>若 <span class="formula-inline" data-latex="y = g(x)"></span> 是严格单调函数，其反函数为 <span class="formula-inline" data-latex="x = h(y)"></span>，则</p>

<div class="formula-block" data-latex="f_Y(y) = f_X(h(y)) \\cdot |h'(y)|"></div>

<h4>📘 例题 2：线性变换的分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim N(0, 1)"></span>，求 <span class="formula-inline" data-latex="Y = 2X + 3"></span> 的分布。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="Y = 2X + 3"></span> 是线性变换，反函数 <span class="formula-inline" data-latex="X = (Y-3)/2"></span>，<span class="formula-inline" data-latex="h'(y) = 1/2"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Y(y) = f_X\\left(\\frac{y-3}{2}\\right) \\cdot \\frac{1}{2} = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{(y-3)^2}{8}} \\cdot \\frac{1}{2}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{\\sqrt{2\\pi} \\cdot 2} e^{-\\frac{(y-3)^2}{2 \\cdot 4}} = \\frac{1}{\\sqrt{2\\pi} \\cdot 2} e^{-\\frac{(y-3)^2}{2 \\cdot 2^2}}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="Y \\sim N(3, 4)"></span></p>
</div>

<h4>📘 例题 3：平方变换的分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim N(0, 1)"></span>，求 <span class="formula-inline" data-latex="Y = X^2"></span> 的分布。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="Y = X^2"></span> 不是单调函数，用分布函数法。</p>
  <p>当 <span class="formula-inline" data-latex="y < 0"></span> 时，<span class="formula-inline" data-latex="F_Y(y) = 0"></span></p>
  <p>当 <span class="formula-inline" data-latex="y \\ge 0"></span> 时：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F_Y(y) = P(Y \\le y) = P(-\\sqrt{y} \\le X \\le \\sqrt{y})"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\Phi(\\sqrt{y}) - \\Phi(-\\sqrt{y}) = 2\\Phi(\\sqrt{y}) - 1"></span>
  </p>
  <p>求导得密度函数：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Y(y) = \\frac{1}{\\sqrt{2\\pi y}} e^{-y/2}, \\quad y > 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="Y \\sim \\chi^2(1)"></span>（卡方分布，自由度为 1）</p>
</div>

<h5>3. 随机变量函数分布总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>方法</th>
    <th>关键步骤</th>
  </tr>
  <tr>
    <td><strong>离散型</strong></td>
    <td>概率相加法</td>
    <td>将相同函数值的概率相加</td>
  </tr>
  <tr>
    <td><strong>连续型（单调）</strong></td>
    <td>公式法</td>
    <td><span class="formula-inline" data-latex="f_Y(y) = f_X(h(y))|h'(y)|"></span></td>
  </tr>
  <tr>
    <td><strong>连续型（非单调）</strong></td>
    <td>分布函数法</td>
    <td>先求分布函数，再求导</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 随机变量函数的分布是概率论中的重要内容。对于离散型，直接相加即可；对于连续型，分布函数法是通用方法，公式法则适用于单调变换的情形。正态分布的线性变换仍然服从正态分布，这是正态分布的重要性质。
  </p>
</div>
`;