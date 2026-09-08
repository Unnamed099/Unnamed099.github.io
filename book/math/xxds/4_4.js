window.SECTION_CONTENT = `
<h4>📐 线性方程组解的结构</h4>

<p>本节系统总结线性方程组解的结构理论，统一处理齐次与非齐次两种情形。解的结构理论是线性代数中最重要的应用成果之一。</p>

<h5>1. 线性方程组的一般形式</h5>

<p><strong>矩阵形式：</strong></p>
<div class="formula-block" data-latex="AX = b"></div>

<p>其中 <span class="formula-inline" data-latex="A"></span> 是 <span class="formula-inline" data-latex="m \\times n"></span> 系数矩阵，<span class="formula-inline" data-latex="X"></span> 是 <span class="formula-inline" data-latex="n"></span> 维未知向量，<span class="formula-inline" data-latex="b"></span> 是 <span class="formula-inline" data-latex="m"></span> 维常数向量。</p>

<p><strong>增广矩阵：</strong></p>
<div class="formula-block" data-latex="(A \\mid b)"></div>

<h5>2. 解的存在性与唯一性</h5>

<p><strong>定理（解的存在性）：</strong> 方程组 <span class="formula-inline" data-latex="AX = b"></span> 有解 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) = r(A \\mid b)"></span>。</p>

<p><strong>定理（解的唯一性）：</strong> 若 <span class="formula-inline" data-latex="AX = b"></span> 有解，则解唯一 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) = n"></span>。</p>

<h5>3. 解的完整结构</h5>

<p><strong>（1）齐次方程组 <span class="formula-inline" data-latex="AX = 0"></span></strong></p>
<p>解构成向量空间 <span class="formula-inline" data-latex="V = \\{ X \\mid AX = 0 \\}"></span>。</p>
<p>维数 <span class="formula-inline" data-latex="\\dim V = n - r(A)"></span>。</p>
<p>基础解系：<span class="formula-inline" data-latex="\\eta_1, \\eta_2, \\cdots, \\eta_t</span>（<span class="formula-inline" data-latex="t = n - r(A)"></span>）。</p>
<p>通解：<span class="formula-inline" data-latex="X = c_1\\eta_1 + c_2\\eta_2 + \\cdots + c_t\\eta_t"></span>。</p>

<p><strong>（2）非齐次方程组 <span class="formula-inline" data-latex="AX = b"></span></strong></p>
<p>若 <span class="formula-inline" data-latex="r(A) = r(A \\mid b)"></span>，取一个特解 <span class="formula-inline" data-latex="X^*"></span>，则</p>
<p>通解：<span class="formula-inline" data-latex="X = X^* + c_1\\eta_1 + c_2\\eta_2 + \\cdots + c_t\\eta_t"></span>。</p>

<h5>4. 解的结构图解</h5>

<div style="text-align:center; margin:15px 0; background:#faf8f5; border:1px solid #d7ccc8; border-radius:8px; padding:20px;">
  <pre style="font-size:0.9rem; line-height:1.8; text-align:left; display:inline-block;">
    齐次方程组 AX = 0
          ↓
    解空间 V（过原点的线性空间）
    维数 = n - r(A)
    基 = {η₁, η₂, ..., ηₜ}
          ↓
    非齐次方程组 AX = b
          ↓
    若 r(A) = r(A|b)
    特解 X* 存在
    通解 = X* + V
    （仿射子空间）
  </pre>
</div>

<h4>📘 例题 1：综合求解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + 2x_3 = 1 \\\\ 2x_1 + 2x_2 + 4x_3 = 2 \\\\ x_1 - x_2 + x_3 = 3 \\end{cases}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 & 2 & \\mid & 1 \\\\ 2 & 2 & 4 & \\mid & 2 \\\\ 1 & -1 & 1 & \\mid & 3 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\to \\begin{pmatrix} 1 & 1 & 2 & \\mid & 1 \\\\ 0 & 0 & 0 & \\mid & 0 \\\\ 0 & -2 & -1 & \\mid & 2 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\to \\begin{pmatrix} 1 & 0 & 3/2 & \\mid & 2 \\\\ 0 & 1 & 1/2 & \\mid & -1 \\\\ 0 & 0 & 0 & \\mid & 0 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r(A) = r(A|b) = 2 < 3"></span>，无穷多解。</p>
  <p>令 <span class="formula-inline" data-latex="x_3 = t"></span>，得：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x_1 = 2 - \\frac{3}{2}t, \\quad x_2 = -1 - \\frac{1}{2}t"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="X = (2, -1, 0)^T + t(-3/2, -1/2, 1)^T"></span></p>
</div>

<h5>5. 解的结构总结</h5>

<table>
  <tr>
    <th>条件</th>
    <th>解的情况</th>
    <th>通解形式</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="r(A) = r(A|b) = n"></span></td>
    <td>唯一解</td>
    <td><span class="formula-inline" data-latex="X = A^{-1}b"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="r(A) = r(A|b) < n"></span></td>
    <td>无穷多解</td>
    <td><span class="formula-inline" data-latex="X = X^* + \\sum c_i\\eta_i"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="r(A) < r(A|b)"></span></td>
    <td>无解</td>
    <td>—</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 线性方程组解的结构理论统一了齐次与非齐次两种情形。"齐次解构成线性空间，非齐次解是平移后的线性空间"这一认识，不仅是代数的核心，也是微分方程、控制理论等应用领域的基础。
  </p>
</div>
`;