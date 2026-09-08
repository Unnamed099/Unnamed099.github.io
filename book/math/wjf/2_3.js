window.SECTION_CONTENT = `
<h4>📐 高阶导数</h4>

<p>如果函数 <span class="formula-inline" data-latex="f(x)"></span> 的导数 <span class="formula-inline" data-latex="f'(x)"></span> 仍然是可导函数，则我们可以对 <span class="formula-inline" data-latex="f'(x)"></span> 再次求导，得到 <span class="formula-inline" data-latex="f(x)"></span> 的<strong>二阶导数</strong>。类似地，可以定义更高阶的导数。</p>

<h5>1. 高阶导数的定义</h5>

<p><strong>定义：</strong> 如果函数 <span class="formula-inline" data-latex="y = f(x)"></span> 的 <span class="formula-inline" data-latex="n-1"></span> 阶导数 <span class="formula-inline" data-latex="f^{(n-1)}(x)"></span> 仍可导，则称</p>

<div class="formula-block" data-latex="f^{(n)}(x) = \\frac{d^n y}{dx^n} = \\frac{d}{dx} [f^{(n-1)}(x)]"></div>

<p>为 <span class="formula-inline" data-latex="f(x)"></span> 的 <span class="formula-inline" data-latex="n"></span> <strong>阶导数</strong>。</p>

<p><strong>记号：</strong></p>

<table>
  <tr>
    <th>阶数</th>
    <th>莱布尼茨记号</th>
    <th>拉格朗日记号</th>
  </tr>
  <tr>
    <td>一阶导数</td>
    <td><span class="formula-inline" data-latex="\\frac{dy}{dx}"></span></td>
    <td><span class="formula-inline" data-latex="y'"></span> 或 <span class="formula-inline" data-latex="f'(x)"></span></td>
  </tr>
  <tr>
    <td>二阶导数</td>
    <td><span class="formula-inline" data-latex="\\frac{d^2 y}{dx^2}"></span></td>
    <td><span class="formula-inline" data-latex="y''"></span> 或 <span class="formula-inline" data-latex="f''(x)"></span></td>
  </tr>
  <tr>
    <td>三阶导数</td>
    <td><span class="formula-inline" data-latex="\\frac{d^3 y}{dx^3}"></span></td>
    <td><span class="formula-inline" data-latex="y'''"></span> 或 <span class="formula-inline" data-latex="f'''(x)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="n"></span> 阶导数</td>
    <td><span class="formula-inline" data-latex="\\frac{d^n y}{dx^n}"></span></td>
    <td><span class="formula-inline" data-latex="y^{(n)}"></span> 或 <span class="formula-inline" data-latex="f^{(n)}(x)"></span></td>
  </tr>
</table>

<h5>2. 高阶导数的物理意义</h5>

<ul>
  <li><strong>一阶导数</strong>：速度（位移的变化率）</li>
  <li><strong>二阶导数</strong>：加速度（速度的变化率）</li>
  <li><strong>三阶导数</strong>：加加速度（加速度的变化率），在工程中称为"急动度"</li>
</ul>

<div class="note">
  <strong>💡 几何意义：</strong>
  <p><span class="formula-inline" data-latex="f''(x)"></span> 描述的是函数图像的<strong>凹凸性</strong>：</p>
  <p>• <span class="formula-inline" data-latex="f''(x) > 0"></span>：曲线<strong>凹向上</strong>（下凸）</p>
  <p>• <span class="formula-inline" data-latex="f''(x) < 0"></span>：曲线<strong>凹向下</strong>（上凸）</p>
  <p>• <span class="formula-inline" data-latex="f''(x) = 0"></span>：可能是拐点</p>
</div>

<h4>📘 例题：求高阶导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^5 + 3x^3 - 2x + 1"></span> 的二阶和三阶导数。</p>
  
  <p><strong>解：</strong></p>
  <p><strong>一阶导数：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = 5x^4 + 9x^2 - 2"></span>
  </p>
  
  <p><strong>二阶导数：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f''(x) = 20x^3 + 18x"></span>
  </p>
  
  <p><strong>三阶导数：</strong></p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'''(x) = 60x^2 + 18"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f''(x) = 20x^3 + 18x, f'''(x) = 60x^2 + 18"></span></p>
</div>

<h4>📘 例题：三角函数的二阶导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = \\sin x"></span> 的 <span class="formula-inline" data-latex="n"></span> 阶导数。</p>
  
  <p><strong>解：</strong></p>
  <p>逐次求导：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = \\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f''(x) = -\\sin x = \\sin(x + \\pi)"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'''(x) = -\\cos x = \\sin\\left(x + \\frac{3\\pi}{2}\\right)"></span>
  </p>
  
  <p>归纳可得：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\sin x)^{(n)} = \\sin\\left(x + \\frac{n\\pi}{2}\\right)"></span>
  </p>
  
  <p>类似地：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(\\cos x)^{(n)} = \\cos\\left(x + \\frac{n\\pi}{2}\\right)"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 正弦和余弦函数的 <span class="formula-inline" data-latex="n"></span> 阶导数呈现周期性规律。</p>
</div>

<h4>📘 例题：指数函数的高阶导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = e^{2x}"></span> 的 <span class="formula-inline" data-latex="n"></span> 阶导数。</p>
  
  <p><strong>解：</strong></p>
  <p>逐次求导：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = 2e^{2x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f''(x) = 4e^{2x} = 2^2 e^{2x}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'''(x) = 8e^{2x} = 2^3 e^{2x}"></span>
  </p>
  
  <p>归纳可得：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(e^{2x})^{(n)} = 2^n e^{2x}"></span>
  </p>
  
  <p>一般地，对于 <span class="formula-inline" data-latex="f(x) = e^{kx}"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="(e^{kx})^{(n)} = k^n e^{kx}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>结论：</strong> 指数函数 <span class="formula-inline" data-latex="e^{kx}"></span> 的 <span class="formula-inline" data-latex="n"></span> 阶导数 = <span class="formula-inline" data-latex="k^n e^{kx}"></span></p>
</div>

<h5>3. 莱布尼茨公式（乘积的高阶导数）</h5>

<p><strong>定理：</strong> 若函数 <span class="formula-inline" data-latex="u(x)"></span> 和 <span class="formula-inline" data-latex="v(x)"></span> 都有 <span class="formula-inline" data-latex="n"></span> 阶导数，则</p>

<div class="formula-block" data-latex="(uv)^{(n)} = \\sum_{k=0}^{n} \\binom{n}{k} u^{(k)} v^{(n-k)}"></div>

<p>其中 <span class="formula-inline" data-latex="\\binom{n}{k} = \\frac{n!}{k!(n-k)!}"></span> 为二项式系数。</p>

<p>这个公式与二项式展开 <span class="formula-inline" data-latex="(a+b)^n = \\sum \\binom{n}{k} a^k b^{n-k}"></span> 形式上完全一致。</p>

<h4>📘 例题：利用莱布尼茨公式求高阶导数</h4>

<div class="example">
  <p><strong>题目：</strong> 求 <span class="formula-inline" data-latex="f(x) = x^2 e^x"></span> 的三阶导数。</p>
  
  <p><strong>解：</strong></p>
  <p>设 <span class="formula-inline" data-latex="u = x^2"></span>，<span class="formula-inline" data-latex="v = e^x"></span></p>
  <p><span class="formula-inline" data-latex="u' = 2x, u'' = 2, u''' = 0"></span></p>
  <p><span class="formula-inline" data-latex="v' = e^x, v'' = e^x, v''' = e^x"></span></p>
  
  <p>由莱布尼茨公式，<span class="formula-inline" data-latex="n = 3"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'''(x) = \\sum_{k=0}^{3} \\binom{3}{k} u^{(k)} v^{(3-k)}"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= \\binom{3}{0} u v''' + \\binom{3}{1} u' v'' + \\binom{3}{2} u'' v' + \\binom{3}{3} u''' v"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= 1 \\cdot x^2 \\cdot e^x + 3 \\cdot 2x \\cdot e^x + 3 \\cdot 2 \\cdot e^x + 1 \\cdot 0 \\cdot e^x"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= (x^2 + 6x + 6)e^x"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f'''(x) = (x^2 + 6x + 6)e^x"></span></p>
</div>

<h4>📊 常见函数的高阶导数</h4>

<table>
  <tr>
    <th>函数</th>
    <th><span class="formula-inline" data-latex="n"></span> 阶导数</th>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="x^\\mu"></span></td>
    <td><span class="formula-inline" data-latex="\\mu(\\mu-1)\\cdots(\\mu-n+1) x^{\\mu-n}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="e^{kx}"></span></td>
    <td><span class="formula-inline" data-latex="k^n e^{kx}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\sin x"></span></td>
    <td><span class="formula-inline" data-latex="\\sin\\left(x + \\frac{n\\pi}{2}\\right)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\cos x"></span></td>
    <td><span class="formula-inline" data-latex="\\cos\\left(x + \\frac{n\\pi}{2}\\right)"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\ln x"></span></td>
    <td><span class="formula-inline" data-latex="(-1)^{n-1} (n-1)! x^{-n}"></span></td>
  </tr>
  <tr>
    <td><span class="formula-inline" data-latex="\\frac{1}{x}"></span></td>
    <td><span class="formula-inline" data-latex="(-1)^n n! x^{-(n+1)}"></span></td>
  </tr>
</table>

<div class="note">
  <strong>💡 记忆技巧：</strong>
  <p>对于幂函数 <span class="formula-inline" data-latex="x^n"></span>，其 <span class="formula-inline" data-latex="n"></span> 阶导数为常数 <span class="formula-inline" data-latex="n!"></span>，而 <span class="formula-inline" data-latex="n+1"></span> 阶导数为 0。</p>
  <p>这是泰勒展开和幂级数理论的基础。</p>
</div>

<h4>📘 例题：综合应用</h4>

<div class="example">
  <p><strong>题目：</strong> 已知 <span class="formula-inline" data-latex="f(x) = x^3 \\sin x"></span>，求 <span class="formula-inline" data-latex="f''(0)"></span>。</p>
  
  <p><strong>解：</strong></p>
  <p>由乘积法则求二阶导数：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f'(x) = 3x^2\\sin x + x^3\\cos x"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f''(x) = 6x\\sin x + 3x^2\\cos x + 3x^2\\cos x - x^3\\sin x"></span>
  </p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="= (6x - x^3)\\sin x + 6x^2\\cos x"></span>
  </p>
  
  <p>代入 <span class="formula-inline" data-latex="x = 0"></span>：</p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="f''(0) = (0 - 0)\\sin 0 + 0 \\cdot \\cos 0 = 0"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="f''(0) = 0"></span></p>
</div>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 高阶导数是微积分中的重要概念。它在物理学中描述加速度、急动度等物理量，在数学中用于泰勒展开、函数的凹凸性分析、极值判定等方面。莱布尼茨公式为求乘积的高阶导数提供了强有力的工具。
  </p>
</div>
`