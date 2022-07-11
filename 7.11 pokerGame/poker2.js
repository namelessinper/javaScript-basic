/*
此方法生成牌库时给每张牌添加一个用于比较大小的值
使用随机数随机生成下标，使用slice抽牌后 用一个新数组使用concat方法拼接成一个人的手牌
slice的同时使用splice方法删除公共牌库的相对于的牌
最后直接通过sort pokersValue 的方式排序
*/
const number = [
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
  "2",
];
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

//新建牌组
let pokers = [];
//初始化牌对象的大小
let pokersValue = 0;
//初始化牌组数量
let maxIndex = 53;

createPokers();
let pokers1 = deal("zhangsan");
let pokers2 = deal("lisi");
let pokers3 = deal("wangwu");
console.log(`剩下的牌:`);
console.log(pokers);

// 获取随机数
function random(min, max) {
  if (min > max) {
    [max, min] = [min, max];
  } else if (max == undefined) {
    [max, min] = [min, 0];
  }
  return parseInt(Math.random() * (max - min + 1) + min);
}

//生成牌组对象，并给其赋值
function createPokers() {
  //给每张牌添加一个pokersValue属性 用于大小对比
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < flower.length; j++) {
      pokers.push({
        name: flower[j] + number[i],
        flower: flower[j],
        number: number[i],
        pokersValue,
      });
      pokersValue++;
    }
  }
  pokers.push({ name: "samllJoker", pokersValue: 52 });
  pokers.push({ name: "bigJoker", pokersValue: 53 });
  console.log(pokers);
}

//生成随机牌组
function deal(usename) {
  let onesPokers = [];
  //循环抽一张 删除一张
  for (let i = 0; i < 17; i++) {
    let randomNum = random(0, maxIndex);
    onesPokers = onesPokers.concat(pokers.slice(randomNum, randomNum + 1));//个人手牌数组拼接随机抽取的一张牌，这张牌是从公共牌库抽取的
    pokers.splice(randomNum, 1);//在公共数组内删除相对于的牌
    maxIndex--;//抽牌后在公共牌库删除了对应的牌，公共牌库的长度减1
  }
  //牌组排序
  onesPokers.sort((a, b) => a.pokersValue - b.pokersValue);
  console.log(`${usename}的牌`);
  console.log(onesPokers);
  console.log(`${usename}有${onesPokers.length}张牌`);
  return onesPokers;
}
