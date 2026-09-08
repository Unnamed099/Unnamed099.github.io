window.SECTION_CONTENT = `
<h4>📐 偏导数</h4>

<p>偏导数是多元函数微分学的基础概念。它研究的是：当其他变量固定时，函数对某一个变量的变化率。这与一元函数的导数在思想上是一致的。</p>

<h5>1. 偏导数的定义及其计算法</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 的某邻域内有定义。若</p>

<div class="formula-block" data-latex="\\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x, y_0) - f(x_0, y_0)}{\\Delta x}"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处对 <span class="formula-inline" data-latex="x"></span> 的<strong>偏导数</strong>，记作</p>

<div class="formula-block" data-latex="\\frac{\\partial z}{\\partial x}\\bigg|_{(x_0, y_0)} = f_x(x_0, y_0)"></div>

<p>类似地，对 <span class="formula-inline" data-latex="y"></span> 的偏导数为</p>

<div class="formula-block" data-latex="\\frac{\\partial z}{\\partial y}\\bigg|_{(x_0, y_0)} = f_y(x_0, y_0) = \\lim_{\\Delta y \\to 0} \\frac{f(x_0, y_0 + \\Delta y) - f(x_0, y_0)}{\\Delta y}"></div>

<div class="note">
  <strong>💡 计算要点：</strong>
  <p>• 对 <span class="formula-inline" data-latex="x"></span> 求偏导时，将 <span class="formula-inline" data-latex="y"></span> 视为常数</p>
  <p>• 对 <span class="formula-inline" data-latex="y"></span> 求偏导时，将 <span class="formula-inline" data-latex="x"></span> 视为常数</p>
  <p>• 偏导数的记号 <span class="formula-inline" data-latex="\\partial"></span> 读作"偏"</p>
</div>

<h4>📘 例题 1：计算偏导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="z = x^2 + 3xy + y^3"></span> 的偏导数 <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x}"></span> 和 <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial y}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x} = 2x + 3y"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial y} = 3x + 3y^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f_x = 2x + 3y</span>，<span class="formula-inline" data-latex="f_y = 3x + 3y^2"></span></p>
</div>

<h4>📘 例题 2：在指定点的偏导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="z = \\sin(xy)"></span> 在点 <span class="formula-inline" data-latex="(\\pi/2, 1)"></span> 处的偏导数。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x} = y\\cos(xy)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x}\\bigg|_{(\\pi/2, 1)} = 1 \\cdot \\cos(\\pi/2) = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial y} = x\\cos(xy)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial y}\\bigg|_{(\\pi/2, 1)} = \\frac{\\pi}{2} \\cdot \\cos(\\pi/2) = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f_x(\\pi/2, 1) = 0</span>，<span class="formula-inline" data-latex="f_y(\\pi/2, 1) = 0"></span></p>
</div>

<h5>2. 高阶偏导数</h5>

<p>若偏导数 <span class="formula-inline" data-latex="f_x(x, y)"></span> 和 <span class="formula-inline" data-latex="f_y(x, y)"></span> 仍可偏导，则得到<strong>二阶偏导数</strong>：</p>

<div class="formula-block" data-latex="\\frac{\\partial^2 z}{\\partial x^2} = f_{xx} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial z}{\\partial x}\\right)"></div>
<div class="formula-block" data-latex="\\frac{\\partial^2 z}{\\partial x \\partial y} = f_{xy} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial z}{\\partial x}\\right)"></div>
<div class="formula-block" data-latex="\\frac{\\partial^2 z}{\\partial y \\partial x} = f_{yx} = \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial z}{\\partial y}\\right)"></div>
<div class="formula-block" data-latex="\\frac{\\partial^2 z}{\\partial y^2} = f_{yy} = \\frac{\\partial}{\\partial y}\\left(\\frac{\\partial z}{\\partial y}\\right)"></div>

<p><strong>定理（混合偏导数相等）：</strong> 若 <span class="formula-inline" data-latex="f_{xy}"></span> 和 <span class="formula-inline" data-latex="f_{yx}"></span> 在区域 <span class="formula-inline" data-latex="D"></span> 上连续，则</p>
<div class="formula-block" data-latex="f_{xy} = f_{yx}"></div>

<p>即混合偏导数与求导顺序无关。</p>

<h4>📘 例题 3：计算二阶偏导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="z = e^{xy}"></span> 的所有二阶偏导数。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_x = y e^{xy}, \\quad f_y = x e^{xy}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_{xx} = y^2 e^{xy}, \\quad f_{yy} = x^2 e^{xy}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_{xy} = e^{xy} + xy e^{xy} = (1+xy)e^{xy}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_{yx} = e^{xy} + xy e^{xy} = (1+xy)e^{xy} = f_{xy}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>验证了</strong> <span class="formula-inline" data-latex="f_{xy} = f_{yx}"></span></p>
</div>

<h5>3. 偏导数的几何意义</h5>

<p>偏导数 <span class="formula-inline" data-latex="f_x(x_0, y_0)"></span> 是曲面 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0, f(x_0, y_0))"></span> 处，沿 <span class="formula-inline" data-latex="x"></span> 轴方向的切线斜率。</p>

<p>偏导数 <span class="formula-inline" data-latex="f_y(x_0, y_0)"></span> 是曲面沿 <span class="formula-inline" data-latex="y"></span> 轴方向的切线斜率。</p>

<h5>4. 偏导数总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>记号</th>
  </tr>
  <tr>
    <td><strong>对 <span class="formula-inline" data-latex="x"></span> 偏导</strong></td>
    <td><span class="formula-inline" data-latex="\\lim_{\\Delta x\\to 0} \\frac{f(x_0+\\Delta x, y_0)-f(x_0,y_0)}{\\Delta x}"></span></td>
    <td><span class="formula-inline" data-latex="f_x, \\frac{\\partial z}{\\partial x}"></span></td>
  </tr>
  <tr>
    <td><strong>对 <span class="formula-inline" data-latex="y"></span> 偏导</strong></td>
    <td><span class="formula-inline" data-latex="\\lim_{\\Delta y\\to 0} \\frac{f(x_0, y_0+\\Delta y)-f(x_0,y_0)}{\\Delta y}"></span></td>
    <td><span class="formula-inline" data-latex="f_y, \\frac{\\partial z}{\\partial y}"></span></td>
  </tr>
  <tr>
    <td><strong>混合偏导</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{\\partial}{\\partial y}(\\frac{\\partial z}{\\partial x})"></span></td>
    <td><span class="formula-inline" data-latex="f_{xy}, \\frac{\\partial^2 z}{\\partial x\\partial y}"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 偏导数是多元函数微分学的基石。它度量了函数沿坐标轴方向的变化率，是研究多元函数局部性质的基本工具。混合偏导数的相等性（在连续条件下）是偏导数运算的重要性质。
  </p>
</div>
`;