window.SECTION_CONTENT = `
<h4>📐 多元函数的基本概念</h4>

<p>一元函数描述的是变量之间的依赖关系，而实际问题中往往涉及多个变量。多元函数是微积分向高维空间的自然推广，是研究多变量系统的数学工具。</p>

<h5>1. 平面点集与 n 维空间</h5>

<p><strong>平面点集：</strong> 坐标平面 <span class="formula-inline" data-latex="\\mathbb{R}^2"></span> 上满足某种条件的点的集合。</p>

<p><strong>邻域：</strong> 点 <span class="formula-inline" data-latex="P_0(x_0, y_0)"></span> 的 <span class="formula-inline" data-latex="\\delta"></span> 邻域定义为</p>
<div class="formula-block" data-latex="U(P_0, \\delta) = \\{ (x, y) \\mid \\sqrt{(x-x_0)^2 + (y-y_0)^2} < \\delta \\}"></div>

<p><strong>n 维空间：</strong> 所有 <span class="formula-inline" data-latex="n"></span> 元有序实数组 <span class="formula-inline" data-latex="(x_1, x_2, \\cdots, x_n)"></span> 的集合称为 <span class="formula-inline" data-latex="n"></span> 维空间，记作 <span class="formula-inline" data-latex="\\mathbb{R}^n"></span>。</p>

<h5>2. 多元函数的概念</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="D"></span> 是 <span class="formula-inline" data-latex="\\mathbb{R}^2"></span> 中的一个非空点集，若对于 <span class="formula-inline" data-latex="D"></span> 中任意一点 <span class="formula-inline" data-latex="(x, y)"></span>，按照某种法则 <span class="formula-inline" data-latex="f"></span>，都有唯一确定的实数 <span class="formula-inline" data-latex="z"></span> 与之对应，则称 <span class="formula-inline" data-latex="z = f(x, y)"></span> 为定义在 <span class="formula-inline" data-latex="D"></span> 上的<strong>二元函数</strong>。</p>

<p>类似地，可定义三元、<span class="formula-inline" data-latex="n"></span> 元函数。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 二元函数的定义域是平面上的一个区域</p>
  <p>• 函数值 <span class="formula-inline" data-latex="z = f(x, y)"></span> 构成空间中的一个曲面</p>
  <p>• 多元函数的极限、连续性等概念是一元函数的推广</p>
</div>

<h4>📘 例题 1：求二元函数的定义域</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x, y) = \\ln(x + y - 1)"></span> 的定义域。</p>
  
  <p><strong>解：</strong></p>
  <p>对数的真数必须大于 0：<span class="formula-inline" data-latex="x + y - 1 > 0 \\Rightarrow x + y > 1"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="D = \\{ (x, y) \\mid x + y > 1 \\}"></span></p>
</div>

<h5>3. 多元函数的极限</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="z = f(x, y)"></span> 在点 <span class="formula-inline" data-latex="P_0(x_0, y_0)"></span> 的某去心邻域内有定义。若对于任意给定的 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < \\sqrt{(x-x_0)^2 + (y-y_0)^2} < \\delta"></span> 时，有</p>

<div class="formula-block" data-latex="|f(x, y) - A| < \\varepsilon"></div>

<p>则称 <span class="formula-inline" data-latex="A"></span> 为函数 <span class="formula-inline" data-latex="f(x, y)"></span> 在 <span class="formula-inline" data-latex="P_0"></span> 处的<strong>极限</strong>，记作</p>

<div class="formula-block" data-latex="\\lim_{(x, y) \\to (x_0, y_0)} f(x, y) = A"></div>

<div class="note">
  <strong>⚠️ 重要区别：</strong>
  <p>• 一元函数极限只需考虑左右两个方向</p>
  <p>• 多元函数极限必须考虑<strong>所有</strong>方向趋近</p>
  <p>• 若沿不同方向的极限不同，则极限不存在</p>
</div>

<h4>📘 例题 2：判断极限是否存在</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="\\lim_{(x, y) \\to (0, 0)} \\frac{xy}{x^2 + y^2}"></span> 是否存在。</p>
  
  <p><strong>解：</strong></p>
  <p>沿 <span class="formula-inline" data-latex="y = kx"></span> 趋于 <span class="formula-inline" data-latex="(0, 0)"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{x \\cdot kx}{x^2 + k^2 x^2} = \\lim_{x \\to 0} \\frac{k}{1 + k^2} = \\frac{k}{1 + k^2}"></span>
  </p>
  <p>当 <span class="formula-inline" data-latex="k"></span> 取不同值时，极限值不同（如 <span class="formula-inline" data-latex="k = 1"></span> 时为 <span class="formula-inline" data-latex="1/2"></span>，<span class="formula-inline" data-latex="k = 2"></span> 时为 <span class="formula-inline" data-latex="2/5"></span>）。</p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 极限不存在</p>
</div>

<h5>4. 多元函数的连续性</h5>

<p><strong>定义：</strong> 若 <span class="formula-inline" data-latex="\\lim_{(x, y) \\to (x_0, y_0)} f(x, y) = f(x_0, y_0)"></span>，则称 <span class="formula-inline" data-latex="f(x, y)"></span> 在点 <span class="formula-inline" data-latex="(x_0, y_0)"></span> 处<strong>连续</strong>。</p>

<p><strong>性质：</strong></p>
<ul>
  <li>多元初等函数在其定义域内连续</li>
  <li>连续函数的和、差、积、商（分母不为 0）仍连续</li>
  <li>连续函数的复合仍连续</li>
</ul>

<h4>📘 例题 3：判断连续性</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论函数 <span class="formula-inline" data-latex="f(x, y) = \\frac{x^2 y}{x^2 + y^2}"></span> 在 <span class="formula-inline" data-latex="(0, 0)"></span> 处能否补充定义使其连续。</p>
  
  <p><strong>解：</strong></p>
  <p>令 <span class="formula-inline" data-latex="x = r\\cos\\theta, y = r\\sin\\theta"></span>，则</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(x, y) = \\frac{r^3\\cos^2\\theta\\sin\\theta}{r^2} = r\\cos^2\\theta\\sin\\theta"></span>
  </p>
  <p>当 <span class="formula-inline" data-latex="r \\to 0"></span> 时，<span class="formula-inline" data-latex="f(x, y) \\to 0"></span>，与 <span class="formula-inline" data-latex="\\theta"></span> 无关。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 若补充定义 <span class="formula-inline" data-latex="f(0, 0) = 0"></span>，则函数在 <span class="formula-inline" data-latex="(0, 0)"></span> 处连续。</p>
</div>

<h5>5. 多元函数基本概念总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>一元函数</th>
    <th>多元函数</th>
  </tr>
  <tr>
    <td><strong>定义域</strong></td>
    <td>区间</td>
    <td>平面区域</td>
  </tr>
  <tr>
    <td><strong>极限</strong></td>
    <td>左右两个方向</td>
    <td>所有方向</td>
  </tr>
  <tr>
    <td><strong>连续性</strong></td>
    <td><span class="formula-inline" data-latex="\\lim_{x\\to x_0} f(x)=f(x_0)"></span></td>
    <td><span class="formula-inline" data-latex="\\lim_{(x,y)\\to(x_0,y_0)} f(x,y)=f(x_0,y_0)"></span></td>
  </tr>
  <tr>
    <td><strong>图像</strong></td>
    <td>平面曲线</td>
    <td>空间曲面</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 多元函数是一元函数的自然推广。理解多元函数的定义域、极限和连续性，是学习偏导数、全微分、极值等内容的基础。多元函数极限的核心特点是"所有方向都必须一致"。
  </p>
</div>
`;