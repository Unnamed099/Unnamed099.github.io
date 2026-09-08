window.SECTION_CONTENT = `
<h4>📐 特征值与特征向量的计算</h4>

<p>特征值与特征向量的计算是线性代数中最重要的计算问题之一。对于高阶矩阵，通常需要借助数值方法；对于低阶矩阵或特殊矩阵，可以通过特征方程直接求解。</p>

<h5>1. 特征值与特征向量的计算步骤</h5>

<p><strong>步骤 1：</strong> 写出特征矩阵 <span class="formula-inline" data-latex="A - \\lambda I"></span>。</p>
<p><strong>步骤 2：</strong> 计算特征多项式 <span class="formula-inline" data-latex="|A - \\lambda I|"></span>。</p>
<p><strong>步骤 3：</strong> 解特征方程 <span class="formula-inline" data-latex="|A - \\lambda I| = 0"></span>，得到特征值 <span class="formula-inline" data-latex="\\lambda_1, \\lambda_2, \\cdots, \\lambda_n"></span>。</p>
<p><strong>步骤 4：</strong> 对每个特征值 <span class="formula-inline" data-latex="\\lambda_i"></span>，解齐次方程组 <span class="formula-inline" data-latex="(A - \\lambda_i I)X = 0"></span>，得到对应的特征向量。</p>

<h4>📘 例题 1：三阶矩阵的特征值与特征向量</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 1 & 2 & 1 \\\\ 0 & 1 & 1 \\end{pmatrix}"></span> 的特征值与特征向量。</p>
  
  <p><strong>解：</strong></p>
  <p>特征多项式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A - \\lambda I| = \\begin{vmatrix} 1-\\lambda & 1 & 0 \\\\ 1 & 2-\\lambda & 1 \\\\ 0 & 1 & 1-\\lambda \\end{vmatrix} = (1-\\lambda)^3 - 2(1-\\lambda)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= (1-\\lambda)[(1-\\lambda)^2 - 2] = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lambda_1 = 1, \\quad \\lambda_2 = 1 + \\sqrt{2}, \\quad \\lambda_3 = 1 - \\sqrt{2}"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="\\lambda_1 = 1"></span> 时，解 <span class="formula-inline" data-latex="(A - I)X = 0"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{pmatrix} = 0 \\Rightarrow x_2 = 0, x_1 + x_3 = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X_1 = (1, 0, -1)^T"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="\\lambda_2 = 1 + \\sqrt{2}"></span> 时，类似可得特征向量 <span class="formula-inline" data-latex="X_2 = (1, \\sqrt{2}, 1)^T"></span>。</p>
  <p>当 <span class="formula-inline" data-latex="\\lambda_3 = 1 - \\sqrt{2}"></span> 时，<span class="formula-inline" data-latex="X_3 = (1, -\\sqrt{2}, 1)^T"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\lambda_1 = 1, X_1 = (1,0,-1)^T</span>；<span class="formula-inline" data-latex="\\lambda_2 = 1+\\sqrt{2}, X_2 = (1,\\sqrt{2},1)^T</span>；<span class="formula-inline" data-latex="\\lambda_3 = 1-\\sqrt{2}, X_3 = (1,-\\sqrt{2},1)^T"></span></p>
</div>

<h5>2. 重特征值的情况</h5>

<p>当特征方程有重根时，特征值的代数重数可能大于其几何重数（特征子空间的维数）。</p>

<h4>📘 例题 2：重特征值</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}"></span> 的特征值与特征向量。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A - \\lambda I| = \\begin{vmatrix} 2-\\lambda & 1 \\\\ 0 & 2-\\lambda \\end{vmatrix} = (2-\\lambda)^2 = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lambda = 2"></span>（二重特征值）
  </p>
  
  <p>解 <span class="formula-inline" data-latex="(A - 2I)X = 0"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 0 & 1 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} = 0 \\Rightarrow x_2 = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X = (1, 0)^T"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 特征值 <span class="formula-inline" data-latex="\\lambda = 2</span>（二重），只有一个线性无关的特征向量 <span class="formula-inline" data-latex="X = (1, 0)^T"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 代数重数 2 > 几何重数 1，矩阵不可对角化。</p>
  </div>
</div>

<h5>3. 特征向量的性质</h5>

<p><strong>定理：</strong> 属于不同特征值的特征向量线性无关。</p>

<p><strong>推论：</strong> 若 <span class="formula-inline" data-latex="n"></span> 阶矩阵 <span class="formula-inline" data-latex="A"></span> 有 <span class="formula-inline" data-latex="n"></span> 个不同的特征值，则它一定有 <span class="formula-inline" data-latex="n"></span> 个线性无关的特征向量，可以对角化。</p>

<h5>4. 计算总结</h5>

<table>
  <tr>
    <th>情况</th>
    <th>特征值</th>
    <th>特征向量</th>
    <th>对角化</th>
  </tr>
  <tr>
    <td><strong>n 个不同特征值</strong></td>
    <td>互不相同</td>
    <td>n 个线性无关</td>
    <td>可对角化</td>
  </tr>
  <tr>
    <td><strong>有重特征值</strong></td>
    <td>可能有重复</td>
    <td>几何重数 ≤ 代数重数</td>
    <td>可能不可对角化</td>
  </tr>
  <tr>
    <td><strong>实对称矩阵</strong></td>
    <td>全为实数</td>
    <td>可正交对角化</td>
    <td>一定可对角化</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 特征值与特征向量的计算是线性代数中最基本的计算任务之一。对于高阶矩阵，实践中往往使用幂法、QR 算法等数值方法。理解特征值与特征向量的理论性质和计算方法，是学习矩阵对角化、矩阵函数等内容的基础。
  </p>
</div>
`;