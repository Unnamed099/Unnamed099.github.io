window.SECTION_CONTENT = `
<h4>📐 空间曲线及其方程</h4>

<p>空间曲线可以看作两个曲面的交线，也可以用参数方程来描述。空间曲线在坐标面上的投影是研究空间曲线的重要方法。</p>

<h5>1. 空间曲线的一般方程</h5>

<p>空间曲线可看作两个曲面的交线，其<strong>一般方程</strong>为</p>

<div class="formula-block" data-latex="\\begin{cases} F_1(x, y, z) = 0 \\\\ F_2(x, y, z) = 0 \\end{cases}"></div>

<p>例如，圆柱面 <span class="formula-inline" data-latex="x^2 + y^2 = 1"></span> 与平面 <span class="formula-inline" data-latex="z = 0"></span> 的交线是圆。</p>

<h4>📘 例题 1：空间曲线的一般方程</h4>

<div class="example">
  <p><strong>题目：</strong> 写出球面 <span class="formula-inline" data-latex="x^2 + y^2 + z^2 = 1"></span> 与平面 <span class="formula-inline" data-latex="z = 0"></span> 的交线方程。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} x^2 + y^2 + z^2 = 1 \\\\ z = 0 \\end{cases} \\Rightarrow \\begin{cases} x^2 + y^2 = 1 \\\\ z = 0 \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 圆 <span class="formula-inline" data-latex="x^2 + y^2 = 1</span>，在 <span class="formula-inline" data-latex="z = 0"></span> 平面上</p>
</div>

<h5>2. 空间曲线的参数方程</h5>

<p>空间曲线的<strong>参数方程</strong>为</p>

<div class="formula-block" data-latex="\\begin{cases} x = x(t) \\\\ y = y(t) \\\\ z = z(t) \\end{cases} \\quad (t \\in I)"></div>

<p>其中 <span class="formula-inline" data-latex="t"></span> 为参数。</p>

<h4>📘 例题 2：螺旋线的参数方程</h4>

<div class="example">
  <p><strong>题目：</strong> 写出圆柱螺旋线 <span class="formula-inline" data-latex="x^2 + y^2 = a^2"></span> 上，随 <span class="formula-inline" data-latex="z"></span> 均匀上升的点的轨迹的参数方程。</p>
  
  <p><strong>解：</strong></p>
  <p>在 <span class="formula-inline" data-latex="xOy"></span> 平面上沿圆运动，同时 <span class="formula-inline" data-latex="z"></span> 均匀增加。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} x = a\\cos t \\\\ y = a\\sin t \\\\ z = bt \\end{cases} \\quad (t \\ge 0)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 螺旋线参数方程如上</p>
</div>

<h5>3. 空间曲线在坐标面上的投影</h5>

<p><strong>定义：</strong> 空间曲线 <span class="formula-inline" data-latex="C"></span> 上的所有点在某个坐标面上的投影所组成的曲线，称为 <span class="formula-inline" data-latex="C"></span> 在该坐标面上的<strong>投影曲线</strong>。</p>

<p><strong>求法：</strong> 从曲线的一般方程中消去一个变量，得到该变量对应的坐标面上的投影柱面方程。</p>

<h4>📘 例题 3：求投影曲线</h4>

<div class="example">
  <p><strong>题目：</strong> 求曲线 <span class="formula-inline" data-latex="\\begin{cases} x^2 + y^2 + z^2 = 4 \\\\ z = 1 \\end{cases}"></span> 在 <span class="formula-inline" data-latex="xOy"></span> 平面上的投影。</p>
  
  <p><strong>解：</strong></p>
  <p>代入 <span class="formula-inline" data-latex="z = 1"></span> 到球面方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x^2 + y^2 + 1 = 4 \\Rightarrow x^2 + y^2 = 3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 在 <span class="formula-inline" data-latex="xOy"></span> 平面上的投影为圆 <span class="formula-inline" data-latex="x^2 + y^2 = 3"></span></p>
</div>

<h4>📘 例题 4：投影柱面</h4>

<div class="example">
  <p><strong>题目：</strong> 求曲线 <span class="formula-inline" data-latex="\\begin{cases} x^2 + y^2 = 1 \\\\ x + z = 1 \\end{cases}"></span> 在 <span class="formula-inline" data-latex="xOy"></span> 平面上的投影。</p>
  
  <p><strong>解：</strong></p>
  <p>从 <span class="formula-inline" data-latex="x + z = 1"></span> 中消去 <span class="formula-inline" data-latex="z"></span>，但投影到 <span class="formula-inline" data-latex="xOy"></span> 平面只需要保留 <span class="formula-inline" data-latex="x, y"></span>。</p>
  <p>曲线在 <span class="formula-inline" data-latex="xOy"></span> 平面上的投影为：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x^2 + y^2 = 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 单位圆 <span class="formula-inline" data-latex="x^2 + y^2 = 1"></span></p>
</div>

<h4>📘 例题 5：投影曲线的方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求曲线 <span class="formula-inline" data-latex="\\begin{cases} x^2 + y^2 + z^2 = 1 \\\\ y = x \\end{cases}"></span> 在 <span class="formula-inline" data-latex="xOz"></span> 平面上的投影。</p>
  
  <p><strong>解：</strong></p>
  <p>将 <span class="formula-inline" data-latex="y = x"></span> 代入球面方程：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="x^2 + x^2 + z^2 = 1 \\Rightarrow 2x^2 + z^2 = 1"></span>
  </p>
  <p>投影到 <span class="formula-inline" data-latex="xOz"></span> 平面，<span class="formula-inline" data-latex="y = 0"></span>：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\begin{cases} 2x^2 + z^2 = 1 \\\\ y = 0 \\end{cases}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 椭圆 <span class="formula-inline" data-latex="2x^2 + z^2 = 1</span>，在 <span class="formula-inline" data-latex="xOz"></span> 平面上</p>
</div>

<h5>4. 空间曲线投影的应用</h5>

<p>空间曲线的投影在工程制图、曲面相交、可视化计算中有重要应用。常见问题包括：</p>

<ul>
  <li>求两曲面交线在坐标面上的投影</li>
  <li>求空间曲线在任意平面上的投影</li>
  <li>利用投影研究曲线的性质</li>
</ul>

<h5>5. 空间曲线方程总结</h5>

<table>
  <tr>
    <th>方程形式</th>
    <th>表达式</th>
    <th>特点</th>
  </tr>
  <tr>
    <td><strong>一般式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{cases} F_1(x,y,z)=0 \\\\ F_2(x,y,z)=0 \\end{cases}"></span></td>
    <td>两个曲面的交线</td>
  </tr>
  <tr>
    <td><strong>参数式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{cases} x=x(t) \\\\ y=y(t) \\\\ z=z(t) \\end{cases}"></span></td>
    <td>便于计算和绘制</td>
  </tr>
  <tr>
    <td><strong>投影式</strong></td>
    <td><span class="formula-inline" data-latex="\\begin{cases} f(x,y)=0 \\\\ z=\\varphi(x,y) \\end{cases}"></span></td>
    <td>投影柱面 + 高度</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 空间曲线及其投影是空间解析几何的重要内容。一般方程和参数方程是描述空间曲线的两种基本方式，而投影则是将三维问题转化为二维问题的重要方法。这些知识在计算机图形学、工程制图和物理学中有着广泛的应用。
  </p>
</div>
`;