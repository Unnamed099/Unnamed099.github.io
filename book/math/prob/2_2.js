window.SECTION_CONTENT = `
<h4>📐 离散型随机变量</h4>

<p>离散型随机变量是取值有限个或可列无穷多个的随机变量。它通过分布律（概率分布列）来描述，是概率论中最基本、最常用的随机变量类型。</p>

<h5>1. 离散型随机变量的分布律</h5>

<p><strong>定义：</strong> 设离散型随机变量 <span class="formula-inline" data-latex="X"></span> 的取值为 <span class="formula-inline" data-latex="x_1, x_2, \\cdots, x_n, \\cdots"></span>，称</p>

<div class="formula-block" data-latex="P(X = x_i) = p_i, \\quad i = 1, 2, \\cdots"></div>

<p>为 <span class="formula-inline" data-latex="X"></span> 的<strong>分布律</strong>（或概率分布列）。</p>

<p>分布律满足：</p>
<ul>
  <li><span class="formula-inline" data-latex="p_i \\ge 0, \\quad i = 1, 2, \\cdots"></span></li>
  <li><span class="formula-inline" data-latex="\\sum_{i} p_i = 1"></span></li>
</ul>

<h5>2. 常见的离散型分布</h5>

<p><strong>（1）两点分布（0-1分布）</strong></p>
<p>若随机变量 <span class="formula-inline" data-latex="X"></span> 只取 0 和 1 两个值，且</p>
<div class="formula-block" data-latex="P(X = 1) = p, \\quad P(X = 0) = 1 - p \\quad (0 < p < 1)"></div>
<p>则称 <span class="formula-inline" data-latex="X"></span> 服从参数为 <span class="formula-inline" data-latex="p"></span> 的<strong>两点分布</strong>（伯努利分布）。</p>

<p><strong>（2）二项分布</strong></p>
<p>若 <span class="formula-inline" data-latex="X"></span> 表示 <span class="formula-inline" data-latex="n"></span> 重伯努利试验中成功的次数，则</p>
<div class="formula-block" data-latex="P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, 2, \\cdots, n"></div>
<p>记作 <span class="formula-inline" data-latex="X \\sim B(n, p)"></span>。</p>

<p><strong>（3）泊松分布</strong></p>
<p>若随机变量 <span class="formula-inline" data-latex="X"></span> 的分布律为</p>
<div class="formula-block" data-latex="P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0, 1, 2, \\cdots, \\; \\lambda > 0"></div>
<p>则称 <span class="formula-inline" data-latex="X"></span> 服从参数为 <span class="formula-inline" data-latex="\\lambda"></span> 的<strong>泊松分布</strong>，记作 <span class="formula-inline" data-latex="X \\sim P(\\lambda)"></span>。</p>

<p>泊松分布常用于描述单位时间内随机事件发生的次数，如某时段内到达的顾客数、电话呼叫数等。</p>

<h4>📘 例题 1：二项分布</h4>

<div class="example">
  <p><strong>题目：</strong> 某射手的命中率为 0.8，独立射击 3 次，求命中次数的分布律。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="X"></span> 为命中次数，<span class="formula-inline" data-latex="X \\sim B(3, 0.8)"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X = k) = \\binom{3}{k} 0.8^k (0.2)^{3-k}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X=0) = 0.008, \\quad P(X=1) = 0.096, \\quad P(X=2) = 0.384, \\quad P(X=3) = 0.512"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 如上分布律</p>
</div>

<h4>📘 例题 2：泊松分布</h4>

<div class="example">
  <p><strong>题目：</strong> 某电话交换台在单位时间内收到的呼叫次数 <span class="formula-inline" data-latex="X \\sim P(3)"></span>，求收到 2 次呼叫的概率。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X = 2) = \\frac{3^2 e^{-3}}{2!} = \\frac{9 e^{-3}}{2} \\approx 0.224"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\approx 0.224"></span></p>
</div>

<h5>3. 分布律与分布函数的关系</h5>

<p>对于离散型随机变量，分布函数为</p>

<div class="formula-block" data-latex="F(x) = \\sum_{x_i \\le x} P(X = x_i) = \\sum_{x_i \\le x} p_i"></div>

<p>分布函数是右连续的阶梯函数，在每个取值点处有跳跃，跳跃的高度为 <span class="formula-inline" data-latex="p_i"></span>。</p>

<h5>4. 离散型分布总结</h5>

<table>
  <tr>
    <th>分布名称</th>
    <th>记法</th>
    <th>分布律</th>
    <th>参数</th>
    <th>应用</th>
  </tr>
  <tr>
    <td><strong>两点分布</strong></td>
    <td><span class="formula-inline" data-latex="B(1, p)"></span></td>
    <td><span class="formula-inline" data-latex="P(X=1)=p, P(X=0)=1-p"></span></td>
    <td><span class="formula-inline" data-latex="0 < p < 1"></span></td>
    <td>单次试验成功/失败</td>
  </tr>
  <tr>
    <td><strong>二项分布</strong></td>
    <td><span class="formula-inline" data-latex="B(n, p)"></span></td>
    <td><span class="formula-inline" data-latex="\\binom{n}{k} p^k (1-p)^{n-k}"></span></td>
    <td><span class="formula-inline" data-latex="n \\ge 1, 0 < p < 1"></span></td>
    <td>n 次独立重复试验</td>
  </tr>
  <tr>
    <td><strong>泊松分布</strong></td>
    <td><span class="formula-inline" data-latex="P(\\lambda)"></span></td>
    <td><span class="formula-inline" data-latex="\\lambda^k e^{-\\lambda}/k!"></span></td>
    <td><span class="formula-inline" data-latex="\\lambda > 0"></span></td>
    <td>单位时间事件次数</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 离散型随机变量是最基本的随机变量类型。二项分布和泊松分布是最重要的两个离散型分布。二项分布描述独立重复试验中成功次数的分布，泊松分布描述稀有事件在单位时间或空间内发生次数的分布。
  </p>
</div>
`;