window.SECTION_CONTENT = `
<h4>📐 大数定律</h4>

<p>大数定律是概率论中最基本的极限定理之一。它阐述了大量随机现象的平均结果具有稳定性——随着试验次数的增加，频率趋于概率，平均值趋于期望。</p>

<h5>1. 大数定律的直观理解</h5>

<p>大数定律的核心思想是：当试验次数 <span class="formula-inline" data-latex="n"></span> 足够大时，随机变量的算术平均值会稳定在其期望附近。</p>

<p>例如，抛硬币 <span class="formula-inline" data-latex="n"></span> 次，正面出现的频率 <span class="formula-inline" data-latex="f_n = n_A/n"></span> 会趋近于 <span class="formula-inline" data-latex="1/2"></span>。</p>

<h5>2. 大数定律的数学表述</h5>

<p><strong>辛钦大数定律：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是独立同分布的随机变量，且 <span class="formula-inline" data-latex="E(X_i) = \\mu"></span>，则对任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，有</p>

<div class="formula-block" data-latex="\\lim_{n \\to \\infty} P\\left( \\left| \\frac{1}{n} \\sum_{i=1}^{n} X_i - \\mu \\right| < \\varepsilon \\right) = 1"></div>

<p>即 <span class="formula-inline" data-latex="\\overline{X}_n = \\frac{1}{n} \\sum X_i"></span> 依概率收敛于 <span class="formula-inline" data-latex="\\mu"></span>。</p>

<p><strong>伯努利大数定律：</strong> 设 <span class="formula-inline" data-latex="f_n"></span> 是 <span class="formula-inline" data-latex="n"></span> 次独立重复试验中事件 <span class="formula-inline" data-latex="A"></span> 发生的频率，<span class="formula-inline" data-latex="p"></span> 是事件 <span class="formula-inline" data-latex="A"></span> 发生的概率，则对任意 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，</p>

<div class="formula-block" data-latex="\\lim_{n \\to \\infty} P(|f_n - p| < \\varepsilon) = 1"></div>

<h4>📘 例题 1：大数定律的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 独立同分布，<span class="formula-inline" data-latex="E(X_i) = 3, Var(X_i) = 4"></span>。用切比雪夫不等式估计 <span class="formula-inline" data-latex="n"></span> 至少多大时，<span class="formula-inline" data-latex="P(\\left| \\overline{X}_n - 3 \\right| < 0.1) \\ge 0.95"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="E(\\overline{X}_n) = 3, Var(\\overline{X}_n) = 4/n"></span></p>
  <p>由切比雪夫不等式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(|\\overline{X}_n - 3| < 0.1) \\ge 1 - \\frac{4/n}{0.1^2} = 1 - \\frac{4/n}{0.01} = 1 - \\frac{400}{n}"></span>
  </p>
  <p>要求 <span class="formula-inline" data-latex="1 - 400/n \\ge 0.95 \\Rightarrow 400/n \\le 0.05 \\Rightarrow n \\ge 8000"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="n \\ge 8000"></span></p>
</div>

<h5>3. 大数定律的意义</h5>

<p>大数定律的重要性体现在：</p>
<ul>
  <li><strong>频率稳定性的理论保证：</strong> 解释了为什么可以用频率估计概率</li>
  <li><strong>统计推断的基础：</strong> 可以用样本均值估计总体均值</li>
  <li><strong>蒙特卡洛方法：</strong> 通过大量随机模拟近似计算复杂积分</li>
</ul>

<h5>4. 大数定律总结</h5>

<table>
  <tr>
    <th>定律</th>
    <th>条件</th>
    <th>结论</th>
  </tr>
  <tr>
    <td><strong>辛钦大数定律</strong></td>
    <td>独立同分布，期望存在</td>
    <td><span class="formula-inline" data-latex="\\overline{X}_n \\xrightarrow{P} \\mu"></span></td>
  </tr>
  <tr>
    <td><strong>伯努利大数定律</strong></td>
    <td>独立重复试验</td>
    <td><span class="formula-inline" data-latex="f_n \\xrightarrow{P} p"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 大数定律是概率论中最基本的极限定理之一。它从理论上保证了"频率稳定于概率"这一统计直觉的正确性，是数理统计中参数估计和假设检验的理论基础。大数定律也是蒙特卡洛方法的理论依据。
  </p>
</div>
`;