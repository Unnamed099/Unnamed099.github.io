window.SECTION_CONTENT = `
<h4>📐 三重积分</h4>

<p>三重积分是二重积分在三维空间的推广。它将二重积分中的面积元素 <span class="formula-inline" data-latex="d\\sigma"></span> 替换为体积元素 <span class="formula-inline" data-latex="dV"></span>，用于计算空间物体的质量、质心、转动惯量等物理量。</p>

<h5>1. 三重积分的概念</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="f(x, y, z)"></span> 是空间有界闭区域 <span class="formula-inline" data-latex="\\Omega"></span> 上的有界函数。将 <span class="formula-inline" data-latex="\\Omega"></span> 任意分成 <span class="formula-inline" data-latex="n"></span> 个小闭区域 <span class="formula-inline" data-latex="\\Delta V_i"></span>，任取 <span class="formula-inline" data-latex="(\\xi_i, \\eta_i, \\zeta_i) \\in \\Delta V_i"></span>，若</p>

<div class="formula-block" data-latex="\\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i, \\eta_i, \\zeta_i) \\Delta V_i"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x, y, z)"></span> 在区域 <span class="formula-inline" data-latex="\\Omega"></span> 上的<strong>三重积分</strong>，记作</p>

<div class="formula-block" data-latex="\\iiint_\\Omega f(x, y, z) dV"></div>

<p>在直角坐标系中，体积元素 <span class="formula-inline" data-latex="dV = dxdydz"></span>。</p>

<div class="note">
  <strong>💡 物理意义：</strong>
  <p>• 若 <span class="formula-inline" data-latex="f(x, y, z)"></span> 是密度函数，则三重积分表示物体的<strong>质量</strong></p>
  <p>• 若 <span class="formula-inline" data-latex="f(x, y, z) \\equiv 1"></span>，则三重积分表示区域的<strong>体积</strong></p>
</div>

<h5>2. 三重积分的计算</h5>

<p><strong>（1）直角坐标系——先一后二法</strong></p>

<p>若区域 <span class="formula-inline" data-latex="\\Omega"></span> 可表示为</p>

<div class="formula-block" data-latex="\\Omega = \\{ (x, y, z) \\mid (x, y) \\in D, \\; z_1(x, y) \\le z \\le z_2(x, y) \\}"></div>

<p>则</p>

<div class="formula-block" data-latex="\\iiint_\\Omega f(x, y, z) dV = \\iint_D dxdy \\int_{z_1(x,y)}^{z_2(x,y)} f(x, y, z) dz"></div>

<p><strong>（2）直角坐标系——先二后一法（截面法）</strong></p>

<p>若区域 <span class="formula-inline" data-latex="\\Omega"></span> 可表示为 <span class="formula-inline" data-latex">a \\le z \\le b</span>，且对任意 <span class="formula-inline" data-latex="z"></span>，截面 <span class="formula-inline" data-latex="D_z"></span> 已知，则</p>

<div class="formula-block" data-latex="\\iiint_\\Omega f(x, y, z) dV = \\int_a^b dz \\iint_{D_z} f(x, y, z) dxdy"></div>

<h4>📘 例题 1：直角坐标计算三重积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iiint_\\Omega z dV"></span>，其中 <span class="formula-inline" data-latex="\\Omega"></span> 由 <span class="formula-inline" data-latex="z = 0, z = x + y, x = 0, y = 0, x + y = 1"></span> 围成。</p>
  
  <p><strong>解：</strong></p>
  <p>区域在 <span class="formula-inline" data-latex="xOy"></span> 平面上的投影为 <span class="formula-inline" data-latex="D: 0 \\le x \\le 1, 0 \\le y \\le 1-x"></span></p>
  <p>对 <span class="formula-inline" data-latex="z"></span>：<span class="formula-inline" data-latex">0 \\le z \\le x+y</span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iiint_\\Omega z dV = \\int_0^1 dx \\int_0^{1-x} dy \\int_0^{x+y} z dz"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\int_0^1 dx \\int_0^{1-x} \\frac{(x+y)^2}{2} dy"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2} \\int_0^1 \\left[ \\frac{(x+y)^3}{3} \\right]_0^{1-x} dx = \\frac{1}{6} \\int_0^1 (1 - x^3) dx = \\frac{1}{6} \\left[ x - \\frac{x^4}{4} \\right]_0^1 = \\frac{1}{8}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{8}"></span></p>
</div>

<h4>📘 例题 2：截面法计算三重积分</h4>

<div class="example">
  <p><strong>题目：</strong> 求由 <span class="formula-inline" data-latex="z = x^2 + y^2"></span> 和 <span class="formula-inline" data-latex="z = 4"></span> 所围立体的体积。</p>
  
  <p><strong>解：</strong></p>
  <p>用截面法，对任意 <span class="formula-inline" data-latex="z \\in [0, 4]"></span>，截面 <span class="formula-inline" data-latex="D_z: x^2 + y^2 \\le z"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="V = \\int_0^4 S(z) dz = \\int_0^4 \\pi z dz = \\pi \\left[ \\frac{z^2}{2} \\right]_0^4 = 8\\pi"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="8\\pi"></span></p>
</div>

<h5>3. 柱面坐标</h5>

<p><strong>柱面坐标变换：</strong></p>
<div class="formula-block" data-latex="x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad z = z"></div>
<div class="formula-block" data-latex="dV = r dr d\\theta dz"></div>

<p>当积分区域为柱体或旋转体时，柱面坐标最方便。</p>

<h4>📘 例题 3：柱面坐标计算三重积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iiint_\\Omega (x^2 + y^2) dV"></span>，其中 <span class="formula-inline" data-latex="\\Omega"></span> 由 <span class="formula-inline" data-latex="x^2 + y^2 = 4, z = 0, z = 3"></span> 围成。</p>
  
  <p><strong>解：</strong></p>
  <p>用柱面坐标：<span class="formula-inline" data-latex="0 \\le r \\le 2, 0 \\le \\theta \\le 2\\pi, 0 \\le z \\le 3"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iiint_\\Omega (x^2 + y^2) dV = \\int_0^{2\\pi} d\\theta \\int_0^2 r^2 \\cdot r dr \\int_0^3 dz"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 2\\pi \\cdot \\frac{16}{4} \\cdot 3 = 24\\pi"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="24\\pi"></span></p>
</div>

<h5>4. 球面坐标</h5>

<p><strong>球面坐标变换：</strong></p>
<div class="formula-block" data-latex="x = r\\sin\\varphi\\cos\\theta, \\quad y = r\\sin\\varphi\\sin\\theta, \\quad z = r\\cos\\varphi"></div>
<div class="formula-block" data-latex="dV = r^2\\sin\\varphi dr d\\varphi d\\theta"></div>

<p>其中 <span class="formula-inline" data-latex="r \\ge 0, 0 \\le \\varphi \\le \\pi, 0 \\le \\theta \\le 2\\pi"></span></p>

<h4>📘 例题 4：球面坐标计算三重积分</h4>

<div class="example">
  <p><strong>题目：</strong> 求球体 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 \\le a^2"></span> 的体积。</p>
  
  <p><strong>解：</strong></p>
  <p>用球面坐标：<span class="formula-inline" data-latex="0 \\le r \\le a, 0 \\le \\varphi \\le \\pi, 0 \\le \\theta \\le 2\\pi"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="V = \\int_0^{2\\pi} d\\theta \\int_0^\\pi \\sin\\varphi d\\varphi \\int_0^a r^2 dr"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 2\\pi \\cdot 2 \\cdot \\frac{a^3}{3} = \\frac{4\\pi a^3}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{4\\pi a^3}{3}"></span></p>
</div>

<h5>5. 三重积分计算方法总结</h5>

<table>
  <tr>
    <th>坐标系</th>
    <th>变量变换</th>
    <th>体积元素</th>
    <th>适用场景</th>
  </tr>
  <tr>
    <td><strong>直角坐标</strong></td>
    <td><span class="formula-inline" data-latex="(x,y,z)"></span></td>
    <td><span class="formula-inline" data-latex="dxdydz"></span></td>
    <td>一般区域</td>
  </tr>
  <tr>
    <td><strong>柱面坐标</strong></td>
    <td><span class="formula-inline" data-latex="(r,\\theta,z)"></span></td>
    <td><span class="formula-inline" data-latex="r dr d\\theta dz"></span></td>
    <td>柱体、旋转体</td>
  </tr>
  <tr>
    <td><strong>球面坐标</strong></td>
    <td><span class="formula-inline" data-latex="(r,\\varphi,\\theta)"></span></td>
    <td><span class="formula-inline" data-latex="r^2\\sin\\varphi dr d\\varphi d\\theta"></span></td>
    <td>球体、锥体</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 三重积分将定积分和二重积分的理论推广到三维空间。选择合适的坐标系（直角、柱面、球面）是简化三重积分计算的关键。三重积分在物理中有着广泛的应用，如质量、质心、转动惯量的计算。
  </p>
</div>
`;