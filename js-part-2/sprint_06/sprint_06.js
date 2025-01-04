// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =


// Task 01
// Создайте функцию, которая получает аргумент число n и с помощью Array создает пустой массив длины n. Функция должна возвращать созданный массив.

const t01 = (n) => {
    const arr_01 = Array(n);
    return arr_01;
}

document.querySelector('.b-1').addEventListener('click', () => console.log(t01(5)));


// Task 02
// Изучите, как работает функция t02. 

const t02 = () => {
    const arr = [22, 33, 44, 55, 66, 77, 88];
    return arr.fill(0, 2, 4);
}

document.querySelector('.b-2').addEventListener('click', () => console.log(t02()));


// Task 03
// Напишите функцию, которая принимает число как аргумент и заполняет массив arr_03 с 3 по 7 индекс (оба включительно). Функция должна возвращать данный массив.

let arr_03 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
console.log(arr_03);

const t03 = (n) => {
    return arr_03.fill(n, 3, 8);
}

document.querySelector('.b-3').addEventListener('click', () => console.log(t03(999)));



// Task 04
//  Напишите функцию, которая при каждом запуске выводит по очереди в .out-4 символ 1 или 2. Т.е. нажали один раз - вывели 1. Нажали второй раз. Вместо единицы - двойка, затем опять 1 и т.д.

const t04 = () => {
    const out4 = document.querySelector('.out-4');
    if (out4.textContent == 2 || out4.textContent == '') out4.textContent = 1;
    else out4.textContent = 2;
    return out4;
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Напишите функцию, которая принимает массив и возвращает массив с индексами исходного.

let arr_05 = [100, 200, 300];
const t05 = (arr) => {
    let res_05 = [];
    for (let i = 0; i < arr.length; i++) {
        res_05.push(i);
    }
    return res_05;
}

document.querySelector('.b-5').addEventListener('click', () => console.log(t05(arr_05)));



// Task 06
// Напишите функцию, которая принимает массив и возвращает массив с индексами исходного тех элементов, что равны 10.

let arr_06 = [0, 10, 10, 0, 0, 1, 10];

const t06 = (arr) => {
    let res_06 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 10) res_06.push(i);
    }
    return res_06;
}

document.querySelector('.b-6').addEventListener('click', () => console.log(t06(arr_06)));


// Task 07
//  Напишите функцию, которая сравнивает два массива и если у них одинаковая длина, одинаковый порядок элементов и значения одинаковы (строгое сравнение) возвращает true. Если нет - false.

const t07 = (a, b) => {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

document.querySelector('.b-7').addEventListener('click', () => console.log(t07([1, 3], [1, 3])));


// Task 08
//  Напишите функцию, которая сравнивает два массива и если у них одинаковая длина, и значения одинаковы (строгое сравнение) возвращает true. Если нет - false.


const t08 = (a, b) => {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

document.querySelector('.b-8').addEventListener('click', () => console.log(t08([1, 3], [3, 1])));


// Task 09
//  Напишите функцию, которая проверяет, что в массиве есть минимум одно число 1 и минимум одно число 2. Возвращает true, false.


const t09 = (arr) => {
    if (arr.includes(1, 2)) return true;
    return false;
}

document.querySelector('.b-9').addEventListener('click', () => console.log(t09([1, 2, 3, 1, 2, 3])));


// Task 10
// Напишите функцию, которая проверяет что в первый массив входят все числа со второго. Возвращает true/false.

const t10 = (a, b) => {
    for (let i = 0; i < b.length; i++) {
        if (a.indexOf(b[i]) == -1) return false;
    }
    return true;
}

document.querySelector('.b-10').addEventListener('click', () => console.log(t10([1, 2, 3, 1, 2, 3], [1, 2])));

