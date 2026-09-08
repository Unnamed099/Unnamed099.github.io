window.SECTION_CONTENT = `
<h4>📐 齐次线性方程组</h4>

<p>齐次线性方程组是形式为 <span class="formula-inline" data-latex="AX = 0"></span> 的方程组。它的解具有向量空间结构，是理解线性方程组解的结构的基础。</p>

<h5>1. 齐次线性方程组的基本性质</h5>

<p><strong>性质 1：</strong> 齐次线性方程组 <span class="formula-inline" data-latex="AX = 0"></span> 至少有一个解：<span class="formula-inline" data-latex="X = 0"></span>（零解）。</p>

<p><strong>性质 2：</strong> 若 <span class="formula-inline" data-latex="X_1, X_2"></span> 是齐次方程组的解，则 <span class="formula-inline" data-latex="X_1 + X_2"></span> 也是解。</p>
<p><strong>性质 3：</strong> 若 <span class="formula-inline" data-latex="X"></span> 是齐次方程组的解，则 <span class="formula-inline" data-latex="kX"></span> 也是解（<span class="formula-inline" data-latex="k"></span> 为任意常数）。</p>

<p>因此，齐次线性方程组的解构成一个<strong>向量空间</strong>（解空间）。</p>

<h5>2. 齐次方程组解的情况</h5>

<p>设 <span class="formula-inline" data-latex="A"></span> 是 <span class="formula-inline" data-latex="m \\times n"></span> 矩阵，<span class="formula-inline" data-latex="r = r(A)"></span>。</p>

<ul>
  <li>若 <span class="formula-inline" data-latex="r = n"></span>，则只有零解</li>
  <li>若 <span class="formula-inline" data-latex="r < n"></span>，则有无穷多非零解</li>
</ul>

<p><strong>推论：</strong> 当 <span class="formula-inline" data-latex="m < n"></span>（方程个数少于未知量个数）时，齐次方程组必有非零解。</p>

<h4>📘 例题 1：判断齐次方程组是否有非零解</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + x_3 = 0 \\\\ 2x_1 - x_2 + x_3 = 0 \\end{cases}"></span> 是否有非零解。</p>
  
  <p><strong>解：</strong></p>
  <p>系数矩阵 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="r(A) = 2 < 3 = n"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 有非零解</p>
</div>

<h5>3. 基础解系</h5>

<p><strong>定义：</strong> 齐次方程组 <span class="formula-inline" data-latex="AX = 0"></span> 的解空间的一组基称为<strong>基础解系</strong>。</p>

<p>若 <span class="formula-inline" data-latex="r(A) = r</span>，则解空间的维数为 <span class="formula-inline" data-latex="n - r"></span>，基础解系中含有 <span class="formula-inline" data-latex="n - r"></span> 个解向量。</p>

<p><strong>求基础解系的步骤：</strong></p>
<ol>
  <li>将系数矩阵 <span class="formula-inline" data-latex="A"></span> 化为行最简形</li>
  <li>确定自由变量（非主元列对应的变量）</li>
  <li>令自由变量分别取单位向量，回代求解</li>
  <li>得到基础解系</li>
</ol>

<h4>📘 例题 2：求基础解系</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + x_3 = 0 \\\\ 2x_1 - x_2 + x_3 = 0 \\end{cases}"></span> 的基础解系。</p>
  
  <p><strong>解：</strong></p>
  <p>系数矩阵化为行最简形：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 1 \\\\ 2 & -1 & 1 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 0 & 2/3 \\\\ 0 & 1 & 1/3 \\end{pmatrix}"></span>
  </p>
  <p>自由变量：<span class="formula-inline" data-latex="x_3 = t"></span></p>
  <p>回代得：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x_1 = -\\frac{2}{3}t, \\quad x_2 = -\\frac{1}{3}t"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X = t \\left(-\\frac{2}{3}, -\\frac{1}{3}, 1\\right)^T"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 基础解系为 <span class="formula-inline" data-latex="\\eta = (-2, -1, 3)^T"></span></p>
</div>

<h4>📘 例题 3：多个自由变量的情况</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\begin{cases} x_1 + x_2 + x_3 + x_4 = 0 \\\\ 2x_1 + 2x_2 + 2x_3 + 2x_4 = 0 \\end{cases}"></span> 的基础解系。</p>
  
  <p><strong>解：</strong></p>
  <p>系数矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 & 1 & 1 \\\\ 2 & 2 & 2 & 2 \\end{pmatrix} \\to \\begin{pmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r(A) = 1, n = 4, n - r = 3"></span></p>
  <p>自由变量：<span class="formula-inline" data-latex="x_2, x_3, x_4"></span></p>
  <p>令 <span class="formula-inline" data-latex="(x_2, x_3, x_4)"></span> 分别取 <span class="formula-inline" data-latex="(1,0,0), (0,1,0), (0,0,1)"></span>，得：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\eta_1 = (-1, 1, 0, 0)^T, \\eta_2 = (-1, 0, 1, 0)^T, \\eta_3 = (-1, 0, 0, 1)^T"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 基础解系为 <span class="formula-inline" data-latex="\\eta_1, \\eta_2, \\eta_3"></span></p>
</div>

<h5>4. 齐次线性方程组总结</h5>

<table>
  <tr>
    <th>情况</th>
    <th>条件</th>
    <th>解的情况</th>
    <th>基础解系个数</th>
  </tr>
  <tr>
    <td><strong>只有零解</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = n"></span></td>
    <td>唯一解</td>
    <td>0</td>
  </tr>
  <tr>
    <td><strong>有非零解</strong></td>
    <td><span class="formula-inline" data-latex="r(A) < n"></span></td>
    <td>无穷多解</td>
    <td><span class="formula-inline" data-latex="n - r(A)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 齐次线性方程组是理解线性方程组解的结构的关键。它的解构成向量空间，基础解系则给出了解空间的一组基。齐次方程组的解空间结构在微分方程、控制理论等领域有重要应用。
  </p>
</div>
`;