window.SECTION_CONTENT = `
<h4>📐 多元复合函数的求导法则</h4>

<p>在一元函数中，复合函数的求导法则（链式法则）是求导运算的核心。在多元函数中，链式法则同样重要，但由于多个中间变量的存在，其形式更加丰富多样。</p>

<h5>1. 一元函数与多元函数的复合</h5>

<p><strong>情形一：</strong> 设 <span class="formula-inline" data-latex="z = f(u, v)"></span>，其中 <span class="formula-inline" data-latex="u = u(t)"></span>，<span class="formula-inline" data-latex="v = v(t)"></span>，则</p>

<div class="formula-block" data-latex="\\frac{dz}{dt} = \\frac{\\partial z}{\\partial u}\\frac{du}{dt} + \\frac{\\partial z}{\\partial v}\\frac{dv}{dt} = f_u u'(t) + f_v v'(t)"></div>

<p><strong>情形二：</strong> 设 <span class="formula-inline" data-latex="z = f(u)"></span>，其中 <span class="formula-inline" data-latex="u = u(x, y)"></span>，则</p>

<div class="formula-block" data-latex="\\frac{\\partial z}{\\partial x} = \\frac{dz}{du}\\frac{\\partial u}{\\partial x} = f'(u)u_x, \\quad \\frac{\\partial z}{\\partial y} = \\frac{dz}{du}\\frac{\\partial u}{\\partial y} = f'(u)u_y"></div>

<h4>📘 例题 1：复合函数求导（情形一）</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="z = u^2 + v^3"></span>，<span class="formula-inline" data-latex="u = \\sin t"></span>，<span class="formula-inline" data-latex="v = e^t"></span>，求 <span class="formula-inline" data-latex="\\frac{dz}{dt}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial u} = 2u = 2\\sin t, \\quad \\frac{\\partial z}{\\partial v} = 3v^2 = 3e^{2t}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{du}{dt} = \\cos t, \\quad \\frac{dv}{dt} = e^t"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dz}{dt} = 2\\sin t \\cdot \\cos t + 3e^{2t} \\cdot e^t = \\sin 2t + 3e^{3t}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{dz}{dt} = \\sin 2t + 3e^{3t}"></span></p>
</div>

<h5>2. 多元函数与多元函数的复合</h5>

<p><strong>情形三：</strong> 设 <span class="formula-inline" data-latex="z = f(u, v)"></span>，其中 <span class="formula-inline" data-latex="u = u(x, y)"></span>，<span class="formula-inline" data-latex="v = v(x, y)"></span>，则</p>

<div class="formula-block" data-latex="\\frac{\\partial z}{\\partial x} = \\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial x} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial x} = f_u u_x + f_v v_x"></div>
<div class="formula-block" data-latex="\\frac{\\partial z}{\\partial y} = \\frac{\\partial z}{\\partial u}\\frac{\\partial u}{\\partial y} + \\frac{\\partial z}{\\partial v}\\frac{\\partial v}{\\partial y} = f_u u_y + f_v v_y"></div>

<h4>📘 例题 2：多元复合函数求导</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="z = u^2 + v^2"></span>，<span class="formula-inline" data-latex="u = x + y"></span>，<span class="formula-inline" data-latex="v = xy"></span>，求 <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x}"></span> 和 <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial y}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial u} = 2u = 2(x+y), \\quad \\frac{\\partial z}{\\partial v} = 2v = 2xy"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial x} = 1, \\quad \\frac{\\partial v}{\\partial x} = y"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial x} = 2(x+y) \\cdot 1 + 2xy \\cdot y = 2x + 2y + 2xy^2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial y} = 1, \\quad \\frac{\\partial v}{\\partial y} = x"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\partial z}{\\partial y} = 2(x+y) \\cdot 1 + 2xy \\cdot x = 2x + 2y + 2x^2 y"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f_x = 2x+2y+2xy^2</span>，<span class="formula-inline" data-latex="f_y = 2x+2y+2x^2y"></span></p>
</div>

<h5>3. 全微分形式不变性</h5>

<p>与一元函数类似，多元函数的全微分也具有<strong>形式不变性</strong>：</p>

<p>若 <span class="formula-inline" data-latex="z = f(u, v)"></span>，则</p>

<div class="formula-block" data-latex="dz = \\frac{\\partial z}{\\partial u}du + \\frac{\\partial z}{\\partial v}dv"></div>

<p>无论 <span class="formula-inline" data-latex="u, v"></span> 是自变量还是中间变量，这一形式始终成立。</p>

<h4>📘 例题 3：利用全微分形式不变性</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="z = e^{xy}"></span>，求 <span class="formula-inline" data-latex="dz"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = xy"></span>，则 <span class="formula-inline" data-latex="z = e^u"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="dz = e^u du = e^{xy} d(xy)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= e^{xy}(y dx + x dy)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="dz = e^{xy}(y dx + x dy)"></span></p>
</div>

<h5>4. 多元复合函数求导法则总结</h5>

<table>
  <tr>
    <th>复合类型</th>
    <th>求导公式</th>
    <th>结构图</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="z = f(u), u = u(x,y)"></span></td>
    <td><span class="formula-inline" data-latex="f_x = f'(u)u_x, f_y = f'(u)u_y"></span></td>
    <td><span class="formula-inline" data-latex="z \\to u \\to x,y"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="z = f(u,v), u = u(t), v = v(t)"></span></td>
    <td><span class="formula-inline" data-latex="\\frac{dz}{dt} = f_u u' + f_v v'"></span></td>
    <td><span class="formula-inline" data-latex="z \\to u, v \\to t"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="z = f(u,v), u = u(x,y), v = v(x,y)"></span></td>
    <td><span class="formula-inline" data-latex="f_x = f_u u_x + f_v v_x, f_y = f_u u_y + f_v v_y"></span></td>
    <td><span class="formula-inline" data-latex="z \\to u, v \\to x,y"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 多元复合函数的求导法则是多元微分学的核心运算工具。掌握链式法则的关键在于理清变量之间的依赖关系，画出"树形图"可以帮助避免遗漏项。全微分形式不变性则提供了一种更为简洁的求导方式。
  </p>
</div>
`;