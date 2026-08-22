// ===== js/composer-render.js =====
// 图文合成器 - 渲染模块（紧凑 + 自动扩展 + 可调字体）

const ComposerRender = {
    fontSize: 24,  // ★ 默认字体大小

    async renderLatexToImage(latex) {
        const renderArea = document.getElementById('renderArea');
        renderArea.innerHTML = '';
        renderArea.style.fontSize = this.fontSize + 'px';  // ★ 应用字体大小
        try {
            katex.render(latex, renderArea, { displayMode: true, throwOnError: false });
        } catch (e) {
            renderArea.textContent = latex;
        }

        try {
            const canvas = await html2canvas(renderArea, {
                backgroundColor: '#ffffff',
                scale: 2
            });
            const img = new Image();
            img.src = canvas.toDataURL('image/png');
            await new Promise(res => img.onload = res);
            return img;
        } catch (e) {
            return this.createFallbackImage(latex);
        }
    },

    createFallbackImage(latex) {
        const c = document.createElement('canvas');
        c.width = 400;
        c.height = this.fontSize * 3;
        const ctx = c.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#000';
        ctx.font = this.fontSize + 'px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(latex, c.width / 2, c.height / 2);
        const img = new Image();
        img.src = c.toDataURL();
        return img;
    },

    loadImage(src) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => resolve(null);
            img.src = src;
        });
    },

    /**
     * 计算内容所需高度
     */
    async calculateContentHeight() {
        const paddingTop = 20;
        const rowSpacing = 4;    // ★ 极小间距
        const rowHeight = Math.max(50, this.fontSize * 2.5);  // ★ 根据字体调整行高
        
        let totalHeight = paddingTop;
        
        for (let row of rows) {
            if (row.type === 'latex' && row.content) {
                const img = await this.renderLatexToImage(row.content);
                if (img) {
                    const scale = Math.min(1, rowHeight / img.height);
                    totalHeight += img.height * scale + rowSpacing;
                } else {
                    totalHeight += rowHeight + rowSpacing;
                }
            } else if (row.type === 'image' && row.content) {
                totalHeight += rowHeight + rowSpacing;
            } else if (row.type === 'canvas') {
                totalHeight += 100 + rowSpacing;
            }
        }
        
        return totalHeight + 20;
    },

    async renderOutput() {
        const canvas = document.getElementById('outputCanvas');
        
        // ★ 先计算内容高度
        const contentHeight = await this.calculateContentHeight();
        
        // ★ 如果内容超出画布，扩展画布
        if (contentHeight > canvas.height - 20) {
            canvas.height = Math.ceil(contentHeight);
        }
        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (!rows.length) {
            ctx.fillStyle = '#ccc';
            ctx.font = '20px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('添加行开始合成', canvas.width / 2, canvas.height / 2);
            return;
        }

        const paddingLeft = 30;
        const paddingTop = 20;
        const rowSpacing = 4;     // ★ 极小间距
        const rowHeight = Math.max(50, this.fontSize * 2.5);

        let currentY = paddingTop;

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const startX = paddingLeft;
            let img = null;

            if (row.type === 'latex' && row.content) {
                img = await this.renderLatexToImage(row.content);
            } else if (row.type === 'image' && row.content) {
                img = await this.loadImage(row.content);
            } else if (row.type === 'canvas') {
                const c = document.getElementById('draw-' + row.id);
                const data = row.drawing || (c ? c.toDataURL() : null);
                if (data) img = await this.loadImage(data);
            }

            if (img) {
                const maxH = rowHeight;
                const maxW = canvas.width - paddingLeft * 2;
                const scale = Math.min(1, maxH / img.height, maxW / img.width);
                const w = img.width * scale;
                const h = img.height * scale;
                ctx.drawImage(img, startX, currentY, w, h);
                currentY += h + rowSpacing;
            } else {
                ctx.fillStyle = '#333';
                ctx.font = this.fontSize + 'px serif';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'top';
                ctx.fillText(row.content || '空行', startX, currentY);
                currentY += rowHeight + rowSpacing;
            }
        }
    },

    /**
     * 设置字体大小
     */
    setFontSize(size) {
        this.fontSize = size;
        this.renderOutput();
    },

    downloadImage() {
        const canvas = document.getElementById('outputCanvas');
        const a = document.createElement('a');
        a.download = 'composition.png';
        a.href = canvas.toDataURL('image/png');
        a.click();
        showToast('✅ 已下载');
    }
};