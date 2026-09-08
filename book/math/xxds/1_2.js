window.SECTION_CONTENT = `
<h4>📐 全排列及其逆序数</h4>

<p>在定义 n 阶行列式之前，需要先了解排列的逆序数概念。逆序数是确定行列式展开式中各项符号的依据。</p>

<h5>1. 全排列</h5>

<p><strong>定义：</strong> 把 n 个不同的元素排成一列，叫做这 n 个元素的<strong>全排列</strong>（简称排列）。</p>

<p>n 个元素的全排列共有 <span class="formula-inline" data-latex="n!"></span> 种。</p>

<p>例如，3 个元素 1, 2, 3 的全排列为：</p>
<p style="text-align: center;">123, 132, 213, 231, 312, 321</p>

<h5>2. 逆序与逆序数</h5>

<p><strong>定义：</strong> 在一个排列中，若一对数的前后位置与大小顺序相反，即前面的数大于后面的数，则称这对数为一个<strong>逆序</strong>。一个排列中逆序的总数称为该排列的<strong>逆序数</strong>。</p>

<p>例如，排列 2 3 1 中：</p>
<ul>
  <li>2 > 1（逆序）</li>
  <li>3 > 1（逆序）</li>
  <li>2 < 3（顺序）</li>
</ul>
<p>所以逆序数为 2。</p>

<p><strong>奇排列与偶排列：</strong></p>
<ul>
  <li>逆序数为奇数的排列称为<strong>奇排列</strong></li>
  <li>逆序数为偶数的排列称为<strong>偶排列</strong></li>
</ul>

<h4>📘 例题 1：求逆序数</h4>

<div class="example">
  <p><strong>题目：</strong> 求排列 4 1 3 2 的逆序数。</p>
  
  <p><strong>解：</strong></p>
  <p>依次计算每个元素后面比它小的元素个数：</p>
  <ul>
    <li>4 后面比它小的有：1, 3, 2（3 个）</li>
    <li>1 后面比它小的有：无（0 个）</li>
    <li>3 后面比它小的有：2（1 个）</li>
    <li>2 后面比它小的有：无（0 个）</li>
  </ul>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\tau(4, 1, 3, 2) = 3 + 0 + 1 + 0 = 4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 逆序数为 4（偶排列）</p>
</div>

<h5>3. 逆序数的性质</h5>

<p><strong>性质 1：</strong> 对换排列中的两个元素，排列的奇偶性发生改变。</p>

<p><strong>性质 2：</strong> 在全部 n 阶排列中，奇排列和偶排列各占一半，各有 <span class="formula-inline" data-latex="n!/2"></span> 个。</p>

<h4>📘 例题 2：判断奇偶性</h4>

<div class="example">
  <p><strong>题目：</strong> 判断排列 2 4 1 3 的奇偶性。</p>
  
  <p><strong>解：</strong></p>
  <p>计算逆序数：</p>
  <ul>
    <li>2 后面比它小的有：1（1 个）</li>
    <li>4 后面比它小的有：1, 3（2 个）</li>
    <li>1 后面比它小的有：无（0 个）</li>
    <li>3 后面比它小的有：无（0 个）</li>
  </ul>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\tau = 1 + 2 + 0 + 0 = 3"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 逆序数为 3（奇排列）</p>
</div>

<h5>4. 排列与行列式的关系</h5>

<p>n 阶行列式展开式中的每一项都对应一个 n 元排列：</p>

<div class="formula-block" data-latex="\\sum_{j_1 j_2 \\cdots j_n} (-1)^{\\tau(j_1 j_2 \\cdots j_n)} a_{1j_1} a_{2j_2} \\cdots a_{nj_n}"></div>

<p>其中 <span class="formula-inline" data-latex="\\tau(j_1 j_2 \\cdots j_n)"></span> 是列标排列的逆序数。</p>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 逆序数是行列式定义中的重要概念。它决定了行列式展开式中每一项的正负号。理解排列的奇偶性，是理解高阶行列式展开的基础。
  </p>
</div>
`;