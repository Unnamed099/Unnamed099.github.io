window.SECTION_CONTENT = `
<h4>📐 全概率公式与贝叶斯公式</h4>

<p>全概率公式和贝叶斯公式是概率论中两个最重要的公式。全概率公式用于计算复杂事件的概率，贝叶斯公式则用于在已知结果的情况下推断原因的概率。</p>

<h5>1. 全概率公式</h5>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="B_1, B_2, \\cdots, B_n"></span> 是样本空间 <span class="formula-inline" data-latex="\\Omega"></span> 的一个<strong>完备事件组</strong>（即两两互斥且并集为 <span class="formula-inline" data-latex="\\Omega"></span>），且 <span class="formula-inline" data-latex="P(B_i) > 0"></span>。则对任意事件 <span class="formula-inline" data-latex="A"></span>，有</p>

<div class="formula-block" data-latex="P(A) = \\sum_{i=1}^{n} P(A \\mid B_i) P(B_i)"></div>

<p><strong>理解：</strong> 事件 <span class="formula-inline" data-latex="A"></span> 发生的概率等于它在各个"原因" <span class="formula-inline" data-latex="B_i"></span> 下发生的条件概率的加权平均。</p>

<h4>📘 例题 1：全概率公式</h4>

<div class="example">
  <p><strong>题目：</strong> 某工厂有三条生产线，产量分别占总产量的 30%、40%、30%。次品率分别为 2%、3%、4%。求从该厂产品中任取一件是次品的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="A"></span> 表示"取到次品"，<span class="formula-inline" data-latex="B_1, B_2, B_3"></span> 分别表示"来自生产线 1, 2, 3"。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A) = \\sum_{i=1}^{3} P(A \\mid B_i) P(B_i)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 0.02 \\times 0.3 + 0.03 \\times 0.4 + 0.04 \\times 0.3"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 0.006 + 0.012 + 0.012 = 0.03"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.03"></span></p>
</div>

<h5>2. 贝叶斯公式</h5>

<p><strong>定理：</strong> 设 <span class="formula-inline" data-latex="B_1, B_2, \\cdots, B_n"></span> 是完备事件组，<span class="formula-inline" data-latex="P(B_i) > 0"></span>。则对任意事件 <span class="formula-inline" data-latex="A"></span>（<span class="formula-inline" data-latex="P(A) > 0"></span>），有</p>

<div class="formula-block" data-latex="P(B_k \\mid A) = \\frac{P(A \\mid B_k) P(B_k)}{\\sum_{i=1}^{n} P(A \\mid B_i) P(B_i)} = \\frac{P(A \\mid B_k) P(B_k)}{P(A)}"></div>

<p><strong>理解：</strong> 贝叶斯公式用于"由果溯因"——已知结果 <span class="formula-inline" data-latex="A"></span> 已发生，求它是由第 <span class="formula-inline" data-latex="k"></span> 个原因 <span class="formula-inline" data-latex="B_k"></span> 引起的概率。</p>

<h4>📘 例题 2：贝叶斯公式</h4>

<div class="example">
  <p><strong>题目：</strong> 承上例，若从产品中任取一件发现是次品，求该次品来自第 3 条生产线的概率。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(B_3 \\mid A) = \\frac{P(A \\mid B_3)P(B_3)}{P(A)}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{0.04 \\times 0.3}{0.03} = \\frac{0.012}{0.03} = 0.4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.4"></span></p>
</div>

<h4>📘 例题 3：医学诊断中的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 某种疾病在人群中的发病率为 1%。某检测方法的灵敏度（有病时检测为阳性的概率）为 95%，特异度（无病时检测为阴性的概率）为 90%。若某人检测为阳性，求其真正患病的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="D"></span> 表示患病，<span class="formula-inline" data-latex="\\overline{D}"></span> 表示未患病，<span class="formula-inline" data-latex="+"></span> 表示检测阳性。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(D) = 0.01, P(\\overline{D}) = 0.99"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(+ \\mid D) = 0.95, P(+ \\mid \\overline{D}) = 0.10"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(+) = 0.95 \\times 0.01 + 0.10 \\times 0.99 = 0.0095 + 0.099 = 0.1085"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(D \\mid +) = \\frac{0.95 \\times 0.01}{0.1085} = \\frac{0.0095}{0.1085} \\approx 0.0876"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\approx 8.76\\%"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 即使检测阳性，真正患病的概率只有约 8.76%，因为发病率很低，假阳性数量远多于真阳性。</p>
  </div>
</div>

<h5>3. 全概率与贝叶斯公式总结</h5>

<table>
  <tr>
    <th>公式</th>
    <th>表达式</th>
    <th>用途</th>
  </tr>
  <tr>
    <td><strong>全概率公式</strong></td>
    <td><span class="formula-inline" data-latex="P(A) = \\sum P(A \\mid B_i)P(B_i)"></span></td>
    <td>由原因推结果</td>
  </tr>
  <tr>
    <td><strong>贝叶斯公式</strong></td>
    <td><span class="formula-inline" data-latex="P(B_k \\mid A) = \\frac{P(A \\mid B_k)P(B_k)}{\\sum P(A \\mid B_i)P(B_i)}"></span></td>
    <td>由结果推原因</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 全概率公式和贝叶斯公式是概率论中最重要的两个公式。全概率公式通过完备事件组将复杂事件的概率分解为简单事件的条件概率之和；贝叶斯公式则实现了"由果溯因"的推理。贝叶斯公式是现代统计学、机器学习中贝叶斯方法的基础。
  </p>
</div>
`;