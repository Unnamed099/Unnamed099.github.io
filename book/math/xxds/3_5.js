window.SECTION_CONTENT = `
<h4>📐 向量空间</h4>

<p>向量空间（或称线性空间）是线性代数中最基本、最抽象的概念。它是一组向量的集合，在这个集合上定义了加法和数乘两种运算，并且满足八条运算律。向量空间为研究线性方程组、线性变换等提供了统一的框架。</p>

<h5>1. 向量空间的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="V"></span> 是非空集合，在 <span class="formula-inline" data-latex="V"></span> 上定义了加法和数乘两种运算，且满足以下八条运算律：</p>

<p><strong>加法运算律：</strong></p>
<ol>
  <li>交换律：<span class="formula-inline" data-latex="\\alpha + \\beta = \\beta + \\alpha"></span></li>
  <li>结合律：<span class="formula-inline" data-latex="(\\alpha + \\beta) + \\gamma = \\alpha + (\\beta + \\gamma)"></span></li>
  <li>零向量：存在 <span class="formula-inline" data-latex="\\mathbf{0} \\in V"></span>，使 <span class="formula-inline" data-latex="\\alpha + \\mathbf{0} = \\alpha"></span></li>
  <li>负向量：对任意 <span class="formula-inline" data-latex="\\alpha \\in V"></span>，存在 <span class="formula-inline" data-latex="-\\alpha \\in V"></span>，使 <span class="formula-inline" data-latex="\\alpha + (-\\alpha) = \\mathbf{0}"></span></li>
</ol>

<p><strong>数乘运算律：</strong></p>
<ol start="5">
  <li><span class="formula-inline" data-latex="k(\\alpha + \\beta) = k\\alpha + k\\beta"></span></li>
  <li><span class="formula-inline" data-latex="(k + l)\\alpha = k\\alpha + l\\alpha"></span></li>
  <li><span class="formula-inline" data-latex="k(l\\alpha) = (kl)\\alpha"></span></li>
  <li><span class="formula-inline" data-latex="1\\alpha = \\alpha"></span></li>
</ol>

<p>则称 <span class="formula-inline" data-latex="V"></span> 是数域 <span class="formula-inline" data-latex="K"></span> 上的<strong>向量空间</strong>。</p>

<h5>2. 子空间</h5>

<p><strong>定义：</strong> 若 <span class="formula-inline" data-latex="W"></span> 是向量空间 <span class="formula-inline" data-latex="V"></span> 的非空子集，且 <span class="formula-inline" data-latex="W"></span> 对 <span class="formula-inline" data-latex="V"></span> 的加法和数乘运算封闭（即任意 <span class="formula-inline" data-latex="\\alpha, \\beta \\in W"></span>，有 <span class="formula-inline" data-latex="\\alpha + \\beta \\in W</span>；任意 <span class="formula-inline" data-latex="k \\in K, \\alpha \\in W"></span>，有 <span class="formula-inline" data-latex="k\\alpha \\in W"></span>），则称 <span class="formula-inline" data-latex="W"></span> 是 <span class="formula-inline" data-latex="V"></span> 的<strong>子空间</strong>。</p>

<h5>3. 基与维数</h5>

<p><strong>定义：</strong> 若向量空间 <span class="formula-inline" data-latex="V"></span> 中的向量组 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_n"></span> 满足：</p>
<ul>
  <li>线性无关</li>
  <li><span class="formula-inline" data-latex="V"></span> 中任意向量都可以由它们线性表示</li>
</ul>
<p>则称 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2, \\cdots, \\alpha_n"></span> 是 <span class="formula-inline" data-latex="V"></span> 的一组<strong>基</strong>。</p>

<p><strong>维数：</strong> 基中向量的个数称为向量空间 <span class="formula-inline" data-latex="V"></span> 的<strong>维数</strong>，记作 <span class="formula-inline" data-latex="\\dim V"></span>。</p>

<h4>📘 例题 1：判断是否为向量空间</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="V = \\{ (x, y) \\mid x, y \\in \\mathbb{R}, x + y = 0 \\}"></span> 是否为 <span class="formula-inline" data-latex="\\mathbb{R}^2"></span> 的子空间。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="\\alpha = (x_1, y_1), \\beta = (x_2, y_2) \\in V"></span>，则 <span class="formula-inline" data-latex="x_1 + y_1 = 0, x_2 + y_2 = 0"></span></p>
  <p><span class="formula-inline" data-latex="\\alpha + \\beta = (x_1 + x_2, y_1 + y_2)"></span>，</p>
  <p><span class="formula-inline" data-latex="(x_1 + x_2) + (y_1 + y_2) = (x_1 + y_1) + (x_2 + y_2) = 0"></span></p>
  <p>所以 <span class="formula-inline" data-latex="\\alpha + \\beta \\in V"></span>。</p>
  <p>对任意 <span class="formula-inline" data-latex="k \\in \\mathbb{R}"></span>，<span class="formula-inline" data-latex="k\\alpha = (kx_1, ky_1)"></span>，</p>
  <p><span class="formula-inline" data-latex="kx_1 + ky_1 = k(x_1 + y_1) = 0"></span>，所以 <span class="formula-inline" data-latex="k\\alpha \\in V"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 是子空间（过原点的直线）</p>
</div>

<h4>📘 例题 2：求向量空间的基和维数</h4>

<div class="example">
  <p><strong>题目：</strong> 求向量空间 <span class="formula-inline" data-latex="V = \\{ (x, y, z) \\mid x + y + z = 0 \\}"></span> 的基和维数。</p>
  
  <p><strong>解：</strong></p>
  <p>由 <span class="formula-inline" data-latex="x + y + z = 0"></span>，得 <span class="formula-inline" data-latex="x = -y - z"></span>。</p>
  <p>令 <span class="formula-inline" data-latex="y = 1, z = 0"></span>，得 <span class="formula-inline" data-latex="\\alpha_1 = (-1, 1, 0)"></span></p>
  <p>令 <span class="formula-inline" data-latex="y = 0, z = 1"></span>，得 <span class="formula-inline" data-latex="\\alpha_2 = (-1, 0, 1)"></span></p>
  <p><span class="formula-inline" data-latex="\\alpha_1, \\alpha_2"></span> 线性无关，且 <span class="formula-inline" data-latex="V"></span> 中任意向量可表示为</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(x, y, z) = (-y-z, y, z) = y(-1,1,0) + z(-1,0,1)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 基为 <span class="formula-inline" data-latex="\\{(-1,1,0), (-1,0,1)\\}</span>，维数为 <strong>2</strong></p>
</div>

<h5>4. 向量空间的同构</h5>

<p><strong>定义：</strong> 若两个向量空间之间存在一一对应的线性映射，则称这两个向量空间<strong>同构</strong>。</p>

<p>同构的向量空间具有完全相同的结构，可以相互等同。例如，<span class="formula-inline" data-latex="\\mathbb{R}^n"></span> 与所有 <span class="formula-inline" data-latex="n"></span> 维向量空间同构。</p>

<h5>5. 向量空间总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>向量空间</strong></td>
    <td>满足八条运算律的集合</td>
    <td><span class="formula-inline" data-latex="\\mathbb{R}^n"></span></td>
  </tr>
  <tr>
    <td><strong>子空间</strong></td>
    <td>对运算封闭的非空子集</td>
    <td>过原点的直线/平面</td>
  </tr>
  <tr>
    <td><strong>基</strong></td>
    <td>线性无关的生成组</td>
    <td>单位向量组</td>
  </tr>
  <tr>
    <td><strong>维数</strong></td>
    <td>基中向量的个数</td>
    <td><span class="formula-inline" data-latex="\\dim \\mathbb{R}^n = n"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 向量空间是线性代数中最高层次的抽象概念。它将几何中的直线、平面以及更一般的线性结构统一在一个理论框架中。基和维数则是描述向量空间"大小"和"结构"的基本工具。
  </p>
</div>
`;