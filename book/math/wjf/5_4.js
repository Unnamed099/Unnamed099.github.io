window.SECTION_CONTENT = `
<h4>📐 反常积分</h4>

<p>前面讨论的定积分要求积分区间 <span class="formula-inline" data-latex="[a, b]"></span> 是有限区间，且被积函数在区间上连续（或只有有限个第一类间断点）。但在实际问题中，我们经常遇到无限区间上的积分，或被积函数在积分区间内有无穷间断点的情况。这类积分称为<strong>反常积分</strong>（又称广义积分）。</p>

<h5>1. 无穷限反常积分</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, +\\infty)"></span> 上连续，任取 <span class="formula-inline" data-latex="t > a"></span>，若极限</p>

<div class="formula-block" data-latex="\\lim_{t \\to +\\infty} \\int_a^t f(x) dx"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, +\\infty)"></span> 上的<strong>无穷限反常积分</strong>，记作</p>

<div class="formula-block" data-latex="\\int_a^{+\\infty} f(x) dx = \\lim_{t \\to +\\infty} \\int_a^t f(x) dx"></div>

<p>若极限存在，称反常积分<strong>收敛</strong>；否则称<strong>发散</strong>。</p>

<p>类似地，定义：</p>

<div class="formula-block" data-latex="\\int_{-\\infty}^b f(x) dx = \\lim_{t \\to -\\infty} \\int_t^b f(x) dx"></div>

<div class="formula-block" data-latex="\\int_{-\\infty}^{+\\infty} f(x) dx = \\int_{-\\infty}^c f(x) dx + \\int_c^{+\\infty} f(x) dx"></div>

<h4>📘 例题 1：无穷限反常积分（收敛）</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x^2} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x^2} dx = \\lim_{t \\to +\\infty} \\int_1^t \\frac{1}{x^2} dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{t \\to +\\infty} \\left[ -\\frac{1}{x} \\right]_1^t = \\lim_{t \\to +\\infty} \\left( -\\frac{1}{t} + 1 \\right) = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛，值为 <strong>1</strong></p>
</div>

<h4>📘 例题 2：无穷限反常积分（发散）</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x} dx = \\lim_{t \\to +\\infty} \\int_1^t \\frac{1}{x} dx = \\lim_{t \\to +\\infty} [\\ln x]_1^t = \\lim_{t \\to +\\infty} \\ln t = +\\infty"></span>
  </p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 发散</p>
</div>

<h4>📘 例题 3：无穷限反常积分（含参数）</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x^p} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="p \\neq 1"></span> 时：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_1^{+\\infty} x^{-p} dx = \\lim_{t \\to +\\infty} \\left[ \\frac{x^{1-p}}{1-p} \\right]_1^t"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="p > 1"></span> 时，<span class="formula-inline" data-latex="1-p < 0"></span>，<span class="formula-inline" data-latex="t^{1-p} \\to 0"></span>，收敛</p>
  <p>当 <span class="formula-inline" data-latex="p < 1"></span> 时，<span class="formula-inline" data-latex="1-p > 0"></span>，<span class="formula-inline" data-latex="t^{1-p} \\to +\\infty"></span>，发散</p>
  <p>当 <span class="formula-inline" data-latex="p = 1"></span> 时，发散</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="p > 1"></span> 时收敛，<span class="formula-inline" data-latex="p \\le 1"></span> 时发散</p>
</div>

<h5>2. 无界函数的反常积分</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="(a, b]"></span> 上连续，且 <span class="formula-inline" data-latex="\\lim_{x \\to a^+} f(x) = \\infty"></span>（即 <span class="formula-inline" data-latex="x = a"></span> 为瑕点）。任取 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，若极限</p>

<div class="formula-block" data-latex="\\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x) dx"></div>

<p>存在，则称此极限为 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上的<strong>瑕积分</strong>（无界函数的反常积分），记作</p>

<div class="formula-block" data-latex="\\int_a^b f(x) dx = \\lim_{\\varepsilon \\to 0^+} \\int_{a+\\varepsilon}^b f(x) dx"></div>

<h4>📘 例题 4：无界函数的反常积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{\\sqrt{x}} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="x = 0"></span> 为瑕点（被积函数在 0 处无界）。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{\\sqrt{x}} dx = \\lim_{\\varepsilon \\to 0^+} \\int_{\\varepsilon}^1 x^{-1/2} dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\varepsilon \\to 0^+} [2\\sqrt{x}]_{\\varepsilon}^1 = \\lim_{\\varepsilon \\to 0^+} (2 - 2\\sqrt{\\varepsilon}) = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛，值为 <strong>2</strong></p>
</div>

<h4>📘 例题 5：无界函数的反常积分（发散）</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{x} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{x} dx = \\lim_{\\varepsilon \\to 0^+} \\int_{\\varepsilon}^1 \\frac{1}{x} dx = \\lim_{\\varepsilon \\to 0^+} [\\ln x]_{\\varepsilon}^1 = \\lim_{\\varepsilon \\to 0^+} (-\\ln \\varepsilon) = +\\infty"></span>
  </p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 发散</p>
</div>

<h4>📘 例题 6：无界函数的反常积分（含参数）</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{x^p} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="p \\neq 1"></span> 时：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 x^{-p} dx = \\lim_{\\varepsilon \\to 0^+} \\left[ \\frac{x^{1-p}}{1-p} \\right]_{\\varepsilon}^1"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="p < 1"></span> 时，<span class="formula-inline" data-latex="1-p > 0"></span>，<span class="formula-inline" data-latex="\\varepsilon^{1-p} \\to 0"></span>，收敛</p>
  <p>当 <span class="formula-inline" data-latex="p > 1"></span> 时，<span class="formula-inline" data-latex="1-p < 0"></span>，<span class="formula-inline" data-latex="\\varepsilon^{1-p} \\to +\\infty"></span>，发散</p>
  <p>当 <span class="formula-inline" data-latex="p = 1"></span> 时，发散</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="p < 1"></span> 时收敛，<span class="formula-inline" data-latex="p \\ge 1"></span> 时发散</p>
</div>

<h5>3. 反常积分的比较审敛法</h5>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="f(x) \\le g(x)"></span>（当 <span class="formula-inline" data-latex="x \\ge a"></span> 时）。</p>

<ul>
  <li>若 <span class="formula-inline" data-latex="\\int_a^{+\\infty} g(x) dx"></span> 收敛，则 <span class="formula-inline" data-latex="\\int_a^{+\\infty} f(x) dx"></span> 收敛</li>
  <li>若 <span class="formula-inline" data-latex="\\int_a^{+\\infty} f(x) dx"></span> 发散，则 <span class="formula-inline" data-latex="\\int_a^{+\\infty} g(x) dx"></span> 发散</li>
</ul>

<h4>📘 例题 7：比较审敛法</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x^2 + \\sqrt{x}} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\ge 1"></span> 时，<span class="formula-inline" data-latex="\\frac{1}{x^2 + \\sqrt{x}} < \\frac{1}{x^2}"></span></p>
  
  <p>而 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x^2} dx"></span> 收敛（<span class="formula-inline" data-latex="p = 2 > 1"></span>）</p>
  
  <p>由比较审敛法，原反常积分收敛。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛</p>
</div>

<h5>4. 反常积分总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>形式</th>
    <th>收敛条件</th>
  </tr>
  <tr>
    <td><strong>无穷限</strong></td>
    <td><span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{1}{x^p} dx"></span></td>
    <td><span class="formula-inline" data-latex="p > 1"></span></td>
  </tr>
  <tr>
    <td><strong>无界函数（瑕积分）</strong></td>
    <td><span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{x^p} dx"></span></td>
    <td><span class="formula-inline" data-latex="p < 1"></span></td>
  </tr>
  <tr>
    <td><strong>无穷限（指数）</strong></td>
    <td><span class="formula-inline" data-latex="\\int_0^{+\\infty} e^{-ax} dx"></span></td>
    <td><span class="formula-inline" data-latex="a > 0"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 反常积分是定积分的推广，它处理无限区间或函数有奇点的情况。判断反常积分的敛散性是积分理论中的重要内容，比较审敛法提供了判断收敛性的有力工具。在概率论、物理学和工程学中，反常积分有广泛的应用。
  </p>
</div>
`;