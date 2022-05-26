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


## 原型链

1. 面向对象的基础
   
### 创建对象的几种方法
```js
   // 第一种方式：字面量
   var o1 = {name: 'o1'};
   var o2 = new Object({name: 'o2'});

   // 第二种方式：构造函数
   var M = function (name) { this.name = name; }; // M构造函数
   var o3 = new M('o3');    // o3实例

   // 第三种方式：Object.create
   var p = {name: 'p'};
   var o4 = Object.create(p);

   M.prototype.say = function () {
       console.log('say hi');
   };

   var o5 = new M('o5');

   var new2 = function (func) {
       var o = Object.create(func.prototype);
       var k = func.call(o);
       if (typeof k === 'object') {
           return k;
       } else {
           return o;
       }
   };
```

1. 原型 原型对象
2. 构造函数
    可以使用new运算符生成一个实例 叫构造函数 任何函数都能通过new生成实例
3. 实例
4. 原型链
   访问一个实例的方法时 会从过当前实例的原型链向上查找 

5. instanceof原理
6. new运算符

----

# 网络
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
