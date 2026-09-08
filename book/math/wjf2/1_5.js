window.SECTION_CONTENT = `
<h4>📐 曲面及其方程</h4>

<p>曲面是空间解析几何研究的另一类重要对象。柱面、旋转曲面和二次曲面是常见的三种曲面类型。</p>

<h5>1. 曲面研究的基本问题</h5>

<p>（1）已知曲面的几何特征，建立其方程。</p>
<p>（2）已知曲面的方程，研究其几何形状和性质。</p>

<p>曲面方程的一般形式为 <span class="formula-inline" data-latex="F(x, y, z) = 0"></span>。</p>

<h5>2. 旋转曲面</h5>

<p><strong>定义：</strong> 一条平面曲线绕该平面上的一条定直线旋转一周所形成的曲面称为<strong>旋转曲面</strong>，定直线称为<strong>轴</strong>。</p>

<p><strong>求法：</strong> 若曲线 <span class="formula-inline" data-latex="C: \\begin{cases} f(y, z) = 0 \\\\ x = 0 \\end{cases}"></span> 绕 <span class="formula-inline" data-latex="z"></span> 轴旋转，则所得旋转曲面方程为</p>

<div class="formula-block" data-latex="f(\\pm\\sqrt{x^2 + y^2}, z) = 0"></div>

<h4>📘 例题 1：旋转曲面</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="yOz"></span> 平面上的抛物线 <span class="formula-inline" data-latex="z = y^2"></span> 绕 <span class="formula-inline" data-latex="z"></span> 轴旋转所得曲面方程。</p>
  
  <p><strong>解：</strong></p>
  <p>曲线在 <span class="formula-inline" data-latex="yOz"></span> 平面上，<span class="formula-inline" data-latex="x = 0"></span>，<span class="formula-inline" data-latex="z = y^2"></span>。</p>
  <p>绕 <span class="formula-inline" data-latex="z"></span> 轴旋转，<span class="formula-inline" data-latex="y"></span> 变为 <span class="formula-inline" data-latex="\\pm\\sqrt{x^2 + y^2}"></span>。</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="z = x^2 + y^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="z = x^2 + y^2"></span>（旋转抛物面）</p>
</div>

<h5>3. 柱面</h5>

<p><strong>定义：</strong> 一条直线 <span class="formula-inline" data-latex="L"></span> 沿一条定曲线 <span class="formula-inline" data-latex="C"></span> 平行移动所形成的曲面称为<strong>柱面</strong>。</p>

<ul>
  <li><strong>准线</strong>：定曲线 <span class="formula-inline" data-latex="C"></span></li>
  <li><strong>母线</strong>：平行移动的直线 <span class="formula-inline" data-latex="L"></span></li>
</ul>

<p><strong>常见柱面：</strong></p>

<table>
  <tr>
    <th>柱面类型</th>
    <th>方程</th>
    <th>母线方向</th>
  </tr>
  <tr>
    <td><strong>圆柱面</strong></td>
    <td><span class="formula-inline" data-latex="x^2 + y^2 = R^2"></span></td>
    <td><span class="formula-inline" data-latex="z"></span> 轴方向</td>
  </tr>
  <tr>
    <td><strong>椭圆柱面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1"></span></td>
    <td><span class="formula-inline" data-latex="z"></span> 轴方向</td>
  </tr>
  <tr>
    <td><strong>抛物柱面</strong></td>
    <td><span class="formula-inline" data-latex="y^2 = 2px"></span></td>
    <td><span class="formula-inline" data-latex="z"></span> 轴方向</td>
  </tr>
  <tr>
    <td><strong>双曲柱面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1"></span></td>
    <td><span class="formula-inline" data-latex="z"></span> 轴方向</td>
  </tr>
</table>

<h4>📘 例题 2：柱面识别</h4>

<div class="example">
  <p><strong>题目：</strong> 方程 <span class="formula-inline" data-latex="x^2 + y^2 = 4"></span> 在空间中表示什么曲面？</p>
  
  <p><strong>解：</strong></p>
  <p>在 <span class="formula-inline" data-latex="xOy"></span> 平面上是圆 <span class="formula-inline" data-latex="x^2 + y^2 = 4"></span>，在空间中缺少 <span class="formula-inline" data-latex="z"></span> 的限制，因此母线平行于 <span class="formula-inline" data-latex="z"></span> 轴，是<strong>圆柱面</strong>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 圆柱面（半径 2，母线平行于 <span class="formula-inline" data-latex="z"></span> 轴）</p>
</div>

<h5>4. 二次曲面</h5>

<p>二次曲面是三元二次方程 <span class="formula-inline" data-latex="Ax^2 + By^2 + Cz^2 + Dxy + Exz + Fyz + Gx + Hy + Iz + J = 0"></span> 表示的曲面。</p>

<p><strong>常见二次曲面：</strong></p>

<table>
  <tr>
    <th>曲面名称</th>
    <th>标准方程</th>
    <th>图像特征</th>
  </tr>
  <tr>
    <td><strong>椭球面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} + \\frac{z^2}{c^2} = 1"></span></td>
    <td>类似椭球</td>
  </tr>
  <tr>
    <td><strong>单叶双曲面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = 1"></span></td>
    <td>单叶连续曲面</td>
  </tr>
  <tr>
    <td><strong>双叶双曲面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} - \\frac{z^2}{c^2} = -1"></span></td>
    <td>两叶分离</td>
  </tr>
  <tr>
    <td><strong>椭圆抛物面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 2z"></span></td>
    <td>碗状开口向上</td>
  </tr>
  <tr>
    <td><strong>双曲抛物面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 2z"></span></td>
    <td>马鞍面</td>
  </tr>
  <tr>
    <td><strong>二次锥面</strong></td>
    <td><span class="formula-inline" data-latex="\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = \\frac{z^2}{c^2}"></span></td>
    <td>圆锥面</td>
  </tr>
</table>

<h4>📘 例题 3：识别二次曲面</h4>

<div class="example">
  <p><strong>题目：</strong> 指出 <span class="formula-inline" data-latex="\\frac{x^2}{4} + \\frac{y^2}{9} - \\frac{z^2}{16} = 1"></span> 是什么曲面。</p>
  
  <p><strong>解：</strong></p>
  <p>两个平方项系数为正，一个为负，且右边为 1。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 单叶双曲面</p>
</div>

<h4>📘 例题 4：截痕法分析曲面</h4>

<div class="example">
  <p><strong>题目：</strong> 分析 <span class="formula-inline" data-latex="z = x^2 + y^2"></span> 的形状。</p>
  
  <p><strong>解：</strong></p>
  <p>用 <span class="formula-inline" data-latex="z = c"></span> 截：<span class="formula-inline" data-latex="x^2 + y^2 = c"></span>，当 <span class="formula-inline" data-latex="c > 0"></span> 是圆，<span class="formula-inline" data-latex="c = 0"></span> 是点，<span class="formula-inline" data-latex="c < 0"></span> 无图形。</p>
  <p>用 <span class="formula-inline" data-latex="x = 0"></span> 截：<span class="formula-inline" data-latex="z = y^2"></span> 是抛物线。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 旋转抛物面（碗状开口向上）</p>
</div>

<h5>5. 曲面的截痕法</h5>

<p>研究曲面的常用方法是<strong>截痕法</strong>：用平行于坐标面的平面去截曲面，观察截口曲线的形状，从而推断曲面的整体形状。</p>

<ul>
  <li>用 <span class="formula-inline" data-latex="z = c"></span> 截：水平截痕</li>
  <li>用 <span class="formula-inline" data-latex="x = c"></span> 截：垂直截痕</li>
  <li>用 <span class="formula-inline" data-latex="y = c"></span> 截：垂直截痕</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 曲面是空间解析几何的重要研究对象。旋转曲面、柱面和二次曲面是三种基本曲面类型。通过截痕法可以直观地理解曲面的几何形状。掌握这些基本曲面的方程和特征，是进一步学习多元微积分的基础。
  </p>
</div>
`;