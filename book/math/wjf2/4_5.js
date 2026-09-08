window.SECTION_CONTENT = `
<h4>📐 对坐标的曲面积分（第二类曲面积分）</h4>

<p>第二类曲面积分与曲面的方向有关，它计算的是向量场通过曲面的通量，在物理学中对应流量、通量等概念，是高斯公式和斯托克斯公式的基础。</p>

<h5>1. 对坐标的曲面积分的概念与性质</h5>

<p><strong>问题引入：</strong> 求流体通过曲面 <span class="formula-inline" data-latex="\\Sigma"></span> 的流量。设流速场为 <span class="formula-inline" data-latex="\\mathbf{v} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}"></span>。</p>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="\\Sigma"></span> 是有向光滑曲面，<span class="formula-inline" data-latex="P, Q, R"></span> 在 <span class="formula-inline" data-latex="\\Sigma"></span> 上有界。将 <span class="formula-inline" data-latex="\\Sigma"></span> 分成 <span class="formula-inline" data-latex="n"></span> 个小块，第 <span class="formula-inline" data-latex="i"></span> 块在 <span class="formula-inline" data-latex="xOy, yOz, zOx"></span> 平面上的投影面积分别为 <span class="formula-inline" data-latex="\\Delta S_{i,xy}, \\Delta S_{i,yz}, \\Delta S_{i,zx}"></span>，则</p>

<div class="formula-block" data-latex="\\iint_\\Sigma P dy dz + Q dz dx + R dx dy = \\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} [P(\\xi_i,\\eta_i,\\zeta_i)\\Delta S_{i,yz} + Q(\\xi_i,\\eta_i,\\zeta_i)\\Delta S_{i,zx} + R(\\xi_i,\\eta_i,\\zeta_i)\\Delta S_{i,xy}]"></div>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 第二类曲面积分与曲面的<strong>方向有关</strong>：反向变号</p>
  <p>• 物理意义：向量场通过曲面的<strong>通量</strong></p>
  <p>• 向量形式：<span class="formula-inline" data-latex="\\iint_\\Sigma \\mathbf{F} \\cdot \\mathbf{n} dS"></span></p>
</div>

<h5>2. 对坐标的曲面积分的计算法</h5>

<p><strong>分项计算：</strong></p>

<div class="formula-block" data-latex="\\iint_\\Sigma R dxdy = \\pm \\iint_{D_{xy}} R[x, y, z(x, y)] dxdy"></div>

<p>其中符号由曲面方向决定：若取上侧为正，下侧为负。</p>

<div class="formula-block" data-latex="\\iint_\\Sigma P dydz = \\pm \\iint_{D_{yz}} P[x(y, z), y, z] dydz"></div>

<p>若取前侧为正，后侧为负。</p>

<div class="formula-block" data-latex="\\iint_\\Sigma Q dzdx = \\pm \\iint_{D_{zx}} Q[x, y(x, z), z] dzdx"></div>

<p>若取右侧为正，左侧为负。</p>

<h4>📘 例题 1：计算第二类曲面积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_\\Sigma z dxdy"></span>，其中 <span class="formula-inline" data-latex="\\Sigma"></span> 是半球面 <span class="formula-inline" data-latex="z = \\sqrt{a^2 - x^2 - y^2}"></span> 的上侧。</p>
  
  <p><strong>解：</strong></p>
  <p>曲面取上侧，投影符号为正。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_\\Sigma z dxdy = \\iint_{x^2+y^2 \\le a^2} \\sqrt{a^2 - x^2 - y^2} dxdy"></span>
  </p>
  <p>用极坐标：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\int_0^{2\\pi} d\\theta \\int_0^a \\sqrt{a^2 - r^2} r dr = 2\\pi \\cdot \\frac{a^3}{3} = \\frac{2\\pi a^3}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{2\\pi a^3}{3}"></span></p>
</div>

<h4>📘 例题 2：第二类曲面积分的完整计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_\\Sigma x dydz + y dzdx + z dxdy"></span>，其中 <span class="formula-inline" data-latex="\\Sigma"></span> 是球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = a^2"></span> 的外侧。</p>
  
  <p><strong>解：</strong></p>
  <p>利用对称性：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_\\Sigma x dydz = \\iint_\\Sigma y dzdx = \\iint_\\Sigma z dxdy = \\frac{2\\pi a^3}{3}"></span>
  </p>
  <p>（每个等于上半球面对应投影积分的 <span class="formula-inline" data-latex="2"></span> 倍）</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_\\Sigma x dydz + y dzdx + z dxdy = 3 \\cdot \\frac{2\\pi a^3}{3} = 2\\pi a^3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2\\pi a^3"></span></p>
</div>

<h5>3. 两类曲面积分之间的联系</h5>

<p>设曲面 <span class="formula-inline" data-latex="\\Sigma"></span> 的单位法向量为 <span class="formula-inline" data-latex="\\mathbf{n} = (\\cos\\alpha, \\cos\\beta, \\cos\\gamma)"></span>，则</p>

<div class="formula-block" data-latex="\\iint_\\Sigma P dydz + Q dzdx + R dxdy = \\iint_\\Sigma (P\\cos\\alpha + Q\\cos\\beta + R\\cos\\gamma) dS"></div>

<p>即</p>

<div class="formula-block" data-latex="\\iint_\\Sigma \\mathbf{F} \\cdot \\mathbf{n} dS = \\iint_\\Sigma \\mathbf{F} \\cdot (\\cos\\alpha, \\cos\\beta, \\cos\\gamma) dS"></div>

<h5>4. 两类曲面积分比较</h5>

<table>
  <tr>
    <th>特征</th>
    <th>第一类（对面积）</th>
    <th>第二类（对坐标）</th>
  </tr>
  <tr>
    <td><strong>与方向的关系</strong></td>
    <td>无关</td>
    <td>有关（反向变号）</td>
  </tr>
  <tr>
    <td><strong>被积对象</strong></td>
    <td>标量函数</td>
    <td>向量函数（或微分形式）</td>
  </tr>
  <tr>
    <td><strong>积分元素</strong></td>
    <td><span class="formula-inline" data-latex="dS"></span></td>
    <td><span class="formula-inline" data-latex="dydz, dzdx, dxdy"></span></td>
  </tr>
  <tr>
    <td><strong>物理意义</strong></td>
    <td>曲面质量</td>
    <td>通量</td>
  </tr>
  <tr>
    <td><strong>记号</strong></td>
    <td><span class="formula-inline" data-latex="\\iint_\\Sigma f dS"></span></td>
    <td><span class="formula-inline" data-latex="\\iint_\\Sigma P dydz + Q dzdx + R dxdy"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 对坐标的曲面积分（第二类曲面积分）是计算通量的基本工具。它与曲面的方向密切相关，计算时符号的选择至关重要。两类曲面积分通过法向量相互联系，为相互转换提供了便利。
  </p>
</div>
`