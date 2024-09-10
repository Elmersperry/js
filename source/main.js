alert("Hello from JavaScript!");
confirm("Согласны, узнали?");
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
