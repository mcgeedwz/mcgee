# vue3-json-schema-form

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


****
# 学习笔记

## 组件内容

1. 表单
2. 主题
3. 插件

## vue3和vue2相关版本更新差异

    1. vuejs/rfcs 官方项目版本更新说明
    2. slot 插槽
    3. compsition api 
    4. 全局api变化
       1. 创建多个app实例 new app->created app 
       2. 没有引用的组件不会打包
       3. render函数不再局限在render函数使用
       4. teleport 模态框渲染到非当前节点
    5. v-modal API
    6. 指令api
    7. 修饰符

## typescript

### javascript 超集

### 核心类型检测
    编辑器和编译过程中进行类型检测 避免类型错误

### 如何学习typescript
    1. 任何变量都声明类型
    2. 不到万不得已不要用any
    3. 给你的对象声明接口

****

## vue3项目和目录结构
目标：

    1. 了解vue3项目的结构
    2. 学习vue3项目的一些基本开发知识
    3. 了解vue3和vue2开发的一些区别

### 创建项目

   
```js
// 1. 安装vue/cli 脚手架
$ npm i -g @vue/cli

// 2. 创建项目
$ vue create vue3-schema-form

// 项目选项 
1. 手动配置多个选项
2. 选择版本 vue3, babel, typescript, linter, unit testing
3. class-style // no
4. babel // yes
5. linter/formtter // pretter
6. 检测编译提交 // yes
7. 单元测试解决方案 // jest 
8. 配置写在单独文件或packge.json? // 单独文件方便配置维护
9，是否保存项目预设方案  // 可以保存

// 3. 启动项目
 $ cd vue3-json-schema-form
 $ npm run serve

// 目录结构

├── public
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├── tests
│   └── unit
│       └── example.spec.ts
├── babel.config.json  // 
├── tsconfig.json
├── tsconfig.json
├── tsconfig.json
├── tsconfig.json
└── vue.config.js

```

### prettier 代码格式化工具

1. vscode扩展安装 Prettier-Code formatter
2. 创建 .prettierrc 格式化配置文件 项目根文件夹
3. 写入格式化文件配置项
   
   ```json
   {
        "semi": false, // 是否写分号
        "singleQuote": true, // 是否使用单引号
        "arrowParens": false, // 匿名函数是否
   }
   ```
4. 文件格式化快捷键 option+shift+f
   
### ts在vue3中定义组件

#### ddefineComponent api

1. h函数 createVNode 缩写， 相当于react的createElement
2. props 类型 ts 写法注意事项
   ```js
   aa
   ```

#### setup api

[一个组件选项，在组件被创建之前，props 被解析之后执行。它是组合式 API 的入口](#https://v3.cn.vuejs.org/api/composition-api.html#setup)


#### jsx 写法
[ vuejs/babel-plugin-jsx Babel Plugin JSX for Vue 3.0](#https://github.com/vuejs/babel-plugin-jsx)
1. vue next 官方jsx support 提供插件编译jsx
2. babel-pliugin-jsx



