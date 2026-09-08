window.SECTION_CONTENT = `
<h4>📐 矩阵的运算</h4>

<p>矩阵的运算包括加法、数乘、乘法、转置等。这些运算构成了矩阵代数的基本框架，是后续学习逆矩阵、线性方程组等内容的工具基础。</p>

<h5>1. 矩阵的加法</h5>

<p><strong>定义：</strong> 两个同型矩阵 <span class="formula-inline" data-latex="A = (a_{ij})"></span> 和 <span class="formula-inline" data-latex="B = (b_{ij})"></span> 的加法定义为对应元素相加：</p>

<div class="formula-block" data-latex="A + B = (a_{ij} + b_{ij})"></div>

<p><strong>运算律：</strong></p>
<ul>
  <li>交换律：<span class="formula-inline" data-latex="A + B = B + A"></span></li>
  <li>结合律：<span class="formula-inline" data-latex="(A + B) + C = A + (B + C)"></span></li>
  <li>零矩阵：<span class="formula-inline" data-latex="A + O = A"></span></li>
  <li>负矩阵：<span class="formula-inline" data-latex="A + (-A) = O"></span></li>
</ul>

<h5>2. 矩阵的数乘</h5>

<p><strong>定义：</strong> 数 <span class="formula-inline" data-latex="\\lambda"></span> 与矩阵 <span class="formula-inline" data-latex="A = (a_{ij})"></span> 的数乘定义为</p>

<div class="formula-block" data-latex="\\lambda A = (\\lambda a_{ij})"></div>

<p><strong>运算律：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="(\\lambda \\mu) A = \\lambda (\\mu A)"></span></li>
  <li><span class="formula-inline" data-latex="(\\lambda + \\mu) A = \\lambda A + \\mu A"></span></li>
  <li><span class="formula-inline" data-latex="\\lambda (A + B) = \\lambda A + \\lambda B"></span></li>
</ul>

<h4>📘 例题 1：矩阵加法与数乘</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="2A - 3B"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2A = \\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}, \\quad 3B = \\begin{pmatrix} 15 & 18 \\\\ 21 & 24 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2A - 3B = \\begin{pmatrix} 2-15 & 4-18 \\\\ 6-21 & 8-24 \\end{pmatrix} = \\begin{pmatrix} -13 & -14 \\\\ -15 & -16 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\begin{pmatrix} -13 & -14 \\\\ -15 & -16 \\end{pmatrix}"></span></p>
</div>

<h5>3. 矩阵的乘法</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="A = (a_{ij})_{m \\times n}"></span>，<span class="formula-inline" data-latex="B = (b_{ij})_{n \\times p}"></span>，则 <span class="formula-inline" data-latex="A"></span> 与 <span class="formula-inline" data-latex="B"></span> 的乘积 <span class="formula-inline" data-latex="C = AB"></span> 是 <span class="formula-inline" data-latex="m \\times p"></span> 矩阵，其中</p>

<div class="formula-block" data-latex="c_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj} = a_{i1}b_{1j} + a_{i2}b_{2j} + \\cdots + a_{in}b_{nj}"></div>

<p><strong>注意：</strong> 矩阵乘法要求 <span class="formula-inline" data-latex="A"></span> 的列数等于 <span class="formula-inline" data-latex="B"></span> 的行数。</p>

<p><strong>运算律：</strong></p>
<ul>
  <li>结合律：<span class="formula-inline" data-latex="(AB)C = A(BC)"></span></li>
  <li>左分配律：<span class="formula-inline" data-latex="A(B + C) = AB + AC"></span></li>
  <li>右分配律：<span class="formula-inline" data-latex="(A + B)C = AC + BC"></span></li>
</ul>

<div class="note">
  <strong>⚠️ 注意：</strong>
  <p>• 矩阵乘法一般<strong>不满足交换律</strong>：<span class="formula-inline" data-latex="AB \\neq BA"></span></p>
  <p>• 两个非零矩阵的乘积可能为零矩阵</p>
</div>

<h4>📘 例题 2：矩阵乘法</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="AB"></span> 和 <span class="formula-inline" data-latex="BA"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="AB = \\begin{pmatrix} 1 \\times 5 + 2 \\times 7 & 1 \\times 6 + 2 \\times 8 \\\\ 3 \\times 5 + 4 \\times 7 & 3 \\times 6 + 4 \\times 8 \\end{pmatrix} = \\begin{pmatrix} 19 & 22 \\\\ 43 & 50 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="BA = \\begin{pmatrix} 5 \\times 1 + 6 \\times 3 & 5 \\times 2 + 6 \\times 4 \\\\ 7 \\times 1 + 8 \\times 3 & 7 \\times 2 + 8 \\times 4 \\end{pmatrix} = \\begin{pmatrix} 23 & 34 \\\\ 31 & 46 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="AB \\neq BA"></span></p>
</div>

<h4>📘 例题 3：矩阵乘法的结合律</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}, B = \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="AB"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="A"></span> 是单位矩阵，有 <span class="formula-inline" data-latex="AB = B"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="AB = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix} = \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix} = B"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 单位矩阵是矩阵乘法的单位元。</p>
</div>

<h5>4. 矩阵运算总结</h5>

<table>
  <tr>
    <th>运算</th>
    <th>规则</th>
    <th>结果维度</th>
  </tr>
  <tr>
    <td><strong>加法</strong></td>
    <td>对应元素相加</td>
    <td>同型矩阵</td>
  </tr>
  <tr>
    <td><strong>数乘</strong></td>
    <td>每个元素乘以数</td>
    <td>同型矩阵</td>
  </tr>
  <tr>
    <td><strong>乘法</strong></td>
    <td>行 × 列 内积</td>
    <td><span class="formula-inline" data-latex="m \\times p"></span></td>
  </tr>
  <tr>
    <td><strong>转置</strong></td>
    <td>行与列互换</td>
    <td><span class="formula-inline" data-latex="n \\times m"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩阵的运算是线性代数的基本技能。加法、数乘和乘法构成了矩阵代数的主要内容。矩阵乘法的非交换性是其最重要的特征，在学习逆矩阵和线性变换时需要特别注意。
  </p>
</div>
`;