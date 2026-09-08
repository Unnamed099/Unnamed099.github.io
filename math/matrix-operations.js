// ===== math/matrix-operations.js =====
// 矩阵运算模块

class MatrixOperations {
    constructor() {
        this.debugMode = false;
    }

    log(step, message) {
        if (this.debugMode) {
            console.log(`[Matrix] ${message}`);
        }
    }

    /**
     * 从 LaTeX 矩阵语法创建矩阵
     * 支持 \begin{pmatrix} ... \end{pmatrix}
     * @param {string} latex - LaTeX 矩阵表达式
     * @returns {Array<Array<number>>} 二维数组矩阵
     */
    parseMatrix(latex) {
        this.log('解析', `解析矩阵: ${latex}`);
        
        // 提取矩阵内容
        const match = latex.match(/\\begin\{(\w+)\}([\s\S]*?)\\end\{\w+\}/);
        
        if (!match) {
            throw new Error('无效的矩阵表达式');
        }
        
        const matrixType = match[1]; // pmatrix, bmatrix, vmatrix 等
        const content = match[2];
        
        // 按行分割（用 \\ 分隔）
        const rows = content.split('\\\\').filter(r => r.trim());
        
        const matrix = rows.map(row => {
            // 按列分割（用 & 分隔）
            const cells = row.split('&').filter(c => c.trim());
            return cells.map(cell => this.parseCell(cell.trim()));
        });
        
        this.log('解析', `矩阵类型: ${matrixType}`);
        this.log('解析', `矩阵: ${JSON.stringify(matrix)}`);
        
        return {
            type: matrixType,
            matrix: matrix
        };
    }

    /**
     * 解析单元格内容（数字或表达式）
     */
    parseCell(cell) {
        // 尝试解析为数字
        const num = parseFloat(cell);
        if (!isNaN(num)) {
            return num;
        }
        
        // 尝试用 math.js 解析
        try {
            return math.evaluate(cell);
        } catch (e) {
            // 返回原始字符串
            return cell;
        }
    }

    /**
     * 矩阵加法
     * @param {Array<Array<number>>} A - 矩阵 A
     * @param {Array<Array<number>>} B - 矩阵 B
     * @returns {Array<Array<number>>} A + B
     */
    add(A, B) {
        this.log('运算', '矩阵加法');
        
        if (!this.isValidMatrix(A) || !this.isValidMatrix(B)) {
            throw new Error('无效的矩阵');
        }
        
        if (A.length !== B.length || A[0].length !== B[0].length) {
            throw new Error('矩阵维度不匹配');
        }
        
        const rows = A.length;
        const cols = A[0].length;
        
        const result = [];
        for (let i = 0; i < rows; i++) {
            result.push([]);
            for (let j = 0; j < cols; j++) {
                result[i][j] = A[i][j] + B[i][j];
            }
        }
        
        return result;
    }

    /**
     * 矩阵减法
     * @param {Array<Array<number>>} A - 矩阵 A
     * @param {Array<Array<number>>} B - 矩阵 B
     * @returns {Array<Array<number>>} A - B
     */
    subtract(A, B) {
        this.log('运算', '矩阵减法');
        
        if (A.length !== B.length || A[0].length !== B[0].length) {
            throw new Error('矩阵维度不匹配');
        }
        
        const rows = A.length;
        const cols = A[0].length;
        
        const result = [];
        for (let i = 0; i < rows; i++) {
            result.push([]);
            for (let j = 0; j < cols; j++) {
                result[i][j] = A[i][j] - B[i][j];
            }
        }
        
        return result;
    }

    /**
     * 矩阵乘法
     * @param {Array<Array<number>>} A - 矩阵 A (m×n)
     * @param {Array<Array<number>>} B - 矩阵 B (n×p)
     * @returns {Array<Array<number>>} A × B (m×p)
     */
    multiply(A, B) {
        this.log('运算', '矩阵乘法');
        
        const m = A.length;      // A 的行数
        const n = A[0].length;   // A 的列数
        const p = B[0].length;   // B 的列数
        
        if (n !== B.length) {
            throw new Error(`矩阵维度不匹配: A(${m}×${n}) × B(${B.length}×${p})`);
        }
        
        const result = [];
        for (let i = 0; i < m; i++) {
            result.push([]);
            for (let j = 0; j < p; j++) {
                let sum = 0;
                for (let k = 0; k < n; k++) {
                    sum += A[i][k] * B[k][j];
                }
                result[i][j] = sum;
            }
        }
        
        return result;
    }

    /**
     * 矩阵转置
     * @param {Array<Array<number>>} A - 矩阵 A
     * @returns {Array<Array<number>>} Aᵀ
     */
    transpose(A) {
        this.log('运算', '矩阵转置');
        
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
     * 矩阵行列式（递归展开）
     * @param {Array<Array<number>>} A - 方阵
     * @returns {number} 行列式值
     */
    determinant(A) {
        this.log('运算', `计算行列式 (${A.length}×${A.length})`);
        
        const n = A.length;
        
        if (n === 1) {
            return A[0][0];
        }
        
        if (n === 2) {
            return A[0][0] * A[1][1] - A[0][1] * A[1][0];
        }
        
        let det = 0;
        for (let j = 0; j < n; j++) {
            // 按第一行展开
            const minor = this.getMinor(A, 0, j);
            const sign = (j % 2 === 0) ? 1 : -1;
            det += sign * A[0][j] * this.determinant(minor);
        }
        
        return det;
    }

    /**
     * 获取余子式（删除指定行和列）
     */
    getMinor(A, rowToRemove, colToRemove) {
        const n = A.length;
        const minor = [];
        
        for (let i = 0; i < n; i++) {
            if (i === rowToRemove) continue;
            const newRow = [];
            for (let j = 0; j < n; j++) {
                if (j === colToRemove) continue;
                newRow.push(A[i][j]);
            }
            minor.push(newRow);
        }
        
        return minor;
    }

    /**
     * 矩阵逆（使用高斯-约当消元法）
     * @param {Array<Array<number>>} A - 方阵
     * @returns {Array<Array<number>>} A⁻¹
     */
    inverse(A) {
        this.log('运算', '计算逆矩阵');
        
        const n = A.length;
        
        // 创建增广矩阵 [A | I]
        const augmented = [];
        for (let i = 0; i < n; i++) {
            augmented.push([...A[i], ...Array(n).fill(0).map((_, j) => i === j ? 1 : 0)]);
        }
        
        // 高斯-约当消元
        for (let col = 0; col < n; col++) {
            // 寻找主元
            let pivotRow = col;
            for (let row = col + 1; row < n; row++) {
                if (Math.abs(augmented[row][col]) > Math.abs(augmented[pivotRow][col])) {
                    pivotRow = row;
                }
            }
            
            if (Math.abs(augmented[pivotRow][col]) < 1e-10) {
                throw new Error('矩阵不可逆');
            }
            
            // 交换行
            [augmented[col], augmented[pivotRow]] = [augmented[pivotRow], augmented[col]];
            
            // 主元归一化
            const pivot = augmented[col][col];
            for (let j = 0; j < 2 * n; j++) {
                augmented[col][j] /= pivot;
            }
            
            // 消元其他行
            for (let row = 0; row < n; row++) {
                if (row === col) continue;
                const factor = augmented[row][col];
                for (let j = 0; j < 2 * n; j++) {
                    augmented[row][j] -= factor * augmented[col][j];
                }
            }
        }
        
        // 提取逆矩阵
        const inverse = [];
        for (let i = 0; i < n; i++) {
            inverse.push(augmented[i].slice(n));
        }
        
        return inverse;
    }

    /**
     * 矩阵的迹（对角线元素之和）
     */
    trace(A) {
        const n = Math.min(A.length, A[0].length);
        let sum = 0;
        for (let i = 0; i < n; i++) {
            sum += A[i][i];
        }
        return sum;
    }

    /**
     * 单位矩阵
     */
    identity(n) {
        const result = [];
        for (let i = 0; i < n; i++) {
            result.push([]);
            for (let j = 0; j < n; j++) {
                result[i][j] = (i === j) ? 1 : 0;
            }
        }
        return result;
    }

    /**
     * 零矩阵
     */
    zeros(rows, cols) {
        const result = [];
        for (let i = 0; i < rows; i++) {
            result.push(Array(cols).fill(0));
        }
        return result;
    }

    /**
     * 检查是否是有效矩阵
     */
    isValidMatrix(A) {
        if (!Array.isArray(A) || A.length === 0) return false;
        if (!Array.isArray(A[0])) return false;
        
        const cols = A[0].length;
        return A.every(row => Array.isArray(row) && row.length === cols);
    }

    /**
     * 检查是否是方阵
     */
    isSquare(A) {
        return this.isValidMatrix(A) && A.length === A[0].length;
    }

    /**
     * 格式化矩阵输出
     */
    formatMatrix(A, precision = 6) {
        return A.map(row => 
            row.map(val => {
                if (typeof val === 'number') {
                    return val.toPrecision(precision).replace(/\.?0+$/, '');
                }
                return val;
            })
        );
    }

    /**
     * 转换为 LaTeX 格式
     */
    toLaTeX(A, type = 'pmatrix') {
        const rows = A.map(row => row.join(' & ')).join(' \\\\ ');
        return `\\begin{${type}}\n${rows}\n\\end{${type}}`;
    }

    /**
     * 打印矩阵
     */
    print(A) {
        console.log(this.toLaTeX(A));
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MatrixOperations };
}

if (typeof window !== 'undefined') {
    window.MatrixOperations = MatrixOperations;
}