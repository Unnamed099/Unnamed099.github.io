window.SECTION_CONTENT = `
<h4>📐 齐次方程</h4>

<p>齐次方程是另一类重要的一阶微分方程。通过变量代换 <span class="formula-inline" data-latex="u = \\frac{y}{x}"></span>，可以将其化为可分离变量的微分方程。</p>

<h5>1. 齐次方程的定义</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} = \\varphi\\left(\\frac{y}{x}\\right)"></div>

<p>的微分方程称为<strong>齐次方程</strong>。</p>

<p>更一般地，若 <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{P(x,y)}{Q(x,y)}"></span>，其中 <span class="formula-inline" data-latex="P(x,y)"></span> 和 <span class="formula-inline" data-latex="Q(x,y)"></span> 是<strong>同次函数</strong>，则该方程也是齐次方程。</p>

<p><strong>同次函数的定义：</strong> 若 <span class="formula-inline" data-latex="P(tx, ty) = t^k P(x,y)"></span>，则称 <span class="formula-inline" data-latex="P(x,y)"></span> 为 <span class="formula-inline" data-latex="k"></span> 次齐次函数。</p>

<h5>2. 齐次方程的解法</h5>

<p><strong>解法步骤：</strong></p>

<ol>
  <li><strong>变量代换：</strong> 令 <span class="formula-inline" data-latex="u = \\frac{y}{x}"></span>，则 <span class="formula-inline" data-latex="y = ux"></span></li>
  <li><strong>求导：</strong> <span class="formula-inline" data-latex="\\frac{dy}{dx} = u + x\\frac{du}{dx}"></span></li>
  <li><strong>代入原方程：</strong> <span class="formula-inline" data-latex="u + x\\frac{du}{dx} = \\varphi(u)"></span></li>
  <li><strong>分离变量：</strong> <span class="formula-inline" data-latex="\\frac{du}{\\varphi(u) - u} = \\frac{dx}{x}"></span></li>
  <li><strong>两边积分：</strong> 得到 <span class="formula-inline" data-latex="u"></span> 与 <span class="formula-inline" data-latex="x"></span> 的关系</li>
  <li><strong>代回：</strong> 将 <span class="formula-inline" data-latex="u = y/x"></span> 代回，得到通解</li>
</ol>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 齐次方程通过代换 <span class="formula-inline" data-latex="u = y/x"></span> 化为可分离变量方程</p>
  <p>• 代换的几何意义：将斜率 <span class="formula-inline" data-latex="y/x"></span> 作为新的变量</p>
  <p>• 注意 <span class="formula-inline" data-latex="x = 0"></span> 可能需要单独讨论</p>
</div>

<h4>📘 例题 1：基本齐次方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{y}{x} + \\tan\\frac{y}{x}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\frac{y}{x}"></span>，则 <span class="formula-inline" data-latex="y = ux"></span>，<span class="formula-inline" data-latex="\\frac{dy}{dx} = u + x\\frac{du}{dx}"></span></p>
  
  <p>代入原方程：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="u + x\\frac{du}{dx} = u + \\tan u"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x\\frac{du}{dx} = \\tan u"></span>
  </p>
  
  <p>分离变量：<span class="formula-inline" data-latex="\\frac{du}{\\tan u} = \\frac{dx}{x}"></span></p>
  
  <p>积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\cot u \\, du = \\int \\frac{dx}{x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln|\\sin u| = \\ln|x| + C"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sin u = Cx"></span>
  </p>
  
  <p>代回 <span class="formula-inline" data-latex="u = y/x"></span>：</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="\\sin\\frac{y}{x} = Cx"></span></p>
</div>

<h4>📘 例题 2：标准齐次方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{x+y}{x-y}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\frac{y}{x}"></span>，则 <span class="formula-inline" data-latex="y = ux"></span>，<span class="formula-inline" data-latex="\\frac{dy}{dx} = u + x\\frac{du}{dx}"></span></p>
  
  <p>代入：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="u + x\\frac{du}{dx} = \\frac{x+ux}{x-ux} = \\frac{1+u}{1-u}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x\\frac{du}{dx} = \\frac{1+u}{1-u} - u = \\frac{1+u - u + u^2}{1-u} = \\frac{1+u^2}{1-u}"></span>
  </p>
  
  <p>分离变量：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{1-u}{1+u^2} du = \\frac{dx}{x}"></span>
  </p>
  
  <p>积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{1}{1+u^2} du - \\int \\frac{u}{1+u^2} du = \\ln|x| + C"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\arctan u - \\frac{1}{2}\\ln(1+u^2) = \\ln|x| + C"></span>
  </p>
  
  <p>代回 <span class="formula-inline" data-latex="u = y/x"></span>：</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="\\arctan\\frac{y}{x} - \\frac{1}{2}\\ln\\left(1+\\frac{y^2}{x^2}\\right) = \\ln|x| + C"></span></p>
</div>

<h4>📘 例题 3：含初值的齐次方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{x^2 + y^2}{xy}"></span> 满足 <span class="formula-inline" data-latex="y(1) = 1"></span> 的特解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\frac{y}{x}"></span>，则 <span class="formula-inline" data-latex="\\frac{dy}{dx} = u + x\\frac{du}{dx}"></span></p>
  
  <p>代入：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="u + x\\frac{du}{dx} = \\frac{x^2 + u^2x^2}{u x^2} = \\frac{1+u^2}{u} = \\frac{1}{u} + u"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x\\frac{du}{dx} = \\frac{1}{u}"></span>
  </p>
  
  <p>分离变量：<span class="formula-inline" data-latex="u du = \\frac{dx}{x}"></span></p>
  
  <p>积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int u du = \\int \\frac{dx}{x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{u^2}{2} = \\ln|x| + C"></span>
  </p>
  
  <p>代回 <span class="formula-inline" data-latex="u = y/x"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{y^2}{2x^2} = \\ln|x| + C"></span>
  </p>
  
  <p>代入 <span class="formula-inline" data-latex="y(1) = 1"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{1}{2} = 0 + C \\Rightarrow C = \\frac{1}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>特解：</strong> <span class="formula-inline" data-latex="\\frac{y^2}{2x^2} = \\ln|x| + \\frac{1}{2}"></span></p>
</div>

<h5>3. 可化为齐次的方程</h5>

<p>对于形如</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} = \\frac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}"></div>

<p>的方程，可通过平移变换化为齐次方程。</p>

<p><strong>解法步骤：</strong></p>

<ol>
  <li>若 <span class="formula-inline" data-latex="\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}"></span>，解方程组 <span class="formula-inline" data-latex="\\begin{cases} a_1x + b_1y + c_1 = 0 \\\\ a_2x + b_2y + c_2 = 0 \\end{cases}"></span> 得 <span class="formula-inline" data-latex="(x_0, y_0)"></span></li>
  <li>令 <span class="formula-inline" data-latex="X = x - x_0, Y = y - y_0"></span>，代入后化为齐次方程</li>
  <li>若 <span class="formula-inline" data-latex="\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\lambda"></span>，则令 <span class="formula-inline" data-latex="u = a_1x + b_1y"></span> 化为可分离变量方程</li>
</ol>

<h4>📘 例题 4：可化为齐次的方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{x + y - 1}{x - y + 3}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>解方程组：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} x + y - 1 = 0 \\\\ x - y + 3 = 0 \\end{cases} \\Rightarrow \\begin{cases} x = -1 \\\\ y = 2 \\end{cases}"></span>
  </p>
  
  <p>令 <span class="formula-inline" data-latex="X = x + 1, Y = y - 2"></span>，则 <span class="formula-inline" data-latex="dy/dx = dY/dX"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dY}{dX} = \\frac{X + Y}{X - Y}"></span>
  </p>
  
  <p>这是齐次方程，令 <span class="formula-inline" data-latex="u = Y/X"></span>，按齐次方程解法即可。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 最终通解为：<span class="formula-inline" data-latex="\\arctan\\frac{y-2}{x+1} - \\frac{1}{2}\\ln\\left[1 + \\left(\\frac{y-2}{x+1}\\right)^2\\right] = \\ln|x+1| + C"></span></p>
</div>

<h5>4. 齐次方程总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>形式</th>
    <th>解法</th>
  </tr>
  <tr>
    <td><strong>齐次方程</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{dy}{dx} = \\varphi(y/x)"></span></td>
    <td>令 <span class="formula-inline" data-latex="u = y/x"></span></td>
  </tr>
  <tr>
    <td><strong>可化为齐次（平移）</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{a_1x+b_1y+c_1}{a_2x+b_2y+c_2}"></span></td>
    <td>平移后令 <span class="formula-inline" data-latex="u = Y/X"></span></td>
  </tr>
  <tr>
    <td><strong>可化为齐次（换元）</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{a_1}{a_2} = \\frac{b_1}{b_2}"></span></td>
    <td>令 <span class="formula-inline" data-latex="u = a_1x + b_1y"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 齐次方程通过变量代换 <span class="formula-inline" data-latex="u = y/x"></span> 转化为可分离变量方程，是微分方程求解的重要方法。掌握齐次方程的识别和求解技巧，对于解决更复杂的微分方程有重要意义。
  </p>
</div>
`;