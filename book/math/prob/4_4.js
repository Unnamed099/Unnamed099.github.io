window.SECTION_CONTENT = `
<h4>📐 矩与协方差矩阵</h4>

<p>矩是随机变量数字特征的一般化概念，它包含了期望、方差等作为特殊情况。协方差矩阵则是多维随机变量之间相关性的完整描述。</p>

<h5>1. 矩的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="X"></span> 是随机变量，<span class="formula-inline" data-latex="k"></span> 为正整数。</p>

<ul>
  <li><strong>k 阶原点矩：</strong> <span class="formula-inline" data-latex="\\mu_k = E(X^k)"></span></li>
  <li><strong>k 阶中心矩：</strong> <span class="formula-inline" data-latex="\\nu_k = E[(X - \\mu)^k]"></span>，其中 <span class="formula-inline" data-latex="\\mu = E(X)"></span></li>
</ul>

<p><strong>常见矩：</strong></p>
<ul>
  <li>一阶原点矩 = 数学期望：<span class="formula-inline" data-latex="\\mu_1 = E(X)"></span></li>
  <li>二阶中心矩 = 方差：<span class="formula-inline" data-latex="\\nu_2 = Var(X)"></span></li>
  <li>三阶中心矩与偏度有关</li>
  <li>四阶中心矩与峰度有关</li>
</ul>

<h4>📘 例题 1：矩的计算</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim N(0, 1)"></span>，求 <span class="formula-inline" data-latex="E(X^3)"></span> 和 <span class="formula-inline" data-latex="E(X^4)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>标准正态分布是偶函数，奇次矩为 0。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X^3) = 0"></span>
  </p>
  <p>由正态分布的性质，<span class="formula-inline" data-latex="E(X^4) = 3"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="E(X^4) = 3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="E(X^3) = 0, E(X^4) = 3"></span></p>
</div>

<h5>2. 协方差矩阵</h5>

<p>对于 <span class="formula-inline" data-latex="n"></span> 维随机向量 <span class="formula-inline" data-latex="\\mathbf{X} = (X_1, X_2, \\cdots, X_n)^T"></span>，其<strong>协方差矩阵</strong>定义为</p>

<div class="formula-block" data-latex="\\Sigma = (\\sigma_{ij})_{n \\times n} = (\\text{Cov}(X_i, X_j))_{n \\times n}"></div>

<p>其中 <span class="formula-inline" data-latex="\\sigma_{ii} = Var(X_i)"></span>，<span class="formula-inline" data-latex="\\sigma_{ij} = \\text{Cov}(X_i, X_j)"></span>。</p>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="\\Sigma"></span> 是对称矩阵</li>
  <li><span class="formula-inline" data-latex="\\Sigma"></span> 是半正定矩阵</li>
  <li>若各分量相互独立，则 <span class="formula-inline" data-latex="\\Sigma"></span> 是对角矩阵</li>
</ul>

<h4>📘 例题 2：协方差矩阵</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="Var(X_1) = 4, Var(X_2) = 9, \\text{Cov}(X_1, X_2) = 3"></span>，写出协方差矩阵。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Sigma = \\begin{pmatrix} 4 & 3 \\\\ 3 & 9 \\end{pmatrix}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\begin{pmatrix} 4 & 3 \\\\ 3 & 9 \\end{pmatrix}"></span></p>
</div>

<h5>3. 相关系数矩阵</h5>

<p>由协方差矩阵可以进一步得到<strong>相关系数矩阵</strong>：</p>

<div class="formula-block" data-latex="R = (\\rho_{ij})_{n \\times n} = \\left( \\frac{\\text{Cov}(X_i, X_j)}{\\sqrt{Var(X_i)Var(X_j)}} \\right)_{n \\times n}"></div>

<p>相关系数矩阵的对角线元素均为 1，且为对称矩阵。</p>

<h5>4. 矩和协方差矩阵的应用</h5>

<ul>
  <li><strong>主成分分析（PCA）：</strong> 对协方差矩阵进行特征分解</li>
  <li><strong>多元正态分布：</strong> 由均值向量和协方差矩阵完全确定</li>
  <li><strong>风险管理：</strong> 投资组合的方差由协方差矩阵计算</li>
  <li><strong>信号处理：</strong> 噪声的协方差矩阵用于滤波设计</li>
</ul>

<h5>5. 数字特征总结</h5>

<table>
  <tr>
    <th>数字特征</th>
    <th>定义</th>
    <th>阶数</th>
    <th>含义</th>
  </tr>
  <tr>
    <td><strong>数学期望</strong></td>
    <td><span class="formula-inline" data-latex="E(X)"></span></td>
    <td>一阶原点矩</td>
    <td>分布的中心</td>
  </tr>
  <tr>
    <td><strong>方差</strong></td>
    <td><span class="formula-inline" data-latex="Var(X) = E[(X-\\mu)^2]"></span></td>
    <td>二阶中心矩</td>
    <td>离散程度</td>
  </tr>
  <tr>
    <td><strong>协方差</strong></td>
    <td><span class="formula-inline" data-latex="\\text{Cov}(X,Y)"></span></td>
    <td>二阶混合中心矩</td>
    <td>线性相关性</td>
  </tr>
  <tr>
    <td><strong>相关系数</strong></td>
    <td><span class="formula-inline" data-latex="\\rho_{XY}"></span></td>
    <td>标准化协方差</td>
    <td>标准化线性相关性</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩是随机变量数字特征的一般化概念，高阶矩可以刻画分布的偏度和峰度等更细致的性质。协方差矩阵是多元统计分析的核心工具，它完整地描述了多维随机变量之间的相关结构。
  </p>
</div>
`;