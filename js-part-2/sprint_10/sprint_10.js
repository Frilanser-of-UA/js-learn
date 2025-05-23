// iTGid.info - курс JS24/2


// Task 01
// Напишите функцию, которая принимает строку как аргумент и возвращает длину строки. 

const t01 = (str) => {
    return str.length;
}

document.querySelector('.b-1').addEventListener('click', () => {
    document.querySelector('.out-1').textContent = t01('hello');
});


// Task 02
// По изменению range.r-2 запускается функция. Функция должна выводить в .out-2 символ строки s2 под индексом выбраны на .r-2. Т.е. если выбрано число 0 то будет выведен символ "с" со строки. 

let s2 = 'синзуны';

const t02 = () => {
    const r2 = document.querySelector('.r-2').value;
    const out2 = document.querySelector('.out-2');
    out2.textContent = s2[r2];

}

document.querySelector('.r-2').addEventListener('input', t02);


// Task 03
// По нажатию кнопки запускается функция, которая получает значение из input.i-3 строку и проверяет ее наличие в строке s3. Функция выводит true или false в .out-3.


let s3 = 'суилик';

const t03 = () => {
    const i3 = document.querySelector('.i-3').value;
    const out3 = document.querySelector('.out-3');
    out3.textContent = s3.includes(i3);
}

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// Напишите функцию, которая принимает строку как аргумент и если длина строки меньше 10 то создает новую строку на основе исходной с дополненной нулями до длины 10. Функция должна возвращать строку. Если длина строки 10 и выше - то возвращать строку без изменений.
// Например - функция принимает строку 'abbadona' ее длина 8, функция должна возвратить строку 'abbadona00'. 


const t04 = (str) => {
    let res04 = '';
    if (str.length < 10) {
        for (let i = 0; i < 10 - str.length; i++) {
            res04 += '0';
        }
        return str + res04;
    } else return str;

}

document.querySelector('.b-4').addEventListener('click', () => {
    document.querySelector('.out-4').textContent = t04('hello');
});


// Task 05
// Напишите функцию, которая принимает строку как аргумент и если длина строки меньше 10 то создает новую строку на основе исходной с дополненной нулями до длины 10. Функция должна возвращать строку. Если длина строки 10 и выше - то возвращать строку без изменений.
// Например - функция принимает строку 'abbadona' ее длина 8, функция должна возвратить строку '00abbadona'. 


const t05 = (str) => {
    let res05 = '';
    if (str.length < 10) {
        for (let i = 0; i < 10 - str.length; i++) {
            res05 += '0';
        }
        return res05 + str;
    } else return str;
}

document.querySelector('.b-5').addEventListener('click', () => {
    document.querySelector('.out-5').textContent = t05('hello');
});



// Task 06
// Напишите функцию, которая на основе строки t6 создает новую строку, где все символы на четных позициях заменены на нуль. Функция должна возвращать новую строку. 

let t6 = 'Рессан';

const t06 = () => {
    let res06 = '';
    for (let i = 0; i < t6.length; i++) {
        if (i % 2 === 0) res06 += '0';
        else res06 += t6[i];
    }
    return res06;
}


document.querySelector('.b-6').addEventListener('click', () => {
    document.querySelector('.out-6').textContent = t06();
});



// Task 07
//  Напишите функцию, которая на основе строки s7 создает новую строку, где все символы идут в обратном порядке (реверсная строка). Т.е. если исходная строка 'Abcd' то реверсная должна быть 'dcbA'. Функция должна выводить результат в .out-7.

let s7 = 'ксилл';

const t07 = () => {
    const out7 = document.querySelector('.out-7');
    let res07 = s7.split('').reverse().join('');
    out7.textContent = res07;
}

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Напишите функцию, которая на основе s8 создает новую строку, где все вхождения символа '_' заменены на символ пробела ' '. Строка результат выводит в .out-8.

let s8 = 'И_тогда_сыновья_Света,_каждые_на_своей_звезде,_начнут_бороться';

const t08 = () => {
    const out8 = document.querySelector('.out-8');
    let res08 = s8.replaceAll('_', ' ');
    out8.textContent = res08;
}

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Напишите функцию, которая проверяет, что вводимая строка - палиндром. Функция возвращает true/false. Функция должна не обращать внимание на регистр.

let s9 = 'сианкор рокнаис';

const t09 = (str) => {
    let newSt09 = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === newSt09
}

document.querySelector('.b-9').addEventListener('click', () => {
    document.querySelector('.out-9').innerHTML = t09(s9);
});



// Task 10
// Напишите функцию, которая с помощью метода substring получает слово "Вселенной" из строки s10 и возвращает его.

let s10 = 'Ассента звезды Суин, расположенной на краю их Вселенной.';

const t10 = () => {
    return s10.substring(46, 55);
}

document.querySelector('.b-10').addEventListener('click', () => {
    document.querySelector('.out-10').textContent = t10();
});


// Task 11
// Напишите функцию, которая с помощью метода substring получает слово "Два ксилла" из строки s11 и возвращает его.

let s11 = 'Два ксилла были захвачены мисликами врасплох';

const t11 = () => {
    return s11.substring(0, 10);
}

document.querySelector('.b-11').addEventListener('click', () => {
    document.querySelector('.out-11').textContent = t11();
});

// Task 12
// Напишите функцию, которая с помощью метода substring получает слово "заморозить" из строки s12 и возвращает его.

let s12 = 'чью красную кровь нельзя заморозить';

const t12 = () => {
    return s12.substring(25, 35);
}

document.querySelector('.b-12').addEventListener('click', () => {
    document.querySelector('.out-12').textContent = t12();
});

// Task 13
// Напишите функцию, которая находит индекс ПОСЛЕДНЕГО вхождения подстроки 'лл' в строку s13 и выводит в .out-13. 

let s13 = 'Итак, мислики были обнаружены менее чем в миллионе световых лет от Эллы.';

const t13 = () => {
    document.querySelector('.out-13').textContent = s13.lastIndexOf('лл');
}

document.querySelector('.b-13').addEventListener('click', t13);

// Task 14
// Напишите функцию, которая проверяет, что в строку входит символ '@'. Возвращает true/false.

const t14 = (str) => {
    return str.includes('@');
}

document.querySelector('.b-14').addEventListener('click', () => {
    document.querySelector('.out-14').innerHTML = t14('hello@mail');
});

// Task 15
// Напишите функцию, которая проверяет, что в строку входит символ '@' и данный символ не является первым или последним символом строки. Возвращает true/false. 

const t15 = (str) => {
    return str.includes('@') && str.indexOf('@') !== 0 && str.indexOf('@') !== str.length - 1;
}

document.querySelector('.b-15').addEventListener('click', () => {
    document.querySelector('.out-15').innerHTML = t15('hello@mail');
});

// Task 16
// Напишите функцию, которая на основе строки s16 создает новую строку, где '-73°C' заменено на '200K'. Обратите внимание данная подстрока может встречаться один раз и быть расположена в любом месте строки s16. Функция должна вывести результат в .out-16. Напоминаю, что обозначение температур - знак цельсия, кельвина - латиница.

let s16 = 'Теперь иссы умели уничтожать мисликов: достаточно было подвергнуть их облучению, которое хотя бы на десять секунд поднимало окружающую температуру до -73°C.';

const t16 = () => {
    document.querySelector('.out-16').textContent = s16.replace('-73°C', '200K');
}

document.querySelector('.b-16').addEventListener('click', t16);

// Task 17
// Напишите функцию, которая с помощью slice создает на базе s17 новую строку с содержимым 'Элле'. Выводит результат в .out-17.

let s17 = 'Мало-помалу я прижился на Элле sdsd';

const t17 = () => {
    const out17 = document.querySelector('.out-17');
    out17.textContent = s17.slice(26, 30);
}

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Напишите функцию, которая с помощью slice создает на базе s18 новую строку с содержимым 'Ассза'. Выводит результат в .out-18.

let s18 = 'Ассза посадил реоб на маленькую площадку';

const t18 = () => {
    const out18 = document.querySelector('.out-18');
    out18.textContent = s18.slice(0, 5);
}

document.querySelector('.b-18').addEventListener('click', t18);


// Task 19
// Напишите функцию, которая с помощью slice создает на базе s19 новую строку с содержимым 'на мислика'. Выводит результат в .out-19.

let s19 = '— Взгляни на мислика, — сказал Ассза.';


const t19 = () => {
    const out19 = document.querySelector('.out-19');
    out19.textContent = s19.slice(10, 20);

}

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Напишите функцию, которая в .out-20 выводит символы с кодом (fromCharCode) от foo_20 до bar_20 включительно. Разделитель - пробел.

let foo_20 = 35;
let bar_20 = 49;


const t20 = () => {
    const out20 = document.querySelector('.out-20');
    out20.textContent = String.fromCharCode(foo_20, bar_20).split('').join(' ');
}

document.querySelector('.b-20').addEventListener('click', t20);