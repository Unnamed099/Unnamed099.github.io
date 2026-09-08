window.SECTION_CONTENT = `
<h4>📐 正定二次型</h4>

<p>正定二次型是二次型中最重要的类别之一。它在判断多元函数的极值、优化问题、矩阵理论和统计学中都有广泛的应用。正定性是实对称矩阵的一个重要性质。</p>

<h5>1. 正定二次型的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="f(X) = X^T A X"></span> 是 n 元二次型，若对任意 <span class="formula-inline" data-latex="X \\neq 0"></span>，都有</p>

<div class="formula-block" data-latex="f(X) = X^T A X > 0"></div>

<p>则称 <span class="formula-inline" data-latex="f"></span> 为<strong>正定二次型</strong>，相应的矩阵 <span class="formula-inline" data-latex="A"></span> 称为<strong>正定矩阵</strong>。</p>

<p>类似地，可以定义：</p>
<ul>
  <li><strong>负定：</strong> <span class="formula-inline" data-latex="X^T A X < 0"></span>（<span class="formula-inline" data-latex="X \\neq 0"></span>）</li>
  <li><strong>半正定：</strong> <span class="formula-inline" data-latex="X^T A X \\ge 0"></span>（<span class="formula-inline" data-latex="\\forall X"></span>）</li>
  <li><strong>半负定：</strong> <span class="formula-inline" data-latex="X^T A X \\le 0"></span>（<span class="formula-inline" data-latex="\\forall X"></span>）</li>
  <li><strong>不定：</strong> 既有正值也有负值</li>
</ul>

<h5>2. 正定矩阵的判定条件</h5>

<p><strong>条件 1（特征值判定）：</strong> 实对称矩阵 <span class="formula-inline" data-latex="A"></span> 正定 <span class="formula-inline" data-latex="\\Leftrightarrow A"></span> 的所有特征值都大于 0。</p>

<p><strong>条件 2（顺序主子式判定）：</strong> 实对称矩阵 <span class="formula-inline" data-latex="A"></span> 正定 <span class="formula-inline" data-latex="\\Leftrightarrow A"></span> 的所有顺序主子式都大于 0。</p>

<p>即：</p>
<div class="formula-block" data-latex="\\Delta_1 > 0, \\quad \\Delta_2 > 0, \\quad \\cdots, \\quad \\Delta_n > 0"></div>

<p>其中 <span class="formula-inline" data-latex="\\Delta_k = \\begin{vmatrix} a_{11} & \\cdots & a_{1k} \\\\ \\vdots & & \\vdots \\\\ a_{k1} & \\cdots & a_{kk} \\end{vmatrix}"></span>。</p>

<p><strong>条件 3（合同变换判定）：</strong> 正定矩阵与单位矩阵合同，即存在可逆矩阵 <span class="formula-inline" data-latex="P"></span>，使得 <span class="formula-inline" data-latex="A = P^T P"></span>。</p>

<h4>📘 例题 1：判断正定性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}"></span> 是否正定。</p>
  
  <p><strong>解法一（特征值）：</strong></p>
  <p>特征值为 <span class="formula-inline" data-latex="1, 3"></span>，均大于 0。</p>
  
  <p><strong>解法二（顺序主子式）：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta_1 = 2 > 0, \\quad \\Delta_2 = \\begin{vmatrix} 2 & 1 \\\\ 1 & 2 \\end{vmatrix} = 4 - 1 = 3 > 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 正定</p>
</div>

<h4>📘 例题 2：含参数的正定性判断</h4>

<div class="example">
  <p><strong>题目：</strong> 求使 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & a \\\\ a & 1 \\end{pmatrix}"></span> 正定的 <span class="formula-inline" data-latex="a"></span> 的取值范围。</p>
  
  <p><strong>解：</strong></p>
  <p>顺序主子式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta_1 = 1 > 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta_2 = 1 \\times 1 - a^2 = 1 - a^2 > 0"></span>
  </p>
  <p>所以 <span class="formula-inline" data-latex="|a| < 1"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="-1 < a < 1"></span></p>
</div>

<h5>3. 正定矩阵的性质</h5>

<p><strong>性质 1：</strong> 正定矩阵的行列式大于 0（<span class="formula-inline" data-latex="|A| > 0"></span>）。</p>
<p><strong>性质 2：</strong> 正定矩阵的主对角线元素都大于 0（<span class="formula-inline" data-latex="a_{ii} > 0"></span>）。</p>
<p><strong>性质 3：</strong> 正定矩阵的逆矩阵也是正定矩阵。</p>
<p><strong>性质 4：</strong> 正定矩阵与正定矩阵的和仍然是正定矩阵。</p>
<p><strong>性质 5：</strong> 若 <span class="formula-inline" data-latex="A"></span> 正定，<span class="formula-inline" data-latex="P"></span> 可逆，则 <span class="formula-inline" data-latex="P^T A P"></span> 也正定。</p>

<h5>4. 正定二次型的几何意义</h5>

<p>在二维空间中，正定二次型 <span class="formula-inline" data-latex="f(x, y) = ax^2 + 2bxy + cy^2"></span> 对应的等高线是椭圆。负定对应椭圆但方向相反，不定对应双曲线。</p>

<h5>5. 正定二次型总结</h5>

<table>
  <tr>
    <th>判定方法</th>
    <th>条件</th>
    <th>适用场景</th>
  </tr>
  <tr>
    <td><strong>特征值法</strong></td>
    <td>所有特征值 > 0</td>
    <td>已知特征值或可计算</td>
  </tr>
  <tr>
    <td><strong>顺序主子式法</strong></td>
    <td>所有顺序主子式 > 0</td>
    <td>低阶矩阵</td>
  </tr>
  <tr>
    <td><strong>合同变换法</strong></td>
    <td><span class="formula-inline" data-latex="A = P^T P"></span></td>
    <td>构造性证明</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 正定二次型是线性代数中最重要的概念之一。它在多元函数极值判定（Hessian 矩阵正定对应极小值）、优化理论、统计学（协方差矩阵正定）等领域有广泛应用。理解正定矩阵的判定条件和性质，是掌握这些应用的基础。
  </p>
</div>
`;