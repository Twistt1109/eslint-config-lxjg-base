module.exports = {
  rules: {
    // 不能只有setter没有getter
    // 可以只有getter
    'accessor-pairs': ['error', {setWithoutGet: true, getWithoutSet: false}],

    // getter方法必须有return
    'getter-return': ['error', {allowImplicit: false}],

    // 数组的内置回调方法，必须要有return
    'array-callback-return': ['error', {allowImplicit: true}],

    // 数组元素的换行要保持一致
    'array-element-newline': ['error', 'consistent'],

    // 在多行数组、对象、import、export中结尾要添加逗号
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports : 'always-multiline',
      functions: 'never',
    }],

    // 不检查逻辑条件分支个数
    complexity: ['off'],

    // 方法中return的值类型的要一致
    'consistent-return': ['error', {treatUndefinedAsUnspecified: true}],

    // 使用that作为this的别名
    'consistent-this': ['error', 'that'],

    // 禁止省略代码块的花括号
    curly: ['error', 'all'],

    // switch语句必须要有default条件
    'default-case': ['error'],

    // 属性访问的点符号必须和对象保持同一行
    'dot-location': ['error', 'object'],

    // 使用点访问符，而不是索引的方式访问对象属性
    'dot-notation': ['error', {allowKeywords: false}],

    // 使用===或!==进行比较
    eqeqeq： ['error', 'always'],

    // for循环变量变化方向检查
    'for-direction': ['error'],

    // for...in循环必须判断属性是否存在
    // for (key in foo) {
    //  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    //    doSomething(key);
    //  }
    // }
    //
    // for (key in foo) {
    //  if ({}.hasOwnProperty.call(foo, key)) {
    //    doSomething(key);
    //  }
    // }
    'guard-for-in': ['error'],

    // 通过require引入module必须在文件最顶部
    'global-require': ['error'],
  },
};
