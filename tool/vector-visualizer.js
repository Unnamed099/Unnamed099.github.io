// ===== tool/vector-visualizer.js =====
// 向量可视化模块 - 完整版（自动识别变量）

class VectorVisualizer {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.width = 600;
        this.height = 400;
        this.padding = 50;
        this.container = null;
        this.xMin = -5;
        this.xMax = 5;
        this.yMin = -5;
        this.yMax = 5;
        this.showGrid = false;
    }

    createCanvas(width = this.width, height = this.height) {
        let maxWidth = width;
        let maxHeight = height;
        
        if (this.container) {
            const containerWidth = this.container.clientWidth;
            if (containerWidth > 0) {
                maxWidth = Math.min(width, containerWidth - 10);
            }
        }
        
        maxWidth = Math.min(maxWidth, window.innerWidth - 50);
        maxHeight = Math.min(maxHeight, window.innerHeight - 250);
        maxWidth = Math.max(maxWidth, 200);
        maxHeight = Math.max(maxHeight, 150);
        
        this.canvas = document.createElement('canvas');
        this.canvas.width = maxWidth;
        this.canvas.height = maxHeight;
        this.canvas.style.maxWidth = '100%';
        this.canvas.style.height = 'auto';
        this.ctx = this.canvas.getContext('2d');
        this.width = maxWidth;
        this.height = maxHeight;
        return this.canvas;
    }

    setViewport(xMin, xMax, yMin, yMax) {
        if (xMax - xMin < 1e-10) {
            const mid = (xMax + xMin) / 2;
            xMin = mid - 1;
            xMax = mid + 1;
        }
        if (yMax - yMin < 1e-10) {
            const mid = (yMax + yMin) / 2;
            yMin = mid - 1;
            yMax = mid + 1;
        }
        this.xMin = xMin;
        this.xMax = xMax;
        this.yMin = yMin;
        this.yMax = yMax;
    }

    autoViewport(data, margin = 1.5) {
        let minX = Infinity, maxX = -Infinity;
        let minY = Infinity, maxY = -Infinity;
        
        const processPoint = (x, y) => {
            if (typeof x === 'number' && isFinite(x)) {
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
            }
            if (typeof y === 'number' && isFinite(y)) {
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        };
        
        data.forEach(item => {
            if (Array.isArray(item)) {
                if (item.length >= 2) processPoint(item[0], item[1]);
            } else if (item && typeof item === 'object' && 'x' in item && 'y' in item) {
                processPoint(item.x, item.y);
            }
        });
        
        minX = Math.min(minX, 0);
        maxX = Math.max(maxX, 0);
        minY = Math.min(minY, 0);
        maxY = Math.max(maxY, 0);
        
        const rangeX = (maxX - minX) * margin;
        const rangeY = (maxY - minY) * margin;
        const midX = (maxX + minX) / 2;
        const midY = (maxY + minY) / 2;
        
        this.setViewport(
            midX - rangeX / 2,
            midX + rangeX / 2,
            midY - rangeY / 2,
            midY + rangeY / 2
        );
    }

    drawAxes() {
        const ctx = this.ctx;
        const pad = this.padding;
        const w = this.width;
        const h = this.height;
        
        ctx.fillStyle = '#1e1e1e';
        ctx.fillRect(0, 0, w, h);
        
        if (this.showGrid) {
            this.drawGridInternal();
        }
        
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        ctx.font = '11px monospace';
        ctx.fillStyle = '#aaa';
        
        const [originX, originY] = this.toCanvas(0, 0);
        const axisX = Math.max(pad, Math.min(w - pad, originX));
        const axisY = Math.max(pad, Math.min(h - pad, originY));
        
        ctx.beginPath();
        ctx.moveTo(pad, axisY);
        ctx.lineTo(w - pad, axisY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(axisX, pad);
        ctx.lineTo(axisX, h - pad);
        ctx.stroke();
        
        ctx.fillStyle = '#666';
        ctx.beginPath();
        ctx.moveTo(w - pad, axisY);
        ctx.lineTo(w - pad - 12, axisY - 5);
        ctx.lineTo(w - pad - 12, axisY + 5);
        ctx.fill();
        
        ctx.beginPath();
        ctx.moveTo(axisX, pad);
        ctx.lineTo(axisX - 5, pad + 12);
        ctx.lineTo(axisX + 5, pad + 12);
        ctx.fill();
        
        ctx.fillStyle = '#aaa';
        ctx.fillText('x', w - pad + 5, axisY - 5);
        ctx.fillText('y', axisX + 10, pad + 10);
        ctx.fillText('O', axisX - 15, axisY + 15);
        
        this.drawTicks(axisX, axisY);
    }

    drawTicks(axisX, axisY) {
        const ctx = this.ctx;
        const pad = this.padding;
        
        ctx.fillStyle = '#888';
        ctx.font = '10px monospace';
        
        const xTickCount = 5;
        for (let i = 0; i <= xTickCount; i++) {
            const dataX = this.xMin + (this.xMax - this.xMin) * i / xTickCount;
            const [px] = this.toCanvas(dataX, 0);
            ctx.beginPath();
            ctx.moveTo(px, axisY - 4);
            ctx.lineTo(px, axisY + 4);
            ctx.stroke();
            ctx.fillText(dataX.toFixed(1), px - 10, axisY + 20);
        }
        
        const yTickCount = 5;
        for (let i = 0; i <= yTickCount; i++) {
            const dataY = this.yMin + (this.yMax - this.yMin) * i / yTickCount;
            const [, py] = this.toCanvas(0, dataY);
            ctx.beginPath();
            ctx.moveTo(axisX - 4, py);
            ctx.lineTo(axisX + 4, py);
            ctx.stroke();
            ctx.fillText(dataY.toFixed(1), axisX - 30, py + 4);
        }
    }

    drawGridInternal() {
        const ctx = this.ctx;
        const pad = this.padding;
        const w = this.width;
        const h = this.height;
        
        ctx.strokeStyle = '#2a2a2a';
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i <= 10; i++) {
            const x = pad + (w - 2 * pad) * i / 10;
            ctx.beginPath();
            ctx.moveTo(x, pad);
            ctx.lineTo(x, h - pad);
            ctx.stroke();
        }
        
        for (let i = 0; i <= 10; i++) {
            const y = pad + (h - 2 * pad) * i / 10;
            ctx.beginPath();
            ctx.moveTo(pad, y);
            ctx.lineTo(w - pad, y);
            ctx.stroke();
        }
    }

    toCanvas(x, y) {
        const pad = this.padding;
        const w = this.width;
        const h = this.height;
        const px = pad + (x - this.xMin) / (this.xMax - this.xMin) * (w - 2 * pad);
        const py = h - pad - (y - this.yMin) / (this.yMax - this.yMin) * (h - 2 * pad);
        return [px, py];
    }

    drawVector(v, options = {}) {
        const color = options.color || '#4ec9b0';
        const label = options.label || '';
        const [x, y] = v;
        const [startX, startY] = this.toCanvas(0, 0);
        const [endX, endY] = this.toCanvas(x, y);
        
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = options.lineWidth || 2;
        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);
        this.ctx.lineTo(endX, endY);
        this.ctx.stroke();
        
        const angle = Math.atan2(endY - startY, endX - startX);
        this.drawArrow(endX, endY, angle, color);
        
        if (label) {
            this.ctx.fillStyle = color;
            this.ctx.font = '14px monospace';
            this.ctx.fillText(`${label}(${x}, ${y})`, endX + 12, endY - 10);
        }
    }

    drawArrow(x, y, angle, color) {
        const ctx = this.ctx;
        const arrowSize = 10;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - arrowSize * Math.cos(angle - Math.PI / 6), y - arrowSize * Math.sin(angle - Math.PI / 6));
        ctx.lineTo(x - arrowSize * Math.cos(angle + Math.PI / 6), y - arrowSize * Math.sin(angle + Math.PI / 6));
        ctx.closePath();
        ctx.fill();
    }

    drawVectors(vectors, options = {}) {
        const colors = options.colors || ['#4ec9b0', '#ce9178', '#569cd6', '#c586c0', '#dcdcaa', '#f44747'];
        this.showGrid = options.showGrid !== undefined ? options.showGrid : false;
        this.autoViewport(vectors);
        this.drawAxes();
        vectors.forEach((v, i) => {
            this.drawVector(v, {
                color: colors[i % colors.length],
                label: options.labels ? options.labels[i] : `v${i + 1}`
            });
        });
    }

    drawCurve(f, options = {}) {
        const xMin = options.xMin !== undefined ? options.xMin : -5;
        const xMax = options.xMax !== undefined ? options.xMax : 5;
        const steps = options.steps || 200;
        
        const points = [];
        for (let i = 0; i <= steps; i++) {
            const x = xMin + (xMax - xMin) * i / steps;
            const y = f(x);
            if (isFinite(y)) points.push([x, y]);
        }
        
        this.showGrid = options.showGrid !== undefined ? options.showGrid : false;
        this.autoViewport(points);
        this.drawAxes();
        
        this.ctx.strokeStyle = options.color || '#569cd6';
        this.ctx.lineWidth = options.lineWidth || 2;
        this.ctx.beginPath();
        points.forEach((p, i) => {
            const [px, py] = this.toCanvas(p[0], p[1]);
            i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
        });
        this.ctx.stroke();
    }

    visualizeVectors(latex, options = {}) {
        const ev = new ExpressionVector();
        const vectors = ev.fromMatrix(latex);
        
        let vec2d = [];
        if (vectors.length >= 2 && !Array.isArray(vectors[0])) {
            vec2d = [[Number(vectors[0]), Number(vectors[1])]];
        } else {
            vec2d = vectors.filter(v => Array.isArray(v) && v.length >= 2)
                           .map(v => [Number(v[0]), Number(v[1])]);
        }
        
        if (vec2d.length === 0) {
            throw new Error('无法解析向量，请使用 \\begin{pmatrix}x \\\\ y\\end{pmatrix} 格式');
        }
        
        this.createCanvas(options.width || 600, options.height || 400);
        this.drawVectors(vec2d, options);
        return this.canvas;
    }

    /**
     * 自动检测表达式中的自变量
     */
    detectVariable(expression) {
        const candidates = ['x', 'y', 'z', 't', 'r', 'u', 'v', 'w'];
        for (let v of candidates) {
            const regex = new RegExp(`\\b${v}\\b`);
            if (regex.test(expression)) return v;
        }
        try {
            const node = math.parse(expression);
            const knownNames = new Set(['sin', 'cos', 'tan', 'log', 'ln', 'exp', 'sqrt', 'abs', 'pi', 'e', 'Infinity']);
            const vars = new Set();
            node.traverse((n) => {
                if (n.type === 'SymbolNode' && !knownNames.has(n.name) && n.name.length === 1) {
                    vars.add(n.name);
                }
            });
            if (vars.size > 0) return Array.from(vars).sort()[0];
        } catch (e) {}
        return 'x';
    }

    /**
     * 从函数生成图像（自动识别变量）
     */
    visualizeFunction(latexFunc, options = {}) {
        const ev = new ExpressionVector();
        const xMin = options.xMin !== undefined ? options.xMin : -5;
        const xMax = options.xMax !== undefined ? options.xMax : 5;
        const parsed = ev.latexParser.parse(latexFunc);
        
        // ★ 自动识别变量
        const variable = options.variable || this.detectVariable(parsed);
        
        const f = (val) => {
            try {
                const scope = {};
                scope[variable] = val;
                return math.evaluate(parsed, scope);
            } catch (e) {
                return NaN;
            }
        };
        
        this.createCanvas(options.width || 600, options.height || 400);
        this.drawCurve(f, { xMin, xMax, ...options });
        return this.canvas;
    }

    visualizePoints(points, options = {}) {
        const dataPoints = points.map(p => [p.x, p.y]);
        this.createCanvas(options.width || 600, options.height || 400);
        this.showGrid = options.showGrid !== undefined ? options.showGrid : false;
        this.autoViewport(dataPoints);
        this.drawAxes();
        
        this.ctx.strokeStyle = options.color || '#c586c0';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        points.forEach((p, i) => {
            const [px, py] = this.toCanvas(p.x, p.y);
            i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py);
        });
        this.ctx.stroke();
        
        points.forEach(p => {
            const [px, py] = this.toCanvas(p.x, p.y);
            this.ctx.fillStyle = options.color || '#c586c0';
            this.ctx.beginPath();
            this.ctx.arc(px, py, 4, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        return this.canvas;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { VectorVisualizer };
}

if (typeof window !== 'undefined') {
    window.VectorVisualizer = VectorVisualizer;
}