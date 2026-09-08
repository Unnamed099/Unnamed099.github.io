window.SECTION_CONTENT = `
<h4>📐 换元积分法</h4>

<p>基本积分公式只能解决最简单的积分问题。对于复杂的被积函数，我们需要通过变量代换来简化积分，这就是换元积分法。</p>

<h5>1. 第一类换元法（凑微分法）</h5>

<p><strong>定理：</strong> 若 <span class="formula-inline" data-latex="\\int f(u) du = F(u) + C"></span>，且 <span class="formula-inline" data-latex="u = \\varphi(x)"></span> 可导，则</p>

<div class="formula-block" data-latex="\\int f[\\varphi(x)] \\varphi'(x) dx = \\int f(u) du = F[\\varphi(x)] + C"></div>

<p>即把 <span class="formula-inline" data-latex="\\varphi'(x) dx"></span> 凑成 <span class="formula-inline" data-latex="du"></span>，将变量从 <span class="formula-inline" data-latex="x"></span> 换为 <span class="formula-inline" data-latex="u"></span>。</p>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 观察被积函数，看哪一部分可以看成某个函数的导数</p>
  <p>• 将 <span class="formula-inline" data-latex="\\varphi'(x) dx"></span> 凑成 <span class="formula-inline" data-latex="du"></span></p>
  <p>• 化为基本积分公式的形式</p>
</div>

<h4>📘 例题 1：凑微分法</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int 2x e^{x^2} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2"></span>，则 <span class="formula-inline" data-latex="du = 2x dx"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int 2x e^{x^2} dx = \\int e^u du = e^u + C = e^{x^2} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e^{x^2} + C"></span></p>
</div>

<h4>📘 例题 2：凑微分法</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\cos 2x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = 2x"></span>，则 <span class="formula-inline" data-latex="du = 2 dx"></span>，即 <span class="formula-inline" data-latex="dx = \\frac{1}{2} du"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\cos 2x dx = \\frac{1}{2} \\int \\cos u du = \\frac{1}{2} \\sin u + C = \\frac{1}{2} \\sin 2x + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2} \\sin 2x + C"></span></p>
</div>

<h4>📘 例题 3：凑微分法</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{1}{3x+1} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = 3x+1"></span>，则 <span class="formula-inline" data-latex="du = 3 dx"></span>，即 <span class="formula-inline" data-latex="dx = \\frac{1}{3} du"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{1}{3x+1} dx = \\frac{1}{3} \\int \\frac{1}{u} du = \\frac{1}{3} \\ln|u| + C = \\frac{1}{3} \\ln|3x+1| + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{3} \\ln|3x+1| + C"></span></p>
</div>

<h5>2. 第二类换元法</h5>

<p>当被积函数含有根式时，可以通过变量代换消去根号。</p>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="x = \\psi(t)"></span> 单调可导，且 <span class="formula-inline" data-latex="\\psi'(t) \\neq 0"></span>，则</p>

<div class="formula-block" data-latex="\\int f(x) dx = \\int f[\\psi(t)] \\psi'(t) dt"></div>

<h4>📘 例题 4：根式代换</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\sqrt{1-x^2} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="x = \\sin t"></span>（<span class="formula-inline" data-latex="-\\frac{\\pi}{2} \\le t \\le \\frac{\\pi}{2}"></span>），则 <span class="formula-inline" data-latex="dx = \\cos t dt"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\sqrt{1-x^2} dx = \\int \\sqrt{1-\\sin^2 t} \\cos t dt = \\int \\cos^2 t dt"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2} \\int (1+\\cos 2t) dt = \\frac{1}{2}t + \\frac{1}{4}\\sin 2t + C"></span>
  </p>
  
  <p>代回 <span class="formula-inline" data-latex="t = \\arcsin x"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2}\\arcsin x + \\frac{1}{2}x\\sqrt{1-x^2} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2}\\arcsin x + \\frac{1}{2}x\\sqrt{1-x^2} + C"></span></p>
</div>

<h4>📘 例题 5：三角代换</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{a^2 - x^2}}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="x = a\\sin t"></span>，则 <span class="formula-inline" data-latex="dx = a\\cos t dt"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\int \\frac{a\\cos t dt}{a\\cos t} = \\int dt = t + C = \\arcsin\\frac{x}{a} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\arcsin\\frac{x}{a} + C"></span></p>
</div>

<h4>📘 例题 6：代数代换</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{x+1}}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="t = \\sqrt{x+1}"></span>，则 <span class="formula-inline" data-latex="x = t^2 - 1"></span>，<span class="formula-inline" data-latex="dx = 2t dt"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{x+1}} = \\int \\frac{2t}{t} dt = 2\\int dt = 2t + C = 2\\sqrt{x+1} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2\\sqrt{x+1} + C"></span></p>
</div>

<h5>3. 两类换元法的比较</h5>

<table>
  <tr>
    <th></th>
    <th>第一类换元法（凑微分）</th>
    <th>第二类换元法</th>
  </tr>
  <tr>
    <td><strong>方向</strong></td>
    <td><span class="formula-inline" data-latex="x \\to u"></span></td>
    <td><span class="formula-inline" data-latex="x \\to t"></span></td>
  </tr>
  <tr>
    <td><strong>应用场景</strong></td>
    <td>被积函数具有 <span class="formula-inline" data-latex="f[\\varphi(x)]\\varphi'(x)"></span> 形式</td>
    <td>被积函数含根式 <span class="formula-inline" data-latex="\\sqrt{a^2-x^2}, \\sqrt{x^2 \\pm a^2}"></span></td>
  </tr>
  <tr>
    <td><strong>关键</strong></td>
    <td>凑出 <span class="formula-inline" data-latex="d\\varphi(x)"></span></td>
    <td>选择合适的代换消去根号</td>
  </tr>
  <tr>
    <td><strong>常见代换</strong></td>
    <td><span class="formula-inline" data-latex="u = ax+b, u = x^2, u = \\sin x"></span></td>
    <td><span class="formula-inline" data-latex="x = a\\sin t, x = a\\tan t"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 换元积分法是积分计算的核心方法之一。第一类换元法（凑微分法）是最常用的积分技巧，第二类换元法主要处理根式积分。熟练掌握这两种方法，可以解决大部分初等函数的不定积分问题。
  </p>
</div>
`;