window.SECTION_CONTENT = `
<h4>📐 条件概率与乘法公式</h4>

<p>在实际问题中，我们常常需要在已知某个事件发生的条件下，求另一个事件发生的概率。这就是条件概率的研究内容。乘法公式则是条件概率的直接推论，用于计算多个事件同时发生的概率。</p>

<h5>1. 条件概率的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="A, B"></span> 是两个事件，且 <span class="formula-inline" data-latex="P(B) > 0"></span>。在事件 <span class="formula-inline" data-latex="B"></span> 发生的条件下，事件 <span class="formula-inline" data-latex="A"></span> 发生的<strong>条件概率</strong>定义为</p>

<div class="formula-block" data-latex="P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}"></div>

<p>条件概率满足概率的三条公理，因此具有概率的所有性质。</p>

<h4>📘 例题 1：条件概率的计算</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="P(A) = 0.4, P(B) = 0.5, P(A \\cap B) = 0.2"></span>，求 <span class="formula-inline" data-latex="P(A \\mid B)"></span> 和 <span class="formula-inline" data-latex="P(B \\mid A)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(B \\mid A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0.2}{0.4} = 0.5"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="P(A \\mid B) = 0.4, P(B \\mid A) = 0.5"></span></p>
</div>

<h4>📘 例题 2：条件概率的实际应用</h4>

<div class="example">
  <p><strong>题目：</strong> 某工厂生产的产品中，甲车间生产的占 60%，乙车间生产的占 40%。甲车间的次品率为 5%，乙车间的次品率为 8%。求抽到一个次品时，该产品来自甲车间的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="A_1"></span> 表示"来自甲车间"，<span class="formula-inline" data-latex="A_2"></span> 表示"来自乙车间"，<span class="formula-inline" data-latex="B"></span> 表示"次品"。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A_1) = 0.6, P(A_2) = 0.4"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(B \\mid A_1) = 0.05, P(B \\mid A_2) = 0.08"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(B) = P(B \\mid A_1)P(A_1) + P(B \\mid A_2)P(A_2) = 0.05 \\times 0.6 + 0.08 \\times 0.4 = 0.03 + 0.032 = 0.062"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A_1 \\mid B) = \\frac{P(B \\mid A_1)P(A_1)}{P(B)} = \\frac{0.05 \\times 0.6}{0.062} = \\frac{0.03}{0.062} \\approx 0.484"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\approx 0.484"></span></p>
</div>

<h5>2. 乘法公式</h5>

<p>由条件概率的定义，可得<strong>乘法公式</strong>：</p>

<div class="formula-block" data-latex="P(A \\cap B) = P(A \\mid B)P(B) = P(B \\mid A)P(A)"></div>

<p>推广到 <span class="formula-inline" data-latex="n"></span> 个事件：</p>

<div class="formula-block" data-latex="P(A_1 \\cap A_2 \\cap \\cdots \\cap A_n) = P(A_1)P(A_2 \\mid A_1)P(A_3 \\mid A_1 \\cap A_2) \\cdots P(A_n \\mid A_1 \\cap A_2 \\cap \\cdots \\cap A_{n-1})"></div>

<h4>📘 例题 3：乘法公式的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 袋中有 5 个红球和 3 个白球，不放回地依次取出 2 个球，求两个都是红球的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="A_1"></span> 表示"第一次取到红球"，<span class="formula-inline" data-latex="A_2"></span> 表示"第二次取到红球"。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A_1) = \\frac{5}{8}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A_2 \\mid A_1) = \\frac{4}{7}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A_1 \\cap A_2) = P(A_1)P(A_2 \\mid A_1) = \\frac{5}{8} \\times \\frac{4}{7} = \\frac{20}{56} = \\frac{5}{14} \\approx 0.357"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{5}{14}"></span></p>
</div>

<h5>3. 条件概率的重要性质</h5>

<p><strong>性质 1：</strong> <span class="formula-inline" data-latex="P(\\overline{A} \\mid B) = 1 - P(A \\mid B)"></span></p>
<p><strong>性质 2：</strong> <span class="formula-inline" data-latex="P(A_1 \\cup A_2 \\mid B) = P(A_1 \\mid B) + P(A_2 \\mid B) - P(A_1 \\cap A_2 \\mid B)"></span></p>
<p><strong>性质 3（乘法公式的变形式）：</strong> <span class="formula-inline" data-latex="P(A \\cap B) = P(A)P(B \\mid A)"></span></p>

<h5>4. 条件概率与乘法公式总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>公式</th>
    <th>适用场景</th>
  </tr>
  <tr>
    <td><strong>条件概率</strong></td>
    <td><span class="formula-inline" data-latex="P(A \\mid B) = P(A \\cap B) / P(B)"></span></td>
    <td>已知 B 发生求 A 的概率</td>
  </tr>
  <tr>
    <td><strong>乘法公式</strong></td>
    <td><span class="formula-inline" data-latex="P(A \\cap B) = P(A)P(B \\mid A)"></span></td>
    <td>求多个事件同时发生</td>
  </tr>
  <tr>
    <td><strong>一般乘法公式</strong></td>
    <td><span class="formula-inline" data-latex="P(\\bigcap A_i) = \\prod P(A_i \\mid \\text{前面})"></span></td>
    <td>求多个事件同时发生</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 条件概率和乘法公式是概率论中最重要的概念之一。条件概率反映了事件之间的相互影响，乘法公式则提供了计算多个事件同时发生的有效方法。这两个概念是学习全概率公式和贝叶斯公式的基础。
  </p>
</div>
`;