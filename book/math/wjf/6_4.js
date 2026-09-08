window.SECTION_CONTENT = `
<h4>📐 一阶线性微分方程</h4>

<p>一阶线性微分方程是微分方程中应用最广泛的一类。它的标准形式简单，有统一的求解公式——常数变易法。</p>

<h5>1. 一阶线性微分方程的定义</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} + P(x)y = Q(x)"></div>

<p>的微分方程称为<strong>一阶线性微分方程</strong>。</p>

<ul>
  <li>若 <span class="formula-inline" data-latex="Q(x) \\equiv 0"></span>，称为<strong>一阶齐次线性方程</strong></li>
  <li>若 <span class="formula-inline" data-latex="Q(x) \\not\\equiv 0"></span>，称为<strong>一阶非齐次线性方程</strong></li>
</ul>

<h5>2. 齐次线性方程的解法</h5>

<p>对于 <span class="formula-inline" data-latex="\\frac{dy}{dx} + P(x)y = 0"></span>，这是可分离变量方程：</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{y} = -P(x) dx"></span>
</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln|y| = -\\int P(x) dx + C_1"></span>
</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = C e^{-\\int P(x) dx}"></span>
</p>

<p>记 <span class="formula-inline" data-latex="Y(x) = e^{-\\int P(x) dx}"></span>，则齐次方程的通解为</p>

<div class="formula-block" data-latex="y = C Y(x)"></div>

<h5>3. 非齐次线性方程的解法——常数变易法</h5>

<p><strong>步骤：</strong></p>

<ol>
  <li>先求对应齐次方程的通解：<span class="formula-inline" data-latex="y = C Y(x)"></span></li>
  <li>令 <span class="formula-inline" data-latex="C = C(x)"></span>，即设 <span class="formula-inline" data-latex="y = C(x) Y(x)"></span></li>
  <li>代入原方程，求出 <span class="formula-inline" data-latex="C'(x)"></span></li>
  <li>积分得到 <span class="formula-inline" data-latex="C(x)"></span></li>
  <li>写出通解</li>
</ol>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 常数变易法的本质是"将齐次方程通解中的常数变为函数"</p>
  <p>• 最终公式：<span class="formula-inline" data-latex="y = e^{-\\int P(x) dx} \\left( \\int Q(x) e^{\\int P(x) dx} dx + C \\right)"></span></p>
  <p>• 此公式直接使用即可，但理解推导过程更重要</p>
</div>

<h4>📘 例题 1：齐次线性方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} + 2xy = 0"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>分离变量：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{y} = -2x dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln|y| = -x^2 + C_1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C e^{-x^2}"></span></p>
</div>

<h4>📘 例题 2：非齐次线性方程（常数变易法）</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} + 2xy = 2x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>方法一：公式法</strong></p>
  <p><span class="formula-inline" data-latex="P(x) = 2x"></span>，<span class="formula-inline" data-latex="Q(x) = 2x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = e^{-\\int 2x dx} \\left( \\int 2x e^{\\int 2x dx} dx + C \\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= e^{-x^2} \\left( \\int 2x e^{x^2} dx + C \\right) = e^{-x^2}(e^{x^2} + C)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = 1 + C e^{-x^2}"></span></p>
  
  <p><strong>方法二：常数变易法</strong></p>
  <p>对应齐次方程通解：<span class="formula-inline" data-latex="y = C e^{-x^2}"></span></p>
  <p>令 <span class="formula-inline" data-latex="y = C(x) e^{-x^2}"></span>，代入原方程可得 <span class="formula-inline" data-latex="C'(x) = 2x e^{x^2}"></span>，积分得 <span class="formula-inline" data-latex="C(x) = e^{x^2} + C"></span></p>
</div>

<h4>📘 例题 3：标准形式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} - y = e^{2x}"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="P(x) = -1"></span>，<span class="formula-inline" data-latex="Q(x) = e^{2x}"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = e^{-\\int (-1) dx} \\left( \\int e^{2x} e^{\\int (-1) dx} dx + C \\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= e^{x} \\left( \\int e^{2x} e^{-x} dx + C \\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= e^{x} \\left( \\int e^x dx + C \\right) = e^{x}(e^x + C)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = e^{2x} + C e^x"></span></p>
</div>

<h4>📘 例题 4：含初值条件</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} + \\frac{1}{x}y = x"></span> 满足 <span class="formula-inline" data-latex="y(1) = 2"></span> 的特解。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="P(x) = 1/x"></span>，<span class="formula-inline" data-latex="Q(x) = x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = e^{-\\int 1/x dx} \\left( \\int x e^{\\int 1/x dx} dx + C \\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{x} \\left( \\int x^2 dx + C \\right) = \\frac{1}{x} \\left( \\frac{x^3}{3} + C \\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{x^2}{3} + \\frac{C}{x}"></span>
  </p>
  
  <p>代入 <span class="formula-inline" data-latex="y(1) = 2"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2 = \\frac{1}{3} + C \\Rightarrow C = \\frac{5}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>特解：</strong> <span class="formula-inline" data-latex="y = \\frac{x^2}{3} + \\frac{5}{3x}"></span></p>
</div>

<h5>4. 伯努利方程</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} + P(x)y = Q(x)y^n \\quad (n \\neq 0, 1)"></div>

<p>的方程称为<strong>伯努利方程</strong>。</p>

<p><strong>解法：</strong> 令 <span class="formula-inline" data-latex="z = y^{1-n}"></span>，将方程化为一阶线性微分方程。</p>

<h4>📘 例题 5：伯努利方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} + \\frac{1}{x}y = x^2 y^3"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>这是伯努利方程，<span class="formula-inline" data-latex="n = 3"></span>。</p>
  <p>令 <span class="formula-inline" data-latex="z = y^{1-3} = y^{-2}"></span>，则 <span class="formula-inline" data-latex="\\frac{dz}{dx} = -2y^{-3}\\frac{dy}{dx}"></span></p>
  
  <p>原方程两边乘以 <span class="formula-inline" data-latex="-2y^{-3}"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="-2y^{-3}\\frac{dy}{dx} - \\frac{2}{x}y^{-2} = -2x^2"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dz}{dx} - \\frac{2}{x}z = -2x^2"></span>
  </p>
  
  <p>这是一阶线性方程，用公式法解得：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="z = x^2 \\left( -2\\int \\frac{1}{x^2} \\cdot x^2 dx + C \\right) = x^2(-2\\int 1 dx + C) = x^2(-2x + C)"></span>
  </p>
  
  <p>代回 <span class="formula-inline" data-latex="z = y^{-2}"></span>：</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y^{-2} = x^2(C - 2x)"></span></p>
</div>

<h5>5. 一阶线性微分方程总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>标准形式</th>
    <th>解法</th>
  </tr>
  <tr>
    <td><strong>齐次线性</strong></td>
    <td><span class="formula-inline" data-latex="y' + P(x)y = 0"></span></td>
    <td>分离变量</td>
  </tr>
  <tr>
    <td><strong>非齐次线性</strong></td>
    <td><span class="formula-inline" data-latex="y' + P(x)y = Q(x)"></span></td>
    <td>常数变易法 / 公式法</td>
  </tr>
  <tr>
    <td><strong>伯努利方程</strong></td>
    <td><span class="formula-inline" data-latex="y' + P(x)y = Q(x)y^n"></span></td>
    <td>令 <span class="formula-inline" data-latex="z = y^{1-n}"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 一阶线性微分方程是微分方程理论中最重要的基础内容之一。常数变易法不仅适用于一阶方程，也是求解高阶线性微分方程的基本方法。伯努利方程则展示了一类非线性方程如何通过变量代换化为线性方程求解。
  </p>
</div>
`;