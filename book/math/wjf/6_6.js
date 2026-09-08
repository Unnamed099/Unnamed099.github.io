window.SECTION_CONTENT = `
<h4>📐 高阶线性微分方程</h4>

<p>高阶线性微分方程是微分方程理论中最重要的内容之一。它的解具有优美的结构——解的叠加原理，这使得我们可以将复杂的非齐次方程转化为齐次方程和特解的求解。</p>

<h5>1. 二阶线性微分方程举例</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="y'' + P(x)y' + Q(x)y = f(x)"></div>

<p>的方程称为<strong>二阶线性微分方程</strong>。</p>

<ul>
  <li>若 <span class="formula-inline" data-latex="f(x) \\equiv 0"></span>，称为<strong>二阶齐次线性方程</strong></li>
  <li>若 <span class="formula-inline" data-latex="f(x) \\not\\equiv 0"></span>，称为<strong>二阶非齐次线性方程</strong></li>
</ul>

<div class="note">
  <strong>💡 物理背景：</strong>
  <p>• 简谐振动：<span class="formula-inline" data-latex="y'' + \\omega^2 y = 0"></span></p>
  <p>• 受迫振动：<span class="formula-inline" data-latex="y'' + 2\\beta y' + \\omega^2 y = f(x)"></span></p>
  <p>• 电路方程：<span class="formula-inline" data-latex="LC\\frac{d^2u}{dt^2} + RC\\frac{du}{dt} + u = e(t)"></span></p>
</div>

<h5>2. 线性微分方程的解的结构</h5>

<p><strong>定理 1（叠加原理）：</strong> 若 <span class="formula-inline" data-latex="y_1(x)"></span> 和 <span class="formula-inline" data-latex="y_2(x)"></span> 是齐次方程</p>

<div class="formula-block" data-latex="y'' + P(x)y' + Q(x)y = 0"></div>

<p>的两个解，则 <span class="formula-inline" data-latex="y = C_1 y_1 + C_2 y_2"></span> 也是该齐次方程的解。</p>

<p><strong>定理 2（通解结构）：</strong> 若 <span class="formula-inline" data-latex="y_1(x)"></span> 和 <span class="formula-inline" data-latex="y_2(x)"></span> 是齐次方程的两个<strong>线性无关</strong>的解，则齐次方程的通解为</p>

<div class="formula-block" data-latex="Y(x) = C_1 y_1(x) + C_2 y_2(x)"></div>

<p><strong>定理 3（非齐次方程通解结构）：</strong> 若 <span class="formula-inline" data-latex="Y(x)"></span> 是对应齐次方程的通解，<span class="formula-inline" data-latex="y^*(x)"></span> 是非齐次方程的一个特解，则非齐次方程的通解为</p>

<div class="formula-block" data-latex="y(x) = Y(x) + y^*(x) = C_1 y_1(x) + C_2 y_2(x) + y^*(x)"></div>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 齐次方程的解构成一个<strong>线性空间</strong>（解空间）</p>
  <p>• 非齐次方程的通解 = 齐次通解 + 一个特解</p>
  <p>• 线性无关的概念：<span class="formula-inline" data-latex="\\frac{y_1}{y_2} \\neq \\text{常数}"></span></p>
</div>

<h5>3. 常数变易法</h5>

<p>对于二阶非齐次线性方程，若已知对应齐次方程的两个线性无关解 <span class="formula-inline" data-latex="y_1(x)"></span> 和 <span class="formula-inline" data-latex="y_2(x)"></span>，可以用常数变易法求特解。</p>

<p><strong>步骤：</strong></p>

<ol>
  <li>设 <span class="formula-inline" data-latex="y^* = v_1(x)y_1(x) + v_2(x)y_2(x)"></span></li>
  <li>令 <span class="formula-inline" data-latex="v_1' y_1 + v_2' y_2 = 0"></span></li>
  <li>代入原方程，得 <span class="formula-inline" data-latex="v_1' y_1' + v_2' y_2' = f(x)"></span></li>
  <li>解出 <span class="formula-inline" data-latex="v_1'"></span> 和 <span class="formula-inline" data-latex="v_2'"></span>，积分得 <span class="formula-inline" data-latex="v_1"></span> 和 <span class="formula-inline" data-latex="v_2"></span></li>
</ol>

<p>对于标准形式 <span class="formula-inline" data-latex="y'' + P(x)y' + Q(x)y = f(x)"></span>，</p>

<div class="formula-block" data-latex="v_1' = -\\frac{y_2 f(x)}{W(x)}, \\quad v_2' = \\frac{y_1 f(x)}{W(x)}"></div>

<p>其中 <span class="formula-inline" data-latex="W(x) = y_1 y_2' - y_1' y_2"></span> 为<strong>朗斯基行列式</strong>。</p>

<h4>📘 例题 1：验证解的叠加原理</h4>

<div class="example">
  <p><strong>题目：</strong> 验证 <span class="formula-inline" data-latex="y_1 = e^x"></span> 和 <span class="formula-inline" data-latex="y_2 = e^{-x}"></span> 是 <span class="formula-inline" data-latex="y'' - y = 0"></span> 的解，并写出通解。</p>
  
  <p><strong>解：</strong></p>
  <p>对 <span class="formula-inline" data-latex="y_1 = e^x"></span>：<span class="formula-inline" data-latex="y_1' = e^x, y_1'' = e^x"></span>，代入得 <span class="formula-inline" data-latex="e^x - e^x = 0"></span> ✓</p>
  <p>对 <span class="formula-inline" data-latex="y_2 = e^{-x}"></span>：<span class="formula-inline" data-latex="y_2' = -e^{-x}, y_2'' = e^{-x}"></span>，代入得 <span class="formula-inline" data-latex="e^{-x} - e^{-x} = 0"></span> ✓</p>
  
  <p><span class="formula-inline" data-latex="\\frac{y_1}{y_2} = e^{2x} \\neq \\text{常数}"></span>，线性无关。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 e^x + C_2 e^{-x}"></span></p>
</div>

<h4>📘 例题 2：非齐次方程特解的求解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y'' - 3y' + 2y = e^x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一步：求齐次通解</strong></p>
  <p>特征方程：<span class="formula-inline" data-latex="r^2 - 3r + 2 = 0 \\Rightarrow r = 1, 2"></span></p>
  <p>齐次通解：<span class="formula-inline" data-latex="Y = C_1 e^x + C_2 e^{2x}"></span></p>
  
  <p><strong>第二步：设特解</strong></p>
  <p>由于 <span class="formula-inline" data-latex">e^x</span> 已经是齐次解，设 <span class="formula-inline" data-latex="y^* = A x e^x"></span></p>
  
  <p>代入原方程：<span class="formula-inline" data-latex="A e^x(2x+2) - 3A e^x(x+1) + 2A x e^x = e^x"></span></p>
  <p style="text-align: center;">化简得 <span class="formula-inline" data-latex="-A e^x = e^x \\Rightarrow A = -1"></span></p>
  
  <p>特解：<span class="formula-inline" data-latex="y^* = -x e^x"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C_1 e^x + C_2 e^{2x} - x e^x = (C_1 - x)e^x + C_2 e^{2x}"></span></p>
</div>

<h5>4. 朗斯基行列式</h5>

<p><strong>定义：</strong> 对于函数 <span class="formula-inline" data-latex="y_1(x)"></span> 和 <span class="formula-inline" data-latex="y_2(x)"></span>，其朗斯基行列式为</p>

<div class="formula-block" data-latex="W(x) = \\begin{vmatrix} y_1 & y_2 \\\\ y_1' & y_2' \\end{vmatrix} = y_1 y_2' - y_1' y_2"></div>

<p><strong>性质：</strong></p>
<ul>
  <li>若 <span class="formula-inline" data-latex="W(x_0) \\neq 0"></span>，则 <span class="formula-inline" data-latex="y_1"></span> 和 <span class="formula-inline" data-latex="y_2"></span> 线性无关</li>
  <li>若 <span class="formula-inline" data-latex="y_1, y_2"></span> 是齐次方程的解，则 <span class="formula-inline" data-latex="W(x) = W(x_0) e^{-\\int P(x) dx}"></span>（刘维尔公式）</li>
</ul>

<h4>📘 例题 3：朗斯基行列式的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="y_1 = x"></span> 和 <span class="formula-inline" data-latex="y_2 = x^2"></span> 是否线性无关。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="W(x) = \\begin{vmatrix} x & x^2 \\\\ 1 & 2x \\end{vmatrix} = x \\cdot 2x - 1 \\cdot x^2 = 2x^2 - x^2 = x^2"></span>
  </p>
  
  <p>当 <span class="formula-inline" data-latex="x \\neq 0"></span> 时，<span class="formula-inline" data-latex="W(x) \\neq 0"></span>，所以 <span class="formula-inline" data-latex="y_1 = x"></span> 和 <span class="formula-inline" data-latex="y_2 = x^2"></span> 线性无关。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 线性无关</p>
</div>

<h5>5. 高阶线性微分方程的结构</h5>

<p>对于 <span class="formula-inline" data-latex="n"></span> 阶线性微分方程</p>

<div class="formula-block" data-latex="y^{(n)} + P_1(x)y^{(n-1)} + \\cdots + P_{n-1}(x)y' + P_n(x)y = f(x)"></div>

<p>其解的结构与二阶完全类似：</p>

<ul>
  <li>齐次方程的通解：<span class="formula-inline" data-latex="Y = C_1 y_1 + C_2 y_2 + \\cdots + C_n y_n"></span></li>
  <li>非齐次方程的通解：<span class="formula-inline" data-latex="y = Y + y^*"></span></li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 高阶线性微分方程的解的结构是微分方程理论的核心。叠加原理和通解结构定理为我们提供了求解线性微分方程的完整框架。在实际应用中，先求齐次通解，再找非齐次特解，是求解线性微分方程的标准方法。
  </p>
</div>
`;