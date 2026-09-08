window.SECTION_CONTENT = `
<h4>📐 对换（选学内容）</h4>

<p>对换是研究排列性质的重要工具，也是理解行列式展开式中符号规律的关键。本节作为选学内容，介绍对换的基本概念和性质。</p>

<h5>1. 对换的定义</h5>

<p><strong>定义：</strong> 在一个排列中，把任意两个元素交换位置，其余元素保持不动，这种变换称为一个<strong>对换</strong>。</p>

<p>例如，排列 1 2 3 4 中，交换 2 和 4 的位置，得到 1 4 3 2，这就是一个对换。</p>

<p>对换可以分为两类：</p>
<ul>
  <li><strong>相邻对换：</strong> 交换相邻位置的两个元素</li>
  <li><strong>一般对换：</strong> 交换任意位置的两个元素</li>
</ul>

<h5>2. 对换的性质</h5>

<p><strong>性质 1：</strong> 一个排列中的任意两个元素对换，排列的奇偶性改变。</p>

<p>即：对换一次，奇排列变为偶排列，偶排列变为奇排列。</p>

<p><strong>性质 2：</strong> 对换两个不相邻的元素，可以通过 <span class="formula-inline" data-latex="2k+1"></span> 次相邻对换实现。</p>

<p>因此，每次对换都改变排列的奇偶性。</p>

<h4>📘 例题 1：对换与奇偶性的变化</h4>

<div class="example">
  <p><strong>题目：</strong> 排列 2 4 1 3 是奇排列还是偶排列？对换 2 和 3 后得到什么排列？奇偶性如何变化？</p>
  
  <p><strong>解：</strong></p>
  <p>由前面的例题，2 4 1 3 的逆序数 <span class="formula-inline" data-latex="\\tau = 3"></span>，是<strong>奇排列</strong>。</p>
  <p>对换 2 和 3，得到排列 3 4 1 2。</p>
  <p>3 4 1 2 的逆序数：</p>
  <ul>
    <li>3 后面比它小的有：1, 2（2 个）</li>
    <li>4 后面比它小的有：1, 2（2 个）</li>
    <li>1 后面比它小的有：无（0 个）</li>
    <li>2 后面比它小的有：无（0 个）</li>
  </ul>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\tau = 2 + 2 + 0 + 0 = 4"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 奇排列 → 偶排列，奇偶性发生改变。</p>
</div>

<h5>3. 对换与行列式</h5>

<p>在行列式的展开式中，交换两行（或两列）相当于对排列进行一次对换，因此行列式的符号发生改变。</p>

<p>这一性质是行列式性质中"交换两行（列）行列式变号"的理论依据。</p>

<h4>📘 例题 2：对换在行列式中的应用</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="D = \\begin{vmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{vmatrix}"></span>，交换第 1 行和第 2 行后得到行列式 <span class="formula-inline" data-latex="D'"></span>，求 <span class="formula-inline" data-latex="D'"></span> 与 <span class="formula-inline" data-latex="D"></span> 的关系。</p>
  
  <p><strong>解：</strong></p>
  <p>由对换的性质，对换两个元素改变排列的奇偶性，所以行列式的每一项符号都改变。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="D' = -D"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 交换两行，行列式变号。</p>
</div>

<h5>4. 对换的结论</h5>

<ul>
  <li>每次对换改变排列的奇偶性</li>
  <li>从自然排列（逆序数为 0，偶排列）出发，经过奇数次对换得到奇排列，经过偶数次对换得到偶排列</li>
  <li>对换是理解行列式符号规律的核心</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 对换是排列理论中的重要概念。它揭示了排列奇偶性变化的本质规律，也为行列式性质（如交换两行行列式变号）提供了理论依据。虽然作为选学内容，但对换对于深入理解行列式有着重要意义。
  </p>
</div>
`;