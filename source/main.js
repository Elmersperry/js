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

/*
  let x = Number(prompt("Введите первое число"));
  let y = Number(prompt("Введите второе число"));
  let op = prompt("Введите тип операции (+, -, *, /)");
  let res = calc(x, y, op);
  alert("Результат вашей операции: " + res);
};
*/

