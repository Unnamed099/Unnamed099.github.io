window.SECTION_CONTENT = `
<h4>📐 事件的独立性</h4>

<p>独立性是概率论中最基本的概念之一。如果事件 A 的发生与否不影响事件 B 发生的概率，则称 A 与 B 相互独立。独立性的概念在概率计算和统计推断中有着极其重要的地位。</p>

<h5>1. 两个事件的独立性</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="A, B"></span> 是两个事件。若</p>

<div class="formula-block" data-latex="P(A \\cap B) = P(A) P(B)"></div>

<p>则称事件 <span class="formula-inline" data-latex="A"></span> 与 <span class="formula-inline" data-latex="B"></span> <strong>相互独立</strong>。</p>

<p>等价地，若 <span class="formula-inline" data-latex="P(B) > 0"></span>，则独立 <span class="formula-inline" data-latex="\\Leftrightarrow P(A \\mid B) = P(A)"></span>。</p>

<div class="note">
  <strong>⚠️ 注意：</strong>
  <p>• 互斥与独立是两个不同的概念</p>
  <p>• 若 <span class="formula-inline" data-latex="A, B"></span> 互斥且 <span class="formula-inline" data-latex="P(A) > 0, P(B) > 0"></span>，则它们不可能独立</p>
  <p>• 若 <span class="formula-inline" data-latex="A, B"></span> 独立且 <span class="formula-inline" data-latex="P(A) > 0, P(B) > 0"></span>，则它们不可能互斥</p>
</div>

<h4>📘 例题 1：判断独立性</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="P(A) = 0.3, P(B) = 0.4, P(A \\cap B) = 0.12"></span>，判断 <span class="formula-inline" data-latex="A, B"></span> 是否独立。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A) P(B) = 0.3 \\times 0.4 = 0.12"></span>
  </p>
  <p>因为 <span class="formula-inline" data-latex="P(A \\cap B) = P(A) P(B)"></span>，所以 <span class="formula-inline" data-latex="A, B"></span> 独立。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 独立</p>
</div>

<h5>2. 多个事件的独立性</h5>

<p><strong>定义：</strong> 对 <span class="formula-inline" data-latex="n"></span> 个事件 <span class="formula-inline" data-latex="A_1, A_2, \\cdots, A_n"></span>，若对其中任意 <span class="formula-inline" data-latex="k</span> 个事件 <span class="formula-inline" data-latex="(2 \\le k \\le n)"></span>，都有</p>

<div class="formula-block" data-latex="P(A_{i_1} \\cap A_{i_2} \\cap \\cdots \\cap A_{i_k}) = P(A_{i_1}) P(A_{i_2}) \\cdots P(A_{i_k})"></div>

<p>则称这 <span class="formula-inline" data-latex="n"></span> 个事件<strong>相互独立</strong>。</p>

<h5>3. 独立事件的性质</h5>

<p><strong>性质 1：</strong> 若 <span class="formula-inline" data-latex="A, B"></span> 独立，则 <span class="formula-inline" data-latex="A, \\overline{B}"></span>、<span class="formula-inline" data-latex="\\overline{A}, B"></span>、<span class="formula-inline" data-latex="\\overline{A}, \\overline{B}"></span> 也独立。</p>

<p><strong>性质 2：</strong> 若 <span class="formula-inline" data-latex="A, B, C"></span> 相互独立，则 <span class="formula-inline" data-latex="P(A \\cap B \\cap C) = P(A)P(B)P(C)"></span>。</p>

<p><strong>性质 3：</strong> 若 <span class="formula-inline" data-latex="A, B, C"></span> 两两独立，不一定相互独立。</p>

<h4>📘 例题 2：多个独立事件</h4>

<div class="example">
  <p><strong>题目：</strong> 甲、乙、丙三人各自独立地射击同一目标，命中率分别为 0.8、0.7、0.6。求目标被击中的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="A, B, C"></span> 分别表示甲、乙、丙击中目标。</p>
  <p>目标被击中 = <span class="formula-inline" data-latex="A \\cup B \\cup C"></span></p>
  <p>用对立事件：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A \\cup B \\cup C) = 1 - P(\\overline{A} \\cap \\overline{B} \\cap \\overline{C})"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 - P(\\overline{A})P(\\overline{B})P(\\overline{C})"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 - 0.2 \\times 0.3 \\times 0.4 = 1 - 0.024 = 0.976"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.976"></span></p>
</div>

<h5>4. 独立性与互斥性的关系</h5>

<table>
  <tr>
    <th>性质</th>
    <th>独立</th>
    <th>互斥</th>
  </tr>
  <tr>
    <td><strong>定义</strong></td>
    <td><span class="formula-inline" data-latex="P(A \\cap B) = P(A)P(B)"></span></td>
    <td><span class="formula-inline" data-latex="A \\cap B = \\varnothing"></span></td>
  </tr>
  <tr>
    <td><strong>可以同时发生</strong></td>
    <td>可以（若概率均 > 0）</td>
    <td>不可以</td>
  </tr>
  <tr>
    <td><strong>与条件概率关系</strong></td>
    <td><span class="formula-inline" data-latex="P(A \\mid B) = P(A)"></span></td>
    <td><span class="formula-inline" data-latex="P(A \\mid B) = 0"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 事件的独立性是概率论的核心概念之一。它描述了事件之间的"无影响"关系。独立性的概念在伯努利试验、随机变量的独立性、统计推断中都有根本性的地位。注意区分独立与互斥：独立是概率意义上的，互斥是集合意义上的。
  </p>
</div>
`;