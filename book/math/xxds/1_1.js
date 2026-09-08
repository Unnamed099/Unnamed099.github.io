window.SECTION_CONTENT = `
<h4>📐 二阶与三阶行列式</h4>

<p>行列式是线性代数中最基本的工具之一，它起源于线性方程组的求解。二阶和三阶行列式是最简单的行列式，通过它们可以直观地理解行列式的概念。</p>

<h5>1. 二阶行列式</h5>

<p><strong>定义：</strong> 由 2×2 个数排成的数表</p>

<div class="formula-block" data-latex="\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = a_{11}a_{22} - a_{12}a_{21}"></div>

<p>称为<strong>二阶行列式</strong>。</p>

<p><strong>几何意义：</strong> 二阶行列式的绝对值等于以向量 <span class="formula-inline" data-latex="\\mathbf{a} = (a_{11}, a_{12})"></span> 和 <span class="formula-inline" data-latex="\\mathbf{b} = (a_{21}, a_{22})"></span> 为邻边的平行四边形的面积。</p>

<h4>📘 例题 1：计算二阶行列式</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\begin{vmatrix} 2 & 3 \\\\ 4 & 5 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{vmatrix} 2 & 3 \\\\ 4 & 5 \\end{vmatrix} = 2 \\times 5 - 3 \\times 4 = 10 - 12 = -2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="-2"></span></p>
</div>

<h5>2. 三阶行列式</h5>

<p><strong>定义：</strong> 由 3×3 个数排成的数表</p>

<div class="formula-block" data-latex="\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix} = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} - a_{11}a_{23}a_{32}"></div>

<p><strong>对角线法则（沙路法则）：</strong> 三阶行列式等于主对角线上三元素乘积之和减去副对角线上三元素乘积之和。</p>

<h4>📘 例题 2：计算三阶行列式</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 \\times 5 \\times 9 + 2 \\times 6 \\times 7 + 3 \\times 4 \\times 8 - 3 \\times 5 \\times 7 - 2 \\times 4 \\times 9 - 1 \\times 6 \\times 8"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 45 + 84 + 96 - 105 - 72 - 48 = 225 - 225 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0"></span></p>
</div>

<div class="note">
  <strong>💡 注意：</strong>
  <p>• 二阶和三阶行列式可以用对角线法则直接计算</p>
  <p>• 三阶以上的行列式不能用对角线法则</p>
  <p>• 行列式是一个数值，不是矩阵</p>
</div>

<h5>3. 行列式与线性方程组</h5>

<p>对于二元线性方程组</p>

<div class="formula-block" data-latex="\\begin{cases} a_{11}x_1 + a_{12}x_2 = b_1 \\\\ a_{21}x_1 + a_{22}x_2 = b_2 \\end{cases}"></div>

<p>当 <span class="formula-inline" data-latex="D = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} \\neq 0"></span> 时，有唯一解</p>

<div class="formula-block" data-latex="x_1 = \\frac{D_1}{D}, \\quad x_2 = \\frac{D_2}{D}"></div>

<p>其中</p>

<div class="formula-block" data-latex="D_1 = \\begin{vmatrix} b_1 & a_{12} \\\\ b_2 & a_{22} \\end{vmatrix}, \\quad D_2 = \\begin{vmatrix} a_{11} & b_1 \\\\ a_{21} & b_2 \\end{vmatrix}"></div>

<h4>📘 例题 3：用行列式解方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 用行列式解方程组 <span class="formula-inline" data-latex="\\begin{cases} 2x + 3y = 8 \\\\ 4x + 5y = 14 \\end{cases}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = \\begin{vmatrix} 2 & 3 \\\\ 4 & 5 \\end{vmatrix} = 10 - 12 = -2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D_1 = \\begin{vmatrix} 8 & 3 \\\\ 14 & 5 \\end{vmatrix} = 40 - 42 = -2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D_2 = \\begin{vmatrix} 2 & 8 \\\\ 4 & 14 \\end{vmatrix} = 28 - 32 = -4"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x = \\frac{D_1}{D} = \\frac{-2}{-2} = 1, \\quad y = \\frac{D_2}{D} = \\frac{-4}{-2} = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 1, y = 2"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二阶和三阶行列式是行列式理论的基础。掌握它们的计算方法和几何意义，是学习高阶行列式、矩阵理论以及线性方程组解法的必要准备。
  </p>
</div>
`;