window.SECTION_CONTENT = `
<h4>📐 假设检验的基本概念</h4>

<p>假设检验是统计推断的另一重要分支。它先对总体参数提出一个假设，然后利用样本信息判断该假设是否成立，是科学研究中"证伪"思想的具体实现。</p>

<h5>1. 假设检验的基本思想</h5>

<p><strong>核心思路：</strong> 先提出一个假设，然后看样本数据是否与假设"相矛盾"。若矛盾的证据足够强，则拒绝该假设；否则接受该假设。</p>

<p><strong>小概率原理：</strong> 概率很小的事件在一次试验中几乎不会发生。如果在假设成立的前提下，观察到了小概率事件，则有理由怀疑该假设。</p>

<h5>2. 基本概念</h5>

<p><strong>原假设（零假设）：</strong> 需要检验的假设，记为 <span class="formula-inline" data-latex="H_0"></span>。</p>
<p><strong>备择假设：</strong> 与原假设相对立的假设，记为 <span class="formula-inline" data-latex="H_1"></span>。</p>

<p><strong>检验统计量：</strong> 用于检验假设的统计量。</p>
<p><strong>拒绝域：</strong> 当检验统计量落入该区域时，拒绝 <span class="formula-inline" data-latex="H_0"></span>。</p>

<h5>3. 两类错误</h5>

<table>
  <tr>
    <th></th>
    <th><span class="formula-inline" data-latex="H_0"></span> 为真</th>
    <th><span class="formula-inline" data-latex="H_0"></span> 为假</th>
  </tr>
  <tr>
    <td><strong>接受 <span class="formula-inline" data-latex="H_0"></span></strong></td>
    <td>✓ 正确决策</td>
    <td><span class="formula-inline" data-latex="\\beta"></span> 第二类错误（纳伪）</td>
  </tr>
  <tr>
    <td><strong>拒绝 <span class="formula-inline" data-latex="H_0"></span></strong></td>
    <td><span class="formula-inline" data-latex="\\alpha"></span> 第一类错误（弃真）</td>
    <td>✓ 正确决策</td>
  </tr>
</table>

<ul>
  <li><strong>第一类错误（弃真）：</strong> <span class="formula-inline" data-latex="H_0"></span> 为真却拒绝 <span class="formula-inline" data-latex="H_0"></span>，概率为 <span class="formula-inline" data-latex="\\alpha"></span></li>
  <li><strong>第二类错误（纳伪）：</strong> <span class="formula-inline" data-latex="H_0"></span> 为假却接受 <span class="formula-inline" data-latex="H_0"></span>，概率为 <span class="formula-inline" data-latex="\\beta"></span></li>
</ul>

<h4>📘 例题 1：判断两类错误</h4>

<div class="example">
  <p><strong>题目：</strong> 某药品检验中，<span class="formula-inline" data-latex="H_0"></span>：药品合格。请说明两类错误的含义。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>第一类错误：</strong> 药品实际合格，但检验判定为不合格（错误地拒收合格品）。</p>
  <p><strong>第二类错误：</strong> 药品实际不合格，但检验判定为合格（错误地接收不合格品）。</p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 两类错误在实际中都有代价，需要权衡。</p>
</div>

<h5>4. 假设检验的基本步骤</h5>

<ol>
  <li><strong>提出假设：</strong> 确定 <span class="formula-inline" data-latex="H_0"></span> 和 <span class="formula-inline" data-latex="H_1"></span></li>
  <li><strong>确定显著性水平：</strong> 取 <span class="formula-inline" data-latex="\\alpha</span>（通常为 0.01、0.05 或 0.1）</li>
  <li><strong>构造检验统计量：</strong> 选择适当的统计量及其分布</li>
  <li><strong>确定拒绝域：</strong> 根据 <span class="formula-inline" data-latex="\\alpha"></span> 查临界值</li>
  <li><strong>计算检验统计量的值：</strong> 由样本数据计算</li>
  <li><strong>作出决策：</strong> 若统计量落入拒绝域则拒绝 <span class="formula-inline" data-latex="H_0"></span>，否则接受 <span class="formula-inline" data-latex="H_0"></span></li>
</ol>

<h4>📘 例题 2：假设检验的基本流程</h4>

<div class="example">
  <p><strong>题目：</strong> 某厂宣称产品平均寿命为 1000 小时。随机抽取 25 件产品，测得 <span class="formula-inline" data-latex="\\overline{X} = 980, S = 40"></span>，在 <span class="formula-inline" data-latex="\\alpha = 0.05"></span> 下检验该宣称是否可信。</p>
  
  <p><strong>解：</strong></p>
  <p><span class="formula-inline" data-latex="H_0: \\mu = 1000, H_1: \\mu \\neq 1000"></span></p>
  <p>检验统计量：<span class="formula-inline" data-latex="T = \\frac{\\overline{X} - 1000}{S/\\sqrt{n}} \\sim t(24)"></span></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="T = \\frac{980 - 1000}{40/\\sqrt{25}} = \\frac{-20}{8} = -2.5"></span>
  </p>
  <p><span class="formula-inline" data-latex="t_{0.025}(24) \\approx 2.064"></span></p>
  <p>因为 <span class="formula-inline" data-latex="|T| = 2.5 > 2.064"></span>，落入拒绝域。</p>
  
  <p style="margin-top: 8px; color: #c62828;">❌ <strong>结论：</strong> 拒绝 <span class="formula-inline" data-latex="H_0"></span>，宣称不可信</p>
</div>

<h5>5. 假设检验总结</h5>

<table>
  <tr>
    <th>概念</th>
    <th>含义</th>
    <th>示例</th>
  </tr>
  <tr>
    <td><strong>原假设 <span class="formula-inline" data-latex="H_0"></span></strong></td>
    <td>待检验的假设（通常为"无差异"）</td>
    <td><span class="formula-inline" data-latex="\\mu = \\mu_0"></span></td>
  </tr>
  <tr>
    <td><strong>备择假设 <span class="formula-inline" data-latex="H_1"></span></strong></td>
    <td>与 <span class="formula-inline" data-latex="H_0"></span> 对立的假设</td>
    <td><span class="formula-inline" data-latex="\\mu \\neq \\mu_0"></span></td>
  </tr>
  <tr>
    <td><strong>显著性水平 <span class="formula-inline" data-latex="\\alpha"></span></strong></td>
    <td>犯第一类错误的概率</td>
    <td>0.05</td>
  </tr>
  <tr>
    <td><strong>P 值</strong></td>
    <td>在原假设下出现当前结果的概率</td>
    <td>P < 0.05 则拒绝</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 假设检验是统计推断的另一核心内容。它通过"反证法"的思想，利用样本信息对总体假设进行判断。第一类错误和第二类错误是假设检验中需要权衡的两个方面，显著性水平则控制着第一类错误的概率。
  </p>
</div>
`;