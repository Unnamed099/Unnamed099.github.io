window.SECTION_CONTENT = `
<h4>📐 实对称矩阵的对角化</h4>

<p>实对称矩阵是一类特殊的矩阵，它具有许多优良的性质。最重要的性质是：实对称矩阵一定可以正交对角化。这一性质在统计学、物理学、工程学中有极其广泛的应用。</p>

<h5>1. 实对称矩阵的性质</h5>

<p><strong>定义：</strong> 若 <span class="formula-inline" data-latex="A^T = A"></span>，则称 <span class="formula-inline" data-latex="A"></span> 为<strong>实对称矩阵</strong>。</p>

<p><strong>性质 1：</strong> 实对称矩阵的特征值<strong>全为实数</strong>。</p>
<p><strong>性质 2：</strong> 实对称矩阵的属于不同特征值的特征向量<strong>正交</strong>。</p>
<p><strong>性质 3：</strong> 实对称矩阵<strong>必可正交对角化</strong>。即存在正交矩阵 <span class="formula-inline" data-latex="Q"></span>（<span class="formula-inline" data-latex="Q^T = Q^{-1}"></span>），使得</p>

<div class="formula-block" data-latex="Q^T A Q = \\Lambda = \\text{diag}(\\lambda_1, \\lambda_2, \\cdots, \\lambda_n)"></div>

<h5>2. 正交矩阵</h5>

<p><strong>定义：</strong> 若 <span class="formula-inline" data-latex="Q^T Q = I"></span>（等价于 <span class="formula-inline" data-latex="Q^{-1} = Q^T"></span>），则称 <span class="formula-inline" data-latex="Q"></span> 为<strong>正交矩阵</strong>。</p>

<p>正交矩阵的行（列）向量构成标准正交基。</p>

<h4>📘 例题 1：实对称矩阵的正交对角化</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"></span> 的正交对角化。</p>
  
  <p><strong>解：</strong></p>
  <p>特征值为 <span class="formula-inline" data-latex="\\lambda_1 = 1, \\lambda_2 = 3"></span>。</p>
  <p>特征向量：<span class="formula-inline" data-latex">X_1 = (1, -1)^T</span>（对应 <span class="formula-inline" data-latex="\\lambda_1 = 1"></span>），<span class="formula-inline" data-latex="X_2 = (1, 1)^T</span>（对应 <span class="formula-inline" data-latex="\\lambda_2 = 3"></span>）。</p>
  <p>它们正交：<span class="formula-inline" data-latex="X_1 \\cdot X_2 = 1 \\times 1 + (-1) \\times 1 = 0"></span>。</p>
  
  <p>单位化：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="q_1 = \\frac{1}{\\sqrt{2}}(1, -1)^T, \\quad q_2 = \\frac{1}{\\sqrt{2}}(1, 1)^T"></span>
  </p>
  
  <p>令 <span class="formula-inline" data-latex="Q = (q_1, q_2) = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}"></span>，则</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="Q^T A Q = \\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 正交矩阵 <span class="formula-inline" data-latex="Q = \\frac{1}{\\sqrt{2}} \\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}"></span></p>
</div>

<h4>📘 例题 2：三阶实对称矩阵的正交对角化</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}"></span> 的正交对角化。</p>
  
  <p><strong>解：</strong></p>
  <p>特征值为 <span class="formula-inline" data-latex="\\lambda_1 = 1, \\lambda_2 = 1+\\sqrt{2}, \\lambda_3 = 1-\\sqrt{2}"></span>。</p>
  <p>对应特征向量：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X_1 = (1, 0, -1)^T, \\quad X_2 = (1, \\sqrt{2}, 1)^T, \\quad X_3 = (1, -\\sqrt{2}, 1)^T"></span>
  </p>
  <p>它们两两正交，单位化后得到正交矩阵 <span class="formula-inline" data-latex="Q"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="Q^T A Q = \\text{diag}(1, 1+\\sqrt{2}, 1-\\sqrt{2})"></span></p>
</div>

<h5>3. 施密特正交化</h5>

<p>当实对称矩阵有重特征值时，属于同一特征值的特征向量可能不正交。此时需要用<strong>施密特正交化</strong>方法将其正交化。</p>

<p><strong>施密特正交化步骤：</strong></p>
<p>给定线性无关向量组 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span>，令</p>

<div class="formula-block" data-latex="\\beta_1 = \\alpha_1"></div>
<div class="formula-block" data-latex="\\beta_2 = \\alpha_2 - \\frac{(\\alpha_2, \\beta_1)}{(\\beta_1, \\beta_1)}\\beta_1"></div>
<div class="formula-block" data-latex="\\beta_3 = \\alpha_3 - \\frac{(\\alpha_3, \\beta_1)}{(\\beta_1, \\beta_1)}\\beta_1 - \\frac{(\\alpha_3, \\beta_2)}{(\\beta_2, \\beta_2)}\\beta_2"></div>
<p>⋯</p>
<p>则 <span class="formula-inline" data-latex="\\beta_1, \\beta_2, \\cdots, \\beta_m"></span> 两两正交。</p>

<h5>4. 正交对角化的应用</h5>

<p>正交对角化在以下领域有重要应用：</p>
<ul>
  <li><strong>主成分分析（PCA）：</strong> 数据协方差矩阵的正交对角化</li>
  <li><strong>二次型标准化：</strong> 将二次型化为标准形</li>
  <li><strong>数值稳定性：</strong> 正交变换保持向量的长度和角度，数值稳定性好</li>
  <li><strong>量子力学：</strong> 哈密顿算符的谱分解</li>
</ul>

<h5>5. 实对称矩阵对角化总结</h5>

<table>
  <tr>
    <th>步骤</th>
    <th>操作</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><strong>1. 求特征值</strong></td>
    <td>解特征方程</td>
    <td>全为实数</td>
  </tr>
  <tr>
    <td><strong>2. 求特征向量</strong></td>
    <td>解齐次方程组</td>
    <td>不同特征值对应向量正交</td>
  </tr>
  <tr>
    <td><strong>3. 正交化</strong></td>
    <td>施密特正交化</td>
    <td>同一特征值的向量需正交化</td>
  </tr>
  <tr>
    <td><strong>4. 单位化</strong></td>
    <td>除以模长</td>
    <td>得到标准正交基</td>
  </tr>
  <tr>
    <td><strong>5. 构造 Q</strong></td>
    <td>以单位特征向量为列</td>
    <td><span class="formula-inline" data-latex="Q^T A Q = \\Lambda"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 实对称矩阵的正交对角化是线性代数中最优美、最实用的结果之一。它不仅在理论上保证了每个实对称矩阵都可以化简为对角矩阵，而且给出了具体的构造方法（正交变换）。这一结果在数据科学、物理学、工程学中有着不可替代的地位。
  </p>
</div>
`;