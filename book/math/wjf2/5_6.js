window.SECTION_CONTENT = `
<h4>📐 函数项级数的一致收敛性及一致收敛级数的基本性质</h4>

<p>函数项级数的和函数具有哪些性质（连续性、可积性、可导性）？这些性质能否从部分和函数传递到和函数？一致收敛性是回答这些问题的关键。</p>

<h5>1. 函数项级数的一致收敛性</h5>

<p><strong>定义：</strong> 设函数项级数 <span class="formula-inline" data-latex="\\sum u_n(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上收敛于 <span class="formula-inline" data-latex="S(x)"></span>。若对于任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，存在正整数 <span class="formula-inline" data-latex="N"></span>，使得当 <span class="formula-inline" data-latex="n > N"></span> 时，对于 <span class="formula-inline" data-latex="I"></span> 上所有 <span class="formula-inline" data-latex="x"></span>，都有</p>

<div class="formula-block" data-latex="|S(x) - S_n(x)| < \\varepsilon"></div>

<p>则称级数在 <span class="formula-inline" data-latex="I"></span> 上<strong>一致收敛</strong>于 <span class="formula-inline" data-latex="S(x)"></span>。</p>

<p><strong>魏尔斯特拉斯判别法（M判别法）：</strong> 若存在常数 <span class="formula-inline" data-latex="M_n"></span>，使得</p>

<div class="formula-block" data-latex="|u_n(x)| \\le M_n \\quad (x \\in I)"></div>

<p>且 <span class="formula-inline" data-latex="\\sum M_n"></span> 收敛，则 <span class="formula-inline" data-latex="\\sum u_n(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上一致收敛。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 一致收敛比逐点收敛更强</p>
  <p>• 逐点收敛：对每个 <span class="formula-inline" data-latex="x"></span>，<span class="formula-inline" data-latex="N"></span> 可以不同</p>
  <p>• 一致收敛：对所有 <span class="formula-inline" data-latex="x"></span>，<span class="formula-inline" data-latex="N"></span> 可以统一选取</p>
</div>

<h4>📘 例题 1：判断一致收敛性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{\\sin nx}{n^2}"></span> 在 <span class="formula-inline" data-latex="[0, 2\\pi]"></span> 上是否一致收敛。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="|\\sin nx| \\le 1"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\left|\\frac{\\sin nx}{n^2}\\right| \\le \\frac{1}{n^2}"></span>
  </p>
  <p>而 <span class="formula-inline" data-latex="\\sum 1/n^2"></span> 收敛。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 一致收敛</p>
</div>

<h5>2. 一致收敛级数的基本性质</h5>

<p><strong>性质 1（连续性）：</strong> 若 <span class="formula-inline" data-latex="\\sum u_n(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上一致收敛，且每一项 <span class="formula-inline" data-latex="u_n(x)"></span> 连续，则和函数 <span class="formula-inline" data-latex="S(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上连续。</p>

<p><strong>性质 2（逐项积分）：</strong> 若 <span class="formula-inline" data-latex="\\sum u_n(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上一致收敛，且每一项连续，则</p>

<div class="formula-block" data-latex="\\int_a^b \\sum_{n=1}^{\\infty} u_n(x) dx = \\sum_{n=1}^{\\infty} \\int_a^b u_n(x) dx"></div>

<p><strong>性质 3（逐项求导）：</strong> 若 <span class="formula-inline" data-latex="\\sum u_n(x)"></span> 的每一项可导，<span class="formula-inline" data-latex="\\sum u_n'(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上一致收敛，且 <span class="formula-inline" data-latex="\\sum u_n(x)"></span> 在某点收敛，则</p>

<div class="formula-block" data-latex="\\frac{d}{dx} \\sum_{n=1}^{\\infty} u_n(x) = \\sum_{n=1}^{\\infty} u_n'(x)"></div>

<h4>📘 例题 2：利用一致收敛证明连续性</h4>

<div class="example">
  <p><strong>题目：</strong> 证明 <span class="formula-inline" data-latex="f(x) = \\sum_{n=1}^{\\infty} \\frac{\\sin nx}{n^2}"></span> 在 <span class="formula-inline" data-latex="\\mathbb{R}"></span> 上连续。</p>
  
  <p><strong>证明：</strong></p>
  <p>由例题1，该级数在 <span class="formula-inline" data-latex="[0, 2\\pi]"></span> 上一致收敛。</p>
  <p>每一项 <span class="formula-inline" data-latex="\\sin nx / n^2"></span> 连续。</p>
  <p>由一致收敛级数的连续性性质，和函数连续。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 证毕</p>
</div>

<h4>📘 例题 3：逐项积分</h4>

<div class="example">
  <p><strong>题目：</strong> 利用逐项积分求 <span class="formula-inline" data-latex="\\int_0^1 \\frac{\\ln(1+x)}{x} dx"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\ln(1+x) = \\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{x^n}{n}"></span></p>
  <p>在 <span class="formula-inline" data-latex="[0, 1]"></span> 上一致收敛（阿贝尔第二定理）。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 \\frac{\\ln(1+x)}{x} dx = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} \\int_0^1 x^{n-1} dx = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^2} = \\frac{\\pi^2}{12}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{\\pi^2}{12}"></span></p>
</div>

<h5>3. 一致收敛性总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>关键性质</th>
  </tr>
  <tr>
    <td><strong>一致收敛</strong></td>
    <td><span class="formula-inline" data-latex="\\sup_{x\\in I}|S(x)-S_n(x)| \\to 0"></span></td>
    <td>与 <span class="formula-inline" data-latex="x"></span> 无关的收敛速度</td>
  </tr>
  <tr>
    <td><strong>M判别法</strong></td>
    <td><span class="formula-inline" data-latex="|u_n(x)| \\le M_n, \\sum M_n < \\infty"></span></td>
    <td>判定一致收敛的充分条件</td>
  </tr>
  <tr>
    <td><strong>逐项积分</strong></td>
    <td><span class="formula-inline" data-latex="\\int \\sum u_n = \\sum \\int u_n"></span></td>
    <td>需要一致收敛</td>
  </tr>
  <tr>
    <td><strong>逐项求导</strong></td>
    <td><span class="formula-inline" data-latex="(\\sum u_n)' = \\sum u_n'"></span></td>
    <td>需要导数级数一致收敛</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 一致收敛性是函数项级数理论的核心概念。它保证了和函数能够继承部分和函数的连续性、可积性和可导性。逐项积分和逐项求导是幂级数和傅里叶级数理论中的重要操作。
  </p>
</div>
`;