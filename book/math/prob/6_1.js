window.SECTION_CONTENT = `
<h4>📐 总体与样本</h4>

<p>数理统计是概率论在数据分析中的应用。它的基本任务是从有限的数据（样本）中推断总体的规律。总体与样本是数理统计中最基本的一对概念。</p>

<h5>1. 总体与个体</h5>

<p><strong>定义：</strong> 研究对象的全体称为<strong>总体</strong>（或母体），组成总体的每个成员称为<strong>个体</strong>。</p>

<p>总体通常用随机变量 <span class="formula-inline" data-latex="X"></span> 来描述，其分布称为<strong>总体分布</strong>。</p>

<p>例如：</p>
<ul>
  <li>某工厂生产的全部灯泡的寿命 → 总体</li>
  <li>每个灯泡的寿命 → 个体</li>
</ul>

<p><strong>总体分类：</strong></p>
<ul>
  <li><strong>有限总体：</strong> 个体数量有限（如某校全体学生身高）</li>
  <li><strong>无限总体：</strong> 个体数量无限（如某型号灯泡的全部寿命）</li>
</ul>

<h5>2. 样本</h5>

<p><strong>定义：</strong> 从总体中抽取的一部分个体称为总体的一个<strong>样本</strong>。样本中个体的个数称为<strong>样本容量</strong>。</p>

<p>设 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 是从总体 <span class="formula-inline" data-latex="X"></span> 中抽取的样本，称为<strong>样本观测值</strong>。</p>

<p><strong>简单随机样本：</strong> 满足以下两个条件的样本：</p>
<ol>
  <li><span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 相互独立</li>
  <li>每个 <span class="formula-inline" data-latex="X_i"></span> 与总体 <span class="formula-inline" data-latex="X"></span> 同分布</li>
</ol>
<p>简称为<strong>独立同分布样本</strong>（i.i.d.）。</p>

<h4>📘 例题 1：总体与样本</h4>

<div class="example">
  <p><strong>题目：</strong> 某工厂生产一批灯泡，从中随机抽取 10 只测试其寿命（单位：小时），得到数据：980, 1020, 1010, 990, 1000, 1015, 1005, 995, 1025, 985。指出总体和样本。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>总体：</strong> 该批全部灯泡的寿命</p>
  <p><strong>样本：</strong> 抽测的 10 只灯泡的寿命数据</p>
  <p><strong>样本容量：</strong> <span class="formula-inline" data-latex="n = 10"></span></p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> 如上</p>
</div>

<h5>3. 样本的二重性</h5>

<p>样本具有二重性：</p>
<ul>
  <li><strong>随机性：</strong> 在抽取之前，样本是随机变量</li>
  <li><strong>确定性：</strong> 在抽取之后，样本是具体的数值</li>
</ul>

<p>因此，样本 <span class="formula-inline" data-latex="(X_1, X_2, \\cdots, X_n)"></span> 既是随机变量，又是观测值。</p>

<h5>4. 常用的抽样方法</h5>

<table>
  <tr>
    <th>抽样方法</th>
    <th>说明</th>
    <th>优点</th>
  </tr>
  <tr>
    <td><strong>简单随机抽样</strong></td>
    <td>每个个体被抽中的概率相等</td>
    <td>理论基础完备</td>
  </tr>
  <tr>
    <td><strong>分层抽样</strong></td>
    <td>按特征分层，各层内随机抽样</td>
    <td>提高精度</td>
  </tr>
  <tr>
    <td><strong>系统抽样</strong></td>
    <td>按一定间隔抽取</td>
    <td>操作简便</td>
  </tr>
  <tr>
    <td><strong>整群抽样</strong></td>
    <td>抽取若干群体，全面调查</td>
    <td>节省成本</td>
  </tr>
</table>

<h5>5. 总体与样本总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>含义</th>
    <th>符号表示</th>
  </tr>
  <tr>
    <td><strong>总体</strong></td>
    <td>研究对象的全体</td>
    <td><span class="formula-inline" data-latex="X"></span></td>
  </tr>
  <tr>
    <td><strong>个体</strong></td>
    <td>总体中的每个成员</td>
    <td>—</td>
  </tr>
  <tr>
    <td><strong>样本</strong></td>
    <td>从总体中抽取的部分个体</td>
    <td><span class="formula-inline" data-latex="(X_1,\\cdots,X_n)"></span></td>
  </tr>
  <tr>
    <td><strong>样本容量</strong></td>
    <td>样本中个体的个数</td>
    <td><span class="formula-inline" data-latex="n"></span></td>
  </tr>
  <tr>
    <td><strong>简单随机样本</strong></td>
    <td>独立同分布样本</td>
    <td>i.i.d.</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 总体与样本是数理统计的基础概念。统计推断的核心思想是"由部分推断整体"——通过分析样本数据来推断总体的特征。简单随机样本（i.i.d.）是统计推断中最基本、最重要的样本类型。
  </p>
</div>
`;