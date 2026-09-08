window.SECTION_CONTENT = `
<h4>📐 古典概型与几何概型</h4>

<p>古典概型是概率论中最基本、最直观的概率模型。它建立在"等可能性"的基础上，通过直接计数来计算概率。几何概型是古典概型的推广，适用于样本空间为连续区域的情形。</p>

<h5>1. 古典概型</h5>

<p><strong>定义：</strong> 若一个随机试验满足：</p>
<ul>
  <li>样本空间 <span class="formula-inline" data-latex="\\Omega"></span> 只含有限个样本点</li>
  <li>每个样本点发生的可能性相同（等可能）</li>
</ul>
<p>则称为<strong>古典概型</strong>。</p>

<p>在古典概型中，事件 <span class="formula-inline" data-latex="A"></span> 的概率为</p>

<div class="formula-block" data-latex="P(A) = \\frac{A \\text{ 中所含样本点个数}}{\\Omega \\text{ 中所含样本点总数}} = \\frac{|A|}{|\\Omega|}"></div>

<h5>2. 古典概型的计算技巧</h5>

<p><strong>（1）排列与组合</strong></p>
<ul>
  <li><strong>排列：</strong> 从 <span class="formula-inline" data-latex="n"></span> 个不同元素中取 <span class="formula-inline" data-latex="m"></span> 个进行排列：<span class="formula-inline" data-latex="A_n^m = \\frac{n!}{(n-m)!}"></span></li>
  <li><strong>组合：</strong> 从 <span class="formula-inline" data-latex="n"></span> 个不同元素中取 <span class="formula-inline" data-latex="m"></span> 个：<span class="formula-inline" data-latex="C_n^m = \\binom{n}{m} = \\frac{n!}{m!(n-m)!}"></span></li>
</ul>

<p><strong>（2）常用计数方法</strong></p>
<ul>
  <li>加法原理：分类计数</li>
  <li>乘法原理：分步计数</li>
  <li>对立事件法：<span class="formula-inline" data-latex="P(A) = 1 - P(\\overline{A})"></span></li>
</ul>

<h4>📘 例题 1：古典概型</h4>

<div class="example">
  <p><strong>题目：</strong> 从 5 个红球和 3 个白球中任取 2 个球，求取出的 2 个球都是红球的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>总数 <span class="formula-inline" data-latex="|\\Omega| = \\binom{8}{2} = 28"></span></p>
  <p>有利事件数 <span class="formula-inline" data-latex="|A| = \\binom{5}{2} = 10"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A) = \\frac{10}{28} = \\frac{5}{14} \\approx 0.357"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{5}{14}"></span></p>
</div>

<h4>📘 例题 2：排列与组合</h4>

<div class="example">
  <p><strong>题目：</strong> 将 4 个不同的球随机放入 3 个不同的盒子中，求每个盒子都有球的概率。</p>
  
  <p><strong>解：</strong></p>
  <p>总数 <span class="formula-inline" data-latex="|\\Omega| = 3^4 = 81"></span></p>
  <p>每个盒子都有球，即球数分布为 2, 1, 1。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|A| = \\binom{4}{2} \\times 3! = 6 \\times 6 = 36"></span>
  </p>
  <p>（先选哪两个球在一起，再分配给 3 个盒子）</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(A) = \\frac{36}{81} = \\frac{4}{9} \\approx 0.444"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{4}{9}"></span></p>
</div>

<h5>3. 几何概型</h5>

<p>当试验结果可以看作是某个可测区域 <span class="formula-inline" data-latex="\\Omega"></span> 中的点时，事件 <span class="formula-inline" data-latex="A"></span> 的概率定义为</p>

<div class="formula-block" data-latex="P(A) = \\frac{测量(A)}{测量(\\Omega)}"></div>

<p>其中"测量"可以是长度、面积、体积等。</p>

<h4>📘 例题 3：几何概型</h4>

<div class="example">
  <p><strong>题目：</strong> 在区间 <span class="formula-inline" data-latex="[0, 1]"></span> 上任取两点 <span class="formula-inline" data-latex="X, Y"></span>，求 <span class="formula-inline" data-latex="X + Y > 1"></span> 的概率。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="(X, Y)"></span> 的样本空间是单位正方形 <span class="formula-inline" data-latex="[0,1] \\times [0,1]"></span>，面积为 1。</p>
  <p>事件 <span class="formula-inline" data-latex="X + Y > 1"></span> 对应正方形中直线 <span class="formula-inline" data-latex="X + Y = 1"></span> 上方的区域，面积为 <span class="formula-inline" data-latex="1/2"></span>。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="P(X + Y > 1) = \\frac{1/2}{1} = \\frac{1}{2}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2}"></span></p>
</div>

<h5>4. 古典概型与几何概型总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>样本空间</th>
    <th>概率公式</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>古典概型</strong></td>
    <td>有限个等可能结果</td>
    <td><span class="formula-inline" data-latex="P(A) = |A|/|\\Omega|"></span></td>
    <td>掷骰子、抽球</td>
  </tr>
  <tr>
    <td><strong>几何概型</strong></td>
    <td>连续区域（长度/面积/体积）</td>
    <td><span class="formula-inline" data-latex="P(A) = \\text{测量}(A)/\\text{测量}(\\Omega)"></span></td>
    <td>投针、随机点</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 古典概型和几何概型是概率论中最基础的两种概率模型。古典概型通过计数计算概率，几何概型通过测量计算概率。掌握排列组合的计算方法，是解决古典概型问题的关键。
  </p>
</div>
`;