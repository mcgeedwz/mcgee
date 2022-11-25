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
 2. 异步加载CSS CSS会阻塞渲染，在CSS文件请求、下载、解析完成之前，浏览器将不会渲染任何已处理的内容。可以使用外部CSS，并且异步加载。
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

-----------------------------------------------------------


# 浏览器渲染机制

## doctype 文档声明 作用

浏览器的文档类型有xml html xhtml
doctype 声明文档类型和dtd规范的 dtd（document type definition,文档类型定义）是一系列语法规则，用来定义xml或xhtml的文件类型，告诉浏览器用什么协议来解析文档 以及切换浏览器模式  
1. html 5 <!DOCTYPE html>
2. html 4.01 有严格模式 和 过渡模式
   strict 严格模式 不包括展示性和弃用标签元素（比如font）
   transitional 包括展示性和弃用标签元素（比如font）

## 浏览器是如何加载一个页面 （url加载页面过程）

[网络阶段 https://juejin.cn/post/6844903829251555341]

1. DNS域名解析
    将域名解析成对应的服务器IP地址

2. 建立TCP连接
    拿到服务器IP地址，与服务器建立TCP连接 三次握手

3. 发送HTTP请求
    与服务器建立了TCP连接后，向服务器发起请求

4. 服务器处理请求
5. 返回响应结果
6. 关闭TCP连接
    关闭TCP连接，需要4次握手。

7. 浏览器解析HTML
   1. 构建DOM Tree - 生成DOM Tree
   2. 构建CSSOM - 浏览器的CSS Parser将CSS解析成Style Rules，Style Rules也叫CSSOM（CSS Object Model）
   3. 构建Render Tree - dom节点适配CSS样式规则并应用 两个步骤 样式计算和样式覆盖
   4. 布局（Layout）- 计算渲染对象的位置和尺寸，布局在浏览器窗口正响应位置
   5. 绘制（Painting）- 遍历Render Tree，调用“paint”方法，将内容显示在屏幕上
   6. JS的加载
      1. 创建window对象
      2. 加载文件
      3. 预编译
      4. 解释执行

##  重排 (reflow) 重绘（reption） 开销大 导致页面卡顿

1. 重排 (reflow)
    dom元素都有自己的盒子，需要浏览器根据各种样式几何属性计算生成 这个过程叫做重排
2. 重绘（repaint）
   当盒子计算好 浏览器根据样式除几何属性的其他属性把盒子绘制出来


3. 增删改dom节点会触发 重排 和 重绘
4. 修改css 几何属性 比如尺寸 位置 等 触发重排重绘
5. 移动dom的位置 比如动画
6. 修改css 颜色 
7. 修改浏览器窗口大小
8. 修改网页默认字体 会导致整个页面重绘重排
9.  如何减少重绘 重排
   1. 减少dom增删改操作 比如关键字关联提示 不要循环新增元素 而是使用文档片 将文档片一次性插入dom
   2. 修改网页默认字体 会导致整个页面重绘重排
   3. 修改样式尽量多个属性集中修改
   4. 减少动画使用

### tcp协议 三次握手四次告别

[https://juejin.cn/post/6844903475571081230]

1. TCP是什么

TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议

2. 建立连接 - 三次握手
   1. 建立连接。客户端发送连接请求报文段，将SYN位置为1，Sequence Number为x；然后，客户端进入SYN_SEND状态，等待服务器的确认
   2. 服务器收到SYN报文段。服务器收到客户端的SYN报文段，需要对这个SYN报文段进行确认，设置Acknowledgment Number为x+1(Sequence Number+1)；同时，自己自己还要发送SYN请求信息，将SYN位置为1，Sequence Number为y；服务器端将上述所有信息放到一个报文段（即SYN+ACK报文段）中，一并发送给客户端，此时服务器进入SYN_RECV状态；
   3. 客户端收到服务器的SYN+ACK报文段。然后将Acknowledgment Number设置为y+1，向服务器发送ACK报文段，这个报文段发送完毕以后，客户端和服务器端都进入ESTABLISHED状态，完成TCP三次握手。 完成了三次握手，客户端和服务器端就可以开始传送数据

3. 为什么要三次握手
在谢希仁著《计算机网络》第四版中讲“三次握手”的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”。在另一部经典的《计算机网络》一书中讲“三次握手”的目的是为了解决“网络中存在延迟的重复分组”的问题。

#### TCP和UDP

[https://juejin.cn/post/6844904150363275278]

1. 基于连接vs无连接

TCP是面向连接的协议。
UDP是无连接的协议。UDP更加适合消息的多播发布，从单个点向多个点传输消息。

2. 可靠性

TCP提供交付保证，传输过程中丢失，将会重发。
UDP是不可靠的，不提供任何交付保证。（网游和视频的丢包情况）

3. 有序性

TCP保证了消息的有序性，即使到达客户端顺序不同，TCP也会排序。
UDP不提供有序性保证。

4. 数据边界

TCP不保存数据边界。

虽然TCP也将在收集所有字节之后生成一个完整的消息，但是这些信息在传给传输给接受端之前将储存在TCP缓冲区，以确保更好的使用网络带宽。


UDP保证。

在UDP中，数据包单独发送的，只有当他们到达时，才会再次集成。包有明确的界限来哪些包已经收到，这意味着在消息发送后，在接收器接口将会有一个读操作，来生成一个完整的消息。

5. 速度

TCP速度慢
UDP速度快。应用在在线视频媒体，电视广播和多人在线游戏。

6. 发送消耗

TCP是重量级。
UDP是轻量级。

因为UDP传输的信息中不承担任何间接创造连接，保证交货或秩序的的信息。
这也反映在用于报头大小。

7. 报头大小

TCP头大。

一个TCP数据包报头的大小是20字节。
TCP报头中包含序列号，ACK号，数据偏移量，保留，控制位，窗口，紧急指针，可选项，填充项，校验位，源端口和目的端口。

UDP头小。

UDP数据报报头是8个字节。
而UDP报头只包含长度，源端口号，目的端口，和校验和。

8. 拥塞或流控制

TCP有流量控制。

在任何用户数据可以被发送之前，TCP需要三数据包来设置一个套接字连接。TCP处理的可靠性和拥塞控制。

UDP不能进行流量控制。

9. 应用

由于TCP提供可靠交付和有序性的保证，它是最适合需要高可靠并且对传输时间要求不高的应用。
UDP是更适合的应用程序需要快速，高效的传输的应用，如游戏。
UDP是无状态的性质，在服务器端需要对大量客户端产生的少量请求进行应答的应用中是非常有用的。
在实践中，TCP被用于金融领域，如FIX协议是一种基于TCP的协议，而UDP是大量使用在游戏和娱乐场所。

10. 上层使用的协议

基于TCP协议的：Telnet，FTP以及SMTP协议。
基于UDP协议的：DHCP、DNS、SNMP、TFTP、BOOTP

------------------------------------------------

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
--------------------------------------------------------

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
----------------------------------------------------
## 作用域

概念：简单来说，作用域 指程序中定义变量的区域，它决定了当前执行代码对变量的访问权限。
1. 作用域指的是指一个变量合法使用的范围 
全局作用域  全局可以访问使用
函数作用域  当前函数作用域内使用
块级作用域  

### 作用域连

概念：当可执行代码内部访问变量时，会先查找本地（当前）作用域，如果找到目标变量即返回，否则会去父级作用域继续查找...一直找到全局作用域。我们把这种作用域的嵌套机制，称为 作用域链。

### 自由变量

1. 自由变量  是指一个变量在当前作用域没有定义,但被使用了
2. 向上级作用域逐层查找，直到找到
3. 如果到全局作用域没找到，则报错未定义 xx is not defined
4. 自由变量的查找，是在函数定义的地方，向上级作用域查找

## 闭包 closure

官方概念：闭包是指有权访问另一个函数作用域中的变量的函数

闭包的作用 变量私有化

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
## 闭包的问题 

### 内存泄漏 

内存泄漏 是指当一块内存不再被应用程序使用的时候，由于某种原因，这块内存没有返还给操作系统或者内存池的现象。内存泄漏可能会导致应用程序卡顿或者崩溃

### 导致内存泄漏的情况有
1. 由于闭包使用过度而导致的内存占用无法释放的情况
   javascript 内部的垃圾回收机制用的是引用计数收集：即当内存中的一个变量被引用一次，计数就加一。垃圾回收机制会以固定的时间轮询这些变量，将计数为 0 的变量标记为失效变量并将之清除从而释放内存
2. 全局变量的无意创建
3. 还有 DOM 的事件绑定，移除 DOM 元素前如果忘记了注销掉其中绑定的事件方法，也会造成内存泄露

### 查看内存方法 Chrome 开发者工具 Performance || memory

### 内存泄露的解决方案
1. 使用严格模式，避免不经意间的全局变量泄露  
2. 关注 DOM 生命周期，在销毁阶段记得解绑相关事件
3. 或者可以使用事件委托的手段统一处理事件，减少由于事件绑定带来的额外内存开销
4. 避免过度使用闭包
   

## 垃圾回收机制

-------------------------------------------------
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

---------------------------------------------------

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

----------------------------------------------------

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
------------------------------------------------------

# 

# 事件机制 (mk400 7-1,8-1) js运行机制

1. js是单线程非阻塞语言 主线程在执行代码的时候 遇到需要等待的异步代码会放入任务队列（callback quene） 等调用栈同步代码执行完空闲时 eventLoop轮询 执行任务队列里面的微任务 清空微任务之后会渲染dom 最后执行宏任务

2. 同步代码，调用栈执行后直接出栈
3. 异步代码，放到Web API中，等待时机，等合适的时候放入回调队列（callbackQueue），等到调用栈空时eventLoop开始工作，轮询
微任务执行时机比宏任务要早
3. 微任务在DOM渲染前触发，宏任务在DOM渲染后触发

## 微任务/宏任务

1. 宏任务 macroTask dom 渲染之后执行  宏任务是由浏览器规定的
   setTimeout回调函数 ajax dom事件 UI 渲染、 I/O、postMessage
2. 微任务 microTask dom渲染之前执行 微任务是由ES6语法规定的
   promise.then async/await MutaionObserver process.nextTick(Node.js环境）

1. macro-task(宏任务)
    script(整体代码)
    setTimeout
    setInterval
    setImmediate
    I/O
UI render
2. micro-task(微任务):
   process.nextTick,
   原生 Promise (有些实现的promise 将 then 方法放到了宏任务中，浏览器默认放到了微任务),
   Object.observe (已废弃),
   MutationObserver（不兼容，已废弃）
   MessageChannel（vue中 nextTick 实现原理）
   
2. 微任务 有setTimeout setInterval ajax回调 ui render i/o dom事件 postMessage 等
3. 宏任务 promise.then await vue-nextTick 等

## 同步和异步的区别

js是单线程语言 同步会阻塞代码执行，异步不会阻塞代码执行

1. js是单线程语言，只能同时做一件事
2. 浏览器和nodejs已支持js启动进程，如web worker(开启子线程，由主线程控制，不能操作dom)
3. js和dom渲染共用同一个线程，因为js可以修改dom
4. 使用异步场景
   需要等待
   1. 网络请求 如 图片加载
   2. 定时任务，如 setTimeout

   
## 事件循环机制 异步进阶 原理 （mk400 8-1）

### 事件循环机制 event loop


## promise

解决回调嵌套 回调地狱 callback hell
.then... 管道形势

promise 的三种状态
pending(等待) resolved（成功） rejected（失败）
promise -> resoved 成功 触发 then
promise -> rejected 失败 触发 catch 
catch => 返回 resoved -> 触发 then 
返回错误信息一律触发catch

```js

Promise.resolve(100).then((res)=>{
    console.log(res) 
}).catch((err)=>{
    console.log(err) // 2 'err reject'
    return '200 catch'
}).then((res)=>{
    console.log(res) // 3 '200 catch'
    throw new Error('err then')
}).catch((err)=>{
    console.log(err) // 4 'err then'
    throw new Error('err catch')
}).then((res)=>{
    console.log(res) // 不执行
}).catch((err)=>{
    console.log(err) // 5 'err catch'
})


```

### async/await

基于event loop 事件机制的语法糖 
用同步代码的书写方式实现异步
解决回调地狱

```js

async function async1(){
    console.log("async1 start") // 2
    // await 后面的代码都可以看作是异步的 等同步代码执行完毕再来执行
    // 比如 setTimeout的回调函数 promise.then
    await async2()
    console.log('await async2') // 5
    await async3()
    console.log("async1 end") // 7
}
async function async2(){
    console.log('async2')   // 3
}
async function async3(){
    console.log('async3') // 6
}
console.log('start')    // 1
async1()
console.log('end') // 4

```
### for of

1. for in (forEach)同步循环
2. for of异步循环
```js

function mitu(num) {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve (num*num)
        },2000)
    })
}

// foreach
let nums = [1,2,3]
 nums.forEach(async (i)=>{
     let res = await mitu(i)
     console.log(res) //2秒后 同时打印结果
 })

 // for of
 // ！是声明 此处作用是分隔代码
!(async function() {
    for(let key in nums){
       let res = await mitu(nums[key])
       console.log(res) // 间隔2秒依次打印结果
    }
})()

```


### 手写Promise 加载图片

```js
function loadImg(src) {
    return new Promise((resolve,reject)=>{
        const img = document.createElement('ing')
        img.onload = function (){
            resolve(img)
        }
        img.onError = function (){
            const err = new Error(`图片加载失败${img}`)
            reject(err)
        }
        img.src = src
    })
}

loadImg(url = 'https://img1.xxxxx').then((img)=>{
    console.log(img)
    return img
}).then((img)=>{
    console.log(img)
    return loadImg(url = 'https://img2.xxxxx')
}).then((img)=>{ // img 是img2 对象
    console.log(img)
}).catch((err)=>{
    console.log(err)
})
    
```





-----------------------------------------------------------
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
   利用script 标签跨域动态创建script 加载资源并在js 回调函数
2. hash (location 对象 url '#'后面改变不会刷新页面 '?'(search)后面改变会刷新页面)
3. webSocket (本身可以跨域)
4. CORS (h5 fetch设置请求头CORS)
5. postMessage (h5)
   
## http协议
http https http1.1区别


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

#### http方法 resful

1. get 获取资源
2. post 传输资源
3. put 更新资源
4. delete 删除资源
5. head 获得报文首部
6. resful 定义资源


#### post和get的区别

0. 简述：get通过url传递参数，有长度编码限制，暴露，不安全，会被浏览器缓存
post通过请求体传递参数，不限制长度，支持多种编码，手动设置缓存，浏览器后退会再次提交请求

0. 浏览器返回时 post会再次提交请求
1. get请求会被浏览器缓存
2. get请求url参数有长度限制 （20kb，被浏览器截断）,参数类型智能时ASCII字符
3. get请求url参数暴露，不安全 （防止scrf攻击）
4. get通过url传递参数，post通过请求体（request body）
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

0. 持久连接   请求1-响应1-请求2-响应2
0. 管线化    请求1-请求2-响应1-响应2

0. http1.1，get,head支持管线化，只能保证管线化请求管线化请求不失败，不会带来大幅度性能提升 浏览器默认未开启管线化支持

## 储存

### cookie localStore sesionStore indexdb

1. cookie 请求头携带 大小有限制
2. localStore 大小很大 储存格式是字符串 有api方便使用
3. sesionStore 
4. indexdb

---------------------------------------------------------

## 前端安全问题

### crsf 跨站伪造请求 
通常利用钓鱼链接 从客户端携带用户cookie信息发起伪造请求 

### XSS (Cross Site Scripting)跨站脚本攻击 
给客户端注入恶意脚本攻击


### 防止前端攻击的方法

1. 过滤字符 规范使用eval等方法
2. cookie设置 httpOnly
3. touken验证
4. sesion验证
5. 令牌
   
---------------------------------------------------------

## 手写题

### 创建10个a标签，点击的时候弹出对应的序号

```js
let a
for(let i = 0; i<10; i++){
    a = document.createElement('a')
    a.innerHTML = i + '<br>'
    a.addEventListener('click',function(e){
        e.preventDefault()
        alert(i) // 块作用域 每次循环的i值 
    })
    document.body.appendChild(a)
}

let a1
for(let k = 0; k<10; k++){
    a1 = document.createElement('a')
    a1.innerHTML = k + '<br>'
    a1.addEventListener('click',function(e){
        e.preventDefault()
        alert(k) // 全局作用域 k 已经计算完毕 都是9
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
----------------------------------------------------------
# es6
----------------------------------------------------------
# vue
## vue 的特点
1. mvvm 数据双向绑定 - model view  viewModel
2. 响应式
3. 组件化
4. 数据驱动
5. 模版编译
6. 轻量
   
## 原理

### vue2
1. Object.defineProperty 监听数据变化然后通知视图更新  
2. 无法监听 新增 删除属性
3. 无法监听数组 需重写数组方法
4. 深度监听 递归计算量大
5. 核心实现代码

```js
// 更新视图
function updateView() {
    consle.log('视图更新')
}

// 重写数组方法 - 原生视图方法无法触发视图更新 修改数据使用vue.set vue.delete
const oldArrProperty  = Array.prototype
const arrProto = Object.create(oldArrProperty)
['push', 'pop','shift','unshift','splice'].forEach((methodName)=>{
    updeteView()
    oldArrProperty[methodName].call(this,...arguments)
})

// 监听变化
function defineReactive(target, key, val) {
    observer(val)
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            // 赋值
            if(newValue !== value) {
                observer(newValue)
                value = newValue
                // 更新视图
                updateView()
            }

        }
    })
}

// 观察者
function observer (tartet) {
    
    if( typeof target !== 'object' || target === null ) {
        return target
    }
    // for in 遍历数组和对象 
    for (let key in target) {
        defineReactive(target, key, target[key])
    }
}
```
### vue3
1. 性能更好 体积更小 更好的代码组织 更好的逻辑抽离 新功能
2. proxy 代理 支持监听对象 数组  对浏览器有限制
2. Relect-工具函数 和 proxy 一一对应
   1. get set ownKeys
3. 生命周期 onMount onMounted onBeforeUnMount unMounted
4. options api  composition api
5. composition api 逻辑抽离 复用 适合复杂项目 更好的类型推倒
6. 更好的支持typeScript
7. ref toRef ToRefs
   1. 创建响应式数据 - ref值类型 reactive对象类型
   2. 通过.value修改
   3. setup使用 toRef ToRefs 方便模版结构使用
   4. toRef ToRefs延续响应式数据
   5. ref的变量命名使用xxxRef
8.  一次递归收集依赖 vue3使用才触发监听
9.  patchFlag添加静态节点标记 加快diff
10. creatApp
11. emits属性
12. 生命周期
13. 多事件
14. fragment - 模版多节点
15. 移除.sync - v-model:title="title"
16. 异步组件写法
    1.  AsyncComponent:defineAsyncComponent(()=>import('./comp/AsyncCop.vue'))
17. 移除filter
18. teleport - 弹窗组件插入body
19. suspense


## 虚拟dom vNode diff算法

1. vnode - 概念 vue用 js 模拟dom结构 叫虚拟dom 
2. 目的是把浏览器修改dom的计算环节交给js来做 这样可以提高页面的渲染速度
3. vue diff算法的核心 （时间复杂度优化到O(n)）
   1. 同级比较 不跨级比较 
   2. tag不相删除重建
   3. tag 和 key 两者都相同，则认为是相同节点，不再深度比较
   4. diff算法过程
      1. patch(elem,vnode) patch(oldVnode, newVnode)
      2. patchVnode addVnodes removeVnodes
      3. updateChildren (key 的重要性) 
## vue 异步渲染 $nextTick
1. 异步渲染（以及合并data修改）提高渲染性能
2. $nextTick在dom更新完之后触发的回调
   
## key 的重要性 - 为什么key不推荐使用index和随机数

1. index 当节点排序改变时 
2. 随机数 当通过key做比较时 key值都不相同 会把所有节点删除重建

## 双向数据绑定 v-model 是实现原理
监听事件 修改data值 修改过响应式驱动视图更新

```js
<template>
    <input>
    type = "text"
    :value = "text"
    @input = "$emit('change',$event.target.value)""
    </input>
</template>

<script>
    export default {
        model:{
            prop:'text',
            event: 'change'
        },
        text: string
    }
</script>
```

### 生命周期

1. ajax请求适合放在mounted声明周期里-因为js单线程 ajax异步
2. beforeDestory - 组件销毁前
   1. 解绑自定义事件 event.$off
   2. 清除定时器
   3. 解绑自定义dom事件等
   


### 组件 组件通信

1. 如何组件所有props传递给子组件
    1. $props -- v-bind='$props'
2. 多组件抽离相同的逻辑 - mixin
3. 何时要使用异步组件 - 加载大组件 路由异步加载组件
4. keep-alive - 缓存组件 不需要重复渲染 如多个静态tab页的切换
   
### 为何data必须是一个函数
1. 如果不是函数 组件化和复用会导致数据污染

### watch 和 computed

1. computed 有缓存 data不变不回重新计算
2. watch 适合监听值的变化并触发变化之后的逻辑处理


### 用vnode描述一个dom结构

```js
{
    tag: 'div',
    props: {
        className: 'container',
        id: 'div1'
    },
    children: [
        {
            tag: 'p',
            children: 'vdom'
        },
        {
            tag: 'a',
            props: {
                herf: 'https://www.baidu.com'
            },
            children: '百度一下'
        }
    ]
}
```

### 作用域插槽

可以获取插槽内部属性


## vue全家桶

### vue router
1. 实现原理 或 常用路由模式location对象的xx改变 浏览器不会刷新 可以前进和后退
2. hash模式 - location.hash 
3. history模式 - location.path 需要服务端支持
4. 路由异步加载组件 
   component:()=> import('/Index')

## vue2 vue3对比 
1. 性能更好 体积更小 更好的代码组织 更好的逻辑抽离 新功能
1. 生命周期 onMount onMounted onBeforeUnMount unMounted
2. options api  composition api
3. composition api 逻辑抽离 复用 适合复杂项目 更好的类型推倒
4. 更好的支持typeScript
5. ref toRef ToRefs
6. Object.defineProterty  Proxy
7. 一次递归收集依赖 vue3使用才触发监听
8. patchFlag添加静态节点标记 加快diff
   

## vuex
1. state 状态管理
2. action 和 mutation区别
    1. action处理异步操作
    2. mutation做原子操作 修改state
    3. action可以整合多个mutaion

## vue常见性能优化
1. 合理使用v-show v-if 
2. v-for v-if不要同一个节点使用
3. 合理使用computed
4. 合理使用key 
5. 自定义事件 dom事件及时销毁
6. 合理使用异步组件
7. 合理使用keep-alive
8. data层级不要太沉 - 需要一次递归
9. vue-loader在开发环境做模版变异
10. webpack层面优化-待补充
11. 前端通用的性能优化，如图片蓝加载
12. 使用ssr

### vite
vue框架  前端开发工具
----------------------------------------------------------

# webpack
----------------------------------------------------------
# typeScript
----------------------------------------------------------
# 自动化测试
