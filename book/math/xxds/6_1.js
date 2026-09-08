window.SECTION_CONTENT = `
<h4>📐 二次型及其标准形</h4>

<p>二次型是含有 n 个变量的二次齐次多项式。它在几何上对应二次曲面，在优化中对应目标函数的二阶项，在统计学中对应协方差矩阵。将二次型化为标准形是线性代数的重要应用之一。</p>

<h5>1. 二次型的定义</h5>

<p><strong>定义：</strong> 含有 n 个变量 <span class="formula-inline" data-latex="x_1, x_2, \\cdots, x_n"></span> 的二次齐次函数</p>

<div class="formula-block" data-latex="f(x_1, x_2, \\cdots, x_n) = \\sum_{i=1}^{n} \\sum_{j=1}^{n} a_{ij} x_i x_j"></div>

<p>称为一个 <strong>n 元二次型</strong>。其中 <span class="formula-inline" data-latex="a_{ij} = a_{ji}"></span>（对称性）。</p>

<p>二次型可以用矩阵表示为</p>

<div class="formula-block" data-latex="f(X) = X^T A X"></div>

<p>其中 <span class="formula-inline" data-latex="X = (x_1, x_2, \\cdots, x_n)^T"></span>，<span class="formula-inline" data-latex="A"></span> 是实对称矩阵，称为二次型的<strong>矩阵</strong>。</p>

<h4>📘 例题 1：写出二次型的矩阵</h4>

<div class="example">
  <p><strong>题目：</strong> 写出 <span class="formula-inline" data-latex="f(x, y) = x^2 + 2xy + 3y^2"></span> 的矩阵。</p>
  
  <p><strong>解：</strong></p>
  <p>二次型可写为 <span class="formula-inline" data-latex="X^T A X"></span>，其中 <span class="formula-inline" data-latex="X = (x, y)^T"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 3 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 1 \\\\ 1 & 3 \\end{pmatrix}"></span></p>
</div>

<h5>2. 二次型的标准形</h5>

<p>通过可逆线性变换 <span class="formula-inline" data-latex="X = PY"></span>（<span class="formula-inline" data-latex="P"></span> 可逆），二次型化为</p>

<div class="formula-block" data-latex="f = Y^T (P^T A P) Y = d_1 y_1^2 + d_2 y_2^2 + \\cdots + d_n y_n^2"></div>

<p>这种只含平方项的形式称为二次型的<strong>标准形</strong>。</p>

<p><strong>定理：</strong> 对任意实对称矩阵 <span class="formula-inline" data-latex="A"></span>，存在正交矩阵 <span class="formula-inline" data-latex="Q"></span>，使得</p>

<div class="formula-block" data-latex="Q^T A Q = \\Lambda = \\text{diag}(\\lambda_1, \\lambda_2, \\cdots, \\lambda_n)"></div>

<p>即任意实二次型都可以通过正交变换化为标准形，且标准形的系数就是 <span class="formula-inline" data-latex="A"></span> 的特征值。</p>

<h4>📘 例题 2：将二次型化为标准形</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x, y) = 2x^2 + 2xy + 2y^2"></span> 化为标准形。</p>
  
  <p><strong>解：</strong></p>
  <p>二次型的矩阵为 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"></span></p>
  <p>特征值：<span class="formula-inline" data-latex="\\lambda_1 = 1, \\lambda_2 = 3"></span></p>
  <p>所以标准形为 <span class="formula-inline" data-latex="f = y_1^2 + 3y_2^2"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f = y_1^2 + 3y_2^2"></span></p>
</div>

<h5>3. 惯性定理</h5>

<p><strong>定理（惯性定理）：</strong> 二次型的标准形中，正平方项的个数 <span class="formula-inline" data-latex="p"></span>、负平方项的个数 <span class="formula-inline" data-latex="q"></span>、零平方项的个数 <span class="formula-inline" data-latex="r"></span> 在可逆线性变换下保持不变。</p>

<p>其中：</p>
<ul>
  <li><span class="formula-inline" data-latex="p"></span> 称为<strong>正惯性指数</strong></li>
  <li><span class="formula-inline" data-latex="q"></span> 称为<strong>负惯性指数</strong></li>
  <li><span class="formula-inline" data-latex="p + q = r(A)"></span>（矩阵的秩）</li>
</ul>

<h5>4. 配方法化二次型为标准形</h5>

<p>除了正交变换法外，还可以用<strong>配方法</strong>将二次型化为标准形。配方法的步骤是：</p>
<ol>
  <li>选定一个变量，将其平方项和交叉项配成完全平方</li>
  <li>重复上述步骤，直到所有项都被处理</li>
  <li>得到只含平方项的标准形</li>
</ol>

<h4>📘 例题 3：用配方法化二次型</h4>

<div class="example">
  <p><strong>题目：</strong> 用配方法将 <span class="formula-inline" data-latex="f(x, y, z) = x^2 + 2y^2 + 3z^2 + 2xy + 4xz"></span> 化为标准形。</p>
  
  <p><strong>解：</strong></p>
  <p>先配 <span class="formula-inline" data-latex="x"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f = (x^2 + 2xy + 4xz) + 2y^2 + 3z^2"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= (x + y + 2z)^2 + y^2 - z^2"></span>
  </p>
  <p>令 <span class="formula-inline" data-latex="\\begin{cases} u = x + y + 2z \\\\ v = y \\\\ w = z \\end{cases}"></span>，则</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f = u^2 + v^2 - w^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f = u^2 + v^2 - w^2"></span></p>
</div>

<h5>5. 二次型总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>变换类型</th>
    <th>特点</th>
  </tr>
  <tr>
    <td><strong>正交变换法</strong></td>
    <td>正交变换</td>
    <td>系数为特征值，保持几何性质</td>
  </tr>
  <tr>
    <td><strong>配方法</strong></td>
    <td>可逆线性变换</td>
    <td>操作灵活，系数简单</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二次型是线性代数与几何、优化、统计的交叉点。通过将二次型化为标准形，可以清晰地看出二次型的结构特征。惯性定理揭示了二次型在可逆线性变换下的本质不变量，是二次型理论的核心内容。
  </p>
</div>
`;