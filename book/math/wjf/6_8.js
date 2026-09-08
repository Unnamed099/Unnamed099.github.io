window.SECTION_CONTENT = `
<h4>📐 常系数非齐次线性微分方程</h4>

<p>常系数非齐次线性微分方程的求解，是在齐次方程通解的基础上，寻找一个特解。根据自由项 <span class="formula-inline" data-latex="f(x)"></span> 的不同类型，我们有不同的特解设法。</p>

<h5>1. 非齐次方程的通解结构</h5>

<p>对于方程</p>

<div class="formula-block" data-latex="y'' + p y' + q y = f(x)"></div>

<p>其通解为</p>

<div class="formula-block" data-latex="y = Y(x) + y^*(x)"></div>

<p>其中 <span class="formula-inline" data-latex="Y(x)"></span> 是对应齐次方程的通解，<span class="formula-inline" data-latex="y^*(x)"></span> 是一个特解。</p>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 特解的形式由自由项 <span class="formula-inline" data-latex="f(x)"></span> 决定</p>
  <p>• 如果自由项是齐次方程的解，特解需要乘以 <span class="formula-inline" data-latex="x^k"></span></p>
  <p>• <span class="formula-inline" data-latex="k"></span> 是特征根与自由项指数部分重合的重数</p>
</div>

<h5>2. <span class="formula-inline" data-latex="f(x) = e^{\\lambda x} P_m(x)"></span> 型</h5>

<p>当自由项为 <span class="formula-inline" data-latex="f(x) = e^{\\lambda x} P_m(x)"></span>（<span class="formula-inline" data-latex="P_m(x)"></span> 是 <span class="formula-inline" data-latex="m"></span> 次多项式）时，设特解为</p>

<div class="formula-block" data-latex="y^* = x^k e^{\\lambda x} Q_m(x)"></div>

<p>其中 <span class="formula-inline" data-latex="Q_m(x)"></span> 是与 <span class="formula-inline" data-latex="P_m(x)"></span> 同次的多项式，<span class="formula-inline" data-latex="k"></span> 的取值：</p>

<ul>
  <li>若 <span class="formula-inline" data-latex="\\lambda"></span> 不是特征根，<span class="formula-inline" data-latex="k = 0"></span></li>
  <li>若 <span class="formula-inline" data-latex="\\lambda"></span> 是单特征根，<span class="formula-inline" data-latex="k = 1"></span></li>
  <li>若 <span class="formula-inline" data-latex="\\lambda"></span> 是二重特征根，<span class="formula-inline" data-latex="k = 2"></span></li>
</ul>

<h4>📘 例题 1：<span class="formula-inline" data-latex="f(x) = e^{2x}"></span>（<span class="formula-inline" data-latex="\\lambda"></span> 不是特征根）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' - 3y' + 2y = e^{2x}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一步：齐次通解</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 3r + 2 = 0 \\Rightarrow r = 1, 2"></span></p>
  <p><span class="formula-inline" data-latex="Y = C_1 e^x + C_2 e^{2x}"></span></p>
  
  <p><strong>第二步：设特解</strong></p>
  <p><span class="formula-inline" data-latex="\\lambda = 2"></span> 是特征根（单根），所以 <span class="formula-inline" data-latex="k = 1"></span></p>
  <p>设 <span class="formula-inline" data-latex="y^* = A x e^{2x}"></span></p>
  
  <p><strong>第三步：代入求系数</strong></p>
  <p><span class="formula-inline" data-latex="(y^*)' = A e^{2x}(1 + 2x)"></span></p>
  <p><span class="formula-inline" data-latex="(y^*)'' = A e^{2x}(4 + 4x)"></span></p>
  
  <p>代入原方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A e^{2x}[(4+4x) - 3(1+2x) + 2x] = e^{2x}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A e^{2x}[1] = e^{2x} \\Rightarrow A = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 e^x + C_2 e^{2x} + x e^{2x}"></span></p>
</div>

<h4>📘 例题 2：<span class="formula-inline" data-latex="f(x) = x^2"></span></h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' + y = x^2"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一步：齐次通解</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 + 1 = 0 \\Rightarrow r = \\pm i"></span></p>
  <p><span class="formula-inline" data-latex="Y = C_1 \\cos x + C_2 \\sin x"></span></p>
  
  <p><strong>第二步：设特解</strong></p>
  <p><span class="formula-inline" data-latex="\\lambda = 0"></span>（<span class="formula-inline" data-latex="e^{0x}"></span>），不是特征根，<span class="formula-inline" data-latex="k = 0"></span></p>
  <p>设 <span class="formula-inline" data-latex="y^* = A x^2 + B x + C"></span></p>
  
  <p><strong>第三步：代入求系数</strong></p>
  <p><span class="formula-inline" data-latex="(y^*)'' = 2A"></span></p>
  <p>代入：<span class="formula-inline" data-latex="2A + A x^2 + B x + C = x^2"></span></p>
  <p style="text-align: center;">比较系数得：<span class="formula-inline" data-latex="A = 1, B = 0, 2 + C = 0 \\Rightarrow C = -2"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 \\cos x + C_2 \\sin x + x^2 - 2"></span></p>
</div>

<h4>📘 例题 3：<span class="formula-inline" data-latex="f(x) = e^x"></span>（<span class="formula-inline" data-latex="\\lambda"></span> 是特征根）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' - 2y' + y = e^x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一步：齐次通解</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 2r + 1 = 0 \\Rightarrow r = 1"></span>（二重根）</p>
  <p><span class="formula-inline" data-latex="Y = (C_1 + C_2 x)e^x"></span></p>
  
  <p><strong>第二步：设特解</strong></p>
  <p><span class="formula-inline" data-latex="\\lambda = 1"></span> 是二重特征根，所以 <span class="formula-inline" data-latex="k = 2"></span></p>
  <p>设 <span class="formula-inline" data-latex="y^* = A x^2 e^x"></span></p>
  
  <p><strong>第三步：代入求系数</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(y^*)'' - 2(y^*)' + y^* = 2A e^x"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2A e^x = e^x \\Rightarrow A = \\frac{1}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = (C_1 + C_2 x)e^x + \\frac{1}{2}x^2 e^x"></span></p>
</div>

<h5>3. <span class="formula-inline" data-latex="f(x) = e^{\\lambda x}[P_l(x)\\cos\\omega x + Q_m(x)\\sin\\omega x]"></span> 型</h5>

<p>当自由项为 <span class="formula-inline" data-latex="e^{\\lambda x}[P_l(x)\\cos\\omega x + Q_m(x)\\sin\\omega x]"></span> 时，设特解为</p>

<div class="formula-block" data-latex="y^* = x^k e^{\\lambda x}[R_n(x)\\cos\\omega x + S_n(x)\\sin\\omega x]"></div>

<p>其中 <span class="formula-inline" data-latex="n = \\max\\{l, m\\}"></span>，<span class="formula-inline" data-latex="R_n, S_n"></span> 是 <span class="formula-inline" data-latex="n"></span> 次多项式。</p>

<p><span class="formula-inline" data-latex="k"></span> 的取值：</p>
<ul>
  <li>若 <span class="formula-inline" data-latex="\\lambda + i\\omega"></span> 不是特征根，<span class="formula-inline" data-latex="k = 0"></span></li>
  <li>若 <span class="formula-inline" data-latex="\\lambda + i\\omega"></span> 是单特征根，<span class="formula-inline" data-latex="k = 1"></span></li>
</ul>

<h4>📘 例题 4：三角函数型自由项</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' + y = \\sin x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一步：齐次通解</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 + 1 = 0 \\Rightarrow r = \\pm i"></span></p>
  <p><span class="formula-inline" data-latex="Y = C_1 \\cos x + C_2 \\sin x"></span></p>
  
  <p><strong>第二步：设特解</strong></p>
  <p><span class="formula-inline" data-latex="\\lambda = 0, \\omega = 1"></span>，<span class="formula-inline" data-latex="\\lambda + i\\omega = i"></span> 是特征根，所以 <span class="formula-inline" data-latex="k = 1"></span></p>
  <p>设 <span class="formula-inline" data-latex="y^* = x(A\\cos x + B\\sin x)"></span></p>
  
  <p><strong>第三步：代入求系数</strong></p>
  <p>计算得 <span class="formula-inline" data-latex="(y^*)'' + y^* = -2A\\sin x + 2B\\cos x"></span></p>
  <p style="text-align: center;">比较得：<span class="formula-inline" data-latex="-2A = 1, 2B = 0 \\Rightarrow A = -\\frac{1}{2}, B = 0"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 \\cos x + C_2 \\sin x - \\frac{1}{2}x\\cos x"></span></p>
</div>

<h4>📘 例题 5：指数×三角函数型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' - 2y' + 2y = e^x \\sin x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一步：齐次通解</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 2r + 2 = 0 \\Rightarrow r = 1 \\pm i"></span></p>
  <p><span class="formula-inline" data-latex="Y = e^x(C_1 \\cos x + C_2 \\sin x)"></span></p>
  
  <p><strong>第二步：设特解</strong></p>
  <p><span class="formula-inline" data-latex="\\lambda = 1, \\omega = 1"></span>，<span class="formula-inline" data-latex="\\lambda + i\\omega = 1+i"></span> 是特征根，<span class="formula-inline" data-latex="k = 1"></span></p>
  <p>设 <span class="formula-inline" data-latex="y^* = x e^x(A\\cos x + B\\sin x)"></span></p>
  
  <p><strong>第三步：代入求系数</strong></p>
  <p>代入计算得 <span class="formula-inline" data-latex="A = 0, B = -\\frac{1}{2}"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = e^x(C_1 \\cos x + C_2 \\sin x) - \\frac{1}{2}x e^x \\sin x"></span></p>
</div>

<h5>4. 特解设法总结</h5>

<table>
  <tr>
    <th>自由项 <span class="formula-inline" data-latex="f(x)"></span></th>
    <th>特解设法</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="P_m(x)"></span></td>
    <td><span class="formula-inline" data-latex="x^k Q_m(x)"></span>（<span class="formula-inline" data-latex="\\lambda = 0"></span>）</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^{\\lambda x}"></span></td>
    <td><span class="formula-inline" data-latex="x^k A e^{\\lambda x}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^{\\lambda x} P_m(x)"></span></td>
    <td><span class="formula-inline" data-latex="x^k e^{\\lambda x} Q_m(x)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\cos\\omega x"></span></td>
    <td><span class="formula-inline" data-latex="x^k (A\\cos\\omega x + B\\sin\\omega x)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^{\\lambda x}(P_l\\cos\\omega x + Q_m\\sin\\omega x)"></span></td>
    <td><span class="formula-inline" data-latex="x^k e^{\\lambda x}(R_n\\cos\\omega x + S_n\\sin\\omega x)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 常系数非齐次线性微分方程的求解是微分方程应用中最常见的任务。关键在于根据自由项的形式正确地假设特解，然后代入方程确定待定系数。这种方法在处理振动、电路、控制等工程问题中有着广泛的应用。
  </p>
</div>
`;