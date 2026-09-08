window.SECTION_CONTENT = `
<h4>📐 对弧长的曲线积分（第一类曲线积分）</h4>

<p>曲线积分是定积分在曲线上的推广。第一类曲线积分（对弧长的曲线积分）与曲线的方向无关，它计算的是函数在曲线上的累积效应。</p>

<h5>1. 对弧长的曲线积分的概念与性质</h5>

<p><strong>问题引入：</strong> 求一条质量不均匀的细杆的总质量。设细杆的形状为平面曲线 <span class="formula-inline" data-latex="L"></span>，线密度为 <span class="formula-inline" data-latex="\\rho(x, y)"></span>。</p>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="L"></span> 为 <span class="formula-inline" data-latex="xOy"></span> 平面内的一条光滑曲线，函数 <span class="formula-inline" data-latex="f(x, y)"></span> 在 <span class="formula-inline" data-latex="L"></span> 上有界。将 <span class="formula-inline" data-latex="L"></span> 任意分成 <span class="formula-inline" data-latex="n"></span> 个小段，第 <span class="formula-inline" data-latex="i"></span> 段弧长为 <span class="formula-inline" data-latex="\\Delta s_i"></span>，任取 <span class="formula-inline" data-latex="(\\xi_i, \\eta_i)"></span>，若</p>

<div class="formula-block" data-latex="\\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i, \\eta_i) \\Delta s_i"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x, y)"></span> 在曲线 <span class="formula-inline" data-latex="L"></span> 上<strong>对弧长的曲线积分</strong>（第一类曲线积分），记作</p>

<div class="formula-block" data-latex="\\int_L f(x, y) ds"></div>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 第一类曲线积分与曲线的<strong>方向无关</strong></p>
  <p>• 当 <span class="formula-inline" data-latex="f(x, y) \\equiv 1"></span> 时，积分值等于曲线的<strong>弧长</strong></p>
  <p>• 物理意义：线密度为 <span class="formula-inline" data-latex="f(x, y)"></span> 的曲线质量</p>
</div>

<p><strong>性质：</strong></p>
<ul>
  <li>线性性质：<span class="formula-inline" data-latex="\\int_L [\\alpha f + \\beta g] ds = \\alpha\\int_L f ds + \\beta\\int_L g ds"></span></li>
  <li>可加性：若 <span class="formula-inline" data-latex="L = L_1 \\cup L_2"></span>，则 <span class="formula-inline" data-latex="\\int_L f ds = \\int_{L_1} f ds + \\int_{L_2} f ds"></span></li>
  <li>与方向无关：<span class="formula-inline" data-latex="\\int_{L^-} f ds = \\int_L f ds"></span></li>
</ul>

<h5>2. 对弧长的曲线积分的计算法</h5>

<p><strong>情形一：参数方程</strong></p>
<p>若 <span class="formula-inline" data-latex="L: \\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}, \\; t \\in [\\alpha, \\beta]"></span>，则</p>
<div class="formula-block" data-latex="\\int_L f(x, y) ds = \\int_\\alpha^\\beta f[x(t), y(t)] \\sqrt{[x'(t)]^2 + [y'(t)]^2} dt"></div>

<p><strong>情形二：显式方程</strong></p>
<p>若 <span class="formula-inline" data-latex="L: y = y(x), \\; x \\in [a, b]"></span>，则</p>
<div class="formula-block" data-latex="\\int_L f(x, y) ds = \\int_a^b f[x, y(x)] \\sqrt{1 + [y'(x)]^2} dx"></div>

<p><strong>情形三：极坐标方程</strong></p>
<p>若 <span class="formula-inline" data-latex="L: r = r(\\theta), \\; \\theta \\in [\\alpha, \\beta]"></span>，则</p>
<div class="formula-block" data-latex="\\int_L f(x, y) ds = \\int_\\alpha^\\beta f[r(\\theta)\\cos\\theta, r(\\theta)\\sin\\theta] \\sqrt{r^2 + (r')^2} d\\theta"></div>

<h4>📘 例题 1：参数方程计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_L (x^2 + y^2) ds"></span>，其中 <span class="formula-inline" data-latex="L: x = a\\cos t, y = a\\sin t, 0 \\le t \\le 2\\pi"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="x' = -a\\sin t, y' = a\\cos t, \\sqrt{(x')^2 + (y')^2} = a"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_L (x^2 + y^2) ds = \\int_0^{2\\pi} a^2 \\cdot a dt = a^3 \\int_0^{2\\pi} dt = 2\\pi a^3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2\\pi a^3"></span></p>
</div>

<h4>📘 例题 2：显式方程计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_L y ds"></span>，其中 <span class="formula-inline" data-latex="L: y = x^2, 0 \\le x \\le 1"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="y' = 2x, \\sqrt{1 + (y')^2} = \\sqrt{1 + 4x^2}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_L y ds = \\int_0^1 x^2 \\sqrt{1 + 4x^2} dx"></span>
  </p>
  <p>令 <span class="formula-inline" data-latex="x = \\frac{1}{2}\\tan\\theta"></span>，则 <span class="formula-inline" data-latex="\\sqrt{1+4x^2} = \\sec\\theta, dx = \\frac{1}{2}\\sec^2\\theta d\\theta"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{8} \\int_0^{\\arctan 2} \\tan^2\\theta \\sec^3\\theta d\\theta = \\frac{1}{8} \\int_0^{\\arctan 2} (\\sec^5\\theta - \\sec^3\\theta) d\\theta"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{8} \\left[ \\frac{1}{4}\\sec^3\\theta\\tan\\theta + \\frac{3}{8}(\\sec\\theta\\tan\\theta + \\ln|\\sec\\theta+\\tan\\theta|) - \\frac{1}{2}(\\sec\\theta\\tan\\theta + \\ln|\\sec\\theta+\\tan\\theta|) \\right]_0^{\\arctan 2}"></span></p>
</div>

<h4>📘 例题 3：空间曲线的弧长积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_L xyz ds"></span>，其中 <span class="formula-inline" data-latex="L: x = t, y = t^2, z = t^3, 0 \\le t \\le 1"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="x'=1, y'=2t, z'=3t^2, ds = \\sqrt{1 + 4t^2 + 9t^4} dt"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_L xyz ds = \\int_0^1 t \\cdot t^2 \\cdot t^3 \\sqrt{1 + 4t^2 + 9t^4} dt"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\int_0^1 t^6 \\sqrt{1 + 4t^2 + 9t^4} dt"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 该积分可用数值方法计算</p>
</div>

<h5>3. 对弧长的曲线积分总结</h5>

<table>
  <tr>
    <th>曲线形式</th>
    <th>计算公式</th>
    <th>弧长元素</th>
  </tr>
  <tr>
    <td><strong>参数方程</strong></td>
    <td><span class="formula-inline" data-latex="\\int_\\alpha^\\beta f[x(t),y(t)] \\sqrt{x'^2+y'^2} dt"></span></td>
    <td><span class="formula-inline" data-latex="ds = \\sqrt{x'^2+y'^2} dt"></span></td>
  </tr>
  <tr>
    <td><strong>显式方程</strong></td>
    <td><span class="formula-inline" data-latex="\\int_a^b f[x,y(x)] \\sqrt{1+y'^2} dx"></span></td>
    <td><span class="formula-inline" data-latex="ds = \\sqrt{1+y'^2} dx"></span></td>
  </tr>
  <tr>
    <td><strong>极坐标方程</strong></td>
    <td><span class="formula-inline" data-latex="\\int_\\alpha^\\beta f(r\\cos\\theta,r\\sin\\theta) \\sqrt{r^2+r'^2} d\\theta"></span></td>
    <td><span class="formula-inline" data-latex="ds = \\sqrt{r^2+r'^2} d\\theta"></span></td>
  </tr>
  <tr>
    <td><strong>空间曲线</strong></td>
    <td><span class="formula-inline" data-latex="\\int_\\alpha^\\beta f[x(t),y(t),z(t)] \\sqrt{x'^2+y'^2+z'^2} dt"></span></td>
    <td><span class="formula-inline" data-latex="ds = \\sqrt{x'^2+y'^2+z'^2} dt"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 对弧长的曲线积分（第一类曲线积分）是曲线积分的基础。它与曲线的方向无关，计算时关键是正确写出弧长元素 <span class="formula-inline" data-latex="ds"></span>。弧长元素在不同形式的曲线中有不同的表达式，需要灵活运用。
  </p>
</div>
`;