// ===== math/ode-solver.js =====
// 常微分方程数值求解模块

class ODESolver {
    constructor() {
        this.debugMode = false;
        this.defaultStepSize = 0.01;
        this.defaultTolerance = 1e-8;
    }

    log(message) {
        if (this.debugMode) console.log(`[ODE] ${message}`);
    }

    // 欧拉法
    euler(f, x0, y0, xEnd, h = this.defaultStepSize) {
        const results = [{ x: x0, y: y0 }];
        let x = x0, y = y0;
        const step = xEnd > x0 ? h : -h;
        while (Math.abs(x - xEnd) > Math.abs(step) * 0.5) {
            y = y + step * f(x, y);
            x = x + step;
            results.push({ x, y });
        }
        return results;
    }

    // 改进欧拉法
    heun(f, x0, y0, xEnd, h = this.defaultStepSize) {
        const results = [{ x: x0, y: y0 }];
        let x = x0, y = y0;
        const step = xEnd > x0 ? h : -h;
        while (Math.abs(x - xEnd) > Math.abs(step) * 0.5) {
            const k1 = f(x, y);
            const yPredict = y + step * k1;
            const k2 = f(x + step, yPredict);
            y = y + (step / 2) * (k1 + k2);
            x = x + step;
            results.push({ x, y });
        }
        return results;
    }

    // 四阶龙格-库塔法（固定步长）
    rk4(f, x0, y0, xEnd, h = this.defaultStepSize) {
        const results = [{ x: x0, y: y0 }];
        let x = x0, y = y0;
        const step = xEnd > x0 ? h : -h;
        while (Math.abs(x - xEnd) > Math.abs(step) * 0.5) {
            const k1 = f(x, y);
            const k2 = f(x + step/2, y + step*k1/2);
            const k3 = f(x + step/2, y + step*k2/2);
            const k4 = f(x + step, y + step*k3);
            y = y + (step/6) * (k1 + 2*k2 + 2*k3 + k4);
            x = x + step;
            results.push({ x, y });
        }
        return results;
    }

    /**
     * 自适应步长 RK4（替代 RK45，更稳定）
     * 使用步长减半误差估计：比较一整步 RK4 与两个半步 RK4 的结果
     */
    rk45(f, x0, y0, xEnd, tolerance = this.defaultTolerance, hInitial = 0.1) {
        const results = [{ x: x0, y: y0 }];
        let x = x0, y = y0;
        const direction = xEnd > x0 ? 1 : -1;
        let h = Math.abs(hInitial);
        const maxIter = 100000;
        let iter = 0;

        // 单步 RK4 推进函数，返回新 y
        const rk4Step = (x, y, step) => {
            const k1 = f(x, y);
            const k2 = f(x + step/2, y + step*k1/2);
            const k3 = f(x + step/2, y + step*k2/2);
            const k4 = f(x + step, y + step*k3);
            return y + (step/6) * (k1 + 2*k2 + 2*k3 + k4);
        };

        while (Math.abs(x - xEnd) > 1e-12 && iter < maxIter) {
            iter++;
            // 确保最后一步不超过终点
            if (h > Math.abs(xEnd - x)) h = Math.abs(xEnd - x);
            if (h < 1e-14) break;

            const step = direction * h;

            // 一整步 RK4
            const yFull = rk4Step(x, y, step);
            // 两个半步 RK4
            const yHalf = rk4Step(x, y, step/2);
            const yHalf2 = rk4Step(x + step/2, yHalf, step/2);

            // 误差估计
            const error = Math.abs(yFull - yHalf2);

            if (error < tolerance || h < 1e-12) {
                // 接受步，使用更精确的两半步结果
                x += step;
                y = yHalf2;
                results.push({ x, y });

                // 调整步长（绝对值）
                if (error === 0) {
                    h = Math.min(h * 2, 1.0);
                } else {
                    const scale = Math.min(2.0, Math.pow(tolerance / error, 0.2));
                    h = h * scale;
                }
                h = Math.min(h, 0.5); // 限制最大步长
            } else {
                // 拒绝步，缩小步长
                const scale = Math.max(0.1, Math.pow(tolerance / error, 0.25));
                h = h * scale;
            }
        }

        return results;
    }

    // 通用求解方法
    solve(f, x0, y0, xEnd, options = {}) {
        const method = options.method || 'rk4';
        const h = options.h || this.defaultStepSize;
        const tolerance = options.tolerance || this.defaultTolerance;

        switch (method) {
            case 'euler': return this.euler(f, x0, y0, xEnd, h);
            case 'heun': return this.heun(f, x0, y0, xEnd, h);
            case 'rk45': return this.rk45(f, x0, y0, xEnd, tolerance, h);
            case 'rk4':
            default: return this.rk4(f, x0, y0, xEnd, h);
        }
    }

    // 求解 ODE 方程组（固定步长 RK4）
    solveSystem(equations, x0, y0, xEnd, h = this.defaultStepSize) {
        const n = equations.length;
        const results = [{ x: x0, y: [...y0] }];
        let x = x0, y = [...y0];
        const step = xEnd > x0 ? h : -h;
        while (Math.abs(x - xEnd) > Math.abs(step) * 0.5) {
            const k1 = equations.map(f => f(x, ...y));
            const k2 = equations.map(f => f(x + step/2, ...y.map((yi, i) => yi + step*k1[i]/2)));
            const k3 = equations.map(f => f(x + step/2, ...y.map((yi, i) => yi + step*k2[i]/2)));
            const k4 = equations.map(f => f(x + step, ...y.map((yi, i) => yi + step*k3[i])));
            y = y.map((yi, i) => yi + (step/6)*(k1[i] + 2*k2[i] + 2*k3[i] + k4[i]));
            x += step;
            results.push({ x, y: [...y] });
        }
        return results;
    }

    // 获取特定 x 处的 y 值
    getValueAt(results, xTarget) {
        let closest = results[0];
        let minDist = Infinity;
        for (let point of results) {
            const dist = Math.abs(point.x - xTarget);
            if (dist < minDist) {
                minDist = dist;
                closest = point;
            }
        }
        return closest.y;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ODESolver };
}
if (typeof window !== 'undefined') {
    window.ODESolver = ODESolver;
}