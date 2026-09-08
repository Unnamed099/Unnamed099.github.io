window.SECTION_CONTENT = `
<h4>📐 泰勒公式与泰勒展开</h4>

<p>微分中值定理建立了函数与其导数之间的联系，而泰勒公式则更进一步，用多项式来逼近一个函数，是微分学中最重要的理论工具之一。</p>

<h5>1. 问题的提出</h5>

<p>我们在微分中已经知道，当 <span class="formula-inline" data-latex="\\Delta x"></span> 很小时，有近似公式</p>

<div class="formula-block" data-latex="f(x_0 + \\Delta x) \\approx f(x_0) + f'(x_0)\\Delta x"></div>

<p>即用一次多项式（线性函数）来近似 <span class="formula-inline" data-latex="f(x)"></span>。但线性近似的精度有限。我们自然会问：能否用更高次的多项式来逼近函数，以获得更高的精度？</p>

<p>泰勒公式给出了肯定的答案：在一定条件下，函数 <span class="formula-inline" data-latex="f(x)"></span> 可以用一个 <span class="formula-inline" data-latex="n"></span> 次多项式来近似。</p>

<h5>2. 泰勒中值定理</h5>

<p><strong>定理（泰勒中值定理）：</strong> 若函数 <span class="formula-inline" data-latex="f(x)"></span> 在包含 <span class="formula-inline" data-latex="x_0"></span> 的某个开区间 <span class="formula-inline" data-latex="(a, b)"></span> 内具有 <span class="formula-inline" data-latex="n+1"></span> 阶导数，则对于任意 <span class="formula-inline" data-latex="x \\in (a, b)"></span>，有</p>

<div class="formula-block" data-latex="f(x) = f(x_0) + f'(x_0)(x-x_0) + \\frac{f''(x_0)}{2!}(x-x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n(x)"></div>

<p>其中</p>

<div class="formula-block" data-latex="R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}(x-x_0)^{n+1} \\quad (\\xi \\text{ 介于 } x_0 \\text{ 与 } x \\text{ 之间})"></div>

<p><span class="formula-inline" data-latex="R_n(x)"></span> 称为<strong>拉格朗日余项</strong>。</p>

<div class="note">
  <strong>💡 理解：</strong>
  <p>• 前 <span class="formula-inline" data-latex="n+1"></span> 项是 <span class="formula-inline" data-latex="n"></span> 次多项式，称为<strong>泰勒多项式</strong></p>
  <p>• <span class="formula-inline" data-latex="R_n(x)"></span> 是余项，表示多项式逼近的误差</p>
  <p>• 当 <span class="formula-inline" data-latex="n=0"></span> 时，退化为拉格朗日中值定理</p>
</div>

<h5>3. 麦克劳林公式</h5>

<p>当 <span class="formula-inline" data-latex="x_0 = 0"></span> 时，泰勒公式称为<strong>麦克劳林公式</strong>：</p>

<div class="formula-block" data-latex="f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\cdots + \\frac{f^{(n)}(0)}{n!}x^n + R_n(x)"></div>

<div class="formula-block" data-latex="R_n(x) = \\frac{f^{(n+1)}(\\xi)}{(n+1)!}x^{n+1} \\quad (\\xi \\text{ 介于 } 0 \\text{ 与 } x \\text{ 之间})"></div>

<h4>📘 例题 1：求 <span class="formula-inline" data-latex="e^x"></span> 的麦克劳林展开</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x) = e^x"></span> 在 <span class="formula-inline" data-latex="x_0 = 0"></span> 处展开到 <span class="formula-inline" data-latex="n"></span> 阶。</p>
  
  <p><strong>解：</strong></p>
  <p>因为 <span class="formula-inline" data-latex="(e^x)^{(k)} = e^x"></span>，所以 <span class="formula-inline" data-latex="f^{(k)}(0) = 1"></span>。</p>
  
  <p>代入麦克劳林公式：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots + \\frac{x^n}{n!} + R_n(x)"></span>
  </p>
  
  <p>其中 <span class="formula-inline" data-latex="R_n(x) = \\frac{e^{\\xi}}{(n+1)!}x^{n+1}"></span>（<span class="formula-inline" data-latex="\\xi"></span> 介于 0 与 <span class="formula-inline" data-latex="x"></span> 之间）。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e^x = \\sum_{k=0}^{n} \\frac{x^k}{k!} + R_n(x)"></span></p>
</div>

<h4>📘 例题 2：求 <span class="formula-inline" data-latex="\\sin x"></span> 的麦克劳林展开</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x) = \\sin x"></span> 在 <span class="formula-inline" data-latex="x_0 = 0"></span> 处展开到 <span class="formula-inline" data-latex="2n+1"></span> 阶。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f^{(k)}(0)"></span> 的规律：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = -1, f^{(4)}(0) = 0, \\cdots"></span>
  </p>
  
  <p>代入麦克劳林公式：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\cdots + (-1)^n \\frac{x^{2n+1}}{(2n+1)!} + R_{2n+1}(x)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sin x = \\sum_{k=0}^{n} (-1)^k \\frac{x^{2k+1}}{(2k+1)!} + R_{2n+1}(x)"></span></p>
</div>

<h4>📘 例题 3：求 <span class="formula-inline" data-latex="\\cos x"></span> 的麦克劳林展开</h4>

<div class="example">
  <p><strong>题目：</strong> 将 <span class="formula-inline" data-latex="f(x) = \\cos x"></span> 在 <span class="formula-inline" data-latex="x_0 = 0"></span> 处展开到 <span class="formula-inline" data-latex="2n"></span> 阶。</p>
  
  <p><strong>解：</strong></p>
  <p>类似地，<span class="formula-inline" data-latex="\\cos x"></span> 的展开为：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\cdots + (-1)^n \\frac{x^{2n}}{(2n)!} + R_{2n}(x)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\cos x = \\sum_{k=0}^{n} (-1)^k \\frac{x^{2k}}{(2k)!} + R_{2n}(x)"></span></p>
</div>

<h5>4. 常见函数的麦克劳林展开</h5>

<table>
  <tr>
    <th>函数</th>
    <th>展开式</th>
    <th>收敛范围</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\sin x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n+1}}{(2n+1)!}"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\cos x"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} (-1)^n \\frac{x^{2n}}{(2n)!}"></span></td>
    <td><span class="formula-inline" data-latex="(-\\infty, +\\infty)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\ln(1+x)"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=1}^{\\infty} (-1)^{n-1} \\frac{x^n}{n}"></span></td>
    <td><span class="formula-inline" data-latex="(-1, 1]"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\frac{1}{1-x}"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} x^n"></span></td>
    <td><span class="formula-inline" data-latex="(-1, 1)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="(1+x)^\\alpha"></span></td>
    <td><span class="formula-inline" data-latex="\\sum_{n=0}^{\\infty} \\binom{\\alpha}{n} x^n"></span></td>
    <td><span class="formula-inline" data-latex="(-1, 1)"></span></td>
  </tr>
</table>

<h5>5. 泰勒公式的应用</h5>

<p><strong>（1）近似计算</strong></p>

<div class="example">
  <p><strong>题目：</strong> 利用 <span class="formula-inline" data-latex="e^x"></span> 的展开式计算 <span class="formula-inline" data-latex="e^{0.1}"></span> 的近似值（取到 <span class="formula-inline" data-latex="x^3"></span> 项）。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="e^{0.1} \\approx 1 + 0.1 + \\frac{0.01}{2} + \\frac{0.001}{6} = 1 + 0.1 + 0.005 + 0.0001667 = 1.1051667"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="e^{0.1} \\approx 1.10517"></span>（精确值 1.105170...）</p>
</div>

<p><strong>（2）求极限</strong></p>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>利用 <span class="formula-inline" data-latex="\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\lim_{x \\to 0} \\frac{\\sin x - x}{x^3} = \\lim_{x \\to 0} \\frac{-\\frac{x^3}{6} + O(x^5)}{x^3} = -\\frac{1}{6}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 极限值为 <strong>-1/6</strong></p>
</div>

<h5>6. 泰勒公式的几何意义</h5>

<p>泰勒公式的几何意义是：用一个 <span class="formula-inline" data-latex="n"></span> 次多项式曲线来逼近函数曲线，在 <span class="formula-inline" data-latex="x_0"></span> 附近，它们有相同的函数值、导数、二阶导数……直到 <span class="formula-inline" data-latex="n"></span> 阶导数。</p>

<!-- 泰勒展开近似示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="taylorCanvas" width="520" height="360" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 泰勒公式是微分学的"巅峰之作"，它将函数与多项式联系起来，为近似计算、数值分析、微分方程求解等提供了理论基础。在后续的级数理论中，泰勒公式将发展为泰勒级数，成为更强大的工具。
  </p>
</div>
`;

// ===== 绘图：泰勒展开近似 =====
setTimeout(function() {
    function loadPlotter(callback) {
        if (typeof Plotter !== 'undefined') { callback(); return; }
        var script = document.createElement('script');
        script.src = (window.FP || '') + 'tool/plotter.js';
        script.onload = callback;
        script.onerror = function() { console.warn('plotter.js 加载失败'); callback(); };
        document.head.appendChild(script);
    }

    loadPlotter(function() {
        var canvas = document.getElementById('taylorCanvas');
        if (!canvas) { console.warn('taylorCanvas 未找到'); return; }
        var ctx = canvas.getContext('2d');
        var W = canvas.width, H = canvas.height;

        // 定义函数
        function fnSin(x) { return Math.sin(x); }
        function fn1(x) { return x; }
        function fn3(x) { return x - x*x*x / 6; }
        function fn5(x) { return x - x*x*x/6 + x*x*x*x*x/120; }

        var xMin = -Math.PI, xMax = Math.PI;
        var yMin = -2, yMax = 2;
        var colors = ['#2a6f97', '#e65100', '#9c27b0', '#2e7d32'];
        var labels = ['sin x', '一阶', '三阶', '五阶'];

        function toX(x) { return ((x - xMin) / (xMax - xMin)) * (W - 80) + 60; }
        function toY(y) { return H - 30 - ((y - yMin) / (yMax - yMin)) * (H - 60); }

        // 清空
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
        for (var gy = -2; gy <= 2; gy += 0.5) {
            if (Math.abs(gy) < 0.01) continue;
            var cy = toY(gy);
            ctx.beginPath();
            ctx.moveTo(60, cy);
            ctx.lineTo(W - 20, cy);
            ctx.stroke();
        }

        // 原点标注
        ctx.fillStyle = '#555';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        ctx.fillText('O', toX(0) - 6, toY(0) + 4);

        // 绘制四条曲线
        var fns = [fnSin, fn1, fn3, fn5];
        fns.forEach(function(fn, idx) {
            ctx.strokeStyle = colors[idx];
            ctx.lineWidth = idx === 0 ? 3 : 2;
            if (idx > 0) ctx.setLineDash([4, 4]);
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
            ctx.setLineDash([]);
        });

        // 图例
        var legX = W - 130, legY = 25;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.font = '11px sans-serif';
        labels.forEach(function(label, idx) {
            ctx.strokeStyle = colors[idx];
            ctx.lineWidth = idx === 0 ? 3 : 2;
            if (idx > 0) ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(legX, legY + idx * 22 + 6);
            ctx.lineTo(legX + 20, legY + idx * 22 + 6);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = '#333';
            ctx.fillText(label, legX + 25, legY + idx * 22 + 6);
        });

        // 标题
        ctx.fillStyle = '#333';
        ctx.font = '13px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText('sin x 的泰勒展开近似', W/2, H - 5);
    });
}, 300);