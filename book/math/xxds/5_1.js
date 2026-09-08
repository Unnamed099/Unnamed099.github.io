window.SECTION_CONTENT = `
<h4>📐 特征值与特征向量的概念</h4>

<p>特征值与特征向量是线性代数中最深刻的概念之一。它描述了一个线性变换对某些特殊向量的作用——这些向量在变换下只发生伸缩，不发生方向的改变。</p>

<h5>1. 特征值与特征向量的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="A"></span> 是 <span class="formula-inline" data-latex="n"></span> 阶方阵。若存在数 <span class="formula-inline" data-latex="\\lambda"></span> 和非零向量 <span class="formula-inline" data-latex="X"></span>，使得</p>

<div class="formula-block" data-latex="AX = \\lambda X"></div>

<p>则称 <span class="formula-inline" data-latex="\\lambda"></span> 是 <span class="formula-inline" data-latex="A"></span> 的一个<strong>特征值</strong>，<span class="formula-inline" data-latex="X"></span> 是 <span class="formula-inline" data-latex="A"></span> 的对应于特征值 <span class="formula-inline" data-latex="\\lambda"></span> 的<strong>特征向量</strong>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 特征向量在 <span class="formula-inline" data-latex="A"></span> 的作用下方向不变（或反向）</p>
  <p>• 特征值反映了该方向上伸缩的倍数</p>
  <p>• 特征向量不能是零向量</p>
</div>

<h5>2. 特征方程</h5>

<p>将 <span class="formula-inline" data-latex="AX = \\lambda X"></span> 改写为 <span class="formula-inline" data-latex="(A - \\lambda I)X = 0"></span>。</p>

<p>由于 <span class="formula-inline" data-latex="X \\neq 0"></span>，齐次方程组有非零解，所以</p>

<div class="formula-block" data-latex="|A - \\lambda I| = 0"></div>

<p>这个关于 <span class="formula-inline" data-latex="\\lambda"></span> 的 <span class="formula-inline" data-latex="n"></span> 次方程称为<strong>特征方程</strong>，其左端 <span class="formula-inline" data-latex="|A - \\lambda I|"></span> 称为<strong>特征多项式</strong>。</p>

<h4>📘 例题 1：求二阶矩阵的特征值与特征向量</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"></span> 的特征值与特征向量。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A - \\lambda I| = \\begin{vmatrix} 2-\\lambda & 1 \\\\ 1 & 2-\\lambda \\end{vmatrix} = (2-\\lambda)^2 - 1 = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\lambda - 1)(\\lambda - 3) = 0 \\Rightarrow \\lambda_1 = 1, \\lambda_2 = 3"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="\\lambda_1 = 1"></span> 时，<span class="formula-inline" data-latex="(A - I)X = 0"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} = 0 \\Rightarrow x_1 + x_2 = 0"></span>
  </p>
  <p>得特征向量 <span class="formula-inline" data-latex="X_1 = (1, -1)^T"></span></p>
  
  <p>当 <span class="formula-inline" data-latex="\\lambda_2 = 3"></span> 时，<span class="formula-inline" data-latex="(A - 3I)X = 0"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} -1 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} x_1 \\\\ x_2 \\end{pmatrix} = 0 \\Rightarrow -x_1 + x_2 = 0"></span>
  </p>
  <p>得特征向量 <span class="formula-inline" data-latex="X_2 = (1, 1)^T"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\lambda_1 = 1, X_1 = (1, -1)^T</span>；<span class="formula-inline" data-latex="\\lambda_2 = 3, X_2 = (1, 1)^T"></span></p>
</div>

<h5>3. 特征值的性质</h5>

<p><strong>性质 1：</strong> 设 <span class="formula-inline" data-latex="\\lambda_1, \\lambda_2, \\cdots, \\lambda_n"></span> 是 <span class="formula-inline" data-latex="n"></span> 阶方阵 <span class="formula-inline" data-latex="A"></span> 的特征值，则</p>
<ul>
  <li><span class="formula-inline" data-latex="\\lambda_1 + \\lambda_2 + \\cdots + \\lambda_n = \\text{tr}(A)"></span>（迹，即主对角线元素之和）</li>
  <li><span class="formula-inline" data-latex="\\lambda_1 \\lambda_2 \\cdots \\lambda_n = |A|"></span></li>
</ul>

<p><strong>性质 2：</strong> 若 <span class="formula-inline" data-latex="\\lambda"></span> 是 <span class="formula-inline" data-latex="A"></span> 的特征值，则 <span class="formula-inline" data-latex="\\lambda^k"></span> 是 <span class="formula-inline" data-latex="A^k"></span> 的特征值。</p>

<p><strong>性质 3：</strong> 若 <span class="formula-inline" data-latex="A"></span> 可逆，且 <span class="formula-inline" data-latex="\\lambda"></span> 是 <span class="formula-inline" data-latex="A"></span> 的特征值，则 <span class="formula-inline" data-latex="1/\\lambda"></span> 是 <span class="formula-inline" data-latex="A^{-1}"></span> 的特征值。</p>

<h5>4. 特征值与特征向量总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>性质</th>
  </tr>
  <tr>
    <td><strong>特征值</strong></td>
    <td><span class="formula-inline" data-latex="|A - \\lambda I| = 0"></span></td>
    <td>特征多项式的根</td>
  </tr>
  <tr>
    <td><strong>特征向量</strong></td>
    <td><span class="formula-inline" data-latex="(A - \\lambda I)X = 0"></span></td>
    <td>齐次方程组的非零解</td>
  </tr>
  <tr>
    <td><strong>特征多项式</strong></td>
    <td><span class="formula-inline" data-latex="|A - \\lambda I|"></span></td>
    <td>关于 <span class="formula-inline" data-latex="\\lambda"></span> 的 <span class="formula-inline" data-latex="n"></span> 次多项式</td>
  </tr>
  <tr>
    <td><strong>特征子空间</strong></td>
    <td>属于同一特征值的所有特征向量 + 零向量</td>
    <td>是 <span class="formula-inline" data-latex="\\mathbb{R}^n"></span> 的子空间</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 特征值和特征向量是理解线性变换本质的关键。它们揭示了矩阵在特定方向上的伸缩性质，是矩阵对角化、主成分分析、动力系统稳定性分析等众多应用的理论基础。
  </p>
</div>
`;