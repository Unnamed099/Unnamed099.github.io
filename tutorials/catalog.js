// 教程目录数据 - 只记录目录和链接，不做任何渲染
window.TUTORIAL_CATALOG = {
  categories: [
    {
      id: 'calc',
      name: '计算工具',
      icon: '🧮',
      tutorials: [
        { id: 'calc-basic', title: '基础计算器', icon: '🧮', desc: '四则运算、科学计算', dataFile: 'tutorials/data/calc-basic.js' },
        { id: 'calc-graph', title: '函数绘图', icon: '📈', desc: '函数图像、参数方程', dataFile: 'tutorials/data/calc-graph.js' },
        { id: 'calc-matrix', title: '矩阵计算', icon: '🔢', desc: '矩阵运算、行列式', dataFile: 'tutorials/data/calc-matrix.js' },
        { id: 'calc-integral', title: '数值积分', icon: '∫', desc: '定积分、多重积分', dataFile: 'tutorials/data/calc-integral.js' },
        { id: 'calc-ode', title: '微分方程', icon: '📉', desc: 'ODE、PDE求解', dataFile: 'tutorials/data/calc-ode.js' }
      ]
    },
    {
      id: 'math',
      name: '数学',
      icon: '📐',
      tutorials: [
        { id: 'math-calculus', title: '微积分', icon: '∂', desc: '微分、积分、级数', dataFile: 'tutorials/data/math-calculus.js' },
        { id: 'math-linear', title: '线性代数', icon: '📐', desc: '向量、矩阵、特征值', dataFile: 'tutorials/data/math-linear.js' },
        { id: 'math-probability', title: '概率统计', icon: '🎲', desc: '概率、统计、随机', dataFile: 'tutorials/data/math-probability.js' },
        { id: 'math-complex', title: '复变函数', icon: 'ℂ', desc: '复数、解析函数', dataFile: 'tutorials/data/math-complex.js' },
        { id: 'math-differential', title: '微分几何', icon: '🔷', desc: '曲线、曲面、张量', dataFile: 'tutorials/data/math-differential.js' }
      ]
    },
    {
      id: 'classical',
      name: '经典物理',
      icon: '⚙️',
      tutorials: [
        { id: 'physics-mechanics', title: '经典力学', icon: '⚙️', desc: '牛顿、拉格朗日', dataFile: 'tutorials/data/physics-mechanics.js' },
        { id: 'physics-electromagnetism', title: '电磁学', icon: '⚡', desc: '电场、磁场', dataFile: 'tutorials/data/physics-electromagnetism.js' },
        { id: 'physics-thermodynamics', title: '热力学', icon: '🔥', desc: '热力学定律', dataFile: 'tutorials/data/physics-thermodynamics.js' },
        { id: 'physics-optics', title: '光学', icon: '🔦', desc: '几何、波动光学', dataFile: 'tutorials/data/physics-optics.js' },
        { id: 'physics-acoustics', title: '声学', icon: '🔊', desc: '声波、振动', dataFile: 'tutorials/data/physics-acoustics.js' }
      ]
    },
    {
      id: 'modern',
      name: '现代物理',
      icon: '⚛️',
      tutorials: [
        { id: 'physics-quantum', title: '量子力学', icon: '⚛️', desc: '波函数、薛定谔', dataFile: 'tutorials/data/physics-quantum.js' },
        { id: 'physics-relativity', title: '相对论', icon: '🌌', desc: '狭义、广义', dataFile: 'tutorials/data/physics-relativity.js' },
        { id: 'physics-particle', title: '粒子物理', icon: '🔬', desc: '标准模型', dataFile: 'tutorials/data/physics-particle.js' },
        { id: 'physics-nuclear', title: '原子核物理', icon: '☢️', desc: '核结构、放射性', dataFile: 'tutorials/data/physics-nuclear.js' },
        { id: 'physics-astro', title: '天体物理', icon: '🌟', desc: '恒星、黑洞', dataFile: 'tutorials/data/physics-astro.js' }
      ]
    },
    {
      id: 'applied',
      name: '应用物理',
      icon: '🔬',
      tutorials: [
        { id: 'physics-solid', title: '固体物理', icon: '💎', desc: '晶体、能带', dataFile: 'tutorials/data/physics-solid.js' },
        { id: 'physics-plasma', title: '等离子体', icon: '🌋', desc: '聚变、空间', dataFile: 'tutorials/data/physics-plasma.js' },
        { id: 'physics-biophysics', title: '生物物理', icon: '🧬', desc: '生物力学', dataFile: 'tutorials/data/physics-biophysics.js' },
        { id: 'physics-materials', title: '材料物理', icon: '🔧', desc: '纳米、超导', dataFile: 'tutorials/data/physics-materials.js' },
        { id: 'physics-geophysics', title: '地球物理', icon: '🌍', desc: '地震、地磁', dataFile: 'tutorials/data/physics-geophysics.js' }
      ]
    }
  ]
};

console.log('✅ 教程目录数据已加载');