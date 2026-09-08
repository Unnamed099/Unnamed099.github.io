window.SECTION_CONTENT = `
<h4>📐 一般周期函数的傅里叶级数</h4>

<p>前面讨论的傅里叶级数适用于周期为 <span class="formula-inline" data-latex="2\\pi"></span> 的函数。对于一般周期 <span class="formula-inline" data-latex="2l"></span> 的函数，可以通过变量替换将其转化为周期为 <span class="formula-inline" data-latex="2\\pi"></span> 的函数。</p>

<h5>1. 周期为 <span class="formula-inline" data-latex="2l</span> 的周期函数的傅里叶级数</h5>

<p>设 <span class="formula-inline" data-latex="f(x)"></span> 以 <span class="formula-inline" data-latex="2l"></span> 为周期，在 <span class="formula-inline" data-latex="[-l, l]"></span> 上可积。令 <span class="formula-inline" data-latex="t = \\frac{\\pi x}{l}"></span>，则 <span class="formula-inline" data-latex="F(t) = f\\left(\\frac{lt}{\\pi}\\right)"></span> 以 <span class="formula-inline" data-latex="2\\pi"></span> 为周期。</p>

<p>将 <span class="formula-inline" data-latex="F(t)"></span> 展开成傅里叶级数，再代回 <span class="formula-inline" data-latex="x"></span>，得到</p>

<div class="formula-block" data-latex="f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^{\\infty} \\left( a_n \\cos\\frac{n\\pi x}{l} + b_n \\sin\\frac{n\\pi x}{l} \\right)"></div>

<p>其中</p>

<div class="formula-block" data-latex="a_n = \\frac{1}{l} \\int_{-l}^{l} f(x) \\cos\\frac{n\\pi x}{l} dx \\quad (n = 0, 1, 2, \\cdots)"></div>
<div class="formula-block" data-latex="b_n = \\frac{1}{l} \\int_{-l}^{l} f(x) \\sin\\frac{n\\pi x}{l} dx \\quad (n = 1, 2, 3, \\cdots)"></div>

<h4>📘 例题 1：周期为 <span class="formula-inline" data-latex="2l"></span> 的傅里叶级数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x, -l \\le x \\le l"></span> 的傅里叶级数。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x)"></span> 是奇函数，所以 <span class="formula-inline" data-latex="a_n = 0"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="b_n = \\frac{1}{l} \\int_{-l}^{l} x \\sin\\frac{n\\pi x}{l} dx = \\frac{2}{l} \\int_0^l x \\sin\\frac{n\\pi x}{l} dx"></span>
  </p>
  <p>令 <span class="formula-inline" data-latex="u = \\frac{n\\pi x}{l}"></span>，则 <span class="formula-inline" data-latex="x = \\frac{lu}{n\\pi}, dx = \\frac{l}{n\\pi} du"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="b_n = \\frac{2}{l} \\cdot \\frac{l^2}{n^2\\pi^2} \\int_0^{n\\pi} u \\sin u du = \\frac{2l}{n^2\\pi^2} \\left[ -u\\cos u + \\sin u \\right]_0^{n\\pi} = \\frac{2l}{n\\pi} (-1)^{n+1}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f(x) \\sim \\frac{2l}{\\pi} \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n} \\sin\\frac{n\\pi x}{l}"></span></p>
</div>

<h5>2. 傅里叶级数的复数形式</h5>

<p>利用欧拉公式 <span class="formula-inline" data-latex="e^{i\\theta} = \\cos\\theta + i\\sin\\theta"></span>，傅里叶级数可写成复数形式：</p>

<div class="formula-block" data-latex="f(x) \\sim \\sum_{n=-\\infty}^{\\infty} c_n e^{i\\frac{n\\pi x}{l}}"></div>

<p>其中</p>

<div class="formula-block" data-latex="c_n = \\frac{1}{2l} \\int_{-l}^{l} f(x) e^{-i\\frac{n\\pi x}{l}} dx \\quad (n = 0, \\pm1, \\pm2, \\cdots)"></div>

<p>复数形式的傅里叶级数在信号处理、量子力学中更为常用，因为它形式简洁，便于运算。</p>

<h4>📘 例题 2：求傅里叶级数的复数形式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x, -l \\le x \\le l"></span> 的傅里叶级数的复数形式。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="c_n = \\frac{1}{2l} \\int_{-l}^{l} x e^{-i\\frac{n\\pi x}{l}} dx"></span>
  </p>
  <p>当 <span class="formula-inline" data-latex="n = 0"></span> 时，<span class="formula-inline" data-latex="c_0 = 0"></span></p>
  <p>当 <span class="formula-inline" data-latex="n \\neq 0"></span> 时，</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="c_n = \\frac{1}{2l} \\left[ \\frac{i l^2}{n\\pi} e^{-i\\frac{n\\pi x}{l}} \\left( x + \\frac{i l}{n\\pi} \\right) \\right]_{-l}^{l} = \\frac{i l (-1)^n}{n\\pi}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f(x) \\sim \\sum_{n=-\\infty, n\\neq 0}^{\\infty} \\frac{i l (-1)^n}{n\\pi} e^{i\\frac{n\\pi x}{l}}"></span></p>
</div>

<h5>3. 傅里叶级数的应用</h5>

<ul>
  <li><strong>信号处理：</strong> 将时域信号分解为频域分量</li>
  <li><strong>热传导方程：</strong> 用傅里叶级数求解热传导方程</li>
  <li><strong>振动分析：</strong> 分析弦振动等物理问题</li>
  <li><strong>数据压缩：</strong> JPEG 图像压缩使用离散余弦变换（DCT）</li>
</ul>

<h5>4. 一般周期函数傅里叶级数总结</h5>

<table>
  <tr>
    <th>形式</th>
    <th>系数公式</th>
    <th>适用场景</th>
  </tr>
  <tr>
    <td><strong>实数形式</strong></td>
    <td><span class="formula-inline" data-latex="a_n = \\frac{1}{l}\\int_{-l}^{l} f(x)\\cos\\frac{n\\pi x}{l} dx"></span></td>
    <td>直观理解</td>
  </tr>
  <tr>
    <td><strong>复数形式</strong></td>
    <td><span class="formula-inline" data-latex="c_n = \\frac{1}{2l}\\int_{-l}^{l} f(x)e^{-i\\frac{n\\pi x}{l}} dx"></span></td>
    <td>理论推导、信号处理</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 一般周期函数的傅里叶级数将傅里叶分析从 <span class="formula-inline" data-latex="2\\pi"></span> 周期推广到任意周期 <span class="formula-inline" data-latex="2l"></span>。复数形式的傅里叶级数更加简洁，是傅里叶变换的基础。傅里叶级数在工程、物理和数学中有着广泛的应用。
  </p>
</div>
`;