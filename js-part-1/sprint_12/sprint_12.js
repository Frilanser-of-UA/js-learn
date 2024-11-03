// Task 1
// В начальных спринтах мы создавали элементы с помощью innerHTML. Давайте вспомним как это было. Создайте заголовок второго уровня с текстом 'Sprint 12'. Поместите элемент в .out-1 с помощью innerHTML.

function t01 () {
    document.querySelector('.out-1').innerHTML = "<h2>Sprint 12</h2>"
}

document.querySelector('.b-1').onclick = t01;

// Task 2
// Создание через innerHTML не гибкое, давайте научимся более гибким способам создания элементов в JavaScript. Напишите функцию t02, которая создает через createElement элемент h2, затем через textContent добавьте в созданный элемент текст 'Sprint 12', после чего добавьте через append элемент в .out-2.

function t02 () {
const out2 = document.querySelector('.out-2');
const createEl2 = document.createElement('h2');
createEl2.textContent = 'Sprint 12';
out2.append(createEl2);
}


document.querySelector('.b-2').onclick = t02;


// Task 3
// Функция должна создавать через createElement элемент img, в качестве атрибута src укажите './images/harconen.png'. Добавьте через append созданное изображение в .out-3.

function t03 () {
    const out3 = document.querySelector('.out-3');
    const createEl3 = document.createElement('img');
    createEl3.src = './images/harconen.png';
    out3.append(createEl3);
}


document.querySelector('.b-3').onclick = t03;


// Task 4
// Функция должна создавать через createElement элемент img, в качестве атрибута src укажите './images/harconen2.png'. Добавьте через classList класс 'round-img'.  Добавьте через append созданное изображение в .out-4.

function t04 () {
    const out4 = document.querySelector('.out-4');
    const createEl4 = document.createElement('img');
    createEl4.src = './images/harconen2.png';
    createEl4.classList.add('round-img');
    out4.append(createEl4);
}


document.querySelector('.b-4').onclick = t04;


// Task 5
// Функция должна создавать через createElement элемент input. Задайте атрибут type="number", задайте значение value="0", и добавьте через classList класс .i-5. Добавьте для элемента cвойство oninput равное t06. Через append добавьте элемент в .out-5. 

function t05 () {
    const out5 = document.querySelector('.out-5');
    const createEl5 = document.createElement('input');
    createEl5.type = 'number';
    createEl5.value = '0';
    createEl5.classList.add('i-5');
    createEl5.oninput = t06;
    out5.append(createEl5);
}


document.querySelector('.b-5').onclick = t05;


// Task 6
// Данная фукнция автоматически будет срабатывать если таск 5 выполнен корректно.

function t06 () {
    document.querySelector('.out-6').textContent = document.querySelector('.i-5').value;
}


// Task 7
// Функция должна создавать через createElement элемент select  c классом 's-7'. Добавьте в созданный select элементы option с value = 22 и тектом 'Лето II Атрейдес' и option с value 33 и текстом 'Дункан Айдахо'. Создавайте option через createElement. Добавьте созданный select через append в .out-7.

function t07 () {
    const out7 = document.querySelector('.out-7');
    const createEl7 = document.createElement('select');
    const createOpt1 = document.createElement('option');
    const createOpt2 = document.createElement('option');
    createEl7.classList.add('s-7');
    createOpt1.value = '22';
    createOpt1.textContent = 'Лето II Атрейдес';
    createOpt2.value = '33';
    createOpt2.textContent = 'Дункан Айдахо';
    createEl7.append(createOpt1);
    createEl7.append(createOpt2);
    out7.append(createEl7);
}


document.querySelector('.b-7').onclick = t07;


// Task 8
// Функция должна получать текст из input.i-8, создавать элемент li c помощью createElement и записывать в него полученный текст, после чего добавлять в .list-8 через append.

function t08 () {
    const list8 = document.querySelector('.list-8');
    let i8 = document.querySelector('.i-8').value;
    const createEl8 = document.createElement('li');
    createEl8.textContent = i8;
    list8.append(createEl8);
}


document.querySelector('.b-8').onclick = t08;


// Task 9
// Функция должна создавать элемент 'details' через createElement, создайте через createElement элемент 'summary' с текстом 'close/open'. Добавьте через append созданный summary в details. Создайте текстовую ноду через createTextNode(), с текстом 'Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.' Добавьте созданную ноду в details через append. Созданный details в .out-9 через append.

function t09 () {
    const out9 = document.querySelector('.out-9')
    const det9 = document.createElement('details');
    const summ9 = document.createElement('summary');
    summ9.textContent = 'close/open';
    det9.append(summ9);
    let noda9 =  document.createTextNode('Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine.');
    det9.append(noda9);
    out9.append(det9);
}


document.querySelector('.b-9').onclick = t09;

// Task 10
// Функция должна создавать элемент 'tr' и два элемента 'td'. В первый добавьте текст 'Гхола', а во второй 'Гхола — клон, искусственное существо, которое выращивается в аксолотль-чане', добавьте оба td в tr через append. Созданный tr добавьте в таблицу .table-10 > tbody через append(). 

function t10 () {
    const table10 = document.querySelector('.table-10 > tbody');
    const tr10 = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.textContent = 'Гхола';
    td2.textContent = 'Гхола — клон, искусственное существо, которое выращивается в аксолотль-чане';
    tr10.append(td1, td2);
    table10.append(tr10);
}

document.querySelector('.b-10').onclick = t10;

// Task 11
// Создан элемент div, функция должна добавить через append div в блок .out-11. Обратите внимание куда добавляется элемент.

const div = document.createElement('div');
div.textContent = 'Test div';
div.classList.add('bg-orange');
const out11 = document.querySelector('.out-11');

function t11 () {
    out11.append(div);
}


document.querySelector('.b-11').onclick = t11;


// Task 12
// Функция должна добавлять элемент div (созданный в таске 11) с помощью prepend в .out-11. Обратите внимание, куда добавляется элемент. 

function t12 () {
    out11.append(div);
}

document.querySelector('.b-12').onclick = t12;


// Task 13
// Функция должна добавлять элемент div (созданный в таске 11) с помощью before в .out-11. Обратите внимание, куда добавляется элемент. 

function t13 () {
    out11.before(div);
}

document.querySelector('.b-13').onclick = t13;


// Task 14
// Функция должна добавлять элемент div (созданный в таске 11) с помощью after в .out-11. Обратите внимание, куда добавляется элемент. 

function t14 () {
    out11.after(div);
}

document.querySelector('.b-14').onclick = t14;


// Task 15
// Функция должна делать replaceWith для .out-15 заменяя его на div (созданный в таск 11). Обратите внимание, куда добавляется элемент. 

function t15 () {
    const out15 = document.querySelector('.out-15');
    out15.replaceWith(div);
}

document.querySelector('.b-15').onclick = t15;


// Task 16
// Функция должна делать remove() для элемента .out-16.

function t16 () {
    const out16 = document.querySelector('.out-16');
    out16.remove(out16);
}

document.querySelector('.b-16').onclick = t16;


// Тask 17
// Как видно createElement очень гибок, а вместе с after, before, append, prepend позволяет очень гибко работать с DOM, однако не стоит списывать innerHTML со счетов. Давайте заменим блок .out-17 строкой '<mark class="m-17">Thufir Hawat</mark>' с помощью outerHTML.

function t17 () {
    const out17 = document.querySelector('.out-17');
    out17.innerHTML = '<mark class="m-17">Thufir Hawat</mark>';
}

document.querySelector('.b-17').onclick = t17;

// Тask 18
// Функция t18 должна заменять блок .out-18 строкой '<mark class="m-18">Thufir Hawat</mark>' с помощью outerText.

function t18 () {
    const out18 = document.querySelector('.out-18');
    out18.outerText = '<mark class="m-18">Thufir Hawat</mark>';
}

document.querySelector('.b-18').onclick = t18;

// Тask 19
// Изучите работу метода insertAdjacentHTML на примере функции t19. Запустите, изучите ее работу с опцией 'beforebegin'. Замените опцию 'beforebegin' на 'afterbegin', 'beforeend', 'afterend'.

function t19 () {
    document.querySelector('.out-19').insertAdjacentHTML('beforeend', '<mark>TEST</mark>');
}

document.querySelector('.b-19').onclick = t19;

// Тask 20
// Изучите работу метода insertAdjacentText на примере функции t20. Запустите, изучите ее работу с опцией 'beforebegin'. Замените опцию 'beforebegin' на 'afterbegin', 'beforeend', 'afterend'.

function t20 () {
    document.querySelector('.out-20').insertAdjacentText('afterend', '<mark>TEST</mark>');
}

document.querySelector('.b-20').onclick = t20;