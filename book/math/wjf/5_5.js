window.SECTION_CONTENT = `
<h4>📐 反常积分的审敛法与 Γ 函数</h4>

<p>本节进一步讨论反常积分的敛散性判别方法，并介绍一个重要的特殊函数——Γ函数。Γ函数在概率论、数理统计、数学物理等领域有广泛应用。</p>

<h5>1. 无穷限反常积分的审敛法</h5>

<p><strong>比较审敛法：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, +\\infty)"></span> 上连续且非负。</p>

<ul>
  <li>若存在常数 <span class="formula-inline" data-latex="M > 0"></span> 和 <span class="formula-inline" data-latex="p > 1"></span>，使 <span class="formula-inline" data-latex="f(x) \\le \\frac{M}{x^p}"></span>，则 <span class="formula-inline" data-latex="\\int_a^{+\\infty} f(x) dx"></span> 收敛</li>
  <li>若存在 <span class="formula-inline" data-latex="M > 0"></span> 和 <span class="formula-inline" data-latex="p \\le 1"></span>，使 <span class="formula-inline" data-latex="f(x) \\ge \\frac{M}{x^p}"></span>，则 <span class="formula-inline" data-latex="\\int_a^{+\\infty} f(x) dx"></span> 发散</li>
</ul>

<p><strong>极限审敛法：</strong> 设 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, +\\infty)"></span> 上非负，若 <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} x^p f(x) = l"></span>，则</p>
<ul>
  <li>当 <span class="formula-inline" data-latex="p > 1"></span> 且 <span class="formula-inline" data-latex="0 \\le l < +\\infty"></span> 时，积分收敛</li>
  <li>当 <span class="formula-inline" data-latex="p \\le 1"></span> 且 <span class="formula-inline" data-latex="0 < l \\le +\\infty"></span> 时，积分发散</li>
</ul>

<h4>📘 例题 1：极限审敛法</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{x+1}{x^3+2} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="p = 2"></span>，</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} x^2 \\cdot \\frac{x+1}{x^3+2} = \\lim_{x \\to +\\infty} \\frac{x^3+x^2}{x^3+2} = 1"></span>
  </p>
  
  <p>由于 <span class="formula-inline" data-latex="p = 2 > 1"></span> 且极限为 1（有限），积分收敛。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛</p>
</div>

<h4>📘 例题 2：极限审敛法（发散）</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_1^{+\\infty} \\frac{x^2}{x^3+1} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="p = 1"></span>，</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} x \\cdot \\frac{x^2}{x^3+1} = \\lim_{x \\to +\\infty} \\frac{x^3}{x^3+1} = 1"></span>
  </p>
  
  <p>由于 <span class="formula-inline" data-latex="p = 1 \\le 1"></span> 且极限为 1，积分发散。</p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 发散</p>
</div>

<h5>2. 无界函数的反常积分审敛法</h5>

<p><strong>比较审敛法：</strong> 设 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="(a, b]"></span> 上非负，且 <span class="formula-inline" data-latex="x = a"></span> 为瑕点。</p>
<ul>
  <li>若存在 <span class="formula-inline" data-latex="M > 0"></span> 和 <span class="formula-inline" data-latex="0 < q < 1"></span>，使 <span class="formula-inline" data-latex="f(x) \\le \\frac{M}{(x-a)^q}"></span>，则 <span class="formula-inline" data-latex="\\int_a^b f(x) dx"></span> 收敛</li>
  <li>若存在 <span class="formula-inline" data-latex="M > 0"></span> 和 <span class="formula-inline" data-latex="q \\ge 1"></span>，使 <span class="formula-inline" data-latex="f(x) \\ge \\frac{M}{(x-a)^q}"></span>，则积分发散</li>
</ul>

<h4>📘 例题 3：瑕积分审敛</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\int_0^1 \\frac{1}{\\sqrt[3]{x}} dx"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="x = 0"></span> 为瑕点。该积分为</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 x^{-1/3} dx"></span>
  </p>
  
  <p>这里 <span class="formula-inline" data-latex="p = \\frac{1}{3} < 1"></span>，由前面结论，该积分收敛。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 x^{-1/3} dx = \\left[ \\frac{3}{2}x^{2/3} \\right]_0^1 = \\frac{3}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛，值为 <strong>3/2</strong></p>
</div>

<h5>3. Γ 函数</h5>

<p><strong>定义：</strong> Γ 函数定义为</p>

<div class="formula-block" data-latex="\\Gamma(s) = \\int_0^{+\\infty} e^{-x} x^{s-1} dx \\quad (s > 0)"></div>

<p>Γ 函数是阶乘的推广，具有以下重要性质：</p>

<div class="formula-block" data-latex="\\Gamma(s+1) = s\\Gamma(s) \\quad (s > 0)"></div>

<div class="formula-block" data-latex="\\Gamma(n+1) = n! \\quad (n \\text{ 为非负整数})"></div>

<div class="formula-block" data-latex="\\Gamma\\left(\\frac{1}{2}\\right) = \\sqrt{\\pi}"></div>

<div class="note">
  <strong>💡 Γ 函数的性质：</strong>
  <p>• 递推公式：<span class="formula-inline" data-latex="\\Gamma(s+1) = s\\Gamma(s)"></span></p>
  <p>• 对正整数 <span class="formula-inline" data-latex="n"></span>：<span class="formula-inline" data-latex="\\Gamma(n+1) = n!"></span></p>
  <p>• 余元公式：<span class="formula-inline" data-latex="\\Gamma(s)\\Gamma(1-s) = \\frac{\\pi}{\\sin\\pi s} \\quad (0 < s < 1)"></span></p>
  <p>• 当 <span class="formula-inline" data-latex="s \\to 0^+"></span> 时，<span class="formula-inline" data-latex="\\Gamma(s) \\to +\\infty"></span></p>
</div>

<h4>📘 例题 4：利用 Γ 函数计算积分</h4>

<div class="example">
  <p><strong>题目：</strong> 利用 Γ 函数计算 <span class="formula-inline" data-latex="\\int_0^{+\\infty} e^{-x} x^2 dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>由 Γ 函数定义，<span class="formula-inline" data-latex="\\int_0^{+\\infty} e^{-x} x^{s-1} dx = \\Gamma(s)"></span></p>
  <p>令 <span class="formula-inline" data-latex="s-1 = 2"></span>，即 <span class="formula-inline" data-latex="s = 3"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^{+\\infty} e^{-x} x^2 dx = \\Gamma(3) = 2! = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <strong>2</strong></p>
</div>

<h4>📘 例题 5：Γ 函数的递推公式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\Gamma\\left(\\frac{7}{2}\\right)"></span> 的值。</p>
  
  <p><strong>解：</strong></p>
  <p>由递推公式 <span class="formula-inline" data-latex="\\Gamma(s+1) = s\\Gamma(s)"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Gamma\\left(\\frac{7}{2}\\right) = \\frac{5}{2} \\cdot \\Gamma\\left(\\frac{5}{2}\\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{5}{2} \\cdot \\frac{3}{2} \\cdot \\Gamma\\left(\\frac{3}{2}\\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{5}{2} \\cdot \\frac{3}{2} \\cdot \\frac{1}{2} \\cdot \\Gamma\\left(\\frac{1}{2}\\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{15}{8} \\sqrt{\\pi}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{15}{8}\\sqrt{\\pi}"></span></p>
</div>

<h4>📘 例题 6：利用 Γ 函数计算变型积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^{+\\infty} e^{-2x} x^3 dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="t = 2x"></span>，则 <span class="formula-inline" data-latex="x = \\frac{t}{2}"></span>，<span class="formula-inline" data-latex="dx = \\frac{1}{2} dt"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^{+\\infty} e^{-2x} x^3 dx = \\int_0^{+\\infty} e^{-t} \\left(\\frac{t}{2}\\right)^3 \\cdot \\frac{1}{2} dt"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{16} \\int_0^{+\\infty} e^{-t} t^3 dt = \\frac{1}{16} \\Gamma(4) = \\frac{1}{16} \\cdot 3! = \\frac{6}{16} = \\frac{3}{8}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{3}{8}"></span></p>
</div>

<h5>4. Γ 函数的图像特征</h5>

<ul>
  <li>在 <span class="formula-inline" data-latex="s > 0"></span> 上连续且恒正</li>
  <li><span class="formula-inline" data-latex="\\Gamma(s)"></span> 在 <span class="formula-inline" data-latex="(0, +\\infty)"></span> 上严格凸</li>
  <li>当 <span class="formula-inline" data-latex="s \\to 0^+"></span> 时，<span class="formula-inline" data-latex="\\Gamma(s) \\to +\\infty"></span></li>
  <li>当 <span class="formula-inline" data-latex="s \\to +\\infty"></span> 时，<span class="formula-inline" data-latex="\\Gamma(s) \\to +\\infty"></span></li>
  <li>在 <span class="formula-inline" data-latex="s \\approx 1.46"></span> 处取得极小值</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 反常积分的审敛法提供了判断积分收敛性的系统方法。Γ函数作为阶乘的推广，在概率论（伽马分布）、数理统计（卡方分布、贝塔分布）、数学物理中都有广泛应用。理解Γ函数的性质和计算方法，是学习后续课程的重要基础。
  </p>
</div>
`;