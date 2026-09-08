window.SECTION_CONTENT = `
<h4>📐 矩阵的初等变换</h4>

<p>初等变换是矩阵理论中最基本的操作之一。它不仅用于求解线性方程组、求逆矩阵，还是研究矩阵秩、向量组线性相关性等概念的重要工具。</p>

<h5>1. 初等变换的定义</h5>

<p>矩阵的<strong>初等行变换</strong>有以下三种：</p>

<p><strong>（1）交换两行：</strong> 对调矩阵的第 <span class="formula-inline" data-latex="i"></span> 行和第 <span class="formula-inline" data-latex="j"></span> 行，记作 <span class="formula-inline" data-latex="r_i \\leftrightarrow r_j"></span>。</p>

<p><strong>（2）数乘某行：</strong> 用非零数 <span class="formula-inline" data-latex="k"></span> 乘以矩阵的第 <span class="formula-inline" data-latex="i"></span> 行，记作 <span class="formula-inline" data-latex="r_i \\times k"></span>。</p>

<p><strong>（3）倍加：</strong> 将第 <span class="formula-inline" data-latex="i"></span> 行的 <span class="formula-inline" data-latex="k"></span> 倍加到第 <span class="formula-inline" data-latex="j"></span> 行，记作 <span class="formula-inline" data-latex="r_j + k r_i"></span>。</p>

<p>类似的，有<strong>初等列变换</strong>，只需将上述"行"替换为"列"。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 初等变换是可逆变换（每种变换都有逆变换）</p>
  <p>• 初等行变换对应于左乘初等矩阵</p>
  <p>• 初等列变换对应于右乘初等矩阵</p>
</div>

<h5>2. 初等矩阵</h5>

<p>由单位矩阵经过一次初等变换得到的矩阵称为<strong>初等矩阵</strong>。</p>

<p><strong>（1）交换矩阵 <span class="formula-inline" data-latex="E_{ij}"></span>：</strong> 交换单位矩阵的第 <span class="formula-inline" data-latex="i"></span> 行和第 <span class="formula-inline" data-latex="j"></span> 行。</p>

<p><strong>（2）倍乘矩阵 <span class="formula-inline" data-latex="E_i(k)"></span>：</strong> 用 <span class="formula-inline" data-latex="k"></span> 乘以单位矩阵的第 <span class="formula-inline" data-latex="i"></span> 行（<span class="formula-inline" data-latex="k \\neq 0"></span>）。</p>

<p><strong>（3）倍加矩阵 <span class="formula-inline" data-latex="E_{ij}(k)"></span>：</strong> 将单位矩阵的第 <span class="formula-inline" data-latex="i"></span> 行的 <span class="formula-inline" data-latex="k"></span> 倍加到第 <span class="formula-inline" data-latex="j"></span> 行。</p>

<p>初等矩阵都是可逆的，且其逆矩阵也是初等矩阵。</p>

<h5>3. 初等变换的应用</h5>

<p><strong>（1）求逆矩阵</strong></p>

<p>对 <span class="formula-inline" data-latex="(A \\mid I)"></span> 进行初等行变换，当 <span class="formula-inline" data-latex="A"></span> 变为 <span class="formula-inline" data-latex="I"></span> 时，<span class="formula-inline" data-latex="I"></span> 变为 <span class="formula-inline" data-latex="A^{-1}"></span>：</p>

<div class="formula-block" data-latex="(A \\mid I) \\xrightarrow{\\text{行变换}} (I \\mid A^{-1})"></div>

<p><strong>（2）求解线性方程组</strong></p>

<p>对增广矩阵 <span class="formula-inline" data-latex="(A \\mid b)"></span> 进行初等行变换，化为行阶梯形或行最简形。</p>

<p><strong>（3）求矩阵的秩</strong></p>

<p>通过初等行变换将矩阵化为行阶梯形，非零行的行数即为矩阵的秩。</p>

<h4>📘 例题 1：用初等行变换求逆矩阵</h4>

<div class="example">
  <p><strong>题目：</strong> 用初等行变换求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"></span> 的逆矩阵。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(A \\mid I) = \\begin{pmatrix} 1 & 2 & \\mid & 1 & 0 \\\\ 3 & 4 & \\mid & 0 & 1 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r_2 - 3r_1 \\to r_2"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 2 & \\mid & 1 & 0 \\\\ 0 & -2 & \\mid & -3 & 1 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r_2 / (-2) \\to r_2"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 2 & \\mid & 1 & 0 \\\\ 0 & 1 & \\mid & 3/2 & -1/2 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r_1 - 2r_2 \\to r_1"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 0 & \\mid & -2 & 1 \\\\ 0 & 1 & \\mid & 3/2 & -1/2 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}"></span></p>
</div>

<h4>📘 例题 2：用初等行变换解方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 用初等行变换解 <span class="formula-inline" data-latex="\\begin{cases} x + 2y = 5 \\\\ 3x + 4y = 11 \\end{cases}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(A \\mid b) = \\begin{pmatrix} 1 & 2 & \\mid & 5 \\\\ 3 & 4 & \\mid & 11 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r_2 - 3r_1 \\to r_2"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 2 & \\mid & 5 \\\\ 0 & -2 & \\mid & -4 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r_2 / (-2) \\to r_2"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 2 & \\mid & 5 \\\\ 0 & 1 & \\mid & 2 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r_1 - 2r_2 \\to r_1"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 0 & \\mid & 1 \\\\ 0 & 1 & \\mid & 2 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 1, y = 2"></span></p>
</div>

<h5>4. 初等变换总结</h5>

<table>
  <tr>
    <th>变换类型</th>
    <th>操作</th>
    <th>对应初等矩阵</th>
    <th>逆变换</th>
  </tr>
  <tr>
    <td><strong>交换</strong></td>
    <td><span class="formula-inline" data-latex="r_i \\leftrightarrow r_j"></span></td>
    <td><span class="formula-inline" data-latex="E_{ij}"></span></td>
    <td>自身</td>
  </tr>
  <tr>
    <td><strong>数乘</strong></td>
    <td><span class="formula-inline" data-latex="r_i \\times k"></span></td>
    <td><span class="formula-inline" data-latex="E_i(k)"></span></td>
    <td><span class="formula-inline" data-latex="r_i \\times 1/k"></span></td>
  </tr>
  <tr>
    <td><strong>倍加</strong></td>
    <td><span class="formula-inline" data-latex="r_j + k r_i"></span></td>
    <td><span class="formula-inline" data-latex="E_{ij}(k)"></span></td>
    <td><span class="formula-inline" data-latex="r_j - k r_i"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 初等变换是线性代数中最基本、最常用的操作之一。它不仅是求解线性方程组和求逆矩阵的标准方法，也是理解矩阵等价关系、秩理论等概念的重要工具。掌握初等变换，是学好线性代数的关键。
  </p>
</div>
`;