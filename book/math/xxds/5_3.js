window.SECTION_CONTENT = `
<h4>📐 相似矩阵</h4>

<p>相似矩阵是刻画同一线性变换在不同基下表示的重要概念。相似矩阵具有相同的特征值、迹、行列式等不变量，这些不变量构成了矩阵的"本质特征"。</p>

<h5>1. 相似矩阵的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="A, B"></span> 是 <span class="formula-inline" data-latex="n"></span> 阶方阵。若存在可逆矩阵 <span class="formula-inline" data-latex="P"></span>，使得</p>

<div class="formula-block" data-latex="B = P^{-1} A P"></div>

<p>则称 <span class="formula-inline" data-latex="A"></span> 与 <span class="formula-inline" data-latex="B"></span> <strong>相似</strong>，记作 <span class="formula-inline" data-latex="A \\sim B"></span>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 相似矩阵是同一个线性变换在不同基下的矩阵表示</p>
  <p>• 相似关系是等价关系（自反、对称、传递）</p>
  <p>• 研究矩阵的相似类，就是研究线性变换的本质</p>
</div>

<h5>2. 相似矩阵的性质</h5>

<p><strong>性质 1（特征值相同）：</strong> 相似矩阵有相同的特征值。</p>
<p>证明：<span class="formula-inline" data-latex="|B - \\lambda I| = |P^{-1}AP - \\lambda I| = |P^{-1}(A - \\lambda I)P| = |A - \\lambda I|"></span>。</p>

<p><strong>性质 2（迹相同）：</strong> <span class="formula-inline" data-latex="\\text{tr}(A) = \\text{tr}(B)"></span>。</p>
<p><strong>性质 3（行列式相同）：</strong> <span class="formula-inline" data-latex="|A| = |B|"></span>。</p>
<p><strong>性质 4（秩相同）：</strong> <span class="formula-inline" data-latex="r(A) = r(B)"></span>。</p>
<p><strong>性质 5（特征多项式相同）：</strong> <span class="formula-inline" data-latex="|A - \\lambda I| = |B - \\lambda I|"></span>。</p>

<h5>3. 相似对角化</h5>

<p><strong>定义：</strong> 若 <span class="formula-inline" data-latex="A"></span> 与对角矩阵相似，即存在可逆矩阵 <span class="formula-inline" data-latex="P"></span> 使得</p>

<div class="formula-block" data-latex="P^{-1} A P = \\begin{pmatrix} \\lambda_1 & & & \\\\ & \\lambda_2 & & \\\\ & & \\ddots & \\\\ & & & \\lambda_n \\end{pmatrix} = \\Lambda"></div>

<p>则称 <span class="formula-inline" data-latex="A"></span> <strong>可对角化</strong>。</p>

<p><strong>定理：</strong> <span class="formula-inline" data-latex="A"></span> 可对角化 <span class="formula-inline" data-latex="\\Leftrightarrow A"></span> 有 <span class="formula-inline" data-latex="n"></span> 个线性无关的特征向量。</p>

<h4>📘 例题 1：判断矩阵是否可对角化</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}"></span> 是否可对角化。</p>
  
  <p><strong>解：</strong></p>
  <p>由前例，<span class="formula-inline" data-latex="A"></span> 的特征值为 <span class="formula-inline" data-latex="\\lambda = 2"></span>（二重），只有一个线性无关的特征向量 <span class="formula-inline" data-latex="(1,0)^T"></span>。</p>
  <p>2 阶矩阵只有 1 个线性无关的特征向量，所以不可对角化。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 不可对角化</p>
</div>

<h4>📘 例题 2：构造相似变换</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"></span> 的相似对角化。</p>
  
  <p><strong>解：</strong></p>
  <p>由前例，特征值为 <span class="formula-inline" data-latex="\\lambda_1 = 1, \\lambda_2 = 3"></span>。</p>
  <p>对应的特征向量为 <span class="formula-inline" data-latex="X_1 = (1, -1)^T, X_2 = (1, 1)^T"></span>。</p>
  <p>令 <span class="formula-inline" data-latex="P = (X_1, X_2) = \\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P^{-1} A P = \\begin{pmatrix} 1 & 0 \\\\ 0 & 3 \\end{pmatrix} = \\Lambda"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="A"></span> 可对角化，<span class="formula-inline" data-latex="\\Lambda = \\text{diag}(1, 3)"></span></p>
</div>

<h5>4. 相似矩阵的几何意义</h5>

<p>如果 <span class="formula-inline" data-latex="A \\sim B"></span>，那么 <span class="formula-inline" data-latex="A"></span> 和 <span class="formula-inline" data-latex="B"></span> 表示的是同一个线性变换在不同基下的矩阵。因此，矩阵的相似类反映了该线性变换的本质特征。</p>

<p><strong>不变量总结：</strong></p>
<ul>
  <li>特征值（代数量，不计顺序）</li>
  <li>特征多项式</li>
  <li>迹</li>
  <li>行列式</li>
  <li>秩</li>
</ul>

<h5>5. 相似矩阵总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>性质</th>
  </tr>
  <tr>
    <td><strong>相似</strong></td>
    <td><span class="formula-inline" data-latex="B = P^{-1}AP"></span></td>
    <td>同一线性变换的不同表示</td>
  </tr>
  <tr>
    <td><strong>可对角化</strong></td>
    <td><span class="formula-inline" data-latex">A \\sim \\Lambda</span></td>
    <td>存在 n 个线性无关的特征向量</td>
  </tr>
  <tr>
    <td><strong>不变量</strong></td>
    <td>特征值、迹、行列式、秩</td>
    <td>相似矩阵不变</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 相似矩阵是线性代数中最核心的概念之一。它揭示了同一个线性变换在不同基下表现形式的内在联系。矩阵的对角化是相似理论的最重要的应用，它将复杂的矩阵运算转化为对角矩阵的简单运算。
  </p>
</div>
`;