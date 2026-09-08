window.SECTION_CONTENT = `
<h4>📐 向量组及其线性组合</h4>

<p>向量是线性代数中最基本的研究对象。向量组是由若干个同维向量组成的集合，研究向量组之间的关系是理解线性方程组解的结构的基础。</p>

<h5>1. n 维向量的概念</h5>

<p><strong>定义：</strong> <span class="formula-inline" data-latex="n"></span> 个有次序的数 <span class="formula-inline" data-latex="a_1, a_2, \\cdots, a_n"></span> 所组成的数组 <span class="formula-inline" data-latex="(a_1, a_2, \\cdots, a_n)"></span> 称为 <span class="formula-inline" data-latex="n"></span> 维向量。</p>

<p><strong>分类：</strong></p>
<ul>
  <li><strong>行向量：</strong> <span class="formula-inline" data-latex="\\alpha = (a_1, a_2, \\cdots, a_n)"></span></li>
  <li><strong>列向量：</strong> <span class="formula-inline" data-latex="\\beta = \\begin{pmatrix} b_1 \\\\ b_2 \\\\ \\vdots \\\\ b_n \\end{pmatrix}"></span></li>
</ul>

<p><strong>零向量：</strong> 所有分量均为 0 的向量，记作 <span class="formula-inline" data-latex="\\mathbf{0}"></span>。</p>

<h5>2. 向量的线性运算</h5>

<p><strong>（1）加法</strong></p>
<p>两个同维向量对应分量相加：</p>
<div class="formula-block" data-latex="(a_1, a_2, \\cdots, a_n) + (b_1, b_2, \\cdots, b_n) = (a_1 + b_1, a_2 + b_2, \\cdots, a_n + b_n)"></div>

<p><strong>（2）数乘</strong></p>
<p>数 <span class="formula-inline" data-latex="\\lambda"></span> 与向量的数乘：</p>
<div class="formula-block" data-latex="\\lambda (a_1, a_2, \\cdots, a_n) = (\\lambda a_1, \\lambda a_2, \\cdots, \\lambda a_n)"></div>

<h5>3. 向量组的线性组合</h5>

<p><strong>定义：</strong> 对于向量组 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span>，表达式</p>

<div class="formula-block" data-latex="k_1 \\alpha_1 + k_2 \\alpha_2 + \\cdots + k_m \\alpha_m"></div>

<p>称为向量组的一个<strong>线性组合</strong>，其中 <span class="formula-inline" data-latex="k_1, k_2, \\cdots, k_m"></span> 称为<strong>组合系数</strong>。</p>

<p><strong>定义：</strong> 若向量 <span class="formula-inline" data-latex="\\beta"></span> 可以表示为向量组 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span> 的线性组合，即存在 <span class="formula-inline" data-latex="k_1, k_2, \\cdots, k_m"></span> 使得</p>

<div class="formula-block" data-latex="\\beta = k_1 \\alpha_1 + k_2 \\alpha_2 + \\cdots + k_m \\alpha_m"></div>

<p>则称 <span class="formula-inline" data-latex="\\beta"></span> 可由向量组 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span> <strong>线性表示</strong>。</p>

<h4>📘 例题 1：线性表示</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\beta = (2, 3)"></span> 是否能由 <span class="formula-inline" data-latex="\\alpha_1 = (1, 1), \\alpha_2 = (1, 2)"></span> 线性表示。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="\\beta = k_1 \\alpha_1 + k_2 \\alpha_2"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(2, 3) = k_1(1, 1) + k_2(1, 2) = (k_1 + k_2, k_1 + 2k_2)"></span>
  </p>
  <p>得到方程组：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} k_1 + k_2 = 2 \\\\ k_1 + 2k_2 = 3 \\end{cases} \\Rightarrow k_1 = 1, k_2 = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 能，<span class="formula-inline" data-latex="\\beta = \\alpha_1 + \\alpha_2"></span></p>
</div>

<h5>4. 线性组合与线性方程组的关系</h5>

<p>向量 <span class="formula-inline" data-latex="\\beta"></span> 可由向量组 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_m"></span> 线性表示，等价于线性方程组</p>

<div class="formula-block" data-latex="k_1 \\alpha_1 + k_2 \\alpha_2 + \\cdots + k_m \\alpha_m = \\beta"></div>

<p>有解。</p>

<p>当 <span class="formula-inline" data-latex="\\alpha_i"></span> 是列向量时，上述方程可写成矩阵形式</p>

<div class="formula-block" data-latex="A k = \\beta"></div>

<p>其中 <span class="formula-inline" data-latex="A = (\\alpha_1, \\alpha_2, \\cdots, \\alpha_m)"></span>，<span class="formula-inline" data-latex="k = (k_1, k_2, \\cdots, k_m)^T"></span>。</p>

<h5>5. 向量组等价的定义</h5>

<p><strong>定义：</strong> 若向量组 <span class="formula-inline" data-latex="A"></span> 中的每个向量都可以由向量组 <span class="formula-inline" data-latex="B"></span> 线性表示，且 <span class="formula-inline" data-latex="B"></span> 中的每个向量也可以由 <span class="formula-inline" data-latex="A"></span> 线性表示，则称向量组 <span class="formula-inline" data-latex="A"></span> 与 <span class="formula-inline" data-latex="B"></span> <strong>等价</strong>。</p>

<p>向量组等价具有自反性、对称性和传递性。</p>

<h5>6. 向量组与线性组合总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>关键性质</th>
  </tr>
  <tr>
    <td><strong>向量</strong></td>
    <td><span class="formula-inline" data-latex="n"></span> 个有序数</td>
    <td>行向量/列向量</td>
  </tr>
  <tr>
    <td><strong>线性组合</strong></td>
    <td><span class="formula-inline" data-latex="\\sum k_i \\alpha_i"></span></td>
    <td>组合系数任意</td>
  </tr>
  <tr>
    <td><strong>线性表示</strong></td>
    <td><span class="formula-inline" data-latex="\\beta = \\sum k_i \\alpha_i"></span></td>
    <td>等价于方程组有解</td>
  </tr>
  <tr>
    <td><strong>向量组等价</strong></td>
    <td>相互线性表示</td>
    <td>等价关系</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 向量组的线性组合是线性代数中最重要的概念之一。它连接了向量与矩阵、线性方程组，是理解向量空间、线性相关性的基础。线性表示问题本质上是一个线性方程组的求解问题。
  </p>
</div>
`;