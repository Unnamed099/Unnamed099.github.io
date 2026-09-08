window.SECTION_CONTENT = `
<h4>📐 二重积分的概念与性质</h4>

<p>定积分是一元函数在区间上的累积，而二重积分是二元函数在平面区域上的累积。它是定积分在二维空间的推广，是计算曲顶柱体体积、平面薄片质量等问题的理论基础。</p>

<h5>1. 二重积分的概念</h5>

<p><strong>问题引入：</strong> 求以 <span class="formula-inline" data-latex="z = f(x, y)"></span> 为顶、以平面区域 <span class="formula-inline" data-latex="D"></span> 为底的曲顶柱体的体积。</p>

<p><strong>求解思路：</strong> 类似于定积分的"分割、近似、求和、取极限"：</p>

<ol>
  <li><strong>分割：</strong> 将区域 <span class="formula-inline" data-latex="D"></span> 任意分成 <span class="formula-inline" data-latex="n"></span> 个小区域 <span class="formula-inline" data-latex="\\Delta \\sigma_1, \\Delta \\sigma_2, \\cdots, \\Delta \\sigma_n"></span></li>
  <li><strong>近似：</strong> 在每个小区域上任取一点 <span class="formula-inline" data-latex="(\\xi_i, \\eta_i)"></span>，用 <span class="formula-inline" data-latex="f(\\xi_i, \\eta_i)\\Delta \\sigma_i"></span> 近似小曲顶柱体体积</li>
  <li><strong>求和：</strong> <span class="formula-inline" data-latex="\\sum_{i=1}^{n} f(\\xi_i, \\eta_i)\\Delta \\sigma_i"></span></li>
  <li><strong>取极限：</strong> 当所有小区域直径的最大值 <span class="formula-inline" data-latex="\\lambda \\to 0"></span> 时，和式的极限即为体积</li>
</ol>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="f(x, y)"></span> 是有界闭区域 <span class="formula-inline" data-latex="D"></span> 上的有界函数，将 <span class="formula-inline" data-latex="D"></span> 任意分成 <span class="formula-inline" data-latex="n"></span> 个小闭区域 <span class="formula-inline" data-latex="\\Delta \\sigma_i"></span>，任取 <span class="formula-inline" data-latex="(\\xi_i, \\eta_i) \\in \\Delta \\sigma_i"></span>，若</p>

<div class="formula-block" data-latex="\\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i, \\eta_i)\\Delta \\sigma_i"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x, y)"></span> 在区域 <span class="formula-inline" data-latex="D"></span> 上的<strong>二重积分</strong>，记作</p>

<div class="formula-block" data-latex="\\iint_D f(x, y) d\\sigma = \\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i, \\eta_i)\\Delta \\sigma_i"></div>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• <span class="formula-inline" data-latex="d\\sigma"></span> 是面积元素，在直角坐标系中 <span class="formula-inline" data-latex="d\\sigma = dxdy"></span></p>
  <p>• 二重积分是定积分在二维空间的推广</p>
  <p>• 当 <span class="formula-inline" data-latex="f(x, y) \\ge 0"></span> 时，二重积分表示曲顶柱体的体积</p>
</div>

<h5>2. 二重积分的性质</h5>

<p><strong>性质 1（线性性质）：</strong></p>
<div class="formula-block" data-latex="\\iint_D [\\alpha f(x,y) + \\beta g(x,y)] d\\sigma = \\alpha\\iint_D f(x,y)d\\sigma + \\beta\\iint_D g(x,y)d\\sigma"></div>

<p><strong>性质 2（区域可加性）：</strong> 若 <span class="formula-inline" data-latex="D = D_1 \\cup D_2"></span>，<span class="formula-inline" data-latex="D_1 \\cap D_2 = \\varnothing"></span>，则</p>
<div class="formula-block" data-latex="\\iint_D f(x,y)d\\sigma = \\iint_{D_1} f(x,y)d\\sigma + \\iint_{D_2} f(x,y)d\\sigma"></div>

<p><strong>性质 3（保序性）：</strong> 若在 <span class="formula-inline" data-latex="D"></span> 上 <span class="formula-inline" data-latex="f(x,y) \\le g(x,y)"></span>，则</p>
<div class="formula-block" data-latex="\\iint_D f(x,y)d\\sigma \\le \\iint_D g(x,y)d\\sigma"></div>

<p><strong>性质 4（估值定理）：</strong> 若 <span class="formula-inline" data-latex="m \\le f(x,y) \\le M"></span>，则</p>
<div class="formula-block" data-latex="m \\cdot S_D \\le \\iint_D f(x,y)d\\sigma \\le M \\cdot S_D"></div>
<p>其中 <span class="formula-inline" data-latex="S_D"></span> 是区域 <span class="formula-inline" data-latex="D"></span> 的面积。</p>

<p><strong>性质 5（积分中值定理）：</strong> 若 <span class="formula-inline" data-latex="f(x,y)"></span> 在闭区域 <span class="formula-inline" data-latex="D"></span> 上连续，则至少存在一点 <span class="formula-inline" data-latex="(\\xi, \\eta) \\in D"></span>，使得</p>
<div class="formula-block" data-latex="\\iint_D f(x,y)d\\sigma = f(\\xi,\\eta) \\cdot S_D"></div>

<h4>📘 例题 1：利用二重积分几何意义求值</h4>

<div class="example">
  <p><strong>题目：</strong> 利用二重积分的几何意义求 <span class="formula-inline" data-latex="\\iint_{x^2+y^2 \\le 1} \\sqrt{1-x^2-y^2} d\\sigma"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>被积函数 <span class="formula-inline" data-latex="z = \\sqrt{1-x^2-y^2}"></span> 表示上半球面 <span class="formula-inline" data-latex="x^2+y^2+z^2 = 1"></span>。</p>
  <p>二重积分表示半径为 1 的上半球体的体积。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_{x^2+y^2 \\le 1} \\sqrt{1-x^2-y^2} d\\sigma = \\frac{2}{3}\\pi"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{2\\pi}{3}"></span></p>
</div>

<h4>📘 例题 2：利用性质比较大小</h4>

<div class="example">
  <p><strong>题目：</strong> 比较 <span class="formula-inline" data-latex="I_1 = \\iint_D (x+y)^2 d\\sigma"></span> 与 <span class="formula-inline" data-latex="I_2 = \\iint_D (x+y)^3 d\\sigma"></span> 的大小，其中 <span class="formula-inline" data-latex="D"></span> 是由 <span class="formula-inline" data-latex="x=0, y=0, x+y=1"></span> 围成的区域。</p>
  
  <p><strong>解：</strong></p>
  <p>在 <span class="formula-inline" data-latex="D"></span> 上，<span class="formula-inline" data-latex="0 < x+y < 1"></span>，所以</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(x+y)^2 > (x+y)^3"></span>
  </p>
  <p>由保序性：</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="I_1 > I_2"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二重积分是多元函数积分学的核心概念。它与定积分在思想上一脉相承——"分割、近似、求和、取极限"。二重积分的性质为后续的计算和应用提供了理论基础。
  </p>
</div>
`;