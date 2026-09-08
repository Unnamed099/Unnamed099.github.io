window.SECTION_CONTENT = `
<h4>📐 常数项级数的审敛法</h4>

<p>判断一个级数的敛散性是级数理论的核心问题。对于不同类型的级数，有不同的审敛法。本节将介绍正项级数、交错级数以及绝对收敛与条件收敛的判别方法。</p>

<h5>1. 正项级数及其审敛法</h5>

<p><strong>定义：</strong> 若级数 <span class="formula-inline" data-latex="\\sum u_n"></span> 的通项 <span class="formula-inline" data-latex="u_n \\ge 0"></span>，则称为<strong>正项级数</strong>。</p>

<p><strong>（1）比较审敛法</strong></p>
<p>若 <span class="formula-inline" data-latex="0 \\le u_n \\le v_n"></span>，则</p>
<ul>
  <li><span class="formula-inline" data-latex="\\sum v_n"></span> 收敛 <span class="formula-inline" data-latex="\\Rightarrow"></span> <span class="formula-inline" data-latex="\\sum u_n"></span> 收敛</li>
  <li><span class="formula-inline" data-latex="\\sum u_n"></span> 发散 <span class="formula-inline" data-latex="\\Rightarrow"></span> <span class="formula-inline" data-latex="\\sum v_n"></span> 发散</li>
</ul>

<p><strong>（2）比较审敛法的极限形式</strong></p>
<p>若 <span class="formula-inline" data-latex="\\lim_{n \\to \\infty} \\frac{u_n}{v_n} = l</span>（<span class="formula-inline" data-latex="0 < l < +\\infty"></span>），则 <span class="formula-inline" data-latex="\\sum u_n"></span> 与 <span class="formula-inline" data-latex="\\sum v_n"></span> 同敛散。</p>

<p><strong>（3）比值审敛法（达朗贝尔判别法）</strong></p>
<p>若 <span class="formula-inline" data-latex="\\lim_{n \\to \\infty} \\frac{u_{n+1}}{u_n} = \\rho"></span>，则</p>
<ul>
  <li><span class="formula-inline" data-latex="\\rho < 1"></span>：级数收敛</li>
  <li><span class="formula-inline" data-latex="\\rho > 1"></span>：级数发散</li>
  <li><span class="formula-inline" data-latex="\\rho = 1"></span>：无法判断</li>
</ul>

<p><strong>（4）根值审敛法（柯西判别法）</strong></p>
<p>若 <span class="formula-inline" data-latex="\\lim_{n \\to \\infty} \\sqrt[n]{u_n} = \\rho"></span>，则</p>
<ul>
  <li><span class="formula-inline" data-latex="\\rho < 1"></span>：级数收敛</li>
  <li><span class="formula-inline" data-latex="\\rho > 1"></span>：级数发散</li>
  <li><span class="formula-inline" data-latex="\\rho = 1"></span>：无法判断</li>
</ul>

<h4>📘 例题 1：比较审敛法</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{1}{n^2 + 1}"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\frac{1}{n^2 + 1} < \\frac{1}{n^2}"></span></p>
  <p>而 <span class="formula-inline" data-latex="\\sum 1/n^2"></span> 收敛（<span class="formula-inline" data-latex="p = 2 > 1"></span> 的 <span class="formula-inline" data-latex="p"></span> 级数）。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛</p>
</div>

<h4>📘 例题 2：比值审敛法</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{u_{n+1}}{u_n} = \\frac{(n+1)!/(n+1)^{n+1}}{n!/n^n} = \\frac{n^n}{(n+1)^n} = \\frac{1}{(1+1/n)^n} \\to \\frac{1}{e} < 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛</p>
</div>

<h5>2. 交错级数及其审敛法</h5>

<p><strong>定义：</strong> 形如 <span class="formula-inline" data-latex="\\sum (-1)^{n-1} u_n = u_1 - u_2 + u_3 - u_4 + \\cdots</span>（<span class="formula-inline" data-latex="u_n > 0"></span>）的级数称为<strong>交错级数</strong>。</p>

<p><strong>莱布尼茨判别法：</strong> 若交错级数满足</p>
<ul>
  <li><span class="formula-inline" data-latex="u_n \\ge u_{n+1}"></span>（单调递减）</li>
  <li><span class="formula-inline" data-latex="\\lim_{n \\to \\infty} u_n = 0"></span></li>
</ul>
<p>则级数收敛，且和 <span class="formula-inline" data-latex="S \\le u_1"></span>。</p>

<h4>📘 例题 3：交错级数</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots"></span> 的敛散性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="u_n = 1/n"></span> 单调递减且趋于 0。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 收敛（条件收敛）</p>
</div>

<h5>3. 绝对收敛与条件收敛</h5>

<p><strong>定义：</strong></p>
<ul>
  <li>若 <span class="formula-inline" data-latex="\\sum |u_n|"></span> 收敛，则称 <span class="formula-inline" data-latex="\\sum u_n"></span> <strong>绝对收敛</strong></li>
  <li>若 <span class="formula-inline" data-latex="\\sum u_n"></span> 收敛而 <span class="formula-inline" data-latex="\\sum |u_n|"></span> 发散，则称 <span class="formula-inline" data-latex="\\sum u_n"></span> <strong>条件收敛</strong></li>
</ul>

<p><strong>定理：</strong> 绝对收敛的级数一定收敛。</p>

<h4>📘 例题 4：绝对收敛与条件收敛</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1}}{n^2}"></span> 的收敛性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\sum |u_n| = \\sum 1/n^2"></span> 收敛（<span class="formula-inline" data-latex="p = 2 > 1"></span>）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 绝对收敛</p>
</div>

<h5>4. 审敛法总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>审敛法</th>
    <th>条件</th>
    <th>结论</th>
  </tr>
  <tr>
    <td><strong>正项级数</strong></td>
    <td>比较审敛法</td>
    <td><span class="formula-inline" data-latex="u_n \\le v_n"></span></td>
    <td>大收则小收，小发则大发</td>
  </tr>
  <tr>
    <td></td>
    <td>比值审敛法</td>
    <td><span class="formula-inline" data-latex="\\lim u_{n+1}/u_n = \\rho"></span></td>
    <td><span class="formula-inline" data-latex="\\rho < 1"></span> 收敛</td>
  </tr>
  <tr>
    <td></td>
    <td>根值审敛法</td>
    <td><span class="formula-inline" data-latex="\\lim \\sqrt[n]{u_n} = \\rho"></span></td>
    <td><span class="formula-inline" data-latex="\\rho < 1"></span> 收敛</td>
  </tr>
  <tr>
    <td><strong>交错级数</strong></td>
    <td>莱布尼茨判别法</td>
    <td>单调递减且趋于 0</td>
    <td>收敛</td>
  </tr>
  <tr>
    <td><strong>任意项级数</strong></td>
    <td>绝对收敛判别</td>
    <td><span class="formula-inline" data-latex="\\sum |u_n|"></span> 收敛</td>
    <td>绝对收敛</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 常数项级数的审敛法是级数理论的核心内容。正项级数有比较、比值、根值等多种审敛法，交错级数有莱布尼茨判别法。理解绝对收敛与条件收敛的区别，对于研究级数的性质至关重要。
  </p>
</div>
`;