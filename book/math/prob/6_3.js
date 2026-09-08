window.SECTION_CONTENT = `
<h4>📐 正态总体下的抽样分布</h4>

<p>当总体服从正态分布时，一些重要统计量的抽样分布具有精确的形式。这些分布是区间估计和假设检验的理论基础。</p>

<h5>1. 正态总体样本均值的分布</h5>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是来自正态总体 <span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span> 的样本，则</p>

<div class="formula-block" data-latex="\\overline{X} \\sim N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)"></div>

<p>标准化后：</p>

<div class="formula-block" data-latex="\\frac{\\overline{X} - \\mu}{\\sigma/\\sqrt{n}} \\sim N(0, 1)"></div>

<h4>📘 例题 1：样本均值的分布</h4>

<div class="example">
  <p><strong>题目：</strong> 从 <span class="formula-inline" data-latex="N(100, 25)"></span> 中抽取 <span class="formula-inline" data-latex="n = 25"></span> 的样本，求 <span class="formula-inline" data-latex="P(\\overline{X} > 102)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\overline{X} \\sim N(100, 25/25) = N(100, 1)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(\\overline{X} > 102) = P\\left( Z > \\frac{102-100}{1} \\right) = P(Z > 2) = 1 - \\Phi(2) \\approx 0.0228"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\approx 0.0228"></span></p>
</div>

<h5>2. χ² 分布</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="Z_1, Z_2, \\cdots, Z_n"></span> 相互独立且 <span class="formula-inline" data-latex="Z_i \\sim N(0, 1)"></span>，则</p>

<div class="formula-block" data-latex="\\chi^2 = \\sum_{i=1}^{n} Z_i^2 \\sim \\chi^2(n)"></div>

<p>称为自由度为 <span class="formula-inline" data-latex="n"></span> 的<strong>卡方分布</strong>。</p>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 来自 <span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span>，则</p>

<div class="formula-block" data-latex="\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2(n-1)"></div>

<h5>3. t 分布</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="Z \\sim N(0, 1)"></span>，<span class="formula-inline" data-latex="U \\sim \\chi^2(n)"></span>，且 <span class="formula-inline" data-latex="Z, U"></span> 独立，则</p>

<div class="formula-block" data-latex="T = \\frac{Z}{\\sqrt{U/n}} \\sim t(n)"></div>

<p>称为自由度为 <span class="formula-inline" data-latex="n"></span> 的<strong>t 分布</strong>。</p>

<p><strong>重要结果：</strong> 当 <span class="formula-inline" data-latex="\\sigma^2"></span> 未知时，</p>

<div class="formula-block" data-latex="T = \\frac{\\overline{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1)"></div>

<h4>📘 例题 2：t 分布的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 从正态总体中抽取 <span class="formula-inline" data-latex="n = 16"></span> 的样本，已知 <span class="formula-inline" data-latex="\\overline{X} = 10, S = 2"></span>，求 <span class="formula-inline" data-latex">\\mu</span> 的 95% 置信区间。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="t_{0.025}(15) \\approx 2.131"></span></p>
  <p>置信区间为：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\overline{X} \\pm t_{\\alpha/2}(n-1) \\cdot \\frac{S}{\\sqrt{n}} = 10 \\pm 2.131 \\times \\frac{2}{\\sqrt{16}}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 10 \\pm 2.131 \\times 0.5 = 10 \\pm 1.0655"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="[8.9345, 11.0655]"></span></p>
</div>

<h5>4. F 分布</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="U \\sim \\chi^2(n_1)"></span>，<span class="formula-inline" data-latex="V \\sim \\chi^2(n_2)"></span>，且 <span class="formula-inline" data-latex="U, V"></span> 独立，则</p>

<div class="formula-block" data-latex="F = \\frac{U/n_1}{V/n_2} \\sim F(n_1, n_2)"></div>

<p>称为自由度为 <span class="formula-inline" data-latex="(n_1, n_2)"></span> 的<strong>F 分布</strong>。</p>

<p>F 分布主要用于两个正态总体方差比的检验。</p>

<h5>5. 三大抽样分布总结</h5>

<table>
  <tr>
    <th>分布</th>
    <th>记号</th>
    <th>构造方式</th>
    <th>应用</th>
  </tr>
  <tr>
    <td><strong>χ² 分布</strong></td>
    <td><span class="formula-inline" data-latex="\\chi^2(n)"></span></td>
    <td><span class="formula-inline" data-latex="\\sum Z_i^2"></span></td>
    <td>方差估计、拟合优度</td>
  </tr>
  <tr>
    <td><strong>t 分布</strong></td>
    <td><span class="formula-inline" data-latex="t(n)"></span></td>
    <td><span class="formula-inline" data-latex="Z / \\sqrt{U/n}"></span></td>
    <td>均值检验（方差未知）</td>
  </tr>
  <tr>
    <td><strong>F 分布</strong></td>
    <td><span class="formula-inline" data-latex="F(n_1, n_2)"></span></td>
    <td><span class="formula-inline" data-latex="(U/n_1)/(V/n_2)"></span></td>
    <td>方差比检验、ANOVA</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 正态总体下的抽样分布是数理统计推断的理论基石。χ² 分布、t 分布和 F 分布是统计推断中最常用的三个分布。它们分别用于方差估计、均值检验和方差比检验，构成了经典统计推断的完整体系。
  </p>
</div>
`;