window.SECTION_CONTENT = `
<h4>📐 格林公式及其应用</h4>

<p>格林公式是联系曲线积分与二重积分的桥梁，它将沿闭曲线的第二类曲线积分转化为该曲线所围区域上的二重积分，是场论中的重要公式。</p>

<h5>1. 格林公式</h5>

<p><strong>定理（格林公式）：</strong> 设闭区域 <span class="formula-inline" data-latex="D"></span> 由分段光滑的曲线 <span class="formula-inline" data-latex="L"></span> 围成，函数 <span class="formula-inline" data-latex="P(x, y)"></span> 和 <span class="formula-inline" data-latex="Q(x, y)"></span> 在 <span class="formula-inline" data-latex="D"></span> 上具有一阶连续偏导数，则</p>

<div class="formula-block" data-latex="\\oint_L P dx + Q dy = \\iint_D \\left( \\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y} \\right) dxdy"></div>

<p>其中 <span class="formula-inline" data-latex="L"></span> 取正向（逆时针方向）。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 格林公式将<strong>曲线积分</strong>转化为<strong>二重积分</strong></p>
  <p>• 当 <span class="formula-inline" data-latex="P = -y, Q = x"></span> 时，得到面积公式：<span class="formula-inline" data-latex="S = \\frac{1}{2}\\oint_L x dy - y dx"></span></p>
  <p>• 是斯托克斯公式在二维情形的特例</p>
</div>

<h4>📘 例题 1：利用格林公式计算曲线积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\oint_L x dy"></span>，其中 <span class="formula-inline" data-latex="L"></span> 是椭圆 <span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1"></span> 的正向边界。</p>
  
  <p><strong>解法一（直接）：</strong></p>
  <p><span class="formula-inline" data-latex="x = a\\cos t, y = b\\sin t, 0 \\le t \\le 2\\pi"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\oint_L x dy = \\int_0^{2\\pi} a\\cos t \\cdot b\\cos t dt = ab \\int_0^{2\\pi} \\cos^2 t dt = \\pi ab"></span>
  </p>
  
  <p><strong>解法二（格林公式）：</strong></p>
  <p><span class="formula-inline" data-latex="P = 0, Q = x"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\oint_L x dy = \\iint_D \\left( \\frac{\\partial x}{\\partial x} - \\frac{\\partial 0}{\\partial y} \\right) dxdy = \\iint_D dxdy = \\pi ab"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\pi ab"></span></p>
</div>

<h5>2. 平面上曲线积分与路径无关的条件</h5>

<p><strong>定理：</strong> 在单连通区域 <span class="formula-inline" data-latex="D"></span> 内，曲线积分 <span class="formula-inline" data-latex="\\int_L P dx + Q dy"></span> 与路径无关的充要条件是</p>

<div class="formula-block" data-latex="\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x} \\quad \\text{在 } D \\text{ 内恒成立}"></div>

<p><strong>等价条件：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="P dx + Q dy"></span> 是某个函数的全微分</li>
  <li>沿 <span class="formula-inline" data-latex="D"></span> 内任意闭曲线 <span class="formula-inline" data-latex="C"></span>，有 <span class="formula-inline" data-latex="\\oint_C P dx + Q dy = 0"></span></li>
</ul>

<h4>📘 例题 2：判断是否与路径无关</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\int_L (2xy dx + x^2 dy)"></span> 是否与路径无关。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="P = 2xy, Q = x^2"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial P}{\\partial y} = 2x, \\quad \\frac{\\partial Q}{\\partial x} = 2x"></span>
  </p>
  <p>因为 <span class="formula-inline" data-latex="\\partial P/\\partial y = \\partial Q/\\partial x"></span>，所以与路径无关。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 与路径无关</p>
</div>

<h5>3. 二元函数的全微分求积</h5>

<p>若 <span class="formula-inline" data-latex="\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}"></span>，则存在函数 <span class="formula-inline" data-latex="u(x, y)"></span>，使得</p>

<div class="formula-block" data-latex="du = P dx + Q dy"></div>

<p>即 <span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial x} = P, \\frac{\\partial u}{\\partial y} = Q"></span>。</p>

<p><strong>求法：</strong></p>
<div class="formula-block" data-latex="u(x, y) = \\int_{x_0}^x P(x, y_0) dx + \\int_{y_0}^y Q(x, y) dy"></div>

<h4>📘 例题 3：求全微分的原函数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="2xy dx + x^2 dy"></span> 的原函数 <span class="formula-inline" data-latex="u(x, y)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial x} = 2xy \\Rightarrow u = \\int 2xy dx = x^2 y + \\varphi(y)"></span></p>
  <p><span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial y} = x^2 + \\varphi'(y) = x^2 \\Rightarrow \\varphi'(y) = 0 \\Rightarrow \\varphi(y) = C"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="u(x, y) = x^2 y + C"></span></p>
</div>

<h4>📘 例题 4：利用全微分求曲线积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_{(1,0)}^{(2,1)} (2xy dx + x^2 dy)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>由例题3，<span class="formula-inline" data-latex="2xy dx + x^2 dy = d(x^2 y)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_{(1,0)}^{(2,1)} 2xy dx + x^2 dy = [x^2 y]_{(1,0)}^{(2,1)} = 4 - 0 = 4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="4"></span></p>
</div>

<h5>4. 格林公式应用总结</h5>

<table>
  <tr>
    <th>应用类型</th>
    <th>公式</th>
    <th>条件</th>
  </tr>
  <tr>
    <td><strong>格林公式</strong></td>
    <td><span class="formula-inline" data-latex="\\oint_L P dx + Q dy = \\iint_D (Q_x - P_y) d\\sigma"></span></td>
    <td>闭曲线正向</td>
  </tr>
  <tr>
    <td><strong>面积公式</strong></td>
    <td><span class="formula-inline" data-latex="S = \\frac{1}{2}\\oint_L x dy - y dx"></span></td>
    <td>闭曲线正向</td>
  </tr>
  <tr>
    <td><strong>路径无关</strong></td>
    <td><span class="formula-inline" data-latex="P_y = Q_x"></span></td>
    <td>单连通区域</td>
  </tr>
  <tr>
    <td><strong>全微分求积</strong></td>
    <td><span class="formula-inline" data-latex="du = P dx + Q dy"></span></td>
    <td><span class="formula-inline" data-latex="P_y = Q_x"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 格林公式是积分学中最重要的公式之一，它将曲线积分与二重积分联系起来。路径无关性和全微分求积是格林公式的重要推论，在实际计算中有着广泛的应用。
  </p>
</div>
`;