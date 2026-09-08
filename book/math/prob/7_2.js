window.SECTION_CONTENT = `
<h4>📐 估计量的评选标准</h4>

<p>同一个参数可以有多种不同的估计量，如何选择"好"的估计量？本节介绍评价估计量优劣的三个标准：无偏性、有效性和一致性。</p>

<h5>1. 无偏性</h5>

<p><strong>定义：</strong> 若估计量 <span class="formula-inline" data-latex="\\hat{\\theta}"></span> 的数学期望等于被估计参数 <span class="formula-inline" data-latex="\\theta"></span>，即</p>

<div class="formula-block" data-latex="E(\\hat{\\theta}) = \\theta"></div>

<p>则称 <span class="formula-inline" data-latex="\\hat{\\theta}"></span> 是 <span class="formula-inline" data-latex="\\theta"></span> 的<strong>无偏估计量</strong>。</p>

<p><strong>直观理解：</strong> 无偏性意味着估计量的取值在参数真值附近波动，没有系统性偏差。</p>

<h4>📘 例题 1：判断无偏性</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 来自正态总体 <span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span>，判断 <span class="formula-inline" data-latex="\\overline{X}"></span> 和 <span class="formula-inline" data-latex="S^2 = \\frac{1}{n-1}\\sum (X_i-\\overline{X})^2"></span> 是否为无偏估计。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="E(\\overline{X}) = \\mu"></span>，所以 <span class="formula-inline" data-latex="\\overline{X}"></span> 是 <span class="formula-inline" data-latex="\\mu"></span> 的无偏估计。</p>
  <p><span class="formula-inline" data-latex="E(S^2) = \\sigma^2"></span>，所以 <span class="formula-inline" data-latex="S^2"></span> 是 <span class="formula-inline" data-latex="\\sigma^2"></span> 的无偏估计。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 两者都是无偏估计</p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 若分母为 n，则 <span class="formula-inline" data-latex="E(S_n^2) = (n-1)\\sigma^2/n"></span>，不是无偏估计。</p>
  </div>
</div>

<h5>2. 有效性</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="\\hat{\\theta}_1, \\hat{\\theta}_2"></span> 都是 <span class="formula-inline" data-latex="\\theta"></span> 的无偏估计量，若</p>

<div class="formula-block" data-latex="Var(\\hat{\\theta}_1) \\le Var(\\hat{\\theta}_2)"></div>

<p>则称 <span class="formula-inline" data-latex="\\hat{\\theta}_1"></span> 比 <span class="formula-inline" data-latex="\\hat{\\theta}_2"></span> <strong>更有效</strong>。</p>

<p><strong>直观理解：</strong> 有效性反映了估计量的波动程度。方差越小，估计越精确。</p>

<h4>📘 例题 2：有效性的比较</h4>

<div class="example">
  <p><strong>题目：</strong> 比较 <span class="formula-inline" data-latex="\\overline{X}"></span> 和 <span class="formula-inline" data-latex="X_1"></span> 作为总体均值 <span class="formula-inline" data-latex="\\mu"></span> 的估计量的有效性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="Var(\\overline{X}) = \\sigma^2/n, Var(X_1) = \\sigma^2"></span></p>
  <p>当 <span class="formula-inline" data-latex="n > 1"></span> 时，<span class="formula-inline" data-latex="Var(\\overline{X}) < Var(X_1)"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="\\overline{X}"></span> 比 <span class="formula-inline" data-latex="X_1"></span> 更有效</p>
</div>

<h5>3. 一致性（相合性）</h5>

<p><strong>定义：</strong> 若估计量 <span class="formula-inline" data-latex="\\hat{\\theta}_n"></span> 依概率收敛于 <span class="formula-inline" data-latex="\\theta"></span>，即</p>

<div class="formula-block" data-latex="\\hat{\\theta}_n \\xrightarrow{P} \\theta"></div>

<p>则称 <span class="formula-inline" data-latex="\\hat{\\theta}_n"></span> 是 <span class="formula-inline" data-latex="\\theta"></span> 的<strong>一致估计量</strong>（相合估计量）。</p>

<p><strong>直观理解：</strong> 一致性保证随着样本量增大，估计量越来越接近参数真值。</p>

<h5>4. 评选标准总结</h5>

<table>
  <tr>
    <th>标准</th>
    <th>定义</th>
    <th>意义</th>
  </tr>
  <tr>
    <td><strong>无偏性</strong></td>
    <td><span class="formula-inline" data-latex="E(\\hat{\\theta}) = \\theta"></span></td>
    <td>无系统偏差</td>
  </tr>
  <tr>
    <td><strong>有效性</strong></td>
    <td>方差越小越有效</td>
    <td>估计更精确</td>
  </tr>
  <tr>
    <td><strong>一致性</strong></td>
    <td><span class="formula-inline" data-latex="\\hat{\\theta}_n \\xrightarrow{P} \\theta"></span></td>
    <td>大样本下逼近真值</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 无偏性、有效性和一致性是评价估计量优劣的三个基本标准。无偏性保证没有系统性误差，有效性衡量估计的精度，一致性保证大样本下的可靠性。一个好的估计量应尽可能同时满足这三个标准。
  </p>
</div>
`;