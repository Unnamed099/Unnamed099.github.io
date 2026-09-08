// ===== js/composer-drawing.js =====
// 画板模块 - 完整修复版

const ComposerDrawing = {
    createCanvasRow(div, row) {
        const canvasContainer = document.createElement('div');
        canvasContainer.style.position = 'relative';
        canvasContainer.style.display = 'inline-block';
        canvasContainer.style.border = '1px solid #ddd';
        canvasContainer.style.borderRadius = '4px';
        canvasContainer.style.overflow = 'hidden';
        
        const canvas = document.createElement('canvas');
        canvas.width = 300;
        canvas.height = 150;
        canvas.id = 'draw-' + row.id;
        canvas.style.cursor = 'crosshair';
        canvas.style.display = 'block';
        canvas.style.background = '#fff';
        canvasContainer.appendChild(canvas);
        div.appendChild(canvasContainer);

        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let isDrawing = false;

        function getCanvasCoords(e) {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
            const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
            return {
                x: (clientX - rect.left) * scaleX,
                y: (clientY - rect.top) * scaleY
            };
        }

        function startDrawing(e) {
            e.preventDefault();
            isDrawing = true;
            const coords = getCanvasCoords(e);
            ctx.beginPath();
            ctx.moveTo(coords.x, coords.y);
        }

        function draw(e) {
            if (!isDrawing) return;
            e.preventDefault();
            const coords = getCanvasCoords(e);
            ctx.lineTo(coords.x, coords.y);
            ctx.stroke();
        }

        function stopDrawing() {
            if (isDrawing) {
                isDrawing = false;
                row.drawing = canvas.toDataURL();
                if (typeof ComposerRender !== 'undefined') {
                    ComposerRender.renderOutput();
                }
            }
        }

        // 鼠标事件
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        // 触摸事件
        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);

        // 清空按钮
        const clearBtn = document.createElement('button');
        clearBtn.textContent = '清空';
        clearBtn.className = 'btn small';
        clearBtn.style.marginLeft = '8px';
        clearBtn.addEventListener('click', () => {
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            row.drawing = canvas.toDataURL();
            if (typeof ComposerRender !== 'undefined') {
                ComposerRender.renderOutput();
            }
        });
        div.appendChild(clearBtn);
    }
};