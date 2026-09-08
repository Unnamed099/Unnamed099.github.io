window.SECTION_CONTENT = `
<h4>📐 无穷小与无穷大</h4>

<h5>🔍 无穷小量</h5>

<p><strong>定义：</strong> 如果在某个变化过程中，函数 <span class="formula-inline" data-latex="f(x)"></span> 的极限为 0，则称 <span class="formula-inline" data-latex="f(x)"></span> 是<strong>无穷小量</strong>。</p>

<div class="formula-block" data-latex="\\lim_{x \\to a} f(x) = 0"></div>

<p>记作：<span class="formula-inline" data-latex="f(x) \\to 0 \\ (x \\to a)"></span></p>

<p><strong>严格数学定义（ε-δ形式）：</strong> 对于任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta"></span> 时，有 <span class="formula-inline" data-latex="|f(x)| < \\varepsilon"></span>。</p>

<h4>📘 例题：用定义证明两个无穷小量的和仍为无穷小量</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="\\alpha(x)"></span> 和 <span class="formula-inline" data-latex="\\beta(x)"></span> 是当 <span class="formula-inline" data-latex="x \\to x_0"></span> 时的无穷小量。用 ε-δ 定义证明 <span class="formula-inline" data-latex="\\alpha(x) + \\beta(x)"></span> 也是当 <span class="formula-inline" data-latex="x \\to x_0"></span> 时的无穷小量。</p>
  
  <p><strong>证明：</strong></p>
  
  <p><strong>已知条件：</strong></p>
  <p>因为 <span class="formula-inline" data-latex="\\alpha(x)"></span> 是无穷小量，根据 ε-δ 定义：</p>
  <p style="text-align: center; padding: 6px; background: #f5f5f5; border-radius: 4px; margin: 4px 0;">
    对于任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta_1 > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta_1"></span> 时，有 <span class="formula-inline" data-latex="|\\alpha(x)| < \\varepsilon"></span>
  </p>
  
  <p>因为 <span class="formula-inline" data-latex="\\beta(x)"></span> 是无穷小量：</p>
  <p style="text-align: center; padding: 6px; background: #f5f5f5; border-radius: 4px; margin: 4px 0;">
    对于任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta_2 > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta_2"></span> 时，有 <span class="formula-inline" data-latex="|\\beta(x)| < \\varepsilon"></span>
  </p>
  
  <p><strong>证明目标：</strong></p>
  <p>证明 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} [\\alpha(x) + \\beta(x)] = 0"></span></p>
  
  <p><strong>证明过程：</strong></p>
  <p>对于任意给定的 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，取 <span class="formula-inline" data-latex="\\delta = \\min\\{\\delta_1, \\delta_2\\}"></span></p>
  
  <p>当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta"></span> 时，有：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|\\alpha(x) + \\beta(x)| \\le |\\alpha(x)| + |\\beta(x)| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon"></span>
  </p>
  
  <p>（因为当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta \\le \\delta_1"></span> 时，<span class="formula-inline" data-latex="|\\alpha(x)| < \\varepsilon/2"></span>；</p>
  <p>当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta \\le \\delta_2"></span> 时，<span class="formula-inline" data-latex="|\\beta(x)| < \\varepsilon/2"></span>）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>因此：</strong> 由 ε-δ 定义可知，<span class="formula-inline" data-latex="\\lim_{x \\to x_0} [\\alpha(x) + \\beta(x)] = 0"></span></p>
  
  <p style="margin-top: 8px; color: #2e7d32;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="\\alpha(x) + \\beta(x)"></span> 是当 <span class="formula-inline" data-latex="x \\to x_0"></span> 时的无穷小量。</p>
</div>
<h4>💭 思考题</h4>

<div style="background: #f3e5f5; padding: 16px 20px; border-left: 4px solid #9c27b0; margin: 15px 0; border-radius: 0 6px 6px 0;">
  <p style="font-size: 1.05rem; margin: 0;">
    <strong>🤔 思考：</strong> 看完这个例题，谈谈你对无穷量与普通数值（如 0、1、100）之间本质区别的理解。
  </p>
</div>
<h5>📈 无穷大量</h5>
<p><strong>定义（无穷大量）：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 的某去心邻域内有定义。若对于任意给定的 <span class="formula-inline" data-latex="M > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta"></span> 时，有</p>

<div class="formula-block" data-latex="|f(x)| > M"></div>

<p>则称 <span class="formula-inline" data-latex="f(x)"></span> 为当 <span class="formula-inline" data-latex="x \\to x_0"></span> 时的<strong>无穷大量</strong>，记作</p>

<div class="formula-block" data-latex="\\lim_{x \\to x_0} f(x) = \\infty"></div>

<p>或 <span class="formula-inline" data-latex="f(x) \\to \\infty \\ (x \\to x_0)"></span>。</p>

<h4>📐 有界函数</h4>

<p><strong>定义（有界函数）：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上有定义。若存在常数 <span class="formula-inline" data-latex="M > 0"></span>，使得对于所有 <span class="formula-inline" data-latex="x \\in I"></span>，都有</p>

<div class="formula-block" data-latex="|f(x)| \\le M"></div>

<p>则称 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上<strong>有界</strong>。否则称 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上<strong>无界</strong>。</p>

<p><strong>等价定义（上界与下界）：</strong></p>
<ul>
  <li>若存在常数 <span class="formula-inline" data-latex="K_1"></span>，使得 <span class="formula-inline" data-latex="f(x) \\le K_1"></span> 对所有 <span class="formula-inline" data-latex="x \\in I"></span> 成立，则称 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上<strong>有上界</strong>，<span class="formula-inline" data-latex="K_1"></span> 称为上界。</li>
  <li>若存在常数 <span class="formula-inline" data-latex="K_2"></span>，使得 <span class="formula-inline" data-latex="f(x) \\ge K_2"></span> 对所有 <span class="formula-inline" data-latex="x \\in I"></span> 成立，则称 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上<strong>有下界</strong>，<span class="formula-inline" data-latex="K_2"></span> 称为下界。</li>
  <li>函数有界 <span class="formula-inline" data-latex="\\Leftrightarrow"></span> 同时有上界和下界。</li>
</ul>

<h4>📐 无穷量的性质</h4>
<h5>定理一：两个无穷小量的和、差、积仍为无穷小量</h5>
<p>上文的例题己经给出和的证明，大家可以按需求把其它的都证明了。</p>

<h5>定理二：有界函数与无穷小量的乘积仍为无穷小量</h5>

<h5>推论 1：常数与无穷小的乘积是无穷小</h5>

<h5>推论 2：有限个无穷小的乘积是无穷小</h5>

<h5>定理 3：极限的四则运算法则</h5>

<p><strong>定理3：</strong> 如果 <span class="formula-inline" data-latex="\\lim f(x) = A"></span>，<span class="formula-inline" data-latex="\\lim g(x) = B"></span>，那么：</p>

<p><strong>(1) 加减法法则：</strong></p>
<div class="formula-block" data-latex="\\lim [f(x) \\pm g(x)] = \\lim f(x) \\pm \\lim g(x) = A \\pm B"></div>

<p><strong>(2) 乘法法则：</strong></p>
<div class="formula-block" data-latex="\\lim [f(x) \\cdot g(x)] = \\lim f(x) \\cdot \\lim g(x) = A \\cdot B"></div>

<p><strong>(3) 除法法则：</strong> 若又有 <span class="formula-inline" data-latex="B \\neq 0"></span>，则</p>
<div class="formula-block" data-latex="\\lim \\frac{f(x)}{g(x)} = \\frac{\\lim f(x)}{\\lim g(x)} = \\frac{A}{B}"></div>

<h4>📘 例题：用 ε-δ 定义证明极限的乘法法则</h4>

<div class="example">
  <p><strong>题目：</strong> 用 ε-δ 定义证明：若 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} f(x) = A"></span>，<span class="formula-inline" data-latex="\\lim_{x \\to x_0} g(x) = B"></span>，则</p>
  
  <div class="formula-block" data-latex="\\lim_{x \\to x_0} [f(x) \\cdot g(x)] = A \\cdot B"></div>
  
  <p><strong>证明：</strong></p>
  
  <p><strong>分析思路：</strong></p>
  <p>要证明 <span class="formula-inline" data-latex="f(x) \\cdot g(x) \\to A \\cdot B"></span>，只需证明：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|f(x) \\cdot g(x) - A \\cdot B| < \\varepsilon"></span>
  </p>
  
  <p><strong>关键技巧（加减同一项）：</strong></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(x) \\cdot g(x) - A \\cdot B = f(x) \\cdot g(x) - A \\cdot g(x) + A \\cdot g(x) - A \\cdot B"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= g(x)[f(x) - A] + A[g(x) - B]"></span>
  </p>
  
  <p>由三角不等式：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|f(x) \\cdot g(x) - A \\cdot B| \\le |g(x)| \\cdot |f(x) - A| + |A| \\cdot |g(x) - B|"></span>
  </p>
  
  <p><strong>证明过程：</strong></p>
  
  <p><strong>第一步：</strong> 因为 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} g(x) = B"></span>，由极限的局部有界性，存在 <span class="formula-inline" data-latex="M > 0"></span> 和 <span class="formula-inline" data-latex="\\delta_1 > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta_1"></span> 时，有 <span class="formula-inline" data-latex="|g(x)| \\le M"></span>。</p>
  
  <p><strong>第二步：</strong> 由 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} f(x) = A"></span>，对任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，取 <span class="formula-inline" data-latex="\\varepsilon_1 = \\frac{\\varepsilon}{2M} > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta_2 > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta_2"></span> 时，有</p>
  
  <p style="text-align: center; padding: 6px; background: #f5f5f5; border-radius: 4px; margin: 4px 0;">
    <span class="formula-inline" data-latex="|f(x) - A| < \\frac{\\varepsilon}{2M}"></span>
  </p>
  
  <p><strong>第三步：</strong> 由 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} g(x) = B"></span>，取 <span class="formula-inline" data-latex="\\varepsilon_2 = \\frac{\\varepsilon}{2(|A| + 1)} > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta_3 > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta_3"></span> 时，有</p>
  
  <p style="text-align: center; padding: 6px; background: #f5f5f5; border-radius: 4px; margin: 4px 0;">
    <span class="formula-inline" data-latex="|g(x) - B| < \\frac{\\varepsilon}{2(|A| + 1)}"></span>
  </p>
  
  <p><strong>第四步：</strong> 取 <span class="formula-inline" data-latex="\\delta = \\min\\{\\delta_1, \\delta_2, \\delta_3\\}"></span>，当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta"></span> 时：</p>
  
  <p style="text-align: center; padding: 8px; background: #e8f5e9; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|f(x) \\cdot g(x) - A \\cdot B| \\le |g(x)| \\cdot |f(x) - A| + |A| \\cdot |g(x) - B|"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #e8f5e9; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="< M \\cdot \\frac{\\varepsilon}{2M} + |A| \\cdot \\frac{\\varepsilon}{2(|A| + 1)} < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>因此：</strong> 由 ε-δ 定义可知，<span class="formula-inline" data-latex="\\lim_{x \\to x_0} [f(x) \\cdot g(x)] = A \\cdot B"></span>，乘法法则得证。</p>
  
  <div style="background: #fff3e0; padding: 10px 14px; border-radius: 4px; margin-top: 10px;">
    <p style="margin: 0; font-size: 0.9rem;">
      💡 <strong>证明要点：</strong> 
      通过"加减同一项"的技巧，将 <span class="formula-inline" data-latex="f(x)g(x) - AB"></span> 分解为两个可以分别控制的部分，再利用三角不等式放缩。
    </p>
  </div>
</div>

<h5>推论 1</h5>
<p>如果 <span class="formula-inline" data-latex="\\lim f(x)"></span> 存在，而 <span class="formula-inline" data-latex="c"></span> 为常数，那么</p>
<div class="formula-block" data-latex="\\lim [cf(x)] = c \\lim f(x)."></div>
<p>就是说，求极限时，常数因子可以提到极限记号外面。这是因为 <span class="formula-inline" data-latex="\\lim c = c"></span>。</p>

<h5>推论 2</h5>
<p>如果 <span class="formula-inline" data-latex="\\lim f(x)"></span> 存在，而 <span class="formula-inline" data-latex="n"></span> 是正整数，那么</p>
<div class="formula-block" data-latex="\\lim [f(x)]^n = [\\lim f(x)]^n."></div>
<p>这是因为</p>
<div class="formula-block" data-latex="\\lim [f(x)]^n = \\lim [f(x) \\cdot f(x) \\cdot \\cdots \\cdot f(x)]"></div>
<div class="formula-block" data-latex="= \\lim f(x) \\cdot \\lim f(x) \\cdot \\cdots \\cdot \\lim f(x) = [\\lim f(x)]^n."></div>

<h5>定理 5</h5>
<p>如果 <span class="formula-inline" data-latex="\\varphi(x) \\geq \\psi(x)"></span>，而 <span class="formula-inline" data-latex="\\lim \\varphi(x) = A"></span>，<span class="formula-inline" data-latex="\\lim \\psi(x) = B"></span>，那么 <span class="formula-inline" data-latex="A \\geq B"></span>。</p>

<h4>📘 例题：证明定理 5</h4>

<div class="example">
  <p><strong>题目：</strong> 证明：如果 <span class="formula-inline" data-latex="\\varphi(x) \\geq \\psi(x)"></span>，而 <span class="formula-inline" data-latex="\\lim \\varphi(x) = A"></span>，<span class="formula-inline" data-latex="\\lim \\psi(x) = B"></span>，那么 <span class="formula-inline" data-latex="A \\geq B"></span>。</p>
  
  <p><strong>证明：</strong></p>
  
  <p><strong>第一步：</strong> 令 <span class="formula-inline" data-latex="f(x) = \\varphi(x) - \\psi(x)"></span>，则 <span class="formula-inline" data-latex="f(x) \\geq 0"></span>。</p>
  
  <p><strong>第二步：</strong> 由本节定理 3（极限的四则运算法则）有</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim f(x) = \\lim [\\varphi(x) - \\psi(x)] = \\lim \\varphi(x) - \\lim \\psi(x) = A - B."></span>
  </p>
  
  <p><strong>第三步：</strong> 由第三节定理 3 推论（若 <span class="formula-inline" data-latex="f(x) \\geq 0"></span>，则 <span class="formula-inline" data-latex="\\lim f(x) \\geq 0"></span>），有 <span class="formula-inline" data-latex="\\lim f(x) \\geq 0"></span>，即 <span class="formula-inline" data-latex="A - B \\geq 0"></span>。</p>
  
  <p style="text-align: center; padding: 8px; background: #e8f5e9; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\therefore A \\geq B"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 定理 5得证。</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 这个证明展示了如何利用极限的四则运算法则和已知的推论来推导新的定理，是数学证明中典型的演绎推理过程。
  </p>
</div>

<h5>定理 6 (复合函数的极限运算法则)</h5>
<p>设函数 <span class="formula-inline" data-latex="y = f[g(x)]"></span> 是由函数 <span class="formula-inline" data-latex="u = g(x)"></span> 与函数 <span class="formula-inline" data-latex="y = f(u)"></span> 复合而成，<span class="formula-inline" data-latex="f[g(x)]"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 的某去心邻域内有定义，若 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} g(x) = u_0"></span>，</p>

<div class="formula-block" data-latex="\\lim_{u \\to u_0} f(u) = A,"></div>

<p>且存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，当 <span class="formula-inline" data-latex="x \\in \\overset{\\circ}{U}(x_0, \\delta_0)"></span> 时，有 <span class="formula-inline" data-latex="g(x) \\neq u_0"></span>，则</p>

<div class="formula-block" data-latex="\\lim_{x \\to x_0} f[g(x)] = \\lim_{u \\to u_0} f(u) = A."></div>

<h5>无穷小的比较</h5>

<p><span class="formula-inline" data-latex="\\alpha"></span> 及 <span class="formula-inline" data-latex="\\beta"></span> 都是在同一个自变量的变化过程中的无穷小，且 <span class="formula-inline" data-latex="\\alpha \\neq 0"></span>，</p>

<div class="formula-block" data-latex="\\lim \\frac{\\beta}{\\alpha}"></div>

<h5>定义</h5>

<p>如果 <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha} = 0"></span>，那么就说 <span class="formula-inline" data-latex="\\beta"></span> 是比 <span class="formula-inline" data-latex="\\alpha"></span> <strong>高阶的无穷小</strong>，记作 <span class="formula-inline" data-latex="\\beta = o(\\alpha)"></span>；</p>

<p>如果 <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha} = \\infty"></span>，那么就说 <span class="formula-inline" data-latex="\\beta"></span> 是比 <span class="formula-inline" data-latex="\\alpha"></span> <strong>低阶的无穷小</strong>；</p>

<p>如果 <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha} = c \\neq 0"></span>，那么就说 <span class="formula-inline" data-latex="\\beta"></span> 与 <span class="formula-inline" data-latex="\\alpha"></span> 是<strong>同阶无穷小</strong>；</p>

<p>如果 <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha^k} = c \\neq 0, k > 0"></span>，那么就说 <span class="formula-inline" data-latex="\\beta"></span> 是关于 <span class="formula-inline" data-latex="\\alpha"></span> 的 <span class="formula-inline" data-latex="k"></span> <strong>阶无穷小</strong>；</p>

<p>如果 <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha} = 1"></span>，那么就说 <span class="formula-inline" data-latex="\\beta"></span> 与 <span class="formula-inline" data-latex="\\alpha"></span> 是<strong>等价无穷小</strong>，记作 <span class="formula-inline" data-latex="\\alpha \\sim \\beta"></span>。</p>

<h5>定理 1</h5>
<p><span class="formula-inline" data-latex="\\beta"></span> 与 <span class="formula-inline" data-latex="\\alpha"></span> 是等价无穷小的充分必要条件为</p>
<div class="formula-block" data-latex="\\beta = \\alpha + o(\\alpha)."></div>

<h4>📘 例题：证明定理 1（等价无穷小的充要条件）</h4>

<div class="example">
  <p><strong>题目：</strong> 证明 <span class="formula-inline" data-latex="\\beta"></span> 与 <span class="formula-inline" data-latex="\\alpha"></span> 是等价无穷小的充分必要条件为</p>
  
  <div class="formula-block" data-latex="\\beta = \\alpha + o(\\alpha)."></div>
  
  <p><strong>证明：</strong></p>
  
  <p><strong>必要性：</strong> 设 <span class="formula-inline" data-latex="\\alpha \\sim \\beta"></span>，则</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim \\frac{\\beta - \\alpha}{\\alpha} = \\lim \\left( \\frac{\\beta}{\\alpha} - 1 \\right) = \\lim \\frac{\\beta}{\\alpha} - 1 = 0,"></span>
  </p>
  
  <p>因此 <span class="formula-inline" data-latex="\\beta - \\alpha = o(\\alpha)"></span>，即 <span class="formula-inline" data-latex="\\beta = \\alpha + o(\\alpha)"></span>。</p>
  
  <p><strong>充分性：</strong> 设 <span class="formula-inline" data-latex="\\beta = \\alpha + o(\\alpha)"></span>，则</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha} = \\lim \\frac{\\alpha + o(\\alpha)}{\\alpha} = \\lim \\left( 1 + \\frac{o(\\alpha)}{\\alpha} \\right) = 1,"></span>
  </p>
  
  <p>因此 <span class="formula-inline" data-latex="\\alpha \\sim \\beta"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 定理 1 得证。</p>
</div>


<h5>定理 2</h5>
<p>设 <span class="formula-inline" data-latex="\\alpha \\sim \\tilde{\\alpha}"></span>，<span class="formula-inline" data-latex="\\beta \\sim \\tilde{\\beta}"></span>，且 <span class="formula-inline" data-latex="\\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}}"></span> 存在，则</p>
<div class="formula-block" data-latex="\\lim \\frac{\\beta}{\\alpha} = \\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}}."></div>


<h4>📘 例题：证明定理 2</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="\\alpha \\sim \\tilde{\\alpha}"></span>，<span class="formula-inline" data-latex="\\beta \\sim \\tilde{\\beta}"></span>，且 <span class="formula-inline" data-latex="\\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}}"></span> 存在，则</p>
  
  <div class="formula-block" data-latex="\\lim \\frac{\\beta}{\\alpha} = \\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}}."></div>
  
  <p><strong>证明：</strong></p>
  
  <p>因为 <span class="formula-inline" data-latex="\\alpha \\sim \\tilde{\\alpha}"></span>，所以 <span class="formula-inline" data-latex="\\lim \\frac{\\alpha}{\\tilde{\\alpha}} = 1"></span>，</p>
  
  <p>因为 <span class="formula-inline" data-latex="\\beta \\sim \\tilde{\\beta}"></span>，所以 <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\tilde{\\beta}} = 1"></span>。</p>
  
  <p>于是</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim \\frac{\\beta}{\\alpha} = \\lim \\left( \\frac{\\beta}{\\tilde{\\beta}} \\cdot \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}} \\cdot \\frac{\\tilde{\\alpha}}{\\alpha} \\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim \\frac{\\beta}{\\tilde{\\beta}} \\cdot \\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}} \\cdot \\lim \\frac{\\tilde{\\alpha}}{\\alpha}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 \\cdot \\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}} \\cdot 1 = \\lim \\frac{\\tilde{\\beta}}{\\tilde{\\alpha}}."></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 定理 2（等价无穷小替换定理）得证。</p>
  
  <div style="background: #fff3e0; padding: 10px 14px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 <strong>意义：</strong> 这个定理说明，在求两个无穷小之比的极限时，可以用它们的等价无穷小来替换，极限值不变。这是等价无穷小替换法的理论基础。</p>
  </div>
</div>


<h3>定理 1</h3>
<p>如果</p>
<p>（1）当 <span class="formula-inline" data-latex="x \\in \\overset{\\circ}{U}(x_0, r)"></span>（或 <span class="formula-inline" data-latex="|x| > M"></span>）时，</p>
<div class="formula-block" data-latex="g(x) \\leq f(x) \\leq h(x)"></div>
<p>（2）</p>
<div class="formula-block" data-latex="\\lim_{x \\to x_0} g(x) = A, \\quad \\lim_{x \\to x_0} h(x) = A,"></div>
<p><span class="formula-inline" data-latex="(x \\to +\\infty)"></span> <span class="formula-inline" data-latex="(x \\to -\\infty)"></span></p>
<p>那么 <span class="formula-inline" data-latex="\\lim_{x \\to x_0} f(x)"></span> 存在，且等于 <span class="formula-inline" data-latex="A"></span>。</p>

<h3>定理 2</h3>
<p>设函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 的某个左邻域内单调并且有界，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 的左极限 <span class="formula-inline" data-latex="f(x_0^-)"></span> 必定存在。</p>

<p style="text-align: right; font-size: 0.9rem; color: #555; margin-top: 5px;">*柯西 (Cauchy) ①极限存在准则</p>
`