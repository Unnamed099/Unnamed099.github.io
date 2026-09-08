// ===== math/numerical-differentiation.js =====
// 数值求导模块 - 四种差分方法

class NumericalDifferentiation {
    constructor() {
        this.defaultStepSize = 1e-6;
    }

    /**
     * 前向差分
     * f'(x) ≈ [f(x + h) - f(x)] / h
     * 精度：O(h)
     */
    forward(f, x, h = this.defaultStepSize) {
        return (f(x + h) - f(x)) / h;
    }

    /**
     * 后向差分
     * f'(x) ≈ [f(x) - f(x - h)] / h
     * 精度：O(h)
     */
    backward(f, x, h = this.defaultStepSize) {
        return (f(x) - f(x - h)) / h;
    }

    /**
     * 中心差分（推荐）
     * f'(x) ≈ [f(x + h) - f(x - h)] / (2h)
     * 精度：O(h²)
     */
    central(f, x, h = this.defaultStepSize) {
        return (f(x + h) - f(x - h)) / (2 * h);
    }

    /**
     * 五点法
     * f'(x) ≈ [-f(x+2h) + 8f(x+h) - 8f(x-h) + f(x-2h)] / (12h)
     * 精度：O(h⁴)
     */
    fivePoint(f, x, h = this.defaultStepSize) {
        return (-f(x + 2 * h) + 8 * f(x + h) - 8 * f(x - h) + f(x - 2 * h)) / (12 * h);
    }

    /**
     * 二阶导数（中心差分）
     * f''(x) ≈ [f(x+h) - 2f(x) + f(x-h)] / h²
     */
    secondDerivative(f, x, h = this.defaultStepSize) {
        return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
    }

    /**
     * 偏导数
     * ∂f/∂xᵢ 在点 point 处的值
     */
    partialDerivative(f, point, index, h = this.defaultStepSize) {
        const pointPlus = [...point];
        const pointMinus = [...point];
        pointPlus[index] += h;
        pointMinus[index] -= h;
        return (f(...pointPlus) - f(...pointMinus)) / (2 * h);
    }

    /**
     * 梯度
     * ∇f = [∂f/∂x₁, ∂f/∂x₂, ...]
     */
    gradient(f, point, h = this.defaultStepSize) {
        return point.map((_, i) => this.partialDerivative(f, point, i, h));
    }

    /**
     * 自动选择最优步长
     * 使用试错法找到误差最小的步长
     */
    autoStep(f, x, method = 'central') {
        const methods = {
            forward: this.forward.bind(this),
            backward: this.backward.bind(this),
            central: this.central.bind(this),
            fivePoint: this.fivePoint.bind(this)
        };
        
        const derivative = methods[method] || this.central.bind(this);
        
        let bestH = this.defaultStepSize;
        let bestDerivative = derivative(f, x, bestH);
        let bestError = Infinity;
        
        // 尝试不同的步长
        for (let i = 1; i <= 20; i++) {
            const h = Math.pow(10, -i);
            const d1 = derivative(f, x, h);
            const d2 = derivative(f, x, h / 2);
            const error = Math.abs(d1 - d2);
            
            if (error < bestError) {
                bestError = error;
                bestH = h;
                bestDerivative = d1;
            }
        }
        
        return {
            derivative: bestDerivative,
            stepSize: bestH,
            error: bestError
        };
    }

    /**
     * 比较所有方法的精度
     */
    compare(f, x, exactDerivative) {
        const results = [];
        
        const methods = [
            { name: '前向差分', method: 'forward' },
            { name: '后向差分', method: 'backward' },
            { name: '中心差分', method: 'central' },
            { name: '五点法', method: 'fivePoint' }
        ];
        
        for (let m of methods) {
            const value = this[m.method](f, x);
            const error = Math.abs(value - exactDerivative);
            results.push({
                name: m.name,
                method: m.method,
                value: value,
                exact: exactDerivative,
                error: error
            });
        }
        
        return results;
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NumericalDifferentiation };
}

if (typeof window !== 'undefined') {
    window.NumericalDifferentiation = NumericalDifferentiation;
}