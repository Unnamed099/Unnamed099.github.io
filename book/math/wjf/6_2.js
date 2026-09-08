window.SECTION_CONTENT = `
<h4>📐 可分离变量的微分方程</h4>

<p>可分离变量的微分方程是一阶微分方程中最基本、最简单的一类。它的特点是：通过代数变形，可以将变量 <span class="formula-inline" data-latex="x"></span> 和 <span class="formula-inline" data-latex="y"></span> 分别放在方程的两边，然后直接积分求解。</p>

<h5>1. 定义与解法</h5>

<p><strong>定义：</strong> 形如</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} = f(x)g(y)"></div>

<p>的微分方程称为<strong>可分离变量的微分方程</strong>。</p>

<p><strong>解法步骤：</strong></p>

<ol>
  <li><strong>分离变量：</strong> 将方程化为 <span class="formula-inline" data-latex="\\frac{dy}{g(y)} = f(x) dx"></span>（假设 <span class="formula-inline" data-latex="g(y) \\neq 0"></span>）</li>
  <li><strong>两边积分：</strong> <span class="formula-inline" data-latex="\\int \\frac{dy}{g(y)} = \\int f(x) dx"></span></li>
  <li><strong>整理通解：</strong> 得到隐式通解，必要时解出 <span class="formula-inline" data-latex="y = \\varphi(x)"></span></li>
  <li><strong>考虑特殊情况：</strong> 若 <span class="formula-inline" data-latex="g(y) = 0"></span>，则 <span class="formula-inline" data-latex="y = y_0"></span> 可能也是解</li>
</ol>

<div class="note">
  <strong>💡 关键理解：</strong>
  <p>• 分离变量的本质是"各自积分"</p>
  <p>• 注意积分常数 <span class="formula-inline" data-latex="C"></span> 的写法</p>
  <p>• 检查是否有漏解（<span class="formula-inline" data-latex="g(y)=0"></span> 的情况）</p>
</div>

<h4>📘 例题 1：基本分离变量</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = 2xy"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>分离变量：<span class="formula-inline" data-latex="\\frac{dy}{y} = 2x dx"></span></p>
  
  <p>两边积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dy}{y} = \\int 2x dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln|y| = x^2 + C"></span>
  </p>
  
  <p>去掉绝对值：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = \\pm e^{x^2+C} = C e^{x^2}"></span>
  </p>
  
  <p>（将 <span class="formula-inline" data-latex="\\pm e^C"></span> 记为新的常数 <span class="formula-inline" data-latex="C"></span>）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = C e^{x^2}"></span></p>
</div>

<h4>📘 例题 2：含有初值的分离变量</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\frac{x}{y}"></span> 满足 <span class="formula-inline" data-latex="y(1) = 2"></span> 的特解。</p>
  
  <p><strong>解：</strong></p>
  <p>分离变量：<span class="formula-inline" data-latex="y dy = x dx"></span></p>
  
  <p>两边积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int y dy = \\int x dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{y^2}{2} = \\frac{x^2}{2} + C \\Rightarrow y^2 - x^2 = C"></span>
  </p>
  
  <p>代入初始条件 <span class="formula-inline" data-latex="y(1) = 2"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="4 - 1 = C \\Rightarrow C = 3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>特解：</strong> <span class="formula-inline" data-latex="y^2 - x^2 = 3"></span></p>
</div>

<h4>📘 例题 3：需要额外处理漏解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = y^2"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>分离变量：<span class="formula-inline" data-latex="\\frac{dy}{y^2} = dx"></span>（假设 <span class="formula-inline" data-latex="y \\neq 0"></span>）</p>
  
  <p>两边积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dy}{y^2} = \\int dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="-\\frac{1}{y} = x + C \\Rightarrow y = -\\frac{1}{x + C}"></span>
  </p>
  
  <p>检查漏解：当 <span class="formula-inline" data-latex="y = 0"></span> 时，代入原方程得 <span class="formula-inline" data-latex="0 = 0"></span>，也是解。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = -\\frac{1}{x + C}"></span> 和 <span class="formula-inline" data-latex="y = 0"></span></p>
</div>

<h4>📘 例题 4：实际应用——人口增长模型</h4>

<div class="example">
  <p><strong>题目：</strong> 某地区人口增长速率与当前人口成正比，已知 <span class="formula-inline" data-latex="t=0"></span> 时人口为 <span class="formula-inline" data-latex="P_0"></span>，求人口函数 <span class="formula-inline" data-latex="P(t)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>数学模型：<span class="formula-inline" data-latex="\\frac{dP}{dt} = kP"></span>（<span class="formula-inline" data-latex="k"></span> 为增长率常数）</p>
  
  <p>分离变量：<span class="formula-inline" data-latex="\\frac{dP}{P} = k dt"></span></p>
  
  <p>积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln P = kt + C \\Rightarrow P = C e^{kt}"></span>
  </p>
  
  <p>代入 <span class="formula-inline" data-latex="P(0) = P_0"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P_0 = C e^0 = C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>解：</strong> <span class="formula-inline" data-latex="P(t) = P_0 e^{kt}"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 这就是著名的<strong>马尔萨斯人口模型</strong>，即指数增长模型。</p>
  </div>
</div>

<h4>📘 例题 5：现实应用——冷却定律</h4>

<div class="example">
  <p><strong>题目：</strong> 牛顿冷却定律：物体温度变化率与物体和周围环境的温差成正比。设室温为 <span class="formula-inline" data-latex="T_0"></span>，物体初始温度为 <span class="formula-inline" data-latex="T_1"></span>，求温度函数 <span class="formula-inline" data-latex="T(t)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>数学模型：<span class="formula-inline" data-latex="\\frac{dT}{dt} = -k(T - T_0)"></span>（<span class="formula-inline" data-latex="k > 0"></span>）</p>
  
  <p>分离变量：<span class="formula-inline" data-latex="\\frac{dT}{T - T_0} = -k dt"></span></p>
  
  <p>积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln|T - T_0| = -kt + C \\Rightarrow T = T_0 + C e^{-kt}"></span>
  </p>
  
  <p>代入 <span class="formula-inline" data-latex="T(0) = T_1"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="T_1 = T_0 + C \\Rightarrow C = T_1 - T_0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>解：</strong> <span class="formula-inline" data-latex="T(t) = T_0 + (T_1 - T_0)e^{-kt}"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 当 <span class="formula-inline" data-latex="t \\to +\\infty"></span> 时，<span class="formula-inline" data-latex="T(t) \\to T_0"></span>，物体温度趋近于室温。</p>
  </div>
</div>

<h5>2. 可分离变量方程的应用场景</h5>

<table>
  <tr>
    <th>应用</th>
    <th>微分方程模型</th>
    <th>解的形式</th>
  </tr>
  <tr>
    <td><strong>人口增长</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{dP}{dt} = kP"></span></td>
    <td><span class="formula-inline" data-latex="P = P_0 e^{kt}"></span></td>
  </tr>
  <tr>
    <td><strong>冷却定律</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{dT}{dt} = -k(T - T_0)"></span></td>
    <td><span class="formula-inline" data-latex="T = T_0 + (T_1 - T_0)e^{-kt}"></span></td>
  </tr>
  <tr>
    <td><strong>衰变问题</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{dN}{dt} = -\\lambda N"></span></td>
    <td><span class="formula-inline" data-latex="N = N_0 e^{-\\lambda t}"></span></td>
  </tr>
  <tr>
    <td><strong>逻辑斯蒂增长</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{dP}{dt} = rP\\left(1 - \\frac{P}{K}\\right)"></span></td>
    <td><span class="formula-inline" data-latex="P = \\frac{K}{1 + Ce^{-rt}}"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 可分离变量的微分方程是最基础也是最重要的一类一阶微分方程。它虽然形式简单，但在人口增长、物理冷却、放射性衰变、化学反应等实际问题中有广泛应用。掌握分离变量法是学习更复杂微分方程的基础。
  </p>
</div>
`;