window.SECTION_CONTENT = `
<h4>📐 重积分的应用</h4>

<p>重积分在几何、物理和工程中有着广泛的应用。本节将介绍重积分在面积、体积、质量、质心、转动惯量和引力等方面的应用。</p>

<h5>1. 几何应用</h5>

<p><strong>（1）曲顶柱体的体积</strong></p>
<p>由 <span class="formula-inline" data-latex="z = f(x, y) \\ge 0"></span> 和区域 <span class="formula-inline" data-latex="D"></span> 围成的曲顶柱体体积为</p>
<div class="formula-block" data-latex="V = \\iint_D f(x, y) d\\sigma"></div>

<p><strong>（2）平面区域的面积</strong></p>
<div class="formula-block" data-latex="S = \\iint_D d\\sigma"></div>

<p><strong>（3）空间立体的体积</strong></p>
<div class="formula-block" data-latex="V = \\iiint_\\Omega dV"></div>

<h4>📘 例题 1：求曲顶柱体体积</h4>

<div class="example">
  <p><strong>题目：</strong> 求由 <span class="formula-inline" data-latex="z = 4 - x^2 - y^2"></span> 和 <span class="formula-inline" data-latex="z = 0"></span> 围成的体积。</p>
  
  <p><strong>解：</strong></p>
  <p>区域 <span class="formula-inline" data-latex="D: x^2 + y^2 \\le 4"></span></p>
  <p>用极坐标：<span class="formula-inline" data-latex="0 \\le r \\le 2, 0 \\le \\theta \\le 2\\pi"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="V = \\iint_D (4 - x^2 - y^2) d\\sigma = \\int_0^{2\\pi} d\\theta \\int_0^2 (4 - r^2) r dr"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 2\\pi \\int_0^2 (4r - r^3) dr = 2\\pi \\left[ 2r^2 - \\frac{r^4}{4} \\right]_0^2 = 2\\pi \\cdot (8 - 4) = 8\\pi"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="8\\pi"></span></p>
</div>

<h5>2. 物理应用</h5>

<p><strong>（1）质量</strong></p>
<p>若平面薄片的面密度为 <span class="formula-inline" data-latex="\\rho(x, y)"></span>，则其质量为</p>
<div class="formula-block" data-latex="M = \\iint_D \\rho(x, y) d\\sigma"></div>

<p>若空间物体的体密度为 <span class="formula-inline" data-latex="\\rho(x, y, z)"></span>，则其质量为</p>
<div class="formula-block" data-latex="M = \\iiint_\\Omega \\rho(x, y, z) dV"></div>

<p><strong>（2）质心（形心）</strong></p>
<p>平面薄片的质心坐标为</p>
<div class="formula-block" data-latex="\\bar{x} = \\frac{\\iint_D x\\rho d\\sigma}{\\iint_D \\rho d\\sigma}, \\quad \\bar{y} = \\frac{\\iint_D y\\rho d\\sigma}{\\iint_D \\rho d\\sigma}"></div>

<p>若密度均匀（<span class="formula-inline" data-latex="\\rho = 1"></span>），则称为<strong>形心</strong>。</p>

<h4>📘 例题 2：求平面薄片的质心</h4>

<div class="example">
  <p><strong>题目：</strong> 求由 <span class="formula-inline" data-latex="y = x^2, y = x"></span> 围成的均匀薄片的形心。</p>
  
  <p><strong>解：</strong></p>
  <p>区域 <span class="formula-inline" data-latex="D: 0 \\le x \\le 1, x^2 \\le y \\le x"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="S = \\int_0^1 (x - x^2) dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{6}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\bar{x} = \\frac{1}{S} \\int_0^1 dx \\int_{x^2}^x x dy = \\frac{1}{S} \\int_0^1 x(x - x^2) dx = \\frac{1}{S} \\left[ \\frac{x^3}{3} - \\frac{x^4}{4} \\right]_0^1 = 6 \\cdot \\frac{1}{12} = \\frac{1}{2}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\bar{y} = \\frac{1}{S} \\int_0^1 dx \\int_{x^2}^x y dy = \\frac{1}{S} \\int_0^1 \\frac{x^2 - x^4}{2} dx = 6 \\cdot \\frac{1}{15} = \\frac{2}{5}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\left( \\frac{1}{2}, \\frac{2}{5} \\right)"></span></p>
</div>

<h5>3. 转动惯量</h5>

<p>平面薄片关于坐标轴的转动惯量为</p>
<div class="formula-block" data-latex="I_x = \\iint_D y^2 \\rho d\\sigma, \\quad I_y = \\iint_D x^2 \\rho d\\sigma"></div>
<div class="formula-block" data-latex="I_0 = \\iint_D (x^2 + y^2) \\rho d\\sigma = I_x + I_y"></div>

<p>空间物体关于坐标轴的转动惯量为</p>
<div class="formula-block" data-latex="I_x = \\iiint_\\Omega (y^2 + z^2) \\rho dV, \\quad I_y = \\iiint_\\Omega (x^2 + z^2) \\rho dV, \\quad I_z = \\iiint_\\Omega (x^2 + y^2) \\rho dV"></div>

<h4>📘 例题 3：求转动惯量</h4>

<div class="example">
  <p><strong>题目：</strong> 求半径为 <span class="formula-inline" data-latex="R"></span> 的均匀圆盘关于其直径的转动惯量（密度为 <span class="formula-inline" data-latex="\\rho"></span>）。</p>
  
  <p><strong>解：</strong></p>
  <p>设圆盘 <span class="formula-inline" data-latex="x^2 + y^2 \\le R^2"></span>，关于 <span class="formula-inline" data-latex="x"></span> 轴：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I_x = \\rho \\iint_D y^2 d\\sigma = \\rho \\int_0^{2\\pi} d\\theta \\int_0^R r^2\\sin^2\\theta \\cdot r dr"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\rho \\left( \\int_0^{2\\pi} \\sin^2\\theta d\\theta \\right) \\left( \\int_0^R r^3 dr \\right)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\rho \\cdot \\pi \\cdot \\frac{R^4}{4} = \\frac{\\pi \\rho R^4}{4} = \\frac{1}{4} M R^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{4}MR^2"></span></p>
</div>

<h5>4. 引力</h5>

<p>物体对质点的引力可通过重积分计算。若物体密度为 <span class="formula-inline" data-latex="\\rho(x, y, z)"></span>，则其对原点处单位质量质点的引力为</p>

<div class="formula-block" data-latex="\\mathbf{F} = -G \\iiint_\\Omega \\frac{\\rho(x, y, z)}{r^3} (x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}) dV"></div>

<h5>5. 重积分应用总结</h5>

<table>
  <tr>
    <th>应用类型</th>
    <th>公式</th>
    <th>积分类型</th>
  </tr>
  <tr>
    <td><strong>面积/体积</strong></td>
    <td><span class="formula-inline" data-latex="S = \\iint_D d\\sigma, V = \\iiint_\\Omega dV"></span></td>
    <td>二重/三重</td>
  </tr>
  <tr>
    <td><strong>质量</strong></td>
    <td><span class="formula-inline" data-latex="M = \\iint_D \\rho d\\sigma"></span></td>
    <td>二重/三重</td>
  </tr>
  <tr>
    <td><strong>质心</strong></td>
    <td><span class="formula-inline" data-latex="\\bar{x} = \\frac{\\iint x\\rho d\\sigma}{\\iint \\rho d\\sigma}"></span></td>
    <td>二重/三重</td>
  </tr>
  <tr>
    <td><strong>转动惯量</strong></td>
    <td><span class="formula-inline" data-latex="I_x = \\iint y^2\\rho d\\sigma"></span></td>
    <td>二重/三重</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 重积分的应用贯穿于几何、物理和工程领域。从简单的几何量（面积、体积）到物理量（质量、质心、转动惯量），重积分提供了统一的数学框架。掌握这些应用，是理解高等数学在实际问题中作用的关键。
  </p>
</div>
`;