window.SECTION_CONTENT = `
<h4>📐 点估计</h4>

<p>点估计是用样本统计量估计总体参数的一种方法。它给出参数的一个具体数值作为估计值，是统计推断中最基本的估计方式。</p>

<h5>1. 点估计的概念</h5>

<p><strong>定义：</strong> 设总体 <span class="formula-inline" data-latex="X"></span> 的分布中含有未知参数 <span class="formula-inline" data-latex="\\theta"></span>，从总体中抽取样本 <span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span>。用一个统计量 <span class="formula-inline" data-latex="\\hat{\\theta} = \\hat{\\theta}(X_1, X_2, \\cdots, X_n)"></span> 来估计 <span class="formula-inline" data-latex="\\theta"></span>，称为 <span class="formula-inline" data-latex="\\theta"></span> 的<strong>点估计量</strong>，其具体观测值称为<strong>点估计值</strong>。</p>

<h5>2. 矩估计法</h5>

<p><strong>原理：</strong> 用样本矩估计总体矩。</p>

<p><strong>步骤：</strong></p>
<ol>
  <li>计算总体的各阶矩（用参数表示）</li>
  <li>令样本矩等于总体矩，得到方程组</li>
  <li>解方程组，得到参数的估计量</li>
</ol>

<h4>📘 例题 1：矩估计法</h4>

<div class="example">
  <p><strong>题目：</strong> 设总体 <span class="formula-inline" data-latex="X \\sim N(\\mu, \\sigma^2)"></span>，<span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 为样本，用矩估计法求 <span class="formula-inline" data-latex="\\mu</span> 和 <span class="formula-inline" data-latex="\\sigma^2"></span> 的估计量。</p>
  
  <p><strong>解：</strong></p>
  <p>总体一阶矩：<span class="formula-inline" data-latex="E(X) = \\mu"></span></p>
  <p>总体二阶矩：<span class="formula-inline" data-latex="E(X^2) = \\mu^2 + \\sigma^2"></span></p>
  <p>样本一阶矩：<span class="formula-inline" data-latex="A_1 = \\overline{X} = \\frac{1}{n}\\sum X_i"></span></p>
  <p>样本二阶矩：<span class="formula-inline" data-latex="A_2 = \\frac{1}{n}\\sum X_i^2"></span></p>
  <p>令 <span class="formula-inline" data-latex="\\mu = A_1, \\mu^2 + \\sigma^2 = A_2"></span></p>
  
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\hat{\\mu} = \\overline{X}, \\quad \\hat{\\sigma}^2 = A_2 - A_1^2 = \\frac{1}{n}\\sum (X_i - \\overline{X})^2"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\hat{\\mu} = \\overline{X}, \\hat{\\sigma}^2 = \\frac{1}{n}\\sum (X_i - \\overline{X})^2"></span></p>
</div>

<h5>3. 最大似然估计法</h5>

<p><strong>原理：</strong> 选择使样本出现概率最大的参数值作为估计值。</p>

<p><strong>步骤：</strong></p>
<ol>
  <li>写出似然函数 <span class="formula-inline" data-latex="L(\\theta) = \\prod_{i=1}^{n} f(x_i; \\theta)"></span>（离散型为概率乘积）</li>
  <li>取对数，得到对数似然函数 <span class="formula-inline" data-latex="\\ln L(\\theta)"></span></li>
  <li>对 <span class="formula-inline" data-latex="\\theta"></span> 求导，令导数为 0，解出 <span class="formula-inline" data-latex="\\theta"></span></li>
</ol>

<h4>📘 例题 2：最大似然估计</h4>

<div class="example">
  <p><strong>题目：</strong> 设总体 <span class="formula-inline" data-latex="X \\sim P(\\lambda)"></span>，<span class="formula-inline" data-latex="X_1, X_2, \\cdots, X_n"></span> 为样本，求 <span class="formula-inline" data-latex="\\lambda"></span> 的最大似然估计。</p>
  
  <p><strong>解：</strong></p>
  <p>泊松分布的分布律：<span class="formula-inline" data-latex="P(X = x) = \\frac{\\lambda^x e^{-\\lambda}}{x!}"></span></p>
  <p>似然函数：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="L(\\lambda) = \\prod_{i=1}^{n} \\frac{\\lambda^{x_i} e^{-\\lambda}}{x_i!} = \\frac{\\lambda^{\\sum x_i} e^{-n\\lambda}}{\\prod x_i!}"></span>
  </p>
  <p>对数似然函数：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\ln L(\\lambda) = \\left(\\sum x_i\\right)\\ln\\lambda - n\\lambda - \\sum \\ln(x_i!)"></span>
  </p>
  <p>求导：</p>
  <p style="text-align: center; padding: 8px; background: #f5f5f5; border-radius: 4px; margin: 8px 0;">
    <span class="formula-inline" data-latex="\\frac{d\\ln L}{d\\lambda} = \\frac{\\sum x_i}{\\lambda} - n = 0 \\Rightarrow \\hat{\\lambda} = \\frac{1}{n}\\sum x_i = \\overline{X}"></span>
  </p>
  
  <p style="margin-top: 8px; color: #0d47a1;">✅ <strong>答案：</strong> <span class="formula-inline" data-latex="\\hat{\\lambda} = \\overline{X}"></span></p>
</div>

<h5>4. 点估计方法总结</h5>

<table>
  <tr>
    <th>方法</th>
    <th>原理</th>
    <th>优点</th>
    <th>缺点</th>
  </tr>
  <tr>
    <td><strong>矩估计法</strong></td>
    <td>样本矩 = 总体矩</td>
    <td>计算简单</td>
    <td>可能不唯一</td>
  </tr>
  <tr>
    <td><strong>最大似然估计</strong></td>
    <td>使似然函数最大</td>
    <td>优良性（渐近有效）</td>
    <td>计算复杂</td>
  </tr>
</table>

<div style="background: #f5f5f5; padding: 15px; border-radius: 6px; margin-top: 20px; border: 1px solid #ddd;">
  <p style="font-size: 0.9rem; color: #555; text-align: center;">
    📚 点估计是用样本数据估计总体参数的基本方法。矩估计法简单直观，最大似然估计法则具有优良的统计性质。最大似然估计是参数估计中最常用的方法之一，在理论和应用中都有重要地位。
  </p>
</div>
`;