// iTGid.info - курс JS24/2


// Task 01
// По нажатию кнопки запускается функция, которая создает пустой Map и возвращает его.

const t01 = () => {
    return new Map();
}

document.querySelector('.b-1').addEventListener('click', () => {
    console.log(t01());
});


// Task 02
// По нажатию кнопки запускается функция, которая получает ключ из input.i-21 и значение из input.i-22 и добавляет его в m2. Выводит map в консоль.

let m2 = new Map();

const t02 = () => {
    let i21 = document.querySelector('.i-21').value;
    let i22 = document.querySelector('.i-22').value;
    m2.set(i21, i22);
    console.log(m2);
}

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// По нажатию кнопки запускается функция, которая получает ключ из input.i-3 и проверяет его наличие в m3. Результат проверки выводится .out-3. Обратите внимание на то, как можно заполнить Map с помощью массива.

let m3 = new Map([['one', 1], ['two', 2], ['three', 3], ['four', 4]]);

const t03 = () => {
    let i3 = document.querySelector('.i-3').value;
    const out3 = document.querySelector('.out-3');
    out3.textContent = m3.has(i3);
}

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// По нажатию кнопки запускается функция, которая получает ключ из input.i-4 и удаляет запись с таким ключом в m4. Функция должна выводить m4 в консоль.

let m4 = new Map([['one', 1], ['two', 2], ['three', 3], ['four', 4]]);

const t04 = () => {
    let i4 = document.querySelector('.i-4').value;
    m4.delete(i4);
    console.log(m4);
}

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// По нажатию кнопки запускается функция, которая очищает m4  и выводит в консоль.


const t05 = () => {
    m4.clear();
    console.log(m4);
}

document.querySelector('.b-5').addEventListener('click', t05);



// Task 06
// Напишите функцию, которая получает ключ из s61, тип ключа из s62 и значение из s63 и добавляет в m6. Выводит m6 в консоль. 

let m6 = new Map();

const t06 = () => {
    let s61 = document.querySelector('.s61').value;
    let s62 = document.querySelector('.s62').value;
    let s63 = document.querySelector('.s63').value;
    if (s62 === 'number') m6.set(+s61, s63);
    else m6.set(s61, s63);
    console.log(m6);
}

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Напишите функцию, которая получает ключ из s71, регистр ключа из s72 и значение из s73 и добавляет в m7. Выводит m7 в консоль. 

let m7 = new Map();

const t07 = () => {
    let s71 = document.querySelector('.s71').value;
    let s72 = document.querySelector('.s72').value;
    let s73 = document.querySelector('.s73').value;
    if (s72 === 'uc') m7.set(s71.toUpperCase(), s73);
    else if (s72 === 'lc') m7.set(s71.toLowerCase(), s73);
    console.log(m7);
}

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Сознан Map m8. Напишите функцию, которая выводит ключи из m8 в .out-8 через пробел.

let m8 = new Map([['k1', 22], ['k2', 33]]);

const t08 = () => {
    const out8 = document.querySelector('.out-8');
    let arr8 = [];
    for (let item8 of m8.keys()) {
        arr8.push(item8);
    }
    out8.textContent = arr8.join(' ');
}

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Сознан Map m9. Напишите функцию, которая выводит значения из m9 в .out-9 через пробел.

let m9 = new Map([['k1', 22], ['k2', 33]]);

const t09 = () => {
    const out9 = document.querySelector('.out-9');
    let arr9 = [];
    for (let item9 of m9.values()) {
        arr9.push(item9);
    }
    out9.textContent = arr9.join(' ');
}

document.querySelector('.b-9').addEventListener('click', t09);



// Task 10
// Давайте убедимся, что Map очень полезная штука. Изучите как выводится объект obj10 и map m10.

let obj10 = {
    'Robocop': 1987,
    'Predator': 1987,
    9: 2000
}

let m10 = new Map([['Robocop', 1987], ['Predator', 1987], [9, 2000]]);

const t10 = () => {
    console.clear();
    console.log('Object:');
    console.log(obj10);
    for (let key in obj10) console.log(key);

    console.log('Map:');
    console.log(m10);
    for (let k of m10.keys()) console.log(k);
}

document.querySelector('.b-10').addEventListener('click', t10);

