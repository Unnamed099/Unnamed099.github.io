window.SECTION_CONTENT = `
<h4>📐 向量及其线性运算</h4>

<p>向量代数是空间解析几何的基础工具，它将几何问题代数化，为后续学习空间中的平面、直线、曲面等提供了有力的数学语言。</p>

<h5>1. 向量的概念</h5>

<p><strong>定义：</strong> 既有<strong>大小</strong>又有<strong>方向</strong>的量称为<strong>向量</strong>（或矢量）。</p>

<ul>
  <li>向量的<strong>模</strong>：向量的大小，记作 <span class="formula-inline" data-latex="|\\mathbf{a}|"></span> 或 <span class="formula-inline" data-latex="||\\mathbf{a}||"></span></li>
  <li><strong>单位向量</strong>：模为 1 的向量，记作 <span class="formula-inline" data-latex="\\mathbf{e}"></span></li>
  <li><strong>零向量</strong>：模为 0 的向量，记作 <span class="formula-inline" data-latex="\\mathbf{0}"></span></li>
  <li><strong>相等向量</strong>：大小相等、方向相同的向量</li>
  <li><strong>相反向量</strong>：大小相等、方向相反的向量，<span class="formula-inline" data-latex="-\\mathbf{a}"></span></li>
  <li><strong>共线向量</strong>（平行向量）：方向相同或相反的非零向量</li>
</ul>

<div class="note">
  <strong>💡 几何表示：</strong>
  <p>向量常用有向线段表示，如 <span class="formula-inline" data-latex="\\overrightarrow{AB}"></span>，<span class="formula-inline" data-latex="A"></span> 为起点，<span class="formula-inline" data-latex="B"></span> 为终点。</p>
</div>

<h5>2. 向量的线性运算</h5>

<p><strong>（1）加法</strong></p>
<p><strong>平行四边形法则：</strong> <span class="formula-inline" data-latex="\\mathbf{a} + \\mathbf{b}"></span> 是以 <span class="formula-inline" data-latex="\\mathbf{a}, \\mathbf{b}"></span> 为邻边的平行四边形的对角线向量。</p>
<p><strong>三角形法则：</strong> 将 <span class="formula-inline" data-latex="\\mathbf{b}"></span> 的起点放在 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 的终点，连接 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 的起点到 <span class="formula-inline" data-latex="\\mathbf{b}"></span> 的终点。</p>

<p><strong>运算律：</strong></p>
<ul>
  <li>交换律：<span class="formula-inline" data-latex="\\mathbf{a} + \\mathbf{b} = \\mathbf{b} + \\mathbf{a}"></span></li>
  <li>结合律：<span class="formula-inline" data-latex="(\\mathbf{a} + \\mathbf{b}) + \\mathbf{c} = \\mathbf{a} + (\\mathbf{b} + \\mathbf{c})"></span></li>
  <li>零向量：<span class="formula-inline" data-latex="\\mathbf{a} + \\mathbf{0} = \\mathbf{a}"></span></li>
  <li>相反向量：<span class="formula-inline" data-latex="\\mathbf{a} + (-\\mathbf{a}) = \\mathbf{0}"></span></li>
</ul>

<p><strong>（2）减法</strong></p>
<div class="formula-block" data-latex="\\mathbf{a} - \\mathbf{b} = \\mathbf{a} + (-\\mathbf{b})"></div>

<p><strong>（3）数乘</strong></p>
<p><span class="formula-inline" data-latex="\\lambda \\mathbf{a}"></span> 是向量 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 的数乘，其中 <span class="formula-inline" data-latex="\\lambda"></span> 是实数：</p>
<ul>
  <li><span class="formula-inline" data-latex="|\\lambda\\mathbf{a}| = |\\lambda| \\cdot |\\mathbf{a}|"></span></li>
  <li><span class="formula-inline" data-latex="\\lambda > 0"></span>：方向与 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 相同</li>
  <li><span class="formula-inline" data-latex="\\lambda < 0"></span>：方向与 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 相反</li>
</ul>

<h5>3. 空间直角坐标系</h5>

<p>在空间中取定一点 <span class="formula-inline" data-latex="O"></span>（原点）和三条互相垂直的数轴（<span class="formula-inline" data-latex="x, y, z"></span> 轴），构成<strong>空间直角坐标系</strong>。</p>

<p>空间中任意一点 <span class="formula-inline" data-latex="M"></span> 与有序三元组 <span class="formula-inline" data-latex="(x, y, z)"></span> 一一对应，称为点 <span class="formula-inline" data-latex="M"></span> 的<strong>坐标</strong>。</p>

<p><strong>坐标轴上的单位向量：</strong></p>
<div class="formula-block" data-latex="\\mathbf{i} = (1, 0, 0), \\quad \\mathbf{j} = (0, 1, 0), \\quad \\mathbf{k} = (0, 0, 1)"></div>

<p>任意向量 <span class="formula-inline" data-latex="\\mathbf{a} = (a_1, a_2, a_3)"></span> 可表示为</p>
<div class="formula-block" data-latex="\\mathbf{a} = a_1\\mathbf{i} + a_2\\mathbf{j} + a_3\\mathbf{k}"></div>

<h5>4. 利用坐标作向量的线性运算</h5>

<p>设 <span class="formula-inline" data-latex="\\mathbf{a} = (a_1, a_2, a_3)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (b_1, b_2, b_3)"></span>，则</p>

<div class="formula-block" data-latex="\\mathbf{a} + \\mathbf{b} = (a_1 + b_1, a_2 + b_2, a_3 + b_3)"></div>
<div class="formula-block" data-latex="\\mathbf{a} - \\mathbf{b} = (a_1 - b_1, a_2 - b_2, a_3 - b_3)"></div>
<div class="formula-block" data-latex="\\lambda \\mathbf{a} = (\\lambda a_1, \\lambda a_2, \\lambda a_3)"></div>

<h4>📘 例题 1：向量的线性运算</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 2, 3)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (4, 5, 6)"></span>，求 <span class="formula-inline" data-latex="2\\mathbf{a} - \\mathbf{b}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2\\mathbf{a} = (2, 4, 6)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2\\mathbf{a} - \\mathbf{b} = (2-4, 4-5, 6-6) = (-2, -1, 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="(-2, -1, 0)"></span></p>
</div>

<h5>5. 向量的模、方向角、投影</h5>

<p><strong>向量的模：</strong></p>
<div class="formula-block" data-latex="|\\mathbf{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2}"></div>

<p><strong>方向角与方向余弦：</strong></p>
<p>向量 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 与 <span class="formula-inline" data-latex="x, y, z"></span> 轴正方向的夹角 <span class="formula-inline" data-latex="\\alpha, \\beta, \\gamma"></span> 称为<strong>方向角</strong>，其余弦值称为<strong>方向余弦</strong>：</p>
<div class="formula-block" data-latex="\\cos\\alpha = \\frac{a_1}{|\\mathbf{a}|}, \\quad \\cos\\beta = \\frac{a_2}{|\\mathbf{a}|}, \\quad \\cos\\gamma = \\frac{a_3}{|\\mathbf{a}|}"></div>
<div class="formula-block" data-latex="\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1"></div>

<p><strong>投影：</strong> 向量 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 在向量 <span class="formula-inline" data-latex="\\mathbf{b}"></span> 方向上的投影为</p>
<div class="formula-block" data-latex="\\text{Prj}_{\\mathbf{b}} \\mathbf{a} = |\\mathbf{a}| \\cos\\theta"></div>
<p>其中 <span class="formula-inline" data-latex="\\theta"></span> 是两向量的夹角。</p>

<h4>📘 例题 2：求向量的模和方向余弦</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\mathbf{a} = (2, -1, 2)"></span>，求 <span class="formula-inline" data-latex="|\\mathbf{a}|"></span> 和方向余弦。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|\\mathbf{a}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\cos\\alpha = \\frac{2}{3}, \\quad \\cos\\beta = -\\frac{1}{3}, \\quad \\cos\\gamma = \\frac{2}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="|\\mathbf{a}| = 3</span>，方向余弦为 <span class="formula-inline" data-latex="\\left(\\frac{2}{3}, -\\frac{1}{3}, \\frac{2}{3}\\right)"></span></p>
</div>

<h4>📘 例题 3：向量共线</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 2, 3)"></span> 与 <span class="formula-inline" data-latex="\\mathbf{b} = (2, 4, 6)"></span> 是否共线。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\mathbf{b} = 2\\mathbf{a}"></span>，所以两向量共线（同向）。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 共线</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 向量及其线性运算是整个空间解析几何的基础。掌握向量的坐标表示、线性运算、模和方向余弦等基本概念，是后续学习数量积、向量积、平面和直线方程的必要前提。
  </p>
</div>
`;