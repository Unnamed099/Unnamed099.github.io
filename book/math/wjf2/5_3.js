window.SECTION_CONTENT = `
<h4>📐 幂级数</h4>

<p>幂级数是函数项级数中最重要的一类，它形如 <span class="formula-inline" data-latex="\\sum a_n (x - x_0)^n"></span>。幂级数在收敛区间内可以表示一个函数，是函数展开成幂级数的基础。</p>

<h5>1. 函数项级数的概念</h5>

<p><strong>定义：</strong> 若级数的每一项都是定义在区间 <span class="formula-inline" data-latex="I"></span> 上的函数 <span class="formula-inline" data-latex="u_n(x)"></span>，则称</p>

<div class="formula-block" data-latex="\\sum_{n=1}^{\\infty} u_n(x) = u_1(x) + u_2(x) + \\cdots + u_n(x) + \\cdots"></div>

<p>为<strong>函数项级数</strong>。</p>

<p>对于固定的 <span class="formula-inline" data-latex="x_0 \\in I"></span>，<span class="formula-inline" data-latex="\\sum u_n(x_0)"></span> 是常数项级数。若它收敛，则称 <span class="formula-inline" data-latex="x_0"></span> 为级数的<strong>收敛点</strong>；所有收敛点的集合称为<strong>收敛域</strong>。</p>

<p>收敛域上的和函数定义为</p>
<div class="formula-block" data-latex="S(x) = \\sum_{n=1}^{\\infty} u_n(x)"></div>

<h5>2. 幂级数及其收敛性</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="\\sum_{n=0}^{\\infty} a_n (x - x_0)^n = a_0 + a_1(x-x_0) + a_2(x-x_0)^2 + \\cdots"></div>

<p>的级数称为<strong>幂级数</strong>。当 <span class="formula-inline" data-latex="x_0 = 0"></span> 时，称为<strong>麦克劳林级数</strong>。</p>

<p><strong>阿贝尔定理：</strong></p>
<ul>
  <li>若幂级数在 <span class="formula-inline" data-latex="x = x_1 \\neq 0"></span> 处收敛，则对于满足 <span class="formula-inline" data-latex="|x| < |x_1|"></span> 的所有 <span class="formula-inline" data-latex="x"></span>，幂级数绝对收敛</li>
  <li>若幂级数在 <span class="formula-inline" data-latex="x = x_1"></span> 处发散，则对于满足 <span class="formula-inline" data-latex="|x| > |x_1|"></span> 的所有 <span class="formula-inline" data-latex="x"></span>，幂级数发散</li>
</ul>

<p><strong>收敛半径：</strong> 存在唯一的 <span class="formula-inline" data-latex="R \\ge 0"></span>，使级数在 <span class="formula-inline" data-latex="|x| < R"></span> 内绝对收敛，在 <span class="formula-inline" data-latex="|x| > R"></span> 内发散。<span class="formula-inline" data-latex="R"></span> 称为<strong>收敛半径</strong>。</p>

<p><strong>收敛半径的计算（对 <span class="formula-inline" data-latex="\\sum a_n x^n"></span>）：</strong></p>
<ul>
  <li>比值法：<span class="formula-inline" data-latex="R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right|"></span></li>
  <li>根值法：<span class="formula-inline" data-latex="R = \\lim_{n \\to \\infty} \\frac{1}{\\sqrt[n]{|a_n|}}"></span></li>
</ul>

<h4>📘 例题 1：求收敛半径和收敛区间</h4>

<div class="example">
  <p><strong>题目：</strong> 求幂级数 <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}"></span> 的收敛半径和收敛区间。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="a_n = 1/n!"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\lim_{n \\to \\infty} \\frac{(n+1)!}{n!} = \\lim_{n \\to \\infty} (n+1) = +\\infty"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="R = +\\infty</span>，收敛区间为 <span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></p>
</div>

<h4>📘 例题 2：求收敛半径</h4>

<div class="example">
  <p><strong>题目：</strong> 求幂级数 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{x^n}{n}"></span> 的收敛半径和收敛区间。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="R = \\lim_{n \\to \\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\lim_{n \\to \\infty} \\frac{n+1}{n} = 1"></span>
  </p>
  <p>当 <span class="formula-inline" data-latex="x = 1"></span> 时，<span class="formula-inline" data-latex="\\sum 1/n"></span> 发散</p>
  <p>当 <span class="formula-inline" data-latex="x = -1"></span> 时，<span class="formula-inline" data-latex="\\sum (-1)^n/n"></span> 收敛</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="R = 1</span>，收敛域为 <span class="formula-inline" data-latex="[-1, 1)"></span></p>
</div>

<h5>3. 幂级数的运算</h5>

<p><strong>（1）加减法</strong></p>
<div class="formula-block" data-latex="\\sum a_n x^n \\pm \\sum b_n x^n = \\sum (a_n \\pm b_n) x^n"></div>

<p><strong>（2）乘法（柯西乘积）</strong></p>
<div class="formula-block" data-latex="\\left(\\sum_{n=0}^{\\infty} a_n x^n\\right)\\left(\\sum_{n=0}^{\\infty} b_n x^n\\right) = \\sum_{n=0}^{\\infty} \\left(\\sum_{k=0}^{n} a_k b_{n-k}\\right) x^n"></div>

<p><strong>（3）逐项求导</strong></p>
<p>在收敛区间内，幂级数可逐项求导，且收敛半径不变：</p>
<div class="formula-block" data-latex="\\frac{d}{dx}\\sum_{n=0}^{\\infty} a_n x^n = \\sum_{n=1}^{\\infty} n a_n x^{n-1}"></div>

<p><strong>（4）逐项积分</strong></p>
<p>在收敛区间内，幂级数可逐项积分，且收敛半径不变：</p>
<div class="formula-block" data-latex="\\int_0^x \\sum_{n=0}^{\\infty} a_n t^n dt = \\sum_{n=0}^{\\infty} \\frac{a_n}{n+1} x^{n+1}"></div>

<h4>📘 例题 3：利用逐项求导求级数和</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} n x^{n-1}"></span> 的和函数。</p>
  
  <p><strong>解：</strong></p>
  <p>已知 <span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} x^n = \\frac{1}{1-x} \\quad (|x| < 1)"></span></p>
  <p>两边求导：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} n x^{n-1} = \\frac{1}{(1-x)^2} \\quad (|x| < 1)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{(1-x)^2}"></span></p>
</div>

<h5>4. 幂级数总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>幂级数</strong></td>
    <td><span class="formula-inline" data-latex="\\sum a_n x^n"></span></td>
    <td><span class="formula-inline" data-latex="\\sum x^n/n!"></span></td>
  </tr>
  <tr>
    <td><strong>收敛半径</strong></td>
    <td><span class="formula-inline" data-latex="R = \\lim |a_n/a_{n+1}|"></span></td>
    <td><span class="formula-inline" data-latex="R = 1</span> 或 <span class="formula-inline" data-latex="+\\infty"></span></td>
  </tr>
  <tr>
    <td><strong>逐项求导</strong></td>
    <td><span class="formula-inline" data-latex="(\\sum a_n x^n)' = \\sum n a_n x^{n-1}"></span></td>
    <td>收敛半径不变</td>
  </tr>
  <tr>
    <td><strong>逐项积分</strong></td>
    <td><span class="formula-inline" data-latex="\\int \\sum a_n x^n dx = \\sum \\frac{a_n}{n+1}x^{n+1}"></span></td>
    <td>收敛半径不变</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 幂级数是函数项级数中最重要的类型。阿贝尔定理揭示了幂级数的收敛域是一个以原点为中心的区间。逐项求导和逐项积分的性质使得幂级数在求解微分方程和函数逼近中有重要应用。
  </p>
</div>
`;