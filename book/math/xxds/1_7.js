window.SECTION_CONTENT = `
<h4>📐 第一章 行列式 总复习</h4>

<p>本章学习了行列式的基本概念、性质、计算方法及其在线性方程组求解中的应用。以下是本章的知识点总结。</p>

<h5>1. 知识结构图</h5>

<pre style="background:#f5f5f5; padding:15px; border-radius:6px; font-family:serif; font-size:0.95rem; line-height:1.8; white-space:pre-wrap;">
                        ┌── 二阶行列式（对角线法则）
                        │
            ┌── 概念 ──┼── 三阶行列式（对角线法则）
            │          │
            │          └── n阶行列式（排列定义）
            │
行列式 ────┼── 性质 ──┼── 转置不变
            │          ├── 交换两行（列）变号
            │          ├── 提公因子
            │          ├── 拆分
            │          └── 倍加不变
            │
            ├── 计算 ──┼── 化为上三角
            │          ├── 按行（列）展开
            │          └── 拉普拉斯定理
            │
            └── 应用 ──┴── 克拉默法则（解线性方程组）
</pre>

<h5>2. 核心公式汇总</h5>

<table>
  <tr>
    <th>知识点</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>二阶行列式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc"></span></td>
  </tr>
  <tr>
    <td><strong>三阶行列式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix} = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} - a_{11}a_{23}a_{32}"></span></td>
  </tr>
  <tr>
    <td><strong>n阶行列式</strong></td>
    <td><span class="formula-inline" data-latex="D = \\sum_{j_1j_2\\cdots j_n} (-1)^{\\tau(j_1j_2\\cdots j_n)} a_{1j_1}a_{2j_2}\\cdots a_{nj_n}"></span></td>
  </tr>
  <tr>
    <td><strong>代数余子式</strong></td>
    <td><span class="formula-inline" data-latex="A_{ij} = (-1)^{i+j} M_{ij}"></span></td>
  </tr>
  <tr>
    <td><strong>按行展开</strong></td>
    <td><span class="formula-inline" data-latex="D = \\sum_{j=1}^{n} a_{ij} A_{ij}"></span></td>
  </tr>
  <tr>
    <td><strong>克拉默法则</strong></td>
    <td><span class="formula-inline" data-latex="x_j = D_j / D \\quad (D \\neq 0)"></span></td>
  </tr>
  <tr>
    <td><strong>上三角行列式</strong></td>
    <td><span class="formula-inline" data-latex="\\prod_{i=1}^{n} a_{ii}"></span></td>
  </tr>
</table>

<h5>3. 常见题型与技巧</h5>

<table>
  <tr>
    <th>题型</th>
    <th>解题技巧</th>
  </tr>
  <tr>
    <td><strong>计算低阶行列式</strong></td>
    <td>直接使用对角线法则（二阶、三阶）</td>
  </tr>
  <tr>
    <td><strong>计算高阶行列式</strong></td>
    <td>利用性质化为上三角，或按含零元素多的行/列展开</td>
  </tr>
  <tr>
    <td><strong>含参数的行列式</strong></td>
    <td>提取公因子后化为上三角或利用展开式</td>
  </tr>
  <tr>
    <td><strong>证明行列式为0</strong></td>
    <td>找出两行（列）成比例、相同或存在线性关系</td>
  </tr>
  <tr>
    <td><strong>解线性方程组</strong></td>
    <td>克拉默法则（适合低阶）或高斯消元法（适合高阶）</td>
  </tr>
</table>

<h5>4. 重要结论</h5>

<ul>
  <li>行列式 <span class="formula-inline" data-latex="D = 0"></span> 的充要条件是：行（列）向量组线性相关。</li>
  <li>行列式与矩阵的关系：<span class="formula-inline" data-latex="|\\lambda A| = \\lambda^n |A|"></span>（A 为 n 阶矩阵）</li>
  <li>克拉默法则本质上给出了线性方程组有唯一解时解的表达，但计算量较大。</li>
</ul>

<h4>📘 综合例题：行列式的综合计算</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 1 & 1 & 1 \\\\ 1 & 2 & 3 & 4 \\\\ 1 & 3 & 6 & 10 \\\\ 1 & 4 & 10 & 20 \\end{vmatrix}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>将第 4 行减去第 3 行，第 3 行减去第 2 行，第 2 行减去第 1 行：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & 2 & 3 \\\\ 0 & 1 & 3 & 6 \\\\ 0 & 1 & 4 & 10 \\end{vmatrix}"></span>
  </p>
  <p>继续：第 3 行减第 2 行，第 4 行减第 3 行（新）：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & 2 & 3 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 1 & 4 \\end{vmatrix} = \\begin{vmatrix} 1 & 1 & 1 & 1 \\\\ 0 & 1 & 2 & 3 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 1 \\end{vmatrix} = 1 \\times 1 \\times 1 \\times 1 = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 行列式是线性代数的基础工具。掌握行列式的概念、性质和计算方法，是学习矩阵、向量空间、线性方程组等后续内容的必备基础。本章的重点在于理解行列式的几何意义和熟练掌握计算方法。
  </p>
</div>
`;