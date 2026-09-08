// ===== tool/brace-parser.js =====
// 花括号嵌套解析工具
// 用于解析 LaTeX 中的花括号结构

/**
 * 花括号嵌套解析器
 * 
 * 功能：
 * - 解析花括号内外的所有内容
 * - 支持任意深度嵌套
 * - 区分文本和花括号组
 * - 提供简化输出
 * 
 * 示例：
 * 输入: "{{},{{}}}"
 * 输出: [
 *   { type: 'group', simplified: [], isEmpty: true },
 *   { type: 'text', value: ',' },
 *   { type: 'group', simplified: [[]], isEmpty: false }
 * ]
 */
class BraceParser {
    constructor() {
        this.pos = 0;
        this.input = '';
    }

    /**
     * 主解析方法
     * @param {string} input - 要解析的字符串
     * @returns {Array} 解析结果数组，包含 text 和 group 节点
     */
    parse(input) {
        this.input = input;
        this.pos = 0;
        
        // 解析顶层内容（不因 } 停止）
        return this.parseContent({ stopAtBrace: false });
    }

    /**
     * 解析内容
     * @param {Object} options
     *   - stopAtBrace: 遇到 } 时是否停止
     * @returns {Array} 内容数组
     */
    parseContent(options = {}) {
        const children = [];
        let textBuffer = '';
        
        while (this.pos < this.input.length) {
            const ch = this.peek();
            
            if (ch === '{') {
                // 保存之前的文本
                if (textBuffer) {
                    children.push(this.createTextNode(textBuffer));
                    textBuffer = '';
                }
                
                // 解析花括号组
                const group = this.parseGroup();
                children.push(group);
                
            } else if (ch === '}' && options.stopAtBrace) {
                // 遇到 } 停止（在花括号内部）
                break;
                
            } else {
                // 普通字符
                textBuffer += this.advance();
            }
        }
        
        // 保存剩余文本
        if (textBuffer) {
            children.push(this.createTextNode(textBuffer));
        }
        
        return children;
    }

    /**
     * 解析花括号组 { ... }
     * @returns {Object} 花括号组节点
     */
    parseGroup() {
        const start = this.pos;
        this.advance(); // 跳过 {
        
        // 在花括号内部，遇到 } 时停止
        const children = this.parseContent({ stopAtBrace: true });
        
        // 跳过 }
        if (this.peek() === '}') {
            this.advance();
        } else {
            console.warn('[BraceParser] 警告: 花括号未闭合，位置:', this.pos);
        }
        
        return {
            type: 'group',
            children: children,
            start: start,
            end: this.pos - 1,
            isEmpty: children.length === 0,
            simplified: this.simplify(children)
        };
    }

    /**
     * 创建文本节点
     * @param {string} value - 文本内容
     * @returns {Object} 文本节点
     */
    createTextNode(value) {
        return {
            type: 'text',
            value: value
        };
    }

    /**
     * 简化输出：只保留值
     * @param {Array} children - 子节点数组
     * @returns {Array} 简化后的数组
     */
    simplify(children) {
        return children.map(child => {
            if (child.type === 'text') {
                return child.value;
            } else {
                return child.simplified;
            }
        });
    }

    /**
     * 获取当前字符（不移动位置）
     * @returns {string} 当前字符
     */
    peek() {
        return this.input[this.pos] || '';
    }

    /**
     * 获取当前字符并向前移动
     * @returns {string} 当前字符
     */
    advance() {
        return this.input[this.pos++] || '';
    }

    /**
     * 检查是否还有剩余内容
     * @returns {boolean}
     */
    hasMore() {
        return this.pos < this.input.length;
    }

    /**
     * 获取当前位置
     * @returns {number}
     */
    getPosition() {
        return this.pos;
    }

    /**
     * 重置解析器
     */
    reset() {
        this.pos = 0;
        this.input = '';
    }
}

// ===== 导出 =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BraceParser };
}

if (typeof window !== 'undefined') {
    window.BraceParser = BraceParser;
}