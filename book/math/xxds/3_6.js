window.SECTION_CONTENT = `
<h4>📐 第三章 向量组的线性相关性 总复习</h4>

<p>本章学习了向量组的概念、线性组合、线性相关性、向量组的秩、线性方程组解的结构以及向量空间等核心内容。以下是本章的知识点总结。</p>

<h5>1. 知识结构图</h5>

<pre style="background:#f5f5f5; padding:15px; border-radius:6px; font-family:serif; font-size:0.95rem; line-height:1.8; white-space:pre-wrap;">
                    ┌── n维向量（行向量/列向量）
                    │
            ┌── 向量 ──┼── 线性运算（加法、数乘）
            │          │
            │          └── 线性组合与线性表示
            │
            ├── 线性相关性 ──┼── 线性相关/线性无关的定义
            │              ├── 判定方法（定义、秩、行列式）
            │              └── 重要定理
            │
向量组 ────────├── 向量组的秩 ──┼── 极大线性无关组
            │              ├── 秩的定义与求法
            │              └── 秩与矩阵秩的关系
            │
            ├── 方程组解的结构 ──┼── 齐次：解空间 + 基础解系
            │                  ├── 非齐次：特解 + 齐次通解
            │                  └── 解的结构定理
            │
            └── 向量空间 ──┼── 定义（八条运算律）
                        ├── 子空间
                        ├── 基与维数
                        └── 同构
</pre>

<h5>2. 核心公式汇总</h5>

<table>
  <tr>
    <th>知识点</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>线性组合</strong></td>
    <td><span class="formula-inline" data-latex="\\beta = k_1\\alpha_1 + k_2\\alpha_2 + \\cdots + k_m\\alpha_m"></span></td>
  </tr>
  <tr>
    <td><strong>线性相关定义</strong></td>
    <td><span class="formula-inline" data-latex="k_1\\alpha_1 + \\cdots + k_m\\alpha_m = 0"></span> 有非零解</td>
  </tr>
  <tr>
    <td><strong>线性无关定义</strong></td>
    <td><span class="formula-inline" data-latex="k_1\\alpha_1 + \\cdots + k_m\\alpha_m = 0"></span> 只有零解</td>
  </tr>
  <tr>
    <td><strong>向量组秩 = 矩阵秩</strong></td>
    <td><span class="formula-inline" data-latex="r(\\alpha_1,\\cdots,\\alpha_m) = r(A)"></span></td>
  </tr>
  <tr>
    <td><strong>齐次通解</strong></td>
    <td><span class="formula-inline" data-latex="X = \\sum_{i=1}^{t} k_i \\eta_i, t = n - r(A)"></span></td>
  </tr>
  <tr>
    <td><strong>非齐次通解</strong></td>
    <td><span class="formula-inline" data-latex="X = X^* + \\sum_{i=1}^{t} k_i \\eta_i"></span></td>
  </tr>
  <tr>
    <td><strong>向量空间维数</strong></td>
    <td><span class="formula-inline" data-latex="\\dim V ="></span> 基中向量个数</td>
  </tr>
</table>

<h5>3. 常见题型与技巧</h5>

<table>
  <tr>
    <th>题型</th>
    <th>解题技巧</th>
  </tr>
  <tr>
    <td><strong>判断线性相关性</strong></td>
    <td>用定义求齐次方程组的解；或用秩判断</td>
  </tr>
  <tr>
    <td><strong>求向量组的秩</strong></td>
    <td>构造矩阵，初等行变换化阶梯形</td>
  </tr>
  <tr>
    <td><strong>求极大线性无关组</strong></td>
    <td>阶梯形中非零行对应的原向量</td>
  </tr>
  <tr>
    <td><strong>求齐次方程组的基础解系</strong></td>
    <td>自由变量取单位向量，回代求解</td>
  </tr>
  <tr>
    <td><strong>求非齐次方程组的通解</strong></td>
    <td>先求特解，再加齐次通解</td>
  </tr>
  <tr>
    <td><strong>判断是否为子空间</strong></td>
    <td>验证对加法和数乘是否封闭</td>
  </tr>
</table>

<h5>4. 重要结论</h5>

<ul>
  <li><span class="formula-inline" data-latex="n+1"></span> 个 <span class="formula-inline" data-latex="n"></span> 维向量必线性相关</li>
  <li>向量组线性相关 ⇔ 至少一个向量可由其余向量线性表示</li>
  <li>矩阵的秩 = 行向量组的秩 = 列向量组的秩</li>
  <li>齐次方程组 <span class="formula-inline" data-latex="AX = 0"></span> 有非零解 ⇔ <span class="formula-inline" data-latex="r(A) < n"></span></li>
  <li>非齐次方程组 <span class="formula-inline" data-latex="AX = b"></span> 有解 ⇔ <span class="formula-inline" data-latex="r(A) = r(A|b)"></span></li>
  <li>解空间的维数 <span class="formula-inline" data-latex="\\dim V = n - r(A)"></span></li>
</ul>

<h4>📘 综合例题：向量组与方程组综合</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\alpha_1 = (1, 2, 1), \\alpha_2 = (2, 3, 1), \\alpha_3 = (3, 5, 2)"></span>。</p>
  <p>（1）判断该向量组是否线性相关；（2）求该向量组的秩和极大线性无关组。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>（1）</strong> 构造矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A = \\begin{pmatrix} 1 & 2 & 1 \\\\ 2 & 3 & 1 \\\\ 3 & 5 & 2 \\end{pmatrix}"></span>
  </p>
  <p>初等行变换：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_2 - 2r_1} \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & -1 & -1 \\\\ 3 & 5 & 2 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - 3r_1} \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & -1 & -1 \\\\ 0 & -1 & -1 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\xrightarrow{r_3 - r_2} \\begin{pmatrix} 1 & 2 & 1 \\\\ 0 & -1 & -1 \\\\ 0 & 0 & 0 \\end{pmatrix}"></span>
  </p>
  <p><span class="formula-inline" data-latex="r(A) = 2 < 3"></span>，所以向量组线性相关。</p>
  
  <p><strong>（2）</strong> 非零行对应 <span class="formula-inline" data-latex="\\alpha_1, \\alpha_2"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 线性相关，秩为 <strong>2</strong>，极大无关组为 <span class="formula-inline" data-latex="\\{\\alpha_1, \\alpha_2\\}"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 本章的核心是理解向量之间的线性关系。线性相关性、秩、基础解系、向量空间等概念层层递进，构成了线性代数中最核心的理论体系。掌握这些概念，是学习后续特征值、二次型等内容的基础。
  </p>
</div>
`;