window.SECTION_CONTENT = `
<h4>📐 第六章 二次型 总复习</h4>

<p>本章学习了二次型的概念、矩阵表示、标准形与规范形、正定性等核心内容。二次型理论是矩阵理论的重要应用，也是连接线性代数与几何、优化的桥梁。</p>

<h5>1. 知识结构图</h5>

<pre style="background:#f5f5f5; padding:15px; border-radius:6px; font-family:serif; font-size:0.95rem; line-height:1.8; white-space:pre-wrap;">
                    ┌── 定义：f(X) = XᵀAX（A 对称）
                    │
            ┌── 概念 ──┼── 矩阵与二次型的一一对应
            │          └── 二次型的秩 = r(A)
            │
            ├── 标准形 ──┼── 正交变换法（系数 = 特征值）
            │          ├── 配方法
            │          └── 惯性定理（正负惯性指数不变）
            │
二次型 ────────┼── 规范形 ──┼── 只含 ±1 的平方项
            │          └── 惯性指数 (p, q, r)
            │
            ├── 正定性 ──┼── 正定：XᵀAX > 0
            │          ├── 负定：XᵀAX < 0
            │          ├── 半正定：XᵀAX ≥ 0
            │          └── 不定：正负皆有
            │
            └── 判定方法 ──┼── 特征值法（λᵢ > 0）
                        ├── 顺序主子式法（Δᵢ > 0）
                        └── 合同变换法（A = PᵀP）
</pre>

<h5>2. 核心公式汇总</h5>

<table>
  <tr>
    <th>知识点</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>二次型矩阵形式</strong></td>
    <td><span class="formula-inline" data-latex="f(X) = X^T A X"></span></td>
  </tr>
  <tr>
    <td><strong>正交变换化标准形</strong></td>
    <td><span class="formula-inline" data-latex="Q^T A Q = \\Lambda = \\text{diag}(\\lambda_1, \\cdots, \\lambda_n)"></span></td>
  </tr>
  <tr>
    <td><strong>惯性定理</strong></td>
    <td><span class="formula-inline" data-latex="p + q = r(A)"></span></td>
  </tr>
  <tr>
    <td><strong>正定判定（特征值）</strong></td>
    <td><span class="formula-inline" data-latex="\\lambda_i > 0 \\; (\\forall i)"></span></td>
  </tr>
  <tr>
    <td><strong>正定判定（顺序主子式）</strong></td>
    <td><span class="formula-inline" data-latex="\\Delta_i > 0 \\; (\\forall i)"></span></td>
  </tr>
  <tr>
    <td><strong>合同变换</strong></td>
    <td><span class="formula-inline" data-latex="A = P^T P"></span>（正定）</td>
  </tr>
</table>

<h5>3. 常见题型与技巧</h5>

<table>
  <tr>
    <th>题型</th>
    <th>解题技巧</th>
  </tr>
  <tr>
    <td><strong>写出二次型的矩阵</strong></td>
    <td><span class="formula-inline" data-latex="a_{ii} ="></span> 平方项系数，<span class="formula-inline" data-latex="a_{ij} ="></span> 交叉项系数的一半</td>
  </tr>
  <tr>
    <td><strong>化二次型为标准形</strong></td>
    <td>配方法（灵活）或正交变换法（求特征值）</td>
  </tr>
  <tr>
    <td><strong>判断正定性</strong></td>
    <td>顺序主子式法（低阶）或特征值法</td>
  </tr>
  <tr>
    <td><strong>含参数的正定性</strong></td>
    <td>用顺序主子式列不等式组</td>
  </tr>
  <tr>
    <td><strong>求惯性指数</strong></td>
    <td>化标准形后数正负平方项个数</td>
  </tr>
</table>

<h5>4. 重要结论</h5>

<ul>
  <li>实对称矩阵与二次型一一对应</li>
  <li>任意实二次型都可经正交变换化为标准形，系数为特征值</li>
  <li>惯性定理：正负惯性指数在可逆线性变换下不变</li>
  <li>正定矩阵的特征值全为正，顺序主子式全为正</li>
  <li>正定矩阵与单位矩阵合同（<span class="formula-inline" data-latex="A = P^T P"></span>）</li>
</ul>

<h4>📘 综合例题：二次型综合</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="f(x_1, x_2, x_3) = 2x_1^2 + 2x_2^2 + 2x_3^2 + 2x_1x_2 + 2x_1x_3 + 2x_2x_3"></span>。</p>
  <p>（1）写出 <span class="formula-inline" data-latex="f"></span> 的矩阵；（2）将 <span class="formula-inline" data-latex="f"></span> 化为标准形；（3）判断 <span class="formula-inline" data-latex="f"></span> 的正定性。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>（1）</strong> <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 1 & 1 \\\\ 1 & 2 & 1 \\\\ 1 & 1 & 2 \\end{pmatrix}"></span></p>
  
  <p><strong>（2）</strong> 特征值：<span class="formula-inline" data-latex="\\lambda_1 = 1, \\lambda_2 = 1, \\lambda_3 = 4"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f = y_1^2 + y_2^2 + 4y_3^2"></span>
  </p>
  
  <p><strong>（3）</strong> 特征值均大于 0，所以正定。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 正定</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二次型理论是线性代数的重要应用分支。它将矩阵理论与几何、优化、统计学紧密联系起来。正定二次型在多元函数极值、最小二乘法、主成分分析等领域有着不可替代的地位。掌握二次型的理论和方法，是深入理解现代数学和应用数学的关键。
  </p>
</div>
`;