// ===== math/pde-solver.js =====
// 偏微分方程数值求解模块

class PDESolver {
    constructor() {
        this.debugMode = false;
    }

    log(msg) {
        if (this.debugMode) console.log(`[PDE] ${msg}`);
    }

    /**
     * 一维热传导方程
     * u_t = alpha * u_xx
     * @param {Function} initialFunc - 初始温度分布 u(x,0)
     * @param {number} xMin - 空间左端点
     * @param {number} xMax - 空间右端点
     * @param {number} tMax - 总时间
     * @param {number} alpha - 热扩散系数
     * @param {number} nx - 空间网格点数
     * @param {number} nt - 时间步数
     * @returns {Object} { x, t, u } u 为二维数组 [时间步][空间点]
     */
    heat1D(initialFunc, xMin, xMax, tMax, alpha, nx = 50, nt = 100) {
        const dx = (xMax - xMin) / (nx - 1);
        const dt = tMax / nt;
        // 稳定性条件：alpha*dt/dx^2 <= 0.5
        const r = alpha * dt / (dx * dx);
        if (r > 0.5) {
            console.warn('稳定性条件不满足：alpha*dt/dx^2 =', r.toFixed(3), '> 0.5，可能不稳定');
        }

        const x = Array.from({ length: nx }, (_, i) => xMin + i * dx);
        // 初始化 u[0][i]
        const u = [x.map(xi => initialFunc(xi))];

        // 时间推进
        for (let n = 0; n < nt; n++) {
            const prev = u[n];
            const next = new Array(nx).fill(0);
            // 边界条件：Dirichlet 0（两端固定为0）
            next[0] = 0;
            next[nx - 1] = 0;
            for (let i = 1; i < nx - 1; i++) {
                next[i] = prev[i] + r * (prev[i - 1] - 2 * prev[i] + prev[i + 1]);
            }
            u.push(next);
        }

        const t = Array.from({ length: nt + 1 }, (_, i) => i * dt);
        return { x, t, u };
    }

    /**
     * 一维波动方程
     * u_tt = c^2 * u_xx
     * @param {Function} initialFunc - 初始位移 u(x,0)
     * @param {Function} initialVelocityFunc - 初始速度 u_t(x,0)
     * @param {number} xMin - 空间左端点
     * @param {number} xMax - 空间右端点
     * @param {number} tMax - 总时间
     * @param {number} c - 波速
     * @param {number} nx - 空间网格点数
     * @param {number} nt - 时间步数
     * @returns {Object} { x, t, u }
     */
    wave1D(initialFunc, initialVelocityFunc, xMin, xMax, tMax, c, nx = 50, nt = 100) {
        const dx = (xMax - xMin) / (nx - 1);
        const dt = tMax / nt;
        const r = (c * dt / dx) ** 2;
        if (r > 1) {
            console.warn('稳定性条件不满足：r =', r.toFixed(3), '> 1，可能不稳定');
        }

        const x = Array.from({ length: nx }, (_, i) => xMin + i * dx);
        // u[0] = 初始位移
        const u0 = x.map(xi => initialFunc(xi));
        // 使用 Taylor 展开计算 u[1]
        const u1 = new Array(nx).fill(0);
        for (let i = 0; i < nx; i++) {
            if (i === 0 || i === nx - 1) {
                u1[i] = 0; // 固定边界
            } else {
                const uxx = (u0[i - 1] - 2 * u0[i] + u0[i + 1]) / (dx * dx);
                u1[i] = u0[i] + dt * initialVelocityFunc(x[i]) + 0.5 * dt * dt * c * c * uxx;
            }
        }

        const u = [u0, u1];
        for (let n = 1; n < nt; n++) {
            const prev = u[n - 1];
            const curr = u[n];
            const next = new Array(nx).fill(0);
            next[0] = 0;
            next[nx - 1] = 0;
            for (let i = 1; i < nx - 1; i++) {
                next[i] = 2 * curr[i] - prev[i] + r * (curr[i - 1] - 2 * curr[i] + curr[i + 1]);
            }
            u.push(next);
        }

        const t = Array.from({ length: nt + 1 }, (_, i) => i * dt);
        return { x, t, u };
    }

    /**
     * 二维泊松方程
     * u_xx + u_yy = f(x,y)
     * 使用 Gauss-Seidel 迭代法
     * @param {Function} rhsFunc - 右端项 f(x,y)
     * @param {number} xMin, xMax, yMin, yMax - 区域
     * @param {number} nx, ny - 网格点数
     * @param {number} maxIter - 最大迭代次数
     * @param {number} tolerance - 收敛容限
     * @returns {Object} { x, y, u } u 为二维数组 [yIndex][xIndex]
     */
    poisson2D(rhsFunc, xMin, xMax, yMin, yMax, nx = 30, ny = 30, maxIter = 500, tolerance = 1e-5) {
        const dx = (xMax - xMin) / (nx - 1);
        const dy = (yMax - yMin) / (ny - 1);
        const x = Array.from({ length: nx }, (_, i) => xMin + i * dx);
        const y = Array.from({ length: ny }, (_, j) => yMin + j * dy);
    
        const u = Array.from({ length: ny }, () => new Array(nx).fill(0));
    
        // Gauss-Seidel 迭代
        for (let iter = 0; iter < maxIter; iter++) {
            let maxDiff = 0;
            for (let j = 1; j < ny - 1; j++) {
                for (let i = 1; i < nx - 1; i++) {
                    const old = u[j][i];
                    const rhs = rhsFunc(x[i], y[j]);
                    u[j][i] = 0.25 * (
                        u[j][i-1] + u[j][i+1] + u[j-1][i] + u[j+1][i] -
                        dx * dy * rhs
                    );
                    const diff = Math.abs(u[j][i] - old);
                    if (diff > maxDiff) maxDiff = diff;
                }
            }
            // 收敛判断
            if (maxDiff < tolerance) {
                this.log(`泊松方程迭代 ${iter + 1} 次收敛`);
                break;
            }
        }
    
        return { x, y, u };
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PDESolver };
}
if (typeof window !== 'undefined') {
    window.PDESolver = PDESolver;
}