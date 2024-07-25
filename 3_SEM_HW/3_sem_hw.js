/*
Задание 1
Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2 ^ 3 степени + 3 ^ 3 степени
*/

let number = 3;

const getCubeOfNumber = () => number ** 3; // или Math.pow(number, 3);
console.log(getCubeOfNumber(number));



/*
Задание 2
Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
Создать фукнцию, которая высчитывает 13 % от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
*/

let salary = +prompt('Размер зарплаты?');
if (salary == NaN) console.log('Значение задано неверно');

const salaryTaxFree = () => salary * 0.87;

console.log(`Размер заработной платы за вычетом налогов равен ${salaryTaxFree(salary)}`);


/*
Задание 3
Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
*/

alert('Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел')

const maxOfNumbers = (a, b, c) => {
    let maxResult = a;
    if (maxResult < b) maxResult = b;
    if (maxResult < c) maxResult = c;
    return maxResult;
}

const inputCorrectValue = () => {
    let correctNumber = +prompt(`Введите число `);
    while (isNaN(correctNumber)) {
        alert('Не число');
        correctNumber = +prompt(`Введите число!!!`);
    }
    console.log(correctNumber);
    return correctNumber;

}

console.log(`Максимальное из введённых - ${maxOfNumbers(inputCorrectValue(), inputCorrectValue(), inputCorrectValue())}`);


/*
Задание 4
Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций(каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); 
должно вывести число 8 в консоль(sum - функция сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.
*/


const sumOfNumbers = (a, b) => +a + +b;
const diffOfNumbers = (a, b) => (a > b) ? +a - +b : +b - +a;
const multiplicationOfNumbers = (a, b) => +a * +b;
const divisionOfNumbers = (a, b) => +a / +b

console.log(sumOfNumbers(6, 2));
console.log(diffOfNumbers(6, 2));
console.log(multiplicationOfNumbers(6, 2));
console.log(divisionOfNumbers(6, 2));