module.exports = {
  rules: {
    // 禁止非法的空白符
    // 在每行的结尾和空行不能出现空白符
    // ++ / -- 操作符和操作数之间不要有空格
    // , 和 ; 前面不要有空格
    // 在定义对象的时候，属性名后面的 : 前面不能有空格
    'no-irregular-whitespace': ['error', {skipStrings: true, skipComments: true}],

    // 禁止出现空语句块
    // 任何空的代码块，都要有注释说明
    'no-empty': ['error'],

    // 禁止在正则表达式中使用空字符集
    'no-empty-character-class': ['error'],

    // 方法名在定义的时候后面不要有空格
    'space-after-function-name': ['error', 'never'],

    // 方法名在调用的时候后面不要有空格
    'func-call-spacing': ['error', 'never'],

    // 保留关键字前后必须要有空格
    'keyword-spacing': ['error', {before: true, after: true}],

    // 代码块之前要有空格
    'space-before-blocks': ['error', 'always'],

    // 方法参数括号前的空格
    // 匿名和箭头函数，括号前必须有空格
    // 命名函数，括号前不能有空格
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],

    // 对象花括号两边不能有空格
    'object-curly-spacing': ['error', 'never'],
    // 数组中括号两边不能有空格
    'array-bracket-spacing': ['error', 'never'],
    // 小括号两边不能有空格
    'space-in-parens': ['error', 'never'],
    // 代码块两边的花括号中要有空格
    'block-spacing': ['error', 'always'],

    // 运算符两边要有空格
    'space-infix-ops': ['error', 'always'],

    // 注释符后面要有空格
    'spaced-comment': ['error', 'always'],

    // 逗号前面不能有空格，后面必须有空格
    'comma-spacing': ['error', {before: false, after: true}],

    // 计算属性两边要添加空格
    // 例如：数组中的索引、对象中的key
    'computed-property-spacing': ['error', 'always'],

    // 非空文件末尾要有空行
    'eol-last': ['error', 'always'],
  },
};
