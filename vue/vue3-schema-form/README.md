# vue3-json-schema-form  vue3+typescript 组件库

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
