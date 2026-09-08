window.SECTION_CONTENT = `
<h4>📐 连续型随机变量</h4>

<p>连续型随机变量的取值充满某个区间，不能像离散型那样用分布律描述。它通过概率密度函数来描述其概率分布，是概率论中最重要的随机变量类型之一。</p>

<h5>1. 连续型随机变量的定义</h5>

<p><strong>定义：</strong> 设随机变量 <span class="formula-inline" data-latex="X"></span> 的分布函数为 <span class="formula-inline" data-latex="F(x)"></span>。若存在非负可积函数 <span class="formula-inline" data-latex="f(x)"></span>，使得对任意实数 <span class="formula-inline" data-latex="x"></span>，</p>

<div class="formula-block" data-latex="F(x) = \\int_{-\\infty}^{x} f(t) dt"></div>

<p>则称 <span class="formula-inline" data-latex="X"></span> 为<strong>连续型随机变量</strong>，<span class="formula-inline" data-latex="f(x)"></span> 称为 <span class="formula-inline" data-latex="X"></span> 的<strong>概率密度函数</strong>（简称密度函数）。</p>

<p><strong>密度函数的性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="f(x) \\ge 0"></span>（非负性）</li>
  <li><span class="formula-inline" data-latex="\\int_{-\\infty}^{+\\infty} f(x) dx = 1"></span>（规范性）</li>
  <li><span class="formula-inline" data-latex="P(a < X \\le b) = \\int_a^b f(x) dx"></span></li>
  <li><span class="formula-inline" data-latex="P(X = a) = 0"></span>（单点概率为0）</li>
</ul>

<h5>2. 常见的连续型分布</h5>

<p><strong>（1）均匀分布</strong></p>
<p>若随机变量 <span class="formula-inline" data-latex="X"></span> 在区间 <span class="formula-inline" data-latex="[a, b]"></span> 上取值，且密度函数为</p>
<div class="formula-block" data-latex="f(x) = \\begin{cases} \\frac{1}{b-a}, & a \\le x \\le b \\\\ 0, & \\text{其他} \\end{cases}"></div>
<p>则称 <span class="formula-inline" data-latex="X"></span> 服从区间 <span class="formula-inline" data-latex="[a, b]"></span> 上的<strong>均匀分布</strong>，记作 <span class="formula-inline" data-latex="X \\sim U(a, b)"></span>。</p>

<p><strong>（2）指数分布</strong></p>
<p>若随机变量 <span class="formula-inline" data-latex="X"></span> 的密度函数为</p>
<div class="formula-block" data-latex="f(x) = \\begin{cases} \\lambda e^{-\\lambda x}, & x \\ge 0 \\\\ 0, & x < 0 \\end{cases} \\quad (\\lambda > 0)"></div>
<p>则称 <span class="formula-inline" data-latex="X"></span> 服从参数为 <span class="formula-inline" data-latex="\\lambda"></span> 的<strong>指数分布</strong>，记作 <span class="formula-inline" data-latex="X \\sim E(\\lambda)"></span>。</p>

<p><strong>（3）正态分布（高斯分布）</strong></p>
<p>若随机变量 <span class="formula-inline" data-latex="X"></span> 的密度函数为</p>
<div class="formula-block" data-latex="f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}, \\quad -\\infty < x < +\\infty"></div>
<p>则称 <span class="formula-inline" data-latex="X"></span> 服从参数为 <span class="formula-inline" data-latex="\\mu, \\sigma^2"></span> 的<strong>正态分布</strong>，记作 <span class="formula-inline" data-latex="X \\sim N(\\mu, \\sigma^2)"></span>。</p>

<p>特别地，<span class="formula-inline" data-latex="\\mu = 0, \\sigma = 1"></span> 时称为<strong>标准正态分布</strong>，记作 <span class="formula-inline" data-latex="Z \\sim N(0, 1)"></span>，其密度函数为</p>
<div class="formula-block" data-latex="\\varphi(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}"></div>

<h4>📘 例题 1：均匀分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim U(0, 10)"></span>，求 <span class="formula-inline" data-latex="P(2 < X < 5)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(2 < X < 5) = \\int_2^5 \\frac{1}{10} dx = \\frac{3}{10} = 0.3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.3"></span></p>
</div>

<h4>📘 例题 2：指数分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设电子元件的寿命 <span class="formula-inline" data-latex="X \\sim E(0.01)"></span>，求该元件寿命超过 100 小时的概率。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X > 100) = \\int_{100}^{\\infty} 0.01 e^{-0.01x} dx = e^{-1} \\approx 0.368"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e^{-1} \\approx 0.368"></span></p>
</div>

<h4>📘 例题 3：正态分布</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim N(0, 1)"></span>，查标准正态分布表求 <span class="formula-inline" data-latex="P(X < 1.96)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>标准正态分布表给出 <span class="formula-inline" data-latex="\\Phi(1.96) = 0.975"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.975"></span></p>
</div>

<h5>3. 连续型分布总结</h5>

<table>
  <tr>
    <th>分布名称</th>
    <th>记法</th>
    <th>密度函数</th>
    <th>参数</th>
    <th>应用</th>
  </tr>
  <tr>
    <td><strong>均匀分布</strong></td>
    <td><span class="formula-inline" data-latex="U(a, b)"></span></td>
    <td><span class="formula-inline" data-latex="1/(b-a)"></span></td>
    <td><span class="formula-inline" data-latex="a < b"></span></td>
    <td>随机取点</td>
  </tr>
  <tr>
    <td><strong>指数分布</strong></td>
    <td><span class="formula-inline" data-latex="E(\\lambda)"></span></td>
    <td><span class="formula-inline" data-latex="\\lambda e^{-\\lambda x}, x \\ge 0"></span></td>
    <td><span class="formula-inline" data-latex="\\lambda > 0"></span></td>
    <td>寿命、等待时间</td>
  </tr>
  <tr>
    <td><strong>正态分布</strong></td>
    <td><span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span></td>
    <td><span class="formula-inline" data-latex="\\frac{1}{\\sqrt{2\\pi}\\sigma} e^{-(x-\\mu)^2/(2\\sigma^2)}"></span></td>
    <td><span class="formula-inline" data-latex="\\mu \\in \\mathbb{R}, \\sigma > 0"></span></td>
    <td>中心极限定理、误差分析</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 连续型随机变量通过概率密度函数描述。均匀分布描述"等可能"的连续情形；指数分布描述"无记忆性"的等待时间；正态分布是自然界中最常见的分布，由中心极限定理保证其普遍性。
  </p>
</div>
`;