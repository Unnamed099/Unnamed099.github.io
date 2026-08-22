// ===== calculator/core.js =====
// 计算器核心 - 整合 LatexParser，进行变量提取和数值计算

class CalculatorCore {
    constructor() {
        this.parser = new LatexParser();
        this.variables = {};  // 变量值存储
        this.constants = {
            'π': Math.PI,
            'pi': Math.PI,
            'e': Math.E,
            'Infinity': Infinity
        };
        
        // 已知函数（用于变量提取时排除）
        this.knownFunctions = new Set([
            'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
            'asin', 'acos', 'atan',
            'sinh', 'cosh', 'tanh',
            'log', 'ln', 'lg', 'exp', 'abs', 'sqrt',
            'max', 'min'
        ]);
        
        // 已知常数（用于变量提取时排除）
        this.knownConstants = new Set([
            'π', 'pi', 'e', 'Infinity'
        ]);
    }

    /**
     * 解析 LaTeX 并转换为可计算表达式
     * @param {string} latex - LaTeX 字符串
     * @returns {string} 可计算表达式
     */
    parse(latex) {
        const expression = this.parser.parse(latex);
        
        // 替换希腊字母为可计算形式
        let result = expression;
        result = result.replace(/π/g, 'pi');
        result = result.replace(/α/g, 'alpha');
        result = result.replace(/β/g, 'beta');
        
        return result;
    }

    /**
     * 提取表达式中的变量
     * @param {string} expression - 可计算表达式
     * @returns {Array} 变量名列表
     */
    extractVariables(expression) {
        // 使用 math.js 解析
        try {
            const node = math.parse(expression);
            const variables = new Set();
            
            node.traverse((n) => {
                if (n.type === 'SymbolNode') {
                    const name = n.name;
                    
                    // 排除函数名
                    if (this.knownFunctions.has(name)) return;
                    
                    // 排除常数
                    if (this.knownConstants.has(name)) return;
                    
                    // 排除 math.js 内置
                    if (name === 'i' || name === 'I') return;
                    
                    variables.add(name);
                }
            });
            
            return Array.from(variables).sort();
        } catch (e) {
            console.warn('math.js 解析失败，使用正则提取:', e.message);
            return this.extractVariablesFallback(expression);
        }
    }

    /**
     * 降级方案：正则提取变量
     */
    extractVariablesFallback(expression) {
        // 移除函数名
        let cleaned = expression;
        this.knownFunctions.forEach(fn => {
            cleaned = cleaned.replace(new RegExp(`\\b${fn}\\b`, 'g'), '');
        });
        
        // 移除常数
        this.knownConstants.forEach(c => {
            cleaned = cleaned.replace(new RegExp(`\\b${c}\\b`, 'g'), '');
        });
        
        // 提取剩余字母
        const matches = cleaned.match(/[a-zA-Z]+/g) || [];
        const variables = new Set();
        
        matches.forEach(m => {
            // 单字母或多字母变量
            for (let ch of m) {
                if (!this.knownFunctions.has(m) && !this.knownConstants.has(m)) {
                    variables.add(ch);
                }
            }
        });
        
        return Array.from(variables).sort();
    }

    /**
     * 设置变量值
     * @param {string} name - 变量名
     * @param {number|string} value - 变量值
     */
    setVariable(name, value) {
        if (value === '' || value === null || value === undefined) {
            delete this.variables[name];
            return false;
        }
        
        const num = parseFloat(value);
        if (!isNaN(num)) {
            this.variables[name] = num;
            return true;
        }
        
        delete this.variables[name];
        return false;
    }

    /**
     * 批量设置变量
     * @param {Object} vars - { 变量名: 值 }
     */
    setVariables(vars) {
        for (let [name, value] of Object.entries(vars)) {
            this.setVariable(name, value);
        }
    }

    /**
     * 清除所有变量
     */
    clearVariables() {
        this.variables = {};
    }

    /**
     * 获取所有变量及其值
     * @returns {Object}
     */
    getVariables() {
        return { ...this.variables };
    }

    /**
     * 检查变量是否已赋值
     * @param {string} name - 变量名
     * @returns {boolean}
     */
    hasVariable(name) {
        return this.variables[name] !== undefined;
    }

    /**
     * 检查所有变量是否都已赋值
     * @param {Array} varNames - 变量名列表
     * @returns {Array} 未赋值的变量列表
     */
    getMissingVariables(varNames) {
        return varNames.filter(name => !this.hasVariable(name));
    }

    /**
     * 计算表达式
     * @param {string} expression - 可计算表达式
     * @returns {number|string} 计算结果
     */
    calculate(expression) {
        try {
            // 构建作用域
            const scope = {
                ...this.constants,
                ...this.variables
            };
            
            // 使用 math.js 计算
            const result = math.evaluate(expression, scope);
            
            return this.formatResult(result);
        } catch (e) {
            throw new Error(`计算错误: ${e.message}`);
        }
    }

    /**
     * 格式化计算结果
     */
    formatResult(result) {
        if (typeof result === 'number') {
            // 整数直接返回
            if (Number.isInteger(result)) {
                return result.toString();
            }
            
            // 浮点数保留精度
            if (isFinite(result)) {
                // 保留 10 位有效数字
                return result.toPrecision(10).replace(/\.?0+$/, '');
            }
            
            // 无穷大
            return result.toString();
        }
        
        if (result && typeof result.toString === 'function') {
            return result.toString();
        }
        
        return String(result);
    }

    /**
     * 完整流程：解析 → 提取变量 → 检查 → 计算
     * @param {string} latex - LaTeX 字符串
     * @returns {Object} 处理结果
     */
    process(latex) {
        try {
            // 1. 解析 LaTeX
            const expression = this.parse(latex);
            
            if (!expression) {
                return {
                    success: false,
                    message: '表达式为空',
                    expression: '',
                    variables: [],
                    missingVars: [],
                    result: null
                };
            }
            
            // 2. 提取变量
            const variables = this.extractVariables(expression);
            
            // 3. 检查缺失变量
            const missingVars = this.getMissingVariables(variables);
            
            if (missingVars.length > 0) {
                return {
                    success: false,
                    message: `请为变量赋值: ${missingVars.join(', ')}`,
                    expression: expression,
                    variables: variables,
                    missingVars: missingVars,
                    result: null
                };
            }
            
            // 4. 计算
            const result = this.calculate(expression);
            
            return {
                success: true,
                message: '计算成功',
                expression: expression,
                variables: variables,
                missingVars: [],
                result: result
            };
        } catch (e) {
            return {
                success: false,
                message: e.message,
                expression: '',
                variables: [],
                missingVars: [],
                result: null
            };
        }
    }

    /**
     * 调试方法：打印当前状态
     */
    debug() {
        console.log('===== CalculatorCore 状态 =====');
        console.log('变量:', this.variables);
        console.log('常数:', this.constants);
        console.log('===============================');
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CalculatorCore };
}

if (typeof window !== 'undefined') {
    window.CalculatorCore = CalculatorCore;
}