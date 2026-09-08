window.SECTION_CONTENT = `
<h4>📐 克拉默法则 —— 线性方程组的求解</h4>

<p>克拉默法则是用行列式求解线性方程组的一种方法。它适用于方程个数与未知量个数相等，且系数行列式不为零的情况。</p>

<h5>1. 克拉默法则的内容</h5>

<p>对于 n 元线性方程组</p>

<div class="formula-block" data-latex="\\begin{cases} a_{11}x_1 + a_{12}x_2 + \\cdots + a_{1n}x_n = b_1 \\\\ a_{21}x_1 + a_{22}x_2 + \\cdots + a_{2n}x_n = b_2 \\\\ \\vdots \\\\ a_{n1}x_1 + a_{n2}x_2 + \\cdots + a_{nn}x_n = b_n \\end{cases}"></div>

<p>若系数行列式</p>

<div class="formula-block" data-latex="D = \\begin{vmatrix} a_{11} & a_{12} & \\cdots & a_{1n} \\\\ a_{21} & a_{22} & \\cdots & a_{2n} \\\\ \\vdots & \\vdots & & \\vdots \\\\ a_{n1} & a_{n2} & \\cdots & a_{nn} \\end{vmatrix} \\neq 0"></div>

<p>则方程组有唯一解：</p>

<div class="formula-block" data-latex="x_1 = \\frac{D_1}{D}, \\quad x_2 = \\frac{D_2}{D}, \\quad \\cdots, \\quad x_n = \\frac{D_n}{D}"></div>

<p>其中 <span class="formula-inline" data-latex="D_j"></span> 是将行列式 D 中的第 j 列替换为常数项 <span class="formula-inline" data-latex="(b_1, b_2, \\cdots, b_n)^T"></span> 后得到的行列式。</p>

<div class="note">
  <strong>💡 注意：</strong>
  <p>• 克拉默法则只适用于 <span class="formula-inline" data-latex="D \\neq 0"></span> 的情况</p>
  <p>• 计算量很大（需要计算 <span class="formula-inline" data-latex="n+1"></span> 个 n 阶行列式）</p>
  <p>• 对于高阶方程组，理论上重要，但计算上常用其他方法</p>
</div>

<h4>📘 例题 1：用克拉默法则解三元方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 用克拉默法则解方程组</p>
  <p style="text-align: center;"><span class="formula-inline" data-latex="\\begin{cases} x + 2y + 3z = 14 \\\\ 2x + y + z = 8 \\\\ 3x + y + 2z = 11 \\end{cases}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>系数行列式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 1 & 1 \\\\ 3 & 1 & 2 \\end{vmatrix}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 \\times (1\\times2 - 1\\times1) - 2 \\times (2\\times2 - 1\\times3) + 3 \\times (2\\times1 - 1\\times3)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 \\times 1 - 2 \\times 1 + 3 \\times (-1) = 1 - 2 - 3 = -4 \\neq 0"></span>
  </p>
  
  <p>计算 <span class="formula-inline" data-latex="D_1, D_2, D_3"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D_1 = \\begin{vmatrix} 14 & 2 & 3 \\\\ 8 & 1 & 1 \\\\ 11 & 1 & 2 \\end{vmatrix} = 14 \\times 1 - 2 \\times 5 + 3 \\times (-3) = 14 - 10 - 9 = -5"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D_2 = \\begin{vmatrix} 1 & 14 & 3 \\\\ 2 & 8 & 1 \\\\ 3 & 11 & 2 \\end{vmatrix} = 1 \\times 5 - 14 \\times 1 + 3 \\times (-2) = 5 - 14 - 6 = -15"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D_3 = \\begin{vmatrix} 1 & 2 & 14 \\\\ 2 & 1 & 8 \\\\ 3 & 1 & 11 \\end{vmatrix} = 1 \\times 3 - 2 \\times (-2) + 14 \\times (-1) = 3 + 4 - 14 = -7"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x_1 = \\frac{D_1}{D} = \\frac{-5}{-4} = \\frac{5}{4}, \\quad x_2 = \\frac{D_2}{D} = \\frac{-15}{-4} = \\frac{15}{4}, \\quad x_3 = \\frac{D_3}{D} = \\frac{-7}{-4} = \\frac{7}{4}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x = 5/4, y = 15/4, z = 7/4"></span></p>
</div>

<h4>📘 例题 2：齐次线性方程组</h4>

<div class="example">
  <p><strong>题目：</strong> 判断齐次方程组 <span class="formula-inline" data-latex="\\begin{cases} x + y = 0 \\\\ 2x - y = 0 \\end{cases}"></span> 是否有非零解。</p>
  
  <p><strong>解：</strong></p>
  <p>系数行列式：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D = \\begin{vmatrix} 1 & 1 \\\\ 2 & -1 \\end{vmatrix} = 1 \\times (-1) - 1 \\times 2 = -3 \\neq 0"></span>
  </p>
  <p>由克拉默法则，齐次方程组只有零解。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 只有零解 <span class="formula-inline" data-latex="x = 0, y = 0"></span></p>
</div>

<h5>2. 克拉默法则的几何意义</h5>

<p>在二维空间中，克拉默法则的几何意义是：</p>

<p>方程组 <span class="formula-inline" data-latex="\\begin{cases} a_{11}x + a_{12}y = b_1 \\\\ a_{21}x + a_{22}y = b_2 \\end{cases}"></span></p>

<p>的系数矩阵的两列构成两个向量，而常数项向量 <span class="formula-inline" data-latex="(b_1, b_2)^T"></span> 可以被这两个向量线性表示，系数就是 <span class="formula-inline" data-latex="(x, y)"></span>。</p>

<p>当 <span class="formula-inline" data-latex="D \\neq 0"></span> 时，表示系数向量线性无关，可以张成整个平面。</p>

<h5>3. 克拉默法则总结</h5>

<table>
  <tr>
    <th>条件</th>
    <th>结论</th>
    <th>说明</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="D \\neq 0"></span></td>
    <td>唯一解</td>
    <td><span class="formula-inline" data-latex="x_i = D_i/D"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="D = 0, D_j \\neq 0"></span></td>
    <td>无解</td>
    <td>增广矩阵的秩大于系数矩阵的秩</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="D = 0, D_j = 0"></span></td>
    <td>无穷多解</td>
    <td>系数矩阵秩小于未知量个数</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 克拉默法则建立在线性代数理论基础之上，用行列式简洁地表达了线性方程组的解。它虽然在计算上不如高斯消元法高效，但在理论分析和推导中具有重要价值，也是线性代数中方程求解的经典方法。
  </p>
</div>
`;