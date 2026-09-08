window.SECTION_CONTENT = `
<h4>📐 矩阵的概念</h4>

<p>矩阵是线性代数中最基本的概念之一。它是由若干个数排成的矩形数表，是线性变换、线性方程组、向量空间等理论的载体。</p>

<h5>1. 矩阵的定义</h5>

<p><strong>定义：</strong> 由 <span class="formula-inline" data-latex="m \\times n"></span> 个数 <span class="formula-inline" data-latex="a_{ij}"></span>（<span class="formula-inline" data-latex="i = 1, 2, \\cdots, m; j = 1, 2, \\cdots, n"></span>）排成的 <span class="formula-inline" data-latex="m"></span> 行 <span class="formula-inline" data-latex="n"></span> 列的矩形数表</p>

<div class="formula-block" data-latex="A = \\begin{pmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{m1} & a_{m2} & \\cdots & a_{mn} \\end{pmatrix}"></div>

<p>称为 <span class="formula-inline" data-latex="m \\times n"></span> <strong>矩阵</strong>，记作 <span class="formula-inline" data-latex="A = (a_{ij})_{m \\times n}"></span>。</p>

<p><strong>几个特殊矩阵：</strong></p>

<table>
  <tr>
    <th>名称</th>
    <th>定义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>行矩阵</strong></td>
    <td>只有一行的矩阵（<span class="formula-inline" data-latex="1 \\times n"></span>）</td>
    <td><span class="formula-inline" data-latex="(1, 2, 3)"></span></td>
  </tr>
  <tr>
    <td><strong>列矩阵</strong></td>
    <td>只有一列的矩阵（<span class="formula-inline" data-latex="m \\times 1"></span>）</td>
    <td><span class="formula-inline" data-latex="\\begin{pmatrix} 1 \\\\ 2 \\\\ 3 \\end{pmatrix}"></span></td>
  </tr>
  <tr>
    <td><strong>方阵</strong></td>
    <td>行数等于列数（<span class="formula-inline" data-latex="n \\times n"></span>）</td>
    <td><span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"></span></td>
  </tr>
  <tr>
    <td><strong>零矩阵</strong></td>
    <td>所有元素都为 0</td>
    <td><span class="formula-inline" data-latex="\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}"></span></td>
  </tr>
  <tr>
    <td><strong>单位矩阵</strong></td>
    <td>主对角线为 1，其余为 0 的方阵</td>
    <td><span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}"></span></td>
  </tr>
  <tr>
    <td><strong>对角矩阵</strong></td>
    <td>非主对角线元素均为 0 的方阵</td>
    <td><span class="formula-inline" data-latex="\\begin{pmatrix} a & 0 \\\\ 0 & b \\end{pmatrix}"></span></td>
  </tr>
</table>

<h5>2. 矩阵的相等</h5>

<p>两个矩阵 <span class="formula-inline" data-latex="A = (a_{ij})"></span> 和 <span class="formula-inline" data-latex="B = (b_{ij})"></span> 相等，当且仅当：</p>
<ul>
  <li>它们有相同的行数和列数</li>
  <li>对应位置的元素相等：<span class="formula-inline" data-latex="a_{ij} = b_{ij}"></span> 对所有 <span class="formula-inline" data-latex="i, j"></span> 成立</li>
</ul>

<h5>3. 矩阵与行列式的区别</h5>

<table>
  <tr>
    <th></th>
    <th>矩阵</th>
    <th>行列式</th>
  </tr>
  <tr>
    <td><strong>本质</strong></td>
    <td>一个数表（矩形）</td>
    <td>一个数值（方阵）</td>
  </tr>
  <tr>
    <td><strong>形状</strong></td>
    <td>可以是任意 <span class="formula-inline" data-latex="m \\times n"></span></td>
    <td>必须是 <span class="formula-inline" data-latex="n \\times n"></span></td>
  </tr>
  <tr>
    <td><strong>运算</strong></td>
    <td>加、减、乘、转置等</td>
    <td>展开求值</td>
  </tr>
  <tr>
    <td><strong>记号</strong></td>
    <td>圆括号 <span class="formula-inline" data-latex">(\\ )</span> 或方括号 <span class="formula-inline" data-latex">[\\ ]</span></td>
    <td>双竖线 <span class="formula-inline" data-latex="|\\ |"></span></td>
  </tr>
</table>

<h4>📘 例题 1：矩阵的相等</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\begin{pmatrix} x & 2 \\\\ 3 & y \\end{pmatrix} = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="x, y"></span> 的值。</p>
  
  <p><strong>解：</strong></p>
  <p>由矩阵相等的条件，对应元素相等：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x = 1, \\quad y = 4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 1, y = 4"></span></p>
</div>

<h5>4. 矩阵的转置</h5>

<p><strong>定义：</strong> 将矩阵 <span class="formula-inline" data-latex="A = (a_{ij})_{m \\times n}"></span> 的行与列互换，得到的 <span class="formula-inline" data-latex="n \\times m"></span> 矩阵称为 <span class="formula-inline" data-latex="A"></span> 的<strong>转置矩阵</strong>，记作 <span class="formula-inline" data-latex="A^T"></span>。</p>

<div class="formula-block" data-latex="A^T = (a_{ji})_{n \\times m}"></div>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="(A^T)^T = A"></span></li>
  <li><span class="formula-inline" data-latex="(A + B)^T = A^T + B^T"></span></li>
  <li><span class="formula-inline" data-latex="(\\lambda A)^T = \\lambda A^T"></span></li>
</ul>

<h4>📘 例题 2：矩阵的转置</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}"></span>，求 <span class="formula-inline" data-latex="A^T"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>将行与列互换：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="A^T = \\begin{pmatrix} 1 & 4 \\\\ 2 & 5 \\\\ 3 & 6 \\end{pmatrix}"></span></p>
</div>

<h5>5. 矩阵的应用</h5>

<p>矩阵在多个领域有广泛应用：</p>
<ul>
  <li><strong>线性方程组：</strong> 用系数矩阵和增广矩阵表示</li>
  <li><strong>线性变换：</strong> 向量的旋转、缩放、投影等</li>
  <li><strong>计算机图形学：</strong> 三维图形的变换矩阵</li>
  <li><strong>数据分析：</strong> 数据矩阵和协方差矩阵</li>
  <li><strong>网络科学：</strong> 邻接矩阵表示图</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩阵是线性代数的核心工具。它不仅是表示线性方程组和线性变换的数学对象，也是现代科学和工程中不可或缺的数学模型。理解矩阵的基本概念和特殊矩阵，是学习后续内容的基础。
  </p>
</div>
`;