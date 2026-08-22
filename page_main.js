        let rows = [];
        let rowIdCounter = 0;
        let activeLatexInput = null;

        function showToast(msg) {
            const t = document.getElementById('toast');
            t.textContent = msg;
            t.classList.add('show');
            setTimeout(() => t.classList.remove('show'), 2000);
        }

        function addRow(type) {
            const row = { id: rowIdCounter++, type, content: '', drawing: null };
            rows.push(row);
            renderSingleRow(row);
        }

        function renderSingleRow(row) {
            const container = document.getElementById('rowsContainer');
            const div = document.createElement('div');
            div.className = 'row-item';
            div.dataset.rowId = row.id;

            const sel = document.createElement('select');
            sel.className = 'row-type-select';
            sel.innerHTML = `
                <option value="latex" ${row.type==='latex'?'selected':''}>公式</option>
                <option value="image" ${row.type==='image'?'selected':''}>图片</option>
                <option value="canvas" ${row.type==='canvas'?'selected':''}>画板</option>`;
            sel.onchange = () => { row.type = sel.value; rerenderAllRows(); };
            div.appendChild(sel);

            if (row.type === 'latex') {
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'row-latex-input';
                input.placeholder = '\\frac{a}{b}';
                input.value = row.content;
                input.oninput = () => {
                    row.content = input.value;
                    updatePreviewInline(input, row);
                };
                div.appendChild(input);

                const symbolBtn = document.createElement('button');
                symbolBtn.type = 'button';
                symbolBtn.className = 'row-symbol-btn';
                symbolBtn.textContent = '∑';
                symbolBtn.title = '插入符号';
                symbolBtn.onclick = () => {
                    activeLatexInput = input;
                    openSymbolPanel();
                };
                div.appendChild(symbolBtn);

                const prev = document.createElement('span');
                prev.className = 'row-preview';
                prev.id = 'preview-' + row.id;
                div.appendChild(prev);
                updatePreviewInline(input, row);
            } else if (row.type === 'image') {
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                fileInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                            row.content = ev.target.result;
                            const img = div.querySelector('img') || document.createElement('img');
                            img.src = row.content;
                            img.style.maxWidth = '200px';
                            img.style.maxHeight = '100px';
                            if (!div.querySelector('img')) div.appendChild(img);
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
            } else if (row.type === 'canvas') {
                const canvas = document.createElement('canvas');
                canvas.width = 300;
                canvas.height = 150;
                canvas.id = 'draw-' + row.id;
                canvas.style.cssText = 'border:1px solid #ddd;border-radius:4px;cursor:crosshair;background:#fff;display:block;';
                div.appendChild(canvas);
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.lineCap = 'round';
                let isDrawing = false;
                const getCoords = (e) => {
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
                    const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
                    return { x: (clientX - rect.left) * (canvas.width / rect.width), y: (clientY - rect.top) * (canvas.height / rect.height) };
                };
                canvas.addEventListener('mousedown', e => { isDrawing = true; const c = getCoords(e); ctx.beginPath(); ctx.moveTo(c.x, c.y); });
                canvas.addEventListener('mousemove', e => { if (isDrawing) { const c = getCoords(e); ctx.lineTo(c.x, c.y); ctx.stroke(); } });
                canvas.addEventListener('mouseup', () => { isDrawing = false; row.drawing = canvas.toDataURL(); });
                canvas.addEventListener('touchstart', e => { e.preventDefault(); isDrawing = true; const c = getCoords(e); ctx.beginPath(); ctx.moveTo(c.x, c.y); }, { passive: false });
                canvas.addEventListener('touchmove', e => { if (isDrawing) { e.preventDefault(); const c = getCoords(e); ctx.lineTo(c.x, c.y); ctx.stroke(); } }, { passive: false });
                canvas.addEventListener('touchend', () => { isDrawing = false; row.drawing = canvas.toDataURL(); });
            }

            const del = document.createElement('button');
            del.className = 'row-delete-btn';
            del.textContent = '✕';
            del.onclick = () => { rows = rows.filter(r => r.id !== row.id); div.remove(); };
            div.appendChild(del);
            container.appendChild(div);
        }

        function rerenderAllRows() {
            const container = document.getElementById('rowsContainer');
            container.innerHTML = '';
            rows.forEach(row => renderSingleRow(row));
        }

        function updatePreviewInline(input, row) {
            const el = document.getElementById('preview-' + row.id);
            if (!el) return;
            const latex = input.value.trim();
            if (!latex) { el.textContent = ''; return; }
            try { katex.render(latex, el, { displayMode: true, throwOnError: false }); }
            catch (e) { el.textContent = '⚠️'; }
        }

        // ===== 符号面板 =====
        let popupActiveCategory = Object.keys(symbolCategories)[0];
        let popupSearchQuery = '';

        function renderPopupCategories() {
            const popupCategories = document.getElementById('popupCategories');
            if (!popupCategories) return;
            popupCategories.innerHTML = '';
            Object.keys(symbolCategories).forEach(catName => {
                const btn = document.createElement('button');
                btn.className = 'popup-category-tab' + (catName === popupActiveCategory ? ' active' : '');
                btn.textContent = catName;
                btn.addEventListener('click', () => { popupActiveCategory = catName; renderPopupCategories(); renderPopupGrid(); });
                popupCategories.appendChild(btn);
            });
        }

        function renderPopupGrid() {
            const popupGrid = document.getElementById('popupGrid');
            if (!popupGrid) return;
            popupGrid.innerHTML = '';
            const symbols = symbolCategories[popupActiveCategory] || [];
            const query = popupSearchQuery.toLowerCase().trim();
            const filtered = symbols.filter(s => !query || s.char.toLowerCase().includes(query) || s.latex.toLowerCase().includes(query));
            filtered.forEach(s => {
                const btn = document.createElement('button');
                btn.className = 'symbol-btn';
                btn.style.cssText = 'display:flex;flex-direction:column;align-items:center;padding:8px;border:1px solid #ddd;border-radius:6px;cursor:pointer;';
                btn.title = s.latex;
                btn.innerHTML = `<span style="font-size:1.2rem;">${s.char}</span><span style="font-size:0.6rem;">${s.latex}</span>`;

                btn.addEventListener('click', () => {
                    if (activeLatexInput) {
                        activeLatexInput.focus();
                        const start = activeLatexInput.selectionStart || 0;
                        const end = activeLatexInput.selectionEnd || 0;
                        activeLatexInput.value = activeLatexInput.value.substring(0, start) + s.latex + activeLatexInput.value.substring(end);
                        const newPos = start + s.latex.length;
                        activeLatexInput.selectionStart = newPos;
                        activeLatexInput.selectionEnd = newPos;
                        activeLatexInput.dispatchEvent(new Event('input'));
                    }
                    closeSymbolPanel();
                    setTimeout(() => { if (activeLatexInput) activeLatexInput.focus(); }, 100);
                });

                popupGrid.appendChild(btn);
            });
        }

        function openSymbolPanel() {
            document.getElementById('modalOverlay').classList.add('open');
            document.getElementById('symbolPopup').classList.add('open');
            renderPopupCategories();
            renderPopupGrid();
        }

        function closeSymbolPanel() {
            document.getElementById('modalOverlay').classList.remove('open');
            document.getElementById('symbolPopup').classList.remove('open');
            document.getElementById('popupSearch').value = '';
            popupSearchQuery = '';
        }

        document.getElementById('symbolPopupClose')?.addEventListener('click', closeSymbolPanel);
        document.getElementById('modalOverlay')?.addEventListener('click', closeSymbolPanel);
        document.getElementById('popupSearch')?.addEventListener('input', e => { popupSearchQuery = e.target.value; renderPopupGrid(); });

        // ===== 按钮事件 =====
        document.getElementById('btnAddLatexRow').onclick = () => addRow('latex');
        document.getElementById('btnAddImageRow').onclick = () => addRow('image');
        document.getElementById('btnAddCanvasRow').onclick = () => addRow('canvas');
        document.getElementById('btnClearAllRows').onclick = () => { rows = []; document.getElementById('rowsContainer').innerHTML = ''; };
        document.getElementById('btnGenerate').onclick = () => { ComposerRender.renderOutput(); showToast('✅ 图片已生成'); };
        document.getElementById('btnDownload').onclick = () => ComposerRender.downloadImage();
        document.getElementById('btnExportData').onclick = () => ComposerStorage.exportData();
        document.getElementById('btnImportData').onclick = () => ComposerStorage.createImportInput();
        document.getElementById('btnApplyFontSize').onclick = () => {
            const size = parseInt(document.getElementById('fontSizeInput').value);
            if (size >= 12 && size <= 72) ComposerRender.setFontSize(size);
        };

        addRow('latex');