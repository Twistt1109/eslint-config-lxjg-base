module.exports = {
  rules: {
    // 使用驼峰式命名方式
    'camelcase': ['error', { properties: 'always' }],

    // 命名黑名单
    'id-blacklist': ['error', 'e', 'err', 'cb', 'obj'],

    // 命名长度限制
    'id-length': ['error', {min: 4, exceptions: ['i', 'j', 'k', 'x', 'y']}],
  },
};
