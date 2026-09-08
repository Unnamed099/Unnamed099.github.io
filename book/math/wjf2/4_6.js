window.SECTION_CONTENT = `
<h4>📐 高斯公式 通量与散度</h4>

<p>高斯公式（又称高斯-奥斯特罗格拉德斯基公式）是联系三重积分与曲面积分的重要公式。它将沿闭曲面的曲面积分转化为该曲面所围空间区域上的三重积分，是场论中最基本的公式之一。</p>

<h5>1. 高斯公式</h5>

<p><strong>定理（高斯公式）：</strong> 设空间闭区域 <span class="formula-inline" data-latex="\\Omega"></span> 由分片光滑的闭曲面 <span class="formula-inline" data-latex="\\Sigma"></span> 围成，函数 <span class="formula-inline" data-latex="P, Q, R"></span> 在 <span class="formula-inline" data-latex="\\Omega"></span> 上具有一阶连续偏导数，则</p>

<div class="formula-block" data-latex="\\iint_\\Sigma P dydz + Q dzdx + R dxdy = \\iiint_\\Omega \\left( \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} \\right) dV"></div>

<p>其中 <span class="formula-inline" data-latex="\\Sigma"></span> 取外侧（法向量指向外部）。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 高斯公式将<strong>曲面积分</strong>转化为<strong>三重积分</strong></p>
  <p>• 当 <span class="formula-inline" data-latex="P = x, Q = y, R = z"></span> 时，得到体积公式：<span class="formula-inline" data-latex="V = \\frac{1}{3}\\iint_\\Sigma x dydz + y dzdx + z dxdy"></span></p>
  <p>• 是格林公式在三维空间的推广</p>
</div>

<h4>📘 例题 1：利用高斯公式计算曲面积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\iint_\\Sigma x^3 dydz + y^3 dzdx + z^3 dxdy"></span>，其中 <span class="formula-inline" data-latex="\\Sigma"></span> 是球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = a^2"></span> 的外侧。</p>
  
  <p><strong>解法一（直接）：</strong> 高斯公式</p>
  <p><span class="formula-inline" data-latex="P = x^3, Q = y^3, R = z^3"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z} = 3x^2 + 3y^2 + 3z^2 = 3r^2"></span>
  </p>
  <p>用球面坐标：<span class="formula-inline" data-latex="0 \\le r \\le a, 0 \\le \\varphi \\le \\pi, 0 \\le \\theta \\le 2\\pi"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iiint_\\Omega 3r^2 dV = \\int_0^{2\\pi} d\\theta \\int_0^\\pi \\sin\\varphi d\\varphi \\int_0^a 3r^2 \\cdot r^2 dr"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 2\\pi \\cdot 2 \\cdot 3 \\cdot \\frac{a^5}{5} = \\frac{12\\pi a^5}{5}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{12\\pi a^5}{5}"></span></p>
</div>

<h4>📘 例题 2：高斯公式求体积</h4>

<div class="example">
  <p><strong>题目：</strong> 利用高斯公式求椭球 <span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1"></span> 的体积。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="P = x, Q = y, R = z"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="V = \\frac{1}{3} \\iint_\\Sigma x dydz + y dzdx + z dxdy"></span>
  </p>
  <p>由广义球坐标变换 <span class="formula-inline" data-latex="x = ar\\sin\\varphi\\cos\\theta, y = br\\sin\\varphi\\sin\\theta, z = cr\\cos\\varphi"></span></p>
  <p>雅可比行列式 <span class="formula-inline" data-latex="J = abc r^2 \\sin\\varphi"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="V = \\frac{1}{3} \\iiint_\\Omega 3 dV = abc \\int_0^{2\\pi} d\\theta \\int_0^\\pi \\sin\\varphi d\\varphi \\int_0^1 r^2 dr = \\frac{4\\pi abc}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{4\\pi abc}{3}"></span></p>
</div>

<h5>2. 通量与散度</h5>

<p><strong>通量（流量）：</strong> 向量场 <span class="formula-inline" data-latex="\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}"></span> 通过曲面 <span class="formula-inline" data-latex="\\Sigma"></span> 的通量定义为</p>

<div class="formula-block" data-latex="\\Phi = \\iint_\\Sigma \\mathbf{F} \\cdot \\mathbf{n} dS = \\iint_\\Sigma P dydz + Q dzdx + R dxdy"></div>

<p><strong>散度：</strong> 向量场 <span class="formula-inline" data-latex="\\mathbf{F}"></span> 的<strong>散度</strong>定义为</p>

<div class="formula-block" data-latex="\\text{div } \\mathbf{F} = \\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}"></div>

<p>高斯公式的向量形式：</p>

<div class="formula-block" data-latex="\\iint_\\Sigma \\mathbf{F} \\cdot \\mathbf{n} dS = \\iiint_\\Omega \\text{div } \\mathbf{F} dV"></div>

<div class="note">
  <strong>💡 物理意义：</strong>
  <p>• 散度描述向量场在一点处的<strong>"源"</strong>或<strong>"汇"</strong>的强度</p>
  <p>• <span class="formula-inline" data-latex="\\text{div } \\mathbf{F} > 0"></span>：该点有源（流体向外扩散）</p>
  <p>• <span class="formula-inline" data-latex="\\text{div } \\mathbf{F} < 0"></span>：该点有汇（流体向内汇聚）</p>
  <p>• <span class="formula-inline" data-latex="\\text{div } \\mathbf{F} = 0"></span>：无源场（流体不可压缩）</p>
</div>

<h4>📘 例题 3：计算散度</h4>

<div class="example">
  <p><strong>题目：</strong> 求向量场 <span class="formula-inline" data-latex="\\mathbf{F} = x^2\\mathbf{i} + y^2\\mathbf{j} + z^2\\mathbf{k}"></span> 的散度。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\text{div } \\mathbf{F} = \\frac{\\partial(x^2)}{\\partial x} + \\frac{\\partial(y^2)}{\\partial y} + \\frac{\\partial(z^2)}{\\partial z} = 2x + 2y + 2z = 2(x+y+z)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2(x+y+z)"></span></p>
</div>

<h4>📘 例题 4：通量的计算</h4>

<div class="example">
  <p><strong>题目：</strong> 求向量场 <span class="formula-inline" data-latex="\\mathbf{F} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}"></span> 通过球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = a^2"></span> 外侧的通量。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\text{div } \\mathbf{F} = 1 + 1 + 1 = 3"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Phi = \\iint_\\Sigma \\mathbf{F} \\cdot \\mathbf{n} dS = \\iiint_\\Omega 3 dV = 3 \\cdot \\frac{4\\pi a^3}{3} = 4\\pi a^3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="4\\pi a^3"></span></p>
</div>

<h5>3. 高斯公式应用总结</h5>

<table>
  <tr>
    <th>应用类型</th>
    <th>公式</th>
    <th>条件</th>
  </tr>
  <tr>
    <td><strong>高斯公式</strong></td>
    <td><span class="formula-inline" data-latex="\\iint_\\Sigma \\mathbf{F}\\cdot\\mathbf{n} dS = \\iiint_\\Omega \\text{div}\\mathbf{F} dV"></span></td>
    <td>闭曲面外侧</td>
  </tr>
  <tr>
    <td><strong>体积公式</strong></td>
    <td><span class="formula-inline" data-latex="V = \\frac{1}{3}\\iint_\\Sigma x dydz + y dzdx + z dxdy"></span></td>
    <td>闭曲面外侧</td>
  </tr>
  <tr>
    <td><strong>散度</strong></td>
    <td><span class="formula-inline" data-latex="\\text{div}\\mathbf{F} = \\nabla\\cdot\\mathbf{F}"></span></td>
    <td>向量场的局部性质</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 高斯公式是向量分析中最基本的积分定理之一，它将曲面积分与三重积分联系起来，是计算通量的有力工具。散度作为向量场的局部特征，在流体力学、电磁学中有着核心的地位。
  </p>
</div>
`;