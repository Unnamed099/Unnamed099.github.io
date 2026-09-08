window.SECTION_CONTENT = `
<h4>📐 有理函数的积分</h4>

<p>有理函数是指由两个多项式之比构成的函数，即 <span class="formula-inline" data-latex="R(x) = \\frac{P(x)}{Q(x)}"></span>，其中 <span class="formula-inline" data-latex="P(x)"></span> 和 <span class="formula-inline" data-latex="Q(x)"></span> 都是多项式。有理函数的积分是积分计算中的重要内容，其核心方法是将有理函数分解为部分分式之和。</p>

<h5>1. 有理函数的定义</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="R(x) = \\frac{P(x)}{Q(x)}"></div>

<p>的函数称为<strong>有理函数</strong>，其中 <span class="formula-inline" data-latex="P(x)"></span> 和 <span class="formula-inline" data-latex="Q(x)"></span> 为多项式。</p>

<ul>
  <li>若 <span class="formula-inline" data-latex="\\deg P < \\deg Q"></span>，称 <span class="formula-inline" data-latex="R(x)"></span> 为<strong>真分式</strong></li>
  <li>若 <span class="formula-inline" data-latex="\\deg P \\ge \\deg Q"></span>，称 <span class="formula-inline" data-latex="R(x)"></span> 为<strong>假分式</strong></li>
</ul>

<p>假分式可以通过多项式除法化为一个多项式与一个真分式之和。</p>

<h5>2. 部分分式分解</h5>

<p>真分式 <span class="formula-inline" data-latex="\\frac{P(x)}{Q(x)}}"></span> 可以分解为若干个简单分式之和，这些简单分式称为<strong>部分分式</strong>。</p>

<p><strong>分解规则：</strong></p>

<table>
  <tr>
    <th>分母因式</th>
    <th>对应的部分分式</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x - a"></span>（单因式）</td>
    <td><span class="formula-inline" data-latex="\\frac{A}{x-a}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="(x-a)^k"></span>（重因式）</td>
    <td><span class="formula-inline" data-latex="\\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\cdots + \\frac{A_k}{(x-a)^k}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x^2 + px + q"></span>（不可约二次式）</td>
    <td><span class="formula-inline" data-latex="\\frac{Ax + B}{x^2 + px + q}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="(x^2 + px + q)^k"></span>（重二次式）</td>
    <td><span class="formula-inline" data-latex="\\frac{A_1x+B_1}{x^2+px+q} + \\cdots + \\frac{A_kx+B_k}{(x^2+px+q)^k}"></span></td>
  </tr>
</table>

<h5>3. 积分方法</h5>

<p>分解为部分分式后，积分归结为以下几种基本类型：</p>

<ol>
  <li><span class="formula-inline" data-latex="\\int \\frac{A}{x-a} dx = A \\ln|x-a| + C"></span></li>
  <li><span class="formula-inline" data-latex="\\int \\frac{A}{(x-a)^k} dx = \\frac{A}{(1-k)(x-a)^{k-1}} + C \\ (k \\neq 1)"></span></li>
  <li><span class="formula-inline" data-latex="\\int \\frac{Ax+B}{x^2+px+q} dx"></span>：配方后化为 <span class="formula-inline" data-latex="\\ln</span> 和 <span class="formula-inline" data-latex="\\arctan"></span></li>
</ol>

<h4>📘 例题：分母为一次因式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{1}{x^2-1} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>分解：<span class="formula-inline" data-latex="\\frac{1}{x^2-1} = \\frac{1}{(x-1)(x+1)} = \\frac{1}{2}\\left(\\frac{1}{x-1} - \\frac{1}{x+1}\\right)"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{1}{x^2-1} dx = \\frac{1}{2}\\int \\left(\\frac{1}{x-1} - \\frac{1}{x+1}\\right) dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2}(\\ln|x-1| - \\ln|x+1|) + C = \\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2}\\ln\\left|\\frac{x-1}{x+1}\\right| + C"></span></p>
</div>

<h4>📘 例题：分母为二次因式（配方法）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{1}{x^2+2x+5} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>配方：<span class="formula-inline" data-latex="x^2+2x+5 = (x+1)^2 + 4"></span></p>
  
  <p>令 <span class="formula-inline" data-latex="u = x+1"></span>，则 <span class="formula-inline" data-latex="du = dx"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{1}{x^2+2x+5} dx = \\int \\frac{1}{(x+1)^2+4} dx = \\int \\frac{1}{u^2+4} du"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2}\\arctan\\left(\\frac{u}{2}\\right) + C = \\frac{1}{2}\\arctan\\left(\\frac{x+1}{2}\\right) + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2}\\arctan\\left(\\frac{x+1}{2}\\right) + C"></span></p>
</div>

<h4>📘 例题：分子为一次，分母为二次</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{2x+1}{x^2+x+1} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>注意分子是分母的导数：<span class="formula-inline" data-latex="(x^2+x+1)' = 2x+1"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{2x+1}{x^2+x+1} dx = \\ln(x^2+x+1) + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\ln(x^2+x+1) + C"></span></p>
</div>

<h4>📘 例题：假分式化为真分式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{x^2+1}{x+1} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>分子次数 ≥ 分母次数，先做多项式除法：</p>
  
  <p><span class="formula-inline" data-latex="x^2+1 = (x+1)(x-1) + 2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{x^2+1}{x+1} = x-1 + \\frac{2}{x+1}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{x^2+1}{x+1} dx = \\int \\left(x-1 + \\frac{2}{x+1}\\right) dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{x^2}{2} - x + 2\\ln|x+1| + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{x^2}{2} - x + 2\\ln|x+1| + C"></span></p>
</div>

<h4>📘 例题：含重因式的部分分式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{1}{(x-1)^2(x+1)} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="\\frac{1}{(x-1)^2(x+1)} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+1}"></span></p>
  
  <p>通分后比较系数，解得 <span class="formula-inline" data-latex="A = -\\frac{1}{4}, B = \\frac{1}{2}, C = \\frac{1}{4}"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{1}{(x-1)^2(x+1)} dx = -\\frac{1}{4}\\ln|x-1| - \\frac{1}{2(x-1)} + \\frac{1}{4}\\ln|x+1| + C"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{4}\\ln\\left|\\frac{x+1}{x-1}\\right| - \\frac{1}{2(x-1)} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{4}\\ln\\left|\\frac{x+1}{x-1}\\right| - \\frac{1}{2(x-1)} + C"></span></p>
</div>

<h5>4. 有理函数积分步骤总结</h5>

<ol>
  <li><strong>判断类型：</strong> 若为假分式，先做多项式除法化为多项式 + 真分式</li>
  <li><strong>分解分母：</strong> 将 <span class="formula-inline" data-latex="Q(x)"></span> 分解为一次因式和不可约二次因式的乘积</li>
  <li><strong>部分分式分解：</strong> 根据分母因式确定待定系数</li>
  <li><strong>逐项积分：</strong> 对每个部分分式分别积分</li>
</ol>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 有理函数的积分是积分计算的重要组成部分。通过部分分式分解，任何有理函数的积分都可以归结为多项式、<span class="formula-inline" data-latex="\\ln"></span> 和 <span class="formula-inline" data-latex="\\arctan"></span> 的组合。这是积分学中一个完整而优美的理论。
  </p>
</div>
`;