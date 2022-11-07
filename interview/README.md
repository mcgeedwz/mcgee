# interview
# css

## 页面布局 layout

### 三栏布局方法 

1. 浮动解决方案
   中间高度被内容撑开 两侧高度不会自动撑开
   内容排列飞到左侧开始 如需要按中间排列正常 创建bfc 
    ```css
   .float .left {
     float: left;
     width: 100px;
     background: greenyellow;
   }
   .float .right {
     float: right;
     width: 100px;
     background: greenyellow;
   }
   .float .center {
     background: red;
     /* 解决内容排版对齐 */
     /* overflow: auto; */ 
   }
    ```

2. 绝对定位解决方案
   中间高度被内容单独撑开
   ```css
    .position .container {
       overflow: hidden;
     }
     .position .container>div {
       position: absolute;
     }
     .position .left {
       left: 0px;
       width: 100px;
       background: greenyellow;
     }
     .position .right {
       right: 0px;
       width: 100px;
       background: greenyellow;
     }
     .position .center {
       left: 100px;
       right: 100px;
       background: red;
     }
    ```

3. flexbox解决方案
   三栏同步撑开 方案完美 不兼容低版本浏览器

   ```css
    .flex .container {
       display: flex;
     }
     .flex .left, .right{
       width: 100px;
       background:greenyellow;
     }
     .flex .center {
       flex: 1;
       background: red;
     }
   ```

4. 表格布局解决方案
   兼容性好 两侧栏高度强制增高 不适合两栏高度不一致的布局
   
   ```css
   .table .container {
    display: table;
    width: 100%;
   }
   .table .container>div {
    display: table-cell;
   }
   .table .left, .right{
    width: 100px;
    background:greenyellow;
   }
   .table .center {
    background: red;
   }
   ```
   

5. 网格布局解决方案 css3 grid
   内容超出容器 高度不自适应
   ```css
    .grid .container {
       display: grid;
       /* grid-template-rows: 100px; */
       grid-template-columns: 100px auto 100px;
     }
     .grid .left, .right{
       background:greenyellow;
     }
     /* .grid .end {
       background: rgb(0, 55, 255);
     } */
     .grid .center {
       background: red;
     }
    ```

### 页面布局小结

1. 语义化掌握到位 方便阅读理解
2. 页面布局深刻理解 各种布局优缺点 适用场景及解决方案
3. css基础扎实
4. 思维灵活且积极向上
5. 代码书写规范 便于阅读理解 团队协作 便于维护

### 页面布局延伸题

1. 三栏布局
   1. 高度未知
   2. 左右宽度固定，中间自适应
   3. 上下高度固定，中间自适应
2. 两栏布局
    1. 一边宽度固定，一边自适应
    2. 上下高度固定，反之自适应


## css盒模型

### 基本概念

content + padding + border + margin
1. 标准模型
2. IE模型
3. 两种模型区别
   ```
   区别 宽度计算方式不同
   width = content
   width = content + padding + border
   ```
4. css设置两种盒模型
   
   ```css
   // css3 box-sizing 属性设置元素盒模型类型
   box-sizing: content-box; // 标准盒模型
   box-sizing: border-box;  // ie盒模型
   ```
5. js获取盒模型对应的宽高
   ```js
   //  通过dom原属的sytle宽高属性width,height （只能获取内联样式）
   dom.style.width/height 
   // 仅IE浏览器支持
   dom.currentStyle.width/height 
   // 通过浏览器api获取元素计算后的宽高
   window.getComputedStyle(dom).width/height 

   ```
6. 实例题（解释边距重叠 块级格式化上下文）
   
### bfc 块级格式化上下文 （ifc 行级元素格式化上下文）

#### 基本概念 block formet context

#### 原理 （bfc渲染规则）
    1. bfc元素的垂直方向边距重叠
    2. bfc元素不会与浮动元素边距重叠 
    3. bfc是一个独立容器 里外元素不会相互影响 不会重叠
    4. bfc计算元素高度 浮动元素也会参与计算（子元素如果是浮动元素也会参与高度计算 清除浮动原理）
   
#### 如何创建bfc
    1. 设置元素overflow等属性
    2. float值不为null (css float默认值为null)
    3. position不为 默认stict
    4. display: block
    5. overflow: hidden  

#### 解决边距重叠 （使用场景）
    1. bfc垂直方向边距重叠 
    2. 父子边距重叠 边距值取较大值 （给父级元素创建bfc）
    3. 兄弟元素边距重叠 边距值取较大值 (给兄弟元素加一个父级元素 给父级元素创建bfc)
    4. 浮动元素重叠 左侧没有元素 会向左侵入 （overflow: auto; 创建bfc 清除浮动原理）
   
## css 样式优先级

### 权重 import>id>class>tag>*

## css单位
### PX、EM、REM、%、VW、WH、VM等单位有什么区别？
1. px就是pixel的缩写，意为像素。最小的一个点，电脑像素是1024x768的
   表示的是水平方向是1024个像素点，垂直方向是768个像素点 兼容性
2. em 相对父元素的font-size, 默认继承。自身定义了font-size按自身来计算
   （浏览器默认字体是16px）整个页面内1em不是一个固定的值
3. rem css3新单位，相对于根元素html（网页）的font-size，
   不会像em那样，依赖于父元素的字体大小，而造成混乱
4. % 百分比 一般宽泛的讲是相对于父元素，但是并不是十分准确。
5. vw vh css3新单位，viewpoint width/height的缩写，视窗宽度
   1vw等于视窗宽度的1%。比如浏览器宽度1200px, 1vw = 1200px/100 = 12 px
6. vm css3新单位，相对于视口的宽度或高度中较小的那个。其中最小的那个被均分为100单位的vm
   举个例子：浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px。
   由于现在vm的兼容性较差，这里就不做展示

### 适配解决方案
vw vh支持度已经很好 移动端用
vh vw是不包含页面滚动条的视窗宽度(innerwidth)，%包含了滚动条的宽度在里面了(outerwidth)。
一般的情况下%就可以满足大部分自适应设计的需求，可以用height：100vh做一个高度占满屏幕的自适应，没有滚动条。

## css优化

[CSS性能优化的8个技巧](#https://juejin.cn/post/6844903649605320711) 

 1. 内联首屏关键CSS（Critical CSS）那么将首屏关键CSS内联后，剩余的CSS内容的阻塞渲染就不是必需的了。
 2. 
 3. 异步加载CSS CSS会阻塞渲染，在CSS文件请求、下载、解析完成之前，浏览器将不会渲染任何已处理的内容。可以使用外部CSS，并且异步加载。
   ```js
    // 异步加载几种方法
   // 1 创建link标签 
   const myCSS = document.createElement( "link" );
   myCSS.rel = "stylesheet";
   myCSS.href = "mystyles.css";
   // 插入到header的最后位置
   document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );

    // 2 第二种方式是将link元素的media属性设置为用户浏览器不匹配的媒体类型 其优先级会被放低，会在不阻塞页面渲染的情况下再进行下载 文件加载完成之后，将media的值设为screen或all，从而让浏览器开始解析CSS
   <link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'">
    // 3 与第二种方式相似，我们还可以通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel改回去。
   <link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">

    // 4 上述的三种方法都较为古老。现在，rel="preload"5这一Web标准指出了如何异步加载资源，包括CSS类资源。
    <link rel="preload" href="mystyles.css" as="style" onload="this.rel='stylesheet'">

   ```

1. 文件压缩 
   
    CSS进行压缩，现在的构建工具，如webpack、gulp/grunt、rollup等也都支持CSS压缩功能

2. 去除无用CSS
   可以借助工具库比如 Uncss7库来进行。Uncss可以用来移除样式表中的无用CSS，并且支持多文件和JavaScript注入的CSS

3. 有选择地使用选择器
   
   在浏览器绘制屏幕时，所有需要浏览器进行操作或计算的属性相对而言都需要花费更大的代价。当页面发生重绘时，它们会降低浏览器的渲染性能。所以在编写CSS时，我们应该尽量减少使用昂贵属性，如box-shadow/border-radius/filter/透明度/:nth-child等

4. 减少使用昂贵的属性
   
5. 优化重排与重绘
   
   重排会导致浏览器重新计算整个文档，重新构建渲染树，这一过程会降低浏览器的渲染速度。如下所示，有很多操作会触发重排，我们应该避免频繁触发这些操作。
   改变font-size和font-family
   改变元素的内外边距
   通过JS改变CSS类
   通过JS获取DOM元素的位置相关属性（如width/height/left等）
   CSS伪类激活
   滚动滚动条或者改变窗口大小
   此外，我们还可以通过CSS Trigger15查询哪些属性会触发重排与重绘。
   值得一提的是，某些CSS属性具有更好的重排性能。如使用Flex时，比使用inline-block和float时重排更快，所以在布局时可以优先考虑Flex


6. 不要使用@import 
   
   使用@import引入CSS会影响浏览器的并行下载。使用@import引用的CSS文件只有在引用它的那个css文件被下载、解析之后，
   浏览器才会知道还有另外一个css需要下载，这时才去下载，然后下载后开始解析、构建render tree等一系列操作。
   这就导致浏览器无法并行下载所需的样式文件

____

# js

## 变量

### 变量类型
栈和堆
js值类型储存在栈里 key,value的方式 引用类型会在栈里储存一个key,value(value是一个地址 指向该对象堆里的值)
当我们修改对象的值的时候 实际是修改堆里的值 引用该地址的对象的值都会发生变化
1. 值类型
undefined,string,number,boolean,symblo

2. 引用类型
   array,object -> object
   null -> object 引用类型 指向一个空对象
   function -> Function 类型 

3. typeof 判断数据类型
   ```js
   let a
   let str = 'b'
   let num = 100
   let boo = true
   let sym = Symbol('e')
   let arr = ['1','2']
   let obj = {'name':'zhangsan','age': 18}
   let fn = function () {let a = '1'}
   let n = null
   console.log(typeof(a))   // undefined
   console.log(typeof(str)) // string
   console.log(typeof(num)) // number
   console.log(typeof(boo)) // boolean
   console.log(typeof(sym)) // symbol
   console.log(typeof(arr)) // object
   console.log(typeof(obj)) // object
   console.log(typeof(n))   // object 指向一个空对象
   console.log(typeof(fn))  // function
   ```
### 拷贝 深拷贝

[深拷贝和浅拷贝的区别？](#https://juejin.cn/post/7072528644739956773)
1. 浅拷贝和深拷贝都是创建一份数据的拷贝。
2. JS 分为原始类型和引用类型，对于原始类型的拷贝，并没有深浅拷贝的区别，我们讨论的深浅拷贝都只针对引用类型。
3. 浅拷贝和深拷贝都复制了值和地址，都是为了解决引用类型赋值后互相影响的问题。
4. 但是浅拷贝只进行一层复制，深层次的引用类型还是共享内存地址，原对象和拷贝对象还是会互相影响。
5. 深拷贝就是无限层级拷贝，深拷贝后的原对象不会和拷贝对象互相影响。
6. 网络上的很多文章觉得引用类型赋值就是浅拷贝，误导了很多人，
   但 lodash 中的浅拷贝和深拷贝总不会错吧，这么多项目都在用。
    为了验证上述理论的正确性，我们就用 lodash 来测试一下，lodash 中浅拷贝方法为 clone，深拷贝方法为 cloneDeep。

####  浅拷贝 
指拷贝对象的属性如果是引用类型 拷贝的是属性值的引用地址 修改一个地方的值 所有拷贝对象该属性的值都会变化 达不到隔离效果
浅拷贝方法

```js
// JSON.parse(JSON.stringify(obj))

// 扩展运算符
let a = [1,2,{'arr':[4,5]}]
let b = [...a]
b.push(3)   // 第一层操作数组不影响
b[2].arr[2] = 6 // 数组原素是引用类型的会被影响
console.log(a)  // a[2].arr  [4，5，6]
console.log(b)  // b[2].arr  [4，5，6]

// Object.assign 
const obj = {
  name: 'lin'
}
const newObj = Object.assign({}, obj)
obj.name = 'xxx' // 改变原来的对象
console.log(newObj) // { name: 'lin' } 新对象不变
console.log(obj == newObj) // false 两者指向不同地址

// 数组的 slice 
const arr = ['lin', 'is', 'handsome']
const newArr = arr.slice(0)
arr[2] = 'rich' // 改变原来的数组
console.log(newArr) // ['lin', 'is', 'handsome']
console.log(arr == newArr) // false 两者指向不同地址

// concat 方法
const arr = ['lin', 'is', 'handsome']
const newArr = [].concat(arr)
arr[2] = 'rich' // 改变原来的数组
console.log(newArr) // ['lin', 'is', 'handsome'] // 新数组不变
console.log(arr == newArr) // false 两者指向不同地址

// 数组静态方法 Array.from
const arr = ['lin', 'is', 'handsome']
const newArr = Array.from(arr)
arr[2] = 'rich' // 改变原来的数组
console.log(newArr) // ['lin', 'is', 'handsome']
console.log(arr == newArr) // false 两者指向不同地址

```
   
### 深拷贝 
处理数组、日期、正则、null
上文的方法实现了最简单版本的深拷贝，但是没有处理 null 这种原始类型，也没有处理数组、日期和正则这种比较常用的引用类型
是指拷贝对象的属性如果是引用类型 则循环该属性对象复制 创建一个新对象 达到复制隔离效果

深拷贝简单版
```js
function deepClone(obj = {}){
    // 判断对象是否为对象类型 不是直接返回对象
    if(typeof obj !== 'object' || obj == null) {
        return obj
    }
    // 初始化对象
    let res 
    if(obj instanceof Array){
        res = []
    }else{
        res = {}
    }
    // 复制对象属性
    for(let key in obj){
        // 判断对象属性是否是自身属性 而不是构造函数原型属性
        if(obj.hasOwnProperty(key)){
            res[key] = deepClone(obj[key])
        }
    }
    return res
}
let aaa = {
    str: 'aaa',
    arr:[1,3],
    obj: {
        a: 1
    },
    fn:function(name='aaa'){
        this.name = name
        console.log(this)
    }
}
let a = deepClone(aaa)
a.fn('a')

```
### 深拷贝手写天花板

```js
function deepClone (target, hash = new WeakMap()) { // 额外开辟一个存储空间WeakMap来存储当前对象
  if (target === null) return target
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if (target instanceof HTMLElement) return target // 处理 DOM元素

  if (typeof target !== 'object') return target

  if (hash.get(target)) return hash.get(target) // 当需要拷贝当前对象时，先去存储空间中找，如果有的话直接返回
  const cloneTarget = new target.constructor()
  hash.set(target, cloneTarget) // 如果存储空间中没有就存进 hash 里

  Reflect.ownKeys(target).forEach(key => {
    cloneTarget[key] = deepClone(target[key], hash) // 递归拷贝每一层
  })
  return cloneTarget
}
// 测试
const obj = {
  domArr: [document.getElementById('foo')]
}
const newObj = deepClone(obj)
console.log(newObj)

```

   

## DOM事件

### 基本概念

#### dom事件模型 dom事件模型是什么
```js
事件级别
DOM0 element.onclick = function(){}
DOM2 element.addEventListener('click',function(){},fasle) // 第三个参数 默认fasle 冒泡阶段触发 true为捕获阶段触发
DOM3 element.addEventListener('keyup',function(){},false) // 添加了键盘鼠标事件等
```
#### dom事件模型指的是 事件捕获和冒泡

window-document-html-body-按元素父子传递
捕获 事件依次向下传递
冒泡 事件依次向上传递

#### dom事件流 事件捕获的具体流程

第一阶段 执行捕获过程
第二阶段 到达目标元素
第三阶段 执行冒泡过程

#### Event 对象的常见应用 
```js
// 阻止默认事件 如a标签跳转
event.preventDefault()
// 阻止冒泡 如阻止父级元素执行事件
event.stopPropagation()
// 同一元素绑定多个事件 响应事件优先级
event.stopImmediatePropagation()

// 利用冒泡原理 事件委托 子元素事件绑定到父级元素 通过currentTarget获取当前被点击的元素
event.currentTarget // 当前事件绑定元素 （事件委托父级元素）
event.target // 当前事件触发元素 （被点击元素）

```
#### 自定义事件

```js
// new Event('test') 创建自定义事件  （CustomEvent 也可以创建自定义函数 除了函数名 还有另外一个参数可以自定义设置）
var eve = new Event('test');

// 给自定义事件添加响应内容
ev.addEventListener('test', function () {
   console.log('test dispatch');
});

setTimeout(function () {
    // 触发事件
   ev.dispatchEvent(eve);
}, 1000);
```

## 作用域

1. 作用域指的是指一个变量合法使用的范围
全局作用域  全局可以访问使用
函数作用域  当前行数作用域内使用
块级作用域  

### 自由变量

1. 自由变量  是指一个变量在当前作用域没有定义,但被使用了
2. 向上级作用域逐层查找，直到找到
3. 如果到全局作用域没找到，则报错未定义 xx is not defined
4. 自由变量的查找，是在函数定义的地方，向上级作用域查找

## 闭包 closure

解题思路：
    闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找

   ```js
    // 函数作为返回值
    function fn() {
        const a  = 100
        // 定义时的作用域向上查找
        return function() {
            consle.log(a)
        }
    }
    const a = 200
    let show = fn()
    show()   // 100

    // 函数作为参数
    function show(fn) {
        const a = 100
        fn()
    }
    const a = 200
    // 定义时的作用域向上查找
    function fn() {
        consle.log(a)
    }
    show()   // 200

   ```

### 闭包应用

1. 隐藏数据 
   ```js
   // data变量数据只能在foo内部访问 函数外部无法访问 通过返回函数api操作内部数据 实现私有变量
   function foo () {
    const data = {}
    return {
        set: function(key, val) {
            data[key] = val
        },
        get: function(key) {
            console.log(key)
            return data[key]
        }
    }
   }
   const mcgee = foo()
   mcgee.set('name','mcgee')
   console.log(mcgee.get('name'))
   ```
1. for循环
   ```js
   let i, a
   for(i=0;i<10;i++) {
       a = document.createElement('a')
       a.innerHTML = '<div>' + i + '</div>'
       a.addEventListener('click',function(e) {
           e.preventDefault()
            alert(i)    // 10 当点击标签 click函数执行的时候 函数调用查找i变量的值时for循环上一层作用域 此时循环已经执行 i变量的值已经变成10 
       })
       document.body.appendChild(a)
   }

   let a1
   for(let k=0;k<10;k++) {
       a1 = document.createElement('a')
       a1.innerHTML = '<div>' + k + '</div>'
       a1.addEventListener('click',function(e) {
           e.preventDefault()
            alert(k)    // k变量属于for循环的块级作用域 调用时会从块级作用域每次循环取值
       })
       document.body.appendChild(a1)
   }

   (function(jq){
       jq.name = 'jquery'
   })($$)

   ```


## this 

this指向不是在定义的时侯确定，而是在调用执行的时候确定的。

1. 作为普通函数调用 返回window
2. 使用 call apply bind 调用  绑定什么指向什么
3. 作为对象方法被调用  返回对象本身
4. 在class 方法中调用  指向实例本身
5. 箭头函数 指向一层作用域的this

```js
// 普通函数this指向
function fn1 () {
    console.log(this)
}

fn1(); // this->window

fn1.call({'obj': 100}) // this->{'obj': 100} ，fn1.call 传入指向对象 / 其他参数， 相当于fn1函数内部代码执行一遍 并且把this 指向传入的第一个参数

const fn2 = fn1.bind({'obj': 200})
fn2() // this->{'obj': 200} 需要返回一个新的函数去执行

// 箭头函数this指向

const foo = {
    name: 'foo',
    fn () {
        console.log(this)   // this-> foo
    },
    fn1() {
        console.log(this)   // this-> foo
        // setTimeout本身触发的执行 不是fn1函数触发的执行
        setTimeout(function() {
            console.log(this)   // this-> window  
        })
    }
}

const foo1 = {
    name: 'foo1'
    fn() {
        console.log(this)   // this-> foo1
    },
    fn1() {
        console.log(this)   // this-> foo1
        // 箭头函数指向上一层的作用域 也就是fn1作用域的this
        setTimeout(()=>{
            console.log(this)   // this-> foo1 箭头函数指向上一层的作用域
        })
    }
}

foo.fn()
foo.fn1()
foo1.fn()
foo1.fn1()

// 类
class Persen {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(this)
    }
}

const mcgee = new Persen('mcgee')
mcgee.sayHi()   // this-> megee实例对象

```



## 原型链
### 面向对象基本概念
一种编程方式
面向对象编程 和 面向过程编程（函数编程）

### 面向对象编程 三大特点 五大原则
1. 三大特点
    1. 继承 可以实现子类调用自己没有的属性方法【父类属性方法】
    2. 多态 可以实现子类有不同对表现形态，可以实现同一种表现形式，可以有不同对状态
    3. 封装 将属性和方法封装这对象中，可以利用私有或者公有属性，对外提供可以访问的方法或属性

2. 五大原则
   1. 单一 一个类应该有且只有一个去改变它的理由，这意味着一个类应该只有一项工作
   2. 开放封闭 对象或实体应该对扩展开放，对修改封闭
   3. 里氏替换 即对父类的调用同样适用于子类
   4. 依赖倒置 高层次的模块不应该依赖于低层次的模块
   5. 接口隔离 不应强迫客户端实现一个它用不上的接口，或是说客户端不应该被迫依赖它们不使用的方法

   
### 创建对象的几种方法

```js
// 第一种方式：字面量
var o1 = { name: 'o1' }
var o2 = new Object({ name: 'o2' })
// 第二种方式：构造函数
var M = function (name) {
	this.name = name
}
var o3 = new M('o3')
// 第三种方式：Object.create
var p = { name: 'p' }
var o4 = Object.create(p)

M.prototype.say = function () {
	console.log('say hi')
}
var o5 = new M('o5')

/**
 * new的过程做了什么
 * 1 首先创建一个新对象，这个新对象的__proto__属性指向构造函数的prototype属性
 * 2 此时构造函数执行环境的this指向这个新对象
 * 3 执行构造函数中的代码，一般是通过this给新对象添加新的成员属性或方法。
 * 4 最后返回这个新对象
 */

var new2 = function (func) {
	var o = Object.create(func.prototype)
	var k = func.call(o)
	if (typeof k === 'object') {
		return k
	} else {
		return o
	}
}
/**
 * 课外扩展
 * 传参数版本
 */
// func是构造函数，...args是需要传给构造函数的参数
function myNew(func, ...args) {
	// 创建一个空对象，并且指定原型为func.prototype
	var obj = Object.create(func.prototype)
	// new构造函数时要执行函数，同时指定this
	func.call(obj, ...args)
	// 最后return这个对象
	return obj
}

/**
 * 课外扩展
 * for in 和 for if 的区别
 * for in 遍历对象的可枚举属性(enumerable) 包括原型链上的非自有可枚举属性 得到key 类型string 通常用hasOwnProperty()过滤非自有属性
 * for of es6 方法 拥有迭代器对象（iterator）的集合 适用数组 得到value值 不包括原型链上的属性 循环普通的对象需要通过Object.keys搭配使用
 * for of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（iterator）的集合，但是不能遍历对象，因为没有迭代器对象
 * 但如果想遍历对象的属性，你可以用for in循环（这也是它的本职工作）或用内建的Object.keys()方法
 */
```

1. 原型 原型对象
2. 构造函数
    可以使用new运算符生成一个实例 叫构造函数 任何函数都能通过new生成实例
3. 实例
4. 原型链
   访问一个实例的方法时 会从过当前实例的原型链向上查找 

5. instanceof原理
6. new运算符

--------------------------

## 继承
### 继承的方式 以及优缺点

1. 原型链继承
2. 构造函数继承
3. 组合寄生继承
4. es6 extends继承

```js
/**
 * 类的声明
 */
var Animal = function () {
	this.name = 'Animal'
}

/**
 * es6中class的声明
 */
class Animal2 {
	constructor() {
		this.type = 'Animal2'
	}
}

/**
 * 实例化
 */
console.log(new Animal(), new Animal2())

/**
 * 借助构造函数实现继承
 * 原理 改变this 指向
 * 原理 call 将父类的构造函数this 指向子类的构造函数的实例 代码执行一遍 继承父类的属性
 * 缺点 父类原型对象上的属性无法继承
 *
 */
function Parent1() {
	this.name = 'parent1'
}
// 缺点 无法继承原型对象上的属性
Parent1.prototype.say = function () {}
function Child1() {
	Parent1.call(this)
	this.type = 'child1'
}
// new Child1().say() 无法继承
console.log(new Child1(), new Child1().say())

/**
 * 借助原型链实现继承
 *
 */
function Parent2() {
	this.name = 'parent2'
	this.play = [1, 2, 3]
}
function Child2() {
	this.type = 'child2'
}
Child2.prototype = new Parent2()

var s1 = new Child2()
var s2 = new Child2()
console.log(s1.play, s2.play)
s1.play.push(4)

/**
 * 组合方式
 * constructor 是父类
 */
function Parent3() {
	this.name = 'parent3'
	this.play = [1, 2, 3]
}
function Child3() {
	Parent3.call(this)
	this.type = 'child3'
}
Child3.prototype = new Parent3()
var s3 = new Child3()
var s4 = new Child3()
s3.play.push(4)
console.log(s3.play, s4.play)

/**
 * 组合继承的优化1
 * constructor 是父类
 * @type {String}
 */
function Parent4() {
	this.name = 'parent4'
	this.play = [1, 2, 3]
}
function Child4() {
	Parent4.call(this)
	this.type = 'child4'
}
Child4.prototype = Parent4.prototype
var s5 = new Child4()
var s6 = new Child4()
console.log(s5, s6)

console.log(s5 instanceof Child4, s5 instanceof Parent4)
console.log(s5.constructor)

/**
 * 组合继承的优化2
 */
function Parent5() {
	this.name = 'parent5'
	this.play = [1, 2, 3]
}
function Child5() {
	Parent5.call(this)
	this.type = 'child5'
}
Child5.prototype = Object.create(Parent5.prototype)
Child5.prototype.constructor = Child5

console.log(new Child5())

/**
 * es6 继承
 * 核心代码是Object.create原理
 */
class Pearnt6 {
	constructor(age) {
		this.name = 'Pearnt class'
		this.age = age
	}
}

class Child6 extends Pearnt6 {
	constructor(age, show) {
		super(age)
		this.type = 'child class'
		this.show = show
	}
}
let baby6_1 = new Child6('show6', 18)
console.log(baby6_1)

/**
 * 根据class和继承，手写jQuery示例来理解
 */
class jQuery {
	constructor(selector) {
		const result = document.querySelectorAll(selector)
		const length = result.length
		for (let i = 0; i < length; i++) {
			this[i] = result[i]
		}
		this.length = length
		this.selector = selector
	}
	// 返回dom元素
	get(index) {
		return this[index]
	}
	// 遍历
	each(fn) {
		for (let i = 0; i < this.length; i++) {
			const elem = this[i]
			fn(elem)
		}
	}
	// 监听一个方法
	on(type, fn) {
		return this.each((elem) => {
			elem.addEventListener(type, fn, false)
		})
	}
	// 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function (info) {
	alert(info)
}

// “造轮子”
class myJQuery extends jQuery {
	constructor(selector) {
		super(selector)
	}
	// 扩展自己的方法
	addClass(className) {}
	style(data) {}
}
```

# 网络 通信
## 同源策略
同源是指 协议 域名 端口相同 
同源策略是浏览器禁止协议 域名 端口三者其一不同的资源交互
不能交互主要体现在
1. 无法访问cookie loacStorage 和 indexdb
2. dom元素
3. ajax请求

## 前后端通信方式
1. xmlHTTPReaquest对象(ie atciveXObject)
2. fetch (h5)
3. webSocket
4. CORS
   
## 跨域
1. jsonP
2. webSocket
3. CORS
4. postMessage
   
## http协议
#### http协议的主要特点
1. 简单快速
1. 灵活
1. 无连接 链接一次会断开
1. 无状态 服务端不区分多次链接的身份 （服务端加session）
   
#### http报文的组成部分
1. 请求报文
   1. 请求行-方法，地址，协议，版本
   2. 请求头-key value 值 
   3. 空行-区分请求头和请求体
   4. 请求体-
2. 响应报文
   1. 状态行
   2. 相应头
   3. 空行
   4. 响应体

#### http方法
get 获取资源
post 传输资源
put 更新资源
delete 删除资源
head 获得报文首部

#### post和get的区别

get通过url传递参数，有长度编码限制，暴露，不安全，会被浏览器缓存
post通过请求体传递参数，不限制长度，支持多种编码，手动设置缓存，浏览器后退会再次提交请求

1. 浏览器返回时 post会再次提交请求
3. get请求会被浏览器缓存
4. get请求url参数有长度限制 （20kb，被浏览器截断）,参数类型智能时ASCII字符
7. get请求url参数暴露，不安全 （防止scrf攻击）
8. get通过url传递参数，post通过请求体（request body）
5. get请求只能进行url编码 post支持多种编码
6. get请求参数会被保留在浏览器历史记录
7. get的url地址可以被收藏

   
#### http状态码

1. 1xx 指示信息-请求已接收 继续处理
2. 2xx 成功-请求被成功接收 （200）
3. 3xx 重定向-要完成请求需要更近一步操作 （301永久，302临时，304缓存取）
4. 4xx 客户端错误-请求有语法错误或无法实现 （400语法错误，403资源不允许访问，404资源不存在）
5. 5xx 服务器错误-服务器未能实现合法的请求 （500服务器错误，503服务器临时过载挂了）

#### 什么是持久链接
http1.1支持持久连接
1. http协议采用“请求-应答”模式，非keep-alive模式。每个请求客户端和服务端都新建一个连接，完成断开
2. 使用keep-alive模式，即持久连接，连接重用时，使得客户端和服务端的连接持续有效，后续请求不需要重新建立连接

#### 什么是管线化
持久连接   请求1-响应1-请求2-响应2
管线化    请求1-请求2-响应1-响应2

http1.1，get,head支持管线化，只能保证管线化请求管线化请求不失败，不会带来大幅度性能提升 浏览器默认未开启管线化支持

## 手写题

### 创建10个a标签，点击的时候弹出对应的序号

```js
let a
for(let i = 0; i<=10; i++){
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click',function(e){
        e.preventDefault()
        alert(i)
    })
    document.body.appendChild(a)
}

let k, a1
for(let k = 0; k<=10; k++){
    a1 = document.createElement('a')
    a1.innerHTML = k + '<br>'
    a1.addEventListener('click',function(e){
        e.preventDefault()
        alert(k)
    })
    document.body.appendChild(a1)
}
```
### bind 手写一个bing函数

```js
// 返回一个函数，返回执行结果
function fn (a,b,c) {
    console.log(this)
    console.log(a,b,c)
    return 'this is fn'
}

// fn1 等于fn函数 并且将 {'mcgee': 100} 对象
// fn1.__proto__.constructor === Function
// fn1 = fn (a,b,c) {
//     console.log(this)
//     console.log(a,b,c)
//     return 'this is fn'
// } 
const fn1 = fn.bind({'mcgee': 100}, 1,2,3)  // 返回fn函数 this指向第一个参数

const res = fn1()  // res 等于 执行fn1函数代码 并且返回函数里面返回的结果 return 'this is fn'
console.log(res)

// 手写bind  bind是Funtion这个对象上的属性方法
Function.prototype.bind1 = function() {
    // 将参数列表（类数组）拆解换成数组
    //  slice 截取数组元素 返回一个含有被提取元素的新数组。
    const args  = Array.prototype.slice.call(arguments)
    // 将第一个参数作为绑定对象取出 参数数组剩下的是传入的其他参数 shift()返回数组第一元素
    const target = args.shift()
    // fn函数本身需要使用  fn.bind({'mcgee': 100}, 1,2,3) 
    const self = this 
    // 然后返回一个函数
    return function() {
        // 返回函数 并绑定传入的第一个对象
        return self.apply(target, args)
    }
}


```

### 转数组 Array.prototype.slice.call(arguments)解释代码

```js
//  Array.prototype.slice.call(arguments)解释代码
//    Array.prototype.slice.call(arguments) 相当于把slice方法this指向arguments，并且把slice的源代码方法执行了一遍 返回执行结果
// slice 源码 将数组n开始之后的元素取出来返回一个新数组 不影响原数组
Array.prototype.slice1 = function(n=0) {
    let newArr = [],index = 0
    for(let i = n; i <= this.length; i++) {
        newArr[index++] = this[i]
    }
    return resArr
}

function foo() {
   console.log(arguments)
   console.log(Array.prototype.slice.call(arguments))
}
foo(1,{'show': 'show1'})

```


### 手写bind1 扩展 bind1, bind, call, apply源码实现区别

```js
// 手写bind1 扩展 bind1, bind, call, apply源码实现区别
Function.prototype.bind1 = function(){
    const args = Array.prototype.slice.call(arguments)
    const target = args.shift()
    const self = this
    // return self(args)  // 立即执行返回 this is xxx
    // 箭头函数  self 指向window
    // return ()=> {
    //     self.apply(target,args)
    // }
    return function () {
        return self.apply(target,args)
    }
}
function fn(a,b) {
    this.name = a
    console.log(this)
    console.log(a,b)
    return 'this is  ' + this.name
}
const fnbind = fn.bind({'fnbind': 100}, 'fnbind', 100)
const fnbind1 = fn.bind1({'fnbind1': 100}, 'fnbind1', 100)
const fncall = fn.call({'fncall': 100}, 'fncall', 100)
const fnapply = fn.apply({'fnapply': 100}, ['fnapply', 100])
console.log(fnbind)     // 不执fn行函数 返回新函数 fnbind调用时才执行fn函数代码 再返回 'this is  fnbind'
console.log(fnbind1)    // 不执fn行函数 返回匿名函数以及内的函数 return self.apply(target, args)  fnbind1调用时才执行fn函数代码 再返回 'this is  fnbind1'
console.log(fncall)     // 执行fn函数代码 返回 this is fncall,  fncall调用时报错 fncall is not a function
console.log(fnapply)    // 执行fn函数代码 返回 this is fnapply, fnapply调用时报错fnapply is not a function
```
