# 关于setInterval 多次点击开始无法结束的问题

````html

<body>
    <div id="show"></div>
    <button class="start">开始</button>
    <button class="end">结束</button>


    <script>
        let nameStr = `饺子,拉面,炒菜,肯德基,麦当劳,米线,烧烤,沙拉,冰淇淋,炒饭`;
        let arr = nameStr.split(",");
        let start = document.getElementsByClassName("start")[0];
        let end = document.getElementsByClassName("end")[0];
        let timer;
        start.onclick = function () {
           timer = setInterval(function () {
                let i =parseInt(Math.random()*arr.length) ;
                document.getElementById("show").innerText = arr[i];
            }, 100);
        }
        end.onclick = function () {
            clearInterval(timer);
        }
    </script>
</body>
````

重点在 `setInterval(）`由 ` clearInterval()`结束，其中 `setInterval(）`会返回一个当前页面唯一的一个计时器id值，`clearInterval()`由传递的id去结束对应得计时器

上述得代码在多次点击`<button class="start">开始</button>`后，会产生复数个正在运行得计时器，    `<button class="end">结束</button>`的点击函数只能结束当前id的计时器，无法结束之前多次点击开始产生的计时器

解决办法：每次再次开启一个计时器前，结束当前计时器

```html

  <script>
        let nameStr = `饺子,拉面,炒菜,肯德基,麦当劳,米线,烧烤,沙拉,冰淇淋,炒饭`;
        let arr = nameStr.split(",");
        let start = document.getElementsByClassName("start")[0];
        let end = document.getElementsByClassName("end")[0];
        let timer;
        start.onclick = function () {
             clearInterval(timer);
           timer = setInterval(function () {
                let i =parseInt(Math.random()*arr.length) ;
                document.getElementById("show").innerText = arr[i];
            }, 100);
        }
        end.onclick = function () {
            clearInterval(timer);
        }
    </script>
```

