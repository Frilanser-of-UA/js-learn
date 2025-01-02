// iTGid.info - курс JS24/2

// В задачах, где говорится пробел - применяем символ пробела - нажатие на клавишу space.
// Там где говорится дефис - подразумевается черта на клавиатуре "минус", между символами 0 и =

// Task 01
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 4=4 3 2 1 0 3=4 3 2 1 0 2=4 3 2 1 0 1=4 3 2 1 0 0=4 3 2 1 0
// и выводит в .out-1.
// Напоминаю. Если можно избежать, то не делайте вывод на страницу внутри цикла.

const t01 = () => {
    let res1 = '';
    const out1 = document.querySelector('.out-1');
    for (let i = 0; i <= 4; i++) {
        res1 += (4 - i) + '=' + 4 + ' ';

        for (let k = 4; k >= 0; k--) {
            res1 += k + ' ';
            console.log(res1);
        }
    }
    out1.innerHTML = res1;

};

document.querySelector('.b-1').addEventListener('click', t01);

// Task 02
// Создайте функцию. Функция с помощью вложенных циклов создает строку:
// 0****<br>1****<br>2****<br>3****<br>4****<br>
// и выводит в .out-2 с помощью innerHTML

const t02 = () => {
    const out2 = document.querySelector('.out-2');
    let res2 = '';
    for (let i = 0; i <= 4; i++) {
        res2 += i;
        for (let k = 0; k < 4; k++) {
            res2 += '*';
        }
        res2 += '<br>'
    }
    out2.innerHTML = res2;
};

document.querySelector('.b-2').addEventListener('click', t02);


// Task 03
// Функция должна выводить прямоугольник на страницу состоящий из символов звездочка. В горизонтали 6 звездочек, количество линий - число, которое пользователь ввел в input.i-3.
// Перенос строки делайте с помощью тега br.

const t03 = () => {
    const out3 = document.querySelector('.out-3');
    let i3 = +document.querySelector('.i-3').value;
    let res3 = '';
    for (let i = 0; i < i3; i++) {
        for (let k = 0; k < 6; k++) {
            res3 += '*';
        }
        res3 += '<br>'
    }
    out3.innerHTML = res3;
};

document.querySelector('.b-3').addEventListener('click', t03);


// Task 04
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали 6 чисел от 5 до нуля, количество линий - число, которое пользователь ввел в input.i-4.
// Перенос строки делайте с помощью тега br.

const t04 = () => {
    const out4 = document.querySelector('.out-4');
    let i4 = +document.querySelector('.i-4').value;
    let res4 = '';
    for (let i = 0; i < i4; i++) {
        for (let k = 5; k >= 0; k--) {
            res4 += k + '_';
        }
        res4 += '<br>'
    }
    out4.innerHTML = res4;
};

document.querySelector('.b-4').addEventListener('click', t04);


// Task 05
// Функция должна выводить прямоугольник на страницу состоящий из чисел. В горизонтали числа от введенного в input.i-51 до нуля, количество линий - число, которое пользователь ввел в input.i-52.
// Перенос строки делайте с помощью тега br.

const t05 = () => {
    const out5 = document.querySelector('.out-5');
    let i51 = +document.querySelector('.i-51').value;
    let i52 = +document.querySelector('.i-52').value;
    let res5 = '';
    for (let i = 0; i < i52; i++) {
        for (let k = i51; k >= 0; k--) {
            res5 += k + '_';
        }
        res5 += '<br>';
    }
    out5.innerHTML = res5;
};

document.querySelector('.b-5').addEventListener('click', t05);


// Task 06
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-6

const t06 = () => {
    const out6 = document.querySelector('.out-6');
    let res6 = '';
    for (let i = 0; i < 3; i++) {
        res6 += '| ';
        for (let k = 0; k < 4; k++) {
            res6 += '* ';
        }
        res6 += '|<br>';
    }
    out6.innerHTML = res6;
};

document.querySelector('.b-6').addEventListener('click', t06);


// Task 07
// Функция должна с помощью циклов рисовать такую фигуру:
// и выводить в .out-7.


const t07 = () => {
    const out7 = document.querySelector('.out-7');
    let res7 = '';
    for (let i = 0; i <= 4; i++) {
        res7 += '| ';
        for (let k = 0; k < 4; k++) {
            if (i === 0 || i === 4) res7 += " - ";
            else res7 += " * ";
        }
        res7 += '|<br>';
    }
    out7.innerHTML = res7;

};

document.querySelector('.b-7').addEventListener('click', t07);


// Task 08
// Функция должна рисовать такую фигуру
//10x01x%
//10x01x
//10x01x
// и выводить в .out-08

const t08 = () => {
    const out8 = document.querySelector('.out-8');
    let res8 = '';
    for (let i = 0; i < 3; i++) {
        if (i == 0) res8 += '10x01x%';
        else res8 += '10x01x';
        res8 += '<br>';
    }
    out8.innerHTML = res8;
};

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Функция должна рисовать такую фигуру
// и выводить в .out-09

const t09 = () => {
    const out9 = document.querySelector('.out-9');
    let res9 = '';
    for (let i = 0; i < 6; i++) {
        if (i % 2 == 0) res9 += '010101';
        else res9 += '101010';
        res9 += '<br>';
    }
    out9.innerHTML = res9;
};

document.querySelector('.b-9').addEventListener('click', t09);


// Task 10
// Функция должна вывести в .out-10 такую строку:
// 5 0 4 1 3 2 2 3 1 4 0 5

const t10 = () => {
    const out10 = document.querySelector('.out-10');
    let res10 = '';
    for (let i = 0; i <= 5; i++) {
        res10 += (5 - i) + ' ' + i + ' ';

    }
    out10.innerHTML = res10;
};

document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Функция должна рисовать такую фигуру
// и выводить в .out-11

const t11 = () => {
    const out11 = document.querySelector('.out-11');
    let res11 = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= i; k++) {
            res11 += '*';
        }
        res11 += '<br>';

    }
    out11.innerHTML = res11;
};

document.querySelector('.b-11').addEventListener('click', t11);



// Task 12
// Функция должна рисовать такую фигуру
// и выводить в .out-12

const t12 = () => {
    const out12 = document.querySelector('.out-12');
    let res12 = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 4; k++) {
            if (k <= i) res12 += '* ';
            else res12 += '_ ';
        }
        res12 += '<br>';

    }
    out12.innerHTML = res12;

};

document.querySelector('.b-12').addEventListener('click', t12);


// Task 13
// Функция должна рисовать такую фигуру
// и выводить в .out-13


const t13 = () => {
    const out13 = document.querySelector('.out-13');
    let res13 = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= 10; k++) {
            res13 += k + i * 10 + '_';
        }
        res13 += '<br>';

    }
    out13.innerHTML = res13;
};

document.querySelector('.b-13').addEventListener('click', t13);


// Task 14
// Функция должна рисовать такую фигуру
// и выводить в .out-14


const t14 = () => {
    const out14 = document.querySelector('.out-14');
    let res14 = '';
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k <= 10; k++) {
            if (i === 0 && k !== 10) res14 += '0' + k + '_';
            else res14 += k + i * 10 + '_';
        }
        res14 += '<br>';

    }
    out14.innerHTML = res14;
};

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15
// Функция должна рисовать такую фигуру
// и выводить в .out-15


const t15 = () => {
    const out15 = document.querySelector('.out-15');
    let res15 = '';
    for (let i = 1; i <= 4; i++) {
        for (let k = 1; k <= i; k++) {
            res15 += k + '_';

        }
        res15 += '<br>';

    }
    out15.innerHTML = res15;
};

document.querySelector('.b-15').addEventListener('click', t15);


// Task 16
// Функция должна рисовать такую фигуру
// и выводить в .out-16


const t16 = () => {
    const out16 = document.querySelector('.out-16');
    let res16 = '';
    for (let i = 1; i <= 4; i++) {
        for (let k = 1; k <= i; k++) {
            res16 += i + '_';

        }
        res16 += '<br>';

    }
    out16.innerHTML = res16;
};

document.querySelector('.b-16').addEventListener('click', t16);


// Task 17
// Функция должна рисовать такую фигуру
// и выводить в .out-17


const t17 = () => {
    const out17 = document.querySelector('.out-17');
    let res17 = '';
    for (let i = 4; i > 0; i--) {
        for (let k = 1; k <= i; k++) {
            res17 += k + '_';

        }
        res17 += '<br>';

    }
    out17.innerHTML = res17;
};

document.querySelector('.b-17').addEventListener('click', t17);


// Task 18
// Функция должна рисовать такую фигуру
// и выводить в .out-18


const t18 = () => {
    const out18 = document.querySelector('.out-18');
    let res18 = '';
    for (let i = 4; i >= 0; i--) {
        for (let k = 0; k <= 4; k++) {
            if (k >= i) res18 += k + '_';
            else res18 += '=' + '_';
        }
        res18 += '<br>';

    }
    out18.innerHTML = res18;
};

document.querySelector('.b-18').addEventListener('click', t18);



// Task 19
// Функция должна рисовать такую фигуру
// и выводить в .out-19


const t19 = () => {
    const out19 = document.querySelector('.out-19');
    let res19 = '';
    for (let i = 0; i <= 4; i++) {
        for (let k = 0; k <= 4; k++) {
            if (k >= i) res19 += k + '_';
            else res19 += '=' + '_';
        }
        res19 += '<br>';

    }
    out19.innerHTML = res19;
};

document.querySelector('.b-19').addEventListener('click', t19);


// Task 20
// Функция должна рисовать такую фигуру
// и выводить в .out-20

const t20 = () => {
    const out20 = document.querySelector('.out-20');
    let res20 = '';
    let num1 = 4;
    let num2 = 6;
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 10; k++) {
            if (k >= num1 && k < num2) res20 += '*_';
            else res20 += k + '_';
        }
        num1 = num1 - 1;
        num2 = num2 + 1;
        res20 += '<br>';

    }
    out20.innerHTML = res20;
};

document.querySelector('.b-20').addEventListener('click', t20);
