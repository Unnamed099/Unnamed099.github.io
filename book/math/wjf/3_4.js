window.SECTION_CONTENT = `
<h4>📐 函数的单调性与凹凸性</h4>

<h5>1. 函数的单调性</h5>

<p>导数的符号可以判断函数的单调性。这是导数最重要的应用之一。</p>

<p><strong>定理（单调性判别法）：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上可导，则</p>

<ul>
  <li>若在 <span class="formula-inline" data-latex="I"></span> 上 <span class="formula-inline" data-latex="f'(x) > 0"></span>，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上<strong>单调递增</strong>；</li>
  <li>若在 <span class="formula-inline" data-latex="I"></span> 上 <span class="formula-inline" data-latex="f'(x) < 0"></span>，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上<strong>单调递减</strong>；</li>
  <li>若在 <span class="formula-inline" data-latex="I"></span> 上 <span class="formula-inline" data-latex="f'(x) \\equiv 0"></span>，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上为<strong>常数函数</strong>。</li>
</ul>

<div class="note">
  <strong>💡 几何意义：</strong>
  <p>• <span class="formula-inline" data-latex="f'(x) > 0"></span>：曲线单调上升（切线斜率为正）</p>
  <p>• <span class="formula-inline" data-latex="f'(x) < 0"></span>：曲线单调下降（切线斜率为负）</p>
</div>

<h4>📘 例题 1：判断函数的单调性</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="f(x) = x^3 - 3x + 1"></span> 的单调性。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f'(x) = 3x^2 - 3 = 3(x-1)(x+1)"></span></p>
  
  <p>令 <span class="formula-inline" data-latex="f'(x) = 0"></span>，得 <span class="formula-inline" data-latex="x = -1, 1"></span>。</p>
  
  <p>列表分析：</p>
  
  <table>
    <tr>
      <th>区间</th>
      <th><span class="formula-inline" data-latex="(-\\infty, -1)"></span></th>
      <th><span class="formula-inline" data-latex="(-1, 1)"></span></th>
      <th><span class="formula-inline" data-latex="(1, +\\infty)"></span></th>
    </tr>
    <tr>
      <td><span class="formula-inline" data-latex="f'(x)"></span></td>
      <td><span class="formula-inline" data-latex="> 0"></span></td>
      <td><span class="formula-inline" data-latex="< 0"></span></td>
      <td><span class="formula-inline" data-latex="> 0"></span></td>
    </tr>
    <tr>
      <td><span class="formula-inline" data-latex="f(x)"></span></td>
      <td>单调递增</td>
      <td>单调递减</td>
      <td>单调递增</td>
    </tr>
  </table>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 在 <span class="formula-inline" data-latex="(-\\infty, -1)"></span> 和 <span class="formula-inline" data-latex="(1, +\\infty)"></span> 上单调递增，在 <span class="formula-inline" data-latex="(-1, 1)"></span> 上单调递减。</p>
</div>

<h5>2. 函数的极值</h5>

<p><strong>定义：</strong> 若存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta"></span> 时，<span class="formula-inline" data-latex="f(x) < f(x_0)"></span>（或 <span class="formula-inline" data-latex="f(x) > f(x_0)"></span>），则称 <span class="formula-inline" data-latex="f(x_0)"></span> 为<strong>极大值</strong>（或<strong>极小值</strong>）。</p>

<p><strong>极值第一充分条件：</strong></p>
<ul>
  <li>若 <span class="formula-inline" data-latex="x_0"></span> 两侧 <span class="formula-inline" data-latex="f'(x)"></span> 由正变负，则 <span class="formula-inline" data-latex="f(x_0)"></span> 为极大值；</li>
  <li>若 <span class="formula-inline" data-latex="x_0"></span> 两侧 <span class="formula-inline" data-latex="f'(x)"></span> 由负变正，则 <span class="formula-inline" data-latex="f(x_0)"></span> 为极小值；</li>
  <li>若 <span class="formula-inline" data-latex="x_0"></span> 两侧 <span class="formula-inline" data-latex="f'(x)"></span> 不变号，则 <span class="formula-inline" data-latex="f(x_0)"></span> 不是极值。</li>
</ul>

<h4>📘 例题 2：求函数的极值</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^3 - 3x + 1"></span> 的极值。</p>
  
  <p><strong>解：</strong></p>
  <p>由例题1，<span class="formula-inline" data-latex="f'(x) = 3(x-1)(x+1)"></span></p>
  
  <p>在 <span class="formula-inline" data-latex="x = -1"></span> 处：<span class="formula-inline" data-latex="f'(x)"></span> 由正变负，故 <span class="formula-inline" data-latex="f(-1) = (-1)^3 - 3(-1) + 1 = -1 + 3 + 1 = 3"></span> 为<strong>极大值</strong>。</p>
  
  <p>在 <span class="formula-inline" data-latex="x = 1"></span> 处：<span class="formula-inline" data-latex="f'(x)"></span> 由负变正，故 <span class="formula-inline" data-latex="f(1) = 1 - 3 + 1 = -1"></span> 为<strong>极小值</strong>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 极大值为 <strong>3</strong>（<span class="formula-inline" data-latex="x = -1"></span>），极小值为 <strong>-1</strong>（<span class="formula-inline" data-latex="x = 1"></span>）。</p>
</div>

<h5>3. 函数的凹凸性与拐点</h5>

<p><strong>定义：</strong> 若曲线 <span class="formula-inline" data-latex="y = f(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上位于其切线的上方，则称曲线是<strong>凹向上</strong>（或<strong>下凸</strong>）；若位于切线下方，则称<strong>凹向下</strong>（或<strong>上凸</strong>）。</p>

<p><strong>凹凸性判别法：</strong></p>
<ul>
  <li>若在 <span class="formula-inline" data-latex="I"></span> 上 <span class="formula-inline" data-latex="f''(x) > 0"></span>，则曲线在 <span class="formula-inline" data-latex="I"></span> 上<strong>凹向上</strong>；</li>
  <li>若在 <span class="formula-inline" data-latex="I"></span> 上 <span class="formula-inline" data-latex="f''(x) < 0"></span>，则曲线在 <span class="formula-inline" data-latex="I"></span> 上<strong>凹向下</strong>。</li>
</ul>

<p><strong>拐点：</strong> 曲线凹凸性发生改变的点称为<strong>拐点</strong>。在拐点处，<span class="formula-inline" data-latex="f''(x) = 0"></span>（或不存在）。</p>

<h4>📘 例题 3：判断凹凸性并求拐点</h4>

<div class="example">
  <p><strong>题目：</strong> 讨论 <span class="formula-inline" data-latex="f(x) = x^3 - 3x + 1"></span> 的凹凸性并求拐点。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f'(x) = 3x^2 - 3, \\quad f''(x) = 6x"></span></p>
  
  <p>令 <span class="formula-inline" data-latex="f''(x) = 0"></span>，得 <span class="formula-inline" data-latex="x = 0"></span>。</p>
  
  <table>
    <tr>
      <th>区间</th>
      <th><span class="formula-inline" data-latex="(-\\infty, 0)"></span></th>
      <th><span class="formula-inline" data-latex="(0, +\\infty)"></span></th>
    </tr>
    <tr>
      <td><span class="formula-inline" data-latex="f''(x)"></span></td>
      <td><span class="formula-inline" data-latex="< 0"></span></td>
      <td><span class="formula-inline" data-latex="> 0"></span></td>
    </tr>
    <tr>
      <td>凹凸性</td>
      <td>凹向下</td>
      <td>凹向上</td>
    </tr>
  </table>
  
  <p><span class="formula-inline" data-latex="f(0) = 1"></span>，所以 <span class="formula-inline" data-latex="(0, 1)"></span> 为<strong>拐点</strong>。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 在 <span class="formula-inline" data-latex="(-\\infty, 0)"></span> 凹向下，在 <span class="formula-inline" data-latex="(0, +\\infty)"></span> 凹向上，<span class="formula-inline" data-latex="(0, 1)"></span> 为拐点。</p>
</div>

<h5>4. 利用导数研究函数的步骤</h5>

<ol>
  <li>求定义域</li>
  <li>求 <span class="formula-inline" data-latex="f'(x)"></span>，找驻点（<span class="formula-inline" data-latex="f'(x) = 0"></span>）和不可导点</li>
  <li>列表分析单调性和极值</li>
  <li>求 <span class="formula-inline" data-latex="f''(x)"></span>，找拐点</li>
  <li>列表分析凹凸性</li>
  <li>描点绘图</li>
</ol>

<!-- 单调性与凹凸性示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="monotoneCanvas" width="520" height="360" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 利用导数研究函数的单调性、极值和凹凸性，是导数应用的核心内容。它帮助我们全面理解函数的形态，是绘制函数图像的理论基础。
  </p>
</div>
`;

// ===== 绘图：单调性与凹凸性 =====
setTimeout(function() {
    var canvas = document.getElementById('monotoneCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W = canvas.width, H = canvas.height;

    // f(x) = x^3 - 3x + 1
    function fn(x) { return x*x*x - 3*x + 1; }
    var xMin = -2.8, xMax = 2.8;
    var yMin = -3, yMax = 4;

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
    for (var gx = -2; gx <= 2; gx += 1) {
        if (Math.abs(gx) < 0.01) continue;
        var cx = toX(gx);
        ctx.beginPath();
        ctx.moveTo(cx, 15);
        ctx.lineTo(cx, H - 30);
        ctx.stroke();
    }
    for (var gy = -3; gy <= 4; gy += 1) {
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

    // 曲线
    ctx.strokeStyle = '#2a6f97';
    ctx.lineWidth = 3;
    ctx.beginPath();
    var started = false;
    for (var v = xMin; v <= xMax; v += 0.02) {
        var y = fn(v);
        if (!isFinite(y)) { started = false; continue; }
        var cx = toX(v), cy = toY(y);
        if (cy < -100 || cy > H + 100) { started = false; continue; }
        if (!started) { ctx.moveTo(cx, cy); started = true; }
        else { ctx.lineTo(cx, cy); }
    }
    ctx.stroke();

    // 标注极值点和拐点
    var pts = [
        { x: -1, y: fn(-1), label: '极大值 ( -1, 3 )', color: '#c62828' },
        { x: 1, y: fn(1), label: '极小值 ( 1, -1 )', color: '#c62828' },
        { x: 0, y: fn(0), label: '拐点 ( 0, 1 )', color: '#e65100' }
    ];
    pts.forEach(function(p) {
        var cx = toX(p.x), cy = toY(p.y);
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = p.color;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'bottom';
        ctx.fillText(p.label, cx + 10, cy - 4);
    });

    // 标注单调区间
    ctx.fillStyle = '#333';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('单调递增', toX(-2), toY(2.5));
    ctx.fillText('单调递减', toX(0), toY(2.5));
    ctx.fillText('单调递增', toX(2), toY(2.5));

    // 箭头指示
    ctx.fillStyle = '#e65100';
    ctx.font = '11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('凹向下', toX(-1.5), toY(2.8));
    ctx.fillText('凹向上', toX(1.5), toY(2.8));

    // 标题
    ctx.fillStyle = '#333';
    ctx.font = '13px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('f(x) = x³ - 3x + 1 的单调性与凹凸性', W/2, H - 5);
}, 300);