// ===== js/composer-storage.js =====
const ComposerStorage = {
    exportData() {
        const data = {
            version: '1.0',
            exportedAt: new Date().toISOString(),
            fontSize: ComposerRender ? ComposerRender.fontSize : 24,
            rows: rows.map(row => ({
                type: row.type,
                content: row.content,
                drawing: row.drawing,
                x: row.x || 0,
                y: row.y || 0
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

    importData(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);
                    resolve(data);
                } catch (err) {
                    reject(new Error('JSON 解析失败'));
                }
            };
            reader.onerror = () => reject(new Error('文件读取失败'));
            reader.readAsText(file);
        });
    },

    restoreFromData(data) {
        if (!data || !data.rows || !Array.isArray(data.rows)) {
            throw new Error('无效的数据格式');
        }
        rows = [];
        rowIdCounter = 0;
        data.rows.forEach(rowData => {
            rows.push({
                id: rowIdCounter++,
                type: rowData.type || 'latex',
                content: rowData.content || '',
                drawing: rowData.drawing || null,
                x: rowData.x || 0,
                y: rowData.y || 0
            });
        });
        if (data.fontSize && ComposerRender) {
            ComposerRender.fontSize = data.fontSize;
            document.getElementById('fontSizeInput').value = data.fontSize;
        }
        rerenderAllRows();
        showToast('✅ 数据已导入');
    },

    createImportInput() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.style.display = 'none';
        document.body.appendChild(input);
        input.addEventListener('change', async (e) => {
            const file = e.target.files[0];
            if (file) {
                try {
                    const data = await this.importData(file);
                    this.restoreFromData(data);
                } catch (err) {
                    showToast('❌ ' + err.message);
                }
            }
            document.body.removeChild(input);
        });
        input.click();
    }
};