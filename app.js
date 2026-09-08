(function() {
    'use strict';

    console.log('app.js 加载');

    // 工具
    const $ = (id) => document.getElementById(id);
    const showToast = (msg) => {
        const t = $('toast');
        if (t) {
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2000);
        }
    };

    // 模块变量
    let calculator, parser, visualizer, integration, differentiation;
    let matrixOps, eigenSolver, luSolver, odeSolver, pdeSolver, interpTool, exprVector;

    // 初始化模块
    try { calculator = new CalculatorCore(); } catch(e) { console.error('CalculatorCore 加载失败', e); }
    try { parser = new LatexParser(); } catch(e) { console.error('LatexParser 加载失败', e); }
    try { visualizer = new VectorVisualizer(); } catch(e) { console.error('VectorVisualizer 加载失败', e); }
    try { integration = new NumericalIntegration(); } catch(e) { console.error('NumericalIntegration 加载失败', e); }
    try { differentiation = new NumericalDifferentiation(); } catch(e) { console.error('NumericalDifferentiation 加载失败', e); }
    try { matrixOps = new MatrixOperations(); } catch(e) { console.error('MatrixOperations 加载失败', e); }
    try { eigenSolver = new EigenSolver(); } catch(e) { console.error('EigenSolver 加载失败', e); }
    try { luSolver = new LUDecomposition(); } catch(e) { console.error('LUDecomposition 加载失败', e); }
    try { odeSolver = new ODESolver(); } catch(e) { console.error('ODESolver 加载失败', e); }
    try { pdeSolver = new PDESolver(); } catch(e) { console.error('PDESolver 加载失败', e); }
    try { interpTool = new Interpolation(); } catch(e) { console.error('Interpolation 加载失败', e); }
    try { exprVector = new ExpressionVector(); } catch(e) { console.error('ExpressionVector 加载失败', e); }

    // 变量检测
    function detectVariable(expr) {
        const letters = 'xyztr uvwabcdefghijklmnopqs'.replace(/\s/g,'').split('');
        const greek = 'αβγδεζηθικλμνξπρστυφχψω'.split('');
        for (const l of letters) if (expr.includes(l)) return l;
        for (const g of greek) if (expr.includes(g)) return g;
        return 'x';
    }

    // 主输入与预览
    const mainInput = $('mainInput');
    const previewArea = $('previewArea');

    function updatePreview() {
        if (!mainInput || !previewArea) return;
        const latex = mainInput.value.trim();
        if (!latex) {
            previewArea.innerHTML = '<span class="preview-empty">📝 上方输入后此处显示渲染结果</span>';
        } else {
            try {
                previewArea.innerHTML = katex.renderToString(latex, { displayMode: true, throwOnError: false });
            } catch (e) {
                previewArea.innerHTML = `<span style="color:red;">⚠️ ${e.message}</span>`;
            }
        }
        updateCalcPanel();
    }

    function updateCalcPanel() {
        if (!calculator || !parser) return;
        const exprDisplay = $('calcExprDisplay');
        const varsArea = $('calcVarsArea');
        const resultDisplay = $('calcResultDisplay');
        const errorDisplay = $('calcError');
        if (!exprDisplay) return;

        const latex = mainInput ? mainInput.value.trim() : '';
        if (!latex) {
            exprDisplay.textContent = '—';
            if (varsArea) varsArea.innerHTML = '';
            if (resultDisplay) resultDisplay.textContent = '—';
            if (errorDisplay) errorDisplay.style.display = 'none';
            return;
        }

        try {
            const expression = calculator.parse(latex);
            exprDisplay.textContent = expression;
            const vars = calculator.extractVariables(expression);
            if (varsArea) {
                varsArea.innerHTML = '';
                vars.forEach(v => {
                    const span = document.createElement('span');
                    span.innerHTML = `${v} = `;
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'var-input';
                    input.value = calculator.variables[v] !== undefined ? calculator.variables[v] : '';
                    input.addEventListener('input', () => {
                        calculator.setVariable(v, input.value);
                        if (calculator.getMissingVariables(vars).length === 0) {
                            const r = calculator.process(latex);
                            if (r.success && resultDisplay) {
                                resultDisplay.textContent = r.result;
                                if (errorDisplay) errorDisplay.style.display = 'none';
                            }
                        }
                    });
                    span.appendChild(input);
                    varsArea.appendChild(span);
                });
            }
            if (calculator.getMissingVariables(vars).length === 0 && resultDisplay) {
                const r = calculator.process(latex);
                if (r.success) {
                    resultDisplay.textContent = r.result;
                    if (errorDisplay) errorDisplay.style.display = 'none';
                }
            }
        } catch (e) {
            console.error('计算面板更新失败', e);
        }
    }

    if (mainInput) mainInput.addEventListener('input', updatePreview);

    // 按钮事件绑定
    $('btnCalculate')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入公式'); return; }
        const result = calculator.process(latex);
        const rd = $('calcResultDisplay');
        const ed = $('calcError');
        if (rd) {
            if (result.success) { rd.textContent = result.result; if (ed) ed.style.display = 'none'; }
            else { rd.textContent = '—'; if (ed) { ed.textContent = result.message; ed.style.display = 'block'; } }
        }
    });

    $('btnCopyLatex')?.addEventListener('click', async () => {
        const latex = mainInput ? mainInput.value : '';
        if (!latex.trim()) { showToast('⚠️ 没有内容可复制'); return; }
        try { await navigator.clipboard.writeText(latex); showToast('✅ 已复制'); } catch { showToast('✅ 已复制'); }
    });

    $('btnClearAll')?.addEventListener('click', () => {
        if (mainInput) { mainInput.value = ''; updatePreview(); showToast('🗑️ 已清空'); }
    });

    $('btnExample')?.addEventListener('click', () => {
        const examples = [
            '\\frac{-b + \\sqrt{b^2 - 4ac}}{2a}',
            'x^2 + y^2',
            '\\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}',
            '\\sin(t) + \\cos(t)',
            'E = mc^2'
        ];
        mainInput.value = examples[Math.floor(Math.random() * examples.length)];
        updatePreview();
        showToast('📐 已加载示例');
    });

    // 向量
    $('btnDrawVector')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入向量'); return; }
        try {
            const container = $('vectorCanvasContainer');
            visualizer.container = container;
            const canvas = visualizer.visualizeVectors(latex, { showGrid: $('vectorGrid').checked, width: container.clientWidth, height: 400 });
            container.innerHTML = '';
            container.appendChild(canvas);
            showToast('✅ 绘制成功');
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 绘图
    $('btnPlot')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入函数'); return; }
        try {
            const variable = detectVariable(latex);
            const container = $('plotCanvasContainer');
            visualizer.container = container;
            const canvas = visualizer.visualizeFunction(latex, {
                xMin: parseFloat($('xMin').value), xMax: parseFloat($('xMax').value),
                showGrid: $('plotGrid').checked, width: container.clientWidth, height: 400,
                variable: variable
            });
            container.innerHTML = '';
            container.appendChild(canvas);
            showToast('✅ 绘图成功');
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 积分
    $('btnIntegrate')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入被积函数'); return; }
        try {
            const parsed = parser.parse(latex);
            const variable = detectVariable(latex);
            const f = (val) => math.evaluate(parsed, { [variable]: val });
            const a = parseFloat($('intLower').value);
            const b = parseFloat($('intUpper').value);
            const result = integration.adaptiveSimpson(f, a, b);
            $('integralResult').innerHTML = `∫ ≈ <strong>${result.value.toPrecision(10)}</strong>`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 多重积分
    $('multiIntType')?.addEventListener('change', () => {
        $('doubleIntBounds').style.display = $('multiIntType').value === 'double' ? 'flex' : 'none';
        $('tripleIntBounds').style.display = $('multiIntType').value === 'triple' ? 'flex' : 'none';
    });

    $('btnMultiIntegrate')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入函数'); return; }
        try {
            const parsed = parser.parse(latex);
            const type = $('multiIntType').value;
            const rb = $('multiIntegralResult');
            const node = math.parse(parsed);
            const vars = new Set();
            node.traverse(n => { if (n.type === 'SymbolNode' && n.name.length === 1) vars.add(n.name); });
            const varList = Array.from(vars).sort();
            if (type === 'double') {
                if (varList.length < 2) { showToast('需要 2 个变量'); return; }
                const v1 = varList[0], v2 = varList[1];
                const f = (a, b) => math.evaluate(parsed, { [v1]: a, [v2]: b });
                const result = integration.doubleIntegral(f, parseFloat($('ax').value), parseFloat($('bx').value), parseFloat($('ay').value), parseFloat($('by').value));
                rb.innerHTML = `∫∫ ≈ <strong>${result.toPrecision(10)}</strong>`;
            } else {
                if (varList.length < 3) { showToast('需要 3 个变量'); return; }
                const v1 = varList[0], v2 = varList[1], v3 = varList[2];
                const f = (a, b, c) => math.evaluate(parsed, { [v1]: a, [v2]: b, [v3]: c });
                const result = integration.tripleIntegral(f, parseFloat($('tax').value), parseFloat($('tbx').value), parseFloat($('tay').value), parseFloat($('tby').value), parseFloat($('taz').value), parseFloat($('tbz').value));
                rb.innerHTML = `∫∫∫ ≈ <strong>${result.toPrecision(10)}</strong>`;
            }
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 求导
    $('btnDerivative')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入函数'); return; }
        try {
            const parsed = parser.parse(latex);
            const variable = detectVariable(latex);
            const f = (val) => math.evaluate(parsed, { [variable]: val });
            const point = parseFloat($('derivPoint').value);
            const method = $('derivMethod').value;
            let result;
            switch(method) {
                case 'forward': result = differentiation.forward(f, point); break;
                case 'backward': result = differentiation.backward(f, point); break;
                case 'fivePoint': result = differentiation.fivePoint(f, point); break;
                default: result = differentiation.central(f, point);
            }
            $('derivativeResult').innerHTML = `f'(${point}) ≈ <strong>${result.toPrecision(10)}</strong>`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 矩阵
    document.querySelectorAll('[data-matrix-op]').forEach(btn => {
        btn.addEventListener('click', () => {
            const latex = mainInput.value.trim();
            if (!latex) { showToast('请输入矩阵'); return; }
            try {
                const A = matrixOps.parseMatrix(latex).matrix;
                const op = btn.dataset.matrixOp;
                let result;
                switch(op) {
                    case 'transpose': result = matrixOps.transpose(A); break;
                    case 'det': result = matrixOps.determinant(A); break;
                    case 'inverse': result = matrixOps.inverse(A); break;
                    case 'trace': result = matrixOps.trace(A); break;
                }
                const rd = $('matrixResult');
                if (Array.isArray(result)) {
                    rd.innerHTML = result.map(r => `[${r.join(', ')}]`).join('<br>');
                } else {
                    rd.textContent = String(result);
                }
            } catch (e) { showToast('❌ ' + e.message); }
        });
    });

    // 特征值
    $('btnEigen')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入矩阵'); return; }
        try {
            const A = matrixOps.parseMatrix(latex).matrix;
            const rb = $('eigenResult');
            if (A.length === 2 && A[0].length === 2) {
                const results = eigenSolver.eigen2x2(A);
                rb.innerHTML = results.map((r, i) => r.isComplex ? `λ${i+1} = ${r.eigenvalue.real}+${r.eigenvalue.imag}i` : `λ${i+1} = ${r.eigenvalue.toPrecision(6)}`).join('<br>');
            } else {
                rb.innerHTML = `特征值: ${eigenSolver.eigenvalues(A).map(e => e.toPrecision(6)).join(', ')}`;
            }
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // LU
    $('btnLU')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入矩阵'); return; }
        try {
            const A = matrixOps.parseMatrix(latex).matrix;
            const { L, U } = luSolver.decompose(A);
            $('luResult').innerHTML = `L =<br>${L.map(r => `[${r.join(', ')}]`).join('<br>')}<br>U =<br>${U.map(r => `[${r.join(', ')}]`).join('<br>')}`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // ODE
    $('btnODE')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入 dy/dx'); return; }
        try {
            const parsed = parser.parse(latex);
            const f = (x, y) => math.evaluate(parsed, { x, y });
            const results = odeSolver.solve(f, parseFloat($('odeX0').value), parseFloat($('odeY0').value), parseFloat($('odeXEnd').value), { method: $('odeMethod').value, h: 0.01 });
            const last = results[results.length - 1];
            $('odeResult').innerHTML = `y = <strong>${last.y.toPrecision(6)}</strong>`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // PDE
    $('btnPDESolve')?.addEventListener('click', () => {
        const initStr = $('pdeInitial').value.trim();
        const coeff = parseFloat($('pdeCoeff').value);
        const tMax = parseFloat($('pdeTMax').value);
        const nx = parseInt($('pdeNx').value);
        const nt = parseInt($('pdeNt').value);
        const makeFunc = (expr) => (x) => math.evaluate(expr, { x, pi: Math.PI, sin: Math.sin, cos: Math.cos, exp: Math.exp });
        let result;
        try {
            const type = $('pdeType').value;
            if (type === 'heat') result = pdeSolver.heat1D(makeFunc(initStr), 0, 1, tMax, coeff, nx, nt);
            else if (type === 'wave') result = pdeSolver.wave1D(makeFunc(initStr), () => 0, 0, 1, tMax, coeff, nx, nt);
            else result = pdeSolver.poisson2D(() => 0, 0, 1, 0, 1, nx, nx);
            const lastU = result.u[result.u.length - 1];
            $('pdeResult').innerHTML = `最大|u| = ${Math.max(...lastU.map(Math.abs)).toPrecision(6)}`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 插值
    $('btnInterp')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入数据点矩阵'); return; }
        try {
            const matrix = matrixOps.parseMatrix(latex).matrix;
            let points = matrix.filter(r => r.length >= 2).map(r => [Number(r[0]), Number(r[1])]);
            const x = parseFloat($('interpX').value);
            const method = $('interpMethod').value;
            let result;
            switch(method) {
                case 'newton': result = interpTool.newton(points, x); break;
                case 'cubicSpline': result = interpTool.cubicSpline(points, x); break;
                case 'piecewiseLinear': result = interpTool.piecewiseLinear(points, x); break;
                default: result = interpTool.lagrange(points, x);
            }
            $('interpResult').innerHTML = `f(${x}) ≈ <strong>${result.toPrecision(10)}</strong>`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 表达式生成向量
    $('btnGenVector')?.addEventListener('click', () => {
        const latex = mainInput.value.trim();
        if (!latex) { showToast('请输入函数'); return; }
        try {
            const xMin = parseFloat($('evXMin').value);
            const xMax = parseFloat($('evXMax').value);
            const count = parseInt($('evCount').value);
            const variable = detectVariable(latex);
            const result = exprVector.fromFunction(latex, variable, xMin, xMax, count);
            $('evResult').innerHTML = `自变量: ${result.variable}<br>x 向量:<br>${result.latex.xVector}<br>y 向量:<br>${result.latex.yVector}`;
        } catch (e) { showToast('❌ ' + e.message); }
    });

    // 符号面板
    if (typeof symbolCategories !== 'undefined') {
        let popupActiveCategory = Object.keys(symbolCategories)[0];
        let popupSearchQuery = '';
        const popupCategories = $('popupCategories');
        const popupGrid = $('popupGrid');
        const popupSearch = $('popupSearch');

        function renderPopupCategories() {
            if (!popupCategories) return;
            popupCategories.innerHTML = '';
            Object.keys(symbolCategories).forEach(catName => {
                const btn = document.createElement('button');
                btn.className = 'popup-category-tab' + (catName === popupActiveCategory ? ' active' : '');
                btn.textContent = catName;
                btn.addEventListener('click', () => { popupActiveCategory = catName; renderPopupCategories(); renderPopupGrid(); });
                popupCategories.appendChild(btn);
            });
        }

        function renderPopupGrid() {
            if (!popupGrid) return;
            popupGrid.innerHTML = '';
            const symbols = symbolCategories[popupActiveCategory] || [];
            const query = popupSearchQuery.toLowerCase().trim();
            const filtered = symbols.filter(s => !query || s.char.toLowerCase().includes(query) || s.latex.toLowerCase().includes(query));
            filtered.forEach(s => {
                const btn = document.createElement('button');
                btn.className = 'symbol-btn';
                btn.style.cssText = 'display:flex;flex-direction:column;align-items:center;padding:8px;border:1px solid #ddd;border-radius:6px;cursor:pointer;';
                btn.title = s.latex;
                btn.innerHTML = `<span style="font-size:1.2rem;">${s.char}</span><span style="font-size:0.6rem;">${s.latex}</span>`;
                btn.addEventListener('click', () => {
                    if (mainInput) {
                        mainInput.value += s.latex;
                        updatePreview();
                    }
                    closePopup();
                });
                popupGrid.appendChild(btn);
            });
        }

        function openPopup() {
            $('modalOverlay').classList.add('open');
            $('symbolPopup').classList.add('open');
            renderPopupCategories();
            renderPopupGrid();
        }
        function closePopup() {
            $('modalOverlay').classList.remove('open');
            $('symbolPopup').classList.remove('open');
            popupSearch.value = '';
            popupSearchQuery = '';
        }

        $('symbolFloatBtn')?.addEventListener('click', openPopup);
        $('symbolPopupClose')?.addEventListener('click', closePopup);
        $('modalOverlay')?.addEventListener('click', closePopup);
        popupSearch?.addEventListener('input', e => { popupSearchQuery = e.target.value; renderPopupGrid(); });
    }

    // 折叠面板
    document.querySelectorAll('.tool-card-header').forEach(header => {
        header.addEventListener('click', () => header.parentElement.classList.toggle('open'));
    });

    // 初始化
    if (mainInput) {
        mainInput.value = '\\frac{-b + \\sqrt{b^2 - 4ac}}{2a}';
        updatePreview();
    }
    document.querySelector('.tool-card[data-tool="calc"]')?.classList.add('open');
    console.log('app.js 加载完成');
})();