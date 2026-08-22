
window.SECTION_CONTENT = `
  <h3>极限的概念</h3>
  <p>极限是微积分的基础概念，描述了函数在某一点附近的变化趋势。对于数列 {a_n}，如果存在常数 L，使得当 n 无限增大时，a_n 无限接近 L，则称 L 为数列的极限。</p>
  
  <div class="formula-block" data-latex="\\lim_{n \\to \\infty} a_n = L"></div>
  
  <h4>函数极限</h4>
  <p>对于函数 f(x)，当 x 趋近于 a 时，如果 f(x) 无限接近 L，则称 L 为函数在 a 点的极限。</p>
  
  <div class="formula-block" data-latex="\\lim_{x \\to a} f(x) = L"></div>
  
  <h4>ε-δ 定义</h4>
  <p>对于任意 ε > 0，存在 δ > 0，使得当 0 < |x - a| < δ 时，有 |f(x) - L| < ε。</p>
  
  <div class="note">
    <strong>注意：</strong> ε-δ 定义是极限的严格数学表述，理解它对于后续学习至关重要。
  </div>
  
  <img src="${window.FP}images/calculus/limit-definition.png" alt="极限定义图示">
  
  <h4>例题</h4>
  <div class="example">
    <p><strong>例1：</strong>证明 lim(x→2) (3x+1) = 7</p>
    <p>证明：对于任意 ε > 0，取 δ = ε/3，则当 0 < |x-2| < δ 时，</p>
    <p>|(3x+1) - 7| = |3x - 6| = 3|x-2| < 3δ = ε</p>
    <p>因此 lim(x→2) (3x+1) = 7。</p>
  </div>
  
  <p>（此处应有约10000字的详细内容...）</p>
`;