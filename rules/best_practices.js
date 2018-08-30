module.exports = {
  env: {
    node: true
  },
  
  rules: {
    // 不能只有setter没有getter
    // 可以只有getter
    'accessor-pairs': ['error', {setWithoutGet: true, getWithoutSet: false}],

    // 数组的内置回调方法，必须要有return
    'array-callback-return': ['error', {allowImplicit: true}],

    // 数组元素的换行要保持一致
    //'array-element-newline': ['error', 'consistent'],

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
    eqeqeq: ['error', 'always'],

    // for循环变量变化方向检查
    'for-direction': ['error'],

     // getter方法必须有return
    'getter-return': ['error', {allowImplicit: false}],

    // 通过require引入module必须在文件最顶部
    'global-require': ['error'],

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

    // 代码块最多嵌套4层
    'max-depth': ['error', 4],

    // 单行代码的长度最大为80
    // 超过80必须换行，tab宽度为2，与缩进保持一致
    'max-len': ['error', {code: 80, tabWidth: 2}],

    // 单个方法体代码最多20行
    // 'max-lines-per-function': ['error', {
    //   max: 20,
    //   skipBlankLines: true,
    //   skipComments: true,
    //   IIFEs: false,
    // }],

    // 方法内函数回调，最大只能有3行
    'max-nested-callbacks': ['error', {max: 3}],

    // 单个方法参数最多不能超过3个
    'max-params': ['error', {max: 3}],

    // 一行只能有一条执行语句
    'max-statements-per-line': ['error', {max: 1}],

    // 多行注释使用/**/符号
    'multiline-comment-style': ['error', 'starred-block'],

    // 三位运算符如果要换行，必须每个一行
    'multiline-ternary': ['error', 'always-multiline'],

    // 禁止使用按位运算符
    'no-bitwise': ['error', {int32Hint: true}],

    // case语句中如果需要声明变量、方法或者类，必须用{}括起来
    'no-case-declarations': ['error'],

    // 不能给类名赋值
    'no-class-assign': ['error'],

    // -0不能作为比较条件
    'no-compare-neg-zero': ['error'],

    // 逻辑条件中如果要赋值，必须添加()括起来
    'no-cond-assign': ['error', 'except-parens'],

    // 如果箭头函数体会引起歧义，最好用()括起来
    'no-confusing-arrow': ['error', {allowParens: true}],

    // 禁用continue
    'no-continue': ['error'],

    // 禁用debugger
    'no-debugger': ['error'],

    // 禁止删除变量
    'no-delete-var': ['error'],

    // 禁止同名的方法参数
    'no-dupe-args': ['error'],

    // 禁止同名的方法成员
    'no-dupe-class-members': ['error'],

    // 禁止同名的属性名
    'no-dupe-keys': ['error'],

    // 禁止相同条件的case语句
    'no-duplicate-case': ['error'],

    // 禁止重复的import
    'no-duplicate-imports': ['error', {includeExports: true}],

    // 多个判断条件中，最后一个条件可以省略
    'no-else-return': ['error', {allowElseIf: false}],

    // null比较的时候使用===或!==
    'no-eq-null': ['error'],

    // 禁用eval
    'no-eval': ['error'],

    // 禁止给异常对象赋值
    'no-ex-assign': ['error'],

    // 禁止扩展内部对象
    'no-extend-native': ['error'],

    // 禁止非必要的bind
    'no-extra-bind': ['error'],

    // 禁用非必要的boolean转换
    'no-extra-boolean-cast': ['error'],

    // 禁止多余的label
    'no-extra-label': ['error'],

    // 禁止多余的()
    'no-extra-parens': ['error'],

    // 禁止多余的;
    'no-extra-semi': ['error'],

    'no-fallthrough': ['off'],

    // 禁止省略浮点数整数位的0
    'no-floating-decimal': ['error'],

    // 禁止赋值方法名
    'no-func-assign': ['error'],

    // 禁止赋值内置全局对象
    'no-global-assign': ['error'],

    // 禁止隐式的类型转换，字符串类型除外
    'no-implicit-coercion': ['error', {string: false}],

    'no-implicit-globals': ['off'],

    // 禁用隐式的eval调用
    'no-implied-eval': ['error'],

    'no-inline-comments': ['error'],

    // 禁止内部的方法声明
    'no-inner-declarations': ['error', 'functions'],

    // 禁止非法的正则字符串
    'no-invalid-regexp': ['error', {allowConstructorFlags: ['u', 'y']}],

    // 禁止非法的this调用
    'no-invalid-this': ['error'],

    // 禁用__iterator__
    'no-iterator': ['error'],

    // 禁用多余的{}
    'no-lone-blocks': ['error'],

    // else代码块中不能只有一个if语句
    'no-lonely-if': ['error'],

    // 禁止在循环中声明方法
    'no-loop-func': ['error'],

    // 禁止易混淆的字符
    //'no-misleading-character-class': ['error'],

    // 禁止混用运算符，最好用()包起来
    'no-mixed-operators': ['error'],

    // 禁止require命令和变量放在一起声明
    'no-mixed-requires': ['error'],

    // 禁止链式赋值，未开启
    'no-multi-assign': ['off'],

    // 禁止取反条件，未开启
    'no-negated-condition': ['off'],

    // 禁用嵌套三位运算符
    'no-nested-ternary': ['error'],

    // 禁止使用Function声明方法
    'no-new-func': ['error'],

    // 禁止使用Object声明对象
    'no-new-object': ['error'],

    // 禁止在require的同时new对象
    'no-new-require': ['error'],

    // 使用类型类初始化变量的时候，禁止使用new
    'no-new-wrappers': ['error'],

    // 禁止仅new对象，而不赋值给变量
    'no-new': ['error'],

    // 禁止使用方法的方式调用内置对象
    'no-obj-calls': ['error'],

    // 禁止路径拼接
    'no-path-concat': ['error'],

    // 禁止使用++，--
    // for循环中除外
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],

    // 禁止使用process.env，未启用
    'no-process-env': ['off'],

    // 禁止使用process.exit
    'no-process-exit': ['error'],

    // 禁用__proto__
    'no-proto': ['error'],

    // 禁用obj.hasOwnProperty，obj.isPrototypeOf，obj.propertyIsEnumerable
    'no-prototype-builtins': ['error'],

    // 禁止在return语句中赋值
    'no-return-assign': ['error', 'always'],

    // 禁止包含script的url
    'no-script-url': ['error'],

    // 禁止自我赋值
    'no-self-assign': ['error'],

    // 禁止自我比较
    'no-self-compare': ['error'],

    // 禁止序列语法
    'no-sequences': ['error'],

    // 禁止在字符串中使用模板变量
    'no-template-curly-in-string': ['error'],

    // 使用Error对象抛出异常
    'no-throw-literal': ['error'],

    // 禁止非必要的三位运算
    'no-unneeded-ternary': ['error'],

    // 禁止不能到达的语句
    'no-unreachable': ['error'],

    // 禁止在finally中使用不安全的语句
    'no-unsafe-finally': ['error'],

    // 禁止使用无意义的计算属性键
    'no-useless-computed-key': ['error'],

    // 禁止无意义的字符串连接
    'no-useless-concat': ['error'],

    // 禁止无意义的构造函数
    'no-useless-constructor': ['error'],

    // 禁止无意义的转义
    'no-useless-escape': ['error'],

    // 禁止无意义的重命名
    'no-useless-rename': ['error'],

    // 禁止无意义的return
    'no-useless-return': ['error'],

    // 禁止使用保留关键字作为属性
    'quote-props': ['error', 'as-needed'],

    // 分号必须放在语句的末尾
    'semi-style': ['error', 'last'],

    // import语句进行排序
    'sort-imports': ['error'],

    // use strict仅能全局声明
    'strict': ['error', 'global'],

    // 禁止无效的类型推断
    'valid-typeof': ['error', {requireStringLiterals: true}],
  },
};
