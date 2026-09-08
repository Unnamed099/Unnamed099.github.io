window.SECTION_CONTENT = `
<h4>📐 常系数齐次线性微分方程</h4>

<p>常系数齐次线性微分方程是微分方程中理论最完整、应用最广泛的一类。其解法将微分方程转化为代数方程——特征方程，使求解变得非常简单。</p>

<h5>1. 二阶常系数齐次线性微分方程</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="y'' + p y' + q y = 0"></div>

<p>的方程称为<strong>二阶常系数齐次线性微分方程</strong>，其中 <span class="formula-inline" data-latex="p, q"></span> 为常数。</p>

<p><strong>解法思路：</strong> 猜想解的形式为 <span class="formula-inline" data-latex="y = e^{rx}"></span>，代入方程得</p>

<div class="formula-block" data-latex="(r^2 + pr + q)e^{rx} = 0"></div>

<p>由于 <span class="formula-inline" data-latex="e^{rx} \\neq 0"></span>，所以有</p>

<div class="formula-block" data-latex="r^2 + pr + q = 0"></div>

<p>这就是<strong>特征方程</strong>。</p>

<h5>2. 特征方程的三种情况</h5>

<table>
  <tr>
    <th>判别式</th>
    <th>特征根</th>
    <th>通解形式</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta = p^2 - 4q > 0"></span></td>
    <td><span class="formula-inline" data-latex="r_1 \\neq r_2"></span>（两个不等实根）</td>
    <td><span class="formula-inline" data-latex="y = C_1 e^{r_1 x} + C_2 e^{r_2 x}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta = 0"></span></td>
    <td><span class="formula-inline" data-latex="r_1 = r_2 = r"></span>（二重实根）</td>
    <td><span class="formula-inline" data-latex="y = (C_1 + C_2 x) e^{r x}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta < 0"></span></td>
    <td><span class="formula-inline" data-latex="r = \\alpha \\pm i\\beta"></span>（共轭复根）</td>
    <td><span class="formula-inline" data-latex="y = e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)"></span></td>
  </tr>
</table>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 将微分方程转化为<strong>代数方程</strong>求解</p>
  <p>• 不同根的类型对应不同的解的形式</p>
  <p>• 这是常系数线性微分方程的统一解法</p>
</div>

<h4>📘 例题 1：两个不等实根</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' - 3y' + 2y = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 3r + 2 = 0"></span></p>
  <p><span class="formula-inline" data-latex="(r-1)(r-2) = 0 \\Rightarrow r_1 = 1, r_2 = 2"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 e^x + C_2 e^{2x}"></span></p>
</div>

<h4>📘 例题 2：二重实根</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' - 4y' + 4y = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 4r + 4 = 0"></span></p>
  <p><span class="formula-inline" data-latex="(r-2)^2 = 0 \\Rightarrow r = 2"></span>（二重根）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = (C_1 + C_2 x) e^{2x}"></span></p>
</div>

<h4>📘 例题 3：共轭复根</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' + 2y' + 5y = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 + 2r + 5 = 0"></span></p>
  <p><span class="formula-inline" data-latex="r = -1 \\pm 2i"></span></p>
  <p><span class="formula-inline" data-latex="\\alpha = -1, \\beta = 2"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = e^{-x}(C_1 \\cos 2x + C_2 \\sin 2x)"></span></p>
</div>

<h5>3. <span class="formula-inline" data-latex="n"></span> 阶常系数齐次线性微分方程</h5>

<p>对于 <span class="formula-inline" data-latex="n"></span> 阶方程</p>

<div class="formula-block" data-latex="y^{(n)} + a_1 y^{(n-1)} + \\cdots + a_{n-1} y' + a_n y = 0"></div>

<p>其特征方程为</p>

<div class="formula-block" data-latex="r^n + a_1 r^{n-1} + \\cdots + a_{n-1} r + a_n = 0"></div>

<p>根据特征根的情况写出通解：</p>

<ul>
  <li>单实根 <span class="formula-inline" data-latex="r"></span>：对应 <span class="formula-inline" data-latex="C e^{rx}"></span></li>
  <li><span class="formula-inline" data-latex="k"></span> 重实根 <span class="formula-inline" data-latex="r"></span>：对应 <span class="formula-inline" data-latex="(C_1 + C_2 x + \\cdots + C_k x^{k-1}) e^{rx}"></span></li>
  <li>单对共轭复根 <span class="formula-inline" data-latex="\\alpha \\pm i\\beta"></span>：对应 <span class="formula-inline" data-latex="e^{\\alpha x}(C_1 \\cos\\beta x + C_2 \\sin\\beta x)"></span></li>
  <li><span class="formula-inline" data-latex="k"></span> 重共轭复根：对应 <span class="formula-inline" data-latex="e^{\\alpha x}[(C_1 + C_2 x + \\cdots) \\cos\\beta x + (D_1 + D_2 x + \\cdots) \\sin\\beta x]"></span></li>
</ul>

<h4>📘 例题 4：三阶常系数齐次方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y''' - 3y'' + 3y' - y = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^3 - 3r^2 + 3r - 1 = 0"></span></p>
  <p><span class="formula-inline" data-latex="(r-1)^3 = 0 \\Rightarrow r = 1"></span>（三重根）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = (C_1 + C_2 x + C_3 x^2) e^x"></span></p>
</div>

<h4>📘 例题 5：四阶常系数齐次方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y^{(4)} + 2y'' + y = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^4 + 2r^2 + 1 = 0"></span></p>
  <p><span class="formula-inline" data-latex="(r^2 + 1)^2 = 0 \\Rightarrow r = \\pm i"></span>（二重共轭复根）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = (C_1 + C_2 x)\\cos x + (C_3 + C_4 x)\\sin x"></span></p>
</div>

<h5>4. 欧拉方程</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="x^n y^{(n)} + a_1 x^{n-1} y^{(n-1)} + \\cdots + a_{n-1} x y' + a_n y = 0"></div>

<p>的方程称为<strong>欧拉方程</strong>。</p>

<p><strong>解法：</strong> 令 <span class="formula-inline" data-latex="x = e^t"></span>（或 <span class="formula-inline" data-latex="t = \\ln x"></span>），将欧拉方程化为常系数线性微分方程。</p>

<h4>📘 例题 6：欧拉方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="x^2 y'' + 2x y' - 2y = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="x = e^t"></span>，则 <span class="formula-inline" data-latex="t = \\ln x"></span></p>
  <p><span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{1}{x}\\frac{dy}{dt}, \\quad \\frac{d^2 y}{dx^2} = \\frac{1}{x^2}\\left(\\frac{d^2 y}{dt^2} - \\frac{dy}{dt}\\right)"></span></p>
  
  <p>代入得：<span class="formula-inline" data-latex="\\frac{d^2 y}{dt^2} + \\frac{dy}{dt} - 2y = 0"></span></p>
  
  <p>特征方程：<span class="formula-inline" data-latex="r^2 + r - 2 = 0 \\Rightarrow r = 1, -2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = C_1 e^t + C_2 e^{-2t} = C_1 x + C_2 x^{-2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 x + \\frac{C_2}{x^2}"></span></p>
</div>

<h5>5. 常系数齐次方程求解步骤总结</h5>

<ol>
  <li>写出特征方程（将 <span class="formula-inline" data-latex="y^{(k)}"></span> 替换为 <span class="formula-inline" data-latex="r^k"></span>）</li>
  <li>解特征方程，求出所有特征根（实根和复根）</li>
  <li>根据特征根类型写出对应的通解项</li>
  <li>将所有项相加，得到通解</li>
</ol>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 常系数齐次线性微分方程的求解是微分方程理论中最完美的部分之一。通过特征方程将微分问题转化为代数问题，极大地简化了求解过程。这种方法在振动分析、电路理论、控制论等领域有着广泛的应用。
  </p>
</div>
`;