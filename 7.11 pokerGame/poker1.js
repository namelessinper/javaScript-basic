/*此方法通过双重循环，生成有序的牌组
在使用set容器保存无序下标打乱牌库后，将每17张发给一个人，剩下三张
通过在生成牌库时给每张牌的数值、花色进行赋值，赋值数据类型为number，以此为依据进行排序
*/
const number = ['3', '4', '5', '6', '7', '8', '9', '10', "J", "Q", "K", "A", '2'];
const flower = ["♠️", "♥️", "♣️", "♦️"]; // 黑桃 < 红心 < 梅花 < 方块
/**
 * 54 张
 * 大小王
 * 张三： 17
 * 李四： 17
 * 王五： 17
 * 底牌： 3
 * 
 * 排序 方块3 黑桃3 升序  黑桃3-方块3 如果点数相同，按花色排
 */
// 生成牌
function create() {
    let arr = [];
    for (let n = 0; n < number.length; n++) {
        for (let f = 0; f < flower.length; f++) {
            let str = flower[f] + number[n];
            let obj = {
                name: str,
                number: n,
                flower: f
            };
            arr.push(obj);
        }
    }
    arr.push({
        name: "小王",
        number: 53
    }, {
        name: "大王",
        number: 54
    });
    // console.log(arr);

    // 打乱
    let s = new Set();
    while (s.size < 54) {
        s.add(random(53));
    }
    let randomIndexArr = [...s]; // 随机下标
    // console.log(randomIndexArr);

    arr = randomIndexArr.map(item => arr[item]);
    // console.log(arr);

    let player1 = arr.slice(0, 17);
    let player2 = arr.slice(17, 34);
    let player3 = arr.slice(34, 51);
    let def = arr.slice(51);

    return [player1, player2, player3, def];
}
let [player1, player2, player3, def] = create();


// 排序
function sort(arr) { // 数组
    arr.sort((a, b) => {
        if (a.number == b.number) {
            return a.flower - b.flower;
        } else {
            return a.number - b.number;
        }
    });
}
sort(player1);
sort(player2);
sort(player3);
sort(def);

console.log("张三：", player1);
console.log("李四：", player2);
console.log("王五：", player3);
console.log("底牌：", def);


// 随机数
function random(min, max) {
    if (min > max) {
        [max, min] = [min, max];
    }
    if (!max) { // max == undefined
        [max, min] = [min, 0];
    }
    return parseInt(Math.random() * (max + 1 - min) + min);
}