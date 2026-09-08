window.SECTION_CONTENT = `
<h4>📐 向量组的秩</h4>

<p>向量组的秩是描述向量组"规模"的重要概念，它等于向量组中极大线性无关组所含向量的个数。向量组的秩是矩阵秩概念的推广，两者本质上是统一的。</p>

<h5>1. 极大线性无关组</h5>

<p><strong>定义：</strong> 在向量组 <span class="formula-inline" data-latex="A: \\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span> 中，若存在一个部分组 <span class="formula-inline" data-latex="B: \\alpha_{i_1}, \\alpha_{i_2}, \\cdots, \\alpha_{i_r}"></span> 满足：</p>

<ul>
  <li><span class="formula-inline" data-latex="B"></span> 线性无关</li>
  <li><span class="formula-inline" data-latex="A"></span> 中任意一个向量都可以由 <span class="formula-inline" data-latex="B"></span> 线性表示</li>
</ul>

<p>则称 <span class="formula-inline" data-latex="B"></span> 是向量组 <span class="formula-inline" data-latex="A"></span> 的一个<strong>极大线性无关组</strong>。</p>

<p><strong>向量组的秩：</strong> 极大线性无关组所含向量的个数，记作 <span class="formula-inline" data-latex="r(\\alpha_1, \\alpha_2, \\cdots, \\alpha_m)"></span>。</p>

<h5>2. 向量组的秩与矩阵的秩</h5>

<p><strong>定理：</strong> 矩阵的秩等于其行向量组的秩，也等于其列向量组的秩。</p>

<p>因此，求向量组的秩可以转化为求矩阵的秩。</p>

<h4>📘 例题 1：求向量组的秩</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\alpha_1 = (1, 2, 3), \\alpha_2 = (2, 4, 6), \\alpha_3 = (1, 1, 1)"></span> 的秩。</p>
  
  <p><strong>解：</strong></p>
  <p>以向量组为行构造矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 1 & 1 & 1 \\end{pmatrix}"></span>
  </p>
  <p>进行初等行变换：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_2 - 2r_1} \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 1 & 1 & 1 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - r_1} \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & -1 & -2 \\end{pmatrix}"></span>
  </p>
  <p>非零行有 2 行。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 秩为 <strong>2</strong></p>
</div>

<h5>3. 向量组的秩的性质</h5>

<p><strong>性质 1：</strong> 向量组 <span class="formula-inline" data-latex="A"></span> 的秩等于其极大线性无关组所含向量的个数。</p>
<p><strong>性质 2：</strong> 向量组 <span class="formula-inline" data-latex="A"></span> 线性无关 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) = m"></span>（<span class="formula-inline" data-latex="m"></span> 为向量个数）。</p>
<p><strong>性质 3：</strong> 若向量组 <span class="formula-inline" data-latex="A"></span> 能由向量组 <span class="formula-inline" data-latex="B"></span> 线性表示，则 <span class="formula-inline" data-latex="r(A) \\le r(B)"></span>。</p>
<p><strong>性质 4：</strong> 等价的向量组有相同的秩。</p>

<h4>📘 例题 2：求极大线性无关组</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\alpha_1 = (1, 0, 1), \\alpha_2 = (0, 1, 1), \\alpha_3 = (1, 1, 2)"></span> 的一个极大线性无关组。</p>
  
  <p><strong>解：</strong></p>
  <p>构造矩阵并化为阶梯形：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - r_1} \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - r_2} \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}"></span>
  </p>
  <p>非零行对应 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\{\\alpha_1, \\alpha_2\\}"></span> 是一个极大线性无关组</p>
</div>

<h5>4. 向量组秩的求法步骤</h5>

<ol>
  <li>将向量组作为行（或列）构成矩阵</li>
  <li>用初等行变换将矩阵化为行阶梯形</li>
  <li>非零行的行数即为向量组的秩</li>
  <li>非零行对应的原向量构成一个极大线性无关组</li>
</ol>

<h5>5. 向量组的秩总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>求法</th>
  </tr>
  <tr>
    <td><strong>极大线性无关组</strong></td>
    <td>线性无关且能表示整个向量组</td>
    <td>从阶梯形中找</td>
  </tr>
  <tr>
    <td><strong>向量组的秩</strong></td>
    <td>极大无关组中向量的个数</td>
    <td>矩阵的秩</td>
  </tr>
  <tr>
    <td><strong>行秩</strong></td>
    <td>行向量组的秩</td>
    <td>行向量组的极大无关组</td>
  </tr>
  <tr>
    <td><strong>列秩</strong></td>
    <td>列向量组的秩</td>
    <td>列向量组的极大无关组</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 向量组的秩是线性代数中的核心概念，它统一了矩阵秩和向量组线性无关性的度量。秩反映了向量组中"独立"向量的最大数量，是判断向量组能否生成整个空间的关键指标。
  </p>
</div>
`;