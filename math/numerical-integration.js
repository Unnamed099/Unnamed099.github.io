// ===== math/numerical-integration.js =====
// 数值积分模块 - 完整版（含多重积分）

class NumericalIntegration {
    constructor() {
        this.defaultTolerance = 1e-12;
        this.defaultMaxDepth = 50;
        this.defaultIntervals = 1000;
    }

    /**
     * 自适应辛普森法（推荐）
     */
    adaptiveSimpson(f, a, b, tolerance = this.defaultTolerance, maxDepth = this.defaultMaxDepth) {
        let iterations = 0;
        let maxDepthReached = 0;
        let lastError = Infinity;

        const simpsonRule = (a, b) => {
            const m = (a + b) / 2;
            return (b - a) / 6 * (f(a) + 4 * f(m) + f(b));
        };

        const recursive = (a, b, whole, depth) => {
            iterations++;
            maxDepthReached = Math.max(maxDepthReached, depth);

            const m = (a + b) / 2;
            const leftMid = (a + m) / 2;
            const rightMid = (m + b) / 2;

            const leftIntegral = simpsonRule(a, m);
            const rightIntegral = simpsonRule(m, b);

            const error = Math.abs(leftIntegral + rightIntegral - whole);
            lastError = error;

            if (error < 15 * tolerance || depth >= maxDepth) {
                return leftIntegral + rightIntegral + 
                       (leftIntegral + rightIntegral - whole) / 15;
            }

            return recursive(a, m, leftIntegral, depth + 1) +
                   recursive(m, b, rightIntegral, depth + 1);
        };

        const whole = simpsonRule(a, b);
        const value = recursive(a, b, whole, 0);

        return {
            value: value,
            iterations: iterations,
            maxDepthReached: maxDepthReached,
            error: Math.abs(lastError),
            method: 'adaptive-simpson'
        };
    }

    /**
     * 固定区间辛普森法
     */
    fixedSimpson(f, a, b, n = this.defaultIntervals) {
        if (n % 2 !== 0) n++;
        const h = (b - a) / n;
        let sum = f(a) + f(b);
        for (let i = 1; i < n; i++) {
            const x = a + i * h;
            sum += f(x) * (i % 2 === 0 ? 2 : 4);
        }
        return sum * h / 3;
    }

    /**
     * 梯形法
     */
    trapezoidal(f, a, b, n = this.defaultIntervals) {
        const h = (b - a) / n;
        let sum = (f(a) + f(b)) / 2;
        for (let i = 1; i < n; i++) {
            sum += f(a + i * h);
        }
        return sum * h;
    }

    /**
     * 矩形法（中点法）
     */
    midpoint(f, a, b, n = this.defaultIntervals) {
        const h = (b - a) / n;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const x = a + (i + 0.5) * h;
            sum += f(x);
        }
        return sum * h;
    }

    /**
     * 通用积分（自动选择方法）
     */
    integrate(f, a, b, method = 'auto', options = {}) {
        const tolerance = options.tolerance || this.defaultTolerance;
        const maxDepth = options.maxDepth || this.defaultMaxDepth;
        const intervals = options.intervals || this.defaultIntervals;

        switch (method) {
            case 'adaptive':
            case 'adaptive-simpson':
                return this.adaptiveSimpson(f, a, b, tolerance, maxDepth);
            case 'simpson':
            case 'fixed-simpson':
                return this.fixedSimpson(f, a, b, intervals);
            case 'trapezoidal':
                return this.trapezoidal(f, a, b, intervals);
            case 'midpoint':
                return this.midpoint(f, a, b, intervals);
            default:
                return this.adaptiveSimpson(f, a, b, tolerance, maxDepth);
        }
    }

    /**
     * 计算二重积分
     * ∫∫ f(x, y) dx dy
     */
    doubleIntegral(f, ax, bx, ay, by) {
        const outerIntegral = (x) => {
            return this.adaptiveSimpson(
                (y) => f(x, y),
                ay, by
            ).value;
        };
        return this.adaptiveSimpson(outerIntegral, ax, bx).value;
    }

    /**
     * 计算三重积分
     * ∫∫∫ f(x, y, z) dx dy dz
     */
    tripleIntegral(f, ax, bx, ay, by, az, bz) {
        const outerIntegral = (x) => {
            const middleIntegral = (y) => {
                return this.adaptiveSimpson(
                    (z) => f(x, y, z),
                    az, bz
                ).value;
            };
            return this.adaptiveSimpson(middleIntegral, ay, by).value;
        };
        return this.adaptiveSimpson(outerIntegral, ax, bx).value;
    }

    /**
     * 通用多重积分
     * @param {Function} f - n 元函数
     * @param {Array} bounds - [[min1, max1], [min2, max2], ...]
     */
    multiIntegral(f, bounds) {
        if (bounds.length === 1) {
            return this.adaptiveSimpson(f, bounds[0][0], bounds[0][1]).value;
        }
        const innerBounds = bounds.slice(1);
        const outerIntegral = (x) => {
            const innerFunc = (...args) => f(x, ...args);
            return this.multiIntegral(innerFunc, innerBounds);
        };
        return this.adaptiveSimpson(outerIntegral, bounds[0][0], bounds[0][1]).value;
    }

    /**
     * 计算无穷积分
     */
    infiniteIntegral(f, a) {
        const transformed = (t) => {
            const x = a + t / (1 - t);
            return f(x) / ((1 - t) * (1 - t));
        };
        return this.adaptiveSimpson(transformed, 0, 1).value;
    }

    /**
     * 误差估计
     */
    estimateError(f, a, b) {
        const coarse = this.adaptiveSimpson(f, a, b, 1e-6);
        const fine = this.adaptiveSimpson(f, a, b, 1e-12);
        return {
            coarseValue: coarse.value,
            fineValue: fine.value,
            error: Math.abs(coarse.value - fine.value),
            coarseIterations: coarse.iterations,
            fineIterations: fine.iterations
        };
    }
}

function integrate(f, a, b, tolerance = 1e-12) {
    const ni = new NumericalIntegration();
    return ni.adaptiveSimpson(f, a, b, tolerance).value;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NumericalIntegration, integrate };
}

if (typeof window !== 'undefined') {
    window.NumericalIntegration = NumericalIntegration;
    window.integrate = integrate;
}