window.SECTION_CONTENT = `
<h4>📐 常系数线性微分方程组解法举例</h4>

<p>许多实际问题中，需要求解由多个微分方程组成的方程组。本节介绍常系数线性微分方程组的基本解法。</p>

<h5>1. 微分方程组的基本概念</h5>

<p><strong>定义：</strong> 含有多个未知函数及其导数的方程组称为<strong>微分方程组</strong>。</p>

<p>例如：</p>

<div class="formula-block" data-latex="\\begin{cases} \\frac{dx}{dt} = ax + by \\\\ \\frac{dy}{dt} = cx + dy \\end{cases}"></div>

<p>这是一个<strong>一阶常系数线性微分方程组</strong>。</p>

<div class="note">
  <strong>💡 应用背景：</strong>
  <p>• 双种群竞争模型（Lotka-Volterra）</p>
  <p>• 耦合电路分析</p>
  <p>• 机械振动系统</p>
  <p>• 化学反应动力学</p>
</div>

<h5>2. 消元法</h5>

<p>消元法是将方程组中的未知函数逐个消去，化为高阶微分方程的方法。</p>

<p><strong>步骤：</strong></p>

<ol>
  <li>从方程组中解出一个未知函数（用另一个表示）</li>
  <li>代入其他方程，消去该函数</li>
  <li>得到高阶微分方程，求解</li>
  <li>代回求另一个未知函数</li>
</ol>

<h4>📘 例题 1：消元法</h4>

<div class="example">
  <p><strong>题目：</strong> 求解方程组</p>
  
  <div class="formula-block" data-latex="\\begin{cases} \\frac{dx}{dt} = y \\\\ \\frac{dy}{dt} = -x \\end{cases}"></div>
  
  <p><strong>解：</strong></p>
  <p>由第一式得 <span class="formula-inline" data-latex="y = \\frac{dx}{dt}"></span></p>
  <p>代入第二式：<span class="formula-inline" data-latex="\\frac{d}{dt}\\left(\\frac{dx}{dt}\\right) = -x \\Rightarrow \\frac{d^2 x}{dt^2} + x = 0"></span></p>
  
  <p>这是二阶常系数齐次方程，特征方程 <span class="formula-inline" data-latex="r^2 + 1 = 0 \\Rightarrow r = \\pm i"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x = C_1 \\cos t + C_2 \\sin t"></span>
  </p>
  
  <p>由 <span class="formula-inline" data-latex="y = \\frac{dx}{dt} = -C_1 \\sin t + C_2 \\cos t"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="\\begin{cases} x = C_1 \\cos t + C_2 \\sin t \\\\ y = -C_1 \\sin t + C_2 \\cos t \\end{cases}"></span></p>
</div>

<h4>📘 例题 2：一般系数方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 求解方程组</p>
  
  <div class="formula-block" data-latex="\\begin{cases} \\frac{dx}{dt} = x + 2y \\\\ \\frac{dy}{dt} = 4x + 3y \\end{cases}"></div>
  
  <p><strong>解：</strong></p>
  <p>由第一式得 <span class="formula-inline" data-latex="y = \\frac{1}{2}\\left(\\frac{dx}{dt} - x\\right)"></span></p>
  
  <p>代入第二式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{1}{2}\\left(\\frac{d^2 x}{dt^2} - \\frac{dx}{dt}\\right) = 4x + 3 \\cdot \\frac{1}{2}\\left(\\frac{dx}{dt} - x\\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{d^2 x}{dt^2} - 4\\frac{dx}{dt} - 5x = 0"></span>
  </p>
  
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 4r - 5 = 0 \\Rightarrow r = 5, -1"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x = C_1 e^{5t} + C_2 e^{-t}"></span>
  </p>
  
  <p>代回求 <span class="formula-inline" data-latex="y"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = \\frac{1}{2}(5C_1 e^{5t} - C_2 e^{-t} - C_1 e^{5t} - C_2 e^{-t}) = 2C_1 e^{5t} - C_2 e^{-t}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="\\begin{cases} x = C_1 e^{5t} + C_2 e^{-t} \\\\ y = 2C_1 e^{5t} - C_2 e^{-t} \\end{cases}"></span></p>
</div>

<h5>3. 矩阵方法（特征值法）</h5>

<p>对于一阶线性常系数方程组</p>

<div class="formula-block" data-latex="\\frac{d\\mathbf{x}}{dt} = A\\mathbf{x}"></div>

<p>其中 <span class="formula-inline" data-latex="A"></span> 为 <span class="formula-inline" data-latex="n \\times n"></span> 矩阵，<span class="formula-inline" data-latex="\\mathbf{x} = (x_1, x_2, \\cdots, x_n)^T"></span>。</p>

<p>设 <span class="formula-inline" data-latex="\\mathbf{x} = \\mathbf{v} e^{\\lambda t}"></span>，代入得</p>

<div class="formula-block" data-latex="A\\mathbf{v} = \\lambda\\mathbf{v}"></div>

<p>即 <span class="formula-inline" data-latex="\\lambda"></span> 是矩阵 <span class="formula-inline" data-latex="A"></span> 的特征值，<span class="formula-inline" data-latex="\\mathbf{v}"></span> 是对应的特征向量。</p>

<h4>📘 例题 3：矩阵方法</h4>

<div class="example">
  <p><strong>题目：</strong> 用矩阵方法求解 <span class="formula-inline" data-latex="\\begin{cases} \\frac{dx}{dt} = x + 2y \\\\ \\frac{dy}{dt} = 4x + 3y \\end{cases}"></span></p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 4 & 3 \\end{pmatrix}"></span></p>
  
  <p>特征方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A - \\lambda I| = \\begin{vmatrix} 1-\\lambda & 2 \\\\ 4 & 3-\\lambda \\end{vmatrix} = (1-\\lambda)(3-\\lambda) - 8 = \\lambda^2 - 4\\lambda - 5 = 0"></span>
  </p>
  <p style="text-align: center;"><span class="formula-inline" data-latex="\\lambda_1 = 5, \\lambda_2 = -1"></span></p>
  
  <p>特征向量：</p>
  <p>对于 <span class="formula-inline" data-latex="\\lambda = 5"></span>：<span class="formula-inline" data-latex="\\begin{pmatrix} -4 & 2 \\\\ 4 & -2 \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = 0 \\Rightarrow v_2 = 2v_1"></span></p>
  <p>取 <span class="formula-inline" data-latex="\\mathbf{v}_1 = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}"></span></p>
  
  <p>对于 <span class="formula-inline" data-latex="\\lambda = -1"></span>：<span class="formula-inline" data-latex="\\begin{pmatrix} 2 & 2 \\\\ 4 & 4 \\end{pmatrix} \\begin{pmatrix} v_1 \\\\ v_2 \\end{pmatrix} = 0 \\Rightarrow v_2 = -v_1"></span></p>
  <p>取 <span class="formula-inline" data-latex="\\mathbf{v}_2 = \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix}"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="\\begin{pmatrix} x \\\\ y \\end{pmatrix} = C_1 \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} e^{5t} + C_2 \\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} e^{-t}"></span></p>
</div>

<h5>4. 非齐次线性方程组</h5>

<p>对于非齐次方程组</p>

<div class="formula-block" data-latex="\\frac{d\\mathbf{x}}{dt} = A\\mathbf{x} + \\mathbf{f}(t)"></div>

<p>其通解为</p>

<div class="formula-block" data-latex="\\mathbf{x} = \\mathbf{x}_h + \\mathbf{x}_p"></div>

<p>其中 <span class="formula-inline" data-latex="\\mathbf{x}_h"></span> 是对应齐次方程组的通解，<span class="formula-inline" data-latex="\\mathbf{x}_p"></span> 是一个特解。</p>

<h4>📘 例题 4：非齐次方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 求解 <span class="formula-inline" data-latex="\\begin{cases} \\frac{dx}{dt} = y + 1 \\\\ \\frac{dy}{dt} = -x \\end{cases}"></span></p>
  
  <p><strong>解：</strong></p>
  <p><strong>齐次通解：</strong> 由例题1，齐次通解为</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} x_h = C_1 \\cos t + C_2 \\sin t \\\\ y_h = -C_1 \\sin t + C_2 \\cos t \\end{cases}"></span>
  </p>
  
  <p><strong>求特解：</strong> 设常值特解 <span class="formula-inline" data-latex="\\begin{cases} x_p = A \\\\ y_p = B \\end{cases}"></span></p>
  <p>代入得：<span class="formula-inline" data-latex="\\begin{cases} 0 = B + 1 \\\\ 0 = -A \\end{cases} \\Rightarrow A = 0, B = -1"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="\\begin{cases} x = C_1 \\cos t + C_2 \\sin t \\\\ y = -C_1 \\sin t + C_2 \\cos t - 1 \\end{cases}"></span></p>
</div>

<h5>5. 微分方程组解法总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>适用情况</th>
    <th>特点</th>
  </tr>
  <tr>
    <td><strong>消元法</strong></td>
    <td>一般线性方程组</td>
    <td>转化为高阶微分方程</td>
  </tr>
  <tr>
    <td><strong>矩阵方法</strong></td>
    <td>常系数线性方程组</td>
    <td>利用特征值和特征向量</td>
  </tr>
  <tr>
    <td><strong>常数变易法</strong></td>
    <td>非齐次方程组</td>
    <td>适用于已知齐次通解</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 微分方程组是描述多变量动态系统的基本工具。消元法直观易懂，矩阵方法则更为系统化，特别适合处理高阶或大规模问题。这两种方法在实际应用中相互补充，共同构成了求解微分方程组的基本框架。
  </p>
</div>
`;