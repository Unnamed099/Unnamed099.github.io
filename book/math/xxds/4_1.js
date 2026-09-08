window.SECTION_CONTENT = `
<h4>📐 高斯消元法</h4>

<p>高斯消元法是求解线性方程组最基础、最常用的方法。它通过初等行变换将增广矩阵化为行阶梯形或行最简形，从而直接读出方程组的解。</p>

<h5>1. 高斯消元法的基本思想</h5>

<p>对于线性方程组 <span class="formula-inline" data-latex="AX = b"></span>，将其增广矩阵 <span class="formula-inline" data-latex="(A \\mid b)"></span> 通过初等行变换化为<strong>行阶梯形</strong>，然后回代求解。</p>

<p><strong>行阶梯形矩阵的特征：</strong></p>
<ul>
  <li>非零行在零行之上</li>
  <li>每一非零行的首非零元（主元）的列号随着行数增加而严格增大</li>
</ul>

<p><strong>行最简形矩阵的特征：</strong></p>
<ul>
  <li>是行阶梯形</li>
  <li>每一非零行的主元为 1</li>
  <li>主元所在列的其他元素都为 0</li>
</ul>

<h5>2. 高斯消元法的步骤</h5>

<p><strong>（1）消元过程（化为行阶梯形）</strong></p>
<ol>
  <li>选择第一列中绝对值最大的元素作为主元（列主元法，提高数值稳定性）</li>
  <li>将主元所在行交换到第 1 行</li>
  <li>用主元消去下面各行对应列的元素</li>
  <li>重复以上步骤，处理第 2 列、第 3 列……直到所有行处理完毕</li>
</ol>

<p><strong>（2）回代过程</strong></p>
<p>从最后一个非零行开始，逐个解出未知量。</p>

<h4>📘 例题 1：高斯消元法</h4>

<div class="example">
  <p><strong>题目：</strong> 用高斯消元法解 <span class="formula-inline" data-latex="\\begin{cases} x + 2y + 3z = 14 \\\\ 2x + y + z = 8 \\\\ 3x + y + 2z = 11 \\end{cases}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 2 & 3 & \\mid & 14 \\\\ 2 & 1 & 1 & \\mid & 8 \\\\ 3 & 1 & 2 & \\mid & 11 \\end{pmatrix}"></span>
  </p>
  <p>消元：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_2 - 2r_1} \\begin{pmatrix} 1 & 2 & 3 & \\mid & 14 \\\\ 0 & -3 & -5 & \\mid & -20 \\\\ 3 & 1 & 2 & \\mid & 11 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - 3r_1} \\begin{pmatrix} 1 & 2 & 3 & \\mid & 14 \\\\ 0 & -3 & -5 & \\mid & -20 \\\\ 0 & -5 & -7 & \\mid & -31 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - \\frac{5}{3}r_2} \\begin{pmatrix} 1 & 2 & 3 & \\mid & 14 \\\\ 0 & -3 & -5 & \\mid & -20 \\\\ 0 & 0 & \\frac{4}{3} & \\mid & \\frac{7}{3} \\end{pmatrix}"></span>
  </p>
  <p>回代：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{4}{3}z = \\frac{7}{3} \\Rightarrow z = \\frac{7}{4}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="-3y - 5z = -20 \\Rightarrow -3y - 5\\cdot\\frac{7}{4} = -20 \\Rightarrow y = \\frac{15}{4}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x + 2y + 3z = 14 \\Rightarrow x = \\frac{5}{4}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 5/4, y = 15/4, z = 7/4"></span></p>
</div>

<h5>3. 高斯-约当消元法</h5>

<p>高斯-约当消元法将增广矩阵进一步化为<strong>行最简形</strong>，从而直接读出方程组的解，无需回代。</p>

<p><strong>步骤：</strong></p>
<ol>
  <li>按高斯消元法化为行阶梯形</li>
  <li>从最后一行开始，将主元化为 1，并用主元消去上面各行对应列的元素</li>
</ol>

<h4>📘 例题 2：高斯-约当消元法</h4>

<div class="example">
  <p><strong>题目：</strong> 用高斯-约当消元法解 <span class="formula-inline" data-latex="\\begin{cases} x + y + z = 6 \\\\ 2x + 3y + z = 11 \\\\ 3x + 2y + z = 10 \\end{cases}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 & 1 & \\mid & 6 \\\\ 2 & 3 & 1 & \\mid & 11 \\\\ 3 & 2 & 1 & \\mid & 10 \\end{pmatrix}"></span>
  </p>
  <p>化为行阶梯形后继续化为行最简形：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 0 & 0 & \\mid & 1 \\\\ 0 & 1 & 0 & \\mid & 1 \\\\ 0 & 0 & 1 & \\mid & 4 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 1, y = 1, z = 4"></span></p>
</div>

<h5>4. 高斯消元法总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>目标形式</th>
    <th>求解方式</th>
    <th>适用场景</th>
  </tr>
  <tr>
    <td><strong>高斯消元法</strong></td>
    <td>行阶梯形</td>
    <td>回代求解</td>
    <td>通用</td>
  </tr>
  <tr>
    <td><strong>高斯-约当消元法</strong></td>
    <td>行最简形</td>
    <td>直接读出解</td>
    <td>小型方程组</td>
  </tr>
  <tr>
    <td><strong>列主元高斯消元法</strong></td>
    <td>行阶梯形（带选主元）</td>
    <td>回代求解</td>
    <td>数值稳定性要求高</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 高斯消元法是线性代数中最基本的计算方法。它将方程组的求解转化为对矩阵的初等行变换，是计算机求解线性方程组的核心算法。理解高斯消元法的原理和步骤，对于掌握数值线性代数至关重要。
  </p>
</div>
`;