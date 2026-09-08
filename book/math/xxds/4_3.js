window.SECTION_CONTENT = `
<h4>📐 非齐次线性方程组</h4>

<p>非齐次线性方程组是形式为 <span class="formula-inline" data-latex="AX = b"></span>（<span class="formula-inline" data-latex="b \\neq 0"></span>）的方程组。它的解与齐次方程组的解密切相关，其解的结构可以表示为"特解 + 齐次通解"。</p>

<h5>1. 非齐次线性方程组有解的条件</h5>

<p><strong>定理（线性方程组有解判别定理）：</strong> 非齐次线性方程组 <span class="formula-inline" data-latex="AX = b"></span> 有解 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) = r(A \\mid b)"></span>（系数矩阵的秩等于增广矩阵的秩）。</p>

<p>具体地：</p>
<ul>
  <li>若 <span class="formula-inline" data-latex="r(A) = r(A \\mid b) = n"></span>（未知量个数），有<strong>唯一解</strong></li>
  <li>若 <span class="formula-inline" data-latex="r(A) = r(A \\mid b) < n"></span>，有<strong>无穷多解</strong></li>
  <li>若 <span class="formula-inline" data-latex="r(A) < r(A \\mid b)"></span>，<strong>无解</strong></li>
</ul>

<h4>📘 例题 1：判断非齐次方程组是否有解</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\begin{cases} x + y = 1 \\\\ 2x + 2y = 3 \\end{cases}"></span> 是否有解。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 \\\\ 2 & 2 \\end{pmatrix}, (A \\mid b) = \\begin{pmatrix} 1 & 1 & \\mid & 1 \\\\ 2 & 2 & \\mid & 3 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="r(A) = 1, \\quad r(A \\mid b) = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 无解</p>
</div>

<h5>2. 非齐次方程组解的结构</h5>

<p><strong>定理：</strong> 若非齐次线性方程组 <span class="formula-inline" data-latex="AX = b"></span> 有解，则它的通解为</p>

<div class="formula-block" data-latex="X = X^* + k_1 \\eta_1 + k_2 \\eta_2 + \\cdots + k_t \\eta_t"></div>

<p>其中 <span class="formula-inline" data-latex="X^*"></span> 是 <span class="formula-inline" data-latex="AX = b"></span> 的一个特解，<span class="formula-inline" data-latex="\\eta_1, \\eta_2, \\cdots, \\eta_t"></span> 是对应齐次方程组 <span class="formula-inline" data-latex="AX = 0"></span> 的基础解系，<span class="formula-inline" data-latex="t = n - r(A)"></span>。</p>

<h4>📘 例题 2：求非齐次方程组的通解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + x_3 = 1 \\\\ 2x_1 + 2x_2 + 2x_3 = 2 \\end{cases}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 & 1 & \\mid & 1 \\\\ 2 & 2 & 2 & \\mid & 2 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 1 & 1 & \\mid & 1 \\\\ 0 & 0 & 0 & \\mid & 0 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r(A) = r(A \\mid b) = 1 < 3"></span>，有解。</p>
  <p>令 <span class="formula-inline" data-latex="x_2 = x_3 = 0"></span>，得特解 <span class="formula-inline" data-latex="X^* = (1, 0, 0)^T"></span></p>
  <p>对应齐次方程组 <span class="formula-inline" data-latex="x_1 + x_2 + x_3 = 0"></span> 的基础解系：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\eta_1 = (-1, 1, 0)^T, \\quad \\eta_2 = (-1, 0, 1)^T"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="X = (1,0,0)^T + k_1(-1,1,0)^T + k_2(-1,0,1)^T"></span></p>
</div>

<h4>📘 例题 3：唯一解的情况</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x + y = 2 \\\\ 2x + 3y = 5 \\end{cases}"></span> 的解。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 & \\mid & 2 \\\\ 2 & 3 & \\mid & 5 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 0 & \\mid & 1 \\\\ 0 & 1 & \\mid & 1 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r(A) = r(A \\mid b) = 2 = n"></span>，唯一解。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 1, y = 1"></span></p>
</div>

<h5>3. 非齐次方程组解的几何意义</h5>

<p>非齐次方程组 <span class="formula-inline" data-latex="AX = b"></span> 的解是齐次方程组 <span class="formula-inline" data-latex="AX = 0"></span> 的解空间（经过原点的线性空间）平移一个特解后得到的<strong>仿射子空间</strong>。</p>

<p>这种几何意义在微分方程（常系数线性微分方程的通解结构）中有重要体现。</p>

<h5>4. 非齐次线性方程组总结</h5>

<table>
  <tr>
    <th>条件</th>
    <th>解的情况</th>
    <th>解的形式</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="r(A) = r(A|b) = n"></span></td>
    <td>唯一解</td>
    <td><span class="formula-inline" data-latex="X = A^{-1}b"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="r(A) = r(A|b) < n"></span></td>
    <td>无穷多解</td>
    <td><span class="formula-inline" data-latex="X = X^* + \\sum k_i\\eta_i"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="r(A) < r(A|b)"></span></td>
    <td>无解</td>
    <td>—</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 非齐次线性方程组的解的结构是线性代数中最核心的内容之一。"特解 + 齐次通解"的结构在常微分方程、偏微分方程中有着广泛的应用。理解这一结构，有助于深刻理解线性系统的一般响应。
  </p>
</div>
`;