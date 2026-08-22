// ===== tool/latex-parser.js =====
// LaTeX 解析器 - 最终稳定版

class LatexParser {
    constructor() {
        this.tokenClassifier = new TokenClassifier();
        this.braceParser = new BraceParser();

        this.funcNameMap = {
            'sin': 'sin', 'cos': 'cos', 'tan': 'tan',
            'cot': 'cot', 'sec': 'sec', 'csc': 'csc',
            'arcsin': 'asin', 'arccos': 'acos', 'arctan': 'atan',
            'sinh': 'sinh', 'cosh': 'cosh', 'tanh': 'tanh',
            'log': 'log10', 'ln': 'log', 'lg': 'log10',
            'exp': 'exp', 'abs': 'abs', 'sqrt': 'sqrt',
            'max': 'max', 'min': 'min',
        };

        this.functionNames = [
            'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
            'arcsin', 'arccos', 'arctan',
            'sinh', 'cosh', 'tanh',
            'log', 'ln', 'lg', 'exp', 'abs', 'sqrt',
            'max', 'min'
        ];
    }

    parse(input) {
        input = this.preprocessMatrix(input);
        const braceResult = this.braceParser.parse(input);
        const result = this.processNodes(braceResult);
        const cleaned = this.cleanup(result);
        return cleaned;
    }

    preprocessMatrix(input) {
        if (!input.includes('\\begin{')) return input;
        const match = input.match(/\\begin\{(\w+)\}([\s\S]*?)\\end\{\w+\}/);
        if (!match) return input;
        const matrixType = match[1];
        const content = match[2];
        const rows = content.split('\\\\').filter(r => r.trim());
        const matrix = rows.map(row =>
            row.split('&').filter(c => c.trim()).map(c => c.trim())
        );
        const placeholder = `@@MATRIX_${matrixType.toUpperCase()}_${JSON.stringify(matrix)}@@`;
        return input.replace(match[0], placeholder);
    }

    processNodes(nodes) {
        let result = '';
        let prevNode = null;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (prevNode && this.needsNodeMultiplication(prevNode, node)) {
                result += ' * ';
            }
            if (node.type === 'text') {
                result += this.processText(node.value);
            } else if (node.type === 'group') {
                result += this.processGroup(node);
            }
            prevNode = node;
        }
        return result;
    }

    processText(text) {
        if (text.startsWith('@@MATRIX_')) return text;
        const tokens = this.tokenClassifier.classify(text);
        let result = '';
        let prevToken = null;
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (token.type === 'space') continue;
            if (prevToken && this.needsTokenMultiplication(prevToken, token)) {
                result += ' * ';
            }
            result += this.tokenToString(token);
            prevToken = token;
        }
        return result;
    }

    tokenToString(token) {
        switch (token.type) {
            case 'frac': return 'FRAC_CMD';
            case 'sqrt': return 'SQRT_CMD';
            case 'binom': return 'BINOM_CMD';
            case 'int': return 'INT_CMD';
            case 'sum': return 'SUM_CMD';
            case 'prod': return 'PROD_CMD';
            case 'lim': return 'LIM_CMD';
            case 'function':
                return this.funcNameMap[token.value] || token.value;
            case 'greek': return token.value;
            case 'constant': return token.value;
            case 'variable': return token.value;
            case 'differential': return token.value;
            case 'number': return token.value;
            case 'operator':
                if (token.value === '-') return '-';
                return ` ${token.value} `;
            case 'lbrace': return '(';
            case 'rbrace': return ')';
            case 'lparen': return '(';
            case 'rparen': return ')';
            case 'comma': return ',';
            case 'modifier': return '';
            case 'symbol': return token.value;
            default: return token.value || '';
        }
    }

    processGroup(group) {
        const content = this.processNodes(group.children);
        return `(${content})`;
    }

    needsNodeMultiplication(prevNode, nextNode) {
        if (prevNode.type === 'text' && nextNode.type === 'group') {
            const text = prevNode.value.trim();
            const noMultCommands = [
                '\\frac','\\sqrt','\\binom','\\int','\\sum','\\prod','\\lim',
                '\\sin','\\cos','\\tan','\\log','\\ln','\\exp','\\abs',
                '\\arcsin','\\arccos','\\arctan','\\sinh','\\cosh','\\tanh',
                '\\max','\\min','\\det'
            ];
            for (let cmd of noMultCommands) {
                if (text.endsWith(cmd)) return false;
            }
            for (let fn of this.functionNames) {
                if (text.endsWith(fn) || text.endsWith('\\' + fn)) return false;
            }
            const lastChar = text[text.length - 1];
            return this.isLetter(lastChar) || this.isDigit(lastChar);
        }
        if (prevNode.type === 'group' && nextNode.type === 'text') {
            const firstChar = nextNode.value.trim()[0];
            return this.isLetter(firstChar) || this.isDigit(firstChar);
        }
        if (prevNode.type === 'group' && nextNode.type === 'group') return true;
        return false;
    }

    needsTokenMultiplication(prevToken, currentToken) {
        const prevType = prevToken.type;
        const currType = currentToken.type;

        // 特例：变量 f 后面跟括号视为函数调用，不插乘号
        if (prevType === 'variable' && prevToken.value === 'f' && currType === 'lparen') {
            return false;
        }

        if (prevType === 'function' || prevType === 'lparen' || prevType === 'lbrace') {
            return false;
        }

        if (prevType === 'rparen' || prevType === 'rbrace') {
            return ['variable', 'number', 'greek', 'constant', 'lparen', 'lbrace'].includes(currType);
        }

        if (currType === 'lparen' || currType === 'lbrace') {
            return ['variable', 'number', 'greek', 'constant', 'rparen', 'rbrace'].includes(prevType);
        }

        const multipliableTypes = ['variable', 'number', 'greek', 'constant'];
        return multipliableTypes.includes(prevType) && multipliableTypes.includes(currType);
    }

    cleanup(result) {
        result = this.processFracCommands(result);
        result = this.processSqrtCommands(result);
        result = this.processBinomCommands(result);
        result = this.processIntCommands(result);
        result = this.processSumProdCommands(result);
        result = this.processLimCommands(result);
        result = this.processMatrixPlaceholders(result);

        // 删除下标
        result = result.replace(/ _ [a-zA-Z0-9]+/g, '');
        result = result.replace(/ _ \{[^}]*\}/g, '');

        // 去掉 ^ 周围空格
        result = result.replace(/\s*\^\s*/g, '^');

        // 给 ^ 后单个字符加括号
        result = result.replace(/\^([a-zA-Z0-9])/g, '^($1)');

        // 处理比较运算符
        result = result.replace(/<\s*=\s*/g, ' <= ');
        result = result.replace(/>\s*=\s*/g, ' >= ');
        result = result.replace(/!\s*=\s*/g, ' != ');

        // 处理普通等号
        result = result.replace(/(?<![<>!])=(?!=)/g, ' = ');

        // 处理减号
        result = result.replace(/([0-9a-zA-Z)])-([0-9a-zA-Z(])/g, '$1 - $2');

        // 统一空格折叠
        result = result.replace(/\s+/g, ' ').trim();

        // 去掉括号内多余空格
        result = result.replace(/\(\s+/g, '(');
        result = result.replace(/\s+\)/g, ')');

        // 斜杠两侧是括号时去掉空格
        result = result.replace(/\)\s*\/\s*\(/g, ')/(');

        // 删除大型运算符后错误的乘号
        result = result.replace(/(integrate\([^)]*\)|sum\([^)]*\)|prod\([^)]*\)|limit\([^)]*\)) \* /g, '$1');

        return result;
    }

    processFracCommands(result) {
        let maxIter = 20;
        while (maxIter-- > 0) {
            const idx = result.indexOf('FRAC_CMD');
            if (idx === -1) break;
            const g1Start = result.indexOf('(', idx);
            if (g1Start === -1) break;
            const g1End = this.findMatchingParen(result, g1Start);
            if (g1End === -1) break;
            const g2Start = result.indexOf('(', g1End + 1);
            if (g2Start === -1) break;
            const g2End = this.findMatchingParen(result, g2Start);
            if (g2End === -1) break;
            const num = result.substring(g1Start + 1, g1End);
            const den = result.substring(g2Start + 1, g2End);
            result = result.substring(0, idx) + `((${num})/(${den}))` + result.substring(g2End + 1);
        }
        return result;
    }

    processSqrtCommands(result) {
        let maxIter = 20;
        while (maxIter-- > 0) {
            const idx = result.indexOf('SQRT_CMD');
            if (idx === -1) break;
            const gStart = result.indexOf('(', idx);
            if (gStart === -1) break;
            const gEnd = this.findMatchingParen(result, gStart);
            if (gEnd === -1) break;
            const content = result.substring(gStart + 1, gEnd);
            result = result.substring(0, idx) + `sqrt(${content})` + result.substring(gEnd + 1);
        }
        return result;
    }

    processBinomCommands(result) {
        let maxIter = 20;
        while (maxIter-- > 0) {
            const idx = result.indexOf('BINOM_CMD');
            if (idx === -1) break;
            const g1Start = result.indexOf('(', idx);
            if (g1Start === -1) break;
            const g1End = this.findMatchingParen(result, g1Start);
            if (g1End === -1) break;
            const g2Start = result.indexOf('(', g1End + 1);
            if (g2Start === -1) break;
            const g2End = this.findMatchingParen(result, g2Start);
            if (g2End === -1) break;
            const n = result.substring(g1Start + 1, g1End);
            const k = result.substring(g2Start + 1, g2End);
            result = result.substring(0, idx) + `binom(${n}, ${k})` + result.substring(g2End + 1);
        }
        return result;
    }

    processIntCommands(result) {
        let maxIter = 20;
        while (maxIter-- > 0) {
            const idx = result.indexOf('INT_CMD');
            if (idx === -1) break;
            const lowerStart = result.indexOf('(', idx);
            if (lowerStart === -1) break;
            const lowerEnd = this.findMatchingParen(result, lowerStart);
            if (lowerEnd === -1) break;
            const upperStart = result.indexOf('(', lowerEnd + 1);
            if (upperStart === -1) break;
            const upperEnd = this.findMatchingParen(result, upperStart);
            if (upperEnd === -1) break;
            const lower = result.substring(lowerStart + 1, lowerEnd);
            const upper = result.substring(upperStart + 1, upperEnd);
            result = result.substring(0, idx) + `integrate(${lower}, ${upper})` + result.substring(upperEnd + 1);
        }
        return result;
    }

    processSumProdCommands(result) {
        let maxIter = 20;
        while (maxIter-- > 0) {
            const sumIdx = result.indexOf('SUM_CMD');
            const prodIdx = result.indexOf('PROD_CMD');
            let idx = -1;
            let isSum = true;
            if (sumIdx !== -1 && (prodIdx === -1 || sumIdx < prodIdx)) {
                idx = sumIdx; isSum = true;
            } else if (prodIdx !== -1) {
                idx = prodIdx; isSum = false;
            } else break;
            const lowerStart = result.indexOf('(', idx);
            if (lowerStart === -1) break;
            const lowerEnd = this.findMatchingParen(result, lowerStart);
            if (lowerEnd === -1) break;
            const upperStart = result.indexOf('(', lowerEnd + 1);
            if (upperStart === -1) break;
            const upperEnd = this.findMatchingParen(result, upperStart);
            if (upperEnd === -1) break;
            const lower = result.substring(lowerStart + 1, lowerEnd);
            const upper = result.substring(upperStart + 1, upperEnd);
            result = result.substring(0, idx) + `${isSum ? 'sum' : 'prod'}(${lower}, ${upper})` + result.substring(upperEnd + 1);
        }
        return result;
    }

    processLimCommands(result) {
        let maxIter = 20;
        while (maxIter-- > 0) {
            const idx = result.indexOf('LIM_CMD');
            if (idx === -1) break;
            const gStart = result.indexOf('(', idx);
            if (gStart === -1) break;
            const gEnd = this.findMatchingParen(result, gStart);
            if (gEnd === -1) break;
            const content = result.substring(gStart + 1, gEnd);
            result = result.substring(0, idx) + `limit(${content})` + result.substring(gEnd + 1);
        }
        return result;
    }

    processMatrixPlaceholders(result) {
        result = result.replace(/@@MATRIX_(\w+)_(\[.*?\])@@/g, (match, type, jsonStr) => {
            const matrix = JSON.parse(jsonStr);
            return `matrix(${JSON.stringify(matrix)})`;
        });
        return result;
    }

    findMatchingParen(str, openIndex) {
        let depth = 0;
        for (let i = openIndex; i < str.length; i++) {
            if (str[i] === '(') depth++;
            if (str[i] === ')') {
                depth--;
                if (depth === 0) return i;
            }
        }
        return -1;
    }

    isDigit(ch) { return ch >= '0' && ch <= '9'; }
    isLetter(ch) { return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'); }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LatexParser };
}

if (typeof window !== 'undefined') {
    window.LatexParser = LatexParser;
}