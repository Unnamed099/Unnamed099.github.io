window.SECTION_CONTENT = `
<h4>📐 切比雪夫不等式</h4>

<p>切比雪夫不等式是概率论中最基本的极限定理之一。它给出了随机变量在其期望附近的概率下界，不需要知道随机变量的具体分布，只需要知道期望和方差。</p>

<h5>1. 切比雪夫不等式的内容</h5>

<p><strong>定理：</strong> 设随机变量 <span class="formula-inline" data-latex="X"></span> 的数学期望为 <span class="formula-inline" data-latex="\\mu"></span>，方差为 <span class="formula-inline" data-latex="\\sigma^2"></span>，则对任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，有</p>

<div class="formula-block" data-latex="P(|X - \\mu| \\ge \\varepsilon) \\le \\frac{\\sigma^2}{\\varepsilon^2}"></div>

<p>等价形式：</p>
<div class="formula-block" data-latex="P(|X - \\mu| < \\varepsilon) \\ge 1 - \\frac{\\sigma^2}{\\varepsilon^2}"></div>

<p>若令 <span class="formula-inline" data-latex="\\varepsilon = k\\sigma"></span>，则</p>
<div class="formula-block" data-latex="P(|X - \\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}"></div>

<h4>📘 例题 1：切比雪夫不等式的直接应用</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="E(X) = 100, Var(X) = 25"></span>，用切比雪夫不等式估计 <span class="formula-inline" data-latex="P(80 < X < 120)"></span> 的下界。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\mu = 100, \\sigma = 5"></span></p>
  <p><span class="formula-inline" data-latex="P(80 < X < 120) = P(|X - 100| < 20)"></span></p>
  <p>令 <span class="formula-inline" data-latex="\\varepsilon = 20 = 4\\sigma"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(|X - 100| < 20) \\ge 1 - \\frac{25}{20^2} = 1 - \\frac{25}{400} = 1 - 0.0625 = 0.9375"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\ge 0.9375"></span></p>
</div>

<h5>2. 切比雪夫不等式的证明</h5>

<p>设 <span class="formula-inline" data-latex="I_{|X-\\mu| \\ge \\varepsilon}"></span> 为示性函数，则</p>

<div class="formula-block" data-latex="I_{|X-\\mu| \\ge \\varepsilon} \\le \\frac{(X-\\mu)^2}{\\varepsilon^2}"></div>

<p>两边取期望：</p>
<div class="formula-block" data-latex="P(|X-\\mu| \\ge \\varepsilon) \\le \\frac{E[(X-\\mu)^2]}{\\varepsilon^2} = \\frac{\\sigma^2}{\\varepsilon^2}"></div>

<h4>📘 例题 2：切比雪夫不等式的逆用</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="P(|X - \\mu| < 4) \\ge 0.9375"></span>，求 <span class="formula-inline" data-latex="Var(X)"></span> 的最大值。</p>
  
  <p><strong>解：</strong></p>
  <p>由切比雪夫不等式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(|X - \\mu| < 4) \\ge 1 - \\frac{\\sigma^2}{16} \\ge 0.9375"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="1 - \\frac{\\sigma^2}{16} \\ge 0.9375 \\Rightarrow \\frac{\\sigma^2}{16} \\le 0.0625 = \\frac{1}{16} \\Rightarrow \\sigma^2 \\le 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="Var(X) \\le 1"></span></p>
</div>

<h5>3. 切比雪夫不等式的意义</h5>

<p>切比雪夫不等式的意义在于：</p>
<ul>
  <li><strong>普适性：</strong> 对任何具有有限方差的随机变量都成立</li>
  <li><strong>粗估计：</strong> 给出的界通常较粗糙，但不需要知道分布</li>
  <li><strong>理论价值：</strong> 是大数定律和中心极限定理的基础</li>
</ul>

<div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin: 8px 0;">
  <p style="margin: 0; font-size: 0.9rem;">💡 当分布未知时，切比雪夫不等式是唯一可用的工具；当分布已知时，通常可以用更精确的概率计算。</p>
</div>

<h5>4. 切比雪夫不等式总结</h5>

<table>
  <tr>
    <th>形式</th>
    <th>表达式</th>
    <th>含义</th>
  </tr>
  <tr>
    <td><strong>基本形式</strong></td>
    <td><span class="formula-inline" data-latex="P(|X-\\mu| \\ge \\varepsilon) \\le \\sigma^2/\\varepsilon^2"></span></td>
    <td>偏离 ε 以上的概率上界</td>
  </tr>
  <tr>
    <td><strong>等价形式</strong></td>
    <td><span class="formula-inline" data-latex="P(|X-\\mu| < \\varepsilon) \\ge 1 - \\sigma^2/\\varepsilon^2"></span></td>
    <td>落在 ε 内的概率下界</td>
  </tr>
  <tr>
    <td><strong>标准化形式</strong></td>
    <td><span class="formula-inline" data-latex="P(|X-\\mu| \\ge k\\sigma) \\le 1/k^2"></span></td>
    <td>以标准差为单位</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 切比雪夫不等式是概率论中最基础的极限定理。它虽然给出的界较为粗糙，但具有普适性——不需要知道随机变量的分布形式，只需要知道期望和方差。它在大数定律的证明中起着关键作用。
  </p>
</div>
`;