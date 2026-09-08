window.SECTION_CONTENT = `
<h4>📐 对坐标的曲线积分（第二类曲线积分）</h4>

<p>第二类曲线积分与第一类曲线积分不同，它与曲线的方向有关，计算的是向量场沿曲线的累积效应，在物理学中对应功、环量等概念。</p>

<h5>1. 对坐标的曲线积分的概念与性质</h5>

<p><strong>问题引入：</strong> 求变力 <span class="formula-inline" data-latex="\\mathbf{F}(x, y) = P(x, y)\\mathbf{i} + Q(x, y)\\mathbf{j}"></span> 沿曲线 <span class="formula-inline" data-latex="L"></span> 所做的功。</p>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="L"></span> 为 <span class="formula-inline" data-latex="xOy"></span> 平面内从点 <span class="formula-inline" data-latex="A"></span> 到点 <span class="formula-inline" data-latex="B"></span> 的有向曲线，函数 <span class="formula-inline" data-latex="P(x, y)"></span> 和 <span class="formula-inline" data-latex="Q(x, y)"></span> 在 <span class="formula-inline" data-latex="L"></span> 上有界。将 <span class="formula-inline" data-latex="L"></span> 任意分成 <span class="formula-inline" data-latex="n"></span> 个小段，任取 <span class="formula-inline" data-latex="(\\xi_i, \\eta_i)"></span>，若</p>

<div class="formula-block" data-latex="\\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} [P(\\xi_i, \\eta_i)\\Delta x_i + Q(\\xi_i, \\eta_i)\\Delta y_i]"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="P(x, y)"></span> 和 <span class="formula-inline" data-latex="Q(x, y)"></span> 在曲线 <span class="formula-inline" data-latex="L"></span> 上<strong>对坐标的曲线积分</strong>（第二类曲线积分），记作</p>

<div class="formula-block" data-latex="\\int_L P(x, y) dx + Q(x, y) dy"></div>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 第二类曲线积分与曲线的<strong>方向有关</strong>：<span class="formula-inline" data-latex="\\int_{L^-} = -\\int_L"></span></p>
  <p>• 物理意义：变力 <span class="formula-inline" data-latex="\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}"></span> 沿曲线 <span class="formula-inline" data-latex="L"></span> 所做的<strong>功</strong></p>
  <p>• 向量形式：<span class="formula-inline" data-latex="\\int_L \\mathbf{F} \\cdot d\\mathbf{r}"></span>，其中 <span class="formula-inline" data-latex="d\\mathbf{r} = dx\\mathbf{i} + dy\\mathbf{j}"></span></p>
</div>

<h5>2. 对坐标的曲线积分的计算法</h5>

<p><strong>参数方程法：</strong> 若 <span class="formula-inline" data-latex="L: \\begin{cases} x = x(t) \\\\ y = y(t) \\end{cases}, t: \\alpha \\to \\beta"></span>，则</p>

<div class="formula-block" data-latex="\\int_L P dx + Q dy = \\int_\\alpha^\\beta [P(x(t), y(t))x'(t) + Q(x(t), y(t))y'(t)] dt"></div>

<h4>📘 例题 1：参数方程计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_L x dy - y dx"></span>，其中 <span class="formula-inline" data-latex="L: x = a\\cos t, y = a\\sin t, 0 \\le t \\le 2\\pi"></span>（逆时针）。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="dx = -a\\sin t dt, dy = a\\cos t dt"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x dy - y dx = a\\cos t \\cdot a\\cos t dt - a\\sin t \\cdot (-a\\sin t) dt"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= a^2(\\cos^2 t + \\sin^2 t) dt = a^2 dt"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_L x dy - y dx = \\int_0^{2\\pi} a^2 dt = 2\\pi a^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2\\pi a^2"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 该结果等于 <span class="formula-inline" data-latex="2</span> 倍圆面积，与格林公式一致。</p>
  </div>
</div>

<h4>📘 例题 2：沿不同方向的曲线积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_L x dy"></span>，其中 <span class="formula-inline" data-latex="L"></span> 是从 <span class="formula-inline" data-latex="(0, 0)"></span> 到 <span class="formula-inline" data-latex="(1, 1)"></span> 的抛物线 <span class="formula-inline" data-latex="y = x^2"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="x = t, y = t^2, 0 \\le t \\le 1"></span></p>
  <p><span class="formula-inline" data-latex="dy = 2t dt"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_L x dy = \\int_0^1 t \\cdot 2t dt = \\int_0^1 2t^2 dt = \\frac{2}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{2}{3}"></span></p>
</div>

<h5>3. 两类曲线积分之间的联系</h5>

<p>设曲线 <span class="formula-inline" data-latex="L"></span> 的切向量方向余弦为 <span class="formula-inline" data-latex="(\\cos\\alpha, \\cos\\beta)"></span>，则</p>

<div class="formula-block" data-latex="\\int_L P dx + Q dy = \\int_L (P\\cos\\alpha + Q\\cos\\beta) ds"></div>

<p>其中</p>
<div class="formula-block" data-latex="\\cos\\alpha = \\frac{dx}{ds}, \\quad \\cos\\beta = \\frac{dy}{ds}"></div>

<p>向量形式：</p>
<div class="formula-block" data-latex="\\int_L \\mathbf{F} \\cdot d\\mathbf{r} = \\int_L \\mathbf{F} \\cdot \\mathbf{T} ds"></div>

<p>其中 <span class="formula-inline" data-latex="\\mathbf{T}"></span> 是曲线的单位切向量。</p>

<h4>📘 例题 3：两类曲线积分的转换</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="\\int_L x dy - y dx"></span> 转换为第一类曲线积分，其中 <span class="formula-inline" data-latex="L"></span> 为单位圆。</p>
  
  <p><strong>解：</strong></p>
  <p>单位圆上 <span class="formula-inline" data-latex="x = \\cos t, y = \\sin t, ds = dt"></span></p>
  <p><span class="formula-inline" data-latex="\\cos\\alpha = dx/ds = -\\sin t, \\cos\\beta = dy/ds = \\cos t"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P = -y = -\\sin t, Q = x = \\cos t"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P\\cos\\alpha + Q\\cos\\beta = (-\\sin t)(-\\sin t) + \\cos t \\cdot \\cos t = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\int_L x dy - y dx = \\int_L ds = 2\\pi"></span></p>
</div>

<h5>4. 第二类曲线积分总结</h5>

<table>
  <tr>
    <th>特征</th>
    <th>第一类（对弧长）</th>
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
    <td><span class="formula-inline" data-latex="ds"></span></td>
    <td><span class="formula-inline" data-latex="dx, dy"></span></td>
  </tr>
  <tr>
    <td><strong>物理意义</strong></td>
    <td>曲线质量</td>
    <td>功、环量</td>
  </tr>
  <tr>
    <td><strong>记号</strong></td>
    <td><span class="formula-inline" data-latex="\\int_L f ds"></span></td>
    <td><span class="formula-inline" data-latex="\\int_L P dx + Q dy"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 对坐标的曲线积分（第二类曲线积分）是计算变力做功、环量等物理量的基本工具。它与曲线的方向密切相关，计算时要注意积分下限和上限的对应关系。两类曲线积分之间的联系为相互转换提供了便利。
  </p>
</div>
`;