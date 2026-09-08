window.SECTION_CONTENT = `
<h4>📐 常数项级数的概念和性质</h4>

<p>无穷级数是高等数学中极为重要的内容，它是表示函数、进行数值计算和分析函数性质的有力工具。本节介绍常数项级数的基本概念和性质。</p>

<h5>1. 常数项级数的概念</h5>

<p><strong>定义：</strong> 给定一个数列 <span class="formula-inline" data-latex="u_1, u_2, u_3, \\cdots, u_n, \\cdots"></span>，将各项依次相加得到的表达式</p>

<div class="formula-block" data-latex="u_1 + u_2 + u_3 + \\cdots + u_n + \\cdots = \\sum_{n=1}^{\\infty} u_n"></div>

<p>称为<strong>无穷级数</strong>（简称级数），其中 <span class="formula-inline" data-latex="u_n"></span> 称为级数的<strong>通项</strong>（或一般项）。</p>

<p><strong>部分和：</strong> 级数的前 <span class="formula-inline" data-latex="n"></span> 项和</p>

<div class="formula-block" data-latex="S_n = u_1 + u_2 + \\cdots + u_n = \\sum_{k=1}^{n} u_k"></div>

<p>称为级数的<strong>部分和</strong>。</p>

<p><strong>敛散性：</strong> 若部分和数列 <span class="formula-inline" data-latex="\\{S_n\\}"></span> 有极限 <span class="formula-inline" data-latex="S"></span>，即</p>

<div class="formula-block" data-latex="\\lim_{n \\to \\infty} S_n = S"></div>

<p>则称级数<strong>收敛</strong>，<span class="formula-inline" data-latex="S"></span> 称为级数的<strong>和</strong>；若 <span class="formula-inline" data-latex="\\{S_n\\}"></span> 发散，则称级数<strong>发散</strong>。</p>

<h4>📘 例题 1：等比级数</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论等比级数 <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} a q^n = a + aq + aq^2 + \\cdots"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p>部分和 <span class="formula-inline" data-latex="S_n = a\\frac{1-q^n}{1-q} \\quad (q \\neq 1)"></span></p>
  <p>当 <span class="formula-inline" data-latex="|q| < 1"></span> 时，<span class="formula-inline" data-latex="\\lim_{n\\to\\infty} S_n = \\frac{a}{1-q}"></span>，级数收敛</p>
  <p>当 <span class="formula-inline" data-latex="|q| \\ge 1"></span> 时，级数发散</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="|q| < 1"></span> 收敛，和为 <span class="formula-inline" data-latex="a/(1-q)"></span></p>
</div>

<h5>2. 收敛级数的基本性质</h5>

<p><strong>性质 1：</strong> 若级数 <span class="formula-inline" data-latex="\\sum u_n"></span> 和 <span class="formula-inline" data-latex="\\sum v_n"></span> 都收敛，则</p>

<div class="formula-block" data-latex="\\sum (u_n \\pm v_n) = \\sum u_n \\pm \\sum v_n"></div>

<p><strong>性质 2：</strong> 若级数 <span class="formula-inline" data-latex="\\sum u_n"></span> 收敛，<span class="formula-inline" data-latex="c"></span> 为常数，则</p>

<div class="formula-block" data-latex="\\sum c u_n = c \\sum u_n"></div>

<p><strong>性质 3（级数收敛的必要条件）：</strong> 若级数 <span class="formula-inline" data-latex="\\sum u_n"></span> 收敛，则</p>

<div class="formula-block" data-latex="\\lim_{n \\to \\infty} u_n = 0"></div>

<div class="note">
  <strong>⚠️ 注意：</strong>
  <p>• <span class="formula-inline" data-latex="\\lim_{n\\to\\infty} u_n = 0"></span> 是级数收敛的<strong>必要条件</strong>，不是充分条件</p>
  <p>• 例如调和级数 <span class="formula-inline" data-latex="\\sum 1/n"></span> 满足 <span class="formula-inline" data-latex="u_n \\to 0"></span>，但发散</p>
</div>

<p><strong>性质 4（添加/删去有限项）：</strong> 改变级数的有限项不改变其敛散性（但可能改变和）。</p>

<p><strong>性质 5（级数加括号）：</strong> 若级数收敛，则任意加括号后所得级数仍收敛，且和不变。</p>

<h4>📘 例题 2：判断级数是否收敛</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{n}{n+1}"></span> 是否收敛。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\neq 0"></span>
  </p>
  <p>不满足收敛的必要条件。</p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 发散</p>
</div>

<h4>📘 例题 3：利用性质求级数和</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{1}{n(n+1)}"></span> 的和。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}"></span></p>
  <p>部分和 <span class="formula-inline" data-latex="S_n = \\left(1-\\frac{1}{2}\\right) + \\left(\\frac{1}{2}-\\frac{1}{3}\\right) + \\cdots + \\left(\\frac{1}{n}-\\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="S = \\lim_{n\\to\\infty} S_n = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h5>3. 常数项级数总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>级数</strong></td>
    <td><span class="formula-inline" data-latex="\\sum u_n"></span></td>
    <td><span class="formula-inline" data-latex="1 + \\frac{1}{2} + \\frac{1}{4} + \\cdots"></span></td>
  </tr>
  <tr>
    <td><strong>部分和</strong></td>
    <td><span class="formula-inline" data-latex="S_n = \\sum_{k=1}^n u_k"></span></td>
    <td><span class="formula-inline" data-latex="S_n = 2 - 1/2^{n-1}"></span></td>
  </tr>
  <tr>
    <td><strong>收敛</strong></td>
    <td><span class="formula-inline" data-latex="\\lim S_n = S"></span></td>
    <td>等比级数 <span class="formula-inline" data-latex="|q|<1"></span></td>
  </tr>
  <tr>
    <td><strong>必要条件</strong></td>
    <td><span class="formula-inline" data-latex="\\lim u_n = 0"></span></td>
    <td>调和级数（不充分）</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 常数项级数是无穷级数的基础。级数的敛散性由部分和数列的极限决定。收敛级数的基本性质是研究级数的重要工具，而必要条件 <span class="formula-inline" data-latex="u_n \\to 0"></span> 是判断级数发散的最快捷方法。
  </p>
</div>
`;