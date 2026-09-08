window.SECTION_CONTENT = `
<h4>📐 对面积的曲面积分（第一类曲面积分）</h4>

<p>曲面积分是曲线积分在曲面上的推广。第一类曲面积分（对面积的曲面积分）与曲面的方向无关，它计算的是函数在曲面上的累积效应。</p>

<h5>1. 对面积的曲面积分的概念与性质</h5>

<p><strong>问题引入：</strong> 求一个质量不均匀的曲面薄片的总质量。设曲面为 <span class="formula-inline" data-latex="\\Sigma"></span>，面密度为 <span class="formula-inline" data-latex="\\rho(x, y, z)"></span>。</p>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="\\Sigma"></span> 是光滑曲面，函数 <span class="formula-inline" data-latex="f(x, y, z)"></span> 在 <span class="formula-inline" data-latex="\\Sigma"></span> 上有界。将 <span class="formula-inline" data-latex="\\Sigma"></span> 任意分成 <span class="formula-inline" data-latex="n"></span> 个小块，第 <span class="formula-inline" data-latex="i"></span> 块面积为 <span class="formula-inline" data-latex="\\Delta S_i"></span>，任取 <span class="formula-inline" data-latex="(\\xi_i, \\eta_i, \\zeta_i)"></span>，若</p>

<div class="formula-block" data-latex="\\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i, \\eta_i, \\zeta_i) \\Delta S_i"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x, y, z)"></span> 在曲面 <span class="formula-inline" data-latex="\\Sigma"></span> 上<strong>对面积的曲面积分</strong>（第一类曲面积分），记作</p>

<div class="formula-block" data-latex="\\iint_\\Sigma f(x, y, z) dS"></div>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 第一类曲面积分与曲面的<strong>方向无关</strong></p>
  <p>• 当 <span class="formula-inline" data-latex="f \\equiv 1"></span> 时，积分值等于曲面的<strong>面积</strong></p>
  <p>• 物理意义：面密度为 <span class="formula-inline" data-latex="f(x,y,z)"></span> 的曲面质量</p>
</div>

<h5>2. 对面积的曲面积分的计算法</h5>

<p><strong>情形一：投影到 <span class="formula-inline" data-latex="xOy"></span> 平面</strong></p>
<p>若 <span class="formula-inline" data-latex="\\Sigma: z = z(x, y), (x, y) \\in D"></span>，则</p>
<div class="formula-block" data-latex="\\iint_\\Sigma f(x, y, z) dS = \\iint_D f[x, y, z(x, y)] \\sqrt{1 + z_x^2 + z_y^2} dxdy"></div>

<p><strong>情形二：投影到 <span class="formula-inline" data-latex="yOz"></span> 平面</strong></p>
<p>若 <span class="formula-inline" data-latex="\\Sigma: x = x(y, z), (y, z) \\in D"></span>，则</p>
<div class="formula-block" data-latex="\\iint_\\Sigma f dS = \\iint_D f[x(y,z), y, z] \\sqrt{1 + x_y^2 + x_z^2} dydz"></div>

<p><strong>情形三：投影到 <span class="formula-inline" data-latex="xOz"></span> 平面</strong></p>
<p>若 <span class="formula-inline" data-latex="\\Sigma: y = y(x, z), (x, z) \\in D"></span>，则</p>
<div class="formula-block" data-latex="\\iint_\\Sigma f dS = \\iint_D f[x, y(x,z), z] \\sqrt{1 + y_x^2 + y_z^2} dxdz"></div>

<h4>📘 例题 1：显式曲面上的第一类曲面积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_\\Sigma z dS"></span>，其中 <span class="formula-inline" data-latex="\\Sigma"></span> 是半球面 <span class="formula-inline" data-latex="z = \\sqrt{a^2 - x^2 - y^2}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="z_x = -\\frac{x}{z}, z_y = -\\frac{y}{z}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sqrt{1+z_x^2+z_y^2} = \\sqrt{1 + \\frac{x^2}{z^2} + \\frac{y^2}{z^2}} = \\frac{a}{z}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_\\Sigma z dS = \\iint_{x^2+y^2 \\le a^2} z \\cdot \\frac{a}{z} dxdy = a \\iint_{D} dxdy = \\pi a^3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\pi a^3"></span></p>
</div>

<h4>📘 例题 2：参数曲面上的第一类曲面积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_\\Sigma (x^2 + y^2) dS"></span>，其中 <span class="formula-inline" data-latex="\\Sigma"></span> 是球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = a^2"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>利用对称性，<span class="formula-inline" data-latex="\\iint_\\Sigma x^2 dS = \\iint_\\Sigma y^2 dS = \\iint_\\Sigma z^2 dS"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_\\Sigma (x^2 + y^2) dS = \\frac{2}{3} \\iint_\\Sigma (x^2 + y^2 + z^2) dS = \\frac{2}{3} a^2 \\cdot 4\\pi a^2 = \\frac{8\\pi a^4}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{8\\pi a^4}{3}"></span></p>
</div>

<h5>3. 对面积的曲面积分总结</h5>

<table>
  <tr>
    <th>曲面形式</th>
    <th>面积元素 <span class="formula-inline" data-latex="dS"></span></th>
    <th>计算公式</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="z = z(x, y)"></span></td>
    <td><span class="formula-inline" data-latex="\\sqrt{1+z_x^2+z_y^2} dxdy"></span></td>
    <td>投影到 <span class="formula-inline" data-latex="xOy"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="y = y(x, z)"></span></td>
    <td><span class="formula-inline" data-latex="\\sqrt{1+y_x^2+y_z^2} dxdz"></span></td>
    <td>投影到 <span class="formula-inline" data-latex="xOz"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x = x(y, z)"></span></td>
    <td><span class="formula-inline" data-latex="\\sqrt{1+x_y^2+x_z^2} dydz"></span></td>
    <td>投影到 <span class="formula-inline" data-latex="yOz"></span></td>
  </tr>
  <tr>
    <td><strong>参数形式</strong></td>
    <td><span class="formula-inline" data-latex="|\\mathbf{r}_u \\times \\mathbf{r}_v| dudv"></span></td>
    <td>面积分公式</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 对面积的曲面积分（第一类曲面积分）是曲面积分的基础。它与曲面的方向无关，计算的关键是正确写出面积元素 <span class="formula-inline" data-latex="dS"></span>。选择合适的投影平面可以简化计算。
  </p>
</div>
`;