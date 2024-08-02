/*
1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”
*/

const daysOfWeek = {
    1: 'mon',
    2: 'tue',
    3: 'wed',
    4: 'thu',
    5: 'fri',
    6: 'sat',
    7: 'sun',
}
console.log(daysOfWeek[2]);

/*
2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.
*/

const user = {
    name: 'MyName',
    surname: 'MaSurname',
    age: 12,
}

console.log(user.surname + '-' + user.name + '-' + user.age);


/*
3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры
*/

user.seconName = '';

/*
4. Удалите свойство surname
*/

delete (user.surname);

/*
1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.
*/

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

const mer = {};
for (let i = 0; i < arr1.length; i++) {
    mer[arr1[i]] = arr2[i];

}
console.log(mer);

const merjedObj = arr1.reduce((acc, element, index) => {
    acc[element] = arr2[index];
    return acc;
}, {});

console.log(merjedObj);


/*
1. Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.
*/
const obj = { x: 1, y: 2, z: 3 };

for (const key in obj) {
    obj[key] *= obj[key]
}

console.log(obj);

/*
Создать массив состоящий из 3х объектов товаров
id
название
описание
цена
Вывести в консоль все названия товаров
*/

const products = [
    {
        id: 1,
        title: 'tittle1',
        discription: 'disc123',
        price: 123,

    },
    {
        id: 2,
        title: 'tittle2',
        discription: 'disc1234',
        price: 345,

    },
    {
        id: 3,
        title: 'tittle3',
        discription: 'disc12345',
        price: 567,

    }
]

products.forEach(element => {
    console.log(element.title);
});