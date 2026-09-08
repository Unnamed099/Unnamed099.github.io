window.SECTION_CONTENT = `
<h4>📐 逆矩阵</h4>

<p>逆矩阵是矩阵理论中最重要的概念之一。在线性代数中，逆矩阵扮演着类似于"倒数"的角色，它使得矩阵除法成为可能。</p>

<h5>1. 逆矩阵的定义</h5>

<p><strong>定义：</strong> 对于 n 阶方阵 <span class="formula-inline" data-latex="A"></span>，如果存在 n 阶方阵 <span class="formula-inline" data-latex="B"></span>，使得</p>

<div class="formula-block" data-latex="AB = BA = I"></div>

<p>则称 <span class="formula-inline" data-latex="A"></span> 为<strong>可逆矩阵</strong>（或非奇异矩阵），<span class="formula-inline" data-latex="B"></span> 称为 <span class="formula-inline" data-latex="A"></span> 的<strong>逆矩阵</strong>，记作 <span class="formula-inline" data-latex="A^{-1}"></span>。</p>

<p>若 <span class="formula-inline" data-latex="A"></span> 不可逆，则称为<strong>奇异矩阵</strong>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 逆矩阵只对方阵定义</p>
  <p>• 若 <span class="formula-inline" data-latex="A"></span> 可逆，则其逆矩阵唯一</p>
  <p>• 可逆的充要条件：<span class="formula-inline" data-latex="|A| \\neq 0"></span></p>
</div>

<h5>2. 逆矩阵的性质</h5>

<p><strong>性质 1：</strong> 若 <span class="formula-inline" data-latex="A"></span> 可逆，则 <span class="formula-inline" data-latex="(A^{-1})^{-1} = A"></span>。</p>
<p><strong>性质 2：</strong> 若 <span class="formula-inline" data-latex="A, B"></span> 均可逆，则 <span class="formula-inline" data-latex="(AB)^{-1} = B^{-1} A^{-1}"></span>。</p>
<p><strong>性质 3：</strong> 若 <span class="formula-inline" data-latex="A"></span> 可逆，则 <span class="formula-inline" data-latex="(A^T)^{-1} = (A^{-1})^T"></span>。</p>
<p><strong>性质 4：</strong> 若 <span class="formula-inline" data-latex="A"></span> 可逆，则 <span class="formula-inline" data-latex="|A^{-1}| = \\frac{1}{|A|}"></span>。</p>

<h5>3. 逆矩阵的求法</h5>

<p><strong>方法一：伴随矩阵法</strong></p>

<div class="formula-block" data-latex="A^{-1} = \\frac{1}{|A|} \\cdot A^*"></div>

<p>其中 <span class="formula-inline" data-latex="A^*"></span> 是 <span class="formula-inline" data-latex="A"></span> 的伴随矩阵（由代数余子式转置而成）。</p>

<p><strong>方法二：初等行变换法</strong></p>

<p>将 <span class="formula-inline" data-latex="(A \\mid I)"></span> 经过初等行变换化为 <span class="formula-inline" data-latex="(I \\mid A^{-1})"></span>。</p>

<h4>📘 例题 1：求二阶矩阵的逆矩阵</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}"></span> 的逆矩阵。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A| = 1 \\times 4 - 2 \\times 3 = 4 - 6 = -2 \\neq 0"></span>
  </p>
  <p>二阶矩阵的逆矩阵公式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1.5 & -0.5 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}"></span></p>
</div>

<h4>📘 例题 2：利用逆矩阵解线性方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 用逆矩阵法解方程组 <span class="formula-inline" data-latex="\\begin{cases} x + 2y = 5 \\\\ 3x + 4y = 11 \\end{cases}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>写成矩阵形式 <span class="formula-inline" data-latex="AX = B"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, \\quad X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}, \\quad B = \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix}"></span>
  </p>
  <p>由例题1，<span class="formula-inline" data-latex="A^{-1} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X = A^{-1}B = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ 11 \\end{pmatrix} = \\begin{pmatrix} -10 + 11 \\\\ 15/2 - 11/2 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 1, y = 2"></span></p>
</div>

<h5>4. 逆矩阵与线性方程组的关系</h5>

<p>对于线性方程组 <span class="formula-inline" data-latex="AX = B"></span>：</p>
<ul>
  <li>若 <span class="formula-inline" data-latex="A"></span> 可逆，则唯一解为 <span class="formula-inline" data-latex="X = A^{-1}B"></span></li>
  <li>若 <span class="formula-inline" data-latex="A"></span> 奇异（<span class="formula-inline" data-latex="|A| = 0"></span>），则方程组要么无解，要么有无穷多解</li>
</ul>

<h5>5. 逆矩阵总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>性质</th>
  </tr>
  <tr>
    <td><strong>逆矩阵</strong></td>
    <td><span class="formula-inline" data-latex="AA^{-1} = A^{-1}A = I"></span></td>
    <td>唯一存在（若可逆）</td>
  </tr>
  <tr>
    <td><strong>可逆条件</strong></td>
    <td><span class="formula-inline" data-latex="|A| \\neq 0"></span></td>
    <td>非奇异</td>
  </tr>
  <tr>
    <td><strong>伴随矩阵法</strong></td>
    <td><span class="formula-inline" data-latex="A^{-1} = \\frac{1}{|A|} A^*"></span></td>
    <td>适合低阶</td>
  </tr>
  <tr>
    <td><strong>初等变换法</strong></td>
    <td><span class="formula-inline" data-latex="(A|I) \\to (I|A^{-1})"></span></td>
    <td>适合高阶</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 逆矩阵是线性代数中最有力的工具之一。它不仅用于求解线性方程组，还在矩阵方程、最小二乘、控制理论等领域有广泛应用。理解逆矩阵的存在条件和计算方法，是后续学习的基础。
  </p>
</div>
`;