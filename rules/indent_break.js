module.exports = {
  rules: {
    // 数组的中括号要有一致的换行行为
    // 如果在开始的括号处换行，结束的括号也要换行；否则都不要换行
    'array-bracket-newline': ['error', 'consistent'],

    // 起始花括号和控制短语在同一行
    'brace-style': ['error', '1tbs'],

    // 方法参数过多的时候需要换行，换行的时候每个参数一行
    'function-paren-newline': ['error', 'multiline'],

    // 使用两个空格缩进代码
    indent: ['error', 2],

    // 采用Unix换行符格式
    'linebreak-style': ['error', 'unix'],

    // 块级注释之前要有空行
    // 行级注释之前不要有空行
    'lines-around-comment': ['error', {
      beforeBlockComment: true,
      beforeLineComment: false,
      afterLineComment: false,
    }],

    // 类的方法成员直接要有空行
    'lines-between-class-members': ['error', 'always'],

    // 链式调用最好使用多行书写
    // 为了语义清晰，允许相关性较强的2个调用放在一行显示
    'newline-per-chained-call': ['error', {ignoreChainWithDepth: 2}],

    // 禁止多行字符串
    'no-multi-str': ['error'],

    // 空行规则
    // 最多允许2行空行
    // 文件末尾1行空行，文件开始1行空行
    'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1, maxBOF: 1}],
  },
};
