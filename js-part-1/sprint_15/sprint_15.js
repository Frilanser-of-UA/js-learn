// Task 1
// Добавьте через addEventListener событие 'click' на параграф .p-1. При клике запускается стрелочная функция t01, которая при событии клик дописывает в .out-1 символ единица. Т.е. кликнули два раза, в .out-1 будет '11'.

const t01 = () =>{
const out1 = document.querySelector('.out-1');
out1.textContent += '1';
}

// Тут напишите событие.
const p01 = document.querySelector('.p-1');
p01.addEventListener('click', t01);

// Task 2
// Добавьте через addEventListener событие 'dblclick' на кнопку .b-2. При событии запускается стрелочная функция t02, которая окращивает .out-2 в backgroundColor 'orange'.

 const t02 = () => {
    const out2 = document.querySelector('.out-2');
    out2.style.backgroundColor = 'orange';
 }

// Тут напишите событие.
const b2 = document.querySelector('.b-2');
b2.addEventListener('click', t02);

// Task 3
// Добавьте через addEventListener событие 'mouseup' на кнопку .p-3. При событии запускается стрелочная функция t03, которая выводит в .out-3 строку 'mouseup'.

const t03 =  () => {
    const out3 = document.querySelector('.out-3');
    out3.textContent = 'mouseup';
 }

// Тут напишите событие.
const p3 = document.querySelector('.p-3');
p3.addEventListener('mouseup', t03);

// Task 4
// Добавьте через addEventListener событие 'mousedown' на кнопку .p-4. При событии  запускается стрелочная функция t04, которая при выводит в .out-4 строку 'mousedown'.

const t04 = () => {
    const out4 = document.querySelector('.out-4');
    out4.textContent = 'mousedown';
 }

// Тут напишите событие.
const p4 = document.querySelector('.p-4');
p4.addEventListener('mousedown', t04);

// Task 5
// Добавьте через addEventListener событие 'mouseover' на .block-5.  При событии запускается стрелочная функция t05, которая выводит в .out-5 строку 'mousedown'.

const t05 =  () => {
    const out5 = document.querySelector('.out-5');
    out5.textContent = 'mousedown';
 }

// Тут напишите событие.
const block5 = document.querySelector('.block-5');
block5.addEventListener('mouseover', t05);

// Task 6
// Добавьте через addEventListener событие 'mouseout' на .block-6.  При событии запускается стрелочная функция t06, которая добавляет классу .block-6 класс 'bg-orange'.

const block6 = document.querySelector('.block-6');
const t06 =  () => {
    block6.classList.add('bg-orange');
 }

// Тут напишите событие.
block6.addEventListener('mouseout', t06);

// Task 7
// Добавьте событие click на кнопку .b-7, по событию запускается стрелочная функция t07. Функция отключает событие contextmenu на блоке .block-7.

const t07 = () => {
    const block7 = document.querySelector('.block-7');
    block7.addEventListener('contextmenu',  (event) => {
        event.preventDefault();
    });
 }

// Тут напишите событие.
const b7 = document.querySelector('.b-7');
b7.addEventListener('click', t07);

// Task 8
// Добавьте событие mousemove на блок .block-8. При событии запускается стрелочная функция t08.

let w = 100;

const t08 = () => {
    w++;
    document.querySelector('.block-8').style.width = w + 'px';
}

// тут добавьте событие
const block8 = document.querySelector('.block-8');
block8.addEventListener('mousemove', t08);

// Task 9
// Добавьте событие click на .block-9. При клике запускается функция t09 (стрелочная). Функция при срабатывании поворачивает блок .block-9 на 15 градусов. 
// Т.е. после двух кликов будет блок повернут на 30 градусов.

// тут напишите функцию t09
const block9 = document.querySelector('.block-9');
let count = 15;
const t09 = () => {
    block9.style.transform = `rotate(${count}deg)`; 
    count += 15;
}
// тут добавьте событие
block9.addEventListener('click', t09);

// Task 10
// При клике на кнопке .b-10 запускается функция t10. Функция должна добавлять через addEventListener событие mousemove на блок .block-10. При срабатывании события запускается функция blockSize.


const blockSize = () => {
    let w = document.querySelector('.block-10').offsetWidth;
    w++;
    document.querySelector('.block-10').style.width = w + 'px';
}

const block10 = document.querySelector('.block-10');
const t10 = () => {
    block10.addEventListener('mousemove', blockSize);
}

document.querySelector('.b-10').addEventListener('click', t10);



// Task 11
// При клике на кнопке .b-11 запускается функция t11. Функция должна удалять через removeEventListener событие mousemove на блоке .block-10.

const t11 = () => {
    block10.removeEventListener('mousemove', blockSize);
}

document.querySelector('.b-11').addEventListener('click', t11);


// Task 12
// Добавьте на input.i-12 событие input с помощью addEventListener. При событии запускается стрелочная функция t12. Функция должна получать value из input.i-12 и выводить в .out-12.

// тут напишите функцию t12
const i12 = document.querySelector('.i-12');
const t12 = () => {
    const out12 = document.querySelector('.out-12');
    out12.textContent = i12.value;
}
// тут напишите событие
i12.addEventListener('input', t12);

// Task 13
// Добавьте событие copy на input.i-13. При срабатывании события запускается функция t13, которая выводит в .out-13 строку 'copy'.

const t13 = () => {
    const out13 = document.querySelector('.out-13');
    out13.textContent = 'copy';
}

// тут напишите событие

const i13 = document.querySelector('.i-13');
i13.addEventListener('copy', t13);

// Task 14
// Добавьте событие paste на input.i-14. При срабатывании события запускается функция t14, которая выводит в .out-14 вставленный в input.i-14 текст.

const i14 = document.querySelector('.i-14');
const t14 = () => {
    const out14 = document.querySelector('.out-14');
    out14.textContent = i14.value;
}

// тут напишите событие
i14.addEventListener('paste', t14);

// Task 15
// Добавьте событие cut на input.i-15. При срабатывании события запускается функция t15, которая добавляет .i-15 атрибут placeholder с текстом 'cut'

const i15 = document.querySelector('.i-15');
const t15 = () => {
    i15.setAttribute('placeholder', 'cut');
}

// тут напишите событие
i15.addEventListener('cut', t15);

// Task 16
// Добавьте событие focus на input.i-16. При срабатывании события запускается функция t16, которая добавляет .i-16 класс  'focus-input'.

const i16 = document.querySelector('.i-16');
const t16 = () => {
    i16.classList.add('focus-input');
}

// тут напишите событие
i16.addEventListener('focus', t16);

// Task 17
// Добавьте событие blur на input.i-16. При срабатывании события запускается функция t17, которая удаляет .i-16 класс  'focus-input'.

const t17 = () => {
    i16.classList.remove('focus-input');
}

// тут напишите событие
i16.addEventListener('blur', t17);

// Task 18
// Добавьте событие click на кнопку .b-18. По клику запускается стрелочная функция t18, которая ищет элемент с tabindex = 18 и делает элемент focus().

const t18 = () => {
const tabindex18 = document.querySelector('input[tabindex="18"]');
tabindex18.focus();
}

// тут напишите событие
const b18 = document.querySelector('.b-18');
b18.addEventListener('click', t18);

// Task 19
// Добавьте событие canсel на input .i-19. По клику запускается стрелочная функция t19, которая выводит в .out-19 текст 'Cancel'.

const t19 = () => {
    const out19 = document.querySelector('.out-19');
    out19.textContent = 'Cancel';
}

// тут напишите событие
const i19 = document.querySelector('.i-19');
i19.addEventListener('click', t19);

// Task 20
// Добавьте событие dragstart на .block-20. По событию запускается стрелочная функция t20. Функция выводит в .out-20 строку 'drag'.

const t20 = () => {
    const out20 = document.querySelector('.out-20');
    out20.textContent = 'drag';
}

// тут напишите событие
const block20 = document.querySelector('.block-20'); 
block20.addEventListener('dragstart', t20);