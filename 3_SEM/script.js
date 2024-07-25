/*
1. Написать функцию, которой передаем, имя, фамилия и
возраст, и получаем строку "Привет Иван Петров с
возрастом 17" (только здесь данные, которые были
переданы в функцию) 
*/

function sayHelloToUser(name, surname, age) {
    console.log(`Привет ${name}, ${surname} с возрастом ${age}`);
}

sayHelloToUser('Name', 'Surname', 17);


/*
2. Создайте функцю которая возводит переданное число в
квадрат
*/
let number = 3;
const QuadNumber = () => number ** 2;
console.log(QuadNumber(number));



/*
3. Сделайте функцию, которая параметром принимает
число и проверяет, положительное это число или
отрицательное. В первом случае пусть функция выводит
в консоль текст '+++', а во втором '---'
*/

function checkNumber(number) {
    console.log((number > 0) ? '+++' : '---');
}

checkNumber(-1);

/*
1. Сделайте функцию, которая параметрами принимает 3 числа и
выводит в консоль сумму этих чисел.
*/

const GetSumOfNumbers = (a, b, c) => +a + +b + +c;



/*
2. С помощью созданной вами функции выведите в консоль сумму
значений этих переменных.
let param1 = 1;
let param2 = 2;
let param3 = 3;
*/
let param1 = '1';
let param2 = 2;
let param3 = 3;

console.log(GetSumOfNumbers(param1, param2, param3));


/*
3. Дана фукнция
function func(num = 5) {
console.log(num * num);
}
Расскажите, каким будет результат каждого из вызовов функции.
func(2); - 4
func(3); - 9
func(); - 25
*/



/*
Сделайте функцию (Math.sqrt(x)), которая параметром принимает число, а возвращает квадратный корень из этого числа. 
С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. 
Просуммируйте полученные результаты и выведите их в консоль (используя функцию суммы). (3.732050807568877)
*/

const sqrtOfNumber = (number) => Math.sqrt(number);
const sumOfTwoNumbers = (a, b) => a + b;
console.log(sumOfTwoNumbers(sqrtOfNumber(3), sqrtOfNumber(4)));

/*
2. Создайте функцию, которая находит минимальное число из 2х
передаваемых аргументов функции
*/

const minimalOfTwoNumbers = (a, b) => (a < b) ? a : b;
console.log(minimalOfTwoNumbers(5, 3));

/*
1. Сделайте функцию, которая принимает параметром число от 1 до 7,
а возвращает день недели на русском языке.
*/

function dayOfWeek(numberOFDay) {
    const days = ['Понедельник', 'Вторник', "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    console.log(days[+numberOFDay - 1]);
}

dayOfWeek(3);




/*
2. Написать функцию, которой передаем имя и она возвращает
приветствие в зависимости от времени суток (Доброе
утро\день\вечер\ночи Иван)
*/

function helloTimeOfDay(name) {
    let hour = new Date().getHours();
    if (0 <= hour & hour <= 5) console.log(`Доброй ночи ${name}`);
    else if (5 < hour & hour <= 12) console.log(`Доброе утро ${name}`);
    else if (12 < hour & hour <= 16) console.log(`Добрый день ${name}`);
    else if (16 < hour & hour <= 23) console.log(`Добрый вечер ${name}`);
}

helloTimeOfDay('Username');
