window.SECTION_CONTENT = `
<h4>📐 分部积分法</h4>

<p>分部积分法是积分计算的另一类基本方法，它来源于乘积的求导法则，适用于两类不同函数乘积的积分。</p>

<h5>1. 分部积分公式</h5>

<p>由乘积的求导法则 <span class="formula-inline" data-latex="(uv)' = u'v + uv'"></span>，移项得</p>

<div class="formula-block" data-latex="uv' = (uv)' - u'v"></div>

<p>两边积分得</p>

<div class="formula-block" data-latex="\\int uv' dx = uv - \\int u'v dx"></div>

<p>记 <span class="formula-inline" data-latex="dv = v' dx"></span>，<span class="formula-inline" data-latex="du = u' dx"></span>，则</p>

<div class="formula-block" data-latex="\\int u dv = uv - \\int v du"></div>

<p>这就是<strong>分部积分公式</strong>。</p>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 将不易直接积分的 <span class="formula-inline" data-latex="\\int u dv"></span> 转化为较易积分的 <span class="formula-inline" data-latex="\\int v du"></span></p>
  <p>• 关键在于 <span class="formula-inline" data-latex="u"></span> 和 <span class="formula-inline" data-latex="dv"></span> 的选取</p>
  <p>• 口诀："反对幂指三"（反三角函数、对数函数、幂函数、指数函数、三角函数）——排在前面的选为 <span class="formula-inline" data-latex="u"></span></p>
</div>

<h5>2. <span class="formula-inline" data-latex="u"></span> 和 <span class="formula-inline" data-latex="dv"></span> 的选取原则</h5>

<ul>
  <li>选 <span class="formula-inline" data-latex="u"></span> 的原则：求导后能简化</li>
  <li>选 <span class="formula-inline" data-latex="dv"></span> 的原则：积分后不能变复杂</li>
  <li>常用搭配：</li>
  <ul>
    <li><span class="formula-inline" data-latex="\\int x^n e^x dx"></span>：取 <span class="formula-inline" data-latex="u = x^n"></span></li>
    <li><span class="formula-inline" data-latex="\\int x^n \\sin x dx"></span>：取 <span class="formula-inline" data-latex="u = x^n"></span></li>
    <li><span class="formula-inline" data-latex="\\int x^n \\ln x dx"></span>：取 <span class="formula-inline" data-latex="u = \\ln x"></span></li>
    <li><span class="formula-inline" data-latex="\\int e^x \\sin x dx"></span>：取谁都可以，会回到自身</li>
  </ul>
</ul>

<h4>📘 例题 1：幂函数 × 指数函数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int x e^x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x"></span>，<span class="formula-inline" data-latex="dv = e^x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = dx"></span>，<span class="formula-inline" data-latex="v = e^x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C = (x-1)e^x + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="(x-1)e^x + C"></span></p>
</div>

<h4>📘 例题 2：幂函数 × 三角函数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int x \\sin x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x"></span>，<span class="formula-inline" data-latex="dv = \\sin x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = dx"></span>，<span class="formula-inline" data-latex="v = -\\cos x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int x \\sin x dx = -x\\cos x - \\int (-\\cos x) dx = -x\\cos x + \\int \\cos x dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= -x\\cos x + \\sin x + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sin x - x\\cos x + C"></span></p>
</div>

<h4>📘 例题 3：幂函数 × 对数函数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int x \\ln x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\ln x"></span>，<span class="formula-inline" data-latex="dv = x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = \\frac{1}{x} dx"></span>，<span class="formula-inline" data-latex="v = \\frac{x^2}{2}"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int x \\ln x dx = \\frac{x^2}{2}\\ln x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x} dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{x^2}{2}\\ln x - \\frac{1}{2} \\int x dx = \\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{x^2}{2}\\ln x - \\frac{x^2}{4} + C"></span></p>
</div>

<h4>📘 例题 4：指数函数 × 三角函数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int e^x \\sin x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="I = \\int e^x \\sin x dx"></span></p>
  
  <p>取 <span class="formula-inline" data-latex="u = \\sin x"></span>，<span class="formula-inline" data-latex="dv = e^x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = \\cos x dx"></span>，<span class="formula-inline" data-latex="v = e^x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I = e^x\\sin x - \\int e^x\\cos x dx"></span>
  </p>
  
  <p>对 <span class="formula-inline" data-latex="\\int e^x\\cos x dx"></span> 再分部积分：</p>
  <p>取 <span class="formula-inline" data-latex="u = \\cos x"></span>，<span class="formula-inline" data-latex="dv = e^x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = -\\sin x dx"></span>，<span class="formula-inline" data-latex="v = e^x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int e^x\\cos x dx = e^x\\cos x + \\int e^x\\sin x dx = e^x\\cos x + I"></span>
  </p>
  
  <p>代入得：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I = e^x\\sin x - (e^x\\cos x + I)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2I = e^x\\sin x - e^x\\cos x"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I = \\frac{e^x}{2}(\\sin x - \\cos x) + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{e^x}{2}(\\sin x - \\cos x) + C"></span></p>
</div>

<h4>📘 例题 5：反三角函数的积分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\arctan x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\arctan x"></span>，<span class="formula-inline" data-latex="dv = dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = \\frac{1}{1+x^2} dx"></span>，<span class="formula-inline" data-latex="v = x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\arctan x dx = x\\arctan x - \\int \\frac{x}{1+x^2} dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= x\\arctan x - \\frac{1}{2} \\ln(1+x^2) + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x\\arctan x - \\frac{1}{2} \\ln(1+x^2) + C"></span></p>
</div>

<h5>3. 分部积分法的常见类型</h5>

<table>
  <tr>
    <th>类型</th>
    <th>取 <span class="formula-inline" data-latex="u"></span></th>
    <th>取 <span class="formula-inline" data-latex="dv"></span></th>
    <th>示例</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x^n e^x"></span></td>
    <td><span class="formula-inline" data-latex="x^n"></span></td>
    <td><span class="formula-inline" data-latex="e^x dx"></span></td>
    <td><span class="formula-inline" data-latex="\\int x^2 e^x dx"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x^n \\sin x"></span></td>
    <td><span class="formula-inline" data-latex="x^n"></span></td>
    <td><span class="formula-inline" data-latex="\\sin x dx"></span></td>
    <td><span class="formula-inline" data-latex="\\int x^2 \\sin x dx"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x^n \\ln x"></span></td>
    <td><span class="formula-inline" data-latex="\\ln x"></span></td>
    <td><span class="formula-inline" data-latex="x^n dx"></span></td>
    <td><span class="formula-inline" data-latex="\\int x^3 \\ln x dx"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^x \\sin x"></span></td>
    <td>任选</td>
    <td>任选</td>
    <td><span class="formula-inline" data-latex="\\int e^x \\cos x dx"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\arcsin x, \\arctan x"></span></td>
    <td>反三角函数</td>
    <td><span class="formula-inline" data-latex="dx"></span></td>
    <td><span class="formula-inline" data-latex="\\int \\arcsin x dx"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 分部积分法是积分计算中最重要的方法之一。它与换元积分法配合使用，可以解决大部分初等函数的不定积分问题。关键在于 <span class="formula-inline" data-latex="u"></span> 和 <span class="formula-inline" data-latex="dv"></span> 的选取，一般遵循"反对幂指三"的口诀。
  </p>
</div>
`;