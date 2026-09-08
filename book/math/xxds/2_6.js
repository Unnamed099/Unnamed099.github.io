window.SECTION_CONTENT = `
<h4>📐 矩阵的秩</h4>

<p>矩阵的秩是线性代数中最基本的概念之一，它反映了矩阵所包含的"信息量"。秩是矩阵理论的核心概念，与线性方程组的解、向量组的线性相关性等密切相关。</p>

<h5>1. 矩阵的秩的定义</h5>

<p><strong>定义：</strong> 在 <span class="formula-inline" data-latex="m \\times n"></span> 矩阵 <span class="formula-inline" data-latex="A"></span> 中，任取 <span class="formula-inline" data-latex="k"></span> 行 <span class="formula-inline" data-latex="k"></span> 列，位于这些行列交叉处的 <span class="formula-inline" data-latex="k^2"></span> 个元素构成的 <span class="formula-inline" data-latex="k"></span> 阶行列式称为 <span class="formula-inline" data-latex="A"></span> 的一个 <span class="formula-inline" data-latex="k"></span> 阶<strong>子式</strong>。</p>

<p>矩阵 <span class="formula-inline" data-latex="A"></span> 的<strong>秩</strong>，记作 <span class="formula-inline" data-latex="r(A)"></span>，是 <span class="formula-inline" data-latex="A"></span> 中<strong>非零子式的最高阶数</strong>。</p>

<p>等价定义：秩等于矩阵<strong>行向量组</strong>（或列向量组）的<strong>极大线性无关组</strong>所含向量的个数。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• <span class="formula-inline" data-latex="0 \\le r(A) \\le \\min(m, n)"></span></p>
  <p>• 若 <span class="formula-inline" data-latex="r(A) = \\min(m, n)"></span>，称 <span class="formula-inline" data-latex="A"></span> 为<strong>满秩矩阵</strong></p>
  <p>• 方阵 <span class="formula-inline" data-latex="A"></span> 可逆 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) = n"></span></p>
</div>

<h5>2. 矩阵秩的求法</h5>

<p><strong>方法一：初等行变换法</strong></p>

<p>将矩阵 <span class="formula-inline" data-latex="A"></span> 通过初等行变换化为<strong>行阶梯形</strong>，非零行的行数即为矩阵的秩。</p>

<p><strong>方法二：子式法</strong></p>

<p>直接从定义出发，寻找最高阶非零子式。适合低阶矩阵。</p>

<h4>📘 例题 1：用初等行变换求矩阵的秩</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{pmatrix}"></span> 的秩。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A \\xrightarrow{r_2 - 2r_1} \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}"></span>
  </p>
  <p>行阶梯形中非零行只有 1 行。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="r(A) = 1"></span></p>
</div>

<h4>📘 例题 2：含参数矩阵的秩</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & a \\end{pmatrix}"></span> 的秩（<span class="formula-inline" data-latex="a"></span> 为参数）。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A \\xrightarrow{r_2 - 2r_1} \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & a-9 \\end{pmatrix}"></span>
  </p>
  <p>当 <span class="formula-inline" data-latex="a = 9"></span> 时，第三行全为零，<span class="formula-inline" data-latex="r(A) = 1"></span>。</p>
  <p>当 <span class="formula-inline" data-latex="a \\neq 9"></span> 时，第三行非零，<span class="formula-inline" data-latex="r(A) = 2"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="a = 9</span> 时 <span class="formula-inline" data-latex="r(A)=1</span>，<span class="formula-inline" data-latex="a \\neq 9</span> 时 <span class="formula-inline" data-latex="r(A)=2"></span></p>
</div>

<h5>3. 矩阵秩的性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="r(A) = r(A^T)"></span></p>
<p><strong>性质 2：</strong> <span class="formula-inline" data-latex="r(A + B) \\le r(A) + r(B)"></span></p>
<p><strong>性质 3：</strong> <span class="formula-inline" data-latex="r(AB) \\le \\min\\{r(A), r(B)\\}"></span></p>
<p><strong>性质 4：</strong> 若 <span class="formula-inline" data-latex="P, Q"></span> 可逆，则 <span class="formula-inline" data-latex="r(PAQ) = r(A)"></span>（初等变换不改变秩）</p>
<p><strong>性质 5：</strong> <span class="formula-inline" data-latex="r(A) = r(A^T A)"></span>（实数矩阵）</p>

<h5>4. 秩与线性方程组</h5>

<p>对于 <span class="formula-inline" data-latex="m \\times n"></span> 线性方程组 <span class="formula-inline" data-latex="AX = b"></span>：</p>
<ul>
  <li>若 <span class="formula-inline" data-latex="r(A) = r(A \\mid b)"></span>，方程组有解</li>
  <li>若 <span class="formula-inline" data-latex="r(A) = r(A \\mid b) = n"></span>，方程组有唯一解</li>
  <li>若 <span class="formula-inline" data-latex="r(A) = r(A \\mid b) < n"></span>，方程组有无穷多解</li>
  <li>若 <span class="formula-inline" data-latex="r(A) < r(A \\mid b)"></span>，方程组无解</li>
</ul>

<h5>5. 矩阵的秩总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>计算方法</th>
  </tr>
  <tr>
    <td><strong>矩阵的秩</strong></td>
    <td>非零子式的最高阶数</td>
    <td>初等行变换化阶梯形</td>
  </tr>
  <tr>
    <td><strong>行秩</strong></td>
    <td>行向量组的秩</td>
    <td>行向量极大无关组个数</td>
  </tr>
  <tr>
    <td><strong>列秩</strong></td>
    <td>列向量组的秩</td>
    <td>列向量极大无关组个数</td>
  </tr>
  <tr>
    <td><strong>满秩</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = \\min(m, n)"></span></td>
    <td>方阵可逆</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩阵的秩是线性代数中最核心的数值特征之一。它统一了线性方程组解的存在性、向量组的线性相关性、矩阵可逆性等多个概念。理解秩的本质，是掌握线性代数整体理论的关键。
  </p>
</div>
`;