window.SECTION_CONTENT = `
<h4>📐 矩阵分块法</h4>

<p>矩阵分块法是将一个大矩阵用横线和竖线分成若干个小矩阵（称为子块），以简化矩阵的运算和理论分析。它是处理高阶矩阵的重要技巧。</p>

<h5>1. 分块矩阵的概念</h5>

<p><strong>定义：</strong> 将矩阵 <span class="formula-inline" data-latex="A"></span> 用若干条横线和竖线分成若干个小矩阵，每个小矩阵称为 <span class="formula-inline" data-latex="A"></span> 的一个<strong>子块</strong>，以子块为元素的矩阵称为<strong>分块矩阵</strong>。</p>

<p>例如，将 <span class="formula-inline" data-latex="3 \\times 4"></span> 矩阵分块：</p>

<div class="formula-block" data-latex="A = \\begin{pmatrix} a_{11} & a_{12} & \\mid & a_{13} & a_{14} \\\\ a_{21} & a_{22} & \\mid & a_{23} & a_{24} \\\\ \\hline a_{31} & a_{32} & \\mid & a_{33} & a_{34} \\end{pmatrix} = \\begin{pmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{pmatrix}"></div>

<h5>2. 分块矩阵的运算</h5>

<p><strong>（1）加法</strong></p>
<p>两个同型矩阵按相同的分块方式进行加法运算：对应子块相加。</p>

<p><strong>（2）数乘</strong></p>
<p>数与分块矩阵相乘：每个子块都乘以该数。</p>

<p><strong>（3）乘法</strong></p>
<p>设 <span class="formula-inline" data-latex="A = (A_{ij})_{m \\times n}"></span>，<span class="formula-inline" data-latex="B = (B_{ij})_{n \\times p}"></span>，分块方式使得 <span class="formula-inline" data-latex="A"></span> 的列分块与 <span class="formula-inline" data-latex="B"></span> 的行分块一致，则</p>

<div class="formula-block" data-latex="(AB)_{ij} = \\sum_{k=1}^{n} A_{ik} B_{kj}"></div>

<h4>📘 例题 1：分块矩阵的乘法</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 & \\mid & 3 \\\\ 4 & 5 & \\mid & 6 \\\\ \\hline 7 & 8 & \\mid & 9 \\end{pmatrix}, B = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\\\ \\hline 1 & 1 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="AB"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>分块：<span class="formula-inline" data-latex="A = \\begin{pmatrix} A_{11} & A_{12} \\\\ A_{21} & A_{22} \\end{pmatrix}, B = \\begin{pmatrix} B_1 \\\\ B_2 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{11} = \\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\end{pmatrix}, A_{12} = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix}, A_{21} = \\begin{pmatrix} 7 & 8 \\end{pmatrix}, A_{22} = \\begin{pmatrix} 9 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="B_1 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, B_2 = \\begin{pmatrix} 1 & 1 \\end{pmatrix}"></span>
  </p>
  
  <p><span class="formula-inline" data-latex="AB = \\begin{pmatrix} A_{11}B_1 + A_{12}B_2 \\\\ A_{21}B_1 + A_{22}B_2 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{11}B_1 = \\begin{pmatrix} 1 & 2 \\\\ 4 & 5 \\end{pmatrix}, \\quad A_{12}B_2 = \\begin{pmatrix} 3 \\\\ 6 \\end{pmatrix} \\begin{pmatrix} 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 6 & 6 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="AB = \\begin{pmatrix} 4 & 5 \\\\ 10 & 11 \\\\ \\hline 15 & 16 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\begin{pmatrix} 4 & 5 \\\\ 10 & 11 \\\\ 15 & 16 \\end{pmatrix}"></span></p>
</div>

<h5>3. 特殊分块矩阵</h5>

<p><strong>（1）对角分块矩阵</strong></p>

<div class="formula-block" data-latex="\\begin{pmatrix} A_1 & & & \\\\ & A_2 & & \\\\ & & \\ddots & \\\\ & & & A_n \\end{pmatrix}"></div>

<p>若各子块均为方阵，则其行列式等于各子块行列式的乘积：<span class="formula-inline" data-latex">|A| = |A_1| \\cdot |A_2| \\cdots |A_n|</span></p>

<p><strong>（2）上三角分块矩阵</strong></p>

<div class="formula-block" data-latex="\\begin{pmatrix} A_1 & * & * \\\\ 0 & A_2 & * \\\\ 0 & 0 & A_3 \\end{pmatrix}"></div>

<p>若各子块均为方阵，则 <span class="formula-inline" data-latex="|A| = |A_1| \\cdot |A_2| \\cdots |A_n|"></span></p>

<h5>4. 分块矩阵的应用</h5>

<ul>
  <li><strong>简化高阶矩阵运算：</strong> 将大矩阵分块后，可按块进行矩阵乘法</li>
  <li><strong>求解大型线性方程组：</strong> 将方程组分块，可转化为子方程组的求解</li>
  <li><strong>理论推导：</strong> 分块矩阵便于表达矩阵的各种性质和定理</li>
  <li><strong>计算机数值计算：</strong> 分块矩阵有利于并行计算</li>
</ul>

<h4>📘 例题 2：分块矩阵的行列式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 3 \\\\ 0 & 4 & 5 \\end{pmatrix}"></span> 的行列式。</p>
  
  <p><strong>解：</strong></p>
  <p>将 <span class="formula-inline" data-latex="A"></span> 分块为 <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 0 \\\\ 0 & B \\end{pmatrix}"></span>，其中 <span class="formula-inline" data-latex="B = \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A| = 1 \\times |B| = 2 \\times 5 - 3 \\times 4 = 10 - 12 = -2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="-2"></span></p>
</div>

<h5>5. 分块矩阵总结</h5>

<table>
  <tr>
    <th>运算</th>
    <th>规则</th>
    <th>条件</th>
  </tr>
  <tr>
    <td><strong>加法</strong></td>
    <td>对应子块相加</td>
    <td>同型同分块</td>
  </tr>
  <tr>
    <td><strong>数乘</strong></td>
    <td>所有子块乘以常数</td>
    <td>无</td>
  </tr>
  <tr>
    <td><strong>乘法</strong></td>
    <td>子块矩阵相乘</td>
    <td>列分块 = 行分块</td>
  </tr>
  <tr>
    <td><strong>行列式</strong></td>
    <td>对角/三角块乘积</td>
    <td>子块为方阵</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩阵分块法是处理大规模矩阵问题的重要方法。它通过"化整为零"的思想，将复杂的矩阵运算转化为对子块的操作，既简化了计算，又便于理论分析。在数值计算和理论研究中都有广泛应用。
  </p>
</div>
`;