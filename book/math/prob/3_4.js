window.SECTION_CONTENT = `
<h4>📐 二维随机变量函数的分布</h4>

<p>在实际问题中，我们经常需要研究二维随机变量函数的分布。例如，已知 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合分布，求 <span class="formula-inline" data-latex="Z = g(X, Y)"></span> 的分布。本节介绍二维随机变量函数的分布求解方法。</p>

<h5>1. 二维随机变量函数的分布——卷积公式</h5>

<p><strong>情形一：和分布 <span class="formula-inline" data-latex="Z = X + Y"></span></strong></p>

<p><strong>离散型：</strong></p>
<div class="formula-block" data-latex="P(Z = z) = \\sum_{x} P(X = x, Y = z - x)"></div>

<p><strong>连续型（卷积公式）：</strong></p>
<p>若 <span class="formula-inline" data-latex="X, Y"></span> 相互独立，则</p>
<div class="formula-block" data-latex="f_Z(z) = \\int_{-\\infty}^{+\\infty} f_X(x) f_Y(z - x) dx = \\int_{-\\infty}^{+\\infty} f_X(z - y) f_Y(y) dy"></div>

<h4>📘 例题 1：两个独立离散型随机变量的和</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X, Y"></span> 相互独立，<span class="formula-inline" data-latex="X \\sim P(2), Y \\sim P(3)"></span>，求 <span class="formula-inline" data-latex="Z = X + Y"></span> 的分布。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(Z = k) = \\sum_{i=0}^{k} P(X = i) P(Y = k - i)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\sum_{i=0}^{k} \\frac{2^i e^{-2}}{i!} \\cdot \\frac{3^{k-i} e^{-3}}{(k-i)!} = \\frac{e^{-5}}{k!} \\sum_{i=0}^{k} \\binom{k}{i} 2^i 3^{k-i} = \\frac{5^k e^{-5}}{k!}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="Z \\sim P(5)"></span>（泊松分布的可加性）</p>
</div>

<h4>📘 例题 2：两个独立连续型随机变量的和</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X, Y"></span> 独立同分布，<span class="formula-inline" data-latex="X \\sim U(0, 1), Y \\sim U(0, 1)"></span>，求 <span class="formula-inline" data-latex="Z = X + Y"></span> 的密度函数。</p>
  
  <p><strong>解：</strong></p>
  <p>由卷积公式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Z(z) = \\int_{-\\infty}^{+\\infty} f_X(x) f_Y(z-x) dx"></span>
  </p>
  <p><span class="formula-inline" data-latex="f_X(x) = 1, 0 < x < 1"></span></p>
  <p><span class="formula-inline" data-latex="f_Y(z-x) = 1, 0 < z-x < 1 \\Rightarrow z-1 < x < z"></span></p>
  
  <p>当 <span class="formula-inline" data-latex="0 < z < 1"></span> 时：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Z(z) = \\int_0^z 1 dx = z"></span>
  </p>
  <p>当 <span class="formula-inline" data-latex="1 \\le z < 2"></span> 时：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Z(z) = \\int_{z-1}^1 1 dx = 2 - z"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f_Z(z) = \\begin{cases} z, & 0 \\le z < 1 \\\\ 2 - z, & 1 \\le z \\le 2 \\\\ 0, & \\text{其他} \\end{cases}"></span>（三角分布）</p>
</div>

<h5>2. 二维随机变量函数的分布——一般方法</h5>

<p>对于一般的 <span class="formula-inline" data-latex="Z = g(X, Y)"></span>，通用的方法是<strong>分布函数法</strong>：</p>

<div class="formula-block" data-latex="F_Z(z) = P(Z \\le z) = P(g(X, Y) \\le z)"></div>

<p>然后对 <span class="formula-inline" data-latex="z"></span> 求导得密度函数。</p>

<h4>📘 例题 3：分布函数法</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 在单位圆 <span class="formula-inline" data-latex="x^2 + y^2 \\le 1"></span> 上均匀分布，求 <span class="formula-inline" data-latex="Z = \\sqrt{X^2 + Y^2}"></span> 的分布。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x, y) = 1/\\pi, x^2 + y^2 \\le 1"></span></p>
  <p>当 <span class="formula-inline" data-latex="0 \\le z \\le 1"></span> 时：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F_Z(z) = P(\\sqrt{X^2+Y^2} \\le z) = \\frac{\\pi z^2}{\\pi} = z^2"></span>
  </p>
  <p>求导得：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_Z(z) = 2z, \\quad 0 \\le z \\le 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f_Z(z) = 2z, 0 \\le z \\le 1"></span></p>
</div>

<h5>3. 二维随机变量函数分布总结</h5>

<table>
  <tr>
    <th>函数类型</th>
    <th>求解方法</th>
    <th>关键公式</th>
  </tr>
  <tr>
    <td><strong>和 <span class="formula-inline" data-latex="Z = X + Y"></span></strong></td>
    <td>卷积公式（独立时）</td>
    <td><span class="formula-inline" data-latex="f_Z(z) = \\int f_X(x) f_Y(z-x) dx"></span></td>
  </tr>
  <tr>
    <td><strong>差 <span class="formula-inline" data-latex="Z = X - Y"></span></strong></td>
    <td>卷积公式变形</td>
    <td><span class="formula-inline" data-latex="f_Z(z) = \\int f_X(x) f_Y(x-z) dx"></span></td>
  </tr>
  <tr>
    <td><strong>一般函数</strong></td>
    <td>分布函数法</td>
    <td><span class="formula-inline" data-latex="F_Z(z) = P(g(X,Y) \\le z)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二维随机变量函数的分布是概率论中的重要内容。卷积公式为求独立随机变量和（差）的分布提供了简便方法；分布函数法则适用于更一般的函数变换。这些方法在信号处理、统计学和金融工程中有广泛应用。
  </p>
</div>
`;