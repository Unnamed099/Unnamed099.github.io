// ===== js/composer-render.js =====
const ComposerRender = {
    fontSize: 24,

    async renderLatexToImage(latex) {
        const renderArea = document.getElementById('renderArea');
        if (!renderArea) return null;
        renderArea.innerHTML = '';
        renderArea.style.fontSize = this.fontSize + 'px';
        renderArea.style.background = 'transparent';

        try {
            katex.render(latex, renderArea, { 
                displayMode: true, 
                throwOnError: false,
                strict: false,
                trust: true
            });
            
            // ★ 强制所有 KaTeX 元素继承字体大小
            const katexEls = renderArea.querySelectorAll('.katex');
            katexEls.forEach(el => {
                el.style.fontSize = this.fontSize + 'px';
            });
            
        } catch (e) {
            renderArea.textContent = latex;
            renderArea.style.fontSize = this.fontSize + 'px';
        }

        try {
            const canvas = await html2canvas(renderArea, {
                backgroundColor: null,
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
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillStyle = '#000';
        ctx.font = 'bold ' + this.fontSize + 'px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(latex, c.width / 2, c.height / 2);
        const img = new Image();
        img.src = c.toDataURL('image/png');
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

    async calculateCanvasSize() {
        let maxRight = 600;
        let maxBottom = 400;
        for (const row of rows) {
            let w = 100, h = 40;
            if (row.type === 'latex' && row.content) {
                const img = await this.renderLatexToImage(row.content);
                if (img) { w = img.width; h = img.height; }
            } else if (row.type === 'image' && row.content) {
                const img = await this.loadImage(row.content);
                if (img) { w = img.width; h = img.height; }
            } else if (row.type === 'canvas') {
                w = 200; h = 100;
            }
            const right = (row.x || 0) + w;
            const bottom = (row.y || 0) + h;
            if (right > maxRight) maxRight = right;
            if (bottom > maxBottom) maxBottom = bottom;
        }
        return { width: Math.ceil(maxRight + 50), height: Math.ceil(maxBottom + 50) };
    },

    async renderOutput() {
        const canvas = document.getElementById('outputCanvas');
        if (!canvas) return;
        const size = await this.calculateCanvasSize();
        canvas.width = Math.max(canvas.width, size.width);
        canvas.height = Math.max(canvas.height, size.height);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!rows.length) return;

        for (const row of rows) {
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
                ctx.drawImage(img, row.x || 0, row.y || 0);
            }
        }
    },

    setFontSize(size) {
        this.fontSize = size;
        
        const renderArea = document.getElementById('renderArea');
        if (renderArea) renderArea.style.fontSize = size + 'px';
        
        document.querySelectorAll('.row-preview').forEach(el => {
            el.style.fontSize = Math.max(12, size * 0.8) + 'px';
        });
        
        document.querySelectorAll('.row-latex-input').forEach(el => {
            el.style.fontSize = Math.max(10, size * 0.6) + 'px';
        });
        
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