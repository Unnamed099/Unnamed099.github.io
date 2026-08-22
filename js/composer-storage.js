// ===== js/composer-storage.js =====
// 图文合成器 - 数据导出导入模块（修复版）

const ComposerStorage = {
    /**
     * 导出数据为 JSON 文件
     */
    exportData() {
        const data = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            fontSize: ComposerRender ? ComposerRender.fontSize : 24,
            rows: rows.map(row => ({
                type: row.type,
                content: row.content,
                drawing: row.drawing
            }))
        };
        
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'latex-composition-data.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('✅ 数据已导出');
    },

    /**
     * 导入数据
     */
    importData(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    resolve(data);
                } catch (err) {
                    reject(new Error('JSON 解析失败: ' + err.message));
                }
            };
            reader.onerror = () => reject(new Error('文件读取失败'));
            // ★ 使用 readAsText 读取 JSON 文件
            reader.readAsText(file);
        });
    },

    /**
     * 从导入的数据恢复行
     */
    restoreFromData(data) {
        if (!data || !data.rows || !Array.isArray(data.rows)) {
            throw new Error('无效的数据格式：缺少 rows 数组');
        }

        rows = [];
        rowIdCounter = 0;
        
        data.rows.forEach(rowData => {
            rows.push({
                id: rowIdCounter++,
                type: rowData.type || 'latex',
                content: rowData.content || '',
                drawing: rowData.drawing || null
            });
        });

        if (data.fontSize && ComposerRender) {
            ComposerRender.fontSize = data.fontSize;
            const fontSizeInput = document.getElementById('fontSizeInput');
            if (fontSizeInput) fontSizeInput.value = data.fontSize;
        }

        rerenderAllRows();
        showToast('✅ 数据已导入（' + rows.length + ' 行）');
    },

    /**
     * 导出为纯 JSON 字符串
     */
    exportAsString() {
        const data = {
            version: '1.0',
            fontSize: ComposerRender ? ComposerRender.fontSize : 24,
            rows: rows.map(row => ({
                type: row.type,
                content: row.content,
                drawing: row.drawing
            }))
        };
        return JSON.stringify(data);
    },

    /**
     * 从 JSON 字符串导入
     */
    importFromString(jsonStr) {
        const data = JSON.parse(jsonStr);
        this.restoreFromData(data);
    },

    /**
     * 创建文件选择器用于导入
     */
    createImportInput() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json,application/json';
        input.style.display = 'none';
        document.body.appendChild(input);
        
        input.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (!file) {
                document.body.removeChild(input);
                return;
            }
            try {
                const data = await this.importData(file);
                this.restoreFromData(data);
            } catch (err) {
                showToast('❌ ' + err.message);
            }
            document.body.removeChild(input);
        });
        
        input.click();
    }
};