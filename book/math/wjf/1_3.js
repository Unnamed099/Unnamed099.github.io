window.SECTION_CONTENT = `
<h3>函数的连续性与间断点</h3>

<h4>📐 函数的连续性</h4>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 的某邻域内有定义，如果</p>

<div class="formula-block" data-latex="\\lim_{x \\to x_0} f(x) = f(x_0)"></div>

<p>则称 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处<strong>连续</strong>，<span class="formula-inline" data-latex="x_0"></span> 称为 <span class="formula-inline" data-latex="f(x)"></span> 的<strong>连续点</strong>。</p>

<p><strong>等价定义（ε-δ形式）：</strong> 对于任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="|x - x_0| < \\delta"></span> 时，有</p>

<div class="formula-block" data-latex="|f(x) - f(x_0)| < \\varepsilon"></div>

<h5>左连续与右连续</h5>

<p><strong>左连续：</strong> 若 <span class="formula-inline" data-latex="\\lim_{x \\to x_0^-} f(x) = f(x_0)"></span>，则称 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处<strong>左连续</strong>。</p>

<p><strong>右连续：</strong> 若 <span class="formula-inline" data-latex="\\lim_{x \\to x_0^+} f(x) = f(x_0)"></span>，则称 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处<strong>右连续</strong>。</p>

<p><strong>定理：</strong> 函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续 <span class="formula-inline" data-latex="\\Leftrightarrow"></span> <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处既左连续又右连续。</p>

<h4>📘 例题：判断函数在某点的连续性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断函数 <span class="formula-inline" data-latex="f(x) = x^2 + 1"></span> 在 <span class="formula-inline" data-latex="x = 2"></span> 处是否连续。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(2) = 2^2 + 1 = 5"></span></p>
  <p><span class="formula-inline" data-latex="\\lim_{x \\to 2} (x^2 + 1) = 4 + 1 = 5"></span></p>
  <p>因为 <span class="formula-inline" data-latex="\\lim_{x \\to 2} f(x) = f(2)"></span>，所以 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x = 2"></span> 处连续。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 函数在 <span class="formula-inline" data-latex="x = 2"></span> 处连续。</p>
</div>

<h4>📐 函数的间断点</h4>

<p><strong>定义：</strong> 如果函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处不满足连续的条件，即</p>

<div class="formula-block" data-latex="\\lim_{x \\to x_0} f(x) \\neq f(x_0)"></div>

<p>则称 <span class="formula-inline" data-latex="x_0"></span> 为 <span class="formula-inline" data-latex="f(x)"></span> 的<strong>间断点</strong>（或不连续点）。</p>

<h5>间断点的分类</h5>

<table>
  <tr>
    <th>类型</th>
    <th>条件</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>可去间断点</strong></td>
    <td><span class="formula-inline" data-latex="\\lim_{x \\to x_0} f(x)"></span> 存在，但 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} f(x) \\neq f(x_0)"></span>（或 <span class="formula-inline" data-latex="f(x_0)"></span> 无定义）</td>
    <td><span class="formula-inline" data-latex="f(x) = \\frac{x^2 - 1}{x - 1}, x_0 = 1"></span></td>
  </tr>
  <tr>
    <td><strong>跳跃间断点</strong></td>
    <td>左极限 <span class="formula-inline" data-latex="f(x_0^-)"></span> 与右极限 <span class="formula-inline" data-latex="f(x_0^+)"></span> 都存在但不相等</td>
    <td>符号函数 <span class="formula-inline" data-latex="\\text{sgn}(x)"></span> 在 <span class="formula-inline" data-latex="x_0 = 0"></span></td>
  </tr>
  <tr>
    <td><strong>无穷间断点</strong></td>
    <td>左极限或右极限为无穷大</td>
    <td><span class="formula-inline" data-latex="f(x) = \\frac{1}{x}, x_0 = 0"></span></td>
  </tr>
  <tr>
    <td><strong>振荡间断点</strong></td>
    <td>极限不存在且不趋于无穷（振荡）</td>
    <td><span class="formula-inline" data-latex="f(x) = \\sin \\frac{1}{x}, x_0 = 0"></span></td>
  </tr>
</table>

<h4>📘 例题：判断间断点的类型</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论函数 <span class="formula-inline" data-latex="f(x) = \\frac{x^2 - 1}{x - 1}"></span> 在 <span class="formula-inline" data-latex="x = 1"></span> 处的间断点类型。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(1)"></span> 无定义，但</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 1} \\frac{x^2 - 1}{x - 1} = \\lim_{x \\to 1} \\frac{(x - 1)(x + 1)}{x - 1} = \\lim_{x \\to 1} (x + 1) = 2"></span>
  </p>
  
  <p>左极限和右极限都存在且相等为 2，但 <span class="formula-inline" data-latex="f(1)"></span> 无定义。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="x = 1"></span> 是 <strong>可去间断点</strong>。</p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 若补充定义 <span class="formula-inline" data-latex="f(1) = 2"></span>，则函数在该点可变为连续。</p>
  </div>
</div>

<h4>📘 例题：分段函数的连续性</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论函数</p>
  
  <div class="formula-block" data-latex="f(x) = \\begin{cases} x^2, & x \\le 1 \\\\ 2x - 1, & x > 1 \\end{cases}"></div>
  
  <p>在 <span class="formula-inline" data-latex="x = 1"></span> 处的连续性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(1) = 1^2 = 1"></span></p>
  
  <p><strong>左极限：</strong> <span class="formula-inline" data-latex="\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^-} x^2 = 1"></span></p>
  
  <p><strong>右极限：</strong> <span class="formula-inline" data-latex="\\lim_{x \\to 1^+} f(x) = \\lim_{x \\to 1^+} (2x - 1) = 1"></span></p>
  
  <p>因为 <span class="formula-inline" data-latex="\\lim_{x \\to 1^-} f(x) = \\lim_{x \\to 1^+} f(x) = f(1) = 1"></span>，所以函数在 <span class="formula-inline" data-latex="x = 1"></span> 处连续。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 函数在 <span class="formula-inline" data-latex="x = 1"></span> 处连续。</p>
</div>

<h4>📘 例题：跳跃间断点</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论符号函数</p>
  
  <div class="formula-block" data-latex="\\text{sgn}(x) = \\begin{cases} -1, & x < 0 \\\\ 0, & x = 0 \\\\ 1, & x > 0 \\end{cases}"></div>
  
  <p>在 <span class="formula-inline" data-latex="x = 0"></span> 处的连续性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\text{sgn}(0) = 0"></span></p>
  
  <p><strong>左极限：</strong> <span class="formula-inline" data-latex="\\lim_{x \\to 0^-} \\text{sgn}(x) = -1"></span></p>
  
  <p><strong>右极限：</strong> <span class="formula-inline" data-latex="\\lim_{x \\to 0^+} \\text{sgn}(x) = 1"></span></p>
  
  <p>因为左极限 <span class="formula-inline" data-latex="-1 \\neq 1"></span> 右极限，所以极限不存在。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="x = 0"></span> 是 <strong>跳跃间断点</strong>。</p>
</div>

<h4>📘 例题：无穷间断点</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="f(x) = \\frac{1}{x}"></span> 在 <span class="formula-inline" data-latex="x = 0"></span> 处的间断点类型。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\lim_{x \\to 0^-} \\frac{1}{x} = -\\infty"></span>，<span class="formula-inline" data-latex="\\lim_{x \\to 0^+} \\frac{1}{x} = +\\infty"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="x = 0"></span> 是 <strong>无穷间断点</strong>。</p>
</div>

<h4>📐 连续函数的运算法则</h4>

<p><strong>定理：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 和 <span class="formula-inline" data-latex="g(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续，则：</p>

<ul>
  <li><span class="formula-inline" data-latex="f(x) \\pm g(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续</li>
  <li><span class="formula-inline" data-latex="f(x) \\cdot g(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续</li>
  <li>若 <span class="formula-inline" data-latex="g(x_0) \\neq 0"></span>，则 <span class="formula-inline" data-latex="\\frac{f(x)}{g(x)}"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续</li>
</ul>

<h4>📐 闭区间上连续函数的性质</h4>

<p><strong>定理 1（最值定理）：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上必有最大值和最小值。</p>

<p><strong>定理 2（介值定理）：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，且 <span class="formula-inline" data-latex="f(a) \\neq f(b)"></span>，则对于 <span class="formula-inline" data-latex="f(a)"></span> 与 <span class="formula-inline" data-latex="f(b)"></span> 之间的任意常数 <span class="formula-inline" data-latex="C"></span>，至少存在一点 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span>，使得</p>

<div class="formula-block" data-latex="f(\\xi) = C"></div>

<p><strong>推论（零点定理）：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，且 <span class="formula-inline" data-latex="f(a) \\cdot f(b) < 0"></span>，则至少存在一点 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span>，使得</p>

<div class="formula-block" data-latex="f(\\xi) = 0"></div>

<h4>📘 例题：零点定理的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 证明方程 <span class="formula-inline" data-latex="x^3 - 3x + 1 = 0"></span> 在区间 <span class="formula-inline" data-latex="(0, 1)"></span> 内至少有一个实根。</p>
  
  <p><strong>证明：</strong></p>
  <p>设 <span class="formula-inline" data-latex="f(x) = x^3 - 3x + 1"></span>，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[0, 1]"></span> 上连续。</p>
  
  <p><span class="formula-inline" data-latex="f(0) = 1 > 0"></span></p>
  <p><span class="formula-inline" data-latex="f(1) = 1 - 3 + 1 = -1 < 0"></span></p>
  
  <p>因为 <span class="formula-inline" data-latex="f(0) \\cdot f(1) < 0"></span>，由零点定理，至少存在一点 <span class="formula-inline" data-latex="\\xi \\in (0, 1)"></span>，使得 <span class="formula-inline" data-latex="f(\\xi) = 0"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 因此方程在 <span class="formula-inline" data-latex="(0, 1)"></span> 内至少有一个实根。</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 函数的连续性是微积分中极为重要的概念。连续性保证了函数在局部范围内具有良好的性质，是导数、积分等后续内容的基础。
  </p>
</div>

<h4>📐 连续函数的运算与初等函数的连续性</h4>

<h5>一、连续函数的四则运算</h5>

<p><strong>定理 1：</strong> 若函数 <span class="formula-inline" data-latex="f(x)"></span> 和 <span class="formula-inline" data-latex="g(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处连续，则</p>

<p>（1）<span class="formula-inline" data-latex="f(x) \\pm g(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续；</p>

<p>（2）<span class="formula-inline" data-latex="f(x) \\cdot g(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续；</p>

<p>（3）若 <span class="formula-inline" data-latex="g(x_0) \\neq 0"></span>，则 <span class="formula-inline" data-latex="\\frac{f(x)}{g(x)}"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续。</p>

<p>由极限的四则运算法则和连续的定义，可直接证明上述结论。</p>

<h5>二、复合函数的连续性</h5>

<p><strong>定理 2：</strong> 设 <span class="formula-inline" data-latex="y = f[g(x)]"></span> 是由 <span class="formula-inline" data-latex="u = g(x)"></span> 与 <span class="formula-inline" data-latex="y = f(u)"></span> 复合而成。若 <span class="formula-inline" data-latex="g(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续，且 <span class="formula-inline" data-latex="f(u)"></span> 在 <span class="formula-inline" data-latex="u_0 = g(x_0)"></span> 处连续，则复合函数 <span class="formula-inline" data-latex="f[g(x)]"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处连续。</p>

<p>即</p>

<div class="formula-block" data-latex="\\lim_{x \\to x_0} f[g(x)] = f[\\lim_{x \\to x_0} g(x)] = f[g(x_0)]"></div>

<h5>三、初等函数的连续性</h5>

<p><strong>基本初等函数在其定义域内都是连续的。</strong></p>

<p>基本初等函数包括：</p>

<table>
  <tr>
    <th>函数类型</th>
    <th>示例</th>
    <th>定义域</th>
  </tr>
  <tr>
    <td><strong>常数函数</strong></td>
    <td><span class="formula-inline" data-latex="f(x) = C"></span></td>
    <td><span class="formula-inline" data-latex="\\mathbb{R}"></span></td>
  </tr>
  <tr>
    <td><strong>幂函数</strong></td>
    <td><span class="formula-inline" data-latex="f(x) = x^a"></span></td>
    <td>取决于 <span class="formula-inline" data-latex="a"></span> 的取值</td>
  </tr>
  <tr>
    <td><strong>指数函数</strong></td>
    <td><span class="formula-inline" data-latex="f(x) = a^x \\ (a > 0, a \\neq 1)"></span></td>
    <td><span class="formula-inline" data-latex="\\mathbb{R}"></span></td>
  </tr>
  <tr>
    <td><strong>对数函数</strong></td>
    <td><span class="formula-inline" data-latex="f(x) = \\log_a x \\ (a > 0, a \\neq 1)"></span></td>
    <td><span class="formula-inline" data-latex="(0, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><strong>三角函数</strong></td>
    <td><span class="formula-inline" data-latex="\\sin x, \\cos x, \\tan x"></span></td>
    <td>各自的定义域</td>
  </tr>
  <tr>
    <td><strong>反三角函数</strong></td>
    <td><span class="formula-inline" data-latex="\\arcsin x, \\arccos x, \\arctan x"></span></td>
    <td>各自的定义域</td>
  </tr>
</table>

<p><strong>初等函数：</strong> 由基本初等函数经过有限次四则运算和复合所得到的函数，称为初等函数。</p>

<p><strong>结论：</strong> <span class="formula-inline" data-latex="\\text{一切初等函数在其定义区间内都是连续的。}"></span></p>

<h4>📘 例题：判断函数的连续性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="f(x) = e^{\\sin x}"></span> 的连续性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="g(x) = \\sin x"></span> 在 <span class="formula-inline" data-latex="\\mathbb{R}"></span> 上连续，<span class="formula-inline" data-latex="f(u) = e^u"></span> 在 <span class="formula-inline" data-latex="\\mathbb{R}"></span> 上连续。</p>
  <p>由复合函数的连续性，<span class="formula-inline" data-latex="f[g(x)] = e^{\\sin x}"></span> 在 <span class="formula-inline" data-latex="\\mathbb{R}"></span> 上连续。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="e^{\\sin x}"></span> 在 <span class="formula-inline" data-latex="\\mathbb{R}"></span> 上连续。</p>
</div>

<h4>📘 例题：利用连续性求极限</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\ln(1 + x)"></span></p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x) = \\ln(1 + x)"></span> 是初等函数，在其定义域 <span class="formula-inline" data-latex="(-1, +\\infty)"></span> 内连续。</p>
  <p>因此</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\ln(1 + x) = \\ln(1 + 0) = \\ln 1 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>0</strong></p>
</div>

<h4>📘 例题：综合应用</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 1} \\frac{\\sin(x - 1)}{x - 1}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="t = x - 1"></span>，当 <span class="formula-inline" data-latex="x \\to 1"></span> 时，<span class="formula-inline" data-latex="t \\to 0"></span>。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 1} \\frac{\\sin(x - 1)}{x - 1} = \\lim_{t \\to 0} \\frac{\\sin t}{t} = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>1</strong></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 初等函数的连续性为我们求极限提供了极大的便利——对于初等函数，求极限时只需将 x 的值直接代入即可（前提是代入点在定义域内）。这一性质是微积分计算中"代入法"的理论基础。
  </p>
</div>
`;