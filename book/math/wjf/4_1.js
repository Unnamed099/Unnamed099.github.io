window.SECTION_CONTENT = `
<h4>📐 不定积分的概念与性质</h4>

<p>微分学的基本问题是：已知函数，求它的导数。积分学的基本问题是：已知一个函数的导数，求这个函数本身。这两个问题互为逆运算。</p>

<h5>1. 原函数与不定积分</h5>

<p><strong>定义（原函数）：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上有定义，若存在函数 <span class="formula-inline" data-latex="F(x)"></span>，使得对任意 <span class="formula-inline" data-latex="x \\in I"></span>，都有</p>

<div class="formula-block" data-latex="F'(x) = f(x)"></div>

<p>则称 <span class="formula-inline" data-latex="F(x)"></span> 为 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上的一个<strong>原函数</strong>。</p>

<p><strong>定义（不定积分）：</strong> 函数 <span class="formula-inline" data-latex="f(x)"></span> 的全体原函数称为 <span class="formula-inline" data-latex="f(x)"></span> 的<strong>不定积分</strong>，记作</p>

<div class="formula-block" data-latex="\\int f(x) \\, dx = F(x) + C"></div>

<p>其中 <span class="formula-inline" data-latex="C"></span> 为任意常数，称为<strong>积分常数</strong>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 不定积分是<strong>全体</strong>原函数，不是一个函数</p>
  <p>• 导数相同的函数相差一个常数：<span class="formula-inline" data-latex="(F(x)+C)' = F'(x) = f(x)"></span></p>
  <p>• <span class="formula-inline" data-latex="\\int"></span> 称为积分号，<span class="formula-inline" data-latex="f(x)"></span> 称为被积函数，<span class="formula-inline" data-latex="dx"></span> 称为积分变量</p>
</div>

<h5>2. 不定积分的性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="\\left[ \\int f(x) dx \\right]' = f(x)"></span></p>
<p><strong>性质 2：</strong> <span class="formula-inline" data-latex="d\\left[ \\int f(x) dx \\right] = f(x) dx"></span></p>
<p><strong>性质 3：</strong> <span class="formula-inline" data-latex="\\int F'(x) dx = F(x) + C"></span></p>
<p><strong>性质 4：</strong> <span class="formula-inline" data-latex="\\int [f(x) \\pm g(x)] dx = \\int f(x) dx \\pm \\int g(x) dx"></span>（线性性质）</p>
<p><strong>性质 5：</strong> <span class="formula-inline" data-latex="\\int k f(x) dx = k \\int f(x) dx"></span>（<span class="formula-inline" data-latex="k"></span> 为常数）</p>

<h5>3. 基本积分公式表</h5>

<p>由导数公式可直接得到相应的积分公式：</p>

<table>
  <tr>
    <th>编号</th>
    <th>导数公式</th>
    <th>积分公式</th>
  </tr>
  <tr>
    <td>1</td>
    <td><span class="formula-inline" data-latex="(C)' = 0"></span></td>
    <td><span class="formula-inline" data-latex="\\int 0 \\, dx = C"></span></td>
  </tr>
  <tr>
    <td>2</td>
    <td><span class="formula-inline" data-latex="(x)^{'} = 1"></span></td>
    <td><span class="formula-inline" data-latex="\\int 1 \\, dx = x + C"></span></td>
  </tr>
  <tr>
    <td>3</td>
    <td><span class="formula-inline" data-latex="(x^{\\mu})' = \\mu x^{\\mu-1}"></span></td>
    <td><span class="formula-inline" data-latex="\\int x^\\mu dx = \\frac{x^{\\mu+1}}{\\mu+1} + C \\ (\\mu \\neq -1)"></span></td>
  </tr>
  <tr>
    <td>4</td>
    <td><span class="formula-inline" data-latex="(\\ln x)' = \\frac{1}{x}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{1}{x} dx = \\ln|x| + C"></span></td>
  </tr>
  <tr>
    <td>5</td>
    <td><span class="formula-inline" data-latex="(e^x)' = e^x"></span></td>
    <td><span class="formula-inline" data-latex="\\int e^x dx = e^x + C"></span></td>
  </tr>
  <tr>
    <td>6</td>
    <td><span class="formula-inline" data-latex="(a^x)' = a^x \\ln a"></span></td>
    <td><span class="formula-inline" data-latex="\\int a^x dx = \\frac{a^x}{\\ln a} + C \\ (a > 0, a \\neq 1)"></span></td>
  </tr>
  <tr>
    <td>7</td>
    <td><span class="formula-inline" data-latex="(\\sin x)' = \\cos x"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\cos x dx = \\sin x + C"></span></td>
  </tr>
  <tr>
    <td>8</td>
    <td><span class="formula-inline" data-latex="(\\cos x)' = -\\sin x"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\sin x dx = -\\cos x + C"></span></td>
  </tr>
  <tr>
    <td>9</td>
    <td><span class="formula-inline" data-latex="(\\tan x)' = \\sec^2 x"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\sec^2 x dx = \\tan x + C"></span></td>
  </tr>
  <tr>
    <td>10</td>
    <td><span class="formula-inline" data-latex="(\\cot x)' = -\\csc^2 x"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\csc^2 x dx = -\\cot x + C"></span></td>
  </tr>
  <tr>
    <td>11</td>
    <td><span class="formula-inline" data-latex="(\\sec x)' = \\sec x \\tan x"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\sec x \\tan x dx = \\sec x + C"></span></td>
  </tr>
  <tr>
    <td>12</td>
    <td><span class="formula-inline" data-latex="(\\csc x)' = -\\csc x \\cot x"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\csc x \\cot x dx = -\\csc x + C"></span></td>
  </tr>
  <tr>
    <td>13</td>
    <td><span class="formula-inline" data-latex="(\\arcsin x)' = \\frac{1}{\\sqrt{1-x^2}}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{1-x^2}} = \\arcsin x + C"></span></td>
  </tr>
  <tr>
    <td>14</td>
    <td><span class="formula-inline" data-latex="(\\arccos x)' = -\\frac{1}{\\sqrt{1-x^2}}"></span></td>
    <td><span class="formula-inline" data-latex="\\int -\\frac{dx}{\\sqrt{1-x^2}} = \\arccos x + C"></span></td>
  </tr>
  <tr>
    <td>15</td>
    <td><span class="formula-inline" data-latex="(\\arctan x)' = \\frac{1}{1+x^2}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{1+x^2} = \\arctan x + C"></span></td>
  </tr>
  <tr>
    <td>16</td>
    <td><span class="formula-inline" data-latex="(\\arccot x)' = -\\frac{1}{1+x^2}"></span></td>
    <td><span class="formula-inline" data-latex="\\int -\\frac{dx}{1+x^2} = \\arccot x + C"></span></td>
  </tr>
  <tr>
    <td>17</td>
    <td><span class="formula-inline" data-latex="(\\ln|x+\\sqrt{x^2 \\pm a^2}|)' = \\frac{1}{\\sqrt{x^2 \\pm a^2}}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{x^2+a^2}} = \\ln|x+\\sqrt{x^2+a^2}| + C"></span></td>
  </tr>
  <tr>
    <td>18</td>
    <td><span class="formula-inline" data-latex="(\\ln|x+\\sqrt{x^2-a^2}|)' = \\frac{1}{\\sqrt{x^2-a^2}}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{x^2-a^2}} = \\ln|x+\\sqrt{x^2-a^2}| + C"></span></td>
  </tr>
  <tr>
    <td>19</td>
    <td><span class="formula-inline" data-latex="(\\frac{1}{a}\\arctan\\frac{x}{a})' = \\frac{1}{a^2+x^2}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{a^2+x^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C"></span></td>
  </tr>
  <tr>
    <td>20</td>
    <td><span class="formula-inline" data-latex="(\\arcsin\\frac{x}{a})' = \\frac{1}{\\sqrt{a^2-x^2}}"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{a^2-x^2}} = \\arcsin\\frac{x}{a} + C"></span></td>
  </tr>
</table>

<h5>4. 基本积分公式的记忆技巧</h5>

<ul>
  <li><strong>幂函数：</strong> <span class="formula-inline" data-latex="\\int x^\\mu dx = \\frac{x^{\\mu+1}}{\\mu+1} + C"></span>（<span class="formula-inline" data-latex="\\mu \\neq -1"></span>），特别注意 <span class="formula-inline" data-latex="\\mu = -1"></span> 时是 <span class="formula-inline" data-latex="\\ln|x|"></span></li>
  <li><strong>指数函数：</strong> <span class="formula-inline" data-latex="\\int e^x dx = e^x + C"></span>，<span class="formula-inline" data-latex="\\int a^x dx = \\frac{a^x}{\\ln a} + C"></span></li>
  <li><strong>三角函数：</strong> 记住 <span class="formula-inline" data-latex="\\sin"></span> 和 <span class="formula-inline" data-latex="\\cos"></span> 的互逆关系，其余由导数公式反推</li>
  <li><strong>反三角函数：</strong> <span class="formula-inline" data-latex="\\arcsin"></span> 和 <span class="formula-inline" data-latex="\\arctan"></span> 是最常用的两个</li>
</ul>

<div class="note">
  <strong>💡 关键理解：</strong>
  <p>• 积分和微分互为逆运算</p>
  <p>• 不定积分的线性性质与导数的线性性质对应</p>
  <p>• 积分常数 <span class="formula-inline" data-latex="C"></span> 不可遗漏</p>
</div>

<h4>📘 例题：直接积分法</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int (3x^2 + 2x - 1) dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int (3x^2 + 2x - 1) dx = 3\\int x^2 dx + 2\\int x dx - \\int 1 dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 3 \\cdot \\frac{x^3}{3} + 2 \\cdot \\frac{x^2}{2} - x + C = x^3 + x^2 - x + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x^3 + x^2 - x + C"></span></p>
</div>

<h4>📘 例题：分式积分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{1}{x^2} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{1}{x^2} dx = \\int x^{-2} dx = \\frac{x^{-1}}{-1} + C = -\\frac{1}{x} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="-\\frac{1}{x} + C"></span></p>
</div>

<h4>📘 例题：带根号的积分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\sqrt{x} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\sqrt{x} dx = \\int x^{1/2} dx = \\frac{x^{3/2}}{3/2} + C = \\frac{2}{3}x^{3/2} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{2}{3}x^{3/2} + C"></span></p>
</div>

<h4>📘 例题：三角函数的积分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int (\\sin x + \\cos x) dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int (\\sin x + \\cos x) dx = -\\cos x + \\sin x + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sin x - \\cos x + C"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 基本积分公式表是不定积分计算的基础，必须熟记。掌握了这些公式和积分的线性性质，就可以处理大量初等函数的不定积分问题。
  </p>
</div>
`;