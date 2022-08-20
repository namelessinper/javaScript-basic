# BOM

没有标准

所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。

全局变量是 window 对象的属性。

全局函数是 window 对象的方法。

甚至 HTML DOM 的 document 也是 window 对象的属性之一：

## js引入方式三种：

1. 内联
2. 外联
3. 内嵌（嵌入）

```html
// 内联
<script>
 	// 常规 js 代码
</script>
```

```html
// 	外联
<script src="./xxx.js"></script>
```

```html
//嵌入式
<button 事件="js代码">
    
</button>
```

## 6个核心对象

1. 窗口  window
2. 浏览器 navigator
3. 屏幕 screen
4. 历史 history
5. 位置 location
6. 文档（dom）document（w3c标准）

![image-20220720152052780](C:\Users\yx\AppData\Roaming\Typora\typora-user-images\image-20220720152052780.png)

### window

window作为顶层对象，调用他的方法时可以省略`window`

[window 对象](https://www.runoob.com/jsref/obj-window.html)

#### window对象的属性

![image-20220720152643598](C:\Users\yx\AppData\Roaming\Typora\typora-user-images\image-20220720152643598.png)

#### window对象的方法

| [alert(message)](https://www.runoob.com/jsref/met-win-alert.html) | 显示带有一段消息和一个确认按钮的警告框。           |
| :----------------------------------------------------------- | :------------------------------------------------- |
| [clearInterval(setInterval（）返回的id)](https://www.runoob.com/jsref/met-win-clearinterval.html) | 取消由 setInterval() 设置的 timeout。              |
| [clearTimeout(setTimeout（）返回的id)](https://www.runoob.com/jsref/met-win-cleartimeout.html) | 取消由 setTimeout() 方法设置的 timeout。           |
| [confirm(message)](https://www.runoob.com/jsref/met-win-confirm.html) | 显示带有一段消息以及确认按钮和取消按钮的对话框。   |
| [open()](https://www.runoob.com/jsref/met-win-open.html)     | 打开一个新的浏览器窗口或查找一个已命名的窗口。     |
| [scrollTo()](https://www.runoob.com/jsref/met-win-scrollto.html) | 把内容滚动到指定的坐标。                           |
| [setInterval("回调函数"，间隔时间)](https://www.runoob.com/jsref/met-win-setinterval.html) | 按照指定的周期（以毫秒计）来调用函数或计算表达式。 |
| [setTimeout("回调函数"，延迟时间)](https://www.runoob.com/jsref/met-win-settimeout.html) | 在指定的毫秒数后调用函数或计算表达式。             |

### location

```js
//绑定事件触发 可以跳转
location.href="xxxx.html";
```

#### Location 对象属性

| 属性                                                         | 描述                          |
| :----------------------------------------------------------- | :---------------------------- |
| [hash](https://www.runoob.com/jsref/prop-loc-hash.html)      | 返回一个URL的锚部分           |
| [host](https://www.runoob.com/jsref/prop-loc-host.html)      | 返回一个URL的主机名和端口     |
| [hostname](https://www.runoob.com/jsref/prop-loc-hostname.html) | 返回URL的主机名               |
| [href](https://www.runoob.com/jsref/prop-loc-href.html)      | 返回完整的URL                 |
| [pathname](https://www.runoob.com/jsref/prop-loc-pathname.html) | 返回的URL路径名。             |
| [port](https://www.runoob.com/jsref/prop-loc-port.html)      | 返回一个URL服务器使用的端口号 |
| [protocol](https://www.runoob.com/jsref/prop-loc-protocol.html) | 返回一个URL协议               |
| [search](https://www.runoob.com/jsref/prop-loc-search.html)  | 返回一个URL的查询部分         |

#### Location 对象方法

| 方法                                                         | 说明                   |
| :----------------------------------------------------------- | :--------------------- |
| [assign()](https://www.runoob.com/jsref/met-loc-assign.html) | 载入一个新的文档       |
| [reload()](https://www.runoob.com/jsref/met-loc-reload.html) | 重新载入当前文档       |
| [replace()](https://www.runoob.com/jsref/met-loc-replace.html) | 用新的文档替换当前文档 |

### navigator对象

#### Navigator 对象属性

| 属性                                                         | 说明                                        |
| :----------------------------------------------------------- | :------------------------------------------ |
| [appCodeName](https://www.runoob.com/jsref/prop-nav-appcodename.html) | 返回浏览器的代码名                          |
| [appName](https://www.runoob.com/jsref/prop-nav-appname.html) | 返回浏览器的名称                            |
| [appVersion](https://www.runoob.com/jsref/prop-nav-appversion.html) | 返回浏览器的平台和版本信息                  |
| [cookieEnabled](https://www.runoob.com/jsref/prop-nav-cookieenabled.html) | 返回指明浏览器中是否启用 cookie 的布尔值    |
| [platform](https://www.runoob.com/jsref/prop-nav-platform.html) | 返回运行浏览器的操作系统平台                |
| [userAgent](https://www.runoob.com/jsref/prop-nav-useragent.html) | 返回由客户机发送服务器的user-agent 头部的值 |

#### Navigator 对象方法

| 方法                                                         | 描述                                      |
| :----------------------------------------------------------- | :---------------------------------------- |
| [javaEnabled()](https://www.runoob.com/jsref/met-nav-javaenabled.html) | 指定是否在浏览器中启用Java                |
| [taintEnabled()](https://www.runoob.com/jsref/met-nav-taintenabled.html) | 规定浏览器是否启用数据污点(data tainting) |

### screen对象

#### Screen 对象属性

| 属性                                                         | 说明                                     |
| :----------------------------------------------------------- | :--------------------------------------- |
| [availHeight](https://www.runoob.com/jsref/prop-screen-availheight.html) | 返回屏幕的高度（不包括Windows任务栏）    |
| [availWidth](https://www.runoob.com/jsref/prop-screen-availwidth.html) | 返回屏幕的宽度（不包括Windows任务栏）    |
| [colorDepth](https://www.runoob.com/jsref/prop-screen-colordepth.html) | 返回目标设备或缓冲器上的调色板的比特深度 |
| [height](https://www.runoob.com/jsref/prop-screen-height.html) | 返回屏幕的总高度                         |
| [pixelDepth](https://www.runoob.com/jsref/prop-screen-pixeldepth.html) | 返回屏幕的颜色分辨率（每象素的位数）     |
| [width](https://www.runoob.com/jsref/prop-screen-width.html) | 返回屏幕的总宽度                         |

### history对象

### History 对象属性

| 属性                                                        | 说明                   |
| :---------------------------------------------------------- | :--------------------- |
| [length](https://www.runoob.com/jsref/prop-his-length.html) | 返回历史列表中的网址数 |

#### History 对象方法

| 方法                                                         | 说明                              |
| :----------------------------------------------------------- | :-------------------------------- |
| [back()](https://www.runoob.com/jsref/met-his-back.html)     | 加载 history 列表中的前一个 URL   |
| [forward()](https://www.runoob.com/jsref/met-his-forward.html) | 加载 history 列表中的下一个 URL   |
| [go()](https://www.runoob.com/jsref/met-his-go.html)         | 加载 history 列表中的某个具体页面 |