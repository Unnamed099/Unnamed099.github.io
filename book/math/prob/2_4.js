window.SECTION_CONTENT = `
<h4>📐 分布函数</h4>

<p>分布函数是描述随机变量概率性质的统一工具。无论离散型还是连续型随机变量，都可以用分布函数完整地描述其统计规律。</p>

<h5>1. 分布函数的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="X"></span> 是随机变量，<span class="formula-inline" data-latex="x"></span> 是任意实数，称</p>

<div class="formula-block" data-latex="F(x) = P(X \\le x)"></div>

<p>为 <span class="formula-inline" data-latex="X"></span> 的<strong>分布函数</strong>（或累积分布函数，CDF）。</p>

<p><strong>性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="0 \\le F(x) \\le 1"></span>（有界性）</li>
  <li><span class="formula-inline" data-latex="F(x)"></span> 是单调不减函数</li>
  <li><span class="formula-inline" data-latex="\\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to +\\infty} F(x) = 1"></span></li>
  <li><span class="formula-inline" data-latex="F(x)"></span> 是右连续函数</li>
</ul>

<h5>2. 分布函数的计算</h5>

<p><strong>离散型：</strong></p>
<div class="formula-block" data-latex="F(x) = \\sum_{x_i \\le x} P(X = x_i)"></div>

<p><strong>连续型：</strong></p>
<div class="formula-block" data-latex="F(x) = \\int_{-\\infty}^{x} f(t) dt"></div>

<h4>📘 例题 1：离散型随机变量的分布函数</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X"></span> 的分布律为 <span class="formula-inline" data-latex="P(X=-1)=0.2, P(X=0)=0.3, P(X=2)=0.5"></span>，求分布函数 <span class="formula-inline" data-latex="F(x)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F(x) = \\begin{cases} 0, & x < -1 \\\\ 0.2, & -1 \\le x < 0 \\\\ 0.5, & 0 \\le x < 2 \\\\ 1, & x \\ge 2 \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 如上阶梯函数</p>
</div>

<h4>📘 例题 2：连续型随机变量的分布函数</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X \\sim U(0, 1)"></span>，求分布函数 <span class="formula-inline" data-latex="F(x)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x) = 1, 0 \\le x \\le 1"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F(x) = \\begin{cases} 0, & x < 0 \\\\ x, & 0 \\le x < 1 \\\\ 1, & x \\ge 1 \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 如上函数</p>
</div>

<h5>3. 分布函数的性质应用</h5>

<p><strong>用分布函数求概率：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="P(a < X \\le b) = F(b) - F(a)"></span></li>
  <li><span class="formula-inline" data-latex="P(X > a) = 1 - F(a)"></span></li>
  <li><span class="formula-inline" data-latex="P(X = a) = F(a) - F(a^-)"></span>（离散型）</li>
  <li><span class="formula-inline" data-latex="P(X = a) = 0"></span>（连续型）</li>
</ul>

<h4>📘 例题 3：分布函数求概率</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="X"></span> 的分布函数为 <span class="formula-inline" data-latex="F(x) = \\begin{cases} 0, & x < 0 \\\\ x^2, & 0 \\le x < 1 \\\\ 1, & x \\ge 1 \\end{cases}"></span>，求 <span class="formula-inline" data-latex="P(0.2 < X \\le 0.8)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(0.2 < X \\le 0.8) = F(0.8) - F(0.2) = 0.8^2 - 0.2^2 = 0.64 - 0.04 = 0.6"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="0.6"></span></p>
</div>

<h5>4. 分布函数与密度函数的关系</h5>

<p>对于连续型随机变量，密度函数是分布函数的导数：</p>

<div class="formula-block" data-latex="f(x) = F'(x)"></div>

<p>在 <span class="formula-inline" data-latex="F(x)"></span> 的可导点处成立。</p>

<h4>📘 例题 4：由分布函数求密度函数</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="F(x) = \\begin{cases} 0, & x < 0 \\\\ 1 - e^{-2x}, & x \\ge 0 \\end{cases}"></span>，求密度函数 <span class="formula-inline" data-latex="f(x)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(x) = F'(x) = \\begin{cases} 0, & x < 0 \\\\ 2e^{-2x}, & x \\ge 0 \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f(x) = 2e^{-2x}, x \\ge 0"></span>（指数分布）</p>
</div>

<h5>5. 分布函数总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>分布函数 <span class="formula-inline" data-latex="F(x)"></span></th>
    <th>概率计算</th>
  </tr>
  <tr>
    <td><strong>离散型</strong></td>
    <td><span class="formula-inline" data-latex="\\sum_{x_i \\le x} p_i"></span></td>
    <td>求和</td>
  </tr>
  <tr>
    <td><strong>连续型</strong></td>
    <td><span class="formula-inline" data-latex="\\int_{-\\infty}^{x} f(t) dt"></span></td>
    <td>积分</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 分布函数是描述随机变量最完整的工具。它统一了离散型和连续型随机变量的描述方式，通过分布函数可以计算任何形式的概率。分布函数的四个基本性质（有界、单调、极限、右连续）是判断一个函数是否为分布函数的依据。
  </p>
</div>
`;