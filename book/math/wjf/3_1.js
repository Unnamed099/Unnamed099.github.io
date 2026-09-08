window.SECTION_CONTENT = `
<h4>📐 微分中值定理</h4>

<h5>0. 费马引理</h5>

<p><strong>引理（费马引理）：</strong> 设函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 的某邻域 <span class="formula-inline" data-latex="U(x_0)"></span> 内有定义，且在 <span class="formula-inline" data-latex="x_0"></span> 处可导。若 <span class="formula-inline" data-latex="x_0"></span> 是 <span class="formula-inline" data-latex="f(x)"></span> 的<strong>极值点</strong>（极大值点或极小值点），则</p>

<div class="formula-block" data-latex="f'(x_0) = 0"></div>

<p><strong>证明：</strong></p>
<p>不妨设 <span class="formula-inline" data-latex="x_0"></span> 是 <span class="formula-inline" data-latex="f(x)"></span> 的<strong>极小值点</strong>，则存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - x_0| < \\delta"></span> 时，有 <span class="formula-inline" data-latex="f(x) \\ge f(x_0)"></span>。</p>

<p>于是，当 <span class="formula-inline" data-latex="x > x_0"></span> 时，<span class="formula-inline" data-latex="\\frac{f(x) - f(x_0)}{x - x_0} \\ge 0"></span>，因此</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x_0) = \\lim_{x \\to x_0^+} \\frac{f(x) - f(x_0)}{x - x_0} \\ge 0"></span>
</p>

<p>当 <span class="formula-inline" data-latex="x < x_0"></span> 时，<span class="formula-inline" data-latex="\\frac{f(x) - f(x_0)}{x - x_0} \\le 0"></span>，因此</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x_0) = \\lim_{x \\to x_0^-} \\frac{f(x) - f(x_0)}{x - x_0} \\le 0"></span>
</p>

<p>由于 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="x_0"></span> 处可导，左右导数相等，故 <span class="formula-inline" data-latex="f'(x_0) = 0"></span>。极大值情形同理可证。</p>

<div class="note">
  <strong>💡 几何意义：</strong>
  <p>若函数在极值点处可导，则其图像在极值点处的切线是<strong>水平的</strong>。</p>
  <p><span class="formula-inline" data-latex="\\Rightarrow"></span> 极值点处的切线平行于 <span class="formula-inline" data-latex="x"></span> 轴。</p>
</div>

<div class="example">
  <p><strong>📘 示例：</strong> 对于抛物线 <span class="formula-inline" data-latex="f(x) = x^2"></span>，在 <span class="formula-inline" data-latex="x = 0"></span> 处取得极小值，<span class="formula-inline" data-latex="f'(0) = 0"></span>，切线水平。</p>
  <p>对于 <span class="formula-inline" data-latex="f(x) = -x^2"></span>，在 <span class="formula-inline" data-latex="x = 0"></span> 处取得极大值，<span class="formula-inline" data-latex="f'(0) = 0"></span>，切线水平。</p>
</div>

<div class="note">
  <strong>⚠️ 注意：</strong>
  <p><span class="formula-inline" data-latex="f'(x_0) = 0"></span> 只是极值点的<strong>必要条件</strong>，而非充分条件。</p>
  <p>例如 <span class="formula-inline" data-latex="f(x) = x^3"></span>，<span class="formula-inline" data-latex="f'(0) = 0"></span>，但 <span class="formula-inline" data-latex="x = 0"></span> 不是极值点（是拐点）。</p>
</div>

<h5>1. 罗尔定理</h5>

<p><strong>定理：</strong> 若函数 <span class="formula-inline" data-latex="f(x)"></span> 满足：</p>

<p>（1）在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续；</p>
<p>（2）在开区间 <span class="formula-inline" data-latex="(a, b)"></span> 内可导；</p>
<p>（3）<span class="formula-inline" data-latex="f(a) = f(b)"></span>，</p>

<p>则至少存在一点 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span>，使得</p>

<div class="formula-block" data-latex="f'(\\xi) = 0"></div>

<p><strong>证明：</strong></p>
<p>若 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上为常数，则任意 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span> 都有 <span class="formula-inline" data-latex="f'(\\xi) = 0"></span>。</p>
<p>若 <span class="formula-inline" data-latex="f(x)"></span> 不为常数，由连续函数的最值定理，<span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[a, b]"></span> 上必有最大值 <span class="formula-inline" data-latex="M"></span> 或最小值 <span class="formula-inline" data-latex="m"></span>，且至少有一个不在端点取得（因为 <span class="formula-inline" data-latex="f(a) = f(b)"></span>）。设该极值点在 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span> 处取得，由费马引理，<span class="formula-inline" data-latex="f'(\\xi) = 0"></span>。</p>

<p><strong>几何意义：</strong> 若连续曲线 <span class="formula-inline" data-latex="y = f(x)"></span> 在端点 <span class="formula-inline" data-latex="A(a, f(a))"></span> 和 <span class="formula-inline" data-latex="B(b, f(b))"></span> 的高度相等，则在弧 <span class="formula-inline" data-latex="AB"></span> 上至少有一点，其切线是水平的。</p>

<!-- 罗尔定理示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="rolleCanvas" width="500" height="300" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<h4>📘 例题 36：验证罗尔定理</h4>

<div class="example">
  <p><strong>题目：</strong> 验证函数 <span class="formula-inline" data-latex="f(x) = x^2 - 3x + 2"></span> 在区间 <span class="formula-inline" data-latex="[1, 2]"></span> 上满足罗尔定理，并求出 <span class="formula-inline" data-latex="\\xi"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[1, 2]"></span> 上连续，在 <span class="formula-inline" data-latex="(1, 2)"></span> 内可导。</p>
  
  <p><span class="formula-inline" data-latex="f(1) = 1 - 3 + 2 = 0"></span>，<span class="formula-inline" data-latex="f(2) = 4 - 6 + 2 = 0"></span></p>
  
  <p><span class="formula-inline" data-latex="f(1) = f(2) = 0"></span>，满足罗尔定理条件。</p>
  
  <p><span class="formula-inline" data-latex="f'(x) = 2x - 3"></span></p>
  
  <p>令 <span class="formula-inline" data-latex="f'(x) = 0"></span>，得 <span class="formula-inline" data-latex="2x - 3 = 0"></span>，<span class="formula-inline" data-latex="x = 1.5"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\xi = 1.5 \\in (1, 2)"></span>，且 <span class="formula-inline" data-latex="f'(1.5) = 0"></span></p>
</div>

<h5>2. 拉格朗日中值定理</h5>

<p><strong>定理：</strong> 若函数 <span class="formula-inline" data-latex="f(x)"></span> 满足：</p>

<p>（1）在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续；</p>
<p>（2）在开区间 <span class="formula-inline" data-latex="(a, b)"></span> 内可导，</p>

<p>则至少存在一点 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span>，使得</p>

<div class="formula-block" data-latex="f(b) - f(a) = f'(\\xi)(b - a)"></div>

<p>或写作</p>

<div class="formula-block" data-latex="\\frac{f(b) - f(a)}{b - a} = f'(\\xi)"></div>

<p><strong>证明：</strong> 构造辅助函数</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="F(x) = f(x) - \\frac{f(b) - f(a)}{b - a}(x - a)"></span>
</p>

<p>则 <span class="formula-inline" data-latex="F(a) = f(a) = F(b)"></span>，由罗尔定理，存在 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span>，使得 <span class="formula-inline" data-latex="F'(\\xi) = 0"></span>，即</p>

<p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(\\xi) - \\frac{f(b) - f(a)}{b - a} = 0"></span>
</p>

<p>故 <span class="formula-inline" data-latex="f(b) - f(a) = f'(\\xi)(b - a)"></span>。</p>

<p><strong>几何意义：</strong> 在曲线 <span class="formula-inline" data-latex="y = f(x)"></span> 上，至少存在一点，使得该点处的切线斜率等于端点连线的斜率（弦的斜率）。</p>

<!-- 拉格朗日中值定理示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="lagrangeCanvas" width="500" height="300" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<div class="note">
  <strong>💡 重要推论：</strong>
  <p>若 <span class="formula-inline" data-latex="f'(x) \\equiv 0"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上恒成立，则 <span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="I"></span> 上为常数。</p>
  <p>若 <span class="formula-inline" data-latex="f'(x) = g'(x)"></span> 在区间 <span class="formula-inline" data-latex="I"></span> 上恒成立，则 <span class="formula-inline" data-latex="f(x) - g(x) = C"></span>（常数）。</p>
</div>

<h4>📘 例题 37：验证拉格朗日中值定理</h4>

<div class="example">
  <p><strong>题目：</strong> 验证函数 <span class="formula-inline" data-latex="f(x) = \\sqrt{x}"></span> 在区间 <span class="formula-inline" data-latex="[1, 4]"></span> 上满足拉格朗日中值定理，并求出 <span class="formula-inline" data-latex="\\xi"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="f(x) = \\sqrt{x}"></span> 在 <span class="formula-inline" data-latex="[1, 4]"></span> 上连续，在 <span class="formula-inline" data-latex="(1, 4)"></span> 内可导。</p>
  
  <p><span class="formula-inline" data-latex="f(1) = 1, f(4) = 2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{f(4) - f(1)}{4 - 1} = \\frac{2 - 1}{3} = \\frac{1}{3}"></span>
  </p>
  
  <p><span class="formula-inline" data-latex="f'(x) = \\frac{1}{2\\sqrt{x}}"></span></p>
  
  <p>令 <span class="formula-inline" data-latex="f'(\\xi) = \\frac{1}{3}"></span>，即 <span class="formula-inline" data-latex="\\frac{1}{2\\sqrt{\\xi}} = \\frac{1}{3}"></span></p>
  
  <p><span class="formula-inline" data-latex="2\\sqrt{\\xi} = 3, \\sqrt{\\xi} = \\frac{3}{2}, \\xi = \\frac{9}{4} = 2.25"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\xi = \\frac{9}{4} \\in (1, 4)"></span></p>
</div>

<h5>3. 柯西中值定理</h5>

<p><strong>定理：</strong> 若函数 <span class="formula-inline" data-latex="f(x)"></span> 和 <span class="formula-inline" data-latex="g(x)"></span> 满足：</p>

<p>（1）在闭区间 <span class="formula-inline" data-latex="[a, b]"></span> 上连续；</p>
<p>（2）在开区间 <span class="formula-inline" data-latex="(a, b)"></span> 内可导，且 <span class="formula-inline" data-latex="g'(x) \\neq 0"></span>；</p>

<p>则至少存在一点 <span class="formula-inline" data-latex="\\xi \\in (a, b)"></span>，使得</p>

<div class="formula-block" data-latex="\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(\\xi)}{g'(\\xi)}"></div>

<p><strong>几何意义：</strong> 柯西中值定理是拉格朗日中值定理的推广，它处理的是由参数方程 <span class="formula-inline" data-latex="x = g(t), y = f(t)"></span> 表示的曲线。</p>

<h4>📊 三大中值定理对比</h4>

<table>
  <tr>
    <th>定理</th>
    <th>条件</th>
    <th>结论</th>
    <th>几何意义</th>
  </tr>
  <tr>
    <td><strong>费马引理</strong></td>
    <td><span class="formula-inline" data-latex="x_0"></span> 为极值点</td>
    <td><span class="formula-inline" data-latex="f'(x_0) = 0"></span></td>
    <td>极值点切线水平</td>
  </tr>
  <tr>
    <td><strong>罗尔定理</strong></td>
    <td><span class="formula-inline" data-latex="f(a) = f(b)"></span></td>
    <td><span class="formula-inline" data-latex="f'(\\xi) = 0"></span></td>
    <td>至少一点切线水平</td>
  </tr>
  <tr>
    <td><strong>拉格朗日中值定理</strong></td>
    <td>连续 + 可导</td>
    <td><span class="formula-inline" data-latex="f'(\\xi) = \\frac{f(b) - f(a)}{b - a}"></span></td>
    <td>切线平行于弦</td>
  </tr>
  <tr>
    <td><strong>柯西中值定理</strong></td>
    <td><span class="formula-inline" data-latex="f, g"></span> 连续可导，<span class="formula-inline" data-latex="g' \\neq 0"></span></td>
    <td><span class="formula-inline" data-latex="\\frac{f'(\\xi)}{g'(\\xi)} = \\frac{f(b) - f(a)}{g(b) - g(a)}"></span></td>
    <td>参数曲线切线平行于弦</td>
  </tr>
</table>

<h4>📘 例题 38：利用拉格朗日中值定理证明不等式</h4>

<div class="example">
  <p><strong>题目：</strong> 证明：当 <span class="formula-inline" data-latex="a > b > 0"></span> 时，<span class="formula-inline" data-latex="\\frac{a - b}{a} < \\ln\\frac{a}{b} < \\frac{a - b}{b}"></span></p>
  
  <p><strong>证明：</strong></p>
  <p>设 <span class="formula-inline" data-latex="f(x) = \\ln x"></span>，在区间 <span class="formula-inline" data-latex="[b, a]"></span> 上应用拉格朗日中值定理：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln a - \\ln b = \\frac{1}{\\xi}(a - b), \\quad \\xi \\in (b, a)"></span>
  </p>
  
  <p>因为 <span class="formula-inline" data-latex="b < \\xi < a"></span>，所以 <span class="formula-inline" data-latex="\\frac{1}{a} < \\frac{1}{\\xi} < \\frac{1}{b}"></span></p>
  
  <p>因此：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{a - b}{a} < \\ln\\frac{a}{b} < \\frac{a - b}{b}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 不等式得证。</p>
</div>

<h4>📘 例题 39：利用拉格朗日中值定理证明恒等式</h4>

<div class="example">
  <p><strong>题目：</strong> 证明：<span class="formula-inline" data-latex="\\arcsin x + \\arccos x = \\frac{\\pi}{2} \\quad (x \\in [-1, 1])"></span></p>
  
  <p><strong>证明：</strong></p>
  <p>设 <span class="formula-inline" data-latex="f(x) = \\arcsin x + \\arccos x"></span></p>
  
  <p><span class="formula-inline" data-latex="f'(x) = \\frac{1}{\\sqrt{1-x^2}} - \\frac{1}{\\sqrt{1-x^2}} = 0"></span></p>
  
  <p>由拉格朗日中值定理的推论，<span class="formula-inline" data-latex="f(x)"></span> 在 <span class="formula-inline" data-latex="[-1, 1]"></span> 上为常数。</p>
  
  <p>取 <span class="formula-inline" data-latex="x = 0"></span>：<span class="formula-inline" data-latex="f(0) = \\arcsin 0 + \\arccos 0 = 0 + \\frac{\\pi}{2} = \\frac{\\pi}{2}"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 因此 <span class="formula-inline" data-latex="\\arcsin x + \\arccos x = \\frac{\\pi}{2}"></span> 恒成立。</p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 费马引理是微分中值定理的"基石"，它建立了极值点与导数为零之间的联系。罗尔定理是拉格朗日中值定理的特例，而柯西中值定理是拉格朗日中值定理的推广。它们不仅在理论上奠定了微分学的基础，也是证明不等式、研究函数性质、求极限等问题的有力工具。
  </p>
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
            console.warn('⚠️ plotter.js 加载失败，使用内联绘图');
            // 如果加载失败，回退到内联绘图（但这里我们不回退，直接报错）
        };
        document.head.appendChild(script);
    }

    loadPlotter(function() {
        if (typeof Plotter === 'undefined') {
            console.warn('⚠️ Plotter 未定义');
            return;
        }

        // ===== 罗尔定理 =====
        try {
            function rolleFn(x) {
                return ((x * x - 4) * (x * x - 4)) / 4 + 0.3;
            }
            var a = -2, b = 2;
            var fa = rolleFn(a), fb = rolleFn(b);
            var xi = 0;

            Plotter.draw({
                fn: rolleFn,
                target: 'rolleCanvas',
                width: 500,
                height: 300,
                xMin: -2.5,
                xMax: 2.5,
                yMin: -0.5,
                yMax: 5,
                color: '#2a6f97',
                lineWidth: 3,
                title: '罗尔定理：f(a) = f(b)，存在 ξ 使 f\'(ξ) = 0',
                points: [
                    { x: a, y: fa, label: 'A(a, f(a))', color: '#c62828' },
                    { x: b, y: fb, label: 'B(b, f(b))', color: '#c62828' },
                    { x: xi, y: rolleFn(xi), label: 'ξ', color: '#e65100' }
                ],
                lines: [
                    { x1: -1.5, y1: rolleFn(xi), x2: 1.5, y2: rolleFn(xi), label: '水平切线', color: '#e65100', dash: [5, 5] }
                ],
                grid: true,
                axes: true
            });
        } catch(e) { console.warn('罗尔定理绘图失败:', e); }

        // ===== 拉格朗日中值定理 =====
        // ===== 拉格朗日中值定理 =====
try {
    function lagrangeFn(x) {
        return 0.5 * x * x + 0.3 * x + 1;
    }
    var a2 = -2, b2 = 2.5;
    var fa2 = lagrangeFn(a2), fb2 = lagrangeFn(b2);
    var slope = (fb2 - fa2) / (b2 - a2);
    var xi2 = slope - 0.3;
    var tangentSlope = slope;  // 切线的斜率 = 弦的斜率

    Plotter.draw({
        fn: lagrangeFn,
        target: 'lagrangeCanvas',
        width: 500,
        height: 300,
        xMin: -2.8,
        xMax: 2.8,
        yMin: -0.5,
        yMax: 6,
        color: '#2a6f97',
        lineWidth: 3,
        title: '拉格朗日中值定理：切线平行于弦',
        points: [
            { x: a2, y: fa2, label: 'A(a, f(a))', color: '#c62828' },
            { x: b2, y: fb2, label: 'B(b, f(b))', color: '#c62828' },
            { x: xi2, y: lagrangeFn(xi2), label: '(ξ, f(ξ))', color: '#e65100' }
        ],
        lines: [
            { x1: a2, y1: fa2, x2: b2, y2: fb2, label: '弦', color: '#888', dash: [6, 4] },
            // 添加切线：通过切点 (xi2, f(xi2))，斜率为 tangentSlope
            { 
                x1: xi2 - 2, 
                y1: lagrangeFn(xi2) - tangentSlope * 2, 
                x2: xi2 + 2, 
                y2: lagrangeFn(xi2) + tangentSlope * 2, 
                label: '切线', 
                color: '#e65100', 
                dash: [] 
            }
        ],
        grid: true,
        axes: true
    });
} catch(e) { console.warn('拉格朗日中值定理绘图失败:', e); }
    });
}, 300);