window.SECTION_CONTENT = `
<h4>📐 矩阵的对角化</h4>

<p>矩阵的对角化是将一般矩阵通过相似变换化为对角矩阵的过程。对角矩阵具有最简单的形式，使得矩阵的幂、指数函数等运算大大简化。</p>

<h5>1. 对角化的条件</h5>

<p><strong>定理：</strong> <span class="formula-inline" data-latex="n"></span> 阶矩阵 <span class="formula-inline" data-latex="A"></span> 可对角化的<strong>充要条件</strong>是 <span class="formula-inline" data-latex="A"></span> 有 <span class="formula-inline" data-latex="n"></span> 个线性无关的特征向量。</p>

<p>等价地：</p>
<ul>
  <li>若 <span class="formula-inline" data-latex="A"></span> 有 <span class="formula-inline" data-latex="n"></span> 个互不相同的特征值，则 <span class="formula-inline" data-latex="A"></span> 可对角化</li>
  <li>若 <span class="formula-inline" data-latex="A"></span> 是实对称矩阵，则 <span class="formula-inline" data-latex="A"></span> 可对角化（且可正交对角化）</li>
  <li>若 <span class="formula-inline" data-latex="A"></span> 有重特征值，需检查每个特征值的几何重数是否等于代数重数</li>
</ul>

<h5>2. 对角化的步骤</h5>

<p><strong>步骤 1：</strong> 求特征值 <span class="formula-inline" data-latex="\\lambda_1, \\lambda_2, \\cdots, \\lambda_n"></span>（计重数）。</p>
<p><strong>步骤 2：</strong> 对每个特征值求对应的特征向量，得到 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span>。</p>
<p><strong>步骤 3：</strong> 检查 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是否线性无关。若线性无关，则可对角化。</p>
<p><strong>步骤 4：</strong> 构造 <span class="formula-inline" data-latex="P = (X_1, X_2, \\cdots, X_n)"></span>，则</p>
<div class="formula-block" data-latex="P^{-1} A P = \\begin{pmatrix} \\lambda_1 & & & \\\\ & \\lambda_2 & & \\\\ & & \\ddots & \\\\ & & & \\lambda_n \\end{pmatrix}"></div>

<h4>📘 例题 1：三阶矩阵的对角化</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}"></span> 是否可对角化？</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="A"></span> 已经是对角矩阵，显然可对角化。</p>
  <p>特征值为 <span class="formula-inline" data-latex="1, 2, 3"></span>，对应的特征向量为 <span class="formula-inline" data-latex="e_1, e_2, e_3"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 可对角化</p>
</div>

<h4>📘 例题 2：对角化的综合计算</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}"></span> 的相似对角化。</p>
  
  <p><strong>解：</strong></p>
  <p>由前例，特征值为 <span class="formula-inline" data-latex="\\lambda_1 = 1, \\lambda_2 = 1+\\sqrt{2}, \\lambda_3 = 1-\\sqrt{2}"></span>，互不相同。</p>
  <p>对应的特征向量：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X_1 = (1, 0, -1)^T, X_2 = (1, \\sqrt{2}, 1)^T, X_3 = (1, -\\sqrt{2}, 1)^T"></span>
  </p>
  <p>令 <span class="formula-inline" data-latex="P = (X_1, X_2, X_3)"></span>，则</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P^{-1} A P = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 1+\\sqrt{2} & 0 \\\\ 0 & 0 & 1-\\sqrt{2} \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 可对角化</p>
</div>

<h5>3. 对角化的应用：矩阵的幂</h5>

<p>若 <span class="formula-inline" data-latex="A = P \\Lambda P^{-1}"></span>，则</p>

<div class="formula-block" data-latex="A^n = P \\Lambda^n P^{-1}"></div>

<p>其中 <span class="formula-inline" data-latex="\\Lambda^n = \\text{diag}(\\lambda_1^n, \\lambda_2^n, \\cdots, \\lambda_n^n)"></span>。</p>

<p>这一性质在计算矩阵的高次幂时非常有用。</p>

<h4>📘 例题 3：利用对角化计算矩阵幂</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="A^n"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="A</span> 的特征值为 <span class="formula-inline" data-latex="1, 3"></span>，对应特征向量为 <span class="formula-inline" data-latex="(1, -1)^T, (1, 1)^T"></span>。</p>
  <p>令 <span class="formula-inline" data-latex="P = \\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}"></span>，则</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A^n = P \\begin{pmatrix} 1^n & 0 \\\\ 0 & 3^n \\end{pmatrix} P^{-1}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2} \\begin{pmatrix} 3^n + 1 & 3^n - 1 \\\\ 3^n - 1 & 3^n + 1 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="A^n = \\frac{1}{2} \\begin{pmatrix} 3^n + 1 & 3^n - 1 \\\\ 3^n - 1 & 3^n + 1 \\end{pmatrix}"></span></p>
</div>

<h5>4. 对角化总结</h5>

<table>
  <tr>
    <th>情况</th>
    <th>条件</th>
    <th>结论</th>
  </tr>
  <tr>
    <td><strong>n 个不同特征值</strong></td>
    <td>特征值互不相同</td>
    <td>必可对角化</td>
  </tr>
  <tr>
    <td><strong>重特征值</strong></td>
    <td>几何重数 = 代数重数</td>
    <td>可对角化</td>
  </tr>
  <tr>
    <td><strong>重特征值</strong></td>
    <td>几何重数 < 代数重数</td>
    <td>不可对角化</td>
  </tr>
  <tr>
    <td><strong>实对称矩阵</strong></td>
    <td>任意实对称矩阵</td>
    <td>必可正交对角化</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩阵的对角化是线性代数中最有力的工具之一。它将复杂的矩阵运算简化为对角矩阵的运算，在矩阵幂、矩阵函数、微分方程求解、主成分分析等领域有广泛应用。理解对角化的条件和步骤，是掌握线性代数应用的关键。
  </p>
</div>
`;