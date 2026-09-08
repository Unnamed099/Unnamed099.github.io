window.SECTION_CONTENT = `
<h4>📐 最小二乘法</h4>

<p>最小二乘法是一种数学优化技术，用于通过最小化误差的平方和来寻找数据的最佳函数匹配。它是回归分析、数据拟合和参数估计中最常用的方法之一。</p>

<h5>1. 问题的提出</h5>

<p>在科学实验和工程实践中，我们经常需要根据一组实验数据 <span class="formula-inline" data-latex="(x_1, y_1), (x_2, y_2), \\cdots, (x_n, y_n)"></span> 寻找一个函数 <span class="formula-inline" data-latex="y = f(x)"></span> 来近似描述变量之间的依赖关系。</p>

<p>最简单的拟合是<strong>线性拟合</strong>：假设 <span class="formula-inline" data-latex="y = ax + b"></span>，其中 <span class="formula-inline" data-latex="a, b"></span> 为待定参数。</p>

<p><strong>最小二乘原理：</strong> 选择参数 <span class="formula-inline" data-latex="a, b"></span> 使</p>

<div class="formula-block" data-latex="S = \\sum_{i=1}^{n} (y_i - ax_i - b)^2"></div>

<p>达到最小值。</p>

<h5>2. 线性拟合的求解</h5>

<p><span class="formula-inline" data-latex="S(a, b)"></span> 是关于 <span class="formula-inline" data-latex="a, b"></span> 的二元函数。由极值的必要条件，令</p>

<div class="formula-block" data-latex="\\frac{\\partial S}{\\partial a} = 0, \\quad \\frac{\\partial S}{\\partial b} = 0"></div>

<p>得法方程组：</p>

<div class="formula-block" data-latex="\\begin{cases} a\\sum x_i^2 + b\\sum x_i = \\sum x_i y_i \\\\ a\\sum x_i + nb = \\sum y_i \\end{cases}"></div>

<p>解得：</p>

<div class="formula-block" data-latex="a = \\frac{n\\sum x_i y_i - \\sum x_i \\sum y_i}{n\\sum x_i^2 - (\\sum x_i)^2}"></div>
<div class="formula-block" data-latex="b = \\frac{\\sum x_i^2 \\sum y_i - \\sum x_i \\sum x_i y_i}{n\\sum x_i^2 - (\\sum x_i)^2} = \\bar{y} - a\\bar{x}"></div>

<h4>📘 例题 1：线性拟合</h4>

<div class="example">
  <p><strong>题目：</strong> 已知数据如下，求最小二乘拟合直线 <span class="formula-inline" data-latex="y = ax + b"></span>。</p>
  
  <table style="width:60%; margin:10px auto; border-collapse:collapse; text-align:center;">
    <tr><th style="border:1px solid #ddd; padding:4px;"><span class="formula-inline" data-latex="x_i"></span></th><td style="border:1px solid #ddd; padding:4px;">1</td><td style="border:1px solid #ddd; padding:4px;">2</td><td style="border:1px solid #ddd; padding:4px;">3</td><td style="border:1px solid #ddd; padding:4px;">4</td><td style="border:1px solid #ddd; padding:4px;">5</td></tr>
    <tr><th style="border:1px solid #ddd; padding:4px;"><span class="formula-inline" data-latex="y_i"></span></th><td style="border:1px solid #ddd; padding:4px;">1.2</td><td style="border:1px solid #ddd; padding:4px;">1.9</td><td style="border:1px solid #ddd; padding:4px;">3.2</td><td style="border:1px solid #ddd; padding:4px;">4.0</td><td style="border:1px solid #ddd; padding:4px;">5.1</td></tr>
  </table>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sum x_i = 15, \\sum y_i = 15.4, \\sum x_i^2 = 55, \\sum x_i y_i = 1\\times1.2 + 2\\times1.9 + 3\\times3.2 + 4\\times4.0 + 5\\times5.1 = 56.5"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="a = \\frac{5\\times56.5 - 15\\times15.4}{5\\times55 - 15^2} = \\frac{282.5 - 231}{275 - 225} = \\frac{51.5}{50} = 1.03"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="b = \\bar{y} - a\\bar{x} = \\frac{15.4}{5} - 1.03\\times\\frac{15}{5} = 3.08 - 3.09 = -0.01"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="y = 1.03x - 0.01"></span></p>
</div>

<h5>3. 非线性拟合（多项式拟合）</h5>

<p>若数据不符合线性关系，可以用多项式 <span class="formula-inline" data-latex="y = a_0 + a_1 x + a_2 x^2 + \\cdots + a_m x^m"></span> 进行拟合。</p>

<p>目标：最小化</p>

<div class="formula-block" data-latex="S = \\sum_{i=1}^{n} (y_i - \\sum_{j=0}^{m} a_j x_i^j)^2"></div>

<p>令 <span class="formula-inline" data-latex="\\frac{\\partial S}{\\partial a_k} = 0"></span>，得到 <span class="formula-inline" data-latex="m+1"></span> 个线性方程的法方程组。</p>

<h4>📘 例题 2：二次多项式拟合</h4>

<div class="example">
  <p><strong>题目：</strong> 用二次多项式 <span class="formula-inline" data-latex="y = a + bx + cx^2"></span> 拟合数据 <span class="formula-inline" data-latex="(0,1), (1,2), (2,3), (3,5)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>法方程组：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} 4a + 6b + 14c = 11 \\\\ 6a + 14b + 36c = 22 \\\\ 14a + 36b + 98c = 60 \\end{cases}"></span>
  </p>
  <p>解之得：<span class="formula-inline" data-latex="a = 1, b = 0.4, c = 0.2"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="y = 1 + 0.4x + 0.2x^2"></span></p>
</div>

<h5>4. 最小二乘法与其他方法的比较</h5>

<table>
  <tr>
    <th>方法</th>
    <th>优点</th>
    <th>缺点</th>
    <th>适用场景</th>
  </tr>
  <tr>
    <td><strong>最小二乘法</strong></td>
    <td>理论成熟，计算简单</td>
    <td>对异常值敏感</td>
    <td>数据误差服从正态分布</td>
  </tr>
  <tr>
    <td><strong>插值法</strong></td>
    <td>严格通过所有点</td>
    <td>对高次多项式不稳定</td>
    <td>数据精确</td>
  </tr>
  <tr>
    <td><strong>加权最小二乘</strong></td>
    <td>可考虑不同点的权重</td>
    <td>需要确定权重</td>
    <td>数据精度不同</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 最小二乘法是数据拟合和参数估计的基本工具。它通过最小化误差平方和，在数据点之间找到最优的拟合曲线。最小二乘法在回归分析、信号处理、机器学习等领域有着极其广泛的应用。
  </p>
</div>
`;