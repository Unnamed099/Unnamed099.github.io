window.SECTION_CONTENT = `
<h4>📐 第二章 矩阵及其运算 总复习</h4>

<p>本章学习了矩阵的基本概念、运算、逆矩阵、分块法、初等变换和矩阵的秩。以下是本章的知识点总结。</p>

<h5>1. 知识结构图</h5>

<pre style="background:#f5f5f5; padding:15px; border-radius:6px; font-family:serif; font-size:0.95rem; line-height:1.8; white-space:pre-wrap;">
                    ┌── 矩阵的定义（m×n 数表）
                    │
            ┌── 概念 ──┼── 特殊矩阵（单位、对角、对称等）
            │          │
            │          └── 矩阵相等
            │
            ├── 运算 ──┼── 加法、数乘
            │          ├── 乘法（非交换）
            │          └── 转置
            │
矩阵 ────────├── 逆矩阵 ──┼── 定义：AA⁻¹ = A⁻¹A = I
            │          ├── 存在条件：|A| ≠ 0
            │          └── 求法：伴随矩阵法、初等变换法
            │
            ├── 分块法 ──┼── 分块矩阵的运算
            │          └── 对角/三角分块的行列式
            │
            ├── 初等变换 ──┼── 交换、数乘、倍加
            │          ├── 初等矩阵
            │          └── 应用：求逆、解方程组、求秩
            │
            └── 秩 ──┼── 定义：非零子式的最高阶数
                    ├── 求法：初等行变换化阶梯形
                    └── 秩与线性方程组解的关系
</pre>

<h5>2. 核心公式汇总</h5>

<table>
  <tr>
    <th>知识点</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>矩阵乘法</strong></td>
    <td><span class="formula-inline" data-latex="(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}"></span></td>
  </tr>
  <tr>
    <td><strong>转置</strong></td>
    <td><span class="formula-inline" data-latex="(A^T)_{ij} = a_{ji}"></span></td>
  </tr>
  <tr>
    <td><strong>逆矩阵（二阶）</strong></td>
    <td><span class="formula-inline" data-latex="A^{-1} = \\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}"></span></td>
  </tr>
  <tr>
    <td><strong>伴随矩阵</strong></td>
    <td><span class="formula-inline" data-latex="A^{-1} = \\frac{1}{|A|} A^*"></span></td>
  </tr>
  <tr>
    <td><strong>初等变换求逆</strong></td>
    <td><span class="formula-inline" data-latex="(A|I) \\to (I|A^{-1})"></span></td>
  </tr>
  <tr>
    <td><strong>矩阵的秩</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = r(A^T)"></span></td>
  </tr>
  <tr>
    <td><strong>秩的性质</strong></td>
    <td><span class="formula-inline" data-latex="r(AB) \\le \\min\\{r(A), r(B)\\}"></span></td>
  </tr>
  <tr>
    <td><strong>线性方程组解</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = r(A|b)"></span> 有解</td>
  </tr>
</table>

<h5>3. 常见题型与技巧</h5>

<table>
  <tr>
    <th>题型</th>
    <th>解题技巧</th>
  </tr>
  <tr>
    <td><strong>矩阵乘法</strong></td>
    <td>注意维度和顺序，<span class="formula-inline" data-latex="AB \\neq BA"></span></td>
  </tr>
  <tr>
    <td><strong>求逆矩阵</strong></td>
    <td>伴随矩阵法（低阶）或初等行变换法（高阶）</td>
  </tr>
  <tr>
    <td><strong>求矩阵的秩</strong></td>
    <td>初等行变换化阶梯形，非零行数即为秩</td>
  </tr>
  <tr>
    <td><strong>分块矩阵运算</strong></td>
    <td>将大矩阵按需分块，按块运算</td>
  </tr>
  <tr>
    <td><strong>含参数矩阵</strong></td>
    <td>分情况讨论参数取值</td>
  </tr>
</table>

<h5>4. 重要结论</h5>

<ul>
  <li>可逆矩阵的充要条件：<span class="formula-inline" data-latex="|A| \\neq 0 \\Leftrightarrow r(A) = n \\Leftrightarrow A"></span> 可逆</li>
  <li>初等变换不改变矩阵的秩</li>
  <li>矩阵乘法不满足交换律，但满足结合律和分配律</li>
  <li>分块矩阵的乘法规则与普通矩阵乘法类似</li>
</ul>

<h4>📘 综合例题：矩阵运算综合</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}, B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}"></span>。</p>
  <p>（1）求 <span class="formula-inline" data-latex="AB"></span>；（2）求 <span class="formula-inline" data-latex="A^{-1}"></span>；（3）求 <span class="formula-inline" data-latex="r(A)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>（1）</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="AB = \\begin{pmatrix} 1 \\times 2 + 2 \\times 1 & 1 \\times 0 + 2 \\times 3 \\\\ 3 \\times 2 + 4 \\times 1 & 3 \\times 0 + 4 \\times 3 \\end{pmatrix} = \\begin{pmatrix} 4 & 6 \\\\ 10 & 12 \\end{pmatrix}"></span>
  </p>
  
  <p><strong>（2）</strong></p>
  <p><span class="formula-inline" data-latex="|A| = 1 \\times 4 - 2 \\times 3 = -2"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A^{-1} = \\frac{1}{-2} \\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}"></span>
  </p>
  
  <p><strong>（3）</strong></p>
  <p><span class="formula-inline" data-latex="|A| = -2 \\neq 0"></span>，所以 <span class="formula-inline" data-latex="A"></span> 满秩。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="r(A) = 2"></span>
  </p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 矩阵是线性代数的核心工具。本章所学的矩阵运算、逆矩阵、分块法、初等变换和秩的概念，构成了矩阵理论的完整基础。这些内容不仅是后续向量空间、特征值等理论的支撑，也是实际应用中不可或缺的数学工具。
  </p>
</div>
`;