window.SECTION_CONTENT = `
<h4>📐 傅里叶级数</h4>

<p>傅里叶级数是用正弦和余弦函数的无穷级数来表示周期函数的方法。它告诉我们，任何周期函数都可以分解为一系列简谐振动的叠加。</p>

<h5>1. 三角级数 三角函数系的正交性</h5>

<p><strong>三角级数：</strong> 形如</p>

<div class="formula-block" data-latex="\\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)"></div>

<p>的级数称为<strong>三角级数</strong>。</p>

<p><strong>三角函数系：</strong></p>

<div class="formula-block" data-latex="1, \\cos x, \\sin x, \\cos 2x, \\sin 2x, \\cdots, \\cos nx, \\sin nx, \\cdots"></div>

<p><strong>正交性：</strong> 三角函数系在 <span class="formula-inline" data-latex="[-\\pi, \\pi]"></span> 上具有正交性：</p>

<div class="formula-block" data-latex="\\int_{-\\pi}^{\\pi} \\cos nx \\cos mx dx = \\begin{cases} 0, & m \\neq n \\\\ \\pi, & m = n \\neq 0 \\end{cases}"></div>
<div class="formula-block" data-latex="\\int_{-\\pi}^{\\pi} \\sin nx \\sin mx dx = \\begin{cases} 0, & m \\neq n \\\\ \\pi, & m = n \\neq 0 \\end{cases}"></div>
<div class="formula-block" data-latex="\\int_{-\\pi}^{\\pi} \\cos nx \\sin mx dx = 0 \\quad (\\text{所有 } m, n)"></div>

<h5>2. 函数展开成傅里叶级数</h5>

<p>若 <span class="formula-inline" data-latex="f(x)"></span> 以 <span class="formula-inline" data-latex="2\\pi"></span> 为周期且在 <span class="formula-inline" data-latex="[-\\pi, \\pi]"></span> 上可积，则其傅里叶级数为</p>

<div class="formula-block" data-latex="f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} (a_n \\cos nx + b_n \\sin nx)"></div>

<p>其中</p>

<div class="formula-block" data-latex="a_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) \\cos nx dx \\quad (n = 0, 1, 2, \\cdots)"></div>
<div class="formula-block" data-latex="b_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} f(x) \\sin nx dx \\quad (n = 1, 2, 3, \\cdots)"></div>

<p><strong>狄利克雷收敛定理：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 是以 <span class="formula-inline" data-latex="2\\pi"></span> 为周期的函数，在 <span class="formula-inline" data-latex="[-\\pi, \\pi]"></span> 上满足狄利克雷条件（分段连续、分段单调），则傅里叶级数收敛于</p>

<div class="formula-block" data-latex="\\frac{f(x^+) + f(x^-)}{2}"></div>

<p>在连续点处收敛于 <span class="formula-inline" data-latex="f(x)"></span>。</p>

<h4>📘 例题 1：求傅里叶级数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x, -\\pi \\le x \\le \\pi"></span> 的傅里叶级数。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x)"></span> 是奇函数，所以 <span class="formula-inline" data-latex="a_n = 0"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="b_n = \\frac{1}{\\pi} \\int_{-\\pi}^{\\pi} x \\sin nx dx = \\frac{2}{\\pi} \\int_0^{\\pi} x \\sin nx dx"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{2}{\\pi} \\left[ -\\frac{x\\cos nx}{n} + \\frac{\\sin nx}{n^2} \\right]_0^{\\pi} = \\frac{2}{\\pi} \\cdot \\frac{(-1)^{n+1} \\pi}{n} = \\frac{2(-1)^{n+1}}{n}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x \\sim 2\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} \\sin nx"></span></p>
</div>

<h5>3. 正弦级数和余弦级数</h5>

<p>若 <span class="formula-inline" data-latex="f(x)"></span> 是奇函数，则傅里叶级数只含正弦项，称为<strong>正弦级数</strong>：</p>

<div class="formula-block" data-latex="f(x) \\sim \\sum_{n=1}^{\\infty} b_n \\sin nx, \\quad b_n = \\frac{2}{\\pi} \\int_0^{\\pi} f(x) \\sin nx dx"></div>

<p>若 <span class="formula-inline" data-latex="f(x)"></span> 是偶函数，则傅里叶级数只含余弦项，称为<strong>余弦级数</strong>：</p>

<div class="formula-block" data-latex="f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} a_n \\cos nx, \\quad a_n = \\frac{2}{\\pi} \\int_0^{\\pi} f(x) \\cos nx dx"></div>

<h4>📘 例题 2：求正弦级数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = 1, 0 \\le x \\le \\pi"></span> 的正弦级数。</p>
  
  <p><strong>解：</strong></p>
  <p>对 <span class="formula-inline" data-latex="f(x)"></span> 作奇延拓到 <span class="formula-inline" data-latex="[-\\pi, \\pi]"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="b_n = \\frac{2}{\\pi} \\int_0^{\\pi} \\sin nx dx = \\frac{2}{\\pi} \\cdot \\frac{1 - (-1)^n}{n} = \\begin{cases} \\frac{4}{n\\pi}, & n \\text{ 为奇数} \\\\ 0, & n \\text{ 为偶数} \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1 \\sim \\frac{4}{\\pi} \\sum_{k=0}^{\\infty} \\frac{\\sin(2k+1)x}{2k+1} \\quad (0 < x < \\pi)"></span></p>
</div>

<h5>4. 傅里叶级数总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>傅里叶级数</strong></td>
    <td>用三角级数表示周期函数</td>
    <td><span class="formula-inline" data-latex="f(x) \\sim \\frac{a_0}{2} + \\sum (a_n\\cos nx + b_n\\sin nx)"></span></td>
  </tr>
  <tr>
    <td><strong>傅里叶系数</strong></td>
    <td>利用正交性计算</td>
    <td><span class="formula-inline" data-latex="a_n = \\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos nx dx"></span></td>
  </tr>
  <tr>
    <td><strong>正弦级数</strong></td>
    <td>奇函数的傅里叶级数</td>
    <td><span class="formula-inline" data-latex="b_n = \\frac{2}{\\pi}\\int_0^{\\pi} f(x)\\sin nx dx"></span></td>
  </tr>
  <tr>
    <td><strong>余弦级数</strong></td>
    <td>偶函数的傅里叶级数</td>
    <td><span class="formula-inline" data-latex="a_n = \\frac{2}{\\pi}\\int_0^{\\pi} f(x)\\cos nx dx"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 傅里叶级数是信号处理、振动分析和热传导等领域的核心工具。它揭示了周期函数与三角函数之间的深刻联系，将时域分析转化为频域分析。正弦级数和余弦级数分别对应奇函数和偶函数的展开。
  </p>
</div>
`;