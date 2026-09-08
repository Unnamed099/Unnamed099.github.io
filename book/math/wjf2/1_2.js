window.SECTION_CONTENT = `
<h4>📐 数量积 向量积 混合积</h4>

<p>向量的乘法运算有三种：数量积（点积）、向量积（叉积）和混合积。它们分别刻画了向量之间的不同几何关系，是空间解析几何的重要工具。</p>

<h5>1. 两向量的数量积（点积）</h5>

<p><strong>定义：</strong> 两个向量 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 和 <span class="formula-inline" data-latex="\\mathbf{b}"></span> 的<strong>数量积</strong>（点积）定义为</p>

<div class="formula-block" data-latex="\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}| |\\mathbf{b}| \\cos\\theta"></div>

<p>其中 <span class="formula-inline" data-latex="\\theta"></span> 是两向量之间的夹角 <span class="formula-inline" data-latex="(0 \\le \\theta \\le \\pi)"></span>。</p>

<p><strong>坐标表示：</strong> 若 <span class="formula-inline" data-latex="\\mathbf{a} = (a_1, a_2, a_3)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (b_1, b_2, b_3)"></span>，则</p>

<div class="formula-block" data-latex="\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3"></div>

<p><strong>性质：</strong></p>

<ul>
  <li><span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{a} = |\\mathbf{a}|^2"></span></li>
  <li><span class="formula-inline" data-latex="\\mathbf{a} \\perp \\mathbf{b} \\Leftrightarrow \\mathbf{a} \\cdot \\mathbf{b} = 0"></span>（垂直的充要条件）</li>
  <li>交换律：<span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b} = \\mathbf{b} \\cdot \\mathbf{a}"></span></li>
  <li>分配律：<span class="formula-inline" data-latex="\\mathbf{a} \\cdot (\\mathbf{b} + \\mathbf{c}) = \\mathbf{a} \\cdot \\mathbf{b} + \\mathbf{a} \\cdot \\mathbf{c}"></span></li>
</ul>

<div class="note">
  <strong>💡 几何意义：</strong>
  <p>• <span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b}"></span> 等于 <span class="formula-inline" data-latex="|\\mathbf{a}|"></span> 与 <span class="formula-inline" data-latex="\\mathbf{b}"></span> 在 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 上投影的乘积</p>
  <p>• 点积为零 ⇔ 两向量垂直</p>
  <p>• 用于计算夹角：<span class="formula-inline" data-latex="\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}| |\\mathbf{b}|}"></span></p>
</div>

<h4>📘 例题 1：计算数量积</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 2, 3)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (4, 5, 6)"></span>，求 <span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b}"></span> 和夹角余弦。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b} = 1 \\times 4 + 2 \\times 5 + 3 \\times 6 = 4 + 10 + 18 = 32"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|\\mathbf{a}| = \\sqrt{14}, \\quad |\\mathbf{b}| = \\sqrt{77}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\cos\\theta = \\frac{32}{\\sqrt{14} \\cdot \\sqrt{77}} = \\frac{32}{\\sqrt{1078}}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b} = 32</span>，<span class="formula-inline" data-latex="\\cos\\theta = \\frac{32}{\\sqrt{1078}}"></span></p>
</div>

<h4>📘 例题 2：利用点积判断垂直</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\mathbf{a} = (1, -1, 2)"></span> 与 <span class="formula-inline" data-latex="\\mathbf{b} = (2, 2, 0)"></span> 是否垂直。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b} = 1 \\times 2 + (-1) \\times 2 + 2 \\times 0 = 2 - 2 + 0 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="\\mathbf{a} \\perp \\mathbf{b}"></span></p>
</div>

<h5>2. 两向量的向量积（叉积）</h5>

<p><strong>定义：</strong> 两个向量 <span class="formula-inline" data-latex="\\mathbf{a}"></span> 和 <span class="formula-inline" data-latex="\\mathbf{b}"></span> 的<strong>向量积</strong>（叉积）定义为</p>

<div class="formula-block" data-latex="\\mathbf{a} \\times \\mathbf{b} = |\\mathbf{a}| |\\mathbf{b}| \\sin\\theta \\, \\mathbf{e}_n"></div>

<p>其中 <span class="formula-inline" data-latex="\\mathbf{e}_n"></span> 是垂直于 <span class="formula-inline" data-latex="\\mathbf{a}, \\mathbf{b}"></span> 所在平面的单位向量，方向由<strong>右手法则</strong>确定。</p>

<p><strong>坐标表示：</strong></p>

<div class="formula-block" data-latex="\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix} = (a_2 b_3 - a_3 b_2, a_3 b_1 - a_1 b_3, a_1 b_2 - a_2 b_1)"></div>

<p><strong>性质：</strong></p>

<ul>
  <li><span class="formula-inline" data-latex="\\mathbf{a} \\times \\mathbf{b} = -\\mathbf{b} \\times \\mathbf{a}"></span>（反交换律）</li>
  <li><span class="formula-inline" data-latex="\\mathbf{a} \\times \\mathbf{a} = \\mathbf{0}"></span></li>
  <li><span class="formula-inline" data-latex="\\mathbf{a} \\parallel \\mathbf{b} \\Leftrightarrow \\mathbf{a} \\times \\mathbf{b} = \\mathbf{0}"></span>（平行的充要条件）</li>
  <li><span class="formula-inline" data-latex="|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}| |\\mathbf{b}| \\sin\\theta"></span> 等于以 <span class="formula-inline" data-latex="\\mathbf{a}, \\mathbf{b}"></span> 为邻边的平行四边形面积</li>
</ul>

<h4>📘 例题 3：计算向量积</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 0, 0)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (0, 1, 0)"></span>，求 <span class="formula-inline" data-latex="\\mathbf{a} \\times \\mathbf{b}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{vmatrix} = \\mathbf{k} = (0, 0, 1)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="(0, 0, 1)"></span></p>
</div>

<h4>📘 例题 4：向量积的几何应用</h4>

<div class="example">
  <p><strong>题目：</strong> 求以 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 2, 3)"></span> 和 <span class="formula-inline" data-latex="\\mathbf{b} = (2, -1, 1)"></span> 为邻边的平行四边形面积。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ 1 & 2 & 3 \\\\ 2 & -1 & 1 \\end{vmatrix} = (2\\times1 - 3\\times(-1), 3\\times2 - 1\\times1, 1\\times(-1) - 2\\times2) = (5, 5, -5)"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="S = |\\mathbf{a} \\times \\mathbf{b}| = \\sqrt{25 + 25 + 25} = 5\\sqrt{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="5\\sqrt{3}"></span></p>
</div>

<h5>3. 向量的混合积</h5>

<p><strong>定义：</strong> 三个向量 <span class="formula-inline" data-latex="\\mathbf{a}, \\mathbf{b}, \\mathbf{c}"></span> 的<strong>混合积</strong>定义为</p>

<div class="formula-block" data-latex="(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = \\begin{vmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{vmatrix}"></div>

<p><strong>几何意义：</strong> 混合积的绝对值等于以 <span class="formula-inline" data-latex="\\mathbf{a}, \\mathbf{b}, \\mathbf{c}"></span> 为棱的平行六面体的体积。</p>

<p><strong>性质：</strong></p>

<ul>
  <li><span class="formula-inline" data-latex="\\mathbf{a}, \\mathbf{b}, \\mathbf{c}"></span> 共面 <span class="formula-inline" data-latex="\\Leftrightarrow (\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = 0"></span></li>
  <li>循环置换不变：<span class="formula-inline" data-latex="(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = (\\mathbf{b} \\times \\mathbf{c}) \\cdot \\mathbf{a} = (\\mathbf{c} \\times \\mathbf{a}) \\cdot \\mathbf{b}"></span></li>
</ul>

<h4>📘 例题 5：计算混合积</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 0, 0)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (0, 1, 0)"></span>，<span class="formula-inline" data-latex="\\mathbf{c} = (0, 0, 1)"></span>，求 <span class="formula-inline" data-latex="(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = \\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{vmatrix} = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="1"></span></p>
</div>

<h4>📘 例题 6：利用混合积判断共面</h4>

<div class="example">
  <p><strong>题目：</strong> 判断 <span class="formula-inline" data-latex="\\mathbf{a} = (1, 2, 3)"></span>，<span class="formula-inline" data-latex="\\mathbf{b} = (2, 4, 6)"></span>，<span class="formula-inline" data-latex="\\mathbf{c} = (3, 6, 9)"></span> 是否共面。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c} = \\begin{vmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\end{vmatrix} = 0"></span>
  </p>
  <p>（因为第二行和第三行成比例）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 三向量共面</p>
</div>

<h5>4. 三种乘积总结</h5>

<table>
  <tr>
    <th>类型</th>
    <th>记法</th>
    <th>结果</th>
    <th>几何意义</th>
    <th>应用</th>
  </tr>
  <tr>
    <td><strong>数量积</strong></td>
    <td><span class="formula-inline" data-latex="\\mathbf{a} \\cdot \\mathbf{b}"></span></td>
    <td>标量</td>
    <td>投影</td>
    <td>求夹角、判断垂直</td>
  </tr>
  <tr>
    <td><strong>向量积</strong></td>
    <td><span class="formula-inline" data-latex="\\mathbf{a} \\times \\mathbf{b}"></span></td>
    <td>向量</td>
    <td>面积</td>
    <td>求法向量、判断平行</td>
  </tr>
  <tr>
    <td><strong>混合积</strong></td>
    <td><span class="formula-inline" data-latex="(\\mathbf{a} \\times \\mathbf{b}) \\cdot \\mathbf{c}"></span></td>
    <td>标量</td>
    <td>体积</td>
    <td>判断共面</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 数量积、向量积和混合积是向量代数的三种基本乘法运算。数量积用于计算投影和夹角，向量积用于求面积和法向量，混合积用于判断共面性和求体积。它们构成了空间解析几何计算的基础工具。
  </p>
</div>
`;