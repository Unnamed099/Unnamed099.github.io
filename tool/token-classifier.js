// ===== tool/token-classifier.js =====
// Token 分类器 - 完整版（支持全部 LaTeX 命令）

class TokenClassifier {
    constructor() {
        this.pos = 0;
        this.input = '';
        
        this.knownFunctions = new Set([
            'sin', 'cos', 'tan', 'cot', 'sec', 'csc',
            'arcsin', 'arccos', 'arctan',
            'sinh', 'cosh', 'tanh',
            'log', 'ln', 'lg', 'exp', 'abs', 'sqrt',
            'max', 'min', 'sup', 'inf', 'gcd', 'det'
        ]);
        
        this.knownConstants = new Set(['pi', 'e']);
        
        this.greekMap = {
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'δ',
            'epsilon': 'ε', 'zeta': 'ζ', 'eta': 'η', 'theta': 'θ',
            'iota': 'ι', 'kappa': 'κ', 'lambda': 'λ', 'mu': 'μ',
            'nu': 'ν', 'xi': 'ξ', 'pi': 'π', 'rho': 'ρ',
            'sigma': 'σ', 'tau': 'τ', 'upsilon': 'υ', 'phi': 'φ',
            'chi': 'χ', 'psi': 'ψ', 'omega': 'ω',
            'Gamma': 'Γ', 'Delta': 'Δ', 'Theta': 'Θ', 'Lambda': 'Λ',
            'Xi': 'Ξ', 'Pi': 'Π', 'Sigma': 'Σ', 'Upsilon': 'Υ',
            'Phi': 'Φ', 'Psi': 'Ψ', 'Omega': 'Ω'
        };
        
        this.specialCommands = {
            // 结构命令
            'frac': { type: 'frac', value: 'frac' },
            'sqrt': { type: 'sqrt', value: 'sqrt' },
            'binom': { type: 'binom', value: 'binom' },
            
            // 大型运算符
            'int': { type: 'int', value: 'int' },
            'iint': { type: 'iint', value: 'iint' },
            'iiint': { type: 'iiint', value: 'iiint' },
            'oint': { type: 'oint', value: 'oint' },
            'sum': { type: 'sum', value: 'sum' },
            'prod': { type: 'prod', value: 'prod' },
            'lim': { type: 'lim', value: 'lim' },
            'bigcup': { type: 'bigcup', value: 'bigcup' },
            'bigcap': { type: 'bigcap', value: 'bigcap' },
            
            // 矩阵
            'begin': { type: 'begin', value: 'begin' },
            'end': { type: 'end', value: 'end' },
            
            // 修饰符
            'left': { type: 'modifier', value: '' },
            'right': { type: 'modifier', value: '' },
            
            // 运算符
            'cdot': { type: 'operator', value: '*' },
            'times': { type: 'operator', value: '*' },
            'div': { type: 'operator', value: '/' },
            'pm': { type: 'operator', value: '±' },
            'mp': { type: 'operator', value: '∓' },
            'ast': { type: 'operator', value: '*' },
            'star': { type: 'operator', value: '*' },
            'circ': { type: 'operator', value: '∘' },
            'bullet': { type: 'operator', value: '•' },
            'oplus': { type: 'operator', value: '⊕' },
            'otimes': { type: 'operator', value: '⊗' },
            'odot': { type: 'operator', value: '⊙' },
            
            // 关系符
            'neq': { type: 'operator', value: '!=' },
            'leq': { type: 'operator', value: '<=' },
            'geq': { type: 'operator', value: '>=' },
            'approx': { type: 'operator', value: '≈' },
            'equiv': { type: 'operator', value: '≡' },
            'sim': { type: 'operator', value: '∼' },
            'propto': { type: 'operator', value: '∝' },
            'in': { type: 'operator', value: '∈' },
            'notin': { type: 'operator', value: '∉' },
            'subset': { type: 'operator', value: '⊂' },
            'supset': { type: 'operator', value: '⊃' },
            'subseteq': { type: 'operator', value: '⊆' },
            'supseteq': { type: 'operator', value: '⊇' },
            'cup': { type: 'operator', value: '∪' },
            'cap': { type: 'operator', value: '∩' },
            'land': { type: 'operator', value: '∧' },
            'lor': { type: 'operator', value: '∨' },
            'neg': { type: 'operator', value: '¬' },
            'forall': { type: 'operator', value: '∀' },
            'exists': { type: 'operator', value: '∃' },
            
            // 箭头
            'to': { type: 'operator', value: '→' },
            'rightarrow': { type: 'operator', value: '→' },
            'leftarrow': { type: 'operator', value: '←' },
            'leftrightarrow': { type: 'operator', value: '↔' },
            'Rightarrow': { type: 'operator', value: '⇒' },
            'Leftarrow': { type: 'operator', value: '⇐' },
            'Leftrightarrow': { type: 'operator', value: '⇔' },
            'mapsto': { type: 'operator', value: '↦' },
            'uparrow': { type: 'operator', value: '↑' },
            'downarrow': { type: 'operator', value: '↓' },
            
            // 特殊符号
            'infty': { type: 'constant', value: 'Infinity' },
            'partial': { type: 'symbol', value: '∂' },
            'nabla': { type: 'symbol', value: '∇' },
            'hbar': { type: 'symbol', value: 'ℏ' },
            'ell': { type: 'symbol', value: 'ℓ' },
            'emptyset': { type: 'symbol', value: '∅' },
            'angle': { type: 'symbol', value: '∠' },
            'triangle': { type: 'symbol', value: '△' },
            'square': { type: 'symbol', value: '□' },
            'diamond': { type: 'symbol', value: '◇' },
            
            // 括号
            'langle': { type: 'lbracket', value: '⟨' },
            'rangle': { type: 'rbracket', value: '⟩' },
            'lceil': { type: 'lbracket', value: '⌈' },
            'rceil': { type: 'rbracket', value: '⌉' },
            'lfloor': { type: 'lbracket', value: '⌊' },
            'rfloor': { type: 'rbracket', value: '⌋' },
            
            // 文本和字体
            'text': { type: 'text', value: 'text' },
            'mathrm': { type: 'font', value: '' },
            'mathbf': { type: 'font', value: '' },
            'mathit': { type: 'font', value: '' },
            'mathcal': { type: 'font', value: '' },
            'mathbb': { type: 'font', value: '' },
            'mathfrak': { type: 'font', value: '' },
            
            // 修饰符
            'vec': { type: 'modifier', value: '' },
            'hat': { type: 'modifier', value: '' },
            'dot': { type: 'modifier', value: '' },
            'ddot': { type: 'modifier', value: '' },
            'overline': { type: 'modifier', value: '' },
            'underline': { type: 'modifier', value: '' },
        };
    }

    classify(input) {
        this.input = input;
        this.pos = 0;
        
        const tokens = [];
        
        while (this.hasMore()) {
            const ch = this.peek();
            
            if (this.isSpace(ch)) {
                tokens.push({ type: 'space', value: this.advance() });
                continue;
            }
            
            if (ch === '\\') {
                tokens.push(this.readCommand());
                continue;
            }
            
            if (this.isDigit(ch)) {
                tokens.push(this.readNumber());
                continue;
            }
            
            if (this.isLetter(ch)) {
                const wordToken = this.readWord();
                if (wordToken.type === 'multi-variable') {
                    tokens.push(...this.analyzeMultiVariable(wordToken));
                } else {
                    tokens.push(wordToken);
                }
                continue;
            }
            
            if (['+', '-', '*', '/', '^', '_', '='].includes(ch)) {
                tokens.push({ type: 'operator', value: this.advance() });
                continue;
            }
            
            if (ch === '(') { tokens.push({ type: 'lparen', value: this.advance() }); continue; }
            if (ch === ')') { tokens.push({ type: 'rparen', value: this.advance() }); continue; }
            if (ch === '{') { tokens.push({ type: 'lbrace', value: this.advance() }); continue; }
            if (ch === '}') { tokens.push({ type: 'rbrace', value: this.advance() }); continue; }
            if (ch === '[') { tokens.push({ type: 'lbracket', value: this.advance() }); continue; }
            if (ch === ']') { tokens.push({ type: 'rbracket', value: this.advance() }); continue; }
            if (ch === ',') { tokens.push({ type: 'comma', value: this.advance() }); continue; }
            if (ch === '&') { tokens.push({ type: 'ampersand', value: this.advance() }); continue; }
            
            tokens.push({ type: 'unknown', value: this.advance() });
        }
        
        return tokens;
    }

    readCommand() {
        this.advance();
        
        let cmdName = '';
        while (this.hasMore() && this.isLetter(this.peek())) {
            cmdName += this.advance();
        }
        
        if (this.greekMap[cmdName]) {
            return { type: 'greek', value: this.greekMap[cmdName], original: `\\${cmdName}` };
        }
        
        if (this.specialCommands[cmdName]) {
            const special = this.specialCommands[cmdName];
            return { type: special.type, value: special.value, original: `\\${cmdName}` };
        }
        
        if (this.knownFunctions.has(cmdName)) {
            return { type: 'function', value: cmdName, original: `\\${cmdName}` };
        }
        
        if (this.knownConstants.has(cmdName)) {
            return { type: 'constant', value: cmdName, original: `\\${cmdName}` };
        }
        
        return { type: 'command', value: cmdName, original: `\\${cmdName}` };
    }

    readNumber() {
        let num = '';
        while (this.hasMore() && (this.isDigit(this.peek()) || this.peek() === '.')) {
            num += this.advance();
        }
        return { type: 'number', value: num };
    }

    readWord() {
        let word = '';
        while (this.hasMore() && this.isLetter(this.peek())) {
            word += this.advance();
        }
        
        if (this.knownFunctions.has(word)) return { type: 'function', value: word };
        if (this.knownConstants.has(word)) return { type: 'constant', value: word };
        
        if (word.length > 1) {
            return {
                type: 'multi-variable',
                value: word,
                variables: word.split('').map(ch => ({ type: 'variable', value: ch }))
            };
        }
        
        return { type: 'variable', value: word };
    }

    analyzeMultiVariable(wordToken) {
        const word = wordToken.value;
        const result = [];
        
        if (this.knownFunctions.has(word)) return [{ type: 'function', value: word }];
        if (this.knownConstants.has(word)) return [{ type: 'constant', value: word }];
        if (this.greekMap[word]) return [{ type: 'greek', value: this.greekMap[word], original: word }];
        
        // dx, dy, dz 微分符号
        if (word.length === 2 && word[0] === 'd' && this.isLetter(word[1])) {
            return [{ type: 'differential', value: word }];
        }
        
        for (let i = 0; i < word.length; i++) {
            result.push({ type: 'variable', value: word[i] });
        }
        return result;
    }

    peek() { return this.input[this.pos] || ''; }
    advance() { return this.input[this.pos++] || ''; }
    hasMore() { return this.pos < this.input.length; }
    isDigit(ch) { return ch >= '0' && ch <= '9'; }
    isLetter(ch) { return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'); }
    isSpace(ch) { return ch === ' ' || ch === '\t' || ch === '\n'; }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TokenClassifier };
}

if (typeof window !== 'undefined') {
    window.TokenClassifier = TokenClassifier;
}