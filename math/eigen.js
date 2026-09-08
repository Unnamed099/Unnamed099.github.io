// ===== math/eigen.js =====
// 特征值与特征向量模块

class EigenSolver {
    constructor() {
        this.debugMode = false;
        this.maxIterations = 1000;
        this.tolerance = 1e-10;
    }

    log(message) {
        if (this.debugMode) {
            console.log(`[Eigen] ${message}`);
        }
    }

    /**
     * 计算 2×2 矩阵的特征值和特征向量
     * @param {Array<Array<number>>} A - 2×2 矩阵
     * @returns {Array} [{ eigenvalue, eigenvector }]
     */
    eigen2x2(A) {
        const [[a, b], [c, d]] = A;
        
        // 特征方程：λ² - tr(A)·λ + det(A) = 0
        const trace = a + d;
        const det = a * d - b * c;
        
        // 判别式
        const discriminant = trace * trace - 4 * det;
        
        if (discriminant >= 0) {
            // 实特征值
            const sqrtD = Math.sqrt(discriminant);
            const lambda1 = (trace + sqrtD) / 2;
            const lambda2 = (trace - sqrtD) / 2;
            
            return [
                { eigenvalue: lambda1, eigenvector: this.findEigenvector2x2(A, lambda1) },
                { eigenvalue: lambda2, eigenvector: this.findEigenvector2x2(A, lambda2) }
            ];
        } else {
            // 复特征值
            const realPart = trace / 2;
            const imagPart = Math.sqrt(-discriminant) / 2;
            
            return [
                { 
                    eigenvalue: { real: realPart, imag: imagPart },
                    eigenvector: { real: [1, 0], imag: [0, 0] },
                    isComplex: true
                },
                { 
                    eigenvalue: { real: realPart, imag: -imagPart },
                    eigenvector: { real: [1, 0], imag: [0, 0] },
                    isComplex: true
                }
            ];
        }
    }

    /**
     * 为 2×2 矩阵的给定特征值求特征向量
     */
    findEigenvector2x2(A, lambda) {
        const [[a, b], [c, d]] = A;
        
        // 解 (A - λI)·v = 0
        const m00 = a - lambda;
        const m01 = b;
        const m10 = c;
        const m11 = d - lambda;
        
        // 如果第一列有非零元素
        if (Math.abs(m00) > this.tolerance || Math.abs(m10) > this.tolerance) {
            // v = (v1, v2)，设 v2 = 1
            // m00·v1 + m01·1 = 0 → v1 = -m01/m00
            if (Math.abs(m00) > this.tolerance) {
                const v1 = -m01 / m00;
                return this.normalize([v1, 1]);
            } else {
                // m10·v1 + m11·1 = 0 → v1 = -m11/m10
                const v1 = -m11 / m10;
                return this.normalize([v1, 1]);
            }
        }
        
        // 如果第二列有非零元素
        if (Math.abs(m01) > this.tolerance || Math.abs(m11) > this.tolerance) {
            // 设 v1 = 1
            // m01·1 + m11·v2 = 0 → v2 = -m01/m11
            if (Math.abs(m11) > this.tolerance) {
                const v2 = -m01 / m11;
                return this.normalize([1, v2]);
            } else {
                const v2 = -m00 / m01;
                return this.normalize([1, v2]);
            }
        }
        
        // 默认返回单位向量
        return [1, 0];
    }

    /**
     * 计算 n×n 矩阵的特征值（使用幂迭代法）
     * 只适用于对称矩阵
     * @param {Array<Array<number>>} A - 对称矩阵
     * @returns {Array} 特征值列表
     */
    eigenvalues(A) {
        const n = A.length;
        
        if (n === 2) {
            return this.eigen2x2(A).map(e => e.eigenvalue);
        }
        
        // 使用 QR 迭代法（简化版）
        return this.qrEigenvalues(A);
    }

    /**
     * QR 迭代法求特征值
     * 适用于对称矩阵
     */
    qrEigenvalues(A, maxIter = 1000, tol = 1e-10) {
        let B = A.map(row => [...row]);
        const n = B.length;
        
        for (let iter = 0; iter < maxIter; iter++) {
            // QR 分解
            const { Q, R } = this.qrDecompose(B);
            
            // B = R·Q
            B = this.multiply(R, Q);
            
            // 检查是否收敛（对角线以下元素足够小）
            let offDiagonal = 0;
            for (let i = 1; i < n; i++) {
                for (let j = 0; j < i; j++) {
                    offDiagonal += B[i][j] * B[i][j];
                }
            }
            
            if (Math.sqrt(offDiagonal) < tol) {
                break;
            }
        }
        
        // 对角线元素就是特征值
        const eigenvalues = [];
        for (let i = 0; i < n; i++) {
            eigenvalues.push(B[i][i]);
        }
        
        return eigenvalues.sort((a, b) => b - a);
    }

    /**
     * QR 分解（Gram-Schmidt 正交化）
     */
    qrDecompose(A) {
        const n = A.length;
        const Q = [];
        const R = Array(n).fill(0).map(() => Array(n).fill(0));
        
        // 复制 A 的列
        const columns = [];
        for (let j = 0; j < n; j++) {
            const col = [];
            for (let i = 0; i < n; i++) {
                col.push(A[i][j]);
            }
            columns.push(col);
        }
        
        // Gram-Schmidt 正交化
        const orthogonalized = [];
        
        for (let j = 0; j < n; j++) {
            let v = columns[j];
            
            // 减去之前向量上的投影
            for (let k = 0; k < j; k++) {
                const proj = this.dotProduct(columns[j], orthogonalized[k]) / 
                             this.dotProduct(orthogonalized[k], orthogonalized[k]);
                v = v.map((vi, i) => vi - proj * orthogonalized[k][i]);
            }
            
            // 归一化
            const norm = Math.sqrt(this.dotProduct(v, v));
            if (norm > 1e-15) {
                orthogonalized.push(v.map(vi => vi / norm));
            } else {
                orthogonalized.push(v);
            }
        }
        
        // 构建 Q
        for (let i = 0; i < n; i++) {
            Q.push([]);
            for (let j = 0; j < n; j++) {
                Q[i][j] = orthogonalized[j][i];
            }
        }
        
        // 构建 R
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                R[i][j] = this.dotProduct(columns[j], orthogonalized[i]);
            }
        }
        
        return { Q, R };
    }

    /**
     * 矩阵乘法
     */
    multiply(A, B) {
        const m = A.length;
        const n = B[0].length;
        const p = A[0].length;
        
        const result = [];
        for (let i = 0; i < m; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                let sum = 0;
                for (let k = 0; k < p; k++) {
                    sum += A[i][k] * B[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    /**
     * 向量点积
     */
    dotProduct(v1, v2) {
        return v1.reduce((sum, vi, i) => sum + vi * v2[i], 0);
    }

    /**
     * 归一化向量
     */
    normalize(v) {
        const norm = Math.sqrt(v.reduce((sum, vi) => sum + vi * vi, 0));
        if (norm < 1e-15) return v;
        return v.map(vi => vi / norm);
    }

    /**
     * 验证特征值/特征向量
     * 检查 A·v ≈ λ·v
     */
    verify(A, eigenvalue, eigenvector) {
        const Av = this.multiply(A, eigenvector.map(v => [v])).map(row => row[0]);
        const lambdaV = eigenvector.map(v => v * eigenvalue);
        
        const error = Av.map((vi, i) => Math.abs(vi - lambdaV[i])).reduce((a, b) => a + b, 0);
        
        return {
            isValid: error < 1e-8,
            error: error,
            Av: Av,
            lambdaV: lambdaV
        };
    }

    /**
     * 格式化输出
     */
    format(eigenResults) {
        return eigenResults.map((result, index) => {
            const { eigenvalue, eigenvector, isComplex } = result;
            
            if (isComplex) {
                return {
                    index: index + 1,
                    eigenvalue: `${eigenvalue.real} + ${eigenvalue.imag}i`,
                    eigenvector: '复数特征向量',
                    isComplex: true
                };
            }
            
            return {
                index: index + 1,
                eigenvalue: eigenvalue,
                eigenvector: eigenvector.map(v => v.toPrecision(6)).join(', '),
                isComplex: false
            };
        });
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EigenSolver };
}

if (typeof window !== 'undefined') {
    window.EigenSolver = EigenSolver;
}