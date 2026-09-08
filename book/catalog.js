
window.TUTORIAL_CATALOG = {
  categories: [
    {
      name: '入门级数学', icon: '📐',
      tutorials: [
        { 
          id: 'math-calculus', 
          title: '高等数学(上卷)', 
          icon: '∂', 
          desc: '物理学的语法',
          chapters: [
            {
              title: '第一章：函数与极限',
              subsections: [
                { title: '1.1 何为极限', file: 'book/math/wjf/1_1.js' },
                { title: '1.2 极限基础', file: 'book/math/wjf/1_2.js' },
                { title: '1.3 函数连续性', file: 'book/math/wjf/1_3.js' }
              ]
            },
            {
              title: '第二章：导数与微分',
              subsections: [
                { title: '2.1 初识导数', file: 'book/math/wjf/2_1.js' },
                { title: '2.2 求导法则', file: 'book/math/wjf/2_2.js' },
                { title: '2.3 高阶导数', file: 'book/math/wjf/2_3.js' },
                { title: '2.4 隐函数的导数', file: 'book/math/wjf/2_4.js' },
                { title: '2.5 微分', file: 'book/math/wjf/2_5.js' },
                { title: '2.6 微分法则与微分公式', file: 'book/math/wjf/2_6.js' }
              ]
            },
            {
              title: '第三章：微分的高阶应用',
              subsections: [
                { title: '3.1 微分中值定理', file: 'book/math/wjf/3_1.js' },
                { title: '3.2 洛必塔法则', file: 'book/math/wjf/3_2.js' },
                { title: '3.3 泰勒展开', file: 'book/math/wjf/3_3.js' },
                { title: '3.4 函数的单调性与凹凸性', file: 'book/math/wjf/3_4.js' },
                { title: '3.5 函数的极值与最值', file: 'book/math/wjf/3_5.js' }
              ]
            },
            {
              title: '第四章：不定积分',
              subsections: [
                { title: '4.1 不定积分的定义', file: 'book/math/wjf/4_1.js' },
                { title: '4.2 换元积分法', file: 'book/math/wjf/4_2.js' },
                { title: '4.3 分部积分法', file: 'book/math/wjf/4_3.js' },
                { title: '4.4 有理函数的积分', file: 'book/math/wjf/4_4.js' },
                { title: '4.5 积分表的使用', file: 'book/math/wjf/4_5.js' }
              ]
            },
            {
              title: '第五章：定积分',
              subsections: [
                { title: '5.1 何为定积分', file: 'book/math/wjf/5_1.js' },
                { title: '5.2 微积分基本公式', file: 'book/math/wjf/5_2.js' },
                { title: '5.3 定积分的换元法和分部积分法', file: 'book/math/wjf/5_3.js' },
                { title: '5.4 反常积分', file: 'book/math/wjf/5_4.js' },
                { title: '5.5 反常积分的审敛法与 Γ 函数', file: 'book/math/wjf/5_5.js' }
              ]
            },
            {
              title: '第六章：微分方程',
              subsections: [
                { title: '6.1 微分方程的基本概念', file: 'book/math/wjf/6_1.js' },
                { title: '6.2 可分离变量的微分方程', file: 'book/math/wjf/6_2.js' },
                { title: '6.3 定积分的换元法和分部积分法', file: 'book/math/wjf/6_3.js' },
                { title: '6.4 一阶线性微分方程', file: 'book/math/wjf/6_4.js' },
                { title: '6.5 可降阶的高阶微分方程', file: 'book/math/wjf/6_5.js' },
                { title: '6.6 高阶线性微分方程', file: 'book/math/wjf/6_6.js' },
                { title: '6.7 常系数齐次线性微分方程', file: 'book/math/wjf/6_7.js' },
                { title: '6.8 常系数非齐次线性微分方程', file: 'book/math/wjf/6_8.js' },
                { title: '6.9 欧拉方程', file: 'book/math/wjf/6_9.js' },
                { title: '6.10 常系数线性微分方程组解法举例', file: 'book/math/wjf/6_10.js' }
              ]
            }
          ]
        },
        { 
          id: 'math-calculus2', 
          title: '高等数学(下卷)', 
          icon: '∂', 
          desc: '物理学的语法',
          chapters: [
            {
              title: '第一章：向量代数与空间解析几何',
              subsections: [
                { title: '1.1 何为极限', file: 'book/math/wjf2/1_1.js' },
                { title: '1.2 数量积 向量积 混合积', file: 'book/math/wjf2/1_2.js' },
                { title: '1.3 平面及其方程', file: 'book/math/wjf2/1_3.js' },
                { title: '1.4 空间直线及其方程', file: 'book/math/wjf2/1_4.js' },
                { title: '1.5 曲面及其方程', file: 'book/math/wjf2/1_5.js' },
                { title: '1.6 空间曲线及其方程', file: 'book/math/wjf2/1_6.js' }
              ]
            },
            {
              title: '第二章：多元函数微分学',
              subsections: [
                { title: '2.1 多元函数的基本概念', file: 'book/math/wjf2/2_1.js' },
                { title: '2.2 偏导数', file: 'book/math/wjf2/2_2.js' },
                { title: '2.3 全微分', file: 'book/math/wjf2/2_3.js' },
                { title: '2.4 多元复合函数的求导法则', file: 'book/math/wjf2/2_4.js' },
                { title: '2.5 隐函数的求导公式', file: 'book/math/wjf2/2_5.js' },
                { title: '2.6 多元函数微分学的几何应用', file: 'book/math/wjf2/2_6.js' },
                { title: '2.7 方向导数与梯度', file: 'book/math/wjf2/2_7.js' },
                { title: '2.8 多元函数的极值及其求法', file: 'book/math/wjf2/2_8.js' },
                { title: '2.9 二元函数的泰勒公式', file: 'book/math/wjf2/2_9.js' },
                { title: '2.10 最小二乘法', file: 'book/math/wjf2/2_10.js' }
              ]
            },
            {
              title: '第三章：重积分',
              subsections: [
                { title: '3.1 二重积分的概念与性质', file: 'book/math/wjf2/3_1.js' },
                { title: '3.2 二重积分的计算法', file: 'book/math/wjf2/3_2.js' },
                { title: '3.3 三重积分', file: 'book/math/wjf2/3_3.js' },
                { title: '3.4 重积分的应用', file: 'book/math/wjf2/3_4.js' },
                { title: '3.5 含参变量的积分', file: 'book/math/wjf2/3_5.js' }
              ]
            },
            {
              title: '第四章：不定积分',
              subsections: [
                { title: '4.1 不定积分的定义', file: 'book/math/wjf/4_1.js' },
                { title: '4.2 换元积分法', file: 'book/math/wjf/4_2.js' },
                { title: '4.3 分部积分法', file: 'book/math/wjf/4_3.js' },
                { title: '4.4 有理函数的积分', file: 'book/math/wjf/4_4.js' },
                { title: '4.5 积分表的使用', file: 'book/math/wjf/4_5.js' }
              ]
            },
            {
              title: '第四章：曲线积分与曲面积分',
              subsections: [
                { title: '4.1 对弧长的曲线积分', file: 'book/math/wjf2/4_1.js' },
                { title: '4.2 对坐标的曲线积分', file: 'book/math/wjf2/4_2.js' },
                { title: '4.3 格林公式及其应用', file: 'book/math/wjf2/4_3.js' },
                { title: '4.4 对面积的曲面积分', file: 'book/math/wjf2/4_4.js' },
                { title: '4.5 对坐标的曲面积分', file: 'book/math/wjf2/4_5.js' },
                { title: '4.6 高斯公式 通量与散度', file: 'book/math/wjf2/4_6.js' },
                { title: '4.7 斯托克斯公式 环流量与旋度', file: 'book/math/wjf2/4_7.js' }
              ]
            },
            {
              title: '第五章：无穷级数',
              subsections: [
                { title: '5.1 常数项级数的概念和性质', file: 'book/math/wjf2/5_1.js' },
                { title: '5.2 常数项级数的审敛法', file: 'book/math/wjf2/5_2.js' },
                { title: '5.3 幂级数', file: 'book/math/wjf2/5_3.js' },
                { title: '5.4 函数展开成幂级数', file: 'book/math/wjf2/5_4.js' },
                { title: '5.5 函数的幂级数展开式的应用', file: 'book/math/wjf2/5_5.js' },
                { title: '5.6 函数项级数的一致收敛性', file: 'book/math/wjf2/5_6.js' },
                { title: '5.7 傅里叶级数', file: 'book/math/wjf2/5_7.js' },
                { title: '5.8 一般周期函数的傅里叶级数', file: 'book/math/wjf2/5_8.js' }
              ]
            }
          ]
        },
        
        { 
          id: 'math-linear', 
          title: '线性代数', 
          icon: '📐', 
          desc: '向量矩阵',
          chapters: [
            {
              title: '第一章：行列式',
              subsections: [
                { title: '1.1 二阶与三阶行列式', file: 'book/math/xxds/1_1.js' },
                { title: '1.2 全排列及其逆序数', file: 'book/math/xxds/1_2.js' },
                { title: '1.3 n 阶行列式的定义', file: 'book/math/xxds/1_3.js' },
                { title: '1.4 对换', file: 'book/math/xxds/1_4.js' },
                { title: '1.5 行列式的性质', file: 'book/math/xxds/1_5.js' },
                { title: '1.6 行列式按行（列）展开', file: 'book/math/xxds/1_6.js' },
                { title: '1.7 克拉默法则', file: 'book/math/xxds/1_7.js' },
                { title: '1.8 第一章总复习', file: 'book/math/xxds/1_8.js' }
              ]
            },
            {
              title: '第二章：矩阵及其运算',
              subsections: [
                { title: '2.1 矩阵的概念', file: 'book/math/xxds/2_1.js' },
                { title: '2.2 矩阵的运算', file: 'book/math/xxds/2_2.js' },
                { title: '2.3 逆矩阵', file: 'book/math/xxds/2_3.js' },
                { title: '2.4 矩阵分块法', file: 'book/math/xxds/2_4.js' },
                { title: '2.5 矩阵的初等变换', file: 'book/math/xxds/2_5.js' },
                { title: '2.6 矩阵的秩', file: 'book/math/xxds/2_6.js' },
                { title: '2.7 第二章总复习', file: 'book/math/xxds/2_7.js' }
              ]
            },
            {
              title: '第三章：向量组的线性相关性',
              subsections: [
                { title: '3.1 向量组及其线性组合', file: 'book/math/xxds/3_1.js' },
                { title: '3.2 向量组的线性相关性', file: 'book/math/xxds/3_2.js' },
                { title: '3.3 向量组的秩', file: 'book/math/xxds/3_3.js' },
                { title: '3.4 线性方程组解的结构', file: 'book/math/xxds/3_4.js' },
                { title: '3.5 向量空间', file: 'book/math/xxds/3_5.js' },
                { title: '3.6 第三章总复习', file: 'book/math/xxds/3_6.js' }
              ]
            },
            {
              title: '第四章：线性方程组',
              subsections: [
                { title: '4.1 高斯消元法', file: 'book/math/xxds/4_1.js' },
                { title: '4.2 齐次线性方程组', file: 'book/math/xxds/4_2.js' },
                { title: '4.3 非齐次线性方程组', file: 'book/math/xxds/4_3.js' },
                { title: '4.4 线性方程组解的结构', file: 'book/math/xxds/4_4.js' },
                { title: '4.5 第四章总复习', file: 'book/math/xxds/4_5.js' }
              ]
            },
            {
              title: '第五章：矩阵的特征值与特征向量',
              subsections: [
                { title: '5.1 特征值与特征向量的概念', file: 'book/math/xxds/5_1.js' },
                { title: '5.2 特征值与特征向量的计算', file: 'book/math/xxds/5_2.js' },
                { title: '5.3 相似矩阵', file: 'book/math/xxds/5_3.js' },
                { title: '5.4 矩阵的对角化', file: 'book/math/xxds/5_4.js' },
                { title: '5.5 实对称矩阵的对角化', file: 'book/math/xxds/5_5.js' },
                { title: '5.6 第五章总复习', file: 'book/math/xxds/5_6.js' }
              ]
            },
            {
              title: '第六章：二次型',
              subsections: [
                { title: '6.1 二次型及其标准形', file: 'book/math/xxds/6_1.js' },
                { title: '6.2 正定二次型', file: 'book/math/xxds/6_2.js' },
                { title: '6.3 第六章总复习', file: 'book/math/xxds/6_3.js' }
              ]
            }
          ]
        },
        
        {
          id: 'math-probability',
          title: '概率论与数理统计',
          icon: '📊',
          desc: '随机现象与数据分析',
          chapters: [
            {
              title: '第一章：随机事件与概率',
              subsections: [
                { title: '1.1 随机事件', file: 'book/math/prob/1_1.js' },
                { title: '1.2 概率的定义与性质', file: 'book/math/prob/1_2.js' },
                { title: '1.3 古典概型与几何概型', file: 'book/math/prob/1_3.js' },
                { title: '1.4 条件概率与乘法公式', file: 'book/math/prob/1_4.js' },
                { title: '1.5 全概率公式与贝叶斯公式', file: 'book/math/prob/1_5.js' },
                { title: '1.6 事件的独立性', file: 'book/math/prob/1_6.js' }
              ]
            },
            {
              title: '第二章：随机变量及其分布',
              subsections: [
                { title: '2.1 随机变量的概念', file: 'book/math/prob/2_1.js' },
                { title: '2.2 离散型随机变量', file: 'book/math/prob/2_2.js' },
                { title: '2.3 连续型随机变量', file: 'book/math/prob/2_3.js' },
                { title: '2.4 分布函数', file: 'book/math/prob/2_4.js' },
                { title: '2.5 随机变量函数的分布', file: 'book/math/prob/2_5.js' }
              ]
            },
            {
              title: '第三章：多维随机变量及其分布',
              subsections: [
                { title: '3.1 二维随机变量的联合分布', file: 'book/math/prob/3_1.js' },
                { title: '3.2 边缘分布与条件分布', file: 'book/math/prob/3_2.js' },
                { title: '3.3 相互独立的随机变量', file: 'book/math/prob/3_3.js' },
                { title: '3.4 二维随机变量函数的分布', file: 'book/math/prob/3_4.js' }
              ]
            },
            {
              title: '第四章：随机变量的数字特征',
              subsections: [
                { title: '4.1 数学期望', file: 'book/math/prob/4_1.js' },
                { title: '4.2 方差', file: 'book/math/prob/4_2.js' },
                { title: '4.3 协方差与相关系数', file: 'book/math/prob/4_3.js' },
                { title: '4.4 矩与协方差矩阵', file: 'book/math/prob/4_4.js' }
              ]
            },
            {
              title: '第五章：大数定律与中心极限定理',
              subsections: [
                { title: '5.1 切比雪夫不等式', file: 'book/math/prob/5_1.js' },
                { title: '5.2 大数定律', file: 'book/math/prob/5_2.js' },
                { title: '5.3 中心极限定理', file: 'book/math/prob/5_3.js' }
              ]
            },
            {
              title: '第六章：数理统计的基本概念',
              subsections: [
                { title: '6.1 总体与样本', file: 'book/math/prob/6_1.js' },
                { title: '6.2 统计量与抽样分布', file: 'book/math/prob/6_2.js' },
                { title: '6.3 正态总体下的抽样分布', file: 'book/math/prob/6_3.js' }
              ]
            },
            {
              title: '第七章：参数估计',
              subsections: [
                { title: '7.1 点估计', file: 'book/math/prob/7_1.js' },
                { title: '7.2 估计量的评选标准', file: 'book/math/prob/7_2.js' },
                { title: '7.3 区间估计', file: 'book/math/prob/7_3.js' }
              ]
            },
            {
              title: '第八章：假设检验',
              subsections: [
                { title: '8.1 假设检验的基本概念', file: 'book/math/prob/8_1.js' },
                { title: '8.2 正态总体均值的假设检验', file: 'book/math/prob/8_2.js' },
                { title: '8.3 正态总体方差的假设检验', file: 'book/math/prob/8_3.js' }
              ]
            }
          ]
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