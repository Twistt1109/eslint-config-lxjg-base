module.exports = {
  rules: {
    // 变量或常量在声明的时候必须初始化
    'init-declarations': ['error', 'always'],

    // 禁止使用未声明的变量，除非显式地在 /*global ...*/ 注释中指定
    'no-undef': ['error'],

    // 声明的变量必须使用
    'no-unused-vars': ['error', {args: 'all'}],

    // 不能使用undefined作为变量名
    'no-undefined': ['error'],

    // 不允许在代码块外部使用内部定义的变量
    'block-scoped-var': ['error'],
  },
};
