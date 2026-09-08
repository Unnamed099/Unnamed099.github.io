window.SECTION_CONTENT = `
<h4>📐 函数的和、差、积、商的求导法则</h4>

<p>如果每次求导都使用定义计算，过程会非常繁琐。因此，我们需要建立一套求导运算法则，将复杂函数的求导转化为简单函数的求导。</p>

<h5>定理 1：函数和（差）的求导法则</h5>

<p><strong>法则：</strong> 若函数 <span class="formula-inline" data-latex="u(x)"></span> 和 <span class="formula-inline" data-latex="v(x)"></span> 在 <span class="formula-inline" data-latex="x"></span> 处都可导，则它们的和（差）也可导，且</p>

<div class="formula-block" data-latex="[u(x) \\pm v(x)]' = u'(x) \\pm v'(x)"></div>

<p>即：<strong>函数和（差）的导数等于各函数导数的和（差）</strong>。</p>

<p><strong>证明：</strong></p>
<p>设 <span class="formula-inline" data-latex="F(x) = u(x) + v(x)"></span>，则</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F'(x) = \\lim_{\\Delta x \\to 0} \\frac{[u(x+\\Delta x) + v(x+\\Delta x)] - [u(x) + v(x)]}{\\Delta x}"></span>
</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\Delta x \\to 0} \\frac{u(x+\\Delta x) - u(x)}{\\Delta x} + \\lim_{\\Delta x \\to 0} \\frac{v(x+\\Delta x) - v(x)}{\\Delta x} = u'(x) + v'(x)"></span>
</p>

<p>同理可证减法法则。</p>

<h5>定理 2：函数乘积的求导法则</h5>

<p><strong>法则：</strong> 若函数 <span class="formula-inline" data-latex="u(x)"></span> 和 <span class="formula-inline" data-latex="v(x)"></span> 在 <span class="formula-inline" data-latex="x"></span> 处都可导，则它们的乘积也可导，且</p>

<div class="formula-block" data-latex="[u(x) \\cdot v(x)]' = u'(x)v(x) + u(x)v'(x)"></div>

<p>即：<strong>两函数乘积的导数 = 前导后不导 + 前不导后导</strong>。</p>

<p><strong>证明：</strong></p>
<p>设 <span class="formula-inline" data-latex="F(x) = u(x)v(x)"></span>，则</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F'(x) = \\lim_{\\Delta x \\to 0} \\frac{u(x+\\Delta x)v(x+\\Delta x) - u(x)v(x)}{\\Delta x}"></span>
</p>

<p>加减同一项 <span class="formula-inline" data-latex="u(x+\\Delta x)v(x)"></span>：</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\Delta x \\to 0} \\left[ \\frac{u(x+\\Delta x) - u(x)}{\\Delta x} \\cdot v(x) + u(x+\\Delta x) \\cdot \\frac{v(x+\\Delta x) - v(x)}{\\Delta x} \\right]"></span>
</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= u'(x)v(x) + u(x)v'(x)"></span>
</p>

<p><strong>推论：</strong> <span class="formula-inline" data-latex="[C u(x)]' = C u'(x)"></span>（常数因子可提到求导符号外面）</p>

<h5>定理 3：函数商的求导法则</h5>

<p><strong>法则：</strong> 若函数 <span class="formula-inline" data-latex="u(x)"></span> 和 <span class="formula-inline" data-latex="v(x)"></span> 在 <span class="formula-inline" data-latex="x"></span> 处都可导，且 <span class="formula-inline" data-latex="v(x) \\neq 0"></span>，则它们的商也可导，且</p>

<div class="formula-block" data-latex="\\left[ \\frac{u(x)}{v(x)} \\right]' = \\frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}"></div>

<p>即：<strong>两函数商的导数 =（上导下不导 - 上不导下导）除以分母的平方</strong>。</p>

<p><strong>证明：</strong></p>
<p>设 <span class="formula-inline" data-latex="F(x) = \\frac{u(x)}{v(x)}"></span>，则</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F'(x) = \\lim_{\\Delta x \\to 0} \\frac{\\frac{u(x+\\Delta x)}{v(x+\\Delta x)} - \\frac{u(x)}{v(x)}}{\\Delta x}"></span>
</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\Delta x \\to 0} \\frac{u(x+\\Delta x)v(x) - u(x)v(x+\\Delta x)}{\\Delta x \\cdot v(x+\\Delta x)v(x)}"></span>
</p>

<p>分子加减同一项 <span class="formula-inline" data-latex="u(x)v(x)"></span>：</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{u'(x)v(x) - u(x)v'(x)}{[v(x)]^2}"></span>
</p>

<h4>📊 求导法则汇总表</h4>

<table>
  <tr>
    <th>法则名称</th>
    <th>公式</th>
    <th>记忆口诀</th>
  </tr>
  <tr>
    <td><strong>和（差）法则</strong></td>
    <td><span class="formula-inline" data-latex="(u \\pm v)' = u' \\pm v'"></span></td>
    <td>"分别求导，符号不变"</td>
  </tr>
  <tr>
    <td><strong>乘积法则</strong></td>
    <td><span class="formula-inline" data-latex="(uv)' = u'v + uv'"></span></td>
    <td>"前导后不导 + 前不导后导"</td>
  </tr>
  <tr>
    <td><strong>商法则</strong></td>
    <td><span class="formula-inline" data-latex="\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"></span></td>
    <td>"上导下不导 - 上不导下导，除以分母平方"</td>
  </tr>
</table>

<h4>📘 例题 7：利用和法则求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^3 + 2x^2 - 5x + 3"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = (x^3)' + (2x^2)' - (5x)' + (3)'"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 3x^2 + 4x - 5 + 0 = 3x^2 + 4x - 5"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = 3x^2 + 4x - 5"></span></p>
</div>

<h4>📘 例题 8：利用乘积法则求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^2 \\sin x"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2"></span>，<span class="formula-inline" data-latex="v = \\sin x"></span>，则 <span class="formula-inline" data-latex="u' = 2x"></span>，<span class="formula-inline" data-latex="v' = \\cos x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = u'v + uv' = 2x \\cdot \\sin x + x^2 \\cdot \\cos x"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = 2x\\sin x + x^2\\cos x"></span></p>
</div>

<h4>📘 例题 9：利用商法则求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\frac{\\tan x}{x}"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\tan x"></span>，<span class="formula-inline" data-latex="v = x"></span>，则 <span class="formula-inline" data-latex="u' = \\sec^2 x"></span>，<span class="formula-inline" data-latex="v' = 1"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\frac{u'v - uv'}{v^2} = \\frac{\\sec^2 x \\cdot x - \\tan x \\cdot 1}{x^2}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{x\\sec^2 x - \\tan x}{x^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = \\frac{x\\sec^2 x - \\tan x}{x^2}"></span></p>
</div>

<h4>📘 例题 10：综合应用</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\frac{x^2 + 1}{x - 1}"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2 + 1"></span>，<span class="formula-inline" data-latex="v = x - 1"></span>，则 <span class="formula-inline" data-latex="u' = 2x"></span>，<span class="formula-inline" data-latex="v' = 1"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\frac{u'v - uv'}{v^2} = \\frac{2x(x-1) - (x^2+1) \\cdot 1}{(x-1)^2}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{2x^2 - 2x - x^2 - 1}{(x-1)^2} = \\frac{x^2 - 2x - 1}{(x-1)^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = \\frac{x^2 - 2x - 1}{(x-1)^2}"></span></p>
</div>

<h4>📐 复合函数的求导法则（链式法则）</h4>

<p><strong>法则：</strong> 若函数 <span class="formula-inline" data-latex="u = g(x)"></span> 在点 <span class="formula-inline" data-latex="x"></span> 处可导，而 <span class="formula-inline" data-latex="y = f(u)"></span> 在对应点 <span class="formula-inline" data-latex="u = g(x)"></span> 处可导，则复合函数 <span class="formula-inline" data-latex="y = f[g(x)]"></span> 在点 <span class="formula-inline" data-latex="x"></span> 处也可导，且</p>

<div class="formula-block" data-latex="\\{ f[g(x)] \\}' = f'(u) \\cdot g'(x) = f'[g(x)] \\cdot g'(x)"></div>

<p>即：<strong>复合函数的导数 = 外层函数对中间变量的导数 × 内层函数对自变量的导数</strong>。</p>

<p><strong>证明：</strong></p>
<p>设 <span class="formula-inline" data-latex="\\Delta u = g(x+\\Delta x) - g(x)"></span>，则</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{\\Delta y}{\\Delta x} = \\frac{\\Delta y}{\\Delta u} \\cdot \\frac{\\Delta u}{\\Delta x}"></span>
</p>

<p>当 <span class="formula-inline" data-latex="\\Delta x \\to 0"></span> 时，<span class="formula-inline" data-latex="\\Delta u \\to 0"></span>，因此</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx} = f'(u) \\cdot g'(x)"></span>
</p>

<h5>链式法则的多种形式</h5>

<table>
  <tr>
    <th>形式</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>单变量复合</strong></td>
    <td><span class="formula-inline" data-latex="(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)"></span></td>
  </tr>
  <tr>
    <td><strong>幂函数复合</strong></td>
    <td><span class="formula-inline" data-latex="[u(x)^n]' = n u(x)^{n-1} \\cdot u'(x)"></span></td>
  </tr>
  <tr>
    <td><strong>指数函数复合</strong></td>
    <td><span class="formula-inline" data-latex="(e^{u})' = e^{u} \\cdot u'"></span></td>
  </tr>
  <tr>
    <td><strong>对数函数复合</strong></td>
    <td><span class="formula-inline" data-latex="(\\ln u)' = \\frac{1}{u} \\cdot u'"></span></td>
  </tr>
  <tr>
    <td><strong>三角函数复合</strong></td>
    <td><span class="formula-inline" data-latex="(\\sin u)' = \\cos u \\cdot u'"></span></td>
  </tr>
</table>

<h4>📘 例题 11：利用链式法则求导（幂函数复合）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = (x^2 + 1)^3"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2 + 1"></span>，则 <span class="formula-inline" data-latex="f(x) = u^3"></span>，<span class="formula-inline" data-latex="u' = 2x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = 3u^2 \\cdot u' = 3(x^2 + 1)^2 \\cdot 2x = 6x(x^2 + 1)^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = 6x(x^2 + 1)^2"></span></p>
</div>

<h4>📘 例题 12：利用链式法则求导（三角函数复合）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\sin(2x + 1)"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = 2x + 1"></span>，则 <span class="formula-inline" data-latex="f(x) = \\sin u"></span>，<span class="formula-inline" data-latex="u' = 2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\cos u \\cdot u' = \\cos(2x + 1) \\cdot 2 = 2\\cos(2x + 1)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = 2\\cos(2x + 1)"></span></p>
</div>

<h4>📘 例题 13：利用链式法则求导（指数函数复合）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = e^{x^2}"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2"></span>，则 <span class="formula-inline" data-latex="f(x) = e^u"></span>，<span class="formula-inline" data-latex="u' = 2x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = e^u \\cdot u' = e^{x^2} \\cdot 2x = 2xe^{x^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = 2xe^{x^2}"></span></p>
</div>

<h4>📘 例题 14：利用链式法则求导（对数函数复合）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\ln(\\sin x)"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\sin x"></span>，则 <span class="formula-inline" data-latex="f(x) = \\ln u"></span>，<span class="formula-inline" data-latex="u' = \\cos x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\frac{1}{u} \\cdot u' = \\frac{1}{\\sin x} \\cdot \\cos x = \\cot x"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = \\cot x"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 <strong>注意：</strong> 这里要求 <span class="formula-inline" data-latex="\\sin x > 0"></span>，即函数定义域为 <span class="formula-inline" data-latex="(2k\\pi, (2k+1)\\pi)"></span>。</p>
  </div>
</div>

<h4>📘 例题 15：多层复合求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = e^{\\sin(x^2)}"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\sin(x^2)"></span>，则 <span class="formula-inline" data-latex="f(x) = e^u"></span></p>
  <p>先求 <span class="formula-inline" data-latex="u' = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = e^u \\cdot u' = e^{\\sin(x^2)} \\cdot 2x\\cos(x^2)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = 2x\\cos(x^2) \\cdot e^{\\sin(x^2)}"></span></p>
</div>

<h4>📊 复合函数求导步骤总结</h4>

<table>
  <tr>
    <th>步骤</th>
    <th>操作</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>1. 识别复合</strong></td>
    <td>找出外层函数和内层函数</td>
    <td><span class="formula-inline" data-latex="f(x) = \\sin(2x)"></span>，外层 <span class="formula-inline" data-latex="\\sin u"></span>，内层 <span class="formula-inline" data-latex="2x"></span></td>
  </tr>
  <tr>
    <td><strong>2. 分别求导</strong></td>
    <td>求外层对中间变量的导数，内层对自变量的导数</td>
    <td><span class="formula-inline" data-latex="(\\sin u)' = \\cos u"></span>，<span class="formula-inline" data-latex="(2x)' = 2"></span></td>
  </tr>
  <tr>
    <td><strong>3. 相乘</strong></td>
    <td>将两个导数相乘</td>
    <td><span class="formula-inline" data-latex="\\cos(2x) \\cdot 2 = 2\\cos(2x)"></span></td>
  </tr>
  <tr>
    <td><strong>4. 代回</strong></td>
    <td>将中间变量代回原变量</td>
    <td><span class="formula-inline" data-latex="f'(x) = 2\\cos(2x)"></span></td>
  </tr>
</table>

<div class="note">
  <strong>💡 记忆技巧：</strong>
  <p>"链式法则像剥洋葱，从外到内一层层求导，再相乘。"</p>
  <p>对于 <span class="formula-inline" data-latex="y = f[g(h(x))]"></span>，</p>
  <p style="text-align: center;"><span class="formula-inline" data-latex="y' = f'[g(h(x))] \\cdot g'[h(x)] \\cdot h'(x)"></span></p>
</div>

<h4>📘 例题 16：综合应用</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\frac{\\sin(3x)}{x^2 + 1}"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>先求分子 <span class="formula-inline" data-latex="u = \\sin(3x)"></span> 的导数：<span class="formula-inline" data-latex="u' = \\cos(3x) \\cdot 3 = 3\\cos(3x)"></span></p>
  <p>令 <span class="formula-inline" data-latex="v = x^2 + 1"></span>，则 <span class="formula-inline" data-latex="v' = 2x"></span></p>
  
  <p>由商法则：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\frac{u'v - uv'}{v^2} = \\frac{3\\cos(3x)(x^2 + 1) - \\sin(3x) \\cdot 2x}{(x^2 + 1)^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = \\frac{3(x^2 + 1)\\cos(3x) - 2x\\sin(3x)}{(x^2 + 1)^2}"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 和、差、积、商求导法则与复合函数求导法则构成了求导运算的完整体系。掌握这些法则后，我们可以对大多数初等函数进行求导运算。
  </p>
</div>

<h4>📐 基本求导公式与反函数求导</h4>

<h5>1. 常数和基本初等函数的导数公式</h5>

<table>
  <tr>
    <th>编号</th>
    <th>公式</th>
    <th>编号</th>
    <th>公式</th>
  </tr>
  <tr>
    <td>(1)</td>
    <td><span class="formula-inline" data-latex="(C)' = 0"></span></td>
    <td>(2)</td>
    <td><span class="formula-inline" data-latex="(x^\\mu)' = \\mu x^{\\mu-1}"></span></td>
  </tr>
  <tr>
    <td>(3)</td>
    <td><span class="formula-inline" data-latex="(\\sin x)' = \\cos x"></span></td>
    <td>(4)</td>
    <td><span class="formula-inline" data-latex="(\\cos x)' = -\\sin x"></span></td>
  </tr>
  <tr>
    <td>(5)</td>
    <td><span class="formula-inline" data-latex="(\\tan x)' = \\sec^2 x"></span></td>
    <td>(6)</td>
    <td><span class="formula-inline" data-latex="(\\cot x)' = -\\csc^2 x"></span></td>
  </tr>
  <tr>
    <td>(7)</td>
    <td><span class="formula-inline" data-latex="(\\sec x)' = \\sec x \\tan x"></span></td>
    <td>(8)</td>
    <td><span class="formula-inline" data-latex="(\\csc x)' = -\\csc x \\cot x"></span></td>
  </tr>
  <tr>
    <td>(9)</td>
    <td><span class="formula-inline" data-latex="(a^x)' = a^x \\ln a \\ (a > 0, a \\neq 1)"></span></td>
    <td>(10)</td>
    <td><span class="formula-inline" data-latex="(e^x)' = e^x"></span></td>
  </tr>
  <tr>
    <td>(11)</td>
    <td><span class="formula-inline" data-latex="(\\log_a x)' = \\frac{1}{x \\ln a} \\ (a > 0, a \\neq 1)"></span></td>
    <td>(12)</td>
    <td><span class="formula-inline" data-latex="(\\ln x)' = \\frac{1}{x}"></span></td>
  </tr>
  <tr>
    <td>(13)</td>
    <td><span class="formula-inline" data-latex="(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}"></span></td>
    <td>(14)</td>
    <td><span class="formula-inline" data-latex="(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}"></span></td>
  </tr>
  <tr>
    <td>(15)</td>
    <td><span class="formula-inline" data-latex="(\\arctan x)' = \\frac{1}{1+x^2}"></span></td>
    <td>(16)</td>
    <td><span class="formula-inline" data-latex="(\\text{arccot } x)' = -\\frac{1}{1+x^2}"></span></td>
  </tr>
</table>

<h5>2. 反函数的求导法则</h5>

<p><strong>定理：</strong> 设函数 <span class="formula-inline" data-latex="y = f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上单调、可导，且 <span class="formula-inline" data-latex="f'(x) \\neq 0"></span>，则其反函数 <span class="formula-inline" data-latex="x = \\varphi(y)"></span> 在对应区间上也可导，且</p>

<div class="formula-block" data-latex="\\varphi'(y) = \\frac{1}{f'(x)} = \\frac{1}{f'[\\varphi(y)]}"></div>

<p>即：<strong>反函数的导数等于原函数导数的倒数</strong>。</p>

<p><strong>证明：</strong></p>
<p>因为 <span class="formula-inline" data-latex="x = \\varphi(y)"></span> 与 <span class="formula-inline" data-latex="y = f(x)"></span> 互为反函数，所以</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\varphi'[f(x)] \\cdot f'(x) = 1"></span>
</p>

<p>因此</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\varphi'(y) = \\frac{1}{f'(x)}"></span>
</p>

<div class="note">
  <strong>💡 几何意义：</strong>
  <p>函数与反函数的图像关于直线 <span class="formula-inline" data-latex="y = x"></span> 对称，因此在对应点处，切线的斜率互为倒数。</p>
</div>

<h5>3. 用反函数求导法则推导反三角函数的导数</h5>

<p><strong>（1）推导 <span class="formula-inline" data-latex="(\\arcsin x)'"></span></strong></p>
<p>设 <span class="formula-inline" data-latex="y = \\arcsin x"></span>，则 <span class="formula-inline" data-latex="x = \\sin y"></span>，其中 <span class="formula-inline" data-latex="y \\in [-\\pi/2, \\pi/2]"></span>。</p>
<p>由反函数求导法则：</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\arcsin x)' = \\frac{1}{(\\sin y)'} = \\frac{1}{\\cos y}"></span>
</p>

<p>因为 <span class="formula-inline" data-latex="\\cos y = \\sqrt{1 - \\sin^2 y} = \\sqrt{1 - x^2}"></span>（<span class="formula-inline" data-latex="y \\in [-\\pi/2, \\pi/2]"></span> 时 <span class="formula-inline" data-latex="\\cos y \\ge 0"></span>），所以</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\arcsin x)' = \\frac{1}{\\sqrt{1 - x^2}}"></span>
</p>

<p><strong>（2）推导 <span class="formula-inline" data-latex="(\\arctan x)'"></span></strong></p>
<p>设 <span class="formula-inline" data-latex="y = \\arctan x"></span>，则 <span class="formula-inline" data-latex="x = \\tan y"></span>，其中 <span class="formula-inline" data-latex="y \\in (-\\pi/2, \\pi/2)"></span>。</p>
<p>由反函数求导法则：</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\arctan x)' = \\frac{1}{(\\tan y)'} = \\frac{1}{\\sec^2 y} = \\cos^2 y"></span>
</p>

<p>因为 <span class="formula-inline" data-latex="\\cos^2 y = \\frac{1}{1 + \\tan^2 y} = \\frac{1}{1 + x^2}"></span>，所以</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\arctan x)' = \\frac{1}{1 + x^2}"></span>
</p>

<p>同理可推导其他反三角函数的导数公式。</p>

<h4>📘 例题 17：利用反函数求导法则求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y = \\arcsin(2x)"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = 2x"></span>，则 <span class="formula-inline" data-latex="y = \\arcsin u"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y' = \\frac{1}{\\sqrt{1-u^2}} \\cdot u' = \\frac{1}{\\sqrt{1-(2x)^2}} \\cdot 2 = \\frac{2}{\\sqrt{1-4x^2}}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="y' = \\frac{2}{\\sqrt{1-4x^2}}"></span></p>
</div>

<h4>📘 例题 18：综合应用</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\arctan(\\ln x)"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\ln x"></span>，则 <span class="formula-inline" data-latex="f(x) = \\arctan u"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\frac{1}{1+u^2} \\cdot u' = \\frac{1}{1+(\\ln x)^2} \\cdot \\frac{1}{x} = \\frac{1}{x[1+(\\ln x)^2]}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(x) = \\frac{1}{x[1+(\\ln x)^2]}"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 基本初等函数的导数公式是求导运算的基础，必须熟记。反函数求导法则为推导反三角函数的导数提供了理论依据，也是后续学习隐函数求导的重要工具。
  </p>
</div>

`