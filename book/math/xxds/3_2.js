window.SECTION_CONTENT = `
<h4>📐 向量组的线性相关性</h4>

<p>向量组的线性相关性是描述向量之间"冗余"关系的概念。如果一个向量组中存在一个向量可以由其他向量线性表示，则称该向量组线性相关；否则称为线性无关。这是向量空间理论的核心概念之一。</p>

<h5>1. 线性相关与线性无关的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span> 是 <span class="formula-inline" data-latex="n"></span> 维向量组。若存在不全为零的数 <span class="formula-inline" data-latex="k_1, k_2, \\cdots, k_m"></span>，使得</p>

<div class="formula-block" data-latex="k_1 \\alpha_1 + k_2 \\alpha_2 + \\cdots + k_m \\alpha_m = \\mathbf{0}"></div>

<p>则称向量组<strong>线性相关</strong>；否则，若只有当 <span class="formula-inline" data-latex="k_1 = k_2 = \\cdots = k_m = 0"></span> 时上式才成立，则称向量组<strong>线性无关</strong>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 线性相关 ⇔ 至少有一个向量可由其余向量线性表示</p>
  <p>• 线性无关 ⇔ 没有一个向量可由其余向量线性表示</p>
  <p>• 单个零向量线性相关；单个非零向量线性无关</p>
</div>

<h5>2. 线性相关性的判定方法</h5>

<p><strong>方法一：定义法</strong></p>
<p>设 <span class="formula-inline" data-latex="k_1 \\alpha_1 + \\cdots + k_m \\alpha_m = 0"></span>，判断齐次方程组是否有非零解。</p>

<p><strong>方法二：矩阵秩法</strong></p>
<p>以向量组为列（或行）构造矩阵 <span class="formula-inline" data-latex="A"></span>，则：</p>
<ul>
  <li>线性无关 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) = m"></span>（向量的个数）</li>
  <li>线性相关 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) < m"></span></li>
</ul>

<p><strong>方法三：行列式法（方阵情况）</strong></p>
<p>若 <span class="formula-inline" data-latex="m = n"></span>，向量组线性无关 <span class="formula-inline" data-latex="\\Leftrightarrow |A| \\neq 0"></span>。</p>

<h4>📘 例题 1：判断向量组的线性相关性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\alpha_1 = (1, 2, 3), \\alpha_2 = (2, 4, 6), \\alpha_3 = (3, 6, 9)"></span> 是否线性相关。</p>
  
  <p><strong>解：</strong></p>
  <p>观察可知 <span class="formula-inline" data-latex="\\alpha_2 = 2\\alpha_1, \\alpha_3 = 3\\alpha_1"></span>。</p>
  <p>所以存在非零系数，如 <span class="formula-inline" data-latex="2\\alpha_1 - \\alpha_2 + 0\\alpha_3 = 0"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 线性相关</p>
</div>

<h4>📘 例题 2：用矩阵秩判断线性相关性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\alpha_1 = (1, 0, 0), \\alpha_2 = (0, 1, 0), \\alpha_3 = (0, 0, 1)"></span> 是否线性相关。</p>
  
  <p><strong>解：</strong></p>
  <p>构造矩阵 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{pmatrix}"></span></p>
  <p><span class="formula-inline" data-latex="|A| = 1 \\neq 0"></span>，所以 <span class="formula-inline" data-latex="r(A) = 3 = m"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 线性无关</p>
</div>

<h5>3. 线性相关性的重要定理</h5>

<p><strong>定理 1：</strong> 若向量组线性相关，则其中至少有一个向量可由其余向量线性表示。</p>
<p><strong>定理 2：</strong> 若向量组线性无关，则它的任何部分组也线性无关。</p>
<p><strong>定理 3：</strong> 若向量组中有一部分组线性相关，则整个向量组线性相关。</p>
<p><strong>定理 4：</strong> <span class="formula-inline" data-latex="n+1"></span> 个 <span class="formula-inline" data-latex="n"></span> 维向量一定线性相关。</p>

<h4>📘 例题 3：向量个数与维数的关系</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\alpha_1 = (1, 1), \\alpha_2 = (1, 2), \\alpha_3 = (2, 3)"></span> 是否线性相关。</p>
  
  <p><strong>解：</strong></p>
  <p>这里有 3 个 2 维向量，由定理 4，<span class="formula-inline" data-latex="n+1 = 3"></span> 个 2 维向量一定线性相关。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 线性相关</p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 事实上，<span class="formula-inline" data-latex="\\alpha_3 = \\alpha_1 + \\alpha_2"></span>。</p>
  </div>
</div>

<h5>4. 线性相关性与行列式的关系</h5>

<p>对于 <span class="formula-inline" data-latex="n"></span> 个 <span class="formula-inline" data-latex="n"></span> 维向量 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_n"></span>：</p>
<ul>
  <li>线性无关 <span class="formula-inline" data-latex="\\Leftrightarrow"></span> 以它们为行（或列）的行列式 <span class="formula-inline" data-latex="\\neq 0"></span></li>
  <li>线性相关 <span class="formula-inline" data-latex="\\Leftrightarrow"></span> 行列式 <span class="formula-inline" data-latex="= 0"></span></li>
</ul>

<h5>5. 线性相关性总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>判定方法</th>
  </tr>
  <tr>
    <td><strong>线性相关</strong></td>
    <td>存在非零组合 <span class="formula-inline" data-latex="\\sum k_i \\alpha_i = 0"></span></td>
    <td>秩 <span class="formula-inline" data-latex="<"></span> 个数</td>
  </tr>
  <tr>
    <td><strong>线性无关</strong></td>
    <td>只有零组合 <span class="formula-inline" data-latex="\\sum k_i \\alpha_i = 0"></span></td>
    <td>秩 <span class="formula-inline" data-latex="="></span> 个数</td>
  </tr>
  <tr>
    <td><strong>向量个数 > 维数</strong></td>
    <td>一定线性相关</td>
    <td>定理 4</td>
  </tr>
  <tr>
    <td><strong>方阵情形</strong></td>
    <td>行列式 <span class="formula-inline" data-latex="\\neq 0"></span> 无关，<span class="formula-inline" data-latex="= 0"></span> 相关</td>
    <td>行列式判断</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 向量组的线性相关性是线性代数中最核心的概念之一。它刻画了向量组中是否存在"冗余"向量。线性无关的向量组构成向量空间的基，而线性相关的向量组则可以通过删除冗余向量来简化。理解线性相关性是学习向量空间、矩阵秩等概念的关键。
  </p>
</div>
`;