window.SECTION_CONTENT = `
<h4>📐 行列式的性质</h4>

<p>利用行列式的定义直接计算高阶行列式非常繁琐。因此，需要研究行列式的性质，利用这些性质将行列式化简为易于计算的形式（如上三角行列式）。</p>

<h5>1. 行列式的基本性质</h5>

<p><strong>性质 1（转置）：</strong> 行列式与其转置行列式相等。</p>

<div class="formula-block" data-latex="D^T = D"></div>

<p>即 <span class="formula-inline" data-latex="\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = \\begin{vmatrix} a_{11} & a_{21} \\\\ a_{12} & a_{22} \\end{vmatrix}"></span>。</p>

<p><strong>性质 2（交换两行/列）：</strong> 交换行列式的两行（或两列），行列式变号。</p>

<div class="formula-block" data-latex="\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = - \\begin{vmatrix} a_{21} & a_{22} \\\\ a_{11} & a_{12} \\end{vmatrix}"></div>

<p><strong>推论：</strong> 若行列式有两行（或两列）完全相同，则行列式为 0。</p>

<p><strong>性质 3（提公因子）：</strong> 行列式的某一行（或列）中所有元素都乘以同一个数 <span class="formula-inline" data-latex="k"></span>，等于用数 <span class="formula-inline" data-latex="k"></span> 乘以该行列式。</p>

<div class="formula-block" data-latex="\\begin{vmatrix} ka_{11} & ka_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = k \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}"></div>

<p><strong>推论：</strong> 若行列式中某一行（或列）的所有元素有公因子 <span class="formula-inline" data-latex="k"></span>，则 <span class="formula-inline" data-latex="k"></span> 可以提到行列式外面。</p>

<p><strong>性质 4（拆分）：</strong> 若行列式的某一行（或列）是两组元素之和，则行列式可以拆分为两个行列式之和。</p>

<div class="formula-block" data-latex="\\begin{vmatrix} a_{11}+b_{11} & a_{12}+b_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix} + \\begin{vmatrix} b_{11} & b_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}"></div>

<p><strong>性质 5（倍加）：</strong> 将行列式的某一行（或列）的 <span class="formula-inline" data-latex="k"></span 倍加到另一行（或列）上，行列式不变。</p>

<div class="formula-block" data-latex="\\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} + ka_{11} & a_{22} + ka_{12} \\end{vmatrix} = \\begin{vmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{vmatrix}"></div>

<h4>📘 例题 1：利用行列式性质计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>将第 2 行减去第 1 行的 4 倍，第 3 行减去第 1 行的 7 倍：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & -3 & -6 \\\\ 0 & -6 & -12 \\end{vmatrix}"></span>
  </p>
  <p>再将第 3 行减去第 2 行的 2 倍：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\begin{vmatrix} 1 & 2 & 3 \\\\ 0 & -3 & -6 \\\\ 0 & 0 & 0 \\end{vmatrix} = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0"></span></p>
</div>

<h4>📘 例题 2：利用性质化简</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>第 2 行是第 1 行的 2 倍，第 3 行是第 1 行的 3 倍。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\begin{vmatrix} 1 & 2 & 3 \\\\ 2 \\cdot (1,2,3) \\\\ 3 \\cdot (1,2,3) \\end{vmatrix} = 0"></span>
  </p>
  <p>因为有两行成比例，行列式为 0。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0"></span></p>
</div>

<h5>2. 利用性质计算行列式的步骤</h5>

<ol>
  <li><strong>化为上三角：</strong> 利用倍加性质将主对角线以下的元素化为 0</li>
  <li><strong>提取公因子：</strong> 若有整行或整列的公因子，提取到行列式外面</li>
  <li><strong>交换行/列：</strong> 若需要，交换行或列，注意符号变化</li>
  <li><strong>计算三角行列式：</strong> 上三角行列式的值等于主对角线元素的乘积</li>
</ol>

<h4>📘 例题 3：化为上三角计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\begin{vmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\\\ 1 & 3 & 6 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>将第 2 行减去第 1 行，第 3 行减去第 1 行：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 2 & 5 \\end{vmatrix}"></span>
  </p>
  <p>将第 3 行减去第 2 行的 2 倍：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\begin{vmatrix} 1 & 1 & 1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 1 \\end{vmatrix} = 1 \\times 1 \\times 1 = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h5>3. 行列式性质总结</h5>

<table>
  <tr>
    <th>性质</th>
    <th>表达式</th>
    <th>作用</th>
  </tr>
  <tr>
    <td><strong>转置</strong></td>
    <td><span class="formula-inline" data-latex="D^T = D"></span></td>
    <td>行列对等</td>
  </tr>
  <tr>
    <td><strong>交换两行/列</strong></td>
    <td><span class="formula-inline" data-latex="D \\to -D"></span></td>
    <td>变号</td>
  </tr>
  <tr>
    <td><strong>提公因子</strong></td>
    <td><span class="formula-inline" data-latex="D \\to kD"></span></td>
    <td>简化数值</td>
  </tr>
  <tr>
    <td><strong>拆分</strong></td>
    <td><span class="formula-inline" data-latex="D = D_1 + D_2"></span></td>
    <td>分解复杂行列式</td>
  </tr>
  <tr>
    <td><strong>倍加</strong></td>
    <td><span class="formula-inline" data-latex="D"> 不变</span></td>
    <td>化为三角</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 行列式的性质是计算行列式的核心工具。通过"倍加"操作将行列式化为上三角形式，是最常用的计算方法。熟练掌握这些性质，可以高效地计算各种高阶行列式。
  </p>
</div>
`;