window.SECTION_CONTENT = `
<h4>📐 微积分基本公式</h4>

<p>微积分基本公式（牛顿-莱布尼茨公式）揭示了定积分与原函数之间的关系，是连接微分学与积分学的桥梁，也是计算定积分的有力工具。</p>

<h5>1. 变速直线运动中位置函数与速度函数之间的联系</h5>

<p>设某物体沿直线运动，其位置函数为 <span class="formula-inline" data-latex="s = s(t)"></span>，速度函数为 <span class="formula-inline" data-latex="v = v(t) = s'(t)"></span>。</p>

<p>在时间间隔 <span class="formula-inline" data-latex="[t_1, t_2]"></span> 内，物体经过的路程为</p>

<div class="formula-block" data-latex="s(t_2) - s(t_1) = \\int_{t_1}^{t_2} v(t) dt"></div>

<p>即：<strong>位置函数的增量等于速度函数在对应区间上的定积分</strong>。</p>

<p>这就是微积分基本公式的物理原型：<span class="formula-inline" data-latex="\\int_{t_1}^{t_2} s'(t) dt = s(t_2) - s(t_1)"></span>。</p>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>• 定积分可以理解为"变化量的累积"</p>
  <p>• 速度函数在时间区间上的积分 = 位移的变化量</p>
  <p>• 这个思想可以推广到任意函数：<span class="formula-inline" data-latex="\\int_a^b f(x) dx = F(b) - F(a)"></span></p>
</div>

<h5>2. 积分上限的函数及其导数</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，对于任意 <span class="formula-inline" data-latex="x \\in [a, b]"></span>，定义</p>

<div class="formula-block" data-latex="\\Phi(x) = \\int_a^x f(t) dt"></div>

<p>称 <span class="formula-inline" data-latex="\\Phi(x)"></span> 为<strong>积分上限函数</strong>（或变上限积分）。</p>

<p><strong>定理（微积分基本定理第一部分）：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，则积分上限函数 <span class="formula-inline" data-latex="\\Phi(x) = \\int_a^x f(t) dt"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上可导，且</p>

<div class="formula-block" data-latex="\\Phi'(x) = \\frac{d}{dx} \\int_a^x f(t) dt = f(x)"></div>

<p>即：<strong>积分上限函数的导数等于被积函数在积分上限处的值</strong>。</p>

<div class="note">
  <strong>💡 几何意义：</strong>
  <p>积分上限函数 <span class="formula-inline" data-latex="\\Phi(x)"></span> 表示从 <span class="formula-inline" data-latex="a"></span> 到 <span class="formula-inline" data-latex="x"></span> 的曲边梯形面积。其变化率（导数）正好等于曲线在 <span class="formula-inline" data-latex="x"></span> 处的高度 <span class="formula-inline" data-latex="f(x)"></span>。</p>
</div>

<h5>3. 牛顿-莱布尼茨公式</h5>

<p><strong>定理（微积分基本定理第二部分）：</strong> 若 <span class="formula-inline" data-latex="F(x)"></span> 是 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上的一个原函数，则</p>

<div class="formula-block" data-latex="\\int_a^b f(x) dx = F(b) - F(a)"></div>

<p>这就是著名的<strong>牛顿-莱布尼茨公式</strong>，通常记作</p>

<div class="formula-block" data-latex="\\int_a^b f(x) dx = [F(x)]_a^b = F(b) - F(a)"></div>

<h4>📘 例题 1：利用牛顿-莱布尼茨公式计算定积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_1^2 x^2 dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x) = x^2"></span> 的一个原函数为 <span class="formula-inline" data-latex="F(x) = \\frac{x^3}{3}"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_1^2 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_1^2 = \\frac{8}{3} - \\frac{1}{3} = \\frac{7}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{7}{3}"></span></p>
</div>

<h4>📘 例题 2：计算定积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^{\\pi} \\sin x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x) = \\sin x"></span> 的一个原函数为 <span class="formula-inline" data-latex="F(x) = -\\cos x"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^{\\pi} \\sin x dx = [-\\cos x]_0^{\\pi} = -\\cos\\pi + \\cos 0 = 1 + 1 = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2"></span></p>
</div>

<h4>📘 例题 3：计算带绝对值的定积分</h4>

<div class="example">
  <p><strong>题目：</strong> 计算 <span class="formula-inline" data-latex="\\int_0^2 |x-1| dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>去掉绝对值，分段处理：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|x-1| = \\begin{cases} 1-x, & 0 \\le x \\le 1 \\\\ x-1, & 1 < x \\le 2 \\end{cases}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^2 |x-1| dx = \\int_0^1 (1-x) dx + \\int_1^2 (x-1) dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\left[ x - \\frac{x^2}{2} \\right]_0^1 + \\left[ \\frac{x^2}{2} - x \\right]_1^2"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2} + \\frac{1}{2} = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h4>📘 例题 4：变上限积分求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{d}{dx} \\int_0^x \\sqrt{1+t^2} dt"></span></p>
  
  <p><strong>解：</strong></p>
  <p>由微积分基本定理第一部分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{d}{dx} \\int_0^x \\sqrt{1+t^2} dt = \\sqrt{1+x^2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sqrt{1+x^2}"></span></p>
</div>

<h4>📘 例题 5：复合变上限积分求导</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{d}{dx} \\int_0^{x^2} \\cos t dt"></span></p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="u = x^2"></span>，则</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{d}{dx} \\int_0^{x^2} \\cos t dt = \\cos(x^2) \\cdot (x^2)' = 2x\\cos(x^2)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2x\\cos(x^2)"></span></p>
</div>

<h5>4. 牛顿-莱布尼茨公式的使用条件</h5>

<ul>
  <li><span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上<strong>连续</strong>（或只有有限个间断点）</li>
  <li><span class="formula-inline" data-latex="F(x)"></span> 是 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上的<strong>原函数</strong></li>
  <li>若被积函数有间断点，需要分段处理</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 微积分基本公式是微积分中最重要的公式之一。它将定积分的计算转化为原函数在区间端点处的函数值之差，极大地方便了定积分的计算。同时，积分上限函数的导数揭示了积分与微分之间的逆运算关系。
  </p>
</div>
`;