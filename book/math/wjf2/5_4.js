window.SECTION_CONTENT = `
<h4>📐 函数展开成幂级数</h4>

<p>将一个函数展开成幂级数是幂级数理论的核心应用之一。如果函数在某个区间内可以表示成幂级数的形式，那么我们可以利用幂级数进行近似计算、求解微分方程等。</p>

<h5>1. 泰勒级数与麦克劳林级数</h5>

<p>若函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 的某邻域内具有任意阶导数，则称</p>

<div class="formula-block" data-latex="\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(x_0)}{n!} (x - x_0)^n"></div>

<p>为 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处的<strong>泰勒级数</strong>。当 <span class="formula-inline" data-latex="x_0 = 0"></span> 时，称为<strong>麦克劳林级数</strong>：</p>

<div class="formula-block" data-latex="\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n"></div>

<p><strong>定理：</strong> <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处能展开成泰勒级数的充要条件是余项 <span class="formula-inline" data-latex="R_n(x) \\to 0"></span>。</p>

<h5>2. 常用函数的麦克劳林展开式</h5>

<table>
  <tr>
    <th>函数</th>
    <th>展开式</th>
    <th>收敛域</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\sin x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\cos x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\ln(1+x)"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{x^n}{n}"></span></td>
    <td><span class="formula-inline" data-latex="(-1, 1]"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\frac{1}{1-x}"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} x^n"></span></td>
    <td><span class="formula-inline" data-latex="(-1, 1)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="(1+x)^\\alpha"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n"></span></td>
    <td><span class="formula-inline" data-latex="(-1, 1)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\arctan x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{2n+1}"></span></td>
    <td><span class="formula-inline" data-latex="[-1, 1]"></span></td>
  </tr>
</table>

<h4>📘 例题 1：将函数展开成麦克劳林级数</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x) = e^{2x}"></span> 展开成麦克劳林级数。</p>
  
  <p><strong>解：</strong></p>
  <p>由 <span class="formula-inline" data-latex="e^x = \\sum_{n=0}^{\\infty} x^n/n!"></span>，用 <span class="formula-inline" data-latex="2x"></span> 代替 <span class="formula-inline" data-latex="x"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="e^{2x} = \\sum_{n=0}^{\\infty} \\frac{2^n x^n}{n!} \\quad (x \\in \\mathbb{R})"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{2^n}{n!} x^n"></span></p>
</div>

<h4>📘 例题 2：利用已知展开式求新展开式</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x) = x \\sin x"></span> 展开成麦克劳林级数。</p>
  
  <p><strong>解：</strong></p>
  <p>由 <span class="formula-inline" data-latex="\\sin x = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x \\sin x = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+2}}{(2n+1)!}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n+1)!} x^{2n+2}"></span></p>
</div>

<h4>📘 例题 3：利用展开式求级数和</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{1}{n!}"></span> 的值。</p>
  
  <p><strong>解：</strong></p>
  <p>由 <span class="formula-inline" data-latex="e^x = \\sum_{n=0}^{\\infty} x^n/n!"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{1}{n!} = e"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e"></span></p>
</div>

<h5>3. 直接展开法与间接展开法</h5>

<p><strong>直接展开法：</strong> 直接求各阶导数，代入公式，再验证余项趋于 0。</p>

<p><strong>间接展开法：</strong> 利用已知函数的展开式，通过变量代换、四则运算、求导、积分等方法得到新函数的展开式。</p>

<p>间接展开法比直接展开法更为常用，因为它避免了复杂的高阶导数计算。</p>

<h4>📘 例题 4：间接展开法</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x) = \\int_0^x \\sin t dt"></span> 展开成麦克劳林级数。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\sin t = \\sum_{n=0}^{\\infty} (-1)^n \\frac{t^{2n+1}}{(2n+1)!}"></span></p>
  <p>逐项积分：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^x \\sin t dt = \\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+2}}{(2n+2)!}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{(-1)^n}{(2n+2)!} x^{2n+2}"></span></p>
</div>

<h5>4. 函数展开成幂级数总结</h5>

<table>
  <tr>
    <th>展开方法</th>
    <th>适用场景</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>直接展开法</strong></td>
    <td>求导较简单的函数</td>
    <td><span class="formula-inline" data-latex="e^x, \\sin x, \\cos x"></span></td>
  </tr>
  <tr>
    <td><strong>间接展开法（代换）</strong></td>
    <td>复合函数</td>
    <td><span class="formula-inline" data-latex="e^{x^2}, \\sin 2x"></span></td>
  </tr>
  <tr>
    <td><strong>间接展开法（逐项求导）</strong></td>
    <td>原函数难求，导数易得</td>
    <td><span class="formula-inline" data-latex="1/(1-x)^2"></span></td>
  </tr>
  <tr>
    <td><strong>间接展开法（逐项积分）</strong></td>
    <td>原函数难求，积分易得</td>
    <td><span class="formula-inline" data-latex="\\ln(1+x)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 函数展开成幂级数是泰勒公式的极限形式。直接展开法理论完备但计算繁琐，间接展开法则更为灵活实用。幂级数展开为函数的近似计算、数值分析和微分方程求解提供了强有力的工具。
  </p>
</div>
`;