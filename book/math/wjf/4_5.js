window.SECTION_CONTENT = `
<h4>📐 积分表的使用</h4>

<p>在实际计算中，我们不可能记住所有函数的积分公式。积分表将常用函数的积分结果系统地整理成表格，方便查阅。学会使用积分表是提高积分计算效率的重要技能。</p>

<h5>1. 积分表的结构</h5>

<p>积分表通常按被积函数的类型分类编排：</p>

<ul>
  <li><strong>基本初等函数</strong>：常数、幂函数、指数函数、对数函数、三角函数、反三角函数</li>
  <li><strong>有理函数</strong>：分母为一次、二次、多次因式的有理函数</li>
  <li><strong>无理函数</strong>：含 <span class="formula-inline" data-latex="\\sqrt{ax+b}"></span>、<span class="formula-inline" data-latex="\\sqrt{a^2 \\pm x^2}"></span> 等的函数</li>
  <li><strong>三角函数</strong>：<span class="formula-inline" data-latex="\\sin^n x, \\cos^n x, \\tan^n x"></span> 及其乘积</li>
  <li><strong>指数函数与对数函数</strong>：<span class="formula-inline" data-latex="e^{ax}, \\ln x"></span> 与其他函数的乘积</li>
  <li><strong>反三角函数</strong>：<span class="formula-inline" data-latex="\\arcsin x, \\arctan x"></span> 的积分</li>
</ul>

<h5>2. 常用积分公式补充</h5>

<p>以下是在基本积分表之外常用的补充公式：</p>

<table>
  <tr>
    <th>编号</th>
    <th>积分公式</th>
    <th>适用范围</th>
  </tr>
  <tr>
    <td>21</td>
    <td><span class="formula-inline" data-latex="\\int \\tan x dx = -\\ln|\\cos x| + C"></span></td>
    <td><span class="formula-inline" data-latex="x \\neq \\frac{\\pi}{2} + k\\pi"></span></td>
  </tr>
  <tr>
    <td>22</td>
    <td><span class="formula-inline" data-latex="\\int \\cot x dx = \\ln|\\sin x| + C"></span></td>
    <td><span class="formula-inline" data-latex="x \\neq k\\pi"></span></td>
  </tr>
  <tr>
    <td>23</td>
    <td><span class="formula-inline" data-latex="\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C"></span></td>
    <td><span class="formula-inline" data-latex="x \\neq \\frac{\\pi}{2} + k\\pi"></span></td>
  </tr>
  <tr>
    <td>24</td>
    <td><span class="formula-inline" data-latex="\\int \\csc x dx = \\ln|\\csc x - \\cot x| + C"></span></td>
    <td><span class="formula-inline" data-latex="x \\neq k\\pi"></span></td>
  </tr>
  <tr>
    <td>25</td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C"></span></td>
    <td><span class="formula-inline" data-latex="a > 0"></span></td>
  </tr>
  <tr>
    <td>26</td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x-a}{x+a}\\right| + C"></span></td>
    <td><span class="formula-inline" data-latex="a > 0, x \\neq \\pm a"></span></td>
  </tr>
  <tr>
    <td>27</td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C"></span></td>
    <td><span class="formula-inline" data-latex="|x| < a"></span></td>
  </tr>
  <tr>
    <td>28</td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{x^2 + a^2}} = \\ln(x + \\sqrt{x^2 + a^2}) + C"></span></td>
    <td><span class="formula-inline" data-latex="a > 0"></span></td>
  </tr>
  <tr>
    <td>29</td>
    <td><span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{x^2 - a^2}} = \\ln|x + \\sqrt{x^2 - a^2}| + C"></span></td>
    <td><span class="formula-inline" data-latex="|x| > a"></span></td>
  </tr>
  <tr>
    <td>30</td>
    <td><span class="formula-inline" data-latex="\\int \\sqrt{a^2 - x^2} dx = \\frac{x}{2}\\sqrt{a^2 - x^2} + \\frac{a^2}{2}\\arcsin\\frac{x}{a} + C"></span></td>
    <td><span class="formula-inline" data-latex="|x| \\le a"></span></td>
  </tr>
  <tr>
    <td>31</td>
    <td><span class="formula-inline" data-latex="\\int \\sqrt{x^2 \\pm a^2} dx = \\frac{x}{2}\\sqrt{x^2 \\pm a^2} \\pm \\frac{a^2}{2}\\ln|x + \\sqrt{x^2 \\pm a^2}| + C"></span></td>
    <td><span class="formula-inline" data-latex="a > 0"></span></td>
  </tr>
  <tr>
    <td>32</td>
    <td><span class="formula-inline" data-latex="\\int \\ln x dx = x\\ln x - x + C"></span></td>
    <td><span class="formula-inline" data-latex="x > 0"></span></td>
  </tr>
  <tr>
    <td>33</td>
    <td><span class="formula-inline" data-latex="\\int \\arcsin x dx = x\\arcsin x + \\sqrt{1-x^2} + C"></span></td>
    <td><span class="formula-inline" data-latex="|x| \\le 1"></span></td>
  </tr>
  <tr>
    <td>34</td>
    <td><span class="formula-inline" data-latex="\\int \\arctan x dx = x\\arctan x - \\frac{1}{2}\\ln(1+x^2) + C"></span></td>
    <td><span class="formula-inline" data-latex="x \\in \\mathbb{R}"></span></td>
  </tr>
  <tr>
    <td>35</td>
    <td><span class="formula-inline" data-latex="\\int e^{ax}\\sin bx dx = \\frac{e^{ax}}{a^2+b^2}(a\\sin bx - b\\cos bx) + C"></span></td>
    <td><span class="formula-inline" data-latex="a^2+b^2 \\neq 0"></span></td>
  </tr>
  <tr>
    <td>36</td>
    <td><span class="formula-inline" data-latex="\\int e^{ax}\\cos bx dx = \\frac{e^{ax}}{a^2+b^2}(a\\cos bx + b\\sin bx) + C"></span></td>
    <td><span class="formula-inline" data-latex="a^2+b^2 \\neq 0"></span></td>
  </tr>
</table>

<h5>3. 使用积分表的步骤</h5>

<ol>
  <li><strong>观察被积函数</strong>：确定其类型（有理函数、三角函数、无理函数等）</li>
  <li><strong>查找对应公式</strong>：在积分表中找到最接近的形式</li>
  <li><strong>变量代换</strong>：如果被积函数与公式不完全一致，通过代换化为标准形式</li>
  <li><strong>套用公式</strong>：将公式中的变量替换为实际变量</li>
  <li><strong>代回原变量</strong>：如果是通过代换计算的，记得代回</li>
</ol>

<h4>📘 例题：直接套用公式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 + 4}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>对照公式 25：<span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\arctan\\frac{x}{a} + C"></span></p>
  <p>这里 <span class="formula-inline" data-latex="a = 2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 + 4} = \\frac{1}{2}\\arctan\\frac{x}{2} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2}\\arctan\\frac{x}{2} + C"></span></p>
</div>

<h4>📘 例题：代换后套用公式</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{9 - x^2}}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>对照公式 27：<span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\arcsin\\frac{x}{a} + C"></span></p>
  <p>这里 <span class="formula-inline" data-latex="a = 3"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dx}{\\sqrt{9 - x^2}} = \\arcsin\\frac{x}{3} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\arcsin\\frac{x}{3} + C"></span></p>
</div>

<h4>📘 例题：经过变形后套用</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\sec x dx"></span></p>
  
  <p><strong>解：</strong></p>
  <p>对照公式 23：<span class="formula-inline" data-latex="\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\sec x dx = \\ln|\\sec x + \\tan x| + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\ln|\\sec x + \\tan x| + C"></span></p>
</div>

<h4>📘 例题：复杂代换后套用</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 + 2x + 5}"></span></p>
  
  <p><strong>解：</strong></p>
  <p>配方：<span class="formula-inline" data-latex="x^2 + 2x + 5 = (x+1)^2 + 4"></span></p>
  <p>令 <span class="formula-inline" data-latex="u = x+1"></span>，<span class="formula-inline" data-latex="du = dx"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\int \\frac{dx}{x^2 + 2x + 5} = \\int \\frac{du}{u^2 + 4}"></span>
  </p>
  
  <p>对照公式 25（<span class="formula-inline" data-latex="a=2"></span>）：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\frac{1}{2}\\arctan\\frac{u}{2} + C = \\frac{1}{2}\\arctan\\frac{x+1}{2} + C"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\frac{1}{2}\\arctan\\frac{x+1}{2} + C"></span></p>
</div>

<h5>4. 积分表使用的注意事项</h5>

<ul>
  <li><strong>核对条件：</strong> 公式都有适用范围，如 <span class="formula-inline" data-latex="a>0"></span>、<span class="formula-inline" data-latex="x \\neq 0"></span> 等</li>
  <li><strong>常数代换：</strong> 公式中的 <span class="formula-inline" data-latex="a"></span>、<span class="formula-inline" data-latex="b"></span> 等常数需要正确识别</li>
  <li><strong>符号检查：</strong> 注意公式中的正负号</li>
  <li><strong>验证结果：</strong> 积分完成后，可通过求导验证</li>
  <li><strong>灵活使用：</strong> 积分表不是万能的，有些积分需要结合换元法或分部积分法</li>
</ul>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 积分表是积分计算的重要工具。熟练掌握积分表的使用方法，可以大大提高计算效率。但积分表不能替代对积分方法的理解，只有将积分表与换元法、分部积分法等基本方法结合，才能灵活应对各种积分问题。
  </p>
</div>
`;