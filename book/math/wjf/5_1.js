window.SECTION_CONTENT = `
<h4>📐 定积分的概念与性质</h4>

<p>不定积分解决的是"已知导数求原函数"的问题，而定积分解决的是"求曲线与坐标轴所围图形的面积"的问题。两者通过牛顿-莱布尼茨公式紧密联系在一起，构成积分学的完整体系。</p>

<h5>1. 定积分问题举例</h5>

<p><strong>问题：</strong> 求由曲线 <span class="formula-inline" data-latex="y = f(x)"></span>、<span class="formula-inline" data-latex="x"></span> 轴、直线 <span class="formula-inline" data-latex="x = a"></span> 和 <span class="formula-inline" data-latex="x = b"></span> 所围成的曲边梯形的面积。</p>

<p><strong>求解思路：</strong> 以直代曲，用矩形面积近似代替曲边梯形面积。</p>

<ul>
  <li><strong>分割：</strong> 将区间 <span class="formula-inline" data-latex="[a, b]"></span> 分为 <span class="formula-inline" data-latex="n"></span> 个小区间</li>
  <li><strong>近似：</strong> 在每个小区间上用矩形面积近似代替曲边梯形面积</li>
  <li><strong>求和：</strong> 将所有矩形面积相加</li>
  <li><strong>取极限：</strong> 当 <span class="formula-inline" data-latex="n \\to \\infty"></span> 时，和式的极限即为曲边梯形的面积</li>
</ul>

<!-- 定积分几何意义示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="integralCanvas" width="520" height="360" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<h5>2. 定积分的定义</h5>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="[a, b]"></span> 上有定义，在 <span class="formula-inline" data-latex="[a, b]"></span> 中任意插入 <span class="formula-inline" data-latex="n-1"></span> 个分点</p>

<div class="formula-block" data-latex="a = x_0 < x_1 < x_2 < \\cdots < x_{n-1} < x_n = b"></div>

<p>将 <span class="formula-inline" data-latex="[a, b]"></span> 分成 <span class="formula-inline" data-latex="n"></span> 个小区间 <span class="formula-inline" data-latex="[x_{i-1}, x_i]"></span>，长度记为 <span class="formula-inline" data-latex="\\Delta x_i = x_i - x_{i-1}"></span>。</p>

<p>在每个小区间上任取一点 <span class="formula-inline" data-latex="\\xi_i \\in [x_{i-1}, x_i]"></span>，作和式</p>

<div class="formula-block" data-latex="\\sum_{i=1}^{n} f(\\xi_i) \\Delta x_i"></div>

<p>记 <span class="formula-inline" data-latex="\\lambda = \\max\\{\\Delta x_1, \\Delta x_2, \\cdots, \\Delta x_n\\}"></span>。若当 <span class="formula-inline" data-latex="\\lambda \\to 0"></span> 时，上述和式的极限存在，则称此极限为 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="[a, b]"></span> 上的<strong>定积分</strong>，记作</p>

<div class="formula-block" data-latex="\\int_a^b f(x) dx = \\lim_{\\lambda \\to 0} \\sum_{i=1}^{n} f(\\xi_i) \\Delta x_i"></div>

<p>其中 <span class="formula-inline" data-latex="a"></span> 称为<strong>积分下限</strong>，<span class="formula-inline" data-latex="b"></span> 称为<strong>积分上限</strong>，<span class="formula-inline" data-latex="f(x)"></span> 称为<strong>被积函数</strong>，<span class="formula-inline" data-latex="x"></span> 称为<strong>积分变量</strong>。</p>

<div class="note">
  <strong>💡 关键理解：</strong>
  <p>• 定积分是一个<strong>数</strong>，而不定积分是一族<strong>函数</strong></p>
  <p>• 定积分与积分变量无关：<span class="formula-inline" data-latex="\\int_a^b f(x) dx = \\int_a^b f(t) dt"></span></p>
  <p>• 定积分存在的充分条件：<span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上连续（或只有有限个第一类间断点）</p>
</div>

<h5>3. 定积分的几何意义</h5>

<ul>
  <li>当 <span class="formula-inline" data-latex="f(x) \\ge 0"></span> 时，<span class="formula-inline" data-latex="\\int_a^b f(x) dx"></span> 等于曲线 <span class="formula-inline" data-latex="y=f(x)"></span> 与 <span class="formula-inline" data-latex="x"></span> 轴之间曲边梯形的<strong>面积</strong></li>
  <li>当 <span class="formula-inline" data-latex="f(x) \\le 0"></span> 时，<span class="formula-inline" data-latex="\\int_a^b f(x) dx</span> 等于面积的<strong>负值</strong></li>
  <li>当 <span class="formula-inline" data-latex="f(x)"></span> 有正有负时，定积分等于 <span class="formula-inline" data-latex="x"></span> 轴上方面积减去下方面积</li>
</ul>

<h5>4. 定积分的性质</h5>

<p><strong>性质 1（线性性质）：</strong></p>
<div class="formula-block" data-latex="\\int_a^b [f(x) \\pm g(x)] dx = \\int_a^b f(x) dx \\pm \\int_a^b g(x) dx"></div>
<div class="formula-block" data-latex="\\int_a^b k f(x) dx = k \\int_a^b f(x) dx \\quad (k \\text{ 为常数})"></div>

<p><strong>性质 2（区间可加性）：</strong></p>
<div class="formula-block" data-latex="\\int_a^b f(x) dx = \\int_a^c f(x) dx + \\int_c^b f(x) dx \\quad (a < c < b)"></div>

<p><strong>性质 3（保序性）：</strong> 若在 <span class="formula-inline" data-latex="[a, b]"></span> 上 <span class="formula-inline" data-latex="f(x) \\le g(x)"></span>，则</p>
<div class="formula-block" data-latex="\\int_a^b f(x) dx \\le \\int_a^b g(x) dx"></div>

<p><strong>性质 4（估值定理）：</strong> 若 <span class="formula-inline" data-latex="m \\le f(x) \\le M"></span>，则</p>
<div class="formula-block" data-latex="m(b-a) \\le \\int_a^b f(x) dx \\le M(b-a)"></div>

<p><strong>性质 5（积分中值定理）：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，则至少存在一点 <span class="formula-inline" data-latex="\\xi \\in [a, b]"></span>，使得</p>
<div class="formula-block" data-latex="\\int_a^b f(x) dx = f(\\xi)(b-a)"></div>

<div class="note">
  <strong>💡 积分中值定理的几何意义：</strong>
  <p>在区间 <span class="formula-inline" data-latex="[a, b]"></span> 上至少存在一点 <span class="formula-inline" data-latex="\\xi"></span>，使得以 <span class="formula-inline" data-latex="f(\\xi)"></span> 为高的矩形面积等于曲边梯形的面积。</p>
</div>

<h4>📘 例题 1：利用定积分定义求极限</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{i=1}^{n} \\frac{1}{1 + (i/n)^2}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>将和式改写为定积分的形式：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{n \\to \\infty} \\frac{1}{n} \\sum_{i=1}^{n} \\frac{1}{1 + (i/n)^2} = \\int_0^1 \\frac{1}{1 + x^2} dx"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= [\\arctan x]_0^1 = \\arctan 1 - \\arctan 0 = \\frac{\\pi}{4}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{\\pi}{4}"></span></p>
</div>

<h4>📘 例题 2：利用定积分性质比较大小</h4>

<div class="example">
  <p><strong>题目：</strong> 比较 <span class="formula-inline" data-latex="\\int_0^1 x^2 dx"></span> 与 <span class="formula-inline" data-latex="\\int_0^1 x^3 dx"></span> 的大小。</p>
  
  <p><strong>解：</strong></p>
  <p>在 <span class="formula-inline" data-latex="(0, 1)"></span> 上，<span class="formula-inline" data-latex="x^2 > x^3"></span>（因为 <span class="formula-inline" data-latex="0 < x < 1"></span>）。</p>
  
  <p>由保序性：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int_0^1 x^2 dx > \\int_0^1 x^3 dx"></span>
  </p>
  
  <p>验证：<span class="formula-inline" data-latex="\\int_0^1 x^2 dx = \\frac{1}{3}"></span>，<span class="formula-inline" data-latex="\\int_0^1 x^3 dx = \\frac{1}{4}"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> <span class="formula-inline" data-latex="\\frac{1}{3} > \\frac{1}{4}"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 定积分是积分学的核心概念。它通过"分割、近似、求和、取极限"的思想，将求面积、体积、弧长等几何问题统一为积分计算。定积分的性质为后续的计算和应用奠定了理论基础。
  </p>
</div>
`;

// ===== 绘图：定积分几何意义 =====
setTimeout(function() {
    var canvas = document.getElementById('integralCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;

    function fn(x) { return 0.8 + 0.5 * Math.sin(x * 1.2) + 0.15 * x; }
    var a = 0.8, b = 4.2;
    var xMin = -0.3, xMax = 4.8;
    var yMin = -0.2, yMax = 2.2;

    function toX(x) { return ((x - xMin) / (xMax - xMin)) * (W - 80) + 60; }
    function toY(y) { return H - 30 - ((y - yMin) / (yMax - yMin)) * (H - 60); }

    ctx.fillStyle = '#faf8f5';
    ctx.fillRect(0, 0, W, H);

    // 坐标轴
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(60, H - 30);
    ctx.lineTo(W - 20, H - 30);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, H - 30);
    ctx.lineTo(60, 15);
    ctx.stroke();
    ctx.fillStyle = '#555';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('x', W - 10, H - 30 - 6);
    ctx.textAlign = 'center';
    ctx.fillText('y', 50, 18);

    // 网格
    ctx.strokeStyle = '#e8e0d8';
    ctx.lineWidth = 0.5;
    for (var gx = 0; gx <= 4; gx += 1) {
        var cx = toX(gx);
        ctx.beginPath();
        ctx.moveTo(cx, 15);
        ctx.lineTo(cx, H - 30);
        ctx.stroke();
        ctx.fillStyle = '#888';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillText(gx, cx, H - 25);
    }
    for (var gy = 0; gy <= 2; gy += 0.5) {
        var cy = toY(gy);
        ctx.beginPath();
        ctx.moveTo(60, cy);
        ctx.lineTo(W - 20, cy);
        ctx.stroke();
        ctx.fillStyle = '#888';
        ctx.font = '10px sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(gy.toFixed(1), 55, cy);
    }

    // 填充面积
    ctx.beginPath();
    ctx.moveTo(toX(a), toY(0));
    for (var v = a; v <= b; v += 0.02) {
        ctx.lineTo(toX(v), toY(fn(v)));
    }
    ctx.lineTo(toX(b), toY(0));
    ctx.closePath();
    ctx.fillStyle = 'rgba(42, 111, 151, 0.25)';
    ctx.fill();

    // 曲线
    ctx.strokeStyle = '#2a6f97';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (var v = xMin; v <= xMax; v += 0.02) {
        var y = fn(v);
        var cx = toX(v), cy = toY(y);
        if (v === xMin) ctx.moveTo(cx, cy);
        else ctx.lineTo(cx, cy);
    }
    ctx.stroke();

    // 区间端点竖线
    ctx.strokeStyle = '#c62828';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(toX(a), toY(0));
    ctx.lineTo(toX(a), toY(fn(a)));
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(toX(b), toY(0));
    ctx.lineTo(toX(b), toY(fn(b)));
    ctx.stroke();
    ctx.setLineDash([]);

    // 标注 a, b
    ctx.fillStyle = '#c62828';
    ctx.font = '13px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('a', toX(a), H - 22);
    ctx.fillText('b', toX(b), H - 22);

    // 标注曲线
    ctx.fillStyle = '#2a6f97';
    ctx.font = '13px serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText('y = f(x)', toX(3.5), toY(fn(3.5)) - 6);

    // 标注面积
    ctx.fillStyle = '#2a6f97';
    ctx.font = '14px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('S = ∫ₐᵇ f(x)dx', (toX(a) + toX(b)) / 2, (toY(0) + toY(fn((a+b)/2))) / 2 + 20);

    // 标题
    ctx.fillStyle = '#333';
    ctx.font = '13px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('定积分的几何意义：曲边梯形的面积', W/2, H - 5);
}, 300);