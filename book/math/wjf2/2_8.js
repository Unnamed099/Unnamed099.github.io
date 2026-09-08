window.SECTION_CONTENT = `
<h4>📐 多元函数的极值及其求法</h4>

<p>多元函数的极值问题是微分学的重要应用之一，它在一元函数极值的基础上进行了推广。实际中的许多优化问题，如最大利润、最小成本、最短距离等，都可以归结为多元函数的极值问题。</p>

<h5>1. 多元函数的极值及最大值与最小值</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 的某邻域内有定义，若在该邻域内</p>

<div class="formula-block" data-latex="f(x, y) \\le f(x_0, y_0)"></div>

<p>则称 <span class="formula-inline" data-latex="f(x_0, y_0)"></span> 为<strong>极大值</strong>；若</p>

<div class="formula-block" data-latex="f(x, y) \\ge f(x_0, y_0)"></div>

<p>则称 <span class="formula-inline" data-latex="f(x_0, y_0)"></span> 为<strong>极小值</strong>。</p>

<p><strong>定理（极值的必要条件）：</strong> 若 <span class="formula-inline" data-latex="f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处取得极值且偏导数存在，则</p>

<div class="formula-block" data-latex="f_x(x_0, y_0) = 0, \\quad f_y(x_0, y_0) = 0"></div>

<p>满足 <span class="formula-inline" data-latex="f_x = 0, f_y = 0"></span> 的点称为<strong>驻点</strong>。</p>

<div class="note">
  <strong>⚠️ 注意：</strong>
  <p>• 驻点是极值点的<strong>必要条件</strong>，不是充分条件</p>
  <p>• 极值点也可能在偏导数不存在的点处取得</p>
  <p>• 求最值时，还需考虑边界上的点</p>
</div>

<p><strong>定理（极值的充分条件）：</strong> 设 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 是驻点，令</p>

<div class="formula-block" data-latex="A = f_{xx}(x_0, y_0), \\quad B = f_{xy}(x_0, y_0), \\quad C = f_{yy}(x_0, y_0)"></div>

<div class="formula-block" data-latex="\\Delta = AC - B^2"></div>

<ul>
  <li>若 <span class="formula-inline" data-latex="\\Delta > 0"></span> 且 <span class="formula-inline" data-latex="A > 0"></span>，则 <span class="formula-inline" data-latex="f(x_0, y_0)"></span> 为<strong>极小值</strong></li>
  <li>若 <span class="formula-inline" data-latex="\\Delta > 0"></span> 且 <span class="formula-inline" data-latex="A < 0"></span>，则 <span class="formula-inline" data-latex="f(x_0, y_0)"></span> 为<strong>极大值</strong></li>
  <li>若 <span class="formula-inline" data-latex="\\Delta < 0"></span>，则 <span class="formula-inline" data-latex="f(x_0, y_0)"></span> <strong>不是极值</strong>（鞍点）</li>
  <li>若 <span class="formula-inline" data-latex="\\Delta = 0"></span>，则无法判断，需用其他方法</li>
</ul>

<h4>📘 例题 1：求二元函数的极值</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x, y) = x^2 + y^2 - 2x - 4y + 5"></span> 的极值。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_x = 2x - 2 = 0 \\Rightarrow x = 1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_y = 2y - 4 = 0 \\Rightarrow y = 2"></span>
  </p>
  <p>驻点 <span class="formula-inline" data-latex="(1, 2)"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = f_{xx} = 2, B = f_{xy} = 0, C = f_{yy} = 2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta = AC - B^2 = 2 \\times 2 - 0 = 4 > 0"></span>
  </p>
  <p><span class="formula-inline" data-latex="A = 2 > 0"></span>，所以 <span class="formula-inline" data-latex="f(1, 2) = 1 + 4 - 2 - 8 + 5 = 0"></span> 为<strong>极小值</strong>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极小值 <strong>0</strong>（在 <span class="formula-inline" data-latex="(1, 2)"></span> 处取得）</p>
</div>

<h4>📘 例题 2：鞍点</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="f(x, y) = x^2 - y^2"></span> 在 <span class="formula-inline" data-latex="(0, 0)"></span> 处的极值情况。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f_x = 2x = 0, f_y = -2y = 0 \\Rightarrow (0, 0)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = f_{xx} = 2, B = f_{xy} = 0, C = f_{yy} = -2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta = 2 \\times (-2) - 0 = -4 < 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="(0, 0)"></span> 是<strong>鞍点</strong>，不是极值点。</p>
</div>

<h5>2. 条件极值——拉格朗日乘数法</h5>

<p>在实际问题中，往往要求函数在某个约束条件下的极值，这称为<strong>条件极值</strong>。</p>

<p><strong>拉格朗日乘数法：</strong> 求 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在约束条件 <span class="formula-inline" data-latex="\\varphi(x, y) = 0"></span> 下的极值。</p>

<p>构造<strong>拉格朗日函数</strong></p>

<div class="formula-block" data-latex="L(x, y, \\lambda) = f(x, y) + \\lambda\\varphi(x, y)"></div>

<p>令</p>

<div class="formula-block" data-latex="\\begin{cases} L_x = f_x + \\lambda\\varphi_x = 0 \\\\ L_y = f_y + \\lambda\\varphi_y = 0 \\\\ L_\\lambda = \\varphi(x, y) = 0 \\end{cases}"></div>

<p>解此方程组得到可能的极值点。</p>

<h4>📘 例题 3：拉格朗日乘数法</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x, y) = xy"></span> 在约束 <span class="formula-inline" data-latex="x + y = 1"></span> 下的极值。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="\\varphi(x, y) = x + y - 1 = 0"></span></p>
  <p>构造 <span class="formula-inline" data-latex="L = xy + \\lambda(x + y - 1)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} L_x = y + \\lambda = 0 \\\\ L_y = x + \\lambda = 0 \\\\ L_\\lambda = x + y - 1 = 0 \\end{cases}"></span>
  </p>
  <p>解得 <span class="formula-inline" data-latex="x = y = \\frac{1}{2}, \\lambda = -\\frac{1}{2}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f\\left(\\frac{1}{2}, \\frac{1}{2}\\right) = \\frac{1}{4}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极大值 <strong>1/4</strong></p>
</div>

<h4>📘 例题 4：实际应用——最大体积</h4>

<div class="example">
  <p><strong>题目：</strong> 用长为 <span class="formula-inline" data-latex="L"></span> 的铁丝做一个长方体框架，问长、宽、高各为多少时体积最大？</p>
  
  <p><strong>解：</strong></p>
  <p>设长、宽、高分别为 <span class="formula-inline" data-latex="x, y, z"></span>，则</p>
  <p>约束：<span class="formula-inline" data-latex="4x + 4y + 4z = L \\Rightarrow x + y + z = \\frac{L}{4}"></span></p>
  <p>目标：<span class="formula-inline" data-latex="V = xyz"></span></p>
  
  <p>由拉格朗日乘数法：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} yz = \\lambda \\\\ xz = \\lambda \\\\ xy = \\lambda \\\\ x + y + z = L/4 \\end{cases}"></span>
  </p>
  <p>解得 <span class="formula-inline" data-latex="x = y = z = \\frac{L}{12}"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 长、宽、高相等（正方体）时体积最大</p>
</div>

<h5>3. 极值总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>条件</th>
    <th>方法</th>
  </tr>
  <tr>
    <td><strong>无条件极值</strong></td>
    <td>无约束</td>
    <td>求驻点，用 <span class="formula-inline" data-latex="\\Delta = AC - B^2"></span> 判别</td>
  </tr>
  <tr>
    <td><strong>条件极值</strong></td>
    <td><span class="formula-inline" data-latex="\\varphi(x,y)=0"></span></td>
    <td>拉格朗日乘数法</td>
  </tr>
  <tr>
    <td><strong>闭区域最值</strong></td>
    <td>有界闭区域</td>
    <td>比较内部驻点和边界上的值</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 多元函数的极值问题是微分学的重要应用。无条件极值通过求解驻点并用二阶偏导数判别；条件极值则通过拉格朗日乘数法转化为无条件问题。这些方法在经济学、工程学、机器学习等领域有着广泛的应用。
  </p>
</div>
`;