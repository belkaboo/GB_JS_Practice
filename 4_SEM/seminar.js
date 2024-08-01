/*
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
*/

const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/*
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
*/
const randomArr = [];
const getRandomNumber = (max) => Math.floor(Math.random() * (max + 1));
for (let i = 0; i < 6; i++) {
    randomArr.push(getRandomNumber(9))

}
console.log(randomArr);
console.log(randomArr.length);

/*
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.
*/

const letterArr = ['a', 'b', 'c'];
console.log(letterArr);
for (let i = 0; i < letterArr.length; i++) {
    letterArr[i] = i + 1;
}

console.log(letterArr);


/*
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
*/

const arr3 = [1, 2, 3];
console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
    arr3[i]++;
}
console.log(arr3);

/*
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
*/
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);

/*
1. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
*/

const arr4 = [1, 2, 3];
console.log(arr4);
arr4.push(4, 5);
console.log(arr4);

/*
1. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.
*/

const getRandomArray = (arraySize, maxRandomNumber) => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * (maxRandomNumber + 1)))
    }
    return array;
}


const arr6 = getRandomArray(10, 10);
console.log(arr6);
arr6.splice(2, 3);
console.log(arr6, arr6.length);


/*
1. С помощью цикла for выведите в консоль числа от 11 до 33. */

// for (let i = 11; i <= 33; i++) {
//     console.log(i);

// }


/* 2. С помощью цикла for выведите в консоль нечетные числа в
промежутке от 1 до 99. */

// for (let i = 1; i <= 99; i++) {
//     i % 2 !== 0 ? console.log(i) : 0;
// }



/*3. С помощью цикла for выведите в консоль числа от 100 до 0.*/

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

/*
 4. Дано число num с неким начальным значением. Умножайте его на 3
столько раз, пока результат умножения не станет больше 1000.
Какое число получится? Посчитайте количество итераций,
необходимых для этого.
*/

let num = 2;
let count = 0;
do {
    num *= 3;
    count++

} while (num < 1000);

console.log(num, count);
/*
1. Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но
меньше 10.
1. Найдите сумму четных чисел от 2 до 100.
2. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
который будет по очереди выводить элементы этого массива в
консоль до тех пор, пока не встретится элемент со значением 0.
После этого цикл должен завершить свою работу.
*/

//1
const arr7 = [2, 5, 9, 15, 1, 4];
console.log(arr7);

arr7.forEach(element => {
    (element < 10 && element > 3) ? console.log(element) : 0;
});

//2
let sum = 0;
for (let i = 2; i <= 100; i += 2) {
    sum += i;
}

console.log(sum);

//3
let forString = '-';
for (let i = 1; i <= 9; i++) {
    forString += i + '-';

}
console.log(forString);


//4
const arr8 = [2, 5, 9, 0, 3, 1, 4];

for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] !== 0) {
        console.log(arr8[i]);
    } else {
        break;
    }

}




