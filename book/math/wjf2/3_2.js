window.SECTION_CONTENT = `
<h4>📐 二重积分的计算法</h4>

<p>二重积分的定义给出了计算方法，但直接使用定义计算非常困难。我们需要将二重积分转化为累次积分（二次积分）来求解。</p>

<h5>1. 利用直角坐标计算二重积分</h5>

<p><strong>情形一：X 型区域</strong></p>

<p>若区域 <span class="formula-inline" data-latex="D"></span> 可表示为</p>

<div class="formula-block" data-latex="D = \\{ (x, y) \\mid a \\le x \\le b, \\; \\varphi_1(x) \\le y \\le \\varphi_2(x) \\}"></div>

<p>则二重积分可化为</p>

<div class="formula-block" data-latex="\\iint_D f(x, y) dxdy = \\int_a^b dx \\int_{\\varphi_1(x)}^{\\varphi_2(x)} f(x, y) dy"></div>

<p><strong>情形二：Y 型区域</strong></p>

<p>若区域 <span class="formula-inline" data-latex="D"></span> 可表示为</p>

<div class="formula-block" data-latex="D = \\{ (x, y) \\mid c \\le y \\le d, \\; \\psi_1(y) \\le x \\le \\psi_2(y) \\}"></div>

<p>则</p>

<div class="formula-block" data-latex="\\iint_D f(x, y) dxdy = \\int_c^d dy \\int_{\\psi_1(y)}^{\\psi_2(y)} f(x, y) dx"></div>

<div class="note">
  <strong>💡 关键理解：</strong>
  <p>• 先对 <span class="formula-inline" data-latex="y"></span> 积分时，将 <span class="formula-inline" data-latex="x"></span> 视为常数</p>
  <p>• 先对 <span class="formula-inline" data-latex="x"></span> 积分时，将 <span class="formula-inline" data-latex="y"></span> 视为常数</p>
  <p>• 积分次序的选择应使计算尽可能简单</p>
</div>

<h4>📘 例题 1：直角坐标计算（X 型）</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_D xy dxdy"></span>，其中 <span class="formula-inline" data-latex="D"></span> 由 <span class="formula-inline" data-latex="y = x^2, y = x"></span> 围成。</p>
  
  <p><strong>解：</strong></p>
  <p>解 <span class="formula-inline" data-latex="x^2 = x"></span> 得交点为 <span class="formula-inline" data-latex="x = 0, 1"></span>。</p>
  <p>在 <span class="formula-inline" data-latex="[0, 1]"></span> 上，<span class="formula-inline" data-latex="x^2 \\le x"></span>，所以</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_D xy dxdy = \\int_0^1 dx \\int_{x^2}^{x} xy dy"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\int_0^1 x \\cdot \\left[ \\frac{y^2}{2} \\right]_{x^2}^{x} dx = \\int_0^1 x \\cdot \\frac{x^2 - x^4}{2} dx"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2} \\int_0^1 (x^3 - x^5) dx = \\frac{1}{2} \\left[ \\frac{x^4}{4} - \\frac{x^6}{6} \\right]_0^1 = \\frac{1}{2} \\left( \\frac{1}{4} - \\frac{1}{6} \\right) = \\frac{1}{24}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{24}"></span></p>
</div>

<h4>📘 例题 2：直角坐标计算（Y 型）</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_D e^{x^2} dxdy"></span>，其中 <span class="formula-inline" data-latex="D"></span> 由 <span class="formula-inline" data-latex="y = x, y = 0, x = 1"></span> 围成。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="e^{x^2}"></span> 对 <span class="formula-inline" data-latex="x"></span> 的原函数不是初等函数，所以先对 <span class="formula-inline" data-latex="y"></span> 积分。</p>
  <p>区域为 X 型：<span class="formula-inline" data-latex">0 \\le x \\le 1, 0 \\le y \\le x</span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_D e^{x^2} dxdy = \\int_0^1 dx \\int_0^x e^{x^2} dy"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\int_0^1 x e^{x^2} dx = \\frac{1}{2} \\int_0^1 e^{x^2} d(x^2) = \\frac{1}{2}(e - 1)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{e-1}{2}"></span></p>
</div>

<h5>2. 利用极坐标计算二重积分</h5>

<p>当积分区域是圆盘、扇形或环形区域，或被积函数含有 <span class="formula-inline" data-latex="x^2 + y^2"></span> 时，使用极坐标更简便。</p>

<p><strong>极坐标变换：</strong></p>
<div class="formula-block" data-latex="x = r\\cos\\theta, \\quad y = r\\sin\\theta"></div>
<div class="formula-block" data-latex="dxdy = r dr d\\theta"></div>

<p>于是</p>

<div class="formula-block" data-latex="\\iint_D f(x, y) dxdy = \\iint_{D_{r\\theta}} f(r\\cos\\theta, r\\sin\\theta) r dr d\\theta"></div>

<h4>📘 例题 3：极坐标计算二重积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_D \\sqrt{x^2 + y^2} dxdy"></span>，其中 <span class="formula-inline" data-latex="D"></span> 是圆 <span class="formula-inline" data-latex="x^2 + y^2 \\le 4"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>用极坐标：<span class="formula-inline" data-latex="0 \\le r \\le 2, 0 \\le \\theta \\le 2\\pi"></span></p>
  <p><span class="formula-inline" data-latex="\\sqrt{x^2 + y^2} = r"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_D \\sqrt{x^2+y^2} dxdy = \\int_0^{2\\pi} d\\theta \\int_0^2 r \\cdot r dr"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 2\\pi \\int_0^2 r^2 dr = 2\\pi \\cdot \\left[ \\frac{r^3}{3} \\right]_0^2 = \\frac{16\\pi}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{16\\pi}{3}"></span></p>
</div>

<h5>3. 二重积分的换元法</h5>

<p>一般的坐标变换为 <span class="formula-inline" data-latex="x = x(u, v), y = y(u, v)"></span>，则</p>

<div class="formula-block" data-latex="\\iint_D f(x, y) dxdy = \\iint_{D'} f[x(u, v), y(u, v)] |J| dudv"></div>

<p>其中 <span class="formula-inline" data-latex="J = \\frac{\\partial(x, y)}{\\partial(u, v)} = \\begin{vmatrix} x_u & x_v \\\\ y_u & y_v \\end{vmatrix}"></span> 为雅可比行列式。</p>

<h4>📘 例题 4：换元法</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\iint_D e^{\\frac{y-x}{y+x}} dxdy"></span>，其中 <span class="formula-inline" data-latex="D"></span> 由 <span class="formula-inline" data-latex="x=0, y=0, x+y=1"></span> 围成。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x + y, v = y - x"></span>，则 <span class="formula-inline" data-latex="x = \\frac{u-v}{2}, y = \\frac{u+v}{2}"></span></p>
  <p>雅可比行列式 <span class="formula-inline" data-latex="J = \\frac{1}{2}"></span></p>
  <p>区域变为 <span class="formula-inline" data-latex="0 \\le u \\le 1, -u \\le v \\le u"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_D e^{\\frac{y-x}{y+x}} dxdy = \\frac{1}{2}\\int_0^1 du \\int_{-u}^{u} e^{v/u} dv"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{u}{2} \\int_0^1 (e - e^{-1}) du = \\frac{e - e^{-1}}{2} \\cdot \\frac{1}{2} = \\frac{e - e^{-1}}{4}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{e - e^{-1}}{4}"></span></p>
</div>

<h5>4. 二重积分计算方法总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>适用场景</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>直角坐标（X型）</strong></td>
    <td>区域边界可用 <span class="formula-inline" data-latex="y = \\varphi(x)"></span> 表示</td>
    <td><span class="formula-inline" data-latex="\\int_a^b dx \\int_{\\varphi_1(x)}^{\\varphi_2(x)} f dy"></span></td>
  </tr>
  <tr>
    <td><strong>直角坐标（Y型）</strong></td>
    <td>区域边界可用 <span class="formula-inline" data-latex="x = \\psi(y)"></span> 表示</td>
    <td><span class="formula-inline" data-latex="\\int_c^d dy \\int_{\\psi_1(y)}^{\\psi_2(y)} f dx"></span></td>
  </tr>
  <tr>
    <td><strong>极坐标</strong></td>
    <td>圆盘、扇形或含 <span class="formula-inline" data-latex="x^2+y^2"></span></td>
    <td><span class="formula-inline" data-latex="\\iint f(r\\cos\\theta, r\\sin\\theta) r dr d\\theta"></span></td>
  </tr>
  <tr>
    <td><strong>换元法</strong></td>
    <td>一般区域变换</td>
    <td><span class="formula-inline" data-latex="\\iint f |J| dudv"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二重积分的计算是重积分的核心内容。直角坐标法是最基本的方法，极坐标法适用于圆形区域，换元法则提供了更大的灵活性。选择合适的坐标系和积分次序可以大大简化计算。
  </p>
</div>
`;