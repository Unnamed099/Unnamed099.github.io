window.SECTION_CONTENT = `
<h4>📐 线性方程组解的结构</h4>

<p>线性方程组是线性代数中最基本的问题之一。解的结构理论告诉我们：齐次线性方程组的解构成一个向量空间（解空间），而非齐次线性方程组的解则是一个特解加上齐次方程组的通解。</p>

<h5>1. 齐次线性方程组</h5>

<p><strong>定义：</strong> 形如 <span class="formula-inline" data-latex="AX = 0"></span> 的方程组称为<strong>齐次线性方程组</strong>。</p>

<p><strong>解的性质：</strong></p>
<ul>
  <li>若 <span class="formula-inline" data-latex="X_1, X_2"></span> 是齐次方程组的解，则 <span class="formula-inline" data-latex="X_1 + X_2"></span> 也是解</li>
  <li>若 <span class="formula-inline" data-latex="X"></span> 是齐次方程组的解，则 <span class="formula-inline" data-latex="kX"></span> 也是解（<span class="formula-inline" data-latex="k"></span> 为任意常数）</li>
</ul>

<p>因此，齐次线性方程组的解构成一个<strong>向量空间</strong>，称为<strong>解空间</strong>。</p>

<p><strong>基础解系：</strong> 解空间的一组基称为<strong>基础解系</strong>。若 <span class="formula-inline" data-latex="\\eta_1, \\eta_2, \\cdots, \\eta_t"></span> 是基础解系，则通解为</p>

<div class="formula-block" data-latex="X = k_1 \\eta_1 + k_2 \\eta_2 + \\cdots + k_t \\eta_t"></div>

<p>其中 <span class="formula-inline" data-latex="t = n - r(A)"></span>（未知量个数减去系数矩阵的秩）。</p>

<h4>📘 例题 1：求齐次方程组的基础解系</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + x_3 = 0 \\\\ 2x_1 + 2x_2 + 2x_3 = 0 \\end{cases}"></span> 的基础解系。</p>
  
  <p><strong>解：</strong></p>
  <p>系数矩阵 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & 2 & 2 \\end{pmatrix}"></span></p>
  <p>初等行变换：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r(A) = 1, n = 3, t = n - r = 2"></span></p>
  <p>令 <span class="formula-inline" data-latex="x_2 = 1, x_3 = 0"></span>，得 <span class="formula-inline" data-latex="x_1 = -1</span>，<span class="formula-inline" data-latex="\\eta_1 = (-1, 1, 0)^T"></span></p>
  <p>令 <span class="formula-inline" data-latex="x_2 = 0, x_3 = 1"></span>，得 <span class="formula-inline" data-latex="x_1 = -1</span>，<span class="formula-inline" data-latex="\\eta_2 = (-1, 0, 1)^T"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 基础解系为 <span class="formula-inline" data-latex="\\eta_1 = (-1, 1, 0)^T, \\eta_2 = (-1, 0, 1)^T"></span></p>
</div>

<h5>2. 非齐次线性方程组</h5>

<p><strong>定义：</strong> 形如 <span class="formula-inline" data-latex="AX = b</span>（<span class="formula-inline" data-latex="b \\neq 0"></span>）的方程组称为<strong>非齐次线性方程组</strong>。</p>

<p><strong>解的结构：</strong> 非齐次方程组的通解 = 一个特解 + 对应齐次方程组的通解</p>

<div class="formula-block" data-latex="X = X^* + k_1 \\eta_1 + k_2 \\eta_2 + \\cdots + k_t \\eta_t"></div>

<p>其中 <span class="formula-inline" data-latex="X^*"></span> 是某个特解，<span class="formula-inline" data-latex="\\eta_i"></span> 是齐次方程组的基础解系。</p>

<h4>📘 例题 2：求非齐次方程组的通解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + x_3 = 1 \\\\ 2x_1 + 2x_2 + 2x_3 = 2 \\end{cases}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(A|b) = \\begin{pmatrix} 1 & 1 & 1 & \\mid & 1 \\\\ 2 & 2 & 2 & \\mid & 2 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_2 - 2r_1} \\begin{pmatrix} 1 & 1 & 1 & \\mid & 1 \\\\ 0 & 0 & 0 & \\mid & 0 \\end{pmatrix}"></span>
  </p>
  <p>令 <span class="formula-inline" data-latex="x_2 = x_3 = 0"></span>，得特解 <span class="formula-inline" data-latex="X^* = (1, 0, 0)^T"></span></p>
  <p>齐次方程组的基础解系为 <span class="formula-inline" data-latex="\\eta_1 = (-1, 1, 0)^T, \\eta_2 = (-1, 0, 1)^T"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="X = (1,0,0)^T + k_1(-1,1,0)^T + k_2(-1,0,1)^T"></span></p>
</div>

<h5>3. 解的结构定理</h5>

<p><strong>定理：</strong> 若 <span class="formula-inline" data-latex="AX = b"></span> 有解，则其通解为</p>

<div class="formula-block" data-latex="X = X_p + X_h"></div>

<p>其中 <span class="formula-inline" data-latex="X_p"></span> 是 <span class="formula-inline" data-latex="AX = b"></span> 的任一特解，<span class="formula-inline" data-latex="X_h"></span> 是 <span class="formula-inline" data-latex="AX = 0"></span> 的通解。</p>

<h5>4. 解的结构总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>形式</th>
    <th>解的结构</th>
    <th>通解</th>
  </tr>
  <tr>
    <td><strong>齐次</strong></td>
    <td><span class="formula-inline" data-latex="AX = 0"></span></td>
    <td>解空间</td>
    <td><span class="formula-inline" data-latex="X = \\sum k_i \\eta_i"></span></td>
  </tr>
  <tr>
    <td><strong>非齐次</strong></td>
    <td><span class="formula-inline" data-latex="AX = b"></span></td>
    <td>特解 + 齐次解</td>
    <td><span class="formula-inline" data-latex="X = X^* + \\sum k_i \\eta_i"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 线性方程组解的结构理论是线性代数的核心成果之一。它揭示了齐次方程组解空间的向量空间结构，以及非齐次方程组解与齐次方程组解之间的平移关系。这一理论在微分方程、数值分析等领域有广泛应用。
  </p>
</div>
`;