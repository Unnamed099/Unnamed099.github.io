window.SECTION_CONTENT = `
<h4>📐 函数的微分</h4>

<h4>📐 微分的引入——一个具体问题</h4>

<p>先分析一个具体问题：一块正方形金属薄片受温度变化的影响，其边长由 <span class="formula-inline" data-latex="x_0"></span> 变到 <span class="formula-inline" data-latex="x_0 + \\Delta x"></span>（图2-10），问此薄片的面积改变了多少？</p>

<p>设此薄片的边长为 <span class="formula-inline" data-latex="x"></span>，面积为 <span class="formula-inline" data-latex="A"></span>，则 <span class="formula-inline" data-latex="A"></span> 与 <span class="formula-inline" data-latex="x"></span> 存在函数关系：<span class="formula-inline" data-latex="A = x^2"></span>。薄片受温度变化的影响时面积的改变量可以看成是当自变量 <span class="formula-inline" data-latex="x"></span> 自 <span class="formula-inline" data-latex="x_0"></span> 取得增量 <span class="formula-inline" data-latex="\\Delta x"></span> 时，函数 <span class="formula-inline" data-latex="A = x^2"></span> 相应的增量 <span class="formula-inline" data-latex="\\Delta A"></span>，即</p>

<div class="formula-block" data-latex="\\Delta A = (x_0 + \\Delta x)^2 - x_0^2 = 2x_0\\Delta x + (\\Delta x)^2"></div>

<p>从上述可以看出，<span class="formula-inline" data-latex="\\Delta A"></span> 分成两部分：</p>

<ul>
  <li><strong>第一部分</strong> <span class="formula-inline" data-latex="2x_0\\Delta x"></span> 是 <span class="formula-inline" data-latex="\\Delta x"></span> 的<strong>线性函数</strong>，即图中带有斜线的两个矩形面积之和</li>
  <li><strong>第二部分</strong> <span class="formula-inline" data-latex="(\\Delta x)^2"></span> 在图中是带有交叉斜线的小正方形的面积</li>
</ul>

<p>当 <span class="formula-inline" data-latex="\\Delta x \\to 0"></span> 时，第二部分 <span class="formula-inline" data-latex="(\\Delta x)^2"></span> 是比 <span class="formula-inline" data-latex="\\Delta x"></span> <strong>高阶的无穷小</strong>，即 <span class="formula-inline" data-latex="(\\Delta x)^2 = o(\\Delta x)"></span>。由此可见，如果边长改变很微小，即 <span class="formula-inline" data-latex="|\\Delta x|"></span> 很小时，面积的改变量 <span class="formula-inline" data-latex="\\Delta A"></span> 可近似地用第一部分来代替。</p>

<!-- 正方形面积变化示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="squareCanvas" width="420" height="380" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<p><strong>分析总结：</strong></p>

<table>
  <tr>
    <th>部分</th>
    <th>表达式</th>
    <th>几何意义</th>
    <th>性质</th>
  </tr>
  <tr>
    <td><strong>线性主部</strong></td>
    <td><span class="formula-inline" data-latex="2x_0\\Delta x"></span></td>
    <td>两个矩形的面积（上、右）</td>
    <td>是 <span class="formula-inline" data-latex="\\Delta x"></span> 的线性函数</td>
  </tr>
  <tr>
    <td><strong>高阶无穷小</strong></td>
    <td><span class="formula-inline" data-latex="(\\Delta x)^2"></span></td>
    <td>小正方形的面积（右上角）</td>
    <td><span class="formula-inline" data-latex="(\\Delta x)^2 = o(\\Delta x)"></span></td>
  </tr>
</table>

<p>这个例子揭示了微分的本质：</p>

<div class="note">
  <strong>💡 核心思想：</strong>
  <p>当自变量发生微小变化时，函数的增量 <span class="formula-inline" data-latex="\\Delta y"></span> 可以分为两部分：</p>
  <p>• <strong>线性主部</strong> <span class="formula-inline" data-latex="dy = f'(x_0)\\Delta x"></span>（与 <span class="formula-inline" data-latex="\\Delta x"></span> 成正比）</p>
  <p>• <strong>高阶无穷小</strong> <span class="formula-inline" data-latex="o(\\Delta x)"></span>（比 <span class="formula-inline" data-latex="\\Delta x"></span> 更快地趋于 0）</p>
  <p>因此当 <span class="formula-inline" data-latex="|\\Delta x|"></span> 很小时，可以用 <span class="formula-inline" data-latex="dy"></span> 来近似 <span class="formula-inline" data-latex="\\Delta y"></span>。</p>
</div>

<h4>📘 例题：类似问题——圆面积的变化</h4>

<div class="example">
  <p><strong>题目：</strong> 圆的半径从 <span class="formula-inline" data-latex="r_0"></span> 增加到 <span class="formula-inline" data-latex="r_0 + \\Delta r"></span>，求圆面积的改变量，并指出其线性主部。</p>
  
  <p><strong>解：</strong></p>
  <p>面积 <span class="formula-inline" data-latex="A = \\pi r^2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Delta A = \\pi(r_0 + \\Delta r)^2 - \\pi r_0^2 = 2\\pi r_0\\Delta r + \\pi(\\Delta r)^2"></span>
  </p>
  
  <p><strong>线性主部：</strong> <span class="formula-inline" data-latex="dA = 2\\pi r_0\\Delta r = A'(r_0)\\Delta r"></span></p>
  
  <p><strong>高阶无穷小：</strong> <span class="formula-inline" data-latex="\\pi(\\Delta r)^2 = o(\\Delta r)"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 当 <span class="formula-inline" data-latex="\\Delta r"></span> 很小时，<span class="formula-inline" data-latex="\\Delta A \\approx 2\\pi r_0\\Delta r"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 这个具体问题直观地展示了微分的几何意义：函数的增量 ≈ 线性主部 + 高阶无穷小。这正是微分定义的来源，也是"以直代曲"思想的体现。
  </p>
</div>

<h5>1. 微分的定义</h5>

<p>在实际问题中，我们经常需要研究当自变量 <span class="formula-inline" data-latex="x"></span> 发生微小变化 <span class="formula-inline" data-latex="\\Delta x"></span> 时，函数值 <span class="formula-inline" data-latex="y = f(x)"></span> 的相应变化 <span class="formula-inline" data-latex="\\Delta y"></span>。</p>

<p><strong>定义：</strong> 设函数 <span class="formula-inline" data-latex="y = f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 的某邻域内有定义，如果增量</p>

<div class="formula-block" data-latex="\\Delta y = f(x_0 + \\Delta x) - f(x_0)"></div>

<p>可以表示为</p>

<div class="formula-block" data-latex="\\Delta y = A \\cdot \\Delta x + o(\\Delta x)"> </div>

<p>其中 <span class="formula-inline" data-latex="A"></span> 是与 <span class="formula-inline" data-latex="\\Delta x"></span> 无关的常数，<span class="formula-inline" data-latex="o(\\Delta x)"></span> 是 <span class="formula-inline" data-latex="\\Delta x"></span> 的高阶无穷小，则称函数 <span class="formula-inline" data-latex="f(x)"></span> 在点 <span class="formula-inline" data-latex="x_0"></span> 处<strong>可微</strong>，并称 <span class="formula-inline" data-latex="A \\cdot \\Delta x"></span> 为函数在点 <span class="formula-inline" data-latex="x_0"></span> 处的<strong>微分</strong>，记作</p>

<div class="formula-block" data-latex="dy = A \\cdot \\Delta x = f'(x_0) \\cdot dx"></div>

<p>其中 <span class="formula-inline" data-latex="dx = \\Delta x"></span> 称为自变量的微分。</p>

<div class="note">
  <strong>💡 关键理解：</strong>
  <p>• <span class="formula-inline" data-latex="dy = f'(x_0) dx"></span> 是 <span class="formula-inline" data-latex="\\Delta y"></span> 的<strong>线性主部</strong></p>
  <p>• 当 <span class="formula-inline" data-latex="\\Delta x"></span> 很小时，<span class="formula-inline" data-latex="\\Delta y \\approx dy"></span></p>
  <p>• 可导 <span class="formula-inline" data-latex="\\Leftrightarrow"></span> 可微（两者等价）</p>
</div>

<h5>2. 微分的几何意义</h5>

<p>在曲线 <span class="formula-inline" data-latex="y = f(x)"></span> 上取点 <span class="formula-inline" data-latex="M(x_0, y_0)"></span>，当自变量从 <span class="formula-inline" data-latex="x_0"></span> 变为 <span class="formula-inline" data-latex="x_0 + \\Delta x"></span> 时：</p>

<ul>
  <li><span class="formula-inline" data-latex="\\Delta y = f(x_0 + \\Delta x) - f(x_0)"></span> 是曲线上的<strong>纵坐标增量</strong>，也就是N点与M点的y值差</li>
  <li><span class="formula-inline" data-latex="dy = f'(x_0) dx"></span> 是<strong>切线上对应的纵坐标增量</strong></li>
  <li><span class="formula-inline" data-latex="\\Delta y - dy = o(\\Delta x)"></span> 是<strong>曲线与切线之间的误差</strong></li>
</ul>

<p>简而言之导数是微分走向极限</p>
<p><strong>几何关系：</strong></p>

<!-- 微分几何示意图 -->
<div style="text-align:center; margin:15px 0;">
  <canvas id="diffCanvas" width="520" height="360" style="border:2px solid #d7ccc8; border-radius:8px; background:#faf8f5; max-width:100%;"></canvas>
</div>

<p><strong>几何关系总结：</strong></p>

<table>
  <tr>
    <th>符号</th>
    <th>几何意义</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta x = dx"></span></td>
    <td>横坐标增量（MN 的水平距离）</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta y"></span></td>
    <td>曲线上纵坐标增量（M到N的垂直距离）</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="dy = f'(x_0) dx"></span></td>
    <td>切线上纵坐标增量（M到P的垂直距离）</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta y - dy"></span></td>
    <td>曲线与切线在 <span class="formula-inline" data-latex="x_0 + \\Delta x"></span> 处的纵向距离</td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\Delta y \\approx dy"></span></td>
    <td><span class="formula-inline" data-latex="\\Delta x"></span> 很小时，<span class="formula-inline" data-latex="\\Delta y - dy = o(\\Delta x)"></span></td>
  </tr>
</table>

<h5>3. 微分的运算法则</h5>

<p>由导数的运算法则，可直接得到微分的运算法则：</p>

<table>
  <tr>
    <th>法则</th>
    <th>微分形式</th>
  </tr>
  <tr>
    <td><strong>和（差）法则</strong></td>
    <td><span class="formula-inline" data-latex="d(u \\pm v) = du \\pm dv"></span></td>
  </tr>
  <tr>
    <td><strong>乘积法则</strong></td>
    <td><span class="formula-inline" data-latex="d(uv) = v \\, du + u \\, dv"></span></td>
  </tr>
  <tr>
    <td><strong>商法则</strong></td>
    <td><span class="formula-inline" data-latex="d\\left(\\frac{u}{v}\\right) = \\frac{v \\, du - u \\, dv}{v^2} \\quad (v \\neq 0)"></span></td>
  </tr>
  <tr>
    <td><strong>复合函数</strong></td>
    <td><span class="formula-inline" data-latex="dy = f'(u) \\, du"></span>（微分形式不变性）</td>
  </tr>
</table>

<div class="note">
  <strong>💡 微分形式不变性：</strong>
  <p>无论 <span class="formula-inline" data-latex="u"></span> 是自变量还是中间变量，都有</p>
  <p style="text-align: center;"><span class="formula-inline" data-latex="dy = f'(u) \\, du"></span></p>
  <p>这是微分运算的重要性质，使微分的应用更加灵活。</p>
</div>

<h4>📘 例题：计算微分</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="y = x^3 + 2x^2 - 5x + 3"></span> 在 <span class="formula-inline" data-latex="x = 2"></span>，<span class="formula-inline" data-latex="\\Delta x = 0.1"></span> 时的微分。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="y' = 3x^2 + 4x - 5"></span></p>
  <p><span class="formula-inline" data-latex="y'(2) = 3 \\times 4 + 4 \\times 2 - 5 = 12 + 8 - 5 = 15"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="dy = y'(2) \\cdot dx = 15 \\times 0.1 = 1.5"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="dy = 1.5"></span></p>
</div>

<h4>📘 例题：利用微分近似计算</h4>

<div class="example">
  <p><strong>题目：</strong> 利用微分近似计算 <span class="formula-inline" data-latex="\\sqrt{25.1}"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>取 <span class="formula-inline" data-latex="f(x) = \\sqrt{x}"></span>，<span class="formula-inline" data-latex="x_0 = 25"></span>，<span class="formula-inline" data-latex="\\Delta x = 0.1"></span></p>
  <p><span class="formula-inline" data-latex="f'(x) = \\frac{1}{2\\sqrt{x}}"></span>，<span class="formula-inline" data-latex="f'(25) = \\frac{1}{2 \\times 5} = 0.1"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\sqrt{25.1} = f(25 + 0.1) \\approx f(25) + f'(25) \\cdot 0.1 = 5 + 0.1 \\times 0.1 = 5.01"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\sqrt{25.1} \\approx 5.01"></span>（精确值约为 5.00999）</p>
</div>

<h4>📘 例题：微分在误差估计中的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 测量圆的半径得到 <span class="formula-inline" data-latex="r = 10\\text{ cm}"></span>，测量误差不超过 <span class="formula-inline" data-latex="\\pm 0.05\\text{ cm}"></span>。估计圆的面积误差。</p>
  
  <p><strong>解：</strong></p>
  <p>面积 <span class="formula-inline" data-latex="A = \\pi r^2"></span>，<span class="formula-inline" data-latex="A'(r) = 2\\pi r"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="dA = A'(10) \\cdot dr = 2\\pi \\times 10 \\times 0.05 = \\pi\\text{ cm}^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 面积误差约为 <span class="formula-inline" data-latex="\\pm\\pi\\text{ cm}^2 \\approx \\pm 3.14\\text{ cm}^2"></span></p>
  
  <div style="background: #fff3e0; padding: 8px 12px; border-radius: 4px; margin-top: 8px;">
    <p style="margin: 0; font-size: 0.9rem;">💡 这就是微分在<strong>误差估计</strong>中的典型应用：用微分近似计算函数的误差。</p>
  </div>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 微分是微积分中与导数同等重要的概念。它从"线性近似"的角度看问题，为近似计算、误差估计提供了有力工具。微分的几何意义将抽象的代数运算与直观的几何图像联系起来，而微分形式不变性则使微分的应用更加灵活。
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
            callback();
        };
        document.head.appendChild(script);
    }

    loadPlotter(function() {
        if (typeof Plotter !== 'undefined') {
            // 使用 plotter.js 的专用绘图方法
            Plotter.drawSquareDiagram('squareCanvas', {
                x0: 80,
                dx: 60,
                size: 200,
                title: '图2-10 正方形面积的变化'
            });

            Plotter.drawDiffDiagram('diffCanvas', {
                fn: function(x) { return 0.8 + 0.15 * x * x + 0.3 * x; },
                x0: 1.8,
                dx: 1.2,
                xMin: 0.5,
                xMax: 4.5,
                yMin: 0,
                yMax: 4,
                title: '微分的几何意义'
            });
        } else {
            // 后备：内联绘图（略，与之前相同）
            // 这里省略，因为 plotter.js 已包含这些方法
        }
    });
}, 300);