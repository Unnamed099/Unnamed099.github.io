window.SECTION_CONTENT = `
<h4>📐 随机变量的概念</h4>

<p>随机变量是将随机试验的结果数值化的工具。通过引入随机变量，我们可以用数学分析的方法来研究随机现象。随机变量是概率论从"事件"走向"分布"的关键概念。</p>

<h5>1. 随机变量的定义</h5>

<p><strong>定义：</strong> 设 <span class="formula-inline" data-latex="E"></span> 是随机试验，<span class="formula-inline" data-latex="\\Omega"></span> 是其样本空间。若对于每个样本点 <span class="formula-inline" data-latex="\\omega \\in \\Omega"></span>，都有唯一确定的实数 <span class="formula-inline" data-latex="X(\\omega)"></span> 与之对应，则称 <span class="formula-inline" data-latex="X = X(\\omega)"></span> 为<strong>随机变量</strong>。</p>

<p>通俗地说，随机变量是定义在样本空间上的实值函数。</p>

<h4>📘 例题 1：随机变量的例子</h4>

<div class="example">
  <p><strong>题目：</strong> 抛掷一枚硬币两次，定义随机变量 <span class="formula-inline" data-latex="X"></span> 为正面出现的次数。写出 <span class="formula-inline" data-latex="X"></span> 的取值及对应概率。</p>
  
  <p><strong>解：</strong></p>
  <p>样本空间 <span class="formula-inline" data-latex="\\Omega = \\{ HH, HT, TH, TT \\}"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="X = \\begin{cases} 2, & \\omega = HH \\\\ 1, & \\omega = HT, TH \\\\ 0, & \\omega = TT \\end{cases}"></span>
  </p>
  <p>概率分布：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X=0) = 1/4, \\quad P(X=1) = 1/2, \\quad P(X=2) = 1/4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="X \\sim \\{0, 1, 2\\}"></span></p>
</div>

<h5>2. 随机变量的分类</h5>

<p><strong>离散型随机变量：</strong> 取值为有限个或可列无穷多个。</p>
<p>例：掷骰子的点数、某路口一天内通过的车辆数。</p>

<p><strong>连续型随机变量：</strong> 取值为某个区间或整个实数轴上的任意值。</p>
<p>例：某人的身高、电子元件的寿命。</p>

<h5>3. 随机变量的分布函数</h5>

<p><strong>定义：</strong> 对任意实数 <span class="formula-inline" data-latex="x"></span>，称</p>

<div class="formula-block" data-latex="F(x) = P(X \\le x)"></div>

<p>为随机变量 <span class="formula-inline" data-latex="X"></span> 的<strong>分布函数</strong>。</p>

<p><strong>分布函数的性质：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="0 \\le F(x) \\le 1"></span></li>
  <li><span class="formula-inline" data-latex="F(x)"></span> 是单调不减函数</li>
  <li><span class="formula-inline" data-latex="\\lim_{x \\to -\\infty} F(x) = 0, \\quad \\lim_{x \\to +\\infty} F(x) = 1"></span></li>
  <li><span class="formula-inline" data-latex="F(x)"></span> 是右连续函数</li>
</ul>

<h4>📘 例题 2：分布函数的计算</h4>

<div class="example">
  <p><strong>题目：</strong> 设随机变量 <span class="formula-inline" data-latex="X"></span> 的分布律为 <span class="formula-inline" data-latex="P(X=1) = 0.3, P(X=2) = 0.5, P(X=3) = 0.2"></span>，求分布函数 <span class="formula-inline" data-latex="F(x)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F(x) = \\begin{cases} 0, & x < 1 \\\\ 0.3, & 1 \\le x < 2 \\\\ 0.8, & 2 \\le x < 3 \\\\ 1, & x \\ge 3 \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 如上阶梯函数</p>
</div>

<h5>4. 随机变量函数</h5>

<p>若 <span class="formula-inline" data-latex="X"></span> 是随机变量，<span class="formula-inline" data-latex="g(x)"></span> 是实值函数，则 <span class="formula-inline" data-latex="Y = g(X)"></span> 也是随机变量。</p>

<p>常见随机变量函数：</p>
<ul>
  <li><span class="formula-inline" data-latex="Y = aX + b"></span>（线性变换）</li>
  <li><span class="formula-inline" data-latex="Y = X^2"></span>（平方变换）</li>
  <li><span class="formula-inline" data-latex="Y = e^X"></span>（指数变换）</li>
</ul>

<h5>5. 随机变量总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>定义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>随机变量</strong></td>
    <td>样本空间到实数的映射</td>
    <td>掷骰子的点数</td>
  </tr>
  <tr>
    <td><strong>离散型</strong></td>
    <td>取值有限或可列</td>
    <td>泊松分布、二项分布</td>
  </tr>
  <tr>
    <td><strong>连续型</strong></td>
    <td>取值连续区间</td>
    <td>正态分布、指数分布</td>
  </tr>
  <tr>
    <td><strong>分布函数</strong></td>
    <td><span class="formula-inline" data-latex="F(x) = P(X \\le x)"></span></td>
    <td>完整描述随机变量</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 随机变量是概率论从"事件"走向"分布"的桥梁。通过随机变量，我们可以将随机现象转化为数学分析的对象，进而利用微积分、线性代数等工具研究随机现象。分布函数则完整地描述了随机变量的概率性质。
  </p>
</div>
`;