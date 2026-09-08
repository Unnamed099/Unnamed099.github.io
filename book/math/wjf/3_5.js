window.SECTION_CONTENT = `
<h4>📐 函数的最值与极值</h4>

<h5>1. 最值与极值的区别</h5>

<table>
  <tr>
    <th></th>
    <th>极值</th>
    <th>最值</th>
  </tr>
  <tr>
    <td><strong>定义</strong></td>
    <td>局部范围内最大/最小</td>
    <td>整个定义域内最大/最小</td>
  </tr>
  <tr>
    <td><strong>范围</strong></td>
    <td>某点的邻域</td>
    <td>整个区间</td>
  </tr>
  <tr>
    <td><strong>唯一性</strong></td>
    <td>可以有多个</td>
    <td>最大值和最小值各至多一个</td>
  </tr>
  <tr>
    <td><strong>端点</strong></td>
    <td>不能在区间端点取得</td>
    <td>可以在端点取得</td>
  </tr>
</table>

<div class="note">
  <strong>💡 关键理解：</strong>
  <p>• 极值是<strong>局部</strong>概念，最值是<strong>整体</strong>概念</p>
  <p>• 最大值一定是极大值（除非在端点），但极大值不一定是最大值</p>
  <p>• 闭区间连续函数必有最大值和最小值（最值定理）</p>
</div>

<h5>2. 闭区间上连续函数的最值</h5>

<p><strong>定理（最值定理）：</strong> 若 <span class="formula-inline" data-latex="f(x)"></span> 在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上必能取得最大值和最小值。</p>

<p><strong>求闭区间上最值的步骤：</strong></p>
<ol>
  <li>求 <span class="formula-inline" data-latex="f'(x)"></span>，找出驻点（<span class="formula-inline" data-latex="f'(x)=0"></span>）和不可导点</li>
  <li>计算所有驻点、不可导点及端点 <span class="formula-inline" data-latex="a, b"></span> 处的函数值</li>
  <li>比较这些值，最大者为最大值，最小者为最小值</li>
</ol>

<h4>📘 例题 1：闭区间上求最值</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^3 - 3x + 1"></span> 在 <span class="formula-inline" data-latex="[-2, 2]"></span> 上的最大值和最小值。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f'(x) = 3x^2 - 3 = 3(x-1)(x+1)"></span></p>
  <p>令 <span class="formula-inline" data-latex="f'(x) = 0"></span>，得 <span class="formula-inline" data-latex="x = -1, 1"></span>。</p>
  
  <p>计算各点函数值：</p>
  
  <table>
    <tr>
      <th><span class="formula-inline" data-latex="x"></span></th>
      <th><span class="formula-inline" data-latex="-2"></span></th>
      <th><span class="formula-inline" data-latex="-1"></span></th>
      <th><span class="formula-inline" data-latex="1"></span></th>
      <th><span class="formula-inline" data-latex="2"></span></th>
    </tr>
    <tr>
      <td><span class="formula-inline" data-latex="f(x)"></span></td>
      <td><span class="formula-inline" data-latex="-8+6+1=-1"></span></td>
      <td><span class="formula-inline" data-latex="-1+3+1=3"></span></td>
      <td><span class="formula-inline" data-latex="1-3+1=-1"></span></td>
      <td><span class="formula-inline" data-latex="8-6+1=3"></span></td>
    </tr>
  </table>
  
  <p>比较得：最大值 <span class="formula-inline" data-latex="3"></span>（在 <span class="formula-inline" data-latex="x=-1"></span> 和 <span class="formula-inline" data-latex="x=2"></span> 处取得），最小值 <span class="formula-inline" data-latex="-1"></span>（在 <span class="formula-inline" data-latex="x=-2"></span> 和 <span class="formula-inline" data-latex="x=1"></span> 处取得）。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 最大值为 <strong>3</strong>，最小值为 <strong>-1</strong></p>
</div>

<h4>📘 例题 2：含参数的最值问题</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^2 - 2ax + 1"></span> 在 <span class="formula-inline" data-latex="[0, 2]"></span> 上的最小值。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f'(x) = 2x - 2a"></span></p>
  <p>令 <span class="formula-inline" data-latex="f'(x) = 0"></span>，得 <span class="formula-inline" data-latex="x = a"></span>。</p>
  
  <p>分情况讨论：</p>
  <ul>
    <li>若 <span class="formula-inline" data-latex="a < 0"></span>，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[0, 2]"></span> 上单调递增，最小值 <span class="formula-inline" data-latex="f(0) = 1"></span></li>
    <li>若 <span class="formula-inline" data-latex="0 \\le a \\le 2"></span>，则最小值 <span class="formula-inline" data-latex="f(a) = a^2 - 2a^2 + 1 = 1 - a^2"></span></li>
    <li>若 <span class="formula-inline" data-latex="a > 2"></span>，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[0, 2]"></span> 上单调递减，最小值 <span class="formula-inline" data-latex="f(2) = 5 - 4a"></span></li>
  </ul>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="m(a) = \\begin{cases} 1, & a < 0 \\\\ 1 - a^2, & 0 \\le a \\le 2 \\\\ 5 - 4a, & a > 2 \\end{cases}"></span></p>
</div>

<h5>3. 实际应用中的最值问题</h5>

<p>在实际问题中，最值问题通常通过建立函数模型，然后利用导数求解。</p>

<h4>📘 例题 3：最大面积问题</h4>

<div class="example">
  <p><strong>题目：</strong> 用长为 <span class="formula-inline" data-latex="L"></span> 的铁丝围成一个矩形，问长和宽各为多少时面积最大？</p>
  
  <p><strong>解：</strong></p>
  <p>设矩形长为 <span class="formula-inline" data-latex="x"></span>，宽为 <span class="formula-inline" data-latex="y"></span>，则 <span class="formula-inline" data-latex="2x + 2y = L"></span>，即 <span class="formula-inline" data-latex="y = L/2 - x"></span>。</p>
  
  <p>面积 <span class="formula-inline" data-latex="S(x) = x(L/2 - x) = \\frac{L}{2}x - x^2"></span>，<span class="formula-inline" data-latex="x \\in (0, L/2)"></span>。</p>
  
  <p><span class="formula-inline" data-latex="S'(x) = \\frac{L}{2} - 2x"></span></p>
  <p>令 <span class="formula-inline" data-latex="S'(x) = 0"></span>，得 <span class="formula-inline" data-latex="x = L/4"></span>。</p>
  
  <p>当 <span class="formula-inline" data-latex="x = L/4"></span> 时，<span class="formula-inline" data-latex="y = L/2 - L/4 = L/4"></span>，即<strong>正方形</strong>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 长和宽均为 <span class="formula-inline" data-latex="L/4"></span>（正方形）时面积最大，最大面积为 <span class="formula-inline" data-latex="L^2/16"></span>。</p>
</div>

<h4>📘 例题 4：最大利润问题</h4>

<div class="example">
  <p><strong>题目：</strong> 某商品售价为 <span class="formula-inline" data-latex="p"></span> 元时，销量为 <span class="formula-inline" data-latex="Q = 100 - 2p"></span> 件，成本为 <span class="formula-inline" data-latex="C = 20Q + 100"></span> 元。求利润最大时的售价。</p>
  
  <p><strong>解：</strong></p>
  <p>利润 <span class="formula-inline" data-latex="R(p) = pQ - C = p(100-2p) - [20(100-2p) + 100]"></span></p>
  <p><span class="formula-inline" data-latex="= 100p - 2p^2 - 2000 + 40p - 100 = -2p^2 + 140p - 2100"></span></p>
  
  <p><span class="formula-inline" data-latex="R'(p) = -4p + 140"></span></p>
  <p>令 <span class="formula-inline" data-latex="R'(p) = 0"></span>，得 <span class="formula-inline" data-latex="p = 35"></span>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 售价为 <strong>35元</strong> 时利润最大。</p>
</div>

<h5>4. 最值与极值的关系总结</h5>

<!-- 最值与极值关系示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="extremeCanvas" width="520" height="360" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 最值与极值是导数应用的核心内容。极值是局部概念，最值是整体概念。在实际问题中，我们更关注最值——因为它代表最优结果。掌握求最值的方法，是解决优化问题的关键。
  </p>
</div>
`;

// ===== 绘图：最值与极值对比 =====
setTimeout(function() {
    var canvas = document.getElementById('extremeCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;

    // f(x) = sin(x) + 0.3x，在 [-3, 3] 上
    function fn(x) { return Math.sin(x) + 0.3 * x; }
    var xMin = -3.5, xMax = 3.5;
    var yMin = -2, yMax = 2;

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
    for (var gx = -3; gx <= 3; gx += 1) {
        if (Math.abs(gx) < 0.01) continue;
        var cx = toX(gx);
        ctx.beginPath();
        ctx.moveTo(cx, 15);
        ctx.lineTo(cx, H - 30);
        ctx.stroke();
    }
    for (var gy = -2; gy <= 2; gy += 1) {
        if (Math.abs(gy) < 0.01) continue;
        var cy = toY(gy);
        ctx.beginPath();
        ctx.moveTo(60, cy);
        ctx.lineTo(W - 20, cy);
        ctx.stroke();
    }

    // 原点
    ctx.fillStyle = '#555';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'top';
    ctx.fillText('O', toX(0) - 6, toY(0) + 4);

    // 区间端点标记
    var a = -2.5, b = 2.5;
    var fa = fn(a), fb = fn(b);
    var ax = toX(a), ay = toY(fa);
    var bx = toX(b), by = toY(fb);

    // 区间背景
    ctx.fillStyle = 'rgba(230, 81, 0, 0.08)';
    ctx.fillRect(toX(a), 15, toX(b) - toX(a), H - 45);

    // 曲线
    ctx.strokeStyle = '#2a6f97';
    ctx.lineWidth = 3;
    ctx.beginPath();
    var started = false;
    for (var v = xMin; v <= xMax; v += 0.02) {
        var y = fn(v);
        if (!isFinite(y)) { started = false; continue; }
        var cx = toX(v), cy = toY(y);
        if (!started) { ctx.moveTo(cx, cy); started = true; }
        else { ctx.lineTo(cx, cy); }
    }
    ctx.stroke();

    // 区间端点
    ctx.beginPath();
    ctx.arc(ax, ay, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#c62828';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#c62828';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText('端点', ax - 6, ay - 4);

    ctx.beginPath();
    ctx.arc(bx, by, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#c62828';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#c62828';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText('端点', bx + 6, by - 4);

    // 极值点
    var maxX = -0.3, minX = 2.0;
    var maxY = fn(maxX), minY = fn(minX);
    var maxCx = toX(maxX), maxCy = toY(maxY);
    var minCx = toX(minX), minCy = toY(minY);

    ctx.beginPath();
    ctx.arc(maxCx, maxCy, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#2e7d32';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#2e7d32';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText('极大值', maxCx + 6, maxCy - 4);

    ctx.beginPath();
    ctx.arc(minCx, minCy, 6, 0, 2 * Math.PI);
    ctx.fillStyle = '#e65100';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#e65100';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText('极小值', minCx + 6, minCy - 4);

    // 标注区间
    ctx.fillStyle = '#555';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('区间 [a, b]', (toX(a) + toX(b)) / 2, 18);

    // 最大值和最小值标注
    var maxVal = Math.max(fa, fb, maxY);
    var minVal = Math.min(fa, fb, minY);
    var maxVx = fa > maxY ? ax : (fb > maxY ? bx : maxCx);
    var maxVy = fa > maxY ? ay : (fb > maxY ? by : maxCy);
    var minVx = fa < minY ? ax : (fb < minY ? bx : minCx);
    var minVy = fa < minY ? ay : (fb < minY ? by : minCy);

    ctx.fillStyle = '#c62828';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('最大值', toX(maxVx), 50);
    ctx.fillStyle = '#c62828';
    ctx.textBaseline = 'top';
    ctx.fillText('最小值', toX(minVx), H - 50);

    // 图例
    var legX = 20, legY = 20;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = '11px sans-serif';
    ctx.fillStyle = '#2a6f97';
    ctx.fillRect(legX, legY + 2, 20, 3);
    ctx.fillStyle = '#333';
    ctx.fillText('y = f(x)', legX + 25, legY + 4);
    ctx.fillStyle = '#c62828';
    ctx.beginPath();
    ctx.arc(legX + 10, legY + 26, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.fillText('端点/最值', legX + 25, legY + 26);
    ctx.fillStyle = '#2e7d32';
    ctx.beginPath();
    ctx.arc(legX + 10, legY + 48, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.fillText('极值点', legX + 25, legY + 48);

    // 标题
    ctx.fillStyle = '#333';
    ctx.font = '13px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('最值与极值对比示意图', W/2, H - 5);
}, 300);