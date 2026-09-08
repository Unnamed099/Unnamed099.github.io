window.SECTION_CONTENT = `
<h4>📐 微分方程的基本概念</h4>

<p>微分方程是描述自然界中各种变化规律的重要数学工具。它与导数密切相关，因为导数正是描述变化率的工具。本节介绍微分方程的基本概念和术语。</p>

<h5>1. 微分方程的定义</h5>

<p><strong>定义：</strong> 含有<strong>未知函数的导数</strong>（或微分）的方程，称为<strong>微分方程</strong>。</p>

<p>例如：</p>

<div class="formula-block" data-latex="\\frac{dy}{dx} = 2x"></div>
<div class="formula-block" data-latex="\\frac{d^2 y}{dx^2} + y = 0"></div>
<div class="formula-block" data-latex="\\left(\\frac{dy}{dx}\\right)^2 + y = 1"></div>

<h5>2. 微分方程的分类</h5>

<table>
  <tr>
    <th>分类方式</th>
    <th>类型</th>
    <th>定义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>按导数的阶数</strong></td>
    <td>一阶微分方程</td>
    <td>只含一阶导数</td>
    <td><span class="formula-inline" data-latex="\\frac{dy}{dx} = 2x"></span></td>
  </tr>
  <tr>
    <td></td>
    <td>二阶微分方程</td>
    <td>含二阶导数（可能含一阶）</td>
    <td><span class="formula-inline" data-latex="y'' + y = 0"></span></td>
  </tr>
  <tr>
    <td></td>
    <td>高阶微分方程</td>
    <td>含三阶及以上导数</td>
    <td><span class="formula-inline" data-latex="y''' + y'' = x"></span></td>
  </tr>
  <tr>
    <td><strong>按线性与非线性</strong></td>
    <td>线性微分方程</td>
    <td>未知函数及其导数都是一次</td>
    <td><span class="formula-inline" data-latex="y' + P(x)y = Q(x)"></span></td>
  </tr>
  <tr>
    <td></td>
    <td>非线性微分方程</td>
    <td>未知函数或其导数出现非线性项</td>
    <td><span class="formula-inline" data-latex="y' = y^2"></span></td>
  </tr>
  <tr>
    <td><strong>按是否为常微分</strong></td>
    <td>常微分方程</td>
    <td>未知函数只含一个自变量</td>
    <td><span class="formula-inline" data-latex="y' + y = 0"></span></td>
  </tr>
  <tr>
    <td></td>
    <td>偏微分方程</td>
    <td>未知函数含多个自变量</td>
    <td><span class="formula-inline" data-latex="\\frac{\\partial u}{\\partial t} = \\frac{\\partial^2 u}{\\partial x^2}"></span></td>
  </tr>
</table>

<div class="note">
  <strong>💡 注意：</strong>
  <p>• 微分方程的<strong>阶数</strong> = 方程中未知函数导数的<strong>最高阶数</strong></p>
  <p>• 线性微分方程的标准形式：<span class="formula-inline" data-latex="y^{(n)} + a_1(x)y^{(n-1)} + \\cdots + a_{n-1}(x)y' + a_n(x)y = f(x)"></span></p>
</div>

<h5>3. 微分方程的解</h5>

<p><strong>定义：</strong> 若函数 <span class="formula-inline" data-latex="y = \\varphi(x)"></span> 代入微分方程后使方程成为恒等式，则称 <span class="formula-inline" data-latex="y = \\varphi(x)"></span> 为该微分方程的<strong>解</strong>。</p>

<ul>
  <li><strong>通解</strong>：含有与方程阶数相同个数的任意常数的解</li>
  <li><strong>特解</strong>：通解中任意常数取特定值后得到的解</li>
  <li><strong>初始条件</strong>：确定特解所需的附加条件</li>
</ul>

<h4>📘 例题 1：验证函数是否为微分方程的解</h4>

<div class="example">
  <p><strong>题目：</strong> 验证 <span class="formula-inline" data-latex="y = e^{2x}"></span> 是否为 <span class="formula-inline" data-latex="y' - 2y = 0"></span> 的解。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="y' = 2e^{2x}"></span></p>
  <p>代入方程：<span class="formula-inline" data-latex="y' - 2y = 2e^{2x} - 2e^{2x} = 0"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 因此 <span class="formula-inline" data-latex="y = e^{2x}"></span> 是该微分方程的解。</p>
</div>

<h4>📘 例题 2：求微分方程的通解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{dy}{dx} = 2x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>两边积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = \\int 2x dx = x^2 + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = x^2 + C"></span></p>
</div>

<h4>📘 例题 3：求满足初始条件的特解</h4>

<div class="example">
  <p><strong>题目：</strong> 求微分方程 <span class="formula-inline" data-latex="\\frac{dy}{dx} = 2x"></span> 满足 <span class="formula-inline" data-latex="y(1) = 3"></span> 的特解。</p>
  
  <p><strong>解：</strong></p>
  <p>由例题2，通解为 <span class="formula-inline" data-latex="y = x^2 + C"></span></p>
  
  <p>代入初始条件 <span class="formula-inline" data-latex="y(1) = 3"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="3 = 1^2 + C \\Rightarrow C = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>特解：</strong> <span class="formula-inline" data-latex="y = x^2 + 2"></span></p>
</div>

<h4>📘 例题 4：二阶微分方程的通解</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\frac{d^2 y}{dx^2} = 6x"></span> 的通解。</p>
  
  <p><strong>解：</strong></p>
  <p>第一次积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{dy}{dx} = \\int 6x dx = 3x^2 + C_1"></span>
  </p>
  
  <p>第二次积分：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = \\int (3x^2 + C_1) dx = x^3 + C_1 x + C_2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>通解：</strong> <span class="formula-inline" data-latex="y = x^3 + C_1 x + C_2"></span></p>
</div>

<h5>4. 微分方程的基本概念总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>含义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>微分方程</strong></td>
    <td>含未知函数导数的方程</td>
    <td><span class="formula-inline" data-latex="y' = 2x"></span></td>
  </tr>
  <tr>
    <td><strong>阶数</strong></td>
    <td>最高阶导数的阶数</td>
    <td><span class="formula-inline" data-latex="y'' + y = 0"></span> 为二阶</td>
  </tr>
  <tr>
    <td><strong>线性</strong></td>
    <td>未知函数及其导数都是一次</td>
    <td><span class="formula-inline" data-latex="y' + P(x)y = Q(x)"></span></td>
  </tr>
  <tr>
    <td><strong>通解</strong></td>
    <td>含任意常数的解</td>
    <td><span class="formula-inline" data-latex="y = x^2 + C"></span></td>
  </tr>
  <tr>
    <td><strong>特解</strong></td>
    <td>确定常数后的解</td>
    <td><span class="formula-inline" data-latex="y = x^2 + 2"></span></td>
  </tr>
  <tr>
    <td><strong>初始条件</strong></td>
    <td>确定特解的条件</td>
    <td><span class="formula-inline" data-latex="y(1) = 3"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 微分方程是描述自然现象变化规律的核心工具。理解基本概念（阶数、线性、通解、特解）是学习后续各种类型微分方程解法的基础。
  </p>
</div>
`;