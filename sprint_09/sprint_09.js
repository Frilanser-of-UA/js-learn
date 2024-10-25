// Task 1
// Создана функция t01. Функция запускается при нажатии .b-1. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется 10 раз. Функция выводит в .out-1 созданную строку. Обращаю внимание - функция должна гарантировать один и тот же результат в не зависимости от количества запусков. Данное требование справедливо для всех функций далее.
// т.е. результат _*_*_*_*_*_*_*_*_*_*

function t01 () {
let k1 = 0;
let item1 = '';
while(k1 < 10){
    item1 += '_*';
    k1++;
}
document.querySelector('.out-1').textContent = item1;
}

document.querySelector('.b-1').onclick = t01;


// Task 2
// Создана функция t02. Функция запускается при нажатии .b-2. Напишите код внутри функции, который создает c помощью цикла while строку, где шаблон '_*' повторяется число раз указанное в .input-2. Функция выводит в .out-2 созданную строку.
function t02 () {
    let k2 = 0;
    let item2 = '';
    let i2 = +document.querySelector('.i-2').value
    while(k2 < i2){
        item2 += '_*';
        k2++;
    }
    document.querySelector('.out-2').textContent = item2;
}

document.querySelector('.b-2').onclick = t02;

// Task 3
// Создана функция t03. Функция запускается при нажатии .b-3. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от 0 до указанного числа с разделителем - подчеркивание. Выводит созданную строку в .out-3.
// Введено число 5, получаем строку 0_1_2_3_4_5_

function t03 () {
    let k3 = 0;
    let item3 = '';
    let i3 = +document.querySelector('.i-3').value
    while(k3 <= i3){
        item3 += k3 + '_';
        k3++;
    }
    document.querySelector('.out-3').textContent = item3;
}

document.querySelector('.b-3').onclick = t03;


// Task 4
// Создана функция t04. Функция запускается при нажатии .b-4. Напишите код внутри функции, который получает число из input и с помощью цикла while создает строку от полученного числа до нуля, с разделителем - подчеркивание. Выводит созданную строку в .out-4.
// Введено число 5, получаем строку 5_4_3_2_1_0_

function t04 () {
    let k4 = 0;
    let item4 = '';
    let i4 = +document.querySelector('.i-4').value
    while(i4 >= k4){
        item4 += i4 + '_';
        i4--;
    }
    document.querySelector('.out-4').textContent = item4;
}

document.querySelector('.b-4').onclick = t04;


// Task 5
// Создана функция t05. Функция запускается при нажатии .b-5. Напишите код внутри функции, который читает ЧИСЛО из input.i-5 и создает строку от 0 до введенного числа с шагом 2. Разделитель - подчеркивание. 
// Введено число 6, получаем строку 0_2_4_6_
// Введено число 4, получаем строку 0_2_4_
// При проверке в input будут вводиться только четные числа.
// Строка выводится в .out-5. Для решения используйте цикл while.

function t05 () {
    let k5 = 0;
    let item5 = '';
    let i5 = +document.querySelector('.i-5').value
    while(k5 <= i5){
        item5 += k5 + '_';
        k5 = k5 + 2;
    }
    document.querySelector('.out-5').textContent = item5;
}

document.querySelector('.b-5').onclick = t05;


// Task 6
// Создана функция t06. Функция запускается при нажатии .b-6. Напишите код внутри функции. Код должен выводить в .out-6 количество чисел, которые делятся на 7 с остатком нуль, в диапазоне от 0 (включительно) до 100 (включительно). Решите задачу циклом while.

function t06 () {
    let k6 = 0;
    let item6 = 0;
    while(k6 <= 100){
        if(k6 % 7 == 0) item6++;
            k6++;
    }
    document.querySelector('.out-6').textContent = item6;
}

document.querySelector('.b-6').onclick = t06;


// Task 7
// Создана функция t07. Функция запускается при нажатии .b-7. Напишите код внутри функции. Код содержит цикл while от 10 (включительно) до 99 (включительно) и создает строку, куда выводит числа в которых сумма цифр десятков и единиц равна 8. Разделитель подчеркивание.
// т.е. выводятся 17_26_ и далее

function t07 () {
    let k7 = 10;
    let item7 = '';
   
    
    while(k7 <= 99){
        let summ = k7 % 10 + Math.floor (k7 / 10);
        if(summ === 8) item7 += k7 + '_';
        k7++;
    }
    document.querySelector('.out-7').textContent = item7;
}

document.querySelector('.b-7').onclick = t07;


// Task 8
// Создана функция t08. Функция запускается при нажатии .b-8. Функция получает число из input.i-8 и создает строку вида 0_**_1_**_ до введенного числа включительно. Строку выводит в .out-8.
// Например ввели 3, получаем строку 0_**_1_**_2_**_3_**_

function t08 () {
    let k8 = 0;
    let item8 = '';
    let i8 = +document.querySelector('.i-8').value
    while(k8 <= i8){
        item8 +=  k8 + '_**_';
        k8++;
    }
    document.querySelector('.out-8').textContent = item8;
}

document.querySelector('.b-8').onclick = t08;

// Task 9
// Создана функция t09. Функция запускается при нажатии .b-9. Напишите код внутри функции. Код получает число из input.i-9 и формирует строку, которая при выводе на страницу рисует прямоугольник. Ширина прямоугольника - 6 звездочек, а высота определяется введенным числом. Выведите строку в .out-9.
// Например ввели число 3. Необходимо сформировать строку '******<br>******<br>******<br>'


function t09 () {
    let k9 = 0;
    let item9 = '';
    let i9 = +document.querySelector('.i-9').value
    while(k9 < i9){
        item9 +=  '******<br>';
        k9++;
    }
    document.querySelector('.out-9').innerHTML = item9;
}

document.querySelector('.b-9').onclick = t09;


// Task 10
// Создана функция t10. Функция запускается при нажатии .b-10. Напишите код внутри функции. Код получает число из input.i-10 и создает строку от 0 до введенного числа включительно, где разделитель после четных чисел знак =, а после не четных знак минус. Строка выводится в .out-10. Применяйте цикл while.
// Например введено число 5, необходимо сформировать строку '0=1-2=3-4=5-'

function t10 () {
    let k10 = 0;
    let item10 = '';
    let symbol = ''
    let i10 = +document.querySelector('.i-10').value
    while(k10 <= i10){
        if(k10 % 2 == 0) symbol = '=';
        else symbol = '-';
        item10 +=  k10 + symbol;
        k10++;
    }
    document.querySelector('.out-10').textContent = item10;
    
}

document.querySelector('.b-10').onclick = t10;


// Task 11
// Создана функция t11. Функция запускается при нажатии .b-11. Напишите код, который формирует строку вида 11_21_ до 91_ включительно, с помощью цикла do while. Выведите строку в .out-11.

function t11 () {
    let k11 = 11;
    let item11 = '';
    do{
        item11 +=  k11 + '_';
        k11 = k11 + 10;
    } while(k11 <= 99);
    document.querySelector('.out-11').textContent = item11;
}

document.querySelector('.b-11').onclick = t11;


// Task 12
// Создана функция t12. Функция запускается при нажатии .b-12. Напишите код внутри функции, который формирует строку с 77_74_71_ до 35_. Т.е. от 77 до 35 с шагом 3. Разделитель - подчеркивание. Решите задачу с помощью do while. Строку выведите в .out-12.

function t12 () {
    let k12 = 77;
    let item12 = '';
    do{
        item12 +=  k12 + '_';
        k12 = k12 - 3;
    } while(k12 >= 35);
    document.querySelector('.out-12').textContent = item12;
    
}

document.querySelector('.b-12').onclick = t12;


// Task 13
//  Создана функция t13. Функция запускается при нажатии .b-13. Напишите код внутри функции, который получает разделитель из select.s-13 и создает строку от 0 до 10 с выбранным разделителем. Выведите строку в .out-13. Применяйте цикл do while.
// Например выбран разделитель =, получим строку 0=1=2=3=4=5=6=7=8=9=10=


function t13 () {
    let k13 = 0;
    let item13 = '';
    let s13 = document.querySelector('.s-13').value;
    do{
        item13 +=  k13 + s13;
        k13++;
    } while(k13 <= 10);
    document.querySelector('.out-13').textContent = item13;
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Создана функция t14. Функция запускается при изменении input.range-14, код в функции должен получать value из input и создавать строку от 0 до полученного числа, шаг 1 и разделитель пробел. Строка должна выводиться в .out-14. Применяйте цикл do while.


function t14 () {
    let k14 = 0;
    let item14 = '';
    let range14 = document.querySelector('.range-14').value;
    do{
        item14 +=  k14 + ' ';
        k14++;
    } while(k14 <= range14);
    document.querySelector('.out-14').textContent = item14;
}

document.querySelector('.range-14').oninput = t14;


// Тask 15
// Создана функция t15. Функция запускается при нажатии .b-15. Напишите код внутри функции, который записывает в каждый div.d-15 число 0 (очищая предыдущее содержимое). Применяйте цикл do while.

function t15() {
    let divs15 = document.querySelectorAll('.d-15');
    let k15 = 0;
   
    do {
        divs15[k15].textContent = 0;
        k15++;
    } while (k15 < divs15.length);
}

document.querySelector('.b-15').onclick = t15;


// Task 16
// Создана функция t16. Функция запускается при нажатии .b-16. Напишите код внутри функции, который записывает в каждый div.d-16 число (очищая предыдущее содержимое). Применяйте цикл do while. Т.е. в первом div.d-16 выведите  число 1, во второй - число 2 и т.д.


function t16 () {
    let divs16 = document.querySelectorAll('.d-16');
    let k16 = 0;
    do {
        if(k16 % 2 == 0) divs16[k16].textContent = 1;
        else divs16[k16].textContent = 2;
        k16++;
    } while (k16 < divs16.length);
}

document.querySelector('.b-16').onclick = t16;

// Task 17
// Создана функция t17. Функция запускается при нажатии .b-17. Напишите код внутри функции, который записывает в каждый div.d-17 число в начало текста. Применяйте do while.
// т.е. был <div>one</div> после выполнения цикла должно быть <div>1. one</div>
// т.е. был <div>two</div> после выполнения цикла должно быть <div>2. two</div>
// т.е. был <div>three</div> после выполнения цикла должно быть <div>3. three</div>



function t17 () {
    let divs17 = document.querySelectorAll('.d-17');
    let k17 = 0;
    
    do {
        divs17[k17].textContent = k17 + '. ' + divs17[k17].textContent;
        k17++;
    } while (k17 < divs17.length);
}

document.querySelector('.b-17').onclick = t17;


// Task 18
// Напишите в функции t18 код, который с помощью цикла do while формирует строку 1 10 2 20 3 30 и так далее до 10 100 . Выведите строку в .out-18.

function t18 () {
   let k18 = 1;
   let item18 = '';
   do{
    item18 += (k18 + ' ') + (k18 * 10) + ' ';
    k18++;
   }while(k18 <= 10);
   document.querySelector('.out-18').textContent = item18;
}

document.querySelector('.b-18').onclick = t18;

// Task 19
// Напишите в функции t19 код, который с помощью цикла do while формирует строку 0 10 1 9 2 8 3 7 4 6 5 5 6 4 7 3 8 2 9 1 10 0 . Выведите строку в .out-19.


function t19() {
    let k19 = 0;
    let item19 = '';
    do{
     item19 += k19 + ' ' + (10 - k19) + ' ';
     k19++;
    }while(k19 <= 10);
    document.querySelector('.out-19').textContent = item19;
}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Получите все td с классом .price, c помощью querySelectorAll(). В функции посчитайте сумму товаров в данных ячейках и выведите в ячейку .total. Примените цикл do while.

let tdPrice = document.querySelectorAll('.price');
let summ = 0;

function t20() {
    let k20 = 0;
    do{
        summ += +tdPrice[k20].textContent;
        k20++;
    }while(k20 < tdPrice.length);
    document.querySelector('.total').textContent = summ;
}

document.querySelector('.b-20').onclick= t20;