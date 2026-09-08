window.SECTION_CONTENT = `
<h4>📐 概率的定义与性质</h4>

<p>概率是衡量随机事件发生可能性大小的数值。本节介绍概率的统计定义、公理化定义及其基本性质。</p>

<h5>1. 概率的统计定义</h5>

<p><strong>频率：</strong> 在 <span class="formula-inline" data-latex="n"></span> 次重复试验中，事件 <span class="formula-inline" data-latex="A"></span> 发生了 <span class="formula-inline" data-latex="n_A"></span> 次，则</p>

<div class="formula-block" data-latex="f_n(A) = \\frac{n_A}{n}"></div>

<p>称为事件 <span class="formula-inline" data-latex="A"></span> 在这 <span class="formula-inline" data-latex="n"></span> 次试验中发生的<strong>频率</strong>。</p>

<p><strong>概率的统计定义：</strong> 当试验次数 <span class="formula-inline" data-latex="n"></span> 充分大时，频率 <span class="formula-inline" data-latex="f_n(A)"></span> 稳定在某个常数 <span class="formula-inline" data-latex="p"></span> 附近，称 <span class="formula-inline" data-latex="p"></span> 为事件 <span class="formula-inline" data-latex="A"></span> 发生的<strong>概率</strong>。</p>

<h5>2. 概率的公理化定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="E"></span> 是随机试验，<span class="formula-inline" data-latex="\\Omega"></span> 是其样本空间。若对每个事件 <span class="formula-inline" data-latex="A"></span>，定义一个实数 <span class="formula-inline" data-latex="P(A)"></span>，满足以下三条公理：</p>

<p><strong>公理 1（非负性）：</strong> <span class="formula-inline" data-latex="P(A) \\ge 0"></span></p>
<p><strong>公理 2（规范性）：</strong> <span class="formula-inline" data-latex="P(\\Omega) = 1"></span></p>
<p><strong>公理 3（可列可加性）：</strong> 若 <span class="formula-inline" data-latex="A_1, A_2, \\cdots"></span> 两两互斥，则</p>
<div class="formula-block" data-latex="P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)"></div>

<p>则称 <span class="formula-inline" data-latex="P(A)"></span> 为事件 <span class="formula-inline" data-latex="A"></span> 的<strong>概率</strong>。</p>

<h5>3. 概率的基本性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="P(\\varnothing) = 0"></span></p>
<p><strong>性质 2（有限可加性）：</strong> 若 <span class="formula-inline" data-latex="A_1, A_2, \\cdots, A_n"></span> 两两互斥，则</p>
<div class="formula-block" data-latex="P\\left(\\bigcup_{i=1}^{n} A_i\\right) = \\sum_{i=1}^{n} P(A_i)"></div>

<p><strong>性质 3（对立事件）：</strong> <span class="formula-inline" data-latex="P(\\overline{A}) = 1 - P(A)"></span></p>
<p><strong>性质 4（减法公式）：</strong> 若 <span class="formula-inline" data-latex="B \\subset A"></span>，则</p>
<div class="formula-block" data-latex="P(A - B) = P(A) - P(B)"></div>

<p><strong>性质 5（加法公式）：</strong> 对任意事件 <span class="formula-inline" data-latex="A, B"></span>，有</p>
<div class="formula-block" data-latex="P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"></div>

<p>推广到三个事件：</p>
<div class="formula-block" data-latex="P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(A \\cap C) - P(B \\cap C) + P(A \\cap B \\cap C)"></div>

<h4>📘 例题 1：利用概率性质计算</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="P(A) = 0.4, P(B) = 0.3, P(A \\cup B) = 0.6"></span>，求 <span class="formula-inline" data-latex="P(A \\cap B)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>由加法公式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A \\cap B) = P(A) + P(B) - P(A \\cup B)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 0.4 + 0.3 - 0.6 = 0.1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.1"></span></p>
</div>

<h4>📘 例题 2：对立事件的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 从 1 到 100 中任取一个数，求取到的数能被 2 或 3 整除的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="A"></span> 表示"能被 2 整除"，<span class="formula-inline" data-latex="B"></span> 表示"能被 3 整除"。</p>
  <p><span class="formula-inline" data-latex="P(A) = 50/100 = 0.5, P(B) = 33/100 = 0.33"></span></p>
  <p><span class="formula-inline" data-latex="P(A \\cap B) = P(\\text{能被 6 整除}) = 16/100 = 0.16"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A \\cup B) = 0.5 + 0.33 - 0.16 = 0.67"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.67"></span></p>
</div>

<h5>4. 概率的性质总结</h5>

<table>
  <tr>
    <th>性质</th>
    <th>公式</th>
    <th>适用范围</th>
  </tr>
  <tr>
    <td><strong>非负性</strong></td>
    <td><span class="formula-inline" data-latex="P(A) \\ge 0"></span></td>
    <td>任意事件</td>
  </tr>
  <tr>
    <td><strong>规范性</strong></td>
    <td><span class="formula-inline" data-latex="P(\\Omega) = 1"></span></td>
    <td>必然事件</td>
  </tr>
  <tr>
    <td><strong>对立事件</strong></td>
    <td><span class="formula-inline" data-latex="P(\\overline{A}) = 1 - P(A)"></span></td>
    <td>任意事件</td>
  </tr>
  <tr>
    <td><strong>加法公式</strong></td>
    <td><span class="formula-inline" data-latex="P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"></span></td>
    <td>任意两个事件</td>
  </tr>
  <tr>
    <td><strong>有限可加性</strong></td>
    <td><span class="formula-inline" data-latex="P(\\bigcup A_i) = \\sum P(A_i)"></span></td>
    <td>互斥事件</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 概率的公理化定义是概率论的严格基础。由三条公理可以推导出概率的所有基本性质。概率的加法公式是最常用的计算工具之一，尤其适用于计算"至少一个发生"的概率。
  </p>
</div>
`;