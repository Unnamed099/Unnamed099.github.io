window.SECTION_CONTENT = `
<h4>📐 平面及其方程</h4>

<p>平面是空间中最基本的曲面。在向量代数的基础上，我们可以用代数方程精确描述平面的位置和方向。</p>

<h5>1. 曲面方程与空间曲线方程的概念</h5>

<p><strong>曲面方程：</strong> 若曲面 <span class="formula-inline" data-latex="S"></span> 上任意一点的坐标 <span class="formula-inline" data-latex="(x, y, z)"></span> 都满足方程 <span class="formula-inline" data-latex="F(x, y, z) = 0"></span>，且不在 <span class="formula-inline" data-latex="S"></span> 上的点不满足该方程，则称该方程为曲面的方程。</p>

<p><strong>空间曲线：</strong> 空间曲线可看作两个曲面的交线，因此其方程为</p>
<div class="formula-block" data-latex="\\begin{cases} F_1(x, y, z) = 0 \\\\ F_2(x, y, z) = 0 \\end{cases}"></div>

<h5>2. 平面的点法式方程</h5>

<p><strong>定义：</strong> 若平面过点 <span class="formula-inline" data-latex="M_0(x_0, y_0, z_0)"></span>，且法向量为 <span class="formula-inline" data-latex="\\mathbf{n} = (A, B, C)"></span>，则平面上任意点 <span class="formula-inline" data-latex="M(x, y, z)"></span> 满足 <span class="formula-inline" data-latex="\\overrightarrow{M_0M} \\perp \\mathbf{n}"></span>，即</p>

<div class="formula-block" data-latex="A(x - x_0) + B(y - y_0) + C(z - z_0) = 0"></div>

<p>这就是平面的<strong>点法式方程</strong>。</p>

<h4>📘 例题 1：求平面的点法式方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求过点 <span class="formula-inline" data-latex="(1, 2, 3)"></span>，法向量为 <span class="formula-inline" data-latex="\\mathbf{n} = (2, -1, 3)"></span> 的平面方程。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2(x - 1) - 1(y - 2) + 3(z - 3) = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2x - 2 - y + 2 + 3z - 9 = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="2x - y + 3z - 9 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="2x - y + 3z - 9 = 0"></span></p>
</div>

<h5>3. 平面的一般方程</h5>

<p>将点法式方程展开，得到</p>

<div class="formula-block" data-latex="Ax + By + Cz + D = 0"></div>

<p>其中 <span class="formula-inline" data-latex="A, B, C"></span> 不全为 0。这就是平面的<strong>一般方程</strong>。</p>

<p><strong>特殊情况：</strong></p>

<table>
  <tr>
    <th>条件</th>
    <th>平面位置</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="D = 0"></span></td>
    <td>过原点</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="A = 0"></span></td>
    <td>平行于 <span class="formula-inline" data-latex="x"></span> 轴</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="B = 0"></span></td>
    <td>平行于 <span class="formula-inline" data-latex="y"></span> 轴</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="C = 0"></span></td>
    <td>平行于 <span class="formula-inline" data-latex="z"></span> 轴</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="A = B = 0"></span></td>
    <td>平行于 <span class="formula-inline" data-latex="xOy"></span> 平面（水平面）</td>
  </tr>
</table>

<h4>📘 例题 2：求过三点的平面方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求过 <span class="formula-inline" data-latex="(1, 0, 0), (0, 1, 0), (0, 0, 1)"></span> 三点的平面方程。</p>
  
  <p><strong>解：</strong></p>
  <p>设平面方程为 <span class="formula-inline" data-latex="x + y + z = 1"></span>（截距式）</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="x + y + z = 1"></span></p>
</div>

<h5>4. 两平面的夹角</h5>

<p>两平面的<strong>夹角</strong>定义为它们的法向量之间的夹角。</p>

<p>设平面 <span class="formula-inline" data-latex="\\Pi_1: A_1 x + B_1 y + C_1 z + D_1 = 0"></span>，<span class="formula-inline" data-latex="\\Pi_2: A_2 x + B_2 y + C_2 z + D_2 = 0"></span>，法向量分别为 <span class="formula-inline" data-latex="\\mathbf{n}_1 = (A_1, B_1, C_1)"></span>，<span class="formula-inline" data-latex="\\mathbf{n}_2 = (A_2, B_2, C_2)"></span>，则</p>

<div class="formula-block" data-latex="\\cos\\theta = \\frac{|\\mathbf{n}_1 \\cdot \\mathbf{n}_2|}{|\\mathbf{n}_1| |\\mathbf{n}_2|} = \\frac{|A_1 A_2 + B_1 B_2 + C_1 C_2|}{\\sqrt{A_1^2 + B_1^2 + C_1^2} \\sqrt{A_2^2 + B_2^2 + C_2^2}}"></div>

<h4>📘 例题 3：求两平面的夹角</h4>

<div class="example">
  <p><strong>题目：</strong> 求平面 <span class="formula-inline" data-latex="x + y + z = 1"></span> 与 <span class="formula-inline" data-latex="x - y + z = 2"></span> 的夹角。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\mathbf{n}_1 = (1, 1, 1)"></span>，<span class="formula-inline" data-latex="\\mathbf{n}_2 = (1, -1, 1)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\cos\\theta = \\frac{|1\\cdot1 + 1\\cdot(-1) + 1\\cdot1|}{\\sqrt{3} \\cdot \\sqrt{3}} = \\frac{|1 - 1 + 1|}{3} = \\frac{1}{3}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\theta = \\arccos\\frac{1}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\arccos\\frac{1}{3}"></span></p>
</div>

<h5>5. 点到平面的距离</h5>

<p>点 <span class="formula-inline" data-latex="P(x_0, y_0, z_0)"></span> 到平面 <span class="formula-inline" data-latex="Ax + By + Cz + D = 0"></span> 的距离为</p>

<div class="formula-block" data-latex="d = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}"></div>

<h4>📘 例题 4：点到平面的距离</h4>

<div class="example">
  <p><strong>题目：</strong> 求点 <span class="formula-inline" data-latex="(1, 1, 1)"></span> 到平面 <span class="formula-inline" data-latex="x + y + z = 1"></span> 的距离。</p>
  
  <p><strong>解：</strong></p>
  <p>将平面化为 <span class="formula-inline" data-latex="x + y + z - 1 = 0"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="d = \\frac{|1 + 1 + 1 - 1|}{\\sqrt{1^2 + 1^2 + 1^2}} = \\frac{2}{\\sqrt{3}}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{2}{\\sqrt{3}}"></span></p>
</div>

<h5>6. 平面方程总结</h5>

<table>
  <tr>
    <th>方程形式</th>
    <th>表达式</th>
    <th>适用情况</th>
  </tr>
  <tr>
    <td><strong>点法式</strong></td>
    <td><span class="formula-inline" data-latex="A(x-x_0)+B(y-y_0)+C(z-z_0)=0"></span></td>
    <td>已知点和法向量</td>
  </tr>
  <tr>
    <td><strong>一般式</strong></td>
    <td><span class="formula-inline" data-latex="Ax+By+Cz+D=0"></span></td>
    <td>最常用</td>
  </tr>
  <tr>
    <td><strong>截距式</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x}{a}+\\frac{y}{b}+\\frac{z}{c}=1"></span></td>
    <td>已知三个截距</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 平面方程是空间解析几何的基础内容。点法式方程直接反映了平面的几何特征，一般方程则便于代数运算。掌握平面方程的三种形式及其相互转化，是解决空间几何问题的关键。
  </p>
</div>
`;