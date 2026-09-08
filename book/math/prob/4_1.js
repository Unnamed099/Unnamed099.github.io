window.SECTION_CONTENT = `
<h4>📐 数学期望</h4>

<p>数学期望（又称期望、均值）是随机变量最重要的数字特征之一。它描述了随机变量取值的"平均水平"，是随机变量分布的中心位置度量。</p>

<h5>1. 数学期望的定义</h5>

<p><strong>离散型：</strong> 设离散型随机变量 <span class="formula-inline" data-latex="X"></span> 的分布律为 <span class="formula-inline" data-latex="P(X = x_i) = p_i"></span>，若 <span class="formula-inline" data-latex="\\sum_i |x_i| p_i < \\infty"></span>，则</p>

<div class="formula-block" data-latex="E(X) = \\sum_{i} x_i p_i"></div>

<p><strong>连续型：</strong> 设连续型随机变量 <span class="formula-inline" data-latex="X"></span> 的密度函数为 <span class="formula-inline" data-latex="f(x)"></span>，若 <span class="formula-inline" data-latex="\\int_{-\\infty}^{+\\infty} |x| f(x) dx < \\infty"></span>，则</p>

<div class="formula-block" data-latex="E(X) = \\int_{-\\infty}^{+\\infty} x f(x) dx"></div>

<h5>2. 常见分布的数学期望</h5>

<table>
  <tr>
    <th>分布</th>
    <th>记法</th>
    <th>数学期望 <span class="formula-inline" data-latex="E(X)"></span></th>
  </tr>
  <tr>
    <td><strong>两点分布</strong></td>
    <td><span class="formula-inline" data-latex="B(1, p)"></span></td>
    <td><span class="formula-inline" data-latex="p"></span></td>
  </tr>
  <tr>
    <td><strong>二项分布</strong></td>
    <td><span class="formula-inline" data-latex="B(n, p)"></span></td>
    <td><span class="formula-inline" data-latex="np"></span></td>
  </tr>
  <tr>
    <td><strong>泊松分布</strong></td>
    <td><span class="formula-inline" data-latex="P(\\lambda)"></span></td>
    <td><span class="formula-inline" data-latex="\\lambda"></span></td>
  </tr>
  <tr>
    <td><strong>均匀分布</strong></td>
    <td><span class="formula-inline" data-latex="U(a, b)"></span></td>
    <td><span class="formula-inline" data-latex="(a+b)/2"></span></td>
  </tr>
  <tr>
    <td><strong>指数分布</strong></td>
    <td><span class="formula-inline" data-latex="E(\\lambda)"></span></td>
    <td><span class="formula-inline" data-latex="1/\\lambda"></span></td>
  </tr>
  <tr>
    <td><strong>正态分布</strong></td>
    <td><span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span></td>
    <td><span class="formula-inline" data-latex="\\mu"></span></td>
  </tr>
</table>

<h4>📘 例题 1：离散型数学期望</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X"></span> 的分布律为 <span class="formula-inline" data-latex="P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2"></span>，求 <span class="formula-inline" data-latex="E(X)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X) = 1 \\times 0.3 + 2 \\times 0.5 + 3 \\times 0.2 = 0.3 + 1.0 + 0.6 = 1.9"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1.9"></span></p>
</div>

<h4>📘 例题 2：连续型数学期望</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim U(0, 2)"></span>，求 <span class="formula-inline" data-latex="E(X)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X) = \\int_0^2 x \\cdot \\frac{1}{2} dx = \\frac{1}{2} \\cdot \\frac{x^2}{2} \\bigg|_0^2 = \\frac{1}{4} \\cdot 4 = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h5>3. 数学期望的性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="E(C) = C"></span>（常数的期望等于它本身）</p>
<p><strong>性质 2：</strong> <span class="formula-inline" data-latex="E(aX + b) = aE(X) + b"></span>（线性性质）</p>
<p><strong>性质 3：</strong> <span class="formula-inline" data-latex="E(X + Y) = E(X) + E(Y)"></span>（对任意 X、Y 成立）</p>
<p><strong>性质 4：</strong> 若 <span class="formula-inline" data-latex="X, Y"></span> 相互独立，则 <span class="formula-inline" data-latex="E(XY) = E(X)E(Y)"></span></p>

<h5>4. 随机变量函数的数学期望</h5>

<p>若 <span class="formula-inline" data-latex="Y = g(X)"></span>，则</p>
<ul>
  <li><strong>离散型：</strong> <span class="formula-inline" data-latex="E[g(X)] = \\sum_i g(x_i) p_i"></span></li>
  <li><strong>连续型：</strong> <span class="formula-inline" data-latex="E[g(X)] = \\int_{-\\infty}^{+\\infty} g(x) f(x) dx"></span></li>
</ul>

<h4>📘 例题 3：随机变量函数的期望</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim N(0, 1)"></span>，求 <span class="formula-inline" data-latex="E(X^2)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X^2) = \\int_{-\\infty}^{+\\infty} x^2 \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2} dx = 1"></span>
  </p>
  <p>（由正态分布的性质，<span class="formula-inline" data-latex="E(X^2) = Var(X) + [E(X)]^2 = 1 + 0 = 1"></span>）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h5>5. 数学期望总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>定义</th>
    <th>关键性质</th>
  </tr>
  <tr>
    <td><strong>离散型</strong></td>
    <td><span class="formula-inline" data-latex="\\sum x_i p_i"></span></td>
    <td>线性、函数期望</td>
  </tr>
  <tr>
    <td><strong>连续型</strong></td>
    <td><span class="formula-inline" data-latex="\\int x f(x) dx"></span></td>
    <td>线性、函数期望</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 数学期望是随机变量最重要的数字特征之一，它描述了随机变量的"平均位置"。期望的线性性质使得它在实际计算中非常方便。随机变量函数的期望可以直接用原随机变量的分布计算，无需先求函数的分布。
  </p>
</div>
`;