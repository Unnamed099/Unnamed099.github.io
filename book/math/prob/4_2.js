window.SECTION_CONTENT = `
<h4>📐 方差</h4>

<p>方差是衡量随机变量取值离散程度的重要数字特征。它描述了随机变量在其期望附近波动的大小，是风险度量、质量控制等领域的基本工具。</p>

<h5>1. 方差的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="X"></span> 是随机变量，<span class="formula-inline" data-latex="E(X) = \\mu"></span>。称</p>

<div class="formula-block" data-latex="\\text{Var}(X) = E[(X - \\mu)^2]"></div>

<p>为 <span class="formula-inline" data-latex="X"></span> 的<strong>方差</strong>，记作 <span class="formula-inline" data-latex="D(X)"></span> 或 <span class="formula-inline" data-latex="Var(X)"></span>。</p>

<p><strong>计算简化公式：</strong></p>
<div class="formula-block" data-latex="Var(X) = E(X^2) - [E(X)]^2"></div>

<p><strong>标准差：</strong> <span class="formula-inline" data-latex="\\sigma(X) = \\sqrt{Var(X)}"></span></p>

<h5>2. 常见分布的方差</h5>

<table>
  <tr>
    <th>分布</th>
    <th>记法</th>
    <th>方差 <span class="formula-inline" data-latex="Var(X)"></span></th>
  </tr>
  <tr>
    <td><strong>两点分布</strong></td>
    <td><span class="formula-inline" data-latex="B(1, p)"></span></td>
    <td><span class="formula-inline" data-latex="p(1-p)"></span></td>
  </tr>
  <tr>
    <td><strong>二项分布</strong></td>
    <td><span class="formula-inline" data-latex="B(n, p)"></span></td>
    <td><span class="formula-inline" data-latex="np(1-p)"></span></td>
  </tr>
  <tr>
    <td><strong>泊松分布</strong></td>
    <td><span class="formula-inline" data-latex="P(\\lambda)"></span></td>
    <td><span class="formula-inline" data-latex="\\lambda"></span></td>
  </tr>
  <tr>
    <td><strong>均匀分布</strong></td>
    <td><span class="formula-inline" data-latex="U(a, b)"></span></td>
    <td><span class="formula-inline" data-latex="(b-a)^2/12"></span></td>
  </tr>
  <tr>
    <td><strong>指数分布</strong></td>
    <td><span class="formula-inline" data-latex="E(\\lambda)"></span></td>
    <td><span class="formula-inline" data-latex="1/\\lambda^2"></span></td>
  </tr>
  <tr>
    <td><strong>正态分布</strong></td>
    <td><span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span></td>
    <td><span class="formula-inline" data-latex="\\sigma^2"></span></td>
  </tr>
</table>

<h4>📘 例题 1：离散型方差</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X"></span> 的分布律为 <span class="formula-inline" data-latex="P(X=1)=0.3, P(X=2)=0.5, P(X=3)=0.2"></span>，求 <span class="formula-inline" data-latex="Var(X)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X) = 1 \\times 0.3 + 2 \\times 0.5 + 3 \\times 0.2 = 1.9"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X^2) = 1^2 \\times 0.3 + 2^2 \\times 0.5 + 3^2 \\times 0.2 = 0.3 + 2.0 + 1.8 = 4.1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="Var(X) = E(X^2) - [E(X)]^2 = 4.1 - 1.9^2 = 4.1 - 3.61 = 0.49"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.49"></span></p>
</div>

<h4>📘 例题 2：连续型方差</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim U(0, 2)"></span>，求 <span class="formula-inline" data-latex="Var(X)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X) = 1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X^2) = \\int_0^2 x^2 \\cdot \\frac{1}{2} dx = \\frac{1}{2} \\cdot \\frac{x^3}{3} \\bigg|_0^2 = \\frac{1}{6} \\cdot 8 = \\frac{4}{3}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="Var(X) = \\frac{4}{3} - 1 = \\frac{1}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1/3"></span></p>
</div>

<h5>3. 方差的性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="Var(C) = 0"></span>（常数的方差为 0）</p>
<p><strong>性质 2：</strong> <span class="formula-inline" data-latex="Var(aX + b) = a^2 Var(X)"></span></p>
<p><strong>性质 3：</strong> <span class="formula-inline" data-latex="Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)"></span></p>
<p><strong>性质 4：</strong> 若 <span class="formula-inline" data-latex="X, Y"></span> 相互独立，则 <span class="formula-inline" data-latex="Var(X + Y) = Var(X) + Var(Y)"></span></p>

<h5>4. 切比雪夫不等式</h5>

<p><strong>定理：</strong> 若 <span class="formula-inline" data-latex="E(X) = \\mu, Var(X) = \\sigma^2"></span>，则对任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，有</p>

<div class="formula-block" data-latex="P(|X - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{\\varepsilon^2}"></div>

<p>等价地，<span class="formula-inline" data-latex="P(|X - \\mu| < \\varepsilon) \\ge 1 - \\frac{\\sigma^2}{\\varepsilon^2}"></span>。</p>

<h4>📘 例题 3：切比雪夫不等式</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X"></span> 的 <span class="formula-inline" data-latex="E(X) = 5, Var(X) = 4"></span>，用切比雪夫不等式估计 <span class="formula-inline" data-latex="P(|X - 5| < 4)"></span> 的下界。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(|X - 5| < 4) \\ge 1 - \\frac{4}{4^2} = 1 - \\frac{1}{4} = \\frac{3}{4} = 0.75"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\ge 0.75"></span></p>
</div>

<h5>5. 方差总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>性质</th>
  </tr>
  <tr>
    <td><strong>方差</strong></td>
    <td><span class="formula-inline" data-latex="E[(X-\\mu)^2]"></span></td>
    <td>非负、平移不变性</td>
  </tr>
  <tr>
    <td><strong>标准差</strong></td>
    <td><span class="formula-inline" data-latex="\\sqrt{Var(X)}"></span></td>
    <td>与 X 同量纲</td>
  </tr>
  <tr>
    <td><strong>切比雪夫不等式</strong></td>
    <td><span class="formula-inline" data-latex="P(|X-\\mu| \\ge \\varepsilon) \\le \\sigma^2/\\varepsilon^2"></span></td>
    <td>方差存在即可</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 方差是度量随机变量离散程度的最重要指标。它与期望一起，构成了随机变量最核心的两个数字特征。切比雪夫不等式给出了随机变量偏离其期望的概率上界，是概率论中最基本的极限定理之一。
  </p>
</div>
`;