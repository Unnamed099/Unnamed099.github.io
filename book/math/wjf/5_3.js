window.SECTION_CONTENT = `
<h4>📐 定积分的换元法和分部积分法</h4>

<p>定积分的换元法和分部积分法与不定积分的对应方法类似，但需要注意积分限的变化。定积分换元时，积分限必须同时改变；分部积分则可以直接代入上下限计算。</p>

<h5>1. 定积分的换元法</h5>

<p><strong>定理：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，函数 <span class="formula-inline" data-latex="x = \\varphi(t)"></span> 满足：</p>

<ul>
  <li><span class="formula-inline" data-latex="\\varphi(\\alpha) = a</span>，<span class="formula-inline" data-latex="\\varphi(\\beta) = b"></span></li>
  <li><span class="formula-inline" data-latex="\\varphi(t)"></span> 在 <span class="formula-inline" data-latex="[\\alpha, \\beta]"></span>（或 <span class="formula-inline" data-latex="[\\beta, \\alpha]"></span>）上单调且具有连续导数</li>
</ul>

<p>则</p>

<div class="formula-block" data-latex="\\int_a^b f(x) dx = \\int_{\\alpha}^{\\beta} f[\\varphi(t)] \\varphi'(t) dt"></div>

<div class="note">
  <strong>💡 关键点：</strong>
  <p>• 换元时积分限必须<strong>同时改变</strong>：<span class="formula-inline" data-latex="x = a \\to t = \\alpha"></span>，<span class="formula-inline" data-latex="x = b \\to t = \\beta"></span></p>
  <p>• 换元后<strong>不需要</strong>代回原变量</p>
  <p>• 如果 <span class="formula-inline" data-latex="\\varphi(t)"></span> 不是单调的，需分段处理</p>
</div>

<h4>📘 例题 1：定积分的换元法</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^1 \\sqrt{1-x^2} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="x = \\sin t"></span>，则 <span class="formula-inline" data-latex="dx = \\cos t dt"></span></p>
  <p>当 <span class="formula-inline" data-latex="x = 0"></span> 时，<span class="formula-inline" data-latex="t = 0"></span>；当 <span class="formula-inline" data-latex="x = 1"></span> 时，<span class="formula-inline" data-latex="t = \\frac{\\pi}{2}"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 \\sqrt{1-x^2} dx = \\int_0^{\\pi/2} \\sqrt{1-\\sin^2 t} \\cos t dt"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\int_0^{\\pi/2} \\cos^2 t dt = \\int_0^{\\pi/2} \\frac{1+\\cos 2t}{2} dt"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2}\\left[ t + \\frac{\\sin 2t}{2} \\right]_0^{\\pi/2} = \\frac{\\pi}{4}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{\\pi}{4}"></span></p>
</div>

<h4>📘 例题 2：定积分的换元法</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^2 x e^{x^2} dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2"></span>，则 <span class="formula-inline" data-latex="du = 2x dx"></span>，即 <span class="formula-inline" data-latex="x dx = \\frac{1}{2} du"></span></p>
  <p>当 <span class="formula-inline" data-latex="x = 0"></span> 时，<span class="formula-inline" data-latex="u = 0"></span>；当 <span class="formula-inline" data-latex="x = 2"></span> 时，<span class="formula-inline" data-latex="u = 4"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^2 x e^{x^2} dx = \\frac{1}{2} \\int_0^4 e^u du = \\frac{1}{2}[e^u]_0^4 = \\frac{e^4 - 1}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{e^4 - 1}{2}"></span></p>
</div>

<h4>📘 例题 3：对称区间上的定积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_{-a}^a \\sin x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\sin x"></span> 是奇函数，关于原点对称的区间上积分为 0。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_{-a}^a \\sin x dx = 0"></span>
  </p>
  
  <p><strong>一般结论：</strong></p>
  <ul>
    <li>若 <span class="formula-inline" data-latex="f(x)"></span> 是<strong>奇函数</strong>（<span class="formula-inline" data-latex="f(-x) = -f(x)"></span>），则 <span class="formula-inline" data-latex="\\int_{-a}^a f(x) dx = 0"></span></li>
    <li>若 <span class="formula-inline" data-latex="f(x)"></span> 是<strong>偶函数</strong>（<span class="formula-inline" data-latex="f(-x) = f(x)"></span>），则 <span class="formula-inline" data-latex="\\int_{-a}^a f(x) dx = 2\\int_0^a f(x) dx"></span></li>
  </ul>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0"></span></p>
</div>

<h5>2. 定积分的分部积分法</h5>

<p><strong>公式：</strong></p>

<div class="formula-block" data-latex="\\int_a^b u dv = [uv]_a^b - \\int_a^b v du"></div>

<p>与不定积分的分部积分法相比，定积分的分部积分法多了一项 <span class="formula-inline" data-latex="[uv]_a^b = u(b)v(b) - u(a)v(a)"></span>。</p>

<h4>📘 例题 4：定积分的分部积分法</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^1 x e^x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x"></span>，<span class="formula-inline" data-latex="dv = e^x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = dx"></span>，<span class="formula-inline" data-latex="v = e^x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 x e^x dx = [x e^x]_0^1 - \\int_0^1 e^x dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= (1 \\cdot e - 0) - [e^x]_0^1 = e - (e - 1) = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h4>📘 例题 5：定积分的分部积分法</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^{\\pi} x \\sin x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x"></span>，<span class="formula-inline" data-latex="dv = \\sin x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = dx"></span>，<span class="formula-inline" data-latex="v = -\\cos x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^{\\pi} x \\sin x dx = [-x\\cos x]_0^{\\pi} - \\int_0^{\\pi} (-\\cos x) dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= [-\\pi\\cos\\pi + 0] + \\int_0^{\\pi} \\cos x dx = \\pi + [\\sin x]_0^{\\pi} = \\pi"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\pi"></span></p>
</div>

<h4>📘 例题 6：循环积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="I = \\int_0^{\\pi/2} e^x \\sin x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = \\sin x"></span>，<span class="formula-inline" data-latex="dv = e^x dx"></span></p>
  <p>则 <span class="formula-inline" data-latex="du = \\cos x dx"></span>，<span class="formula-inline" data-latex="v = e^x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I = [e^x\\sin x]_0^{\\pi/2} - \\int_0^{\\pi/2} e^x\\cos x dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= e^{\\pi/2} - \\int_0^{\\pi/2} e^x\\cos x dx"></span>
  </p>
  
  <p>对 <span class="formula-inline" data-latex="\\int_0^{\\pi/2} e^x\\cos x dx"></span> 再次分部积分：</p>
  <p>令 <span class="formula-inline" data-latex="u = \\cos x"></span>，<span class="formula-inline" data-latex="dv = e^x dx"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^{\\pi/2} e^x\\cos x dx = [e^x\\cos x]_0^{\\pi/2} + \\int_0^{\\pi/2} e^x\\sin x dx = -1 + I"></span>
  </p>
  
  <p>代入得：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I = e^{\\pi/2} - (-1 + I) = e^{\\pi/2} + 1 - I"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2I = e^{\\pi/2} + 1"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="I = \\frac{e^{\\pi/2} + 1}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{e^{\\pi/2} + 1}{2}"></span></p>
</div>

<h5>3. 定积分计算方法的总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>适用情况</th>
    <th>注意事项</th>
  </tr>
  <tr>
    <td><strong>直接使用牛顿-莱布尼茨公式</strong></td>
    <td>被积函数简单，原函数易求</td>
    <td>被积函数需在区间上连续</td>
  </tr>
  <tr>
    <td><strong>换元法</strong></td>
    <td>被积函数含有复合结构</td>
    <td>换元时积分限必须同时改变</td>
  </tr>
  <tr>
    <td><strong>分部积分法</strong></td>
    <td>两类不同函数乘积的积分</td>
    <td>注意 <span class="formula-inline" data-latex="[uv]_a^b"></span> 项的计算</td>
  </tr>
  <tr>
    <td><strong>利用对称性</strong></td>
    <td>积分区间关于原点对称</td>
    <td>奇函数为 0，偶函数为 2 倍</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 定积分的换元法和分部积分法是不定积分对应方法在定积分中的推广。与不定积分不同的是，换元法需要同时改变积分限，分部积分法需要计算端点的函数值。掌握这两种方法，可以计算绝大多数定积分。
  </p>
</div>
`;