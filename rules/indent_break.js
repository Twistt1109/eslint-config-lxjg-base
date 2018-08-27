module.exports = {
  rules: {
    // 起始花括号和控制短语在同一行
    'brace-style': ['error', '1tbs'],

    // 数组的中括号要有一致的换行行为
    // 如果在开始的括号处换行，结束的括号也要换行；否则都不要换行
    'array-bracket-newline': ['error', 'consistent'],

    // 方法参数过多的时候需要换行，换行的时候每个参数一行
    'function-paren-newline': ['error', 'multiline'],
  },
};
