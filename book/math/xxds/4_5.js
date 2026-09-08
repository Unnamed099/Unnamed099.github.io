window.SECTION_CONTENT = `
<h4>📐 第四章 线性方程组 总复习</h4>

<p>本章学习了线性方程组的各种求解方法及其解的结构理论。高斯消元法是基本工具，齐次与非齐次方程组的解的结构是理论核心。</p>

<h5>1. 知识结构图</h5>

<pre style="background:#f5f5f5; padding:15px; border-radius:6px; font-family:serif; font-size:0.95rem; line-height:1.8; white-space:pre-wrap;">
                    ┌── 高斯消元法
                    │   ├── 行阶梯形（回代求解）
            ┌── 求解方法 ──┼── 高斯-约当消元法
            │          │   └── 行最简形（直接读解）
            │          │
            │          ├── 列主元法（数值稳定性）
            │          │
            │          └── 矩阵求逆法（n阶方阵）
            │
线性方程组 ────────┼── 有解判定 ──┼── r(A) = r(A|b) → 有解
            │          ├── r(A) ≠ r(A|b) → 无解
            │          └── r(A) = n → 唯一解
            │              r(A) < n → 无穷多解
            │
            ├── 齐次方程组 ──┼── AX = 0
            │              ├── 解空间（向量空间）
            │              ├── 基础解系（n - r(A) 个）
            │              └── 通解：X = ∑ cᵢηᵢ
            │
            └── 非齐次方程组 ──┼── AX = b
                        ├── 特解 X*
                        ├── 齐次通解 X_h
                        └── 通解：X = X* + X_h
</pre>

<h5>2. 核心公式汇总</h5>

<table>
  <tr>
    <th>知识点</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>增广矩阵</strong></td>
    <td><span class="formula-inline" data-latex="(A \\mid b)"></span></td>
  </tr>
  <tr>
    <td><strong>有解条件</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = r(A \\mid b)"></span></td>
  </tr>
  <tr>
    <td><strong>唯一解条件</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = r(A \\mid b) = n"></span></td>
  </tr>
  <tr>
    <td><strong>无穷多解条件</strong></td>
    <td><span class="formula-inline" data-latex="r(A) = r(A \\mid b) < n"></span></td>
  </tr>
  <tr>
    <td><strong>齐次通解</strong></td>
    <td><span class="formula-inline" data-latex="X = \\sum_{i=1}^{t} c_i \\eta_i, t = n - r(A)"></span></td>
  </tr>
  <tr>
    <td><strong>非齐次通解</strong></td>
    <td><span class="formula-inline" data-latex="X = X^* + \\sum_{i=1}^{t} c_i \\eta_i"></span></td>
  </tr>
  <tr>
    <td><strong>解空间维数</strong></td>
    <td><span class="formula-inline" data-latex="\\dim V = n - r(A)"></span></td>
  </tr>
</table>

<h5>3. 常见题型与技巧</h5>

<table>
  <tr>
    <th>题型</th>
    <th>解题技巧</th>
  </tr>
  <tr>
    <td><strong>判断方程组是否有解</strong></td>
    <td>比较 r(A) 与 r(A|b)</td>
  </tr>
  <tr>
    <td><strong>求解齐次方程组</strong></td>
    <td>化为行最简形，确定自由变量，求基础解系</td>
  </tr>
  <tr>
    <td><strong>求解非齐次方程组</strong></td>
    <td>先求特解，再求对应齐次的基础解系</td>
  </tr>
  <tr>
    <td><strong>含参数方程组的解</strong></td>
    <td>分情况讨论参数取值</td>
  </tr>
  <tr>
    <td><strong>证明线性无关</strong></td>
    <td>用齐次方程组只有零解证明</td>
  </tr>
</table>

<h5>4. 重要结论</h5>

<ul>
  <li>线性方程组 <span class="formula-inline" data-latex="AX = b"></span> 有解 <span class="formula-inline" data-latex="\\Leftrightarrow b"></span> 可由 <span class="formula-inline" data-latex="A"></span> 的列向量线性表示</li>
  <li>齐次方程组 <span class="formula-inline" data-latex="AX = 0"></span> 有非零解 <span class="formula-inline" data-latex="\\Leftrightarrow r(A) < n"></span></li>
  <li>若 <span class="formula-inline" data-latex="A"></span> 是方阵且 <span class="formula-inline" data-latex="|A| \\neq 0"></span>，则 <span class="formula-inline" data-latex="AX = b"></span> 有唯一解 <span class="formula-inline" data-latex="X = A^{-1}b"></span></li>
  <li>非齐次方程组的两个解之差是对应齐次方程组的解</li>
</ul>

<h4>📘 综合例题：含参数方程组的讨论</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\begin{cases} x + y + z = 1 \\\\ x + 2y + 3z = 2 \\\\ x + 3y + az = 3 \\end{cases}"></span> 的解的情况。</p>
  
  <p><strong>解：</strong></p>
  <p>增广矩阵：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{pmatrix} 1 & 1 & 1 & \\mid & 1 \\\\ 1 & 2 & 3 & \\mid & 2 \\\\ 1 & 3 & a & \\mid & 3 \\end{pmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\to \\begin{pmatrix} 1 & 1 & 1 & \\mid & 1 \\\\ 0 & 1 & 2 & \\mid & 1 \\\\ 0 & 0 & a-5 & \\mid & 1 \\end{pmatrix}"></span>
  </p>
  <ul>
    <li>当 <span class="formula-inline" data-latex="a \\neq 5"></span> 时，<span class="formula-inline" data-latex="r(A) = r(A|b) = 3"></span>，唯一解</li>
    <li>当 <span class="formula-inline" data-latex="a = 5"></span> 时，<span class="formula-inline" data-latex="r(A) = 2 < r(A|b) = 3"></span>，无解</li>
  </ul>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="a \\neq 5</span> 时唯一解，<span class="formula-inline" data-latex="a = 5</span> 时无解</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 线性方程组理论是线性代数中最直接的应用之一。高斯消元法是求解线性方程组的基本算法，而解的结构理论则揭示了方程组解的本质规律。掌握这一理论，对于进一步学习数值线性代数、微分方程等课程具有重要意义。
  </p>
</div>
`;