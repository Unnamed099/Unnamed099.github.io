window.SECTION_CONTENT = `
  <h3>函数是什么</h3>
  
  <div style="background: #fff3e0; padding: 12px 16px; border-left: 4px solid #ff9800; margin: 15px 0; border-radius: 0 6px 6px 0;">
    <strong>💡 车辆数与轮胎数函数实例：</strong>
    <p style="margin: 5px 0;">• 车辆数:1→ 轮胎数:4</p>
    <p style="margin: 5px 0;">• 车辆数:2→ 轮胎数:8</p>
    <p style="margin: 5px 0;">• 车辆数:4→ 轮胎数:16</p>
  </div>
 <p>其中 <em>车辆数</em>与轮胎数存在着4倍的关系， 我们把车辆数称为<strong>自变量</strong>，<em>轮胎数</em> 称为<strong>因变量</strong>，分别用<em>x</em>与<em>y</em>表示，<em>f</em> 表示<strong>对应法则</strong>，在本例中就是4倍关系。函数的核心要求是：<strong>每个自变量只能对应一个因变量</strong></p>
 
  <div class="formula-block" data-latex="y = f(x)"></div>
  
  <h4>函数的四种表示方法</h4>
  
  <table>
    <tr>
      <th>表示方法</th>
      <th>说明</th>
      <th>示例</th>
    </tr>
    <tr>
      <td><strong>解析法</strong></td>
      <td>用数学公式表达函数关系</td>
      <td><span class="formula-inline" data-latex="y = 4x"></span></td>
    </tr>
    <tr>
      <td><strong>列表法</strong></td>
      <td>用表格列出部分对应值</td>
      <td>
         x | 1 | 2 | 4<br>
        y | 4 | 8 | 16
      </td>
    </tr>
    <tr>
      <td><strong>图像法</strong></td>
      <td>在坐标系中描绘曲线</td>
      <td>一条直线</td>
    </tr>
    <tr>
      <td><strong>描述法</strong></td>
      <td>用语言描述对应关系</td>
      <td>"车辆数与轮胎数存在着4倍的关系"</td>
    </tr>
  </table>

  <h4>📊 例题：根据函数表格求值</h4>
  
  <div class="example">
    <p><strong>题目：</strong> 已知函数 <span class="formula-inline" data-latex="y = f(x)"></span> 的部分取值如下表所示：</p>
    
<table style="width: 60%; margin: 10px auto; border-collapse: collapse; font-size: 0.85rem;">
  <tr>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">自变量 x</th>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">-2</th>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">-1</th>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">0</th>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">1</th>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">2</th>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">3</th>
  </tr>
  <tr>
    <th style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">因变量 y</th>
    <td style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">7</td>
    <td style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">4</td>
    <td style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">1</td>
    <td style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">-2</td>
    <td style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">-5</td>
    <td style="text-align: center; padding: 2px 6px; border: 1px solid #d7ccc8; line-height: 1.2;">-8</td>
  </tr>
</table>

    <p><strong>求：</strong></p>
    <p>（1）<span class="formula-inline" data-latex="f(-1)"></span> 的值</p>
    <p>（2）<span class="formula-inline" data-latex="f(2)"></span> 的值</p>
    <p>（3）当 <span class="formula-inline" data-latex="f(x) = -2"></span> 时，x 的值</p>
    <p>（4）根据表格规律，写出函数的解析式</p>

    <p style="margin-top: 12px;"><strong>解：</strong></p>
    <p>（1）当 x = -1 时，对应 y = 4，所以 <span class="formula-inline" data-latex="f(-1) = 4"></span></p>
    <p>（2）当 x = 2 时，对应 y = -5，所以 <span class="formula-inline" data-latex="f(2) = -5"></span></p>
    <p>（3）当 y = -2 时，对应 x = 1，所以 <span class="formula-inline" data-latex="x = 1"></span></p>
    <p>（4）观察表格：x 每增加 1，y 就减少 3，所以 <span class="formula-inline" data-latex="f(x) = -3x + 1"></span></p>
    
    <p style="margin-top: 8px; color: #0d47a1; background: #e3f2fd; padding: 8px; border-radius: 4px;">
      ✅ <strong>验证：</strong> 当 x = 2 时，<span class="formula-inline" data-latex="f(2) = -3 \\times 2 + 1 = -5"></span>，与表格一致！
    </p>
  </div>


  <h4>函数的定义域与值域</h4>
  <p>所有允许的自变量取值集合称为函数的<strong>定义域</strong>；所有对应的因变量取值集合称为函数的<strong>值域</strong>，比如说汽车辆数不可能小于0，轮胎数只能是4的倍数并且大于0。</p>

  <div class="example">
    <p><strong>📘 示例：</strong> 函数 <span class="formula-inline" data-latex="f(x) = \\sqrt{x}"></span></p>
    <p>• 定义域：<span class="formula-inline" data-latex="[0, +\\infty)"></span>（因为负数没有实数平方根）</p>
    <p>• 值域：<span class="formula-inline" data-latex="[0, +\\infty)"></span>（平方根的结果都是非负数）</p>
  </div>
  
  <h3>函数极限的定义</h3>
  <h4>📖 直观理解</h4>
  <p>函数极限描述的是：当自变量 <em>x</em> 无限接近某个值 <em>a</em> 时，函数值 <em>f(x)</em> 无限接近某个常数 <em>L</em>。</p>
  
  <h4>📐 它严格的数学定义（ε-δ 定义）如下</h4>
  <div class="formula-block" data-latex="\\lim_{x \\to a} f(x) = L"></div>

<p><strong>定义：</strong> 对于任意给定的 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>（无论多小），都存在 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - a| < \\delta"></span> 时，都有 <span class="formula-inline" data-latex="|f(x) - L| < \\varepsilon"></span>。</p>

<h4>📘 例题 6：用 ε-δ 定义证明线性函数的极限</h4>

<div class="example">
  <p><strong>题目：</strong> 用 ε-δ 定义证明 <span class="formula-inline" data-latex="\\lim_{x \\to 1} (2x + 3) = 5"></span></p>
  
  <p><strong>证明：</strong></p>
  <p>对于任意给定的 <span class="formula-inline" data-latex="\\varepsilon > 0"></span>，我们需要找到 <span class="formula-inline" data-latex="\\delta > 0"></span>，使得当 <span class="formula-inline" data-latex="0 < |x - 1| < \\delta"></span> 时：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|(2x + 3) - 5| < \\varepsilon"></span>
  </p>
  
  <p><strong>分析：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|(2x + 3) - 5| = |2x - 2| = 2|x - 1|"></span>
  </p>
  
  <p>要使 <span class="formula-inline" data-latex="2|x - 1| < \\varepsilon"></span>，只需 <span class="formula-inline" data-latex="|x - 1| < \\varepsilon/2"></span>。</p>
  
  <p><strong>取 <span class="formula-inline" data-latex="\\delta = \\varepsilon/2"></span>，</strong> 则当 <span class="formula-inline" data-latex="0 < |x - 1| < \\delta"></span> 时：</p>
  
  <p style="text-align: center; padding: 8px; background: #e8f5e9; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="|(2x + 3) - 5| = 2|x - 1| < 2\\delta = 2(\\varepsilon/2) = \\varepsilon"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ 因此，根据 ε-δ 定义，<span class="formula-inline" data-latex="\\lim_{x \\to 1} (2x + 3) = 5"></span> 得证。</p>
</div>
`;