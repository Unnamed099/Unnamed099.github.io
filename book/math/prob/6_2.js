window.SECTION_CONTENT = `
<h4>📐 统计量与抽样分布</h4>

<p>从样本中提取信息需要借助统计量。统计量是样本的函数，它包含了样本中关于总体的信息。抽样分布则是统计量的分布，是进行统计推断的基础。</p>

<h5>1. 统计量的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是来自总体 <span class="formula-inline" data-latex="X"></span> 的样本，若函数 <span class="formula-inline" data-latex="g(X_1, X_2, \\cdots, X_n)"></span> 不依赖于任何未知参数，则称 <span class="formula-inline" data-latex="g(\\cdot)"></span> 为<strong>统计量</strong>。</p>

<h4>📘 例题 1：判断是否为统计量</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是来自正态总体 <span class="formula-inline" data-latex="N(\\mu, \\sigma^2)"></span> 的样本，判断以下是否为统计量：</p>
  <p>（1）<span class="formula-inline" data-latex="\\overline{X} = \\frac{1}{n}\\sum X_i"></span>；（2）<span class="formula-inline" data-latex="\\sum (X_i - \\mu)^2"></span>；（3）<span class="formula-inline" data-latex="\\sum (X_i - \\overline{X})^2"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>（1）</strong> <span class="formula-inline" data-latex="\\overline{X}"></span> 不含未知参数，是统计量。</p>
  <p><strong>（2）</strong> <span class="formula-inline" data-latex="\\mu"></span> 是未知参数，不是统计量。</p>
  <p><strong>（3）</strong> <span class="formula-inline" data-latex="\\sum (X_i - \\overline{X})^2"></span> 不含未知参数，是统计量。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> （1）是，（2）不是，（3）是</p>
</div>

<h5>2. 常用统计量</h5>

<p><strong>（1）样本均值</strong></p>
<div class="formula-block" data-latex="\\overline{X} = \\frac{1}{n} \\sum_{i=1}^{n} X_i"></div>

<p><strong>（2）样本方差</strong></p>
<div class="formula-block" data-latex="S^2 = \\frac{1}{n-1} \\sum_{i=1}^{n} (X_i - \\overline{X})^2"></div>

<p>（注意：分母为 <span class="formula-inline" data-latex="n-1"></span>，称为<strong>无偏方差</strong>）</p>

<p><strong>（3）样本标准差</strong></p>
<div class="formula-block" data-latex="S = \\sqrt{S^2}"></div>

<p><strong>（4）样本 k 阶原点矩</strong></p>
<div class="formula-block" data-latex="A_k = \\frac{1}{n} \\sum_{i=1}^{n} X_i^k"></div>

<p><strong>（5）样本 k 阶中心矩</strong></p>
<div class="formula-block" data-latex="B_k = \\frac{1}{n} \\sum_{i=1}^{n} (X_i - \\overline{X})^k"></div>

<h5>3. 抽样分布</h5>

<p><strong>定义：</strong> 统计量的分布称为<strong>抽样分布</strong>。</p>

<p>常见的抽样分布有：</p>

<table>
  <tr>
    <th>分布名称</th>
    <th>构造方式</th>
    <th>自由度</th>
  </tr>
  <tr>
    <td><strong>χ² 分布</strong></td>
    <td><span class="formula-inline" data-latex="\\sum_{i=1}^{n} Z_i^2, Z_i \\sim N(0,1)"></span></td>
    <td><span class="formula-inline" data-latex="n"></span></td>
  </tr>
  <tr>
    <td><strong>t 分布</strong></td>
    <td><span class="formula-inline" data-latex="Z / \\sqrt{\\chi^2/n}, Z \\sim N(0,1)"></span></td>
    <td><span class="formula-inline" data-latex="n"></span></td>
  </tr>
  <tr>
    <td><strong>F 分布</strong></td>
    <td><span class="formula-inline" data-latex="(\\chi_1^2/n_1) / (\\chi_2^2/n_2)"></span></td>
    <td><span class="formula-inline" data-latex="(n_1, n_2)"></span></td>
  </tr>
</table>

<h4>📘 例题 2：常用统计量的计算</h4>

<div class="example">
  <p><strong>题目：</strong> 样本数据：2, 4, 6, 8, 10，求 <span class="formula-inline" data-latex="\\overline{X}"></span> 和 <span class="formula-inline" data-latex="S^2"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\overline{X} = \\frac{2+4+6+8+10}{5} = \\frac{30}{5} = 6"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="S^2 = \\frac{1}{4}[(2-6)^2 + (4-6)^2 + (6-6)^2 + (8-6)^2 + (10-6)^2]"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{4}(16 + 4 + 0 + 4 + 16) = \\frac{40}{4} = 10"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\overline{X} = 6, S^2 = 10"></span></p>
</div>

<h5>4. 统计量总结</h5>

<table>
  <tr>
    <th>统计量</th>
    <th>公式</th>
    <th>作用</th>
  </tr>
  <tr>
    <td><strong>样本均值</strong></td>
    <td><span class="formula-inline" data-latex="\\overline{X} = \\frac{1}{n}\\sum X_i"></span></td>
    <td>估计总体均值</td>
  </tr>
  <tr>
    <td><strong>样本方差</strong></td>
    <td><span class="formula-inline" data-latex="S^2 = \\frac{1}{n-1}\\sum (X_i - \\overline{X})^2"></span></td>
    <td>估计总体方差</td>
  </tr>
  <tr>
    <td><strong>样本标准差</strong></td>
    <td><span class="formula-inline" data-latex="S = \\sqrt{S^2}"></span></td>
    <td>估计总体标准差</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 统计量是连接样本与总体的桥梁。样本均值和样本方差是最重要的两个统计量，它们分别用于估计总体的期望和方差。抽样分布理论则告诉我们统计量的概率性质，是区间估计和假设检验的基础。
  </p>
</div>
`;