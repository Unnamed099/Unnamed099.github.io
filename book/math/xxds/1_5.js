window.SECTION_CONTENT = `
<h4>📐 行列式按行（列）展开</h4>

<p>行列式按行（列）展开是计算行列式的另一种重要方法。它将高阶行列式的计算转化为低阶行列式的计算，特别适合含有较多零元素的行列式。</p>

<h5>1. 余子式与代数余子式</h5>

<p><strong>定义：</strong> 在 n 阶行列式 D 中，划去元素 <span class="formula-inline" data-latex="a_{ij}"></span> 所在的第 i 行和第 j 列，剩下的 <span class="formula-inline" data-latex="n-1"></span> 阶行列式称为元素 <span class="formula-inline" data-latex="a_{ij}"></span> 的<strong>余子式</strong>，记作 <span class="formula-inline" data-latex="M_{ij}"></span>。</p>

<p><strong>代数余子式：</strong></p>

<div class="formula-block" data-latex="A_{ij} = (-1)^{i+j} M_{ij}"></div>

<p><span class="formula-inline" data-latex="A_{ij}"></span> 称为元素 <span class="formula-inline" data-latex="a_{ij}"></span> 的<strong>代数余子式</strong>。</p>

<h4>📘 例题 1：求余子式和代数余子式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix}"></span> 中元素 <span class="formula-inline" data-latex="a_{22} = 5"></span> 的余子式和代数余子式。</p>
  
  <p><strong>解：</strong></p>
  <p>划去第 2 行和第 2 列：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="M_{22} = \\begin{vmatrix} 1 & 3 \\\\ 7 & 9 \\end{vmatrix} = 1 \\times 9 - 3 \\times 7 = 9 - 21 = -12"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{22} = (-1)^{2+2} M_{22} = 1 \\times (-12) = -12"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="M_{22} = -12, A_{22} = -12"></span></p>
</div>

<h5>2. 按行（列）展开定理</h5>

<p><strong>定理：</strong> 行列式等于它的任一行的各元素与其对应的代数余子式乘积之和。</p>

<div class="formula-block" data-latex="D = a_{i1} A_{i1} + a_{i2} A_{i2} + \\cdots + a_{in} A_{in} = \\sum_{j=1}^{n} a_{ij} A_{ij}"></div>

<p>同样地，也可以按列展开：</p>

<div class="formula-block" data-latex="D = a_{1j} A_{1j} + a_{2j} A_{2j} + \\cdots + a_{nj} A_{nj} = \\sum_{i=1}^{n} a_{ij} A_{ij}"></div>

<p><strong>推论：</strong> 行列式某一行（列）的元素与另一行（列）对应元素的代数余子式乘积之和为 0。</p>

<div class="formula-block" data-latex="\\sum_{j=1}^{n} a_{ij} A_{kj} = 0 \\quad (i \\neq k)"></div>

<h4>📘 例题 2：按行展开计算行列式</h4>

<div class="example">
  <p><strong>题目：</strong> 按第 1 行展开计算 <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{11} = (-1)^{1+1} \\begin{vmatrix} 5 & 6 \\\\ 8 & 9 \\end{vmatrix} = 5 \\times 9 - 6 \\times 8 = 45 - 48 = -3"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{12} = (-1)^{1+2} \\begin{vmatrix} 4 & 6 \\\\ 7 & 9 \\end{vmatrix} = -(4 \\times 9 - 6 \\times 7) = -(36 - 42) = 6"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{13} = (-1)^{1+3} \\begin{vmatrix} 4 & 5 \\\\ 7 & 8 \\end{vmatrix} = 4 \\times 8 - 5 \\times 7 = 32 - 35 = -3"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = a_{11}A_{11} + a_{12}A_{12} + a_{13}A_{13} = 1 \\times (-3) + 2 \\times 6 + 3 \\times (-3) = -3 + 12 - 9 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0"></span></p>
</div>

<h4>📘 例题 3：利用零元素简化展开</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 0 & 2 \\\\ 3 & 4 & 0 \\\\ 0 & 1 & 5 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>选择第 2 行展开（有两个零元素）：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = a_{21}A_{21} + a_{22}A_{22} + a_{23}A_{23} = 3A_{21} + 4A_{22} + 0 = 3A_{21} + 4A_{22}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{21} = (-1)^{2+1} \\begin{vmatrix} 0 & 2 \\\\ 1 & 5 \\end{vmatrix} = -(0 \\times 5 - 2 \\times 1) = 2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A_{22} = (-1)^{2+2} \\begin{vmatrix} 1 & 2 \\\\ 0 & 5 \\end{vmatrix} = 1 \\times 5 - 2 \\times 0 = 5"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = 3 \\times 2 + 4 \\times 5 = 6 + 20 = 26"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="26"></span></p>
</div>

<h5>3. 按行展开的推广——拉普拉斯定理</h5>

<p><strong>拉普拉斯定理：</strong> 在 n 阶行列式中，任意取定 k 行（<span class="formula-inline" data-latex="1 \\le k \\le n-1"></span>），由这 k 行元素组成的 k 阶子式与它们的代数余子式的乘积之和等于行列式 D。</p>

<p>按行展开定理是拉普拉斯定理在 <span class="formula-inline" data-latex="k = 1"></span> 时的特殊情况。</p>

<h5>4. 行列式计算总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>适用场景</th>
    <th>特点</th>
  </tr>
  <tr>
    <td><strong>化为上三角</strong></td>
    <td>一般行列式</td>
    <td>通用性强，适合计算</td>
  </tr>
  <tr>
    <td><strong>按行（列）展开</strong></td>
    <td>含有较多零元素</td>
    <td>降阶计算，灵活方便</td>
  </tr>
  <tr>
    <td><strong>拉普拉斯定理</strong></td>
    <td>含有较多零的行/列</td>
    <td>高阶行列式的降阶</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 行列式按行（列）展开是计算行列式的重要方法。通过余子式和代数余子式的概念，将高阶行列式化为低阶行列式。在实际计算中，通常选择含零元素最多的行或列展开，以简化计算。
  </p>
</div>
`;