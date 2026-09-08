window.SECTION_CONTENT = `
<h4>📐 洛必达法则</h4>

<p>洛必达法则是利用导数计算未定式极限的一种简便方法，尤其适用于 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 或 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 型的极限。</p>

<h5>1. 定理（洛必达法则 I）</h5>

<p>若函数 <span class="formula-inline" data-latex="f(x)"></span> 和 <span class="formula-inline" data-latex="g(x)"></span> 满足：</p>
<p>（1）<span class="formula-inline" data-latex="\\lim_{x \\to a} f(x) = 0"></span>，<span class="formula-inline" data-latex="\\lim_{x \\to a} g(x) = 0"></span>；</p>
<p>（2）在 <span class="formula-inline" data-latex="a"></span> 的某去心邻域内，<span class="formula-inline" data-latex="f'(x)"></span> 和 <span class="formula-inline" data-latex="g'(x)"></span> 存在，且 <span class="formula-inline" data-latex="g'(x) \\neq 0"></span>；</p>
<p>（3）<span class="formula-inline" data-latex="\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"></span> 存在（或为无穷大），</p>
<p>则</p>

<div class="formula-block" data-latex="\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"></div>

<h5>2. 定理（洛必达法则 II）</h5>

<p>若函数 <span class="formula-inline" data-latex="f(x)"></span> 和 <span class="formula-inline" data-latex="g(x)"></span> 满足：</p>
<p>（1）<span class="formula-inline" data-latex="\\lim_{x \\to a} f(x) = \\infty"></span>，<span class="formula-inline" data-latex="\\lim_{x \\to a} g(x) = \\infty"></span>；</p>
<p>（2）在 <span class="formula-inline" data-latex="a"></span> 的某去心邻域内，<span class="formula-inline" data-latex="f'(x)"></span> 和 <span class="formula-inline" data-latex="g'(x)"></span> 存在，且 <span class="formula-inline" data-latex="g'(x) \\neq 0"></span>；</p>
<p>（3）<span class="formula-inline" data-latex="\\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"></span> 存在（或为无穷大），</p>
<p>则同样有</p>

<div class="formula-block" data-latex="\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}"></div>

<div class="note">
  <strong>💡 使用条件：</strong>
  <p>• 必须是 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 或 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 型未定式</p>
  <p>• 求导后的极限必须存在（或为无穷大）</p>
  <p>• 可以多次使用（每次都要验证条件）</p>
</div>

<h4>📘 例题 1：<span class="formula-inline" data-latex="\\frac{0}{0}"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{\\sin x}{x}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\to 0"></span> 时，<span class="formula-inline" data-latex="\\sin x \\to 0"></span>，<span class="formula-inline" data-latex="x \\to 0"></span>，是 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 型。</p>
  
  <p>由洛必达法则：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{\\sin x}{x} = \\lim_{x \\to 0} \\frac{(\\sin x)'}{(x)'} = \\lim_{x \\to 0} \\frac{\\cos x}{1} = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>1</strong></p>
</div>

<h4>📘 例题 2：多次使用洛必达法则</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\to 0"></span> 时，<span class="formula-inline" data-latex="1 - \\cos x \\to 0"></span>，<span class="formula-inline" data-latex="x^2 \\to 0"></span>，是 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 型。</p>
  
  <p>第一次使用洛必达法则：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\lim_{x \\to 0} \\frac{\\sin x}{2x}"></span>
  </p>
  
  <p>仍然是 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 型，第二次使用：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{x \\to 0} \\frac{\\cos x}{2} = \\frac{1}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>1/2</strong></p>
</div>

<h4>📘 例题 3：<span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} \\frac{\\ln x}{x}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\to +\\infty"></span> 时，<span class="formula-inline" data-latex="\\ln x \\to +\\infty"></span>，<span class="formula-inline" data-latex="x \\to +\\infty"></span>，是 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 型。</p>
  
  <p>由洛必达法则：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} \\frac{\\ln x}{x} = \\lim_{x \\to +\\infty} \\frac{1/x}{1} = \\lim_{x \\to +\\infty} \\frac{1}{x} = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>0</strong></p>
</div>

<h4>📘 例题 4：指数函数的增长速度</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} \\frac{x^2}{e^x}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\to +\\infty"></span> 时，<span class="formula-inline" data-latex="x^2 \\to +\\infty"></span>，<span class="formula-inline" data-latex="e^x \\to +\\infty"></span>，是 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 型。</p>
  
  <p>使用洛必达法则两次：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to +\\infty} \\frac{x^2}{e^x} = \\lim_{x \\to +\\infty} \\frac{2x}{e^x} = \\lim_{x \\to +\\infty} \\frac{2}{e^x} = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>0</strong></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 这说明指数函数 <span class="formula-inline" data-latex="e^x"></span> 的增长速度远快于幂函数 <span class="formula-inline" data-latex="x^2"></span>。</p>
  </div>
</div>

<h5>3. 其他类型的未定式</h5>

<p>洛必达法则还可以通过变形处理其他类型的未定式：</p>

<table>
  <tr>
    <th>类型</th>
    <th>变形方法</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="0 \\cdot \\infty"></span></td>
    <td>化为 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 或 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span>：<span class="formula-inline" data-latex="f \\cdot g = \\frac{f}{1/g}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\infty - \\infty"></span></td>
    <td>通分或有理化化为 <span class="formula-inline" data-latex="\\frac{0}{0}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="1^\\infty, 0^0, \\infty^0"></span></td>
    <td>取对数：<span class="formula-inline" data-latex="\\ln y = \\ln f(x)^{g(x)} = g(x) \\ln f(x)"></span></td>
  </tr>
</table>

<h4>📘 例题 5：<span class="formula-inline" data-latex="0 \\cdot \\infty"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 0^+} x \\ln x"></span></p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\to 0^+"></span> 时，<span class="formula-inline" data-latex="x \\to 0"></span>，<span class="formula-inline" data-latex="\\ln x \\to -\\infty"></span>，是 <span class="formula-inline" data-latex="0 \\cdot \\infty"></span> 型。</p>
  
  <p>变形为 <span class="formula-inline" data-latex="\\frac{\\ln x}{1/x}"></span>，转化为 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 型：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0^+} x \\ln x = \\lim_{x \\to 0^+} \\frac{\\ln x}{1/x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{x \\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x \\to 0^+} (-x) = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>0</strong></p>
</div>

<h4>📘 例题 6：<span class="formula-inline" data-latex="1^\\infty"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 0} (1 + x)^{1/x}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>当 <span class="formula-inline" data-latex="x \\to 0"></span> 时，<span class="formula-inline" data-latex="1+x \\to 1"></span>，<span class="formula-inline" data-latex="1/x \\to \\infty"></span>，是 <span class="formula-inline" data-latex="1^\\infty"></span> 型。</p>
  
  <p>令 <span class="formula-inline" data-latex="y = (1 + x)^{1/x}"></span>，则 <span class="formula-inline" data-latex="\\ln y = \\frac{1}{x} \\ln(1+x)"></span>。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\ln y = \\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = \\lim_{x \\to 0} \\frac{1/(1+x)}{1} = 1"></span>
  </p>
  
  <p>因此 <span class="formula-inline" data-latex="\\lim_{x \\to 0} y = e^1 = e"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>e</strong></p>
</div>

<h5>4. 洛必达法则的局限性</h5>

<p>洛必达法则虽然强大，但并非万能：</p>

<ul>
  <li>必须满足 <span class="formula-inline" data-latex="\\frac{0}{0}"></span> 或 <span class="formula-inline" data-latex="\\frac{\\infty}{\\infty}"></span> 条件</li>
  <li>求导后的极限必须存在</li>
  <li>有时会导致更复杂的表达式，此时应换用其他方法</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 洛必达法则是微分中值定理的重要应用。它把极限计算转化为导数计算，极大地简化了未定式极限的求解过程。但使用时必须注意验证条件，不可滥用。
  </p>
</div>
`;