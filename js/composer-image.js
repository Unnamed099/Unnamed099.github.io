// ===== js/composer-image.js =====
// 图文合成器 - 图片模块

const ComposerImage = {
    /**
     * 创建图片行
     */
    createImageRow(div, row, onComplete) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    row.content = ev.target.result;
                    if (onComplete) onComplete();
                };
                reader.readAsDataURL(file);
            }
        });
        div.appendChild(fileInput);

        if (row.content) {
            const img = document.createElement('img');
            img.src = row.content;
            img.style.maxWidth = '200px';
            img.style.maxHeight = '100px';
            div.appendChild(img);
        }
    }
};