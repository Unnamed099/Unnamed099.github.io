window.SECTION_CONTENT = `
<h4>📐 斯托克斯公式 环流量与旋度</h4>

<p>斯托克斯公式是格林公式在三维空间的推广，它将空间曲线积分与曲面积分联系起来，是场论中极为重要的公式之一。</p>

<h5>1. 斯托克斯公式</h5>

<p><strong>定理（斯托克斯公式）：</strong> 设 <span class="formula-inline" data-latex="\\Sigma"></span> 是分片光滑的有向曲面，其边界为有向闭曲线 <span class="formula-inline" data-latex="\\Gamma"></span>，<span class="formula-inline" data-latex="\\Gamma"></span> 的正向与 <span class="formula-inline" data-latex="\\Sigma"></span> 的侧符合右手法则。若 <span class="formula-inline" data-latex="P, Q, R"></span> 在 <span class="formula-inline" data-latex="\\Sigma"></span> 上具有一阶连续偏导数，则</p>

<div class="formula-block" data-latex="\\oint_\\Gamma P dx + Q dy + R dz = \\iint_\\Sigma \\left( \\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z} \\right) dydz + \\left( \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x} \\right) dzdx + \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dxdy"></div>

<p>这就是<strong>斯托克斯公式</strong>，它是格林公式在三维空间的推广。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 斯托克斯公式将<strong>空间曲线积分</strong>转化为<strong>曲面积分</strong></p>
  <p>• 当曲面退化为平面区域时，斯托克斯公式退化为格林公式</p>
  <p>• 是向量分析中最重要的公式之一</p>
</div>

<h4>📘 例题 1：利用斯托克斯公式计算曲线积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\oint_\\Gamma y dx + z dy + x dz"></span>，其中 <span class="formula-inline" data-latex="\\Gamma"></span> 是球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = a^2"></span> 与平面 <span class="formula-inline" data-latex="x + y + z = 0"></span> 的交线。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="\\Sigma"></span> 为平面 <span class="formula-inline" data-latex="x + y + z = 0"></span> 在球面内的部分，方向向上。</p>
  <p><span class="formula-inline" data-latex="P = y, Q = z, R = x"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z} = 0 - 1 = -1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x} = 0 - 1 = -1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} = 0 - 1 = -1"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\oint_\\Gamma = \\iint_\\Sigma (-1) dydz + (-1) dzdx + (-1) dxdy = -\\iint_\\Sigma (dydz + dzdx + dxdy)"></span>
  </p>
  <p>平面 <span class="formula-inline" data-latex="x + y + z = 0"></span> 的法向量为 <span class="formula-inline" data-latex="\\mathbf{n} = (1,1,1)"></span>，其单位法向量为 <span class="formula-inline" data-latex="\\mathbf{n}_0 = (1,1,1)/\\sqrt{3}"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\iint_\\Sigma (dydz + dzdx + dxdy) = \\iint_\\Sigma \\mathbf{n}_0 \\cdot (1,1,1) dS = \\sqrt{3} \\cdot S"></span>
  </p>
  <p>截面圆的半径 <span class="formula-inline" data-latex="a"></span>，面积 <span class="formula-inline" data-latex="S = \\pi a^2"></span>，所以</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="-\\sqrt{3}\\pi a^2"></span></p>
</div>

<h5>2. 空间曲线积分与路径无关的条件</h5>

<p>在空间单连通区域中，曲线积分 <span class="formula-inline" data-latex="\\int_L P dx + Q dy + R dz"></span> 与路径无关的充要条件是</p>

<div class="formula-block" data-latex="\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}, \\quad \\frac{\\partial Q}{\\partial z} = \\frac{\\partial R}{\\partial y}, \\quad \\frac{\\partial R}{\\partial x} = \\frac{\\partial P}{\\partial z}"></div>

<p>即存在函数 <span class="formula-inline" data-latex="u(x, y, z)"></span>，使得</p>

<div class="formula-block" data-latex="du = P dx + Q dy + R dz"></div>

<h5>3. 环流量与旋度</h5>

<p><strong>环流量：</strong> 向量场 <span class="formula-inline" data-latex="\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}"></span> 沿闭曲线 <span class="formula-inline" data-latex="\\Gamma"></span> 的<strong>环流量</strong>定义为</p>

<div class="formula-block" data-latex="\\oint_\\Gamma \\mathbf{F} \\cdot d\\mathbf{r} = \\oint_\\Gamma P dx + Q dy + R dz"></div>

<p><strong>旋度：</strong> 向量场 <span class="formula-inline" data-latex="\\mathbf{F}"></span> 的<strong>旋度</strong>定义为</p>

<div class="formula-block" data-latex="\\text{rot } \\mathbf{F} = \\nabla \\times \\mathbf{F} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ \\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\ P & Q & R \\end{vmatrix}"></div>

<div class="formula-block" data-latex="= \\left( \\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z} \\right) \\mathbf{i} + \\left( \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x} \\right) \\mathbf{j} + \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) \\mathbf{k}"></div>

<p>斯托克斯公式的向量形式：</p>

<div class="formula-block" data-latex="\\oint_\\Gamma \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_\\Sigma (\\nabla \\times \\mathbf{F}) \\cdot \\mathbf{n} dS"></div>

<div class="note">
  <strong>💡 物理意义：</strong>
  <p>• 旋度描述向量场在一点处的<strong>旋转程度</strong></p>
  <p>• 旋度越大，场在该点的旋转越强</p>
  <p>• 若 <span class="formula-inline" data-latex="\\nabla \\times \\mathbf{F} = 0"></span>，则称 <span class="formula-inline" data-latex="\\mathbf{F}"></span> 为<strong>无旋场</strong>（保守场）</p>
  <p>• 无旋场的曲线积分与路径无关</p>
</div>

<h4>📘 例题 2：计算旋度</h4>

<div class="example">
  <p><strong>题目：</strong> 求向量场 <span class="formula-inline" data-latex="\\mathbf{F} = (x^2 + y^2)\\mathbf{i} + (y^2 + z^2)\\mathbf{j} + (z^2 + x^2)\\mathbf{k}"></span> 的旋度。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="P = x^2 + y^2, Q = y^2 + z^2, R = z^2 + x^2"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\text{rot}\\mathbf{F} = \\left( \\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z}, \\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x}, \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= (0 - 2z, 0 - 2x, 0 - 2y) = (-2z, -2x, -2y)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\nabla \\times \\mathbf{F} = -2z\\mathbf{i} - 2x\\mathbf{j} - 2y\\mathbf{k}"></span></p>
</div>

<h5>4. 场论中的三个重要算子</h5>

<table>
  <tr>
    <th>算子</th>
    <th>符号</th>
    <th>公式</th>
    <th>物理意义</th>
  </tr>
  <tr>
    <td><strong>梯度</strong></td>
    <td><span class="formula-inline" data-latex="\\nabla"></span></td>
    <td><span class="formula-inline" data-latex="\\nabla u = (u_x, u_y, u_z)"></span></td>
    <td>标量场的变化率</td>
  </tr>
  <tr>
    <td><strong>散度</strong></td>
    <td><span class="formula-inline" data-latex="\\nabla \\cdot"></span></td>
    <td><span class="formula-inline" data-latex="\\nabla \\cdot \\mathbf{F} = P_x + Q_y + R_z"></span></td>
    <td>向量场的源强度</td>
  </tr>
  <tr>
    <td><strong>旋度</strong></td>
    <td><span class="formula-inline" data-latex="\\nabla \\times"></span></td>
    <td><span class="formula-inline" data-latex="\\nabla \\times \\mathbf{F} = (R_y-Q_z, P_z-R_x, Q_x-P_y)"></span></td>
    <td>向量场的旋转程度</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 斯托克斯公式是向量分析中最重要的积分定理之一，它将曲线积分与曲面积分联系起来。旋度作为向量场的局部旋转特性，在流体力学、电磁学中有着核心的地位。梯度、散度、旋度构成了场论中三个最基本的概念，它们在物理学中描述了场的不同方面。
  </p>
</div>
`;