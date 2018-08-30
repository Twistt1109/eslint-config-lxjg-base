module.exports = {
  rules: {
    // 不允许在代码块外部使用内部定义的变量
    'block-scoped-var': ['error'],

    // 变量或常量在声明的时候必须初始化
    'init-declarations': ['error', 'always'],

    // 禁止使用未声明的变量，除非显式地在 /*global ...*/ 注释中指定
    'no-undef': ['error'],

    // 声明的变量必须使用
    'no-unused-vars': ['error', {args: 'all'}],

    // 不能使用undefined作为变量名
    'no-undefined': ['error'],

    // label名不能和变量名重复
    'no-label-var': ['error'],

    // 禁止魔法数字
    'no-magic-numbers': ['error', {ignoreArrayIndexes: true}],

    'no-octal': ['error'],

    // 禁止为方法参数重新赋值，对象属性除外
    'no-param-reassign': ['error', {props: false}],

    // 禁止重复声明变量
    'no-redeclare': ['error'],

    // 禁止局部变量和全局变量同名，未启用
    'no-shadow': ['off'],

    // 禁止稀疏数组
    'no-sparse-arrays': ['error'],

    // 禁止将变量初始化为undefined
    'no-undef-init': ['error'],

    // 禁止在声明前使用变量
    'no-use-before-define': ['error'],

    // 使用isNaN判断数字类型的值
    'use-isnan': ['error'],

    // 禁用console规则
    'no-console': ["error", { allow: ["warn", "error"] }],
  },
};
