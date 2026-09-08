window.SECTION_CONTENT = `
<h4>📐 多元函数微分学的几何应用</h4>

<p>一元函数的导数对应切线的斜率，而多元函数的偏导数和全微分则对应空间曲线的切线和曲面的切平面。本节将微分学与空间解析几何结合起来。</p>

<h5>1. 一元向量值函数及其导数</h5>

<p><strong>定义：</strong> 若 <span class="formula-inline" data-latex="\\mathbf{r}(t) = (x(t), y(t), z(t))"></span>，则称 <span class="formula-inline" data-latex="\\mathbf{r}(t)"></span> 为<strong>向量值函数</strong>。</p>

<p><strong>导数：</strong></p>
<div class="formula-block" data-latex="\\mathbf{r}'(t) = (x'(t), y'(t), z'(t))"></div>

<p><strong>几何意义：</strong> <span class="formula-inline" data-latex="\\mathbf{r}'(t)"></span> 是空间曲线在 <span class="formula-inline" data-latex="t"></span> 处的<strong>切向量</strong>，方向指向曲线前进的方向。</p>

<h5>2. 空间曲线的切线与法平面</h5>

<p>设空间曲线由参数方程 <span class="formula-inline" data-latex="\\begin{cases} x = x(t) \\\\ y = y(t) \\\\ z = z(t) \\end{cases}"></span> 给出，则</p>

<p><strong>切向量：</strong></p>
<div class="formula-block" data-latex="\\mathbf{T} = (x'(t_0), y'(t_0), z'(t_0))"></div>

<p><strong>切线方程：</strong></p>
<div class="formula-block" data-latex="\\frac{x - x_0}{x'(t_0)} = \\frac{y - y_0}{y'(t_0)} = \\frac{z - z_0}{z'(t_0)}"></div>

<p><strong>法平面方程：</strong></p>
<div class="formula-block" data-latex="x'(t_0)(x - x_0) + y'(t_0)(y - y_0) + z'(t_0)(z - z_0) = 0"></div>

<h4>📘 例题 1：求切线方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求曲线 <span class="formula-inline" data-latex="\\begin{cases} x = t \\\\ y = t^2 \\\\ z = t^3 \\end{cases}"></span> 在 <span class="formula-inline" data-latex="t = 1"></span> 处的切线和法平面方程。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="t=1"></span> 时，<span class="formula-inline" data-latex="(x_0, y_0, z_0) = (1, 1, 1)"></span></p>
  <p><span class="formula-inline" data-latex="\\mathbf{T} = (1, 2t, 3t^2)|_{t=1} = (1, 2, 3)"></span></p>
  <p><strong>切线方程：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{x - 1}{1} = \\frac{y - 1}{2} = \\frac{z - 1}{3}"></span>
  </p>
  <p><strong>法平面方程：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="1(x-1) + 2(y-1) + 3(z-1) = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x + 2y + 3z - 6 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 切线 <span class="formula-inline" data-latex="\\frac{x-1}{1}=\\frac{y-1}{2}=\\frac{z-1}{3}"></span>，法平面 <span class="formula-inline" data-latex="x+2y+3z-6=0"></span></p>
</div>

<h5>3. 曲面的切平面与法线</h5>

<p><strong>情形一：</strong> 曲面由 <span class="formula-inline" data-latex="F(x, y, z) = 0"></span> 给出</p>

<p><strong>法向量：</strong></p>
<div class="formula-block" data-latex="\\mathbf{n} = (F_x, F_y, F_z)"></div>

<p><strong>切平面方程：</strong></p>
<div class="formula-block" data-latex="F_x(x_0, y_0, z_0)(x-x_0) + F_y(x_0, y_0, z_0)(y-y_0) + F_z(x_0, y_0, z_0)(z-z_0) = 0"></div>

<p><strong>法线方程：</strong></p>
<div class="formula-block" data-latex="\\frac{x - x_0}{F_x} = \\frac{y - y_0}{F_y} = \\frac{z - z_0}{F_z}"></div>

<p><strong>情形二：</strong> 曲面由 <span class="formula-inline" data-latex="z = f(x, y)"></span> 给出</p>

<p>令 <span class="formula-inline" data-latex="F(x, y, z) = f(x, y) - z = 0"></span>，则</p>
<div class="formula-block" data-latex="\\mathbf{n} = (f_x, f_y, -1)"></div>

<p><strong>切平面方程：</strong></p>
<div class="formula-block" data-latex="z - z_0 = f_x(x_0, y_0)(x - x_0) + f_y(x_0, y_0)(y - y_0)"></div>

<h4>📘 例题 2：求切平面方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求曲面 <span class="formula-inline" data-latex="z = x^2 + y^2"></span> 在点 <span class="formula-inline" data-latex="(1, 1, 2)"></span> 处的切平面和法线方程。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f_x = 2x = 2, f_y = 2y = 2"></span>（在 <span class="formula-inline" data-latex="(1,1)"></span> 处）</p>
  
  <p><strong>切平面：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="z - 2 = 2(x - 1) + 2(y - 1)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2x + 2y - z - 2 = 0"></span>
  </p>
  
  <p><strong>法线方程：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{x - 1}{2} = \\frac{y - 1}{2} = \\frac{z - 2}{-1}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 切平面 <span class="formula-inline" data-latex="2x+2y-z-2=0"></span>，法线 <span class="formula-inline" data-latex="\\frac{x-1}{2}=\\frac{y-1}{2}=\\frac{z-2}{-1}"></span></p>
</div>

<h4>📘 例题 3：隐式曲面的切平面</h4>

<div class="example">
  <p><strong>题目：</strong> 求球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = 3"></span> 在点 <span class="formula-inline" data-latex="(1, 1, 1)"></span> 处的切平面。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="F(x, y, z) = x^2 + y^2 + z^2 - 3"></span></p>
  <p><span class="formula-inline" data-latex="F_x = 2x = 2, F_y = 2y = 2, F_z = 2z = 2"></span></p>
  
  <p><strong>切平面：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2(x-1) + 2(y-1) + 2(z-1) = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x + y + z - 3 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x + y + z - 3 = 0"></span></p>
</div>

<h5>4. 几何应用总结</h5>

<table>
  <tr>
    <th>对象</th>
    <th>给出方式</th>
    <th>切向量/法向量</th>
    <th>方程</th>
  </tr>
  <tr>
    <td><strong>空间曲线</strong></td>
    <td>参数式</td>
    <td><span class="formula-inline" data-latex="\\mathbf{T}=(x',y',z')"></span></td>
    <td>切线（平行于 <span class="formula-inline" data-latex="\\mathbf{T}"></span>）<br>法平面（垂直于 <span class="formula-inline" data-latex="\\mathbf{T}"></span>）</td>
  </tr>
  <tr>
    <td><strong>曲面</strong></td>
    <td>隐式 <span class="formula-inline" data-latex="F=0"></span></td>
    <td><span class="formula-inline" data-latex="\\mathbf{n}=(F_x,F_y,F_z)"></span></td>
    <td>切平面（垂直于 <span class="formula-inline" data-latex="\\mathbf{n}"></span>）<br>法线（平行于 <span class="formula-inline" data-latex="\\mathbf{n}"></span>）</td>
  </tr>
  <tr>
    <td><strong>曲面</strong></td>
    <td>显式 <span class="formula-inline" data-latex="z=f(x,y)"></span></td>
    <td><span class="formula-inline" data-latex="\\mathbf{n}=(f_x,f_y,-1)"></span></td>
    <td>切平面 <span class="formula-inline" data-latex="z-z_0=f_x\\Delta x+f_y\\Delta y"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 多元函数微分学的几何应用将微积分与空间解析几何紧密联系起来。空间曲线的切线和法平面、曲面的切平面和法线，都是用导数（或偏导数）描述几何对象的局部性质的典型例子。
  </p>
</div>
`;