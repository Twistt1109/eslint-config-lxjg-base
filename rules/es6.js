module.exports = {
  rules: {
    // 箭头函数的代码块花括号，应该根据情况添加或者省略
    'arrow-body-style': ['error', 'as-needed'],

    // 箭头函数的参数小括号，应该根据情况添加或者省略
    // 但是对于方法体是代码块的时候，必须添加小括号
    'arrow-parens': ['error', 'as-needed', {requireForBlockBody: true}],

    // 箭头两边都要有空格
    'arrow-spacing': ['error', {before: true, after: true}],

    // 子类构造函数必须调用super方法
    'constructor-super': ['error'],

    // generator方法星号前没有空格，星号要有空格
    // 匿名函数两边都不加空格
    // 类的内部方法两个都要有空格
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
      anonymous: 'neither',
      method: {before: true, after: true},
    }],

    // 箭头函数的隐式return代码块和箭头在同一行
    'implicit-arrow-linebreak': ['error', 'beside'],

    // 禁止在循环中使用await
    'no-await-in-loop': ['error'],

    // 禁止new Symbol()
    'no-new-symbol': ['error'],

    // 禁止在return语句中使用await
    'no-return-await': ['error'],

    // yield后*的位置
    'yield-star-spacing': ['error', 'after'],
  },
};
