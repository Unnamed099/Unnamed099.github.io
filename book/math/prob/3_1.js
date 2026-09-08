window.SECTION_CONTENT = `
<h4>📐 二维随机变量的联合分布</h4>

<p>在实际问题中，我们常常需要同时研究两个或多个随机变量。二维随机变量是两个随机变量的有序对，其联合分布描述了它们共同变化的规律。</p>

<h5>1. 二维随机变量的概念</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="E"></span> 是随机试验，<span class="formula-inline" data-latex="X = X(\\omega)"></span> 和 <span class="formula-inline" data-latex="Y = Y(\\omega)"></span> 是定义在同一个样本空间上的两个随机变量，则称 <span class="formula-inline" data-latex="(X, Y)"></span> 为<strong>二维随机变量</strong>（或称二维随机向量）。</p>

<h5>2. 二维随机变量的联合分布函数</h5>

<p><strong>定义：</strong> 对任意实数 <span class="formula-inline" data-latex="x, y"></span>，称</p>

<div class="formula-block" data-latex="F(x, y) = P(X \\le x, Y \\le y)"></div>

<p>为二维随机变量 <span class="formula-inline" data-latex="(X, Y)"></span> 的<strong>联合分布函数</strong>。</p>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="0 \\le F(x, y) \\le 1"></span></li>
  <li><span class="formula-inline" data-latex="F(x, y)"></span> 对 <span class="formula-inline" data-latex="x, y"></span> 分别单调不减</li>
  <li><span class="formula-inline" data-latex="\\lim_{x \\to -\\infty} F(x, y) = 0, \\quad \\lim_{y \\to -\\infty} F(x, y) = 0"></span></li>
  <li><span class="formula-inline" data-latex="\\lim_{x \\to +\\infty, y \\to +\\infty} F(x, y) = 1"></span></li>
</ul>

<h5>3. 二维离散型随机变量</h5>

<p>若 <span class="formula-inline" data-latex="(X, Y)"></span> 的所有可能取值只有有限个或可列个，则称为<strong>二维离散型随机变量</strong>。</p>

<p><strong>联合分布律：</strong></p>
<div class="formula-block" data-latex="P(X = x_i, Y = y_j) = p_{ij}, \\quad i, j = 1, 2, \\cdots"></div>

<p>满足：<span class="formula-inline" data-latex="p_{ij} \\ge 0, \\quad \\sum_i \\sum_j p_{ij} = 1"></span></p>

<h4>📘 例题 1：二维离散型分布律</h4>

<div class="example">
  <p><strong>题目：</strong> 同时抛掷两枚骰子，设 <span class="formula-inline" data-latex="X"></span> 为第一枚的点数，<span class="formula-inline" data-latex="Y"></span> 为第二枚的点数。写出 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合分布律。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="X, Y"></span> 均取 1, 2, 3, 4, 5, 6，且相互独立。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X = i, Y = j) = \\frac{1}{36}, \\quad i, j = 1, 2, \\cdots, 6"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 均匀分布，每个组合概率为 <span class="formula-inline" data-latex="1/36"></span></p>
</div>

<h5>4. 二维连续型随机变量</h5>

<p>若存在非负可积函数 <span class="formula-inline" data-latex="f(x, y)"></span>，使得对任意实数 <span class="formula-inline" data-latex="x, y"></span>，</p>

<div class="formula-block" data-latex="F(x, y) = \\int_{-\\infty}^{y} \\int_{-\\infty}^{x} f(u, v) du dv"></div>

<p>则称 <span class="formula-inline" data-latex="(X, Y)"></span> 为<strong>二维连续型随机变量</strong>，<span class="formula-inline" data-latex="f(x, y)"></span> 称为<strong>联合概率密度函数</strong>。</p>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="f(x, y) \\ge 0"></span></li>
  <li><span class="formula-inline" data-latex="\\int_{-\\infty}^{+\\infty} \\int_{-\\infty}^{+\\infty} f(x, y) dx dy = 1"></span></li>
  <li><span class="formula-inline" data-latex="P((X, Y) \\in D) = \\iint_D f(x, y) dx dy"></span></li>
</ul>

<h4>📘 例题 2：二维连续型</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="(X, Y)"></span> 的联合密度为 <span class="formula-inline" data-latex="f(x, y) = \\begin{cases} c x y, & 0 \\le x \\le 1, 0 \\le y \\le 1 \\\\ 0, & \\text{其他} \\end{cases}"></span>，求常数 <span class="formula-inline" data-latex="c"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 \\int_0^1 cxy dx dy = c \\cdot \\left(\\int_0^1 x dx\\right) \\left(\\int_0^1 y dy\\right) = c \\cdot \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{c}{4} = 1"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="c = 4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="c = 4"></span></p>
</div>

<h5>5. 二维分布总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>描述方式</th>
    <th>概率计算</th>
  </tr>
  <tr>
    <td><strong>二维离散型</strong></td>
    <td>联合分布律 <span class="formula-inline" data-latex="p_{ij}"></span></td>
    <td><span class="formula-inline" data-latex="\\sum\\sum p_{ij}"></span></td>
  </tr>
  <tr>
    <td><strong>二维连续型</strong></td>
    <td>联合密度 <span class="formula-inline" data-latex="f(x, y)"></span></td>
    <td><span class="formula-inline" data-latex="\\iint_D f(x, y) dx dy"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 二维随机变量的联合分布描述了两个随机变量共同变化的规律。它是一维随机变量分布的推广，是学习边缘分布、条件分布以及随机变量独立性的基础。联合分布函数是描述二维随机变量最完整的工具。
  </p>
</div>
`;