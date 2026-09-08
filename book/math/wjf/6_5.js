window.SECTION_CONTENT = `
<h4>📐 可降阶的高阶微分方程</h4>

<p>高阶微分方程一般较难直接求解。但对于某些特殊类型，可以通过变量代换将其降为一阶方程，从而利用前面学过的方法求解。本节介绍三类可降阶的微分方程。</p>

<h5>1. <span class="formula-inline" data-latex="y^{(n)} = f(x)"></span> 型</h5>

<p>这是最简单的一类高阶方程，直接逐次积分即可。</p>

<p><strong>解法：</strong> 对 <span class="formula-inline" data-latex="y^{(n)} = f(x)"></span> 连续积分 <span class="formula-inline" data-latex="n"></span> 次。</p>

<div class="formula-block" data-latex="y^{(n-1)} = \\int f(x) dx + C_1"></div>
<div class="formula-block" data-latex="y^{(n-2)} = \\int \\left( \\int f(x) dx \\right) dx + C_1 x + C_2"></div>
<p style="text-align:center;">⋯⋯</p>
<div class="formula-block" data-latex="y = \\int \\cdots \\int f(x) dx \\cdots dx + \\frac{C_1}{(n-1)!}x^{n-1} + \\cdots + C_n"></div>

<div class="note">
  <strong>💡 注意：</strong>
  <p>• 每积分一次增加一个任意常数</p>
  <p>• <span class="formula-inline" data-latex="n"></span> 阶方程的通解包含 <span class="formula-inline" data-latex="n"></span> 个任意常数</p>
  <p>• 若给出初始条件，可确定这些常数</p>
</div>

<h4>📘 例题 1：<span class="formula-inline" data-latex="y'' = f(x)"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' = 6x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>第一次积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y' = \\int 6x dx = 3x^2 + C_1"></span>
  </p>
  
  <p>第二次积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = \\int (3x^2 + C_1) dx = x^3 + C_1 x + C_2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = x^3 + C_1 x + C_2"></span></p>
</div>

<h4>📘 例题 2：含初值条件</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y''' = e^x"></span> 满足 <span class="formula-inline" data-latex="y(0) = 1, y'(0) = 0, y''(0) = 0"></span> 的特解。</p>
  
  <p><strong>解：</strong></p>
  <p>第一次积分：<span class="formula-inline" data-latex="y'' = e^x + C_1"></span></p>
  <p>代入 <span class="formula-inline" data-latex="y''(0) = 0"></span>：<span class="formula-inline" data-latex="0 = 1 + C_1 \\Rightarrow C_1 = -1"></span></p>
  
  <p>第二次积分：<span class="formula-inline" data-latex="y' = e^x - x + C_2"></span></p>
  <p>代入 <span class="formula-inline" data-latex="y'(0) = 0"></span>：<span class="formula-inline" data-latex="0 = 1 + C_2 \\Rightarrow C_2 = -1"></span></p>
  
  <p>第三次积分：<span class="formula-inline" data-latex="y = e^x - \\frac{x^2}{2} - x + C_3"></span></p>
  <p>代入 <span class="formula-inline" data-latex="y(0) = 1"></span>：<span class="formula-inline" data-latex="1 = 1 + C_3 \\Rightarrow C_3 = 0"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>特解：</strong> <span class="formula-inline" data-latex="y = e^x - \\frac{x^2}{2} - x"></span></p>
</div>

<h5>2. <span class="formula-inline" data-latex="y'' = f(x, y')"></span> 型（不显含 <span class="formula-inline" data-latex="y"></span>）</h5>

<p>这类方程的特点是方程中不显含未知函数 <span class="formula-inline" data-latex="y"></span>，只含 <span class="formula-inline" data-latex="x"></span> 和 <span class="formula-inline" data-latex="y'"></span>。</p>

<p><strong>解法：</strong> 令 <span class="formula-inline" data-latex="p = y'"></span>，则 <span class="formula-inline" data-latex="y'' = p'"></span>，方程化为</p>

<div class="formula-block" data-latex="p' = f(x, p)"></div>

<p>这是一阶微分方程，求出 <span class="formula-inline" data-latex="p = \\varphi(x, C_1)"></span> 后，再积分得</p>

<div class="formula-block" data-latex="y = \\int \\varphi(x, C_1) dx + C_2"></div>

<h4>📘 例题 3：<span class="formula-inline" data-latex="y'' = f(x, y')"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' = 2x y'"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="p = y'"></span>，则 <span class="formula-inline" data-latex="y'' = p' = 2x p"></span></p>
  
  <p>这是可分离变量方程：<span class="formula-inline" data-latex="\\frac{dp}{p} = 2x dx"></span></p>
  
  <p>积分：<span class="formula-inline" data-latex="\\ln|p| = x^2 + C_1 \\Rightarrow p = C_1 e^{x^2}"></span></p>
  
  <p>代回 <span class="formula-inline" data-latex="p = y'"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y' = C_1 e^{x^2}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = C_1 \\int e^{x^2} dx + C_2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 \\int e^{x^2} dx + C_2"></span></p>
</div>

<h4>📘 例题 4：非齐次型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' = 2x + \\sin x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="p = y'"></span>，则 <span class="formula-inline" data-latex="p' = 2x + \\sin x"></span></p>
  
  <p>积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="p = \\int (2x + \\sin x) dx = x^2 - \\cos x + C_1"></span>
  </p>
  
  <p>代回：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y' = x^2 - \\cos x + C_1"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = \\frac{x^3}{3} - \\sin x + C_1 x + C_2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = \\frac{x^3}{3} - \\sin x + C_1 x + C_2"></span></p>
</div>

<h5>3. <span class="formula-inline" data-latex="y'' = f(y, y')"></span> 型（不显含 <span class="formula-inline" data-latex="x"></span>）</h5>

<p>这类方程的特点是方程中不显含自变量 <span class="formula-inline" data-latex="x"></span>，只含 <span class="formula-inline" data-latex="y"></span> 和 <span class="formula-inline" data-latex="y'"></span>。</p>

<p><strong>解法：</strong> 令 <span class="formula-inline" data-latex="p = y'"></span>，并把 <span class="formula-inline" data-latex="p"></span> 看成 <span class="formula-inline" data-latex="y"></span> 的函数，则</p>

<div class="formula-block" data-latex="y'' = \\frac{dp}{dx} = \\frac{dp}{dy} \\cdot \\frac{dy}{dx} = p \\frac{dp}{dy}"></div>

<p>方程化为</p>

<div class="formula-block" data-latex="p \\frac{dp}{dy} = f(y, p)"></div>

<p>这是一阶微分方程，求出 <span class="formula-inline" data-latex="p = \\varphi(y, C_1)"></span> 后，由 <span class="formula-inline" data-latex">dy/dx = p</span> 积分得</p>

<div class="formula-block" data-latex="\\int \\frac{dy}{\\varphi(y, C_1)} = x + C_2"></div>

<h4>📘 例题 5：<span class="formula-inline" data-latex="y'' = f(y, y')"></span> 型</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y y'' = (y')^2"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="p = y'"></span>，则 <span class="formula-inline" data-latex="y'' = p\\frac{dp}{dy}"></span></p>
  
  <p>代入：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y \\cdot p\\frac{dp}{dy} = p^2"></span>
  </p>
  
  <p>若 <span class="formula-inline" data-latex="p \\neq 0"></span>，除以 <span class="formula-inline" data-latex="p"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y \\frac{dp}{dy} = p"></span>
  </p>
  
  <p>分离变量：<span class="formula-inline" data-latex="\\frac{dp}{p} = \\frac{dy}{y}"></span></p>
  
  <p>积分：<span class="formula-inline" data-latex="\\ln|p| = \\ln|y| + C_1 \\Rightarrow p = C_1 y"></span></p>
  
  <p>代回 <span class="formula-inline" data-latex="p = dy/dx"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = C_1 y \\Rightarrow \\frac{dy}{y} = C_1 dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln|y| = C_1 x + C_2 \\Rightarrow y = C_2 e^{C_1 x}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_2 e^{C_1 x}"></span></p>
</div>

<h4>📘 例题 6：物理应用——自由落体</h4>

<div class="example">
  <p><strong>题目：</strong> 物体从高度 <span class="formula-inline" data-latex="H"></span> 处自由下落，忽略空气阻力，求运动方程 <span class="formula-inline" data-latex="s(t)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>物理模型：<span class="formula-inline" data-latex="\\frac{d^2 s}{dt^2} = g"></span>（重力加速度）</p>
  
  <p>积分一次：<span class="formula-inline" data-latex="\\frac{ds}{dt} = gt + C_1"></span></p>
  <p>初始条件 <span class="formula-inline" data-latex="v(0) = 0"></span>，得 <span class="formula-inline" data-latex="C_1 = 0"></span></p>
  
  <p>积分二次：<span class="formula-inline" data-latex="s = \\frac{1}{2}gt^2 + C_2"></span></p>
  <p>初始条件 <span class="formula-inline" data-latex="s(0) = H"></span>，得 <span class="formula-inline" data-latex="C_2 = H"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>运动方程：</strong> <span class="formula-inline" data-latex="s(t) = H + \\frac{1}{2}gt^2"></span></p>
</div>

<h5>4. 可降阶方程总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>形式</th>
    <th>代换</th>
    <th>降阶后</th>
  </tr>
  <tr>
    <td><strong>型一</strong></td>
    <td><span class="formula-inline" data-latex="y^{(n)} = f(x)"></span></td>
    <td>逐次积分</td>
    <td><span class="formula-inline" data-latex">n</span> 次积分</td>
  </tr>
  <tr>
    <td><strong>型二</strong></td>
    <td><span class="formula-inline" data-latex="y'' = f(x, y')"></span></td>
    <td><span class="formula-inline" data-latex="p = y'"></span></td>
    <td><span class="formula-inline" data-latex="p' = f(x, p)"></span></td>
  </tr>
  <tr>
    <td><strong>型三</strong></td>
    <td><span class="formula-inline" data-latex="y'' = f(y, y')"></span></td>
    <td><span class="formula-inline" data-latex="p = y'"></span></td>
    <td><span class="formula-inline" data-latex="p\\frac{dp}{dy} = f(y, p)"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 可降阶的高阶微分方程是求解高阶方程的突破口。通过适当的变量代换，将高阶方程化为一阶方程，再利用前面学过的方法求解。这三种类型的降阶方法在物理、工程中有着广泛的应用。
  </p>
</div>
`;