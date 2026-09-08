window.SECTION_CONTENT = `
<h4>📐 随机事件</h4>

<p>概率论是研究随机现象统计规律性的数学分支。它的基本概念包括随机试验、样本空间、随机事件等。理解这些概念是学习概率论的基础。</p>

<h5>1. 随机试验与样本空间</h5>

<p><strong>随机试验：</strong> 具有以下三个特征的试验称为<strong>随机试验</strong>：</p>
<ul>
  <li>可以在相同条件下重复进行</li>
  <li>每次试验的可能结果不止一个，且事先能明确所有可能结果</li>
  <li>进行一次试验之前不能确定会出现哪个结果</li>
</ul>

<p><strong>样本空间：</strong> 随机试验所有可能结果组成的集合称为<strong>样本空间</strong>，记作 <span class="formula-inline" data-latex="\\Omega"></span>。样本空间中的每个元素称为<strong>样本点</strong>。</p>

<h4>📘 例题 1：写出样本空间</h4>

<div class="example">
  <p><strong>题目：</strong> 写出抛掷一枚硬币两次的样本空间。</p>
  
  <p><strong>解：</strong></p>
  <p>用 H 表示正面，T 表示反面。</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\Omega = \\{ HH, HT, TH, TT \\}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\{ HH, HT, TH, TT \\}"></span></p>
</div>

<h5>2. 随机事件</h5>

<p><strong>定义：</strong> 样本空间 <span class="formula-inline" data-latex="\\Omega"></span> 的<strong>子集</strong>称为<strong>随机事件</strong>（简称事件）。</p>

<ul>
  <li><strong>基本事件：</strong> 只含一个样本点的事件</li>
  <li><strong>必然事件：</strong> 每次试验一定发生的事件（<span class="formula-inline" data-latex="\\Omega"></span>）</li>
  <li><strong>不可能事件：</strong> 每次试验一定不发生的事件（<span class="formula-inline" data-latex="\\varnothing"></span>）</li>
</ul>

<h5>3. 事件的关系与运算</h5>

<p><strong>（1）包含关系：</strong> 若事件 A 发生必然导致 B 发生，则称 <span class="formula-inline" data-latex="A \\subset B"></span>。</p>
<p><strong>（2）相等：</strong> 若 <span class="formula-inline" data-latex="A \\subset B</span> 且 <span class="formula-inline" data-latex="B \\subset A"></span>，则 <span class="formula-inline" data-latex="A = B"></span>。</p>
<p><strong>（3）和事件：</strong> <span class="formula-inline" data-latex="A \\cup B"></span>（A 或 B 至少一个发生）。</p>
<p><strong>（4）积事件：</strong> <span class="formula-inline" data-latex="A \\cap B"></span>（A 和 B 同时发生）。</p>
<p><strong>（5）差事件：</strong> <span class="formula-inline" data-latex="A - B = A \\cap \\overline{B}"></span>（A 发生而 B 不发生）。</p>
<p><strong>（6）互斥（互不相容）：</strong> <span class="formula-inline" data-latex="A \\cap B = \\varnothing"></span>。</p>
<p><strong>（7）对立事件：</strong> <span class="formula-inline" data-latex="\\overline{A} = \\Omega - A"></span>。</p>

<h4>📘 例题 2：事件运算</h4>

<div class="example">
  <p><strong>题目：</strong> 设 <span class="formula-inline" data-latex="A, B, C"></span> 为三个事件，用事件运算表示"<span class="formula-inline" data-latex="A, B"></span> 发生但 <span class="formula-inline" data-latex="C"></span> 不发生"。</p>
  
  <p><strong>解：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="A \\cap B \\cap \\overline{C}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="A \\cap B \\cap \\overline{C}"></span></p>
</div>

<h5>4. 事件运算的运算律</h5>

<table>
  <tr>
    <th>运算律</th>
    <th>表达式</th>
  </tr>
  <tr>
    <td><strong>交换律</strong></td>
    <td><span class="formula-inline" data-latex="A \\cup B = B \\cup A, \\quad A \\cap B = B \\cap A"></span></td>
  </tr>
  <tr>
    <td><strong>结合律</strong></td>
    <td><span class="formula-inline" data-latex="(A \\cup B) \\cup C = A \\cup (B \\cup C)"></span><br><span class="formula-inline" data-latex="(A \\cap B) \\cap C = A \\cap (B \\cap C)"></span></td>
  </tr>
  <tr>
    <td><strong>分配律</strong></td>
    <td><span class="formula-inline" data-latex="A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)"></span><br><span class="formula-inline" data-latex="A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)"></span></td>
  </tr>
  <tr>
    <td><strong>德摩根律</strong></td>
    <td><span class="formula-inline" data-latex="\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}"></span><br><span class="formula-inline" data-latex="\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}"></span></td>
  </tr>
</table>

<h5>5. 随机事件总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>含义</th>
    <th>记号</th>
  </tr>
  <tr>
    <td><strong>样本空间</strong></td>
    <td>所有可能结果的集合</td>
    <td><span class="formula-inline" data-latex="\\Omega"></span></td>
  </tr>
  <tr>
    <td><strong>随机事件</strong></td>
    <td>样本空间的子集</td>
    <td><span class="formula-inline" data-latex="A, B, C, \\cdots"></span></td>
  </tr>
  <tr>
    <td><strong>必然事件</strong></td>
    <td>一定发生</td>
    <td><span class="formula-inline" data-latex="\\Omega"></span></td>
  </tr>
  <tr>
    <td><strong>不可能事件</strong></td>
    <td>一定不发生</td>
    <td><span class="formula-inline" data-latex="\\varnothing"></span></td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 随机事件是概率论的基础概念。理解样本空间、事件及事件之间的关系和运算，是学习概率计算的前提。事件运算与集合运算完全对应，德摩根律在概率计算中非常有用。
  </p>
</div>
`;