// ===== math/lu-decomposition.js =====
// LU 分解模块

class LUDecomposition {
    constructor() {
        this.debugMode = false;
        this.tolerance = 1e-12;
    }

    log(message) {
        if (this.debugMode) {
            console.log(`[LU] ${message}`);
        }
    }

    /**
     * LU 分解（Doolittle 算法）
     * A = L · U
     * L 的对角线为 1
     * @param {Array<Array<number>>} A - 方阵
     * @returns {Object} { L, U }
     */
    decompose(A) {
        const n = A.length;
        
        // 初始化 L 和 U
        const L = Array(n).fill(0).map((_, i) => 
            Array(n).fill(0).map((_, j) => i === j ? 1 : 0)
        );
        const U = Array(n).fill(0).map(() => Array(n).fill(0));
        
        this.log(`开始 LU 分解 (${n}×${n})`);
        
        for (let i = 0; i < n; i++) {
            // 计算 U 的第 i 行
            for (let j = i; j < n; j++) {
                let sum = 0;
                for (let k = 0; k < i; k++) {
                    sum += L[i][k] * U[k][j];
                }
                U[i][j] = A[i][j] - sum;
            }
            
            // 计算 L 的第 i 列
            for (let j = i + 1; j < n; j++) {
                if (Math.abs(U[i][i]) < this.tolerance) {
                    throw new Error(`矩阵不可进行 LU 分解（主元 U[${i}][${i}] 为 0）`);
                }
                let sum = 0;
                for (let k = 0; k < i; k++) {
                    sum += L[j][k] * U[k][i];
                }
                L[j][i] = (A[j][i] - sum) / U[i][i];
            }
        }
        
        this.log('L = ' + JSON.stringify(L));
        this.log('U = ' + JSON.stringify(U));
        
        return { L, U };
    }

    /**
     * 带部分主元选择的 LU 分解（更稳定）
     * PA = LU
     * @param {Array<Array<number>>} A - 方阵
     * @returns {Object} { L, U, P }
     */
    decomposeWithPivot(A) {
        const n = A.length;
        
        // 复制 A
        let B = A.map(row => [...row]);
        
        // 初始化
        const L = Array(n).fill(0).map((_, i) => 
            Array(n).fill(0).map((_, j) => i === j ? 1 : 0)
        );
        const U = Array(n).fill(0).map(() => Array(n).fill(0));
        const P = Array(n).fill(0).map((_, i) => 
            Array(n).fill(0).map((_, j) => i === j ? 1 : 0)
        );
        
        for (let k = 0; k < n; k++) {
            // 寻找主元
            let maxVal = Math.abs(B[k][k]);
            let maxRow = k;
            
            for (let i = k + 1; i < n; i++) {
                if (Math.abs(B[i][k]) > maxVal) {
                    maxVal = Math.abs(B[i][k]);
                    maxRow = i;
                }
            }
            
            // 交换行
            if (maxRow !== k) {
                [B[k], B[maxRow]] = [B[maxRow], B[k]];
                [P[k], P[maxRow]] = [P[maxRow], P[k]];
                
                // 交换 L 中已经计算的部分
                for (let j = 0; j < k; j++) {
                    [L[k][j], L[maxRow][j]] = [L[maxRow][j], L[k][j]];
                }
            }
            
            U[k][k] = B[k][k];
            
            // 计算 L 的第 k 列
            for (let i = k + 1; k < n && i < n; i++) {
                L[i][k] = B[i][k] / U[k][k];
                U[k][i] = B[k][i];
            }
            
            // 更新 B
            for (let i = k + 1; i < n; i++) {
                for (let j = k + 1; j < n; j++) {
                    B[i][j] -= L[i][k] * U[k][j];
                }
            }
        }
        
        return { L, U, P };
    }

    /**
     * 解线性方程组 Ax = b（使用 LU 分解）
     * @param {Array<Array<number>>} A - 系数矩阵
     * @param {Array<number>} b - 常数向量
     * @returns {Array<number>} 解向量 x
     */
    solve(A, b) {
        const { L, U } = this.decompose(A);
        
        // 前向代入：解 Ly = b
        const y = this.forwardSubstitution(L, b);
        
        // 后向代入：解 Ux = y
        const x = this.backwardSubstitution(U, y);
        
        return x;
    }

    /**
     * 前向代入（解下三角方程组 Ly = b）
     */
    forwardSubstitution(L, b) {
        const n = L.length;
        const y = Array(n).fill(0);
        
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 0; j < i; j++) {
                sum += L[i][j] * y[j];
            }
            y[i] = (b[i] - sum) / L[i][i];
        }
        
        return y;
    }

    /**
     * 后向代入（解上三角方程组 Ux = y）
     */
    backwardSubstitution(U, y) {
        const n = U.length;
        const x = Array(n).fill(0);
        
        for (let i = n - 1; i >= 0; i--) {
            let sum = 0;
            for (let j = i + 1; j < n; j++) {
                sum += U[i][j] * x[j];
            }
            x[i] = (y[i] - sum) / U[i][i];
        }
        
        return x;
    }

    /**
     * 使用 LU 分解计算行列式
     * det(A) = det(L) · det(U) = 1 × ∏(U 对角线)
     */
    determinant(A) {
        const { U } = this.decompose(A);
        
        let det = 1;
        for (let i = 0; i < U.length; i++) {
            det *= U[i][i];
        }
        
        return det;
    }

    /**
     * 使用 LU 分解求逆矩阵
     */
    inverse(A) {
        const n = A.length;
        const { L, U } = this.decompose(A);
        
        const inv = [];
        
        // 对单位矩阵的每一列求解
        for (let j = 0; j < n; j++) {
            const e = Array(n).fill(0);
            e[j] = 1;
            
            // 解 Ax = e
            const y = this.forwardSubstitution(L, e);
            const x = this.backwardSubstitution(U, y);
            
            inv.push(x);
        }
        
        // 转置
        return this.transpose(inv);
    }

    /**
     * 矩阵转置
     */
    transpose(A) {
        const rows = A.length;
        const cols = A[0].length;
        const result = [];
        
        for (let j = 0; j < cols; j++) {
            result.push([]);
            for (let i = 0; i < rows; i++) {
                result[j][i] = A[i][j];
            }
        }
        
        return result;
    }

    /**
     * 验证 LU 分解结果
     * 检查 L·U ≈ A
     */
    verify(A, L, U) {
        const n = A.length;
        let maxError = 0;
        
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let sum = 0;
                for (let k = 0; k < n; k++) {
                    sum += L[i][k] * U[k][j];
                }
                maxError = Math.max(maxError, Math.abs(sum - A[i][j]));
            }
        }
        
        return {
            isValid: maxError < this.tolerance * 10,
            maxError: maxError
        };
    }

    /**
     * 格式化输出
     */
    formatMatrix(A, precision = 6) {
        return A.map(row => 
            row.map(val => {
                if (Math.abs(val) < 1e-12) val = 0;
                return val.toPrecision(precision).replace(/\.?0+$/, '');
            })
        );
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LUDecomposition };
}

if (typeof window !== 'undefined') {
    window.LUDecomposition = LUDecomposition;
}