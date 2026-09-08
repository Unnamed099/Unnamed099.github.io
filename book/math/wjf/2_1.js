window.SECTION_CONTENT = `
<h3>📐 导数的概念</h3>

<h4>1. 直线运动的速度</h4>

<p>设某质点沿直线运动。在直线上规定了原点、正方向和单位长度，使直线成为数轴。此外，再取定一个时刻作为测量时间的零点。设质点于时刻 <span class="formula-inline" data-latex="t"></span> 在直线上的位置的坐标为 <span class="formula-inline" data-latex="s"></span>（简称位置 <span class="formula-inline" data-latex="s"></span>）。这样，该质点的运动完全由某个函数</p>

<div class="formula-block" data-latex="s = f(t)"></div>

<p>所确定。此函数对运动过程中所出现的 <span class="formula-inline" data-latex="t"></span> 值有定义，称为<strong>位置函数</strong>。在最简单的情形，该质点所经过的路程与所花的时间成正比。就是说，无论取哪一段时间间隔，比值</p>

<div class="formula-block" data-latex="\\frac{\\text{经过的路程}}{\\text{所花的时间}}"></div>

<p>总是相同的。这个比值就称为该质点的<strong>速度</strong>，并说该质点做<strong>匀速运动</strong>。如果运动不是匀速的，那么在运动的不同时间间隔内，比值会有不同的值。这样，把比值笼统地称为该质点的速度就不合适了，而需要按不同时刻来考虑。那么，这种非匀速运动的质点在某一时刻（设为 <span class="formula-inline" data-latex="t_0"></span>）的速度应如何理解而又如何求得呢？</p>

<p>首先取从时刻 <span class="formula-inline" data-latex="t_0"></span> 到 <span class="formula-inline" data-latex="t"></span> 这样一个时间间隔，在这段时间内，质点从位置 <span class="formula-inline" data-latex="s_0 = f(t_0)"></span> 移动到 <span class="formula-inline" data-latex="s = f(t)"></span>。这时由上面的比值算得的</p>

<div class="formula-block" data-latex="\\frac{s - s_0}{t - t_0} = \\frac{f(t) - f(t_0)}{t - t_0}"></div>

<p>可认为是质点在上述时间间隔内的<strong>平均速度</strong>。如果时间间隔选得较短，这个比值在实践中也可用来说明质点在时刻 <span class="formula-inline" data-latex="t_0"></span> 的速度。但对于质点在时刻 <span class="formula-inline" data-latex="t_0"></span> 的速度的精确定义来说，这样做是不够的，而更确切地应当这样：令 <span class="formula-inline" data-latex="t \\to t_0"></span>，取上式的极限，如果这个极限存在，设为 <span class="formula-inline" data-latex="v"></span>，即</p>

<div class="formula-block" data-latex="v = \\lim_{t \\to t_0} \\frac{f(t) - f(t_0)}{t - t_0}"></div>

<p>这时就把这个极限值 <span class="formula-inline" data-latex="v"></span> 称为质点在时刻 <span class="formula-inline" data-latex="t_0"></span> 的<strong>瞬时速度</strong>。</p>

<h4>2. 切线问题</h4>

<p>圆的切线可定义为"与曲线只有一个交点的直线"，但是对于其他曲线，用"与曲线只有一个交点的直线"作为切线的定义就不一定合适。例如，对于抛物线 <span class="formula-inline" data-latex="y = x^2"></span>，在原点 <span class="formula-inline" data-latex="O"></span> 处两个坐标轴都符合上述定义，但实际上只有 <span class="formula-inline" data-latex="x"></span> 轴是该抛物线在点 <span class="formula-inline" data-latex="O"></span> 处的切线。下面给出切线的定义。</p>

<p>设有曲线 <span class="formula-inline" data-latex="C"></span> 及 <span class="formula-inline" data-latex="C"></span> 上的一点 <span class="formula-inline" data-latex="M"></span>（图 2-1），在点 <span class="formula-inline" data-latex="M"></span> 外另取 <span class="formula-inline" data-latex="C"></span> 上一点 <span class="formula-inline" data-latex="N"></span>，作割线 <span class="formula-inline" data-latex="MN"></span>。当点 <span class="formula-inline" data-latex="N"></span> 沿曲线 <span class="formula-inline" data-latex="C"></span> 趋于点 <span class="formula-inline" data-latex="M"></span> 时，如果割线 <span class="formula-inline" data-latex="MN"></span> 绕点 <span class="formula-inline" data-latex="M"></span> 旋转而趋于极限位置 <span class="formula-inline" data-latex="MT"></span>，直线 <span class="formula-inline" data-latex="MT"></span> 就称为曲线 <span class="formula-inline" data-latex="C"></span> 在点 <span class="formula-inline" data-latex="M"></span> 处的切线。这里极限位置的含义是：只要弦长 <span class="formula-inline" data-latex="|MN|"></span> 趋于零，<span class="formula-inline" data-latex="\\angle NMT"></span> 也趋于零。</p>

<!-- 图 2-1：切线定义示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="tangentCanvas1" width="500" height="340" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<p>现在就曲线 <span class="formula-inline" data-latex="C"></span> 为函数 <span class="formula-inline" data-latex="y = f(x)"></span> 的图形的情形来讨论切线问题。设 <span class="formula-inline" data-latex="M(x_0, y_0)"></span> 是曲线 <span class="formula-inline" data-latex="C"></span> 上的一个点（图 2-2），则 <span class="formula-inline" data-latex="y_0 = f(x_0)"></span>。根据上述定义要定出曲线 <span class="formula-inline" data-latex="C"></span> 在点 <span class="formula-inline" data-latex="M"></span> 处的切线，只要定出切线的斜率就行了。为此，在点 <span class="formula-inline" data-latex="M"></span> 外另取 <span class="formula-inline" data-latex="C"></span> 上的一点 <span class="formula-inline" data-latex="N(x, y)"></span>，于是割线 <span class="formula-inline" data-latex="MN"></span> 的斜率为</p>

<div class="formula-block" data-latex="\\tan \\varphi = \\frac{y - y_0}{x - x_0} = \\frac{f(x) - f(x_0)}{x - x_0}"></div>

<p>其中 <span class="formula-inline" data-latex="\\varphi"></span> 为割线 <span class="formula-inline" data-latex="MN"></span> 的倾角。当点 <span class="formula-inline" data-latex="N"></span> 沿曲线 <span class="formula-inline" data-latex="C"></span> 趋于点 <span class="formula-inline" data-latex="M"></span> 时，<span class="formula-inline" data-latex="x \\to x_0"></span>。如果当 <span class="formula-inline" data-latex="x \\to x_0"></span> 时，上述极限存在，设为 <span class="formula-inline" data-latex="k"></span>，即</p>

<div class="formula-block" data-latex="k = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}"></div>

<p>存在，那么此极限 <span class="formula-inline" data-latex="k"></span> 是割线斜率的极限，也就是切线的斜率。这里 <span class="formula-inline" data-latex="k = \\tan \\alpha"></span>，其中 <span class="formula-inline" data-latex="\\alpha"></span> 是切线 <span class="formula-inline" data-latex="MT"></span> 的倾角。于是，通过点 <span class="formula-inline" data-latex="M(x_0, f(x_0))"></span> 且以 <span class="formula-inline" data-latex="k"></span> 为斜率的直线 <span class="formula-inline" data-latex="MT"></span> 便是曲线 <span class="formula-inline" data-latex="C"></span> 在点 <span class="formula-inline" data-latex="M"></span> 处的切线。事实上，由 <span class="formula-inline" data-latex="\\angle NMT = \\varphi - \\alpha"></span> 以及 <span class="formula-inline" data-latex="x \\to x_0"></span> 时 <span class="formula-inline" data-latex="\\varphi \\to \\alpha"></span>，可见 <span class="formula-inline" data-latex="x \\to x_0"></span> 时（这时 <span class="formula-inline" data-latex="|MN| \\to 0"></span>），<span class="formula-inline" data-latex="\\angle NMT \\to 0"></span>。因此直线 <span class="formula-inline" data-latex="MT"></span> 确为曲线 <span class="formula-inline" data-latex="C"></span> 在点 <span class="formula-inline" data-latex="M"></span> 处的切线。</p>

<!-- 图 2-2：函数曲线切线示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="tangentCanvas2" width="500" height="360" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 通过上面两个例子，我们初步认识到了导数，下面我们来看看导数的具体定义。</p>
</div>


<h4>📐 导数的定义</h4>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="y = f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 的某邻域内有定义，当自变量 <span class="formula-inline" data-latex="x"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处取得增量 <span class="formula-inline" data-latex="\\Delta x"></span>（点 <span class="formula-inline" data-latex="x_0 + \\Delta x"></span> 仍在该邻域内）时，相应地，因变量取得增量</p>

<div class="formula-block" data-latex="\\Delta y = f(x_0 + \\Delta x) - f(x_0)"></div>

<p>如果 <span class="formula-inline" data-latex="\\Delta x \\to 0"></span> 时，<span class="formula-inline" data-latex="\\frac{\\Delta y}{\\Delta x}"></span> 的极限存在，即</p>

<div class="formula-block" data-latex="\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}"></div>

<p>存在，则称函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处<strong>可导</strong>，并称这个极限值为函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处的<strong>导数</strong>，记作</p>

<div class="formula-block" data-latex="f'(x_0) = \\lim_{\\Delta x \\to 0} \\frac{f(x_0 + \\Delta x) - f(x_0)}{\\Delta x}"></div>

<p>也可记作 <span class="formula-inline" data-latex="y'|_{x = x_0}"></span>、<span class="formula-inline" data-latex="\\frac{dy}{dx}\\big|_{x = x_0}"></span> 或 <span class="formula-inline" data-latex="\\frac{df(x_0)}{dx}"></span>。</p>

<p><strong>等价形式：</strong> 令 <span class="formula-inline" data-latex="x = x_0 + \\Delta x"></span>，则当 <span class="formula-inline" data-latex="\\Delta x \\to 0"></span> 时，<span class="formula-inline" data-latex="x \\to x_0"></span>，于是</p>

<div class="formula-block" data-latex="f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}"></div>

<div class="note">
  <strong>💡 导数的物理意义：</strong>
  <p>导数 <span class="formula-inline" data-latex="f'(x_0)"></span> 表示函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处的<strong>瞬时变化率</strong>。</p>
  <p>• 在<strong>运动学</strong>中，位置函数 <span class="formula-inline" data-latex="s = f(t)"></span> 的导数 <span class="formula-inline" data-latex="f'(t_0)"></span> 就是<strong>瞬时速度</strong>。</p>
  <p>• 在<strong>几何学</strong>中，曲线 <span class="formula-inline" data-latex="y = f(x)"></span> 的导数 <span class="formula-inline" data-latex="f'(x_0)"></span> 就是曲线在点 <span class="formula-inline" data-latex="(x_0, f(x_0))"></span> 处<strong>切线的斜率</strong>。</p>
</div>

<h4>📘 例题：利用定义求导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求函数 <span class="formula-inline" data-latex="f(x) = x^2"></span> 在 <span class="formula-inline" data-latex="x = 1"></span> 处的导数。</p>
  
  <p><strong>解：</strong> 由导数定义，</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(1) = \\lim_{\\Delta x \\to 0} \\frac{f(1 + \\Delta x) - f(1)}{\\Delta x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\Delta x \\to 0} \\frac{(1 + \\Delta x)^2 - 1^2}{\\Delta x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\Delta x \\to 0} \\frac{1 + 2\\Delta x + (\\Delta x)^2 - 1}{\\Delta x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\lim_{\\Delta x \\to 0} \\frac{2\\Delta x + (\\Delta x)^2}{\\Delta x} = \\lim_{\\Delta x \\to 0} (2 + \\Delta x) = 2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'(1) = 2"></span></p>
</div>


<h4>📐 导数的几何意义</h4>

<p>由前面切线问题的讨论可知，函数 <span class="formula-inline" data-latex="y = f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处的导数 <span class="formula-inline" data-latex="f'(x_0)"></span> 正是曲线 <span class="formula-inline" data-latex="y = f(x)"></span> 在点 <span class="formula-inline" data-latex="(x_0, f(x_0))"></span> 处切线的斜率。</p>

<div class="formula-block" data-latex="k = f'(x_0) = \\tan \\alpha"></div>

<p>其中 <span class="formula-inline" data-latex="\\alpha"></span> 是切线的倾角（即切线与 <span class="formula-inline" data-latex="x"></span> 轴正方向的夹角）。</p>

<div class="note">
  <strong>📌 因此：</strong>
  <p>• <span class="formula-inline" data-latex="f'(x_0) > 0"></span> ⇔ 切线斜率为正 ⇔ 曲线在 <span class="formula-inline" data-latex="x_0"></span> 处<strong>上升</strong>（函数单调递增）</p>
  <p>• <span class="formula-inline" data-latex="f'(x_0) < 0"></span> ⇔ 切线斜率为负 ⇔ 曲线在 <span class="formula-inline" data-latex="x_0"></span> 处<strong>下降</strong>（函数单调递减）</p>
  <p>• <span class="formula-inline" data-latex="f'(x_0) = 0"></span> ⇔ 切线水平 ⇔ 曲线在 <span class="formula-inline" data-latex="x_0"></span> 处可能有<strong>极值点</strong>或<strong>拐点</strong></p>
</div>

<h4>📘 例题：求切线方程</h4>

<div class="example">
  <p><strong>题目：</strong> 求曲线 <span class="formula-inline" data-latex="y = x^2"></span> 在点 <span class="formula-inline" data-latex="(1, 1)"></span> 处的切线方程。</p>
  
  <p><strong>解：</strong></p>
  <p>先求导：<span class="formula-inline" data-latex="f'(x) = 2x"></span>，所以 <span class="formula-inline" data-latex="f'(1) = 2"></span>，即切线斜率 <span class="formula-inline" data-latex="k = 2"></span>。</p>
  
  <p>由点斜式，切线方程为：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y - 1 = 2(x - 1)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="y = 2x - 1"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="y = 2x - 1"></span></p>
</div>

`;

// ===== 使用 /tool/plotter.js 绘图 =====
setTimeout(function() {
    function loadPlotter(callback) {
        if (typeof Plotter !== 'undefined') {
            callback();
            return;
        }
        var script = document.createElement('script');
        script.src = (window.FP || '') + 'tool/plotter.js';
        script.onload = callback;
        script.onerror = function() {
            console.warn('⚠️ plotter.js 加载失败');
        };
        document.head.appendChild(script);
    }

    loadPlotter(function() {
        if (typeof Plotter === 'undefined') return;

        // ===== 图 2-1：切线定义（割线逼近切线） =====
        // 使用 Plotter.draw 绘制函数曲线 + 切线 + 割线
        var fn1 = function(x) {
            // 一个在 [0, 6] 上的平滑曲线
            return 0.5 + 0.15 * (x - 2.5) * (x - 2.5) + 0.3 * (x - 2.5);
        };
        
        // 手动绘制：用形状方式更灵活，因为需要多条割线
        var shapes1 = [
            // 坐标轴
            { type: 'line', x1: 60, y1: 280, x2: 460, y2: 280, color: '#333', width: 1.5 },
            { type: 'line', x1: 60, y1: 280, x2: 60, y2: 30, color: '#333', width: 1.5 },
            { type: 'text', x: 455, y: 275, text: 'x', color: '#333', font: '12px serif', align: 'right', baseline: 'bottom' },
            { type: 'text', x: 50, y: 28, text: 'y', color: '#333', font: '12px serif', align: 'center', baseline: 'top' },
            { type: 'text', x: 52, y: 295, text: 'O', color: '#333', font: '11px serif', align: 'center', baseline: 'top' },
            
            // 曲线：生成点
            { type: 'path', points: (function() {
                var pts = [];
                for (var v = 0.5; v <= 5.5; v += 0.05) {
                    var cx = 60 + (v / 6) * 400;
                    var cy = 280 - (fn1(v) / 4) * 250;
                    pts.push([cx, cy]);
                }
                return pts;
            })(), stroke: '#2a6f97', width: 3 },
            
            // 点 M (x=2.5)
            { type: 'circle', x: 60 + (2.5 / 6) * 400, y: 280 - (fn1(2.5) / 4) * 250, r: 6, fill: '#c62828' },
            { type: 'text', x: 60 + (2.5 / 6) * 400 + 8, y: 280 - (fn1(2.5) / 4) * 250 - 4, text: 'M', color: '#c62828', font: '13px serif', align: 'left', baseline: 'bottom' },
            
            // 点 N1 (远离)
            { type: 'circle', x: 60 + (1.2 / 6) * 400, y: 280 - (fn1(1.2) / 4) * 250, r: 5, fill: '#e65100', opacity: 0.4 },
            { type: 'line', x1: 60 + (2.5 / 6) * 400, y1: 280 - (fn1(2.5) / 4) * 250, x2: 60 + (1.2 / 6) * 400, y2: 280 - (fn1(1.2) / 4) * 250, color: '#e65100', width: 1.2, dash: [5, 3], opacity: 0.4 },
            { type: 'text', x: 60 + (1.2 / 6) * 400 - 12, y: 280 - (fn1(1.2) / 4) * 250 - 8, text: 'N₁', color: '#e65100', font: '11px serif', align: 'right', baseline: 'bottom', opacity: 0.4 },
            
            // 点 N2 (稍近)
            { type: 'circle', x: 60 + (1.8 / 6) * 400, y: 280 - (fn1(1.8) / 4) * 250, r: 5, fill: '#e65100', opacity: 0.7 },
            { type: 'line', x1: 60 + (2.5 / 6) * 400, y1: 280 - (fn1(2.5) / 4) * 250, x2: 60 + (1.8 / 6) * 400, y2: 280 - (fn1(1.8) / 4) * 250, color: '#e65100', width: 1.5, dash: [5, 3], opacity: 0.7 },
            { type: 'text', x: 60 + (1.8 / 6) * 400 - 12, y: 280 - (fn1(1.8) / 4) * 250 - 8, text: 'N₂', color: '#e65100', font: '11px serif', align: 'right', baseline: 'bottom', opacity: 0.7 },
            
            // 点 N3 (很近)
            { type: 'circle', x: 60 + (2.2 / 6) * 400, y: 280 - (fn1(2.2) / 4) * 250, r: 5, fill: '#e65100' },
            { type: 'line', x1: 60 + (2.5 / 6) * 400, y1: 280 - (fn1(2.5) / 4) * 250, x2: 60 + (2.2 / 6) * 400, y2: 280 - (fn1(2.2) / 4) * 250, color: '#e65100', width: 1.8, dash: [5, 3] },
            { type: 'text', x: 60 + (2.2 / 6) * 400 + 8, y: 280 - (fn1(2.2) / 4) * 250 - 8, text: 'N₃', color: '#e65100', font: '11px serif', align: 'left', baseline: 'bottom' },
            
            // 切线 MT（使用 Plotter 的自动切线功能——但我们手动画，因为需要展示）
            { type: 'line', x1: 60 + (0.5 / 6) * 400, y1: 280 - (fn1(0.5) / 4) * 250, x2: 60 + (4.5 / 6) * 400, y2: 280 - (fn1(4.5) / 4) * 250, color: '#c62828', width: 2.5 },
            { type: 'text', x: 60 + (4.5 / 6) * 400 + 4, y: 280 - (fn1(4.5) / 4) * 250 - 4, text: 'T', color: '#c62828', font: '13px serif', align: 'left', baseline: 'bottom' },
            { type: 'text', x: 60 + (3.5 / 6) * 400, y: 280 - (fn1(3.5) / 4) * 250 - 16, text: '切线', color: '#c62828', font: '11px serif', align: 'center', baseline: 'bottom' },
            
            // 图例
            { type: 'text', x: 360, y: 310, text: '割线 MN', color: '#e65100', font: '11px serif', align: 'left', baseline: 'top' },
            { type: 'line', x1: 360, y1: 305, x2: 390, y2: 305, color: '#e65100', width: 1.5, dash: [5, 3] },
            { type: 'text', x: 360, y: 325, text: '切线 MT', color: '#c62828', font: '11px serif', align: 'left', baseline: 'top' },
            { type: 'line', x1: 360, y1: 320, x2: 390, y2: 320, color: '#c62828', width: 2.5 },
            
            // 标题
            { type: 'text', x: 250, y: 332, text: '图 2-1', color: '#555', font: '11px serif', align: 'center', baseline: 'bottom' }
        ];

        Plotter.render('tangentCanvas1', shapes1, { clear: true, bgColor: '#faf8f5' });

        // ===== 图 2-2：函数曲线切线（使用 Plotter.draw 的自动切线） =====
        // 这次直接用 Plotter.draw，它支持 tangents 参数自动计算切线
        var fn2 = function(x) {
            return 0.8 + 0.15 * x * x + 0.3 * x;
        };
        
        // 由于 Plotter.draw 会自动计算切线，我们用它来绘制
        // 但需要自定义点的位置
        var canvas2 = document.getElementById('tangentCanvas2');
        if (canvas2) {
            // 先用 Plotter.draw 绘制基础图形，再叠加自定义标注
            // 但由于 Plotter.draw 不支持直接叠加，我们直接用形状方式绘制
            var xMin2 = 0.5, xMax2 = 4.5;
            var yMin2 = 0, yMax2 = 4;
            var x0_2 = 1.8, y0_2 = fn2(x0_2);
            var h2 = 0.001;
            var slope2 = (fn2(x0_2 + h2) - fn2(x0_2 - h2)) / (2 * h2);
            
            function toX2(x) { return ((x - xMin2) / (xMax2 - xMin2)) * 400 + 60; }
            function toY2(y) { return 330 - ((y - yMin2) / (yMax2 - yMin2)) * 310; }
            
            var shapes2 = [
                // 坐标轴
                { type: 'line', x1: 60, y1: 330, x2: 460, y2: 330, color: '#333', width: 1.5 },
                { type: 'line', x1: 60, y1: 330, x2: 60, y2: 20, color: '#333', width: 1.5 },
                { type: 'text', x: 455, y: 325, text: 'x', color: '#333', font: '12px serif', align: 'right', baseline: 'bottom' },
                { type: 'text', x: 50, y: 20, text: 'y', color: '#333', font: '12px serif', align: 'center', baseline: 'top' },
                { type: 'text', x: 52, y: 345, text: 'O', color: '#333', font: '11px serif', align: 'center', baseline: 'top' },
                
                // 曲线
                { type: 'path', points: (function() {
                    var pts = [];
                    for (var v = xMin2; v <= xMax2; v += 0.02) {
                        pts.push([toX2(v), toY2(fn2(v))]);
                    }
                    return pts;
                })(), stroke: '#2a6f97', width: 3 },
                
                // 切线（自动计算斜率）
                { type: 'line', x1: toX2(x0_2 - 2), y1: toY2(fn2(x0_2 - 2)), x2: toX2(x0_2 + 2), y2: toY2(fn2(x0_2 + 2)), color: '#c62828', width: 2.5 },
                { type: 'text', x: toX2(x0_2 + 2) - 30, y: toY2(fn2(x0_2 + 2)) - 10, text: '切线', color: '#c62828', font: '12px serif', align: 'left', baseline: 'bottom' },
                
                // 点 M
                { type: 'circle', x: toX2(x0_2), y: toY2(y0_2), r: 6, fill: '#c62828' },
                { type: 'text', x: toX2(x0_2) - 8, y: toY2(y0_2) - 4, text: 'M', color: '#c62828', font: '13px serif', align: 'right', baseline: 'bottom' },
                
                // 点 N
                { type: 'circle', x: toX2(3.0), y: toY2(fn2(3.0)), r: 6, fill: '#e65100' },
                { type: 'text', x: toX2(3.0) + 8, y: toY2(fn2(3.0)) - 4, text: 'N', color: '#e65100', font: '13px serif', align: 'left', baseline: 'bottom' },
                
                // 割线
                { type: 'line', x1: toX2(x0_2), y1: toY2(y0_2), x2: toX2(3.0), y2: toY2(fn2(3.0)), color: '#e65100', width: 1.8, dash: [6, 4] },
                { type: 'text', x: (toX2(x0_2) + toX2(3.0)) / 2, y: (toY2(y0_2) + toY2(fn2(3.0))) / 2 - 10, text: '割线', color: '#e65100', font: '11px serif', align: 'center', baseline: 'bottom' },
                
                // 坐标标注
                { type: 'line', x1: toX2(x0_2), y1: 330, x2: toX2(x0_2), y2: toY2(y0_2), color: '#888', width: 1, dash: [4, 4] },
                { type: 'text', x: toX2(x0_2), y: 345, text: 'x₀', color: '#555', font: '12px serif', align: 'center', baseline: 'top' },
                
                { type: 'line', x1: toX2(3.0), y1: 330, x2: toX2(3.0), y2: toY2(fn2(3.0)), color: '#888', width: 1, dash: [4, 4] },
                { type: 'text', x: toX2(3.0), y: 345, text: 'x', color: '#555', font: '12px serif', align: 'center', baseline: 'top' },
                
                { type: 'line', x1: 60, y1: toY2(y0_2), x2: toX2(x0_2), y2: toY2(y0_2), color: '#888', width: 1, dash: [4, 4] },
                { type: 'text', x: 50, y: toY2(y0_2), text: 'y₀', color: '#555', font: '12px serif', align: 'right', baseline: 'middle' },
                
                { type: 'line', x1: 60, y1: toY2(fn2(3.0)), x2: toX2(3.0), y2: toY2(fn2(3.0)), color: '#888', width: 1, dash: [4, 4] },
                { type: 'text', x: 50, y: toY2(fn2(3.0)), text: 'y', color: '#555', font: '12px serif', align: 'right', baseline: 'middle' },
                
                // 角度 φ
                { type: 'path', points: [
                    [toX2(x0_2) + 5, toY2(y0_2) - 6],
                    [toX2(x0_2) + 15, toY2(y0_2) - 18],
                    [toX2(x0_2) + 8, toY2(y0_2) - 12]
                ], stroke: '#333', width: 1, close: false },
                { type: 'text', x: toX2(x0_2) + 12, y: toY2(y0_2) - 26, text: 'φ', color: '#333', font: '11px serif', align: 'center', baseline: 'bottom' },
                
                // 标题
                { type: 'text', x: 260, y: 350, text: '图 2-2', color: '#555', font: '11px serif', align: 'center', baseline: 'bottom' }
            ];

            Plotter.render('tangentCanvas2', shapes2, { clear: true, bgColor: '#faf8f5' });
        }
    });
}, 300);