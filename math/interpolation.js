// ===== math/interpolation.js =====
// 插值模块 - 通过一组向量拟合数据

class Interpolation {
    constructor() {
        this.debugMode = false;
    }

    log(message) {
        if (this.debugMode) {
            console.log(`[Interpolation] ${message}`);
        }
    }

    /**
     * 线性插值
     * 通过两点 (x0,y0) 和 (x1,y1) 的直线
     * y = y0 + (y1-y0) * (x-x0)/(x1-x0)
     */
    linear(x, x0, y0, x1, y1) {
        if (x1 === x0) throw new Error('x0 和 x1 不能相同');
        return y0 + (y1 - y0) * (x - x0) / (x1 - x0);
    }

    /**
     * 拉格朗日插值
     * 通过 n 个点构造 n-1 次多项式
     * @param {Array} points - [[x1,y1], [x2,y2], ...]
     * @param {number} x - 要插值的点
     */
    lagrange(points, x) {
        const n = points.length;
        let result = 0;
        
        for (let i = 0; i < n; i++) {
            let term = points[i][1];
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    term *= (x - points[j][0]) / (points[i][0] - points[j][0]);
                }
            }
            result += term;
        }
        
        return result;
    }

    /**
     * 牛顿插值
     * 使用差商表
     * @param {Array} points - [[x1,y1], [x2,y2], ...]
     * @param {number} x - 要插值的点
     */
    newton(points, x) {
        const n = points.length;
        
        // 计算差商表
        const dividedDiff = [];
        for (let i = 0; i < n; i++) {
            dividedDiff.push([points[i][1]]);
        }
        
        for (let j = 1; j < n; j++) {
            for (let i = 0; i < n - j; i++) {
                const diff = (dividedDiff[i + 1][j - 1] - dividedDiff[i][j - 1]) /
                             (points[i + j][0] - points[i][0]);
                dividedDiff[i].push(diff);
            }
        }
        
        // 计算插值
        let result = dividedDiff[0][0];
        let product = 1;
        
        for (let i = 1; i < n; i++) {
            product *= (x - points[i - 1][0]);
            result += dividedDiff[0][i] * product;
        }
        
        return result;
    }

    /**
     * 三次样条插值（自然边界条件）
     * @param {Array} points - [[x1,y1], [x2,y2], ...] 按 x 升序排列
     * @param {number} x - 要插值的点
     */
    cubicSpline(points, x) {
        const n = points.length;
        
        if (n < 3) {
            // 少于 3 个点，使用线性或二次插值
            return this.lagrange(points, x);
        }
        
        // 提取 x 和 y
        const xs = points.map(p => p[0]);
        const ys = points.map(p => p[1]);
        
        // 计算二阶导数
        const h = [];
        const alpha = [];
        
        for (let i = 0; i < n - 1; i++) {
            h.push(xs[i + 1] - xs[i]);
        }
        
        for (let i = 1; i < n - 1; i++) {
            alpha.push(
                (3 / h[i]) * (ys[i + 1] - ys[i]) -
                (3 / h[i - 1]) * (ys[i] - ys[i - 1])
            );
        }
        
        // Thomas 算法解三对角方程组
        const l = [1];
        const mu = [0];
        const z = [0];
        
        for (let i = 1; i < n - 1; i++) {
            l.push(2 * (xs[i + 1] - xs[i - 1]) - h[i - 1] * mu[i - 1]);
            mu.push(h[i] / l[i]);
            z.push((alpha[i - 1] - h[i - 1] * z[i - 1]) / l[i]);
        }
        
        const b = Array(n).fill(0);
        const c = Array(n).fill(0);
        const d = Array(n).fill(0);
        
        for (let j = n - 2; j >= 0; j--) {
            c[j] = z[j] - mu[j] * c[j + 1];
            b[j] = (ys[j + 1] - ys[j]) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;
            d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
        }
        
        // 找到 x 所在的区间
        let i = 0;
        for (let k = 0; k < n - 1; k++) {
            if (x >= xs[k] && x <= xs[k + 1]) {
                i = k;
                break;
            }
        }
        
        const dx = x - xs[i];
        return ys[i] + b[i] * dx + c[i] * dx * dx + d[i] * dx * dx * dx;
    }

    /**
     * 分段线性插值
     * @param {Array} points - [[x1,y1], [x2,y2], ...] 按 x 升序排列
     * @param {number} x - 要插值的点
     */
    piecewiseLinear(points, x) {
        const n = points.length;
        
        if (x <= points[0][0]) return points[0][1];
        if (x >= points[n - 1][0]) return points[n - 1][1];
        
        for (let i = 0; i < n - 1; i++) {
            if (x >= points[i][0] && x <= points[i + 1][0]) {
                return this.linear(x, points[i][0], points[i][1], points[i + 1][0], points[i + 1][1]);
            }
        }
        
        return 0;
    }

    /**
     * 生成插值函数（返回一个可以直接调用的函数）
     * @param {Array} points - [[x1,y1], [x2,y2], ...]
     * @param {string} method - 'linear' | 'lagrange' | 'newton' | 'cubicSpline' | 'piecewiseLinear'
     */
    createInterpolator(points, method = 'cubicSpline') {
        // 按 x 排序
        const sortedPoints = [...points].sort((a, b) => a[0] - b[0]);
        
        return (x) => {
            switch (method) {
                case 'linear':
                    return this.piecewiseLinear(sortedPoints, x);
                case 'lagrange':
                    return this.lagrange(sortedPoints, x);
                case 'newton':
                    return this.newton(sortedPoints, x);
                case 'cubicSpline':
                    return this.cubicSpline(sortedPoints, x);
                case 'piecewiseLinear':
                    return this.piecewiseLinear(sortedPoints, x);
                default:
                    return this.cubicSpline(sortedPoints, x);
            }
        };
    }

    /**
     * 批量插值
     * @param {Array} points - 已知点
     * @param {Array} xValues - 要插值的 x 值列表
     * @param {string} method - 插值方法
     * @returns {Array} [[x, y], ...]
     */
    interpolateRange(points, xValues, method = 'cubicSpline') {
        const interpolator = this.createInterpolator(points, method);
        return xValues.map(x => [x, interpolator(x)]);
    }

    /**
     * 比较所有方法的插值结果
     */
    compare(points, x) {
        const methods = [
            { name: '分段线性', method: 'piecewiseLinear' },
            { name: '拉格朗日', method: 'lagrange' },
            { name: '牛顿', method: 'newton' },
            { name: '三次样条', method: 'cubicSpline' }
        ];
        
        return methods.map(m => ({
            name: m.name,
            method: m.method,
            value: this[m.method](points, x)
        }));
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Interpolation };
}

if (typeof window !== 'undefined') {
    window.Interpolation = Interpolation;
}