window.SECTION_CONTENT = `
<h4>📐 正态总体均值的假设检验</h4>

<p>正态总体均值的假设检验是实际中最常用的假设检验之一。根据总体方差是否已知，使用不同的检验统计量——Z 检验（方差已知）和 t 检验（方差未知）。</p>

<h5>1. 单个正态总体均值的检验</h5>

<p><strong>情形一：方差 <span class="formula-inline" data-latex="\\sigma^2"></span> 已知——Z 检验</strong></p>
<p>检验 <span class="formula-inline" data-latex="H_0: \\mu = \\mu_0"></span>，检验统计量为</p>
<div class="formula-block" data-latex="Z = \\frac{\\overline{X} - \\mu_0}{\\sigma/\\sqrt{n}} \\sim N(0, 1)"></div>

<p>拒绝域：</p>
<ul>
  <li>双边检验 <span class="formula-inline" data-latex="H_1: \\mu \\neq \\mu_0">：</span> <span class="formula-inline" data-latex="|Z| > z_{\\alpha/2}"></span></li>
  <li>单边检验 <span class="formula-inline" data-latex="H_1: \\mu > \\mu_0">：</span> <span class="formula-inline" data-latex="Z > z_{\\alpha}"></span></li>
  <li>单边检验 <span class="formula-inline" data-latex="H_1: \\mu < \\mu_0">：</span> <span class="formula-inline" data-latex="Z < -z_{\\alpha}"></span></li>
</ul>

<h4>📘 例题 1：Z 检验</h4>

<div class="example">
  <p><strong>题目：</strong> 某食品包装标注重量为 500g。随机抽取 25 袋，平均重量为 498g。已知总体标准差 <span class="formula-inline" data-latex="\\sigma = 5"></span>。在 <span class="formula-inline" data-latex="\\alpha = 0.05"></span> 下，检验包装重量是否达标。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="H_0: \\mu = 500, H_1: \\mu \\neq 500"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="Z = \\frac{498 - 500}{5/\\sqrt{25}} = \\frac{-2}{1} = -2"></span>
  </p>
  <p><span class="formula-inline" data-latex="z_{0.025} = 1.96"></span></p>
  <p>因为 <span class="formula-inline" data-latex="|Z| = 2 > 1.96"></span>，拒绝 <span class="formula-inline" data-latex="H_0"></span>。</p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 包装重量不符合标注（偏轻）</p>
</div>

<h5>2. 单个正态总体均值的 t 检验</h5>

<p><strong>情形二：方差 <span class="formula-inline" data-latex="\\sigma^2"></span> 未知——t 检验</strong></p>
<p>检验 <span class="formula-inline" data-latex="H_0: \\mu = \\mu_0"></span>，检验统计量为</p>
<div class="formula-block" data-latex="T = \\frac{\\overline{X} - \\mu_0}{S/\\sqrt{n}} \\sim t(n-1)"></div>

<p>拒绝域：</p>
<ul>
  <li>双边检验：<span class="formula-inline" data-latex="|T| > t_{\\alpha/2}(n-1)"></span></li>
  <li>单边 <span class="formula-inline" data-latex="H_1: \\mu > \\mu_0">：</span> <span class="formula-inline" data-latex="T > t_{\\alpha}(n-1)"></span></li>
  <li>单边 <span class="formula-inline" data-latex="H_1: \\mu < \\mu_0">：</span> <span class="formula-inline" data-latex="T < -t_{\\alpha}(n-1)"></span></li>
</ul>

<h4>📘 例题 2：t 检验</h4>

<div class="example">
  <p><strong>题目：</strong> 某厂宣称产品平均使用寿命为 1000 小时。随机抽取 16 件，测得 <span class="formula-inline" data-latex="\\overline{X} = 980, S = 30"></span>。在 <span class="formula-inline" data-latex="\\alpha = 0.05"></span> 下，检验该宣称是否可信。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="H_0: \\mu = 1000, H_1: \\mu < 1000"></span>（单边检验）</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="T = \\frac{980 - 1000}{30/\\sqrt{16}} = \\frac{-20}{7.5} = -2.667"></span>
  </p>
  <p><span class="formula-inline" data-latex="t_{0.05}(15) \\approx 1.753"></span></p>
  <p>因为 <span class="formula-inline" data-latex="T = -2.667 < -1.753"></span>，拒绝 <span class="formula-inline" data-latex="H_0"></span>。</p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 寿命显著低于 1000 小时</p>
</div>

<h5>3. 两个正态总体均值的比较</h5>

<p><strong>情形一：方差已知——Z 检验</strong></p>
<p>检验 <span class="formula-inline" data-latex="H_0: \\mu_1 = \\mu_2"></span>，统计量为</p>
<div class="formula-block" data-latex="Z = \\frac{\\overline{X}_1 - \\overline{X}_2}{\\sqrt{\\sigma_1^2/n_1 + \\sigma_2^2/n_2}} \\sim N(0, 1)"></div>

<p><strong>情形二：方差未知但相等——t 检验</strong></p>
<p>检验统计量为</p>
<div class="formula-block" data-latex="T = \\frac{\\overline{X}_1 - \\overline{X}_2}{S_p \\sqrt{1/n_1 + 1/n_2}} \\sim t(n_1 + n_2 - 2)"></div>
<p>其中 <span class="formula-inline" data-latex="S_p^2 = \\frac{(n_1-1)S_1^2 + (n_2-1)S_2^2}{n_1 + n_2 - 2}"></span>（合并方差）</p>

<h5>4. 均值检验总结</h5>

<table>
  <tr>
    <th>情形</th>
    <th>检验统计量</th>
    <th>分布</th>
    <th>条件</th>
  </tr>
  <tr>
    <td><strong>单个总体，σ² 已知</strong></td>
    <td><span class="formula-inline" data-latex="Z = (\\overline{X}-\\mu_0)/(\\sigma/\\sqrt{n})"></span></td>
    <td><span class="formula-inline" data-latex="N(0,1)"></span></td>
    <td>正态总体</td>
  </tr>
  <tr>
    <td><strong>单个总体，σ² 未知</strong></td>
    <td><span class="formula-inline" data-latex="T = (\\overline{X}-\\mu_0)/(S/\\sqrt{n})"></span></td>
    <td><span class="formula-inline" data-latex="t(n-1)"></span></td>
    <td>正态总体</td>
  </tr>
  <tr>
    <td><strong>两个总体，σ₁²,σ₂² 已知</strong></td>
    <td><span class="formula-inline" data-latex="Z = (\\overline{X}_1-\\overline{X}_2)/\\sqrt{\\sigma_1^2/n_1+\\sigma_2^2/n_2}"></span></td>
    <td><span class="formula-inline" data-latex="N(0,1)"></span></td>
    <td>独立正态总体</td>
  </tr>
  <tr>
    <td><strong>两个总体，σ₁²=σ₂² 未知</strong></td>
    <td><span class="formula-inline" data-latex="T = (\\overline{X}_1-\\overline{X}_2)/(S_p\\sqrt{1/n_1+1/n_2})"></span></td>
    <td><span class="formula-inline" data-latex="t(n_1+n_2-2)"></span></td>
    <td>独立正态总体</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 正态总体均值的假设检验是统计学中最常用的检验方法之一。Z 检验适用于方差已知的情形，t 检验适用于方差未知的情形。在实际应用中，总体方差通常未知，因此 t 检验更为常用。
  </p>
</div>
`;