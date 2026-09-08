window.SECTION_CONTENT = `
<h4>📐 空间直线及其方程</h4>

<p>空间直线是空间解析几何的另一个基本对象。与平面类似，直线也有多种方程形式，各有不同的几何含义和应用场景。</p>

<h5>1. 空间直线的一般方程</h5>

<p>空间直线可以看作两个平面的交线，因此其方程为</p>

<div class="formula-block" data-latex="\\begin{cases} A_1 x + B_1 y + C_1 z + D_1 = 0 \\\\ A_2 x + B_2 y + C_2 z + D_2 = 0 \\end{cases}"></div>

<p>这就是空间直线的<strong>一般方程</strong>（交面式）。</p>

<h5>2. 空间直线的对称式方程与参数方程</h5>

<p><strong>方向向量：</strong> 与直线平行的非零向量 <span class="formula-inline" data-latex="\\mathbf{s} = (m, n, p)"></span> 称为直线的<strong>方向向量</strong>。</p>

<p><strong>对称式方程（点向式）：</strong> 若直线过点 <span class="formula-inline" data-latex="M_0(x_0, y_0, z_0)"></span>，方向向量为 <span class="formula-inline" data-latex="\\mathbf{s} = (m, n, p)"></span>，则</p>

<div class="formula-block" data-latex="\\frac{x - x_0}{m} = \\frac{y - y_0}{n} = \\frac{z - z_0}{p}"></div>

<p><strong>参数方程：</strong> 令上式等于参数 <span class="formula-inline" data-latex="t"></span>，得</p>

<div class="formula-block" data-latex="\\begin{cases} x = x_0 + mt \\\\ y = y_0 + nt \\\\ z = z_0 + pt \\end{cases} \\quad (t \\in \\mathbb{R})"></div>

<h4>📘 例题 1：求直线的对称式方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求过点 <span class="formula-inline" data-latex="(1, 2, 3)"></span>，方向向量为 <span class="formula-inline" data-latex="\\mathbf{s} = (2, -1, 4)"></span> 的直线方程。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z - 3}{4}"></span>
  </p>
  
  <p>参数方程为：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} x = 1 + 2t \\\\ y = 2 - t \\\\ z = 3 + 4t \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{4}"></span></p>
</div>

<h4>📘 例题 2：一般方程化为对称式</h4>

<div class="example">
  <p><strong>题目：</strong> 将直线 <span class="formula-inline" data-latex="\\begin{cases} x + y + z = 1 \\\\ 2x - y + z = 2 \\end{cases}"></span> 化为对称式方程。</p>
  
  <p><strong>解：</strong></p>
  <p>两式相减：<span class="formula-inline" data-latex">x - 2y = 1 \\Rightarrow x = 2y + 1</span></p>
  <p>代入第一式：<span class="formula-inline" data-latex="2y+1 + y + z = 1 \\Rightarrow z = -3y"></span></p>
  <p>令 <span class="formula-inline" data-latex="y = t"></span>，得参数方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} x = 1 + 2t \\\\ y = t \\\\ z = -3t \\end{cases}"></span>
  </p>
  <p>取 <span class="formula-inline" data-latex="t=0"></span> 得点 <span class="formula-inline" data-latex="(1, 0, 0)"></span>，方向向量 <span class="formula-inline" data-latex="\\mathbf{s} = (2, 1, -3)"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>对称式：</strong> <span class="formula-inline" data-latex="\\frac{x-1}{2} = \\frac{y}{1} = \\frac{z}{-3}"></span></p>
</div>

<h5>3. 两直线的夹角</h5>

<p>两直线的夹角定义为它们方向向量之间的夹角。</p>

<p>设两直线的方向向量为 <span class="formula-inline" data-latex="\\mathbf{s}_1 = (m_1, n_1, p_1)"></span>，<span class="formula-inline" data-latex="\\mathbf{s}_2 = (m_2, n_2, p_2)"></span>，则</p>

<div class="formula-block" data-latex="\\cos\\theta = \\frac{|\\mathbf{s}_1 \\cdot \\mathbf{s}_2|}{|\\mathbf{s}_1| |\\mathbf{s}_2|}"></div>

<p><strong>平行与垂直：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="L_1 \\parallel L_2 \\Leftrightarrow \\mathbf{s}_1 \\parallel \\mathbf{s}_2"></span></li>
  <li><span class="formula-inline" data-latex="L_1 \\perp L_2 \\Leftrightarrow \\mathbf{s}_1 \\perp \\mathbf{s}_2"></span></li>
</ul>

<h4>📘 例题 3：两直线的夹角</h4>

<div class="example">
  <p><strong>题目：</strong> 求直线 <span class="formula-inline" data-latex="L_1: \\frac{x-1}{2} = \\frac{y}{1} = \\frac{z+1}{-1}"></span> 与 <span class="formula-inline" data-latex="L_2: \\frac{x}{1} = \\frac{y-1}{2} = \\frac{z}{1}"></span> 的夹角。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\mathbf{s}_1 = (2, 1, -1)"></span>，<span class="formula-inline" data-latex="\\mathbf{s}_2 = (1, 2, 1)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\cos\\theta = \\frac{|2\\cdot1 + 1\\cdot2 + (-1)\\cdot1|}{\\sqrt{4+1+1} \\cdot \\sqrt{1+4+1}} = \\frac{|2+2-1|}{6} = \\frac{3}{6} = \\frac{1}{2}"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\theta = \\arccos\\frac{1}{2} = \\frac{\\pi}{3}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{\\pi}{3}"></span></p>
</div>

<h5>4. 直线与平面的夹角</h5>

<p>直线与平面的夹角定义为直线方向向量与平面法向量之间夹角的余角。</p>

<p>设直线方向向量为 <span class="formula-inline" data-latex="\\mathbf{s} = (m, n, p)"></span>，平面法向量为 <span class="formula-inline" data-latex="\\mathbf{n} = (A, B, C)"></span>，则</p>

<div class="formula-block" data-latex="\\sin\\varphi = \\frac{|\\mathbf{s} \\cdot \\mathbf{n}|}{|\\mathbf{s}| |\\mathbf{n}|} = \\frac{|Am + Bn + Cp|}{\\sqrt{m^2+n^2+p^2} \\sqrt{A^2+B^2+C^2}}"></div>

<p><strong>平行与垂直：</strong></p>
<ul>
  <li><span class="formula-inline" data-latex="L \\parallel \\Pi \\Leftrightarrow \\mathbf{s} \\perp \\mathbf{n} \\Leftrightarrow \\mathbf{s} \\cdot \\mathbf{n} = 0"></span></li>
  <li><span class="formula-inline" data-latex="L \\perp \\Pi \\Leftrightarrow \\mathbf{s} \\parallel \\mathbf{n}"></span></li>
</ul>

<h4>📘 例题 4：直线与平面的夹角</h4>

<div class="example">
  <p><strong>题目：</strong> 求直线 <span class="formula-inline" data-latex="\\frac{x-1}{1} = \\frac{y}{2} = \\frac{z}{2}"></span> 与平面 <span class="formula-inline" data-latex="x + 2y - z = 1"></span> 的夹角。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="\\mathbf{s} = (1, 2, 2)"></span>，<span class="formula-inline" data-latex="\\mathbf{n} = (1, 2, -1)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sin\\varphi = \\frac{|1\\cdot1 + 2\\cdot2 + 2\\cdot(-1)|}{\\sqrt{1+4+4} \\cdot \\sqrt{1+4+1}} = \\frac{|1+4-2|}{3 \\cdot \\sqrt{6}} = \\frac{3}{3\\sqrt{6}} = \\frac{1}{\\sqrt{6}}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\varphi = \\arcsin\\frac{1}{\\sqrt{6}}"></span></p>
</div>

<h5>5. 杂例——过直线的平面方程</h5>

<p>过直线 <span class="formula-inline" data-latex="\\begin{cases} F_1(x,y,z)=0 \\\\ F_2(x,y,z)=0 \\end{cases}"></span> 的平面束方程为</p>

<div class="formula-block" data-latex="F_1(x,y,z) + \\lambda F_2(x,y,z) = 0"></div>

<h4>📘 例题 5：过直线的平面束</h4>

<div class="example">
  <p><strong>题目：</strong> 求过直线 <span class="formula-inline" data-latex="\\begin{cases} x + y + z = 1 \\\\ 2x - y + z = 2 \\end{cases}"></span> 且过点 <span class="formula-inline" data-latex="(0, 0, 0)"></span> 的平面方程。</p>
  
  <p><strong>解：</strong></p>
  <p>过直线的平面束：<span class="formula-inline" data-latex="(x+y+z-1) + \\lambda(2x-y+z-2) = 0"></span></p>
  <p>代入原点 <span class="formula-inline" data-latex="(0,0,0)"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(0+0+0-1) + \\lambda(0-0+0-2) = 0"></span>
  </p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="-1 - 2\\lambda = 0 \\Rightarrow \\lambda = -\\frac{1}{2}"></span>
  </p>
  <p>代入：<span class="formula-inline" data-latex="(x+y+z-1) - \\frac{1}{2}(2x-y+z-2) = 0"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="3y + z = 0"></span></p>
</div>

<h5>6. 空间直线方程总结</h5>

<table>
  <tr>
    <th>方程形式</th>
    <th>表达式</th>
    <th>适用情况</th>
  </tr>
  <tr>
    <td><strong>一般式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{cases} A_1x+B_1y+C_1z+D_1=0 \\\\ A_2x+B_2y+C_2z+D_2=0 \\end{cases}"></span></td>
    <td>两平面交线</td>
  </tr>
  <tr>
    <td><strong>对称式</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x-x_0}{m} = \\frac{y-y_0}{n} = \\frac{z-z_0}{p}"></span></td>
    <td>已知点和方向向量</td>
  </tr>
  <tr>
    <td><strong>参数式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{cases} x=x_0+mt \\\\ y=y_0+nt \\\\ z=z_0+pt \\end{cases}"></span></td>
    <td>最便于计算</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 空间直线的三种方程形式——一般式、对称式和参数式——各有优势。一般式便于从几何条件直接得到，对称式直观反映方向，参数式最便于计算点和方向。灵活掌握这三种形式的相互转化，是解决空间几何问题的关键。
  </p>
</div>
`;