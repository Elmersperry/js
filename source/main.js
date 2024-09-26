/*
alert("Hello from JavaScript!");
confirm("Согласны, узнали?");
*/
/*
undefined - неинициализированные значения
null - флаг отсутствия значений (либо нулевое значение)
bool (Boolean) - логический тип данных, true или false
string - последовательность символов (или символ), объединенных в структуру
number - число (любого вида), NaN (Not-a-Number), Infinity (-Infinity), +0 (-0)
object - представление объекта языка JavaScript

Декремент:
++х или х++ <=> x+1

Инкремент:
--х или х-- <=> x-1
*/
/*/let ans;
ans = prompt("Введите код операции");
if (ans == "6453") {
  alert("Молодец! Правильный ответ");
} else {
  alert("Код неверный! Не молодец ;(");
}
*/
/*
let x, y, S;
x = prompt("Введите число:");
x = Number(x);
y = prompt("Введите ещё одно число:");
y = Number(y);
S=(x+y) / 2;
alert("Ваше среднее арифмитическое ваших чисел: " + S);
*/
/*
if (condition){
statement;
}
elsw {
other statement;
}
*/
/*
const mile = 0.621371;
let x = prompt("Введите кол-во километров");
x = Number(x);
alert("Количество километров в милях: " + x * mile);
*/
/*
let input = prompt("Введите пятизначное число: ");
let last = input.slice(4);
let res = last + input.slice(0, 4);
alert("Ваше число теперь: " + res);
*/
/*
let x = Number(prompt("Введите первое число"));
let y = Number(prompt("Введите второе число"));
let S = x + y;
let P =x * y;
let F = x - y;
let D = x / y;
alert("Сумма" + S);
alert("Умножение" + P);
alert("Разница" + F);
alert("Деление" + D);
*/
/*
window.onload = function () {
function foo() {
let a = Number(prompt("Введите число"));
let x = Number(prompt("Введите ещё одно число"));
const k = 5;
let y = k*x + a*(x**2);
alert("Результат выполнения функции: " + y);
}
}
*/
/*
function calc(a, b, operation) {
  if (operation == "+") {
    return a + b;
  } else if (operation == "-") {
    return a - b;
  } else if (operation == "*") {
    return a * b;
  } else if (operation == "/") {
    if (b == 0) {
      return "Делить на ноль нельзя!";
    } else {
      return a / b;
    }
  } else {
    return "Неизвестная операция. Попробуйте ещё раз";
  }
}
*/
/*
function calcPaS() {
  let x = Number(document.getElementsByName("num1")[0].value);
  let y = Number(document.getElementsByName("num2")[0].value);
  let op = document.getElementsByName("operation")[0].value;
  console.log(x, y, op);
  let res = calc(x, y, op);
  alert("Результат операции: " + res);
}

window.onload = () => {
  let buttonCalc = document.getElementById("calculator");
  buttonCalc.addEventListener("click", calcPaS);
};
*/
/*
  let x = Number(prompt("Введите первое число"));
  let y = Number(prompt("Введите второе число"));
  let op = prompt("Введите тип операции (+, -, *, /)");
  let res = calc(x, y, op);
  alert("Результат вашей операции: " + res);
};
*/

/*let user = new Object();*/
/*
let user = {
  name: "Rodion",
  surname: "Valiullin";
  age: 25,
  city: "Saint-P",
};

console.log(user.name);
console.log(user["age"]);

user.isAdmin = true;
delete user.age;

console.log(user);
*/
/*
let fruit = prompt("Введите свой любимый фрукт:");

let waifu = {
  face: "UWU",
  booba: "BEEG",
  bunda: "GYAAAAAAAAAAAAAAATTTT",
  real: false,
  [fruit]: "favorite",
};

console.log(waifu.face);
console.log(waifu["bunda"]);
waifu.OWO = true;
console.log(waifu);
*/

let rectangle = {
  a: null,
  b: null,
  c: null,
  d: null,
};

function set_rectangle(o) {
  A = prompt("Введите координаты первой точки (через запятую):");
  o.A = A;
  B = prompt("Введите координаты второй точки (через запятую):");
  o.B = B;
  C = prompt("Введите координаты третьей точки (через запятую):");
  o.C = C;
  D = prompt("Введите координаты четвёртой точки (через запятую):");
  o.D = D;
}

function rectangleInfo(o) {
  alert(
    `Точка A: (${o.A})\nТочка B: (${o.B})\nТочка C: (${o.C})\nТочка D: (${o.D})`
  );
}

function width(o) {
  alert(`Ширина прямоугольника: ${Number(o.C[0]) - Number(o.D[0])}`);
}

function height(o) {
  alert(`Высота прямоугольника: ${Number(o.A[2]) - Number(o.D[2])}`);
}
/*
$(document).ready(function () {
  $("button").click(function () {
    $("p").toggle();
  });
});
*/
/*
$(document).ready(function () {
  /*$("p").text("Текст, установленный из JQuery");*/
//$("p").html("<h3>Текст, установленный из JQuery</h3>");
//$("p").attr("style", "font-size: 24px;");
/*
  $("p").append("Hello") - добавление значения в конец тега
  $("p").prepend("Oh, man, Jesus Christ...") - добавление значения в начало тега
  $("p").after("div");
  $("p").before("div");
  */
/*
  $("p").remove() - удаление дочернего элемента (или указанного в методе)
  $("p").empty() - удаление всех дочерних элементов
  */
//});

/*$(document).ready(function () {
  $("#callAjax").click(function () {
    $("#ajaxContent").load("../text.txt");
  });
});
*/

$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos/1",
    type: "GET",

    success: function (data) {
      for (key in data) {
        $("#ajaxContent").append(key + ":" + data[key] + "<br>");
      }
    },

    error: function (error) {
      $("#ajaxContent").text(error);
    },
  });
});
