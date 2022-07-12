/*
需求：
- 管理员信息功能：
  * 可登录、注册
  * 登录成功后可对学生信息进行操作

- 学生信息功能：
  * 操作提示： 1.新增  2.删除  3.查询  4.修改  5.退出
  * 新增可增： name、age、gender、score。 id 自增
  * 删除： 按 id 删
  * 查询：1.查询所有 2.分类查询 3.退出查询
         1. 打印所有学生数组
         2. 1.姓名 2.年龄 3.性别 4.成绩
  * 修改：根据输入的学生 id 修改，可改：
         1.姓名 2.年龄 3.性别 4.成绩*/
// 管理员
const users = [
  { username: "zhangsan", password: "123" },
  { username: "lisi", password: "456" },
];
// 学生
const studentsData = [
  { id: 1, name: "zhao", age: "18", gender: "male", score: "98" },
  { id: 2, name: "qian", age: "20", gender: "female", score: "100" },
  { id: 3, name: "sun", age: "17", gender: "male", score: "77" },
  { id: 4, name: "li", age: "22", gender: "female", score: "65" },
  { id: 5, name: "zhou", age: "19", gender: "male", score: "80" },
];
const readline = require("readline-sync");
let loginFlag = true;
let loginState = false;
main();

//主函数
function main() {
  while (loginFlag) {
    console.log("选择你要做的事 1、登录 2、注册");
    let loginOpt = readline.question() - 0;
    switch (loginOpt) {
      case 1:
        login();
        break;
      case 2:
        addUser();
        break;
      default:
        console.log("输入错误");
    }
  }
  while (loginState) {
    console.log("选择你要做的事  1.新增  2.删除  3.查询  4.修改  5.退出");
    let managerOpt = readline.question() - 0;
    switch (managerOpt) {
      case 1:
        addStudent();
        break;
      case 2:
        deleteStudent();
        break;
      case 3:
        queryStudents();
        break;
      case 4:
        changeStudentsInfo();
        break;
      case 5:
        loginState = false;
        console.log("再见");
        break;
      default:
        console.log("输入错误");
    }
  }
}

//登陆函数
function login() {
  console.log("输入你的用户名");
  let iptUserName = readline.question();
  console.log("输入你的密码");
  let iptUserPd = readline.question();
  loginState = users.some((item) => {
    return item.username == iptUserName && item.password == iptUserPd;
  });
  if (!loginState) {
    console.log("登陆失败");
  } else {
    loginFlag = false;
    loginState = true;
    console.log("登陆成功   ");
  }
}

//注册函数
function addUser() {
  console.log("输入新的用户名");
  let newUserName = readline.question();
  for (const item of users) {
    if (item.username == newUserName) {
      console.log("用户已存在");
      return;
    }
  }
  console.log("输入新的密码");
  let newUserPassword1 = readline.question();
  console.log("再次输入新的密码");
  let newUserPassword2 = readline.question();
  if (newUserPassword1 == newUserPassword2) {
    users.push({ username: newUserName, password: newUserPassword2 });
    console.log("注册成功");
  } else {
    console.log("两次输入不一致");
  }
}

//新增学生
function addStudent() {
  console.log("请输入新学生的姓名");
  let newStudentName = readline.question();
  console.log("请输入新学生的年龄");
  let newStudentAge = readline.question();
  console.log("请选择新学生的性别 1.男 0.女");
  let genderOpt = readline.question() - 0;
  let newStudentGender;
  if (genderOpt) {
    newStudentGender = "male";
  } else {
    newStudentGender = "female";
  }
  console.log("请输入新学生的成绩");
  let newStudentScore = readline.question();
  let newStudentId = studentsData[studentsData.length - 1].id + 1;
  studentsData.push({
    id: newStudentId,
    name: newStudentName,
    age: newStudentAge,
    gender: newStudentGender,
    score: newStudentScore,
  });
}

//删除学生
function deleteStudent() {
  console.log("输入你要删除的学生id");
  let deleteStudentId = readline.question() - 0;
  let deleteId = -1;
  studentsData.forEach((item, index) => {
    if (item.id == deleteStudentId) {
      deleteId = index;
    }
  });
  if (deleteId >= 0) {
    studentsData.splice(deleteId, 1);
  } else {
    console.log("查无此人");
  }
}

//查询主函数
function queryStudents() {
  let queryState = true;
  while (queryState) {
    console.log("选择查询方式 1.查询所有 2.分类查询 3.退出查询");
    let queryOpt1 = readline.question() - 0;
    switch (queryOpt1) {
      case 1:
        console.log(studentsData);
        break;
      case 2:
        console.log("选择分类查询方式 1.姓名 2.年龄 3.性别 4.成绩");
        let queryOpt2 = readline.question() - 0;
        switch (queryOpt2) {
          case 1:
            query(queryOpt2);
            break;
          case 2:
            query(queryOpt2);
            break;
          case 3:
            query(queryOpt2);
            break;
          case 4:
            query(queryOpt2);
            break;
          default:
            console.log("输入错误");
        }
        break;
      case 3:
        queryState = false;
        console.log("退出查询");
        break;
      default:
        console.log("输入错误");
    }
  }
}
//查询函数
function query(queryOpt2) {
  let queryStudents = [];
  let target = "";
  let type = "";
  console.log(queryOpt2);
  if (queryOpt2 == 1) {
    type = "姓名";
    target = "name";
  } else if (queryOpt2 == 2) {
    type = "年龄";
    target = "age";
  } else if (queryOpt2 == 3) {
    type = "性别";
    target = "gender";
  } else if (queryOpt2 == 4) {
    type = "成绩";
    target = "score";
  } else {
    console.log("输入错误");
    return;
  }
  console.log(`请输入你要查询的学生的${type}`);
  let queryTarget = readline.question();
  let result = studentsData.filter((item) => item[target] == queryTarget);
  if (result.length) {
    console.log(result);
  } else {
    console.log("没有");
  }
}

//修改学生信息
function changeStudentsInfo() {
  console.log("请输入你要修改的学生id");
  let changeId = readline.question() - 0;
  let findId = -1;
  let findState = false;
  studentsData.forEach((item, index) => {
    if (item.id == changeId) {
      findId = index;
    }
  });
  if (findId >= 0) {
    findState = true;
  } else {
    console.log("查无此人");
  }
  while (findState) {
    console.log("请选择你要修改的信息  1.姓名 2.年龄 3.性别 4.成绩 5.退出修改");
    let changeOpt = readline.question() - 0;
    switch (changeOpt) {
      case 1:
        console.log("请输入修改后的姓名");
        studentsData[findId].name = readline.question();
        console.log(`${studentsData[findId].name} 修改成功`);
        break;
      case 2:
        console.log("请输入修改后的年龄");
        studentsData[findId].age = readline.question();
        console.log(
          `${studentsData[findId].name}的年龄 修改为${studentsData[findId].age}`
        );
        break;
      case 3:
        console.log("请选择修改后的性别 1.男  0.女");
        let changeGenderOpt = readline.question() - 0;
        let changeGender;
        if (changeGenderOpt) {
          changeGender = "male";
        } else {
          changeGender = "female";
        }
        studentsData[findId].gender = changeGender;
        console.log(
          `${studentsData[findId].name}的性别 修改为${studentsData[findId].gender}`
        );
        break;
      case 4:
        console.log("请输入修改后的成绩");
        studentsData[findId].score = readline.question();
        console.log(
          `${studentsData[findId].name}的成绩 修改为${studentsData[findId].score}`
        );
        break;
      case 5:
        findState = false;
        break;
      default:
        console.log("输入错误");
    }
  }
}
