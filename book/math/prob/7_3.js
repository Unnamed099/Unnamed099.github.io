window.SECTION_CONTENT = `
<h4>📐 区间估计</h4>

<p>点估计给出参数的一个具体数值，但无法给出估计的可靠程度。区间估计则给出参数的一个可能取值范围（置信区间），并给出该区间包含参数真值的置信水平。</p>

<h5>1. 区间估计的概念</h5>

<p><strong>定义：</strong> 设总体 <span class="formula-inline" data-latex="X"></span> 的分布中含有未知参数 <span class="formula-inline" data-latex="\\theta"></span>，由样本 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 确定两个统计量 <span class="formula-inline" data-latex="\\hat{\\theta}_L = \\hat{\\theta}_L(X_1,\\cdots,X_n)"></span> 和 <span class="formula-inline" data-latex="\\hat{\\theta}_U = \\hat{\\theta}_U(X_1,\\cdots,X_n)"></span>（<span class="formula-inline" data-latex="\\hat{\\theta}_L < \\hat{\\theta}_U"></span>），若对给定的 <span class="formula-inline" data-latex="1 - \\alpha"></span>，有</p>

<div class="formula-block" data-latex="P(\\hat{\\theta}_L \\le \\theta \\le \\hat{\\theta}_U) = 1 - \\alpha"></div>

<p>则称区间 <span class="formula-inline" data-latex="[\\hat{\\theta}_L, \\hat{\\theta}_U]"></span> 为 <span class="formula-inline" data-latex="\\theta"></span> 的<strong>置信水平</strong>为 <span class="formula-inline" data-latex="1 - \\alpha"></span> 的<strong>置信区间</strong>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 置信水平 <span class="formula-inline" data-latex="1 - \\alpha"></span> 表示区间包含真值的概率</p>
  <p>• 常用置信水平：90%（<span class="formula-inline" data-latex="\\alpha = 0.1"></span>）、95%（<span class="formula-inline" data-latex="\\alpha = 0.05"></span>）、99%（<span class="formula-inline" data-latex="\\alpha = 0.01"></span>）</p>
</div>

<h5>2. 单个正态总体均值的置信区间</h5>

<p><strong>情形一：方差 <span class="formula-inline" data-latex="\\sigma^2"></span> 已知</strong></p>
<p>由 <span class="formula-inline" data-latex="\\overline{X} \\sim N(\\mu, \\sigma^2/n)"></span>，得</p>

<div class="formula-block" data-latex="\\overline{X} \\pm z_{\\alpha/2} \\cdot \\frac{\\sigma}{\\sqrt{n}}"></div>

<p><strong>情形二：方差 <span class="formula-inline" data-latex="\\sigma^2"></span> 未知</strong></p>
<p>由 <span class="formula-inline" data-latex="\\frac{\\overline{X} - \\mu}{S/\\sqrt{n}} \\sim t(n-1)"></span>，得</p>

<div class="formula-block" data-latex="\\overline{X} \\pm t_{\\alpha/2}(n-1) \\cdot \\frac{S}{\\sqrt{n}}"></div>

<h4>📘 例题 1：正态总体均值的置信区间</h4>

<div class="example">
  <p><strong>题目：</strong> 从正态总体 <span class="formula-inline" data-latex="N(\\mu, 4)"></span> 中抽取 <span class="formula-inline" data-latex="n = 16"></span> 的样本，算得 <span class="formula-inline" data-latex="\\overline{X} = 10"></span>，求 <span class="formula-inline" data-latex="\\mu"></span> 的 95% 置信区间。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\sigma = 2, z_{0.025} = 1.96"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="10 \\pm 1.96 \\times \\frac{2}{\\sqrt{16}} = 10 \\pm 1.96 \\times 0.5 = 10 \\pm 0.98"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="[9.02, 10.98]"></span></p>
</div>

<h4>📘 例题 2：方差未知时的置信区间</h4>

<div class="example">
  <p><strong>题目：</strong> 从正态总体中抽取 <span class="formula-inline" data-latex="n = 25"></span> 的样本，算得 <span class="formula-inline" data-latex="\\overline{X} = 50, S = 4"></span>，求 <span class="formula-inline" data-latex="\\mu"></span> 的 95% 置信区间。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="t_{0.025}(24) \\approx 2.064"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="50 \\pm 2.064 \\times \\frac{4}{\\sqrt{25}} = 50 \\pm 2.064 \\times 0.8 = 50 \\pm 1.651"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="[48.349, 51.651]"></span></p>
</div>

<h5>3. 单个正态总体方差的置信区间</h5>

<p>由 <span class="formula-inline" data-latex="(n-1)S^2/\\sigma^2 \\sim \\chi^2(n-1)"></span>，得</p>

<div class="formula-block" data-latex="\\left[ \\frac{(n-1)S^2}{\\chi^2_{\\alpha/2}(n-1)}, \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2}(n-1)} \\right]"></div>

<h5>4. 区间估计总结</h5>

<table>
  <tr>
    <th>参数</th>
    <th>条件</th>
    <th>置信区间</th>
  </tr>
  <tr>
    <td><strong>均值 <span class="formula-inline" data-latex="\\mu"></span></strong></td>
    <td><span class="formula-inline" data-latex="\\sigma^2"></span> 已知</td>
    <td><span class="formula-inline" data-latex="\\overline{X} \\pm z_{\\alpha/2} \\sigma/\\sqrt{n}"></span></td>
  </tr>
  <tr>
    <td><strong>均值 <span class="formula-inline" data-latex="\\mu"></span></strong></td>
    <td><span class="formula-inline" data-latex="\\sigma^2"></span> 未知</td>
    <td><span class="formula-inline" data-latex="\\overline{X} \\pm t_{\\alpha/2}(n-1) S/\\sqrt{n}"></span></td>
  </tr>
  <tr>
    <td><strong>方差 <span class="formula-inline" data-latex="\\sigma^2"></span></strong></td>
    <td>正态总体</td>
    <td><span class="formula-inline" data-latex="[(n-1)S^2/\\chi^2_{\\alpha/2}, (n-1)S^2/\\chi^2_{1-\\alpha/2}]"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 区间估计给出了参数的一个可能取值范围，并附带了置信水平的度量。它比点估计提供了更多信息——不仅给出了估计值，还给出了估计的可靠程度。置信区间是统计推断中最常用的工具之一。
  </p>
</div>
`;