window.SECTION_CONTENT = `
<h4>📐 中心极限定理</h4>

<p>中心极限定理是概率论中最重要的定理之一。它表明：大量独立随机变量之和的分布近似服从正态分布。这解释了为什么正态分布如此普遍地出现在自然和社会现象中。</p>

<h5>1. 中心极限定理的内容</h5>

<p><strong>林德伯格-莱维中心极限定理：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是独立同分布的随机变量，<span class="formula-inline" data-latex="E(X_i) = \\mu, Var(X_i) = \\sigma^2 > 0"></span>。令</p>

<div class="formula-block" data-latex="S_n = \\sum_{i=1}^{n} X_i, \\quad \\overline{X}_n = \\frac{1}{n} S_n"></div>

<p>则当 <span class="formula-inline" data-latex="n \\to \\infty"></span> 时，</p>

<div class="formula-block" data-latex="\\frac{S_n - n\\mu}{\\sqrt{n}\\sigma} \\xrightarrow{d} N(0, 1)"></div>

<p>等价地，</p>

<div class="formula-block" data-latex="\\frac{\\overline{X}_n - \\mu}{\\sigma/\\sqrt{n}} \\xrightarrow{d} N(0, 1)"></div>

<p>即 <span class="formula-inline" data-latex="\\overline{X}_n"></span> 近似服从 <span class="formula-inline" data-latex="N(\\mu, \\sigma^2/n)"></span>。</p>

<h5>2. 中心极限定理的应用</h5>

<p><strong>棣莫弗-拉普拉斯定理（二项分布的正态近似）：</strong></p>
<p>若 <span class="formula-inline" data-latex="X \\sim B(n, p)"></span>，当 <span class="formula-inline" data-latex="n"></span> 较大时，</p>

<div class="formula-block" data-latex="X \\approx N(np, np(1-p))"></div>

<p>即 <span class="formula-inline" data-latex="\\frac{X - np}{\\sqrt{np(1-p)}} \\approx N(0, 1)"></span>。</p>

<h4>📘 例题 1：二项分布的正态近似</h4>

<div class="example">
  <p><strong>题目：</strong> 某厂产品次品率为 0.05，随机抽取 100 件产品，求次品数超过 8 件的概率近似值。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="X \\sim B(100, 0.05)"></span></p>
  <p><span class="formula-inline" data-latex="E(X) = np = 5, Var(X) = np(1-p) = 4.75, \\sigma = \\sqrt{4.75} \\approx 2.179"></span></p>
  <p>由中心极限定理，<span class="formula-inline" data-latex="X \\approx N(5, 4.75)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X > 8) \\approx P\\left( Z > \\frac{8 - 5}{2.179} \\right) = P(Z > 1.377) = 1 - \\Phi(1.377) \\approx 0.084"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\approx 0.084"></span></p>
</div>

<h5>3. 连续性修正</h5>

<p>用正态分布近似离散分布时，通常进行<strong>连续性修正</strong>：</p>
<div class="formula-block" data-latex="P(X \\le k) \\approx \\Phi\\left(\\frac{k + 0.5 - np}{\\sqrt{np(1-p)}}\\right)"></div>
<div class="formula-block" data-latex="P(X \\ge k) \\approx 1 - \\Phi\\left(\\frac{k - 0.5 - np}{\\sqrt{np(1-p)}}\\right)"></div>

<h4>📘 例题 2：连续性修正</h4>

<div class="example">
  <p><strong>题目：</strong> 用中心极限定理（含连续性修正）求 <span class="formula-inline" data-latex="P(X \\le 12)"></span>，其中 <span class="formula-inline" data-latex="X \\sim B(100, 0.1)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="np = 10, \\sqrt{np(1-p)} = \\sqrt{9} = 3"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X \\le 12) \\approx \\Phi\\left(\\frac{12 + 0.5 - 10}{3}\\right) = \\Phi\\left(\\frac{2.5}{3}\\right) = \\Phi(0.833) \\approx 0.798"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\approx 0.798"></span></p>
</div>

<h5>4. 中心极限定理的意义</h5>

<p>中心极限定理的重要性体现在：</p>
<ul>
  <li><strong>正态分布的普适性：</strong> 解释了为什么正态分布如此常见</li>
  <li><strong>统计推断的基础：</strong> 大样本下可以用正态分布近似</li>
  <li><strong>质量控制：</strong> 控制图中的正态近似</li>
</ul>

<h5>5. 中心极限定理总结</h5>

<table>
  <tr>
    <th>定理</th>
    <th>条件</th>
    <th>结论</th>
  </tr>
  <tr>
    <td><strong>林德伯格-莱维</strong></td>
    <td>独立同分布，方差有限</td>
    <td><span class="formula-inline" data-latex="\\overline{X}_n \\approx N(\\mu, \\sigma^2/n)"></span></td>
  </tr>
  <tr>
    <td><strong>棣莫弗-拉普拉斯</strong></td>
    <td>二项分布，n 较大</td>
    <td><span class="formula-inline" data-latex="B(n,p) \\approx N(np, np(1-p))"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 中心极限定理是概率论中最深刻的定理之一。它揭示了大量独立随机因素叠加后趋向正态分布的普遍规律，为统计推断提供了理论基础。在样本量足够大时，无论原始分布是什么，样本均值的分布都近似为正态分布。
  </p>
</div>
`;