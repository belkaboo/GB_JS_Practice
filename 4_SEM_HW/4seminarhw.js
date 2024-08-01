/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

function CheckOddOfNumbers(startNumber, stopNumber) {
    for (let i = startNumber; i <= stopNumber; i++) {
        if (i === 0) console.log(`${i} - это ноль`);
        else if ((i % 2) === 0) console.log(`${i} - четное число`);
        else console.log(`${i} - нечетное число`);

    }
}

CheckOddOfNumbers(0, 11);


/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2)
console.log(array);

/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/


const getRandomArray = (arraySize, maxRandomNumber) => {
    const array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * (maxRandomNumber + 1)))
    }
    return array;
}

const SumOfArrayElements = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const arrayOfNumbers = getRandomArray(5, 9);

console.log(arrayOfNumbers);
console.log(`Cумма элементов - ${SumOfArrayElements(arrayOfNumbers)}`);
console.log(`Минимальное число - ${Math.min(...arrayOfNumbers)}`);
console.log(`Есть ли число 3 - ${arrayOfNumbers.includes(3) ? true : false}`);



/*
*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/


function PrintSlideClg(rows) {
    let slide = '';
    for (let i = 0; i < rows; i++) {
        slide += 'x';
        console.log(slide);
    }
}

PrintSlideClg(20);



