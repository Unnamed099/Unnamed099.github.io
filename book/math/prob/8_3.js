window.SECTION_CONTENT = `
<h4>📐 正态总体方差的假设检验</h4>

<p>除了均值的检验，在实际问题中我们也经常需要检验总体的方差。例如，检验生产过程的稳定性、产品质量的一致性等。方差的检验主要使用 χ² 分布和 F 分布。</p>

<h5>1. 单个正态总体方差的检验</h5>

<p><strong>检验 <span class="formula-inline" data-latex="H_0: \\sigma^2 = \\sigma_0^2"></span></strong></p>

<p>检验统计量为</p>
<div class="formula-block" data-latex="\\chi^2 = \\frac{(n-1)S^2}{\\sigma_0^2} \\sim \\chi^2(n-1)"></div>

<p><strong>拒绝域：</strong></p>
<ul>
  <li>双边检验 <span class="formula-inline" data-latex="H_1: \\sigma^2 \\neq \\sigma_0^2">：</span> <span class="formula-inline" data-latex="\\chi^2 < \\chi^2_{1-\\alpha/2}(n-1)"></span> 或 <span class="formula-inline" data-latex="\\chi^2 > \\chi^2_{\\alpha/2}(n-1)"></span></li>
  <li>单边检验 <span class="formula-inline" data-latex="H_1: \\sigma^2 > \\sigma_0^2">：</span> <span class="formula-inline" data-latex="\\chi^2 > \\chi^2_{\\alpha}(n-1)"></span></li>
  <li>单边检验 <span class="formula-inline" data-latex="H_1: \\sigma^2 < \\sigma_0^2">：</span> <span class="formula-inline" data-latex="\\chi^2 < \\chi^2_{1-\\alpha}(n-1)"></span></li>
</ul>

<h4>📘 例题 1：单个正态总体方差的检验</h4>

<div class="example">
  <p><strong>题目：</strong> 某机器生产的产品重量方差应不超过 4（<span class="formula-inline" data-latex="\\sigma_0^2 = 4"></span>）。随机抽取 16 件产品，算得 <span class="formula-inline" data-latex="S^2 = 6.25"></span>。在 <span class="formula-inline" data-latex="\\alpha = 0.05"></span> 下，检验方差是否超标。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="H_0: \\sigma^2 = 4, H_1: \\sigma^2 > 4"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\chi^2 = \\frac{(16-1) \\times 6.25}{4} = \\frac{93.75}{4} = 23.4375"></span>
  </p>
  <p><span class="formula-inline" data-latex="\\chi^2_{0.05}(15) \\approx 24.996"></span></p>
  <p>因为 <span class="formula-inline" data-latex="\\chi^2 = 23.4375 < 24.996"></span>，不拒绝 <span class="formula-inline" data-latex="H_0"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 没有充分证据表明方差超标</p>
</div>

<h5>2. 两个正态总体方差的比较——F 检验</h5>

<p><strong>检验 <span class="formula-inline" data-latex="H_0: \\sigma_1^2 = \\sigma_2^2"></span></strong></p>

<p>检验统计量为</p>
<div class="formula-block" data-latex="F = \\frac{S_1^2}{S_2^2} \\sim F(n_1 - 1, n_2 - 1)"></div>

<p><strong>拒绝域：</strong></p>
<ul>
  <li>双边检验：<span class="formula-inline" data-latex="F > F_{\\alpha/2}(n_1-1, n_2-1)"></span> 或 <span class="formula-inline" data-latex="F < F_{1-\\alpha/2}(n_1-1, n_2-1)"></span></li>
  <li>单边检验 <span class="formula-inline" data-latex="H_1: \\sigma_1^2 > \\sigma_2^2">：</span> <span class="formula-inline" data-latex="F > F_{\\alpha}(n_1-1, n_2-1)"></span></li>
</ul>

<h4>📘 例题 2：F 检验</h4>

<div class="example">
  <p><strong>题目：</strong> 比较两种生产方法的稳定性。从方法 A 抽取 <span class="formula-inline" data-latex="n_1 = 10"></span> 件产品，<span class="formula-inline" data-latex="S_1^2 = 16"></span>；方法 B 抽取 <span class="formula-inline" data-latex="n_2 = 12"></span> 件，<span class="formula-inline" data-latex="S_2^2 = 9"></span>。在 <span class="formula-inline" data-latex="\\alpha = 0.05"></span> 下，检验两种方法的方差是否相等。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="H_0: \\sigma_1^2 = \\sigma_2^2, H_1: \\sigma_1^2 \\neq \\sigma_2^2"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F = \\frac{16}{9} \\approx 1.778"></span>
  </p>
  <p><span class="formula-inline" data-latex="F_{0.025}(9, 11) \\approx 3.59, F_{0.975}(9, 11) = 1/F_{0.025}(11, 9) \\approx 1/3.91 \\approx 0.256"></span></p>
  <p>因为 <span class="formula-inline" data-latex="0.256 < F = 1.778 < 3.59"></span>，不拒绝 <span class="formula-inline" data-latex="H_0"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 两总体方差无显著差异</p>
</div>

<h5>3. 方差检验总结</h5>

<table>
  <tr>
    <th>情形</th>
    <th>检验统计量</th>
    <th>分布</th>
    <th>自由度</th>
  </tr>
  <tr>
    <td><strong>单个总体方差</strong></td>
    <td><span class="formula-inline" data-latex="\\chi^2 = (n-1)S^2/\\sigma_0^2"></span></td>
    <td><span class="formula-inline" data-latex="\\chi^2(n-1)"></span></td>
    <td><span class="formula-inline" data-latex="n-1"></span></td>
  </tr>
  <tr>
    <td><strong>两个总体方差比</strong></td>
    <td><span class="formula-inline" data-latex="F = S_1^2/S_2^2"></span></td>
    <td><span class="formula-inline" data-latex="F(n_1-1, n_2-1)"></span></td>
    <td><span class="formula-inline" data-latex="(n_1-1, n_2-1)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 正态总体方差的假设检验是质量控制和过程改进中的重要工具。单个总体方差用 χ² 检验，两个总体方差比较用 F 检验。F 检验也是方差分析（ANOVA）的基础，在实验设计中有着广泛的应用。
  </p>
</div>
`;