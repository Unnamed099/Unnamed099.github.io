// ===== tool/expression-vector.js =====
// 表达式生成向量模块（完整修复版）

class ExpressionVector {
    constructor() {
        try {
            this.latexParser = new LatexParser();
        } catch (e) {
            console.warn('LatexParser 不可用:', e.message);
            this.latexParser = null;
        }
    }

    /**
     * 从矩阵表达式生成向量
     */
    fromMatrix(latex) {
        const match = latex.match(/\\begin\{(\w+)\}([\s\S]*?)\\end\{\w+\}/);
        if (!match) throw new Error('不是有效的矩阵表达式');
        const content = match[2];
        const rows = content.split('\\\\').filter(r => r.trim());
        if (rows.length === 1) {
            return rows[0].split('&').filter(c => c.trim()).map(c => this.parseValue(c.trim()));
        } else {
            return rows.map(r => this.parseValue(r.split('&')[0].trim()));
        }
    }

    /**
     * 从逗号分隔表达式生成向量
     */
    fromCommaSeparated(expr, variables = {}) {
        const items = expr.split(',').map(s => s.trim()).filter(s => s);
        return items.map(item => this.evaluateExpression(item, variables));
    }

    /**
     * LaTeX 希腊字母命令到 Unicode 符号的映射
     */
    getGreekMap() {
        return {
            '\\alpha': 'α', '\\beta': 'β', '\\gamma': 'γ', '\\delta': 'δ',
            '\\epsilon': 'ε', '\\zeta': 'ζ', '\\eta': 'η', '\\theta': 'θ',
            '\\iota': 'ι', '\\kappa': 'κ', '\\lambda': 'λ', '\\mu': 'μ',
            '\\nu': 'ν', '\\xi': 'ξ', '\\pi': 'π', '\\rho': 'ρ',
            '\\sigma': 'σ', '\\tau': 'τ', '\\upsilon': 'υ', '\\phi': 'φ',
            '\\chi': 'χ', '\\psi': 'ψ', '\\omega': 'ω',
            '\\Gamma': 'Γ', '\\Delta': 'Δ', '\\Theta': 'Θ', '\\Lambda': 'Λ',
            '\\Xi': 'Ξ', '\\Pi': 'Π', '\\Sigma': 'Σ', '\\Upsilon': 'Υ',
            '\\Phi': 'Φ', '\\Psi': 'Ψ', '\\Omega': 'Ω'
        };
    }

    /**
     * 检测表达式中的自变量
     * 支持：英文字母（a-z，除已用函数名）和希腊字母
     */
    detectVariable(expr) {
        // 优先检查 LaTeX 希腊字母命令，因为它们包含反斜杠，避免被误删
        const greekMap = this.getGreekMap();
        for (let cmd of Object.keys(greekMap)) {
            if (expr.includes(cmd)) {
                return greekMap[cmd];
            }
        }
        
        // 移除 LaTeX 命令（保留字母）
        const cleaned = expr.replace(/\\[a-zA-Z]+/g, '');
        
        // 英文字母候选（按常见优先级排序）
        const letters = [
            'x', 'y', 'z', 't', 'r', 'u', 'v', 'w',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
            'q', 's'
        ];
        
        for (let v of letters) {
            if (cleaned.includes(v)) return v;
        }
        
        // 检查清理后的 Unicode 希腊字母（如果用户直接输入）
        const greekLetters = [
            'α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ',
            'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'π', 'ρ',
            'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'
        ];
        for (let v of greekLetters) {
            if (cleaned.includes(v)) return v;
        }
        
        return 'x';
    }

    /**
     * 从函数表达式生成向量
     * @param {string} funcExpr - LaTeX 或普通表达式
     * @param {string|null} variable - 自变量名（null 则自动检测）
     * @param {number} start - 起始值
     * @param {number} end - 结束值
     * @param {number} count - 采样点数
     */
    fromFunction(funcExpr, variable = null, start = 0, end = 1, count = 10) {
        const step = (end - start) / (count - 1);
        const xValues = [];
        const yValues = [];
        const points = [];
        
        // 检测变量
        const detectedVar = variable || this.detectVariable(funcExpr);
        console.log('[ExpressionVector] 自变量:', detectedVar);
        
        // 预处理 LaTeX 命令
        let expr = funcExpr;
        
        // 替换数学函数
        expr = expr.replace(/\\sin/g, 'sin');
        expr = expr.replace(/\\cos/g, 'cos');
        expr = expr.replace(/\\tan/g, 'tan');
        expr = expr.replace(/\\log/g, 'log');
        expr = expr.replace(/\\ln/g, 'log');
        expr = expr.replace(/\\exp/g, 'exp');
        expr = expr.replace(/\\sqrt/g, 'sqrt');
        
        // 替换常数
        expr = expr.replace(/\\pi\b/g, 'pi');
        
        // 替换希腊字母命令为 Unicode 符号
        const greekMap = this.getGreekMap();
        for (let [cmd, symbol] of Object.entries(greekMap)) {
            expr = expr.split(cmd).join(symbol);
        }
        
        console.log('[ExpressionVector] 处理后表达式:', expr);
        
        const mathScope = {
            sin: Math.sin,
            cos: Math.cos,
            tan: Math.tan,
            log: Math.log,
            exp: Math.exp,
            sqrt: Math.sqrt,
            pi: Math.PI,
            abs: Math.abs
        };
        
        for (let i = 0; i < count; i++) {
            const val = start + i * step;
            const scope = { ...mathScope };
            scope[detectedVar] = val;
            
            let y;
            try {
                y = math.evaluate(expr, scope);
            } catch (e) {
                console.error(`计算失败 (${detectedVar}=${val}):`, e.message);
                y = NaN;
            }
            
            xValues.push(val);
            yValues.push(y);
            points.push({ x: val, y });
        }
        
        return {
            xValues,
            yValues,
            points,
            variable: detectedVar,
            expression: expr,
            latex: {
                xVector: this.toLatex(xValues),
                yVector: this.toLatex(yValues),
                points: this.pointsToLatex(points),
                function: funcExpr,
                range: `[${start}, ${end}]`,
                count: count
            }
        };
    }

    /**
     * 点列表转 LaTeX 矩阵
     */
    pointsToLatex(points) {
        const rows = points.map(p => `${p.x} & ${p.y}`);
        return `\\begin{pmatrix}\n${rows.join(' \\\\\n')}\n\\end{pmatrix}`;
    }

    /**
     * 等差数列
     */
    fromRange(start, end, count = 10) {
        const step = (end - start) / (count - 1);
        return Array.from({ length: count }, (_, i) => start + i * step);
    }

    /**
     * 等比数列
     */
    fromGeometric(start, ratio, count = 10) {
        return Array.from({ length: count }, (_, i) => start * Math.pow(ratio, i));
    }

    zeros(n) { return Array(n).fill(0); }
    unitVector(n, i) { const v = Array(n).fill(0); v[i] = 1; return v; }
    random(n, min = 0, max = 1) { return Array.from({ length: n }, () => min + Math.random() * (max - min)); }

    add(v1, v2) { return v1.map((vi, i) => vi + v2[i]); }
    subtract(v1, v2) { return v1.map((vi, i) => vi - v2[i]); }
    dot(v1, v2) { return v1.reduce((sum, vi, i) => sum + vi * v2[i], 0); }
    
    cross(v1, v2) {
        if (v1.length !== 3 || v2.length !== 3) throw new Error('叉积仅支持 3 维向量');
        return [
            v1[1] * v2[2] - v1[2] * v2[1],
            v1[2] * v2[0] - v1[0] * v2[2],
            v1[0] * v2[1] - v1[1] * v2[0]
        ];
    }
    
    norm(v) { return Math.sqrt(v.reduce((sum, vi) => sum + vi * vi, 0)); }
    normalize(v) { const n = this.norm(v); return v.map(vi => vi / n); }
    scalarMultiply(scalar, v) { return v.map(vi => scalar * vi); }

    parseValue(str) {
        const num = parseFloat(str);
        if (!isNaN(num)) return num;
        try { return math.evaluate(str); } catch (e) { return str; }
    }

    evaluateExpression(expr, variables = {}) {
        try { return math.evaluate(expr, variables); } catch (e) { return expr; }
    }

    evaluateParsed(parsed, variables = {}) {
        try { return math.evaluate(parsed, variables); } catch (e) { return parsed; }
    }

    toLatex(v, type = 'pmatrix') {
        if (Array.isArray(v[0])) {
            return `\\begin{${type}}\n${v.map(row => row.join(' & ')).join(' \\\\\n')}\n\\end{${type}}`;
        }
        return `\\begin{${type}}\n${v.join(' \\\\\n')}\n\\end{${type}}`;
    }

    toString(v, precision = 6) {
        return `[${v.map(vi => typeof vi === 'number' ? vi.toPrecision(precision) : vi).join(', ')}]`;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ExpressionVector };
}

if (typeof window !== 'undefined') {
    window.ExpressionVector = ExpressionVector;
}