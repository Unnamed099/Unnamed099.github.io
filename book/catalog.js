
window.TUTORIAL_CATALOG = {
  categories: [
    {
      name: '数学', icon: '📐',
      tutorials: [
        { 
          id: 'math-calculus', 
          title: '微积分', 
          icon: '∂', 
          desc: '微分积分',
          chapters: [
            {
              title: '第一章：函数与极限',
              subsections: [
                { title: '1.1 极限的定义', file: 'book/math/wjf/1.js' },
                { title: '1.2 极限运算法则', file: 'tutorials/sections/math-calculus/1-2.js' },
                { title: '1.3 无穷小与无穷大', file: 'tutorials/sections/math-calculus/1-3.js' },
                { title: '1.4 连续性与间断点', file: 'tutorials/sections/math-calculus/1-4.js' }
              ]
            },
            {
              title: '第二章：导数与微分',
              subsections: [
                { title: '2.1 导数的定义', file: 'tutorials/sections/math-calculus/2-1.js' },
                { title: '2.2 求导法则', file: 'tutorials/sections/math-calculus/2-2.js' },
                { title: '2.3 高阶导数', file: 'tutorials/sections/math-calculus/2-3.js' },
                { title: '2.4 微分', file: 'tutorials/sections/math-calculus/2-4.js' }
              ]
            }
          ]
        },
        { 
          id: 'math-linear', 
          title: '线性代数', 
          icon: '📐', 
          desc: '向量矩阵',
          chapters: []
        }
      ]
    }
  ],
  
  getTutorial: function(tutorialId) {
    for (const category of this.categories) {
      const tutorial = category.tutorials.find(t => t.id === tutorialId);
      if (tutorial) return tutorial;
    }
    return null;
  }
};

console.log('✅ 教程目录数据已加载');