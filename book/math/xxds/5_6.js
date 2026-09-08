window.SECTION_CONTENT = `
<h4>📐 第五章 矩阵的特征值与特征向量 总复习</h4>

<p>本章学习了特征值与特征向量的概念、计算方法以及矩阵对角化的理论和应用。特征值理论是线性代数最深刻的内容之一，在众多领域有广泛的应用。</p>

<h5>1. 知识结构图</h5>

<pre style="background:#f5f5f5; padding:15px; border-radius:6px; font-family:serif; font-size:0.95rem; line-height:1.8; white-space:pre-wrap;">
                    ┌── 定义：AX = λX
                    │
            ┌── 特征值 ──┼── 特征方程：|A - λI| = 0
            │          ├── 特征多项式
            │          └── 性质：迹 = ∑λᵢ，行列式 = ∏λᵢ
            │
            ├── 特征向量 ──┼── 解 (A - λI)X = 0
            │          ├── 不同特征值的特征向量线性无关
            │          └── 特征子空间
            │
特征值理论 ────────┼── 相似矩阵 ──┼── B = P⁻¹AP
            │          ├── 不变量：特征值、迹、行列式、秩
            │          └── 同一线性变换的不同表示
            │
            ├── 对角化 ──┼── 条件：n 个线性无关的特征向量
            │          ├── 步骤：P⁻¹AP = Λ
            │          └── 应用：Aⁿ = PΛⁿP⁻¹
            │
            └── 实对称矩阵 ──┼── 特征值全为实数
                        ├── 不同特征值的特征向量正交
                        ├── 必可正交对角化：QᵀAQ = Λ
                        └── 施密特正交化
</pre>

<h5>2. 核心公式汇总</h5>

<table>
  <tr>
    <th>知识点</th>
    <th>公式</th>
  </tr>
  <tr>
    <td><strong>特征方程</strong></td>
    <td><span class="formula-inline" data-latex="|A - \\lambda I| = 0"></span></td>
  </tr>
  <tr>
    <td><strong>特征多项式</strong></td>
    <td><span class="formula-inline" data-latex="f(\\lambda) = |A - \\lambda I|"></span></td>
  </tr>
  <tr>
    <td><strong>迹与特征值</strong></td>
    <td><span class="formula-inline" data-latex="\\text{tr}(A) = \\sum \\lambda_i"></span></td>
  </tr>
  <tr>
    <td><strong>行列式与特征值</strong></td>
    <td><span class="formula-inline" data-latex="|A| = \\prod \\lambda_i"></span></td>
  </tr>
  <tr>
    <td><strong>相似变换</strong></td>
    <td><span class="formula-inline" data-latex="B = P^{-1} A P"></span></td>
  </tr>
  <tr>
    <td><strong>对角化</strong></td>
    <td><span class="formula-inline" data-latex="P^{-1} A P = \\Lambda"></span></td>
  </tr>
  <tr>
    <td><strong>矩阵幂</strong></td>
    <td><span class="formula-inline" data-latex="A^n = P \\Lambda^n P^{-1}"></span></td>
  </tr>
  <tr>
    <td><strong>正交对角化</strong></td>
    <td><span class="formula-inline" data-latex="Q^T A Q = \\Lambda"></span></td>
  </tr>
</table>

<h5>3. 常见题型与技巧</h5>

<table>
  <tr>
    <th>题型</th>
    <th>解题技巧</th>
  </tr>
  <tr>
    <td><strong>求特征值</strong></td>
    <td>计算 |A - λI| = 0，解方程</td>
  </tr>
  <tr>
    <td><strong>求特征向量</strong></td>
    <td>对每个 λ，解 (A - λI)X = 0</td>
  </tr>
  <tr>
    <td><strong>判断可对角化</strong></td>
    <td>检查是否有 n 个线性无关的特征向量</td>
  </tr>
  <tr>
    <td><strong>求 Aⁿ</strong></td>
    <td>对角化后计算 PΛⁿP⁻¹</td>
  </tr>
  <tr>
    <td><strong>实对称矩阵正交对角化</strong></td>
    <td>求特征向量后正交化、单位化</td>
  </tr>
</table>

<h5>4. 重要结论</h5>

<ul>
  <li>不同特征值对应的特征向量线性无关</li>
  <li>实对称矩阵的特征值全为实数，且必可正交对角化</li>
  <li>矩阵可对角化 ⇔ 存在 n 个线性无关的特征向量</li>
  <li>若矩阵有 n 个互不相同的特征值，则必可对角化</li>
  <li>相似矩阵具有相同的特征值、迹、行列式和秩</li>
</ul>

<h4>📘 综合例题：特征值理论的综合运用</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="A = \\begin{pmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{pmatrix}"></span>。</p>
  <p>（1）求 <span class="formula-inline" data-latex="A"></span> 的特征值和特征向量；（2）求 <span class="formula-inline" data-latex="A^n</span>；（3）判断 <span class="formula-inline" data-latex="A"></span> 是否可对角化。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>（1）</strong> <span class="formula-inline" data-latex="\\lambda_1 = 2</span>（二重），<span class="formula-inline" data-latex="\\lambda_2 = 3"></span>。</p>
  <p>对 <span class="formula-inline" data-latex="\\lambda = 2"></span>：<span class="formula-inline" data-latex="X_1 = (1,0,0)^T, X_2 = (0,1,0)^T"></span></p>
  <p>对 <span class="formula-inline" data-latex="\\lambda = 3"></span>：<span class="formula-inline" data-latex="X_3 = (0,0,1)^T"></span></p>
  
  <p><strong>（2）</strong> <span class="formula-inline" data-latex="A^n = \\begin{pmatrix} 2^n & 0 & 0 \\\\ 0 & 2^n & 0 \\\\ 0 & 0 & 3^n \\end{pmatrix}"></span></p>
  
  <p><strong>（3）</strong> 有 3 个线性无关的特征向量，可对角化。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 特征值为 <span class="formula-inline" data-latex="2, 2, 3"></span>，可对角化</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 特征值理论是线性代数的核心内容之一。它不仅给出了矩阵的"谱"（spectrum）——这是矩阵的本质特征之一，而且通过对角化理论将矩阵运算简化为对角矩阵的运算。特征值理论在微分方程、动力系统、量子力学、数据科学等领域都有不可替代的地位。
  </p>
</div>
`;