window.SECTION_CONTENT = `
<h4>📐 隐函数的求导公式</h4>

<p>在一元函数中，隐函数求导通过对方程两端求导实现。在多元函数中，隐函数的情况更加丰富：一个方程可以确定一个隐函数，而方程组可以确定多个隐函数。</p>

<h5>1. 一个方程的情形</h5>

<p><strong>定理（隐函数存在定理）：</strong> 设函数 <span class="formula-inline" data-latex="F(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 的某邻域内满足：</p>

<ul>
  <li><span class="formula-inline" data-latex="F(x_0, y_0) = 0"></span></li>
  <li><span class="formula-inline" data-latex="F_y(x_0, y_0) \\neq 0"></span></li>
  <li><span class="formula-inline" data-latex="F_x, F_y"></span> 在该邻域内连续</li>
</ul>

<p>则方程 <span class="formula-inline" data-latex="F(x, y) = 0"></span> 在 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 附近唯一确定一个隐函数 <span class="formula-inline" data-latex="y = f(x)"></span>，且</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} = -\\frac{F_x}{F_y}"></div>

<p>对于二元方程 <span class="formula-inline" data-latex="F(x, y, z) = 0"></span>，若 <span class="formula-inline" data-latex="F_z \\neq 0"></span>，则</p>

<div class="formula-block" data-latex="\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z}"></div>

<h4>📘 例题 1：隐函数求导（一个方程）</h4>

<div class="example">
  <p><strong>题目：</strong> 求由方程 <span class="formula-inline" data-latex="x^2 + y^2 = 1"></span> 确定的隐函数 <span class="formula-inline" data-latex="y = y(x)"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="F(x, y) = x^2 + y^2 - 1"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F_x = 2x, \\quad F_y = 2y"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{F_x}{F_y} = -\\frac{2x}{2y} = -\\frac{x}{y} \\quad (y \\neq 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{x}{y}"></span></p>
</div>

<h4>📘 例题 2：三元隐函数求偏导</h4>

<div class="example">
  <p><strong>题目：</strong> 求由 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = 1"></span> 确定的 <span class="formula-inline" data-latex="z = z(x, y)"></span> 的偏导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="F(x, y, z) = x^2 + y^2 + z^2 - 1"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F_x = 2x, \\quad F_y = 2y, \\quad F_z = 2z"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x} = -\\frac{F_x}{F_z} = -\\frac{x}{z}, \\quad \\frac{\\partial z}{\\partial y} = -\\frac{F_y}{F_z} = -\\frac{y}{z} \\quad (z \\neq 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="z_x = -x/z</span>，<span class="formula-inline" data-latex="z_y = -y/z"></span></p>
</div>

<h5>2. 方程组的情形</h5>

<p>对于方程组</p>

<div class="formula-block" data-latex="\\begin{cases} F(x, y, u, v) = 0 \\\\ G(x, y, u, v) = 0 \\end{cases}"></div>

<p>在一定条件下，可确定 <span class="formula-inline" data-latex="u = u(x, y)"></span> 和 <span class="formula-inline" data-latex="v = v(x, y)"></span>。求偏导时，将方程组两边对 <span class="formula-inline" data-latex="x"></span> 求导，解线性方程组即可。</p>

<h4>📘 例题 3：方程组确定的隐函数</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="\\begin{cases} u + v = x + y \\\\ uv = xy \\end{cases}"></span>，求 <span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial x}"></span> 和 <span class="formula-inline" data-latex="\\frac{\\partial v}{\\partial x}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>对 <span class="formula-inline" data-latex="x"></span> 求偏导（<span class="formula-inline" data-latex="y"></span> 视为常数）：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} u_x + v_x = 1 \\\\ u_x v + u v_x = y \\end{cases}"></span>
  </p>
  <p>解得：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="u_x = \\frac{y - v}{u - v}, \\quad v_x = \\frac{u - y}{u - v} \\quad (u \\neq v)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="u_x = \\frac{y-v}{u-v}</span>，<span class="formula-inline" data-latex="v_x = \\frac{u-y}{u-v}"></span></p>
</div>

<h4>📘 例题 4：方程组求偏导（一般形式）</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="\\begin{cases} x^2 + y^2 - u^2 - v^2 = 0 \\\\ xy - uv = 0 \\end{cases}"></span>，求 <span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial x}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>对 <span class="formula-inline" data-latex="x"></span> 求偏导：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} 2x - 2u u_x - 2v v_x = 0 \\\\ y - u_x v - u v_x = 0 \\end{cases}"></span>
  </p>
  <p>整理：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} u u_x + v v_x = x \\\\ v u_x + u v_x = y \\end{cases}"></span>
  </p>
  <p>由克莱姆法则：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="u_x = \\frac{\\begin{vmatrix} x & v \\\\ y & u \\end{vmatrix}}{\\begin{vmatrix} u & v \\\\ v & u \\end{vmatrix}} = \\frac{xu - yv}{u^2 - v^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial x} = \\frac{xu - yv}{u^2 - v^2}"></span></p>
</div>

<h5>3. 隐函数求导总结</h5>

<table>
  <tr>
    <th>情形</th>
    <th>方程</th>
    <th>求导公式</th>
  </tr>
  <tr>
    <td><strong>一个方程（二元）</strong></td>
    <td><span class="formula-inline" data-latex="F(x,y)=0"></span></td>
    <td><span class="formula-inline" data-latex="\\frac{dy}{dx} = -\\frac{F_x}{F_y}"></span></td>
  </tr>
  <tr>
    <td><strong>一个方程（三元）</strong></td>
    <td><span class="formula-inline" data-latex="F(x,y,z)=0"></span></td>
    <td><span class="formula-inline" data-latex="z_x = -\\frac{F_x}{F_z}, z_y = -\\frac{F_y}{F_z}"></span></td>
  </tr>
  <tr>
    <td><strong>方程组</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{cases} F=0 \\\\ G=0 \\end{cases}"></span></td>
    <td>对方程组两边求导，解线性方程组</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 隐函数求导公式是多元函数微分学的重要应用。一个方程的情形有简洁的公式，方程组的情形则需要求解线性方程组。隐函数求导在几何（求切线、法线）、物理和工程问题中有着广泛的应用。
  </p>
</div>
`;