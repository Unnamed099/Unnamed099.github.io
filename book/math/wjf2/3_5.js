window.SECTION_CONTENT = `
<h4>📐 含参变量的积分</h4>

<p>含参变量的积分是积分学中的一个重要概念，它出现在许多理论和应用问题中。当积分表达式中含有参数时，积分值将随参数变化，从而定义了一个新的函数。</p>

<h5>1. 含参变量积分的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="f(x, y)"></span> 在矩形区域 <span class="formula-inline" data-latex="[a, b] \\times [c, d]"></span> 上连续，则</p>

<div class="formula-block" data-latex="F(y) = \\int_a^b f(x, y) dx, \\quad y \\in [c, d]"></div>

<p>称为<strong>含参变量 <span class="formula-inline" data-latex="y"></span> 的积分</strong>。类似地可定义</p>

<div class="formula-block" data-latex="G(x) = \\int_c^d f(x, y) dy, \\quad x \\in [a, b]"></div>

<h5>2. 含参变量积分的性质</h5>

<p><strong>定理 1（连续性）：</strong> 若 <span class="formula-inline" data-latex="f(x, y)"></span> 在矩形区域 <span class="formula-inline" data-latex">[a, b] \\times [c, d]</span> 上连续，则 <span class="formula-inline" data-latex="F(y)"></span> 在 <span class="formula-inline" data-latex="[c, d]"></span> 上连续。</p>

<p><strong>定理 2（可导性）：</strong> 若 <span class="formula-inline" data-latex="f(x, y)"></span> 和 <span class="formula-inline" data-latex="f_y(x, y)"></span> 在矩形区域上连续，则 <span class="formula-inline" data-latex="F(y)"></span> 在 <span class="formula-inline" data-latex="[c, d]"></span> 上可导，且</p>

<div class="formula-block" data-latex="F'(y) = \\frac{d}{dy} \\int_a^b f(x, y) dx = \\int_a^b \\frac{\\partial f}{\\partial y}(x, y) dx"></div>

<p><strong>定理 3（积分顺序交换）：</strong> 若 <span class="formula-inline" data-latex="f(x, y)"></span> 在矩形区域上连续，则</p>

<div class="formula-block" data-latex="\\int_c^d dy \\int_a^b f(x, y) dx = \\int_a^b dx \\int_c^d f(x, y) dy"></div>

<h4>📘 例题 1：含参变量积分的连续性</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="F(y) = \\int_0^1 \\frac{dx}{x^2 + y^2}"></span> 在 <span class="formula-inline" data-latex="[1, 2]"></span> 上的连续性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x, y) = 1/(x^2 + y^2)"></span> 在 <span class="formula-inline" data-latex="[0,1] \\times [1,2]"></span> 上连续，因此 <span class="formula-inline" data-latex="F(y)"></span> 在 <span class="formula-inline" data-latex="[1,2]"></span> 上连续。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="F(y)"></span> 在 <span class="formula-inline" data-latex="[1,2]"></span> 上连续。</p>
</div>

<h4>📘 例题 2：含参变量积分的求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="F(y) = \\int_0^1 e^{xy} dx"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F'(y) = \\int_0^1 \\frac{\\partial}{\\partial y} e^{xy} dx = \\int_0^1 x e^{xy} dx"></span>
  </p>
  <p>用分部积分：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\left[ \\frac{x e^{xy}}{y} - \\frac{e^{xy}}{y^2} \\right]_0^1 = \\frac{e^y}{y} - \\frac{e^y - 1}{y^2} = \\frac{ye^y - e^y + 1}{y^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="F'(y) = \\frac{ye^y - e^y + 1}{y^2}"></span></p>
</div>

<h5>3. 含参变量广义积分</h5>

<p>当积分区间为无穷区间或被积函数有奇点时，称为<strong>含参变量的广义积分</strong>。</p>

<p>例如：<span class="formula-inline" data-latex="\\Gamma(s) = \\int_0^{+\\infty} e^{-x} x^{s-1} dx"></span>（Γ函数）</p>

<p>含参变量广义积分的性质（连续性、可导性）需要在一致收敛的条件下成立。</p>

<h4>📘 例题 3：Γ函数的导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 Γ函数 <span class="formula-inline" data-latex="\\Gamma(s) = \\int_0^{+\\infty} e^{-x} x^{s-1} dx"></span> 的导数。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Gamma'(s) = \\int_0^{+\\infty} e^{-x} x^{s-1} \\ln x dx"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\Gamma'(s) = \\int_0^{\\infty} e^{-x} x^{s-1}\\ln x dx"></span></p>
</div>

<h5>4. 含参变量积分的应用</h5>

<p>含参变量积分在概率论、数理统计、数学物理中有着广泛的应用。常见的应用包括：</p>

<ul>
  <li>Γ函数和B函数的性质研究</li>
  <li>概率密度函数的归一化</li>
  <li>拉普拉斯变换和傅里叶变换</li>
  <li>微分方程的积分表示</li>
</ul>

<h5>5. 含参变量积分总结</h5>

<table>
  <tr>
    <th>性质</th>
    <th>条件</th>
    <th>结论</th>
  </tr>
  <tr>
    <td><strong>连续性</strong></td>
    <td><span class="formula-inline" data-latex="f(x,y)"></span> 连续</td>
    <td><span class="formula-inline" data-latex="F(y)"></span> 连续</td>
  </tr>
  <tr>
    <td><strong>可导性</strong></td>
    <td><span class="formula-inline" data-latex="f_y(x,y)"></span> 连续</td>
    <td><span class="formula-inline" data-latex="F'(y) = \\int f_y dx"></span></td>
  </tr>
  <tr>
    <td><strong>积分换序</strong></td>
    <td><span class="formula-inline" data-latex="f(x,y)"></span> 连续</td>
    <td>二重积分与累次积分相等</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 含参变量的积分是连接积分与函数理论的重要桥梁。它不仅在理论上（如Γ函数、B函数）具有重要意义，在实际应用中（如概率论、积分变换）也发挥着关键作用。掌握含参变量积分的性质，是深入理解现代数学和应用数学的基础。
  </p>
</div>
`;