// iTGid.info - курс JS24/2


// Task 01
// Напишите функцию, окрашивает .out-1 цветом coral. Применяйте backgroundColor. Решите задачу с помощью this.

function t01() {
    this.style.backgroundColor = 'coral';
}

document.querySelector('.out-1').addEventListener('click', t01);

// Task 02
// Напишите функцию которая проверяет что у this есть css класс .out и выводит результат в .out-2.


function t02() {
    document.querySelector('.out-2').textContent = this.classList.contains('out');
}

document.querySelector('.out-2').addEventListener('click', t02);


// Task 03
// При клике на блок .out-3 добавляйте блоку .out-3-inner класс css .hide. При следующем клике - удаляйте. Решите задачу через this. Можно применять toggle.

function t03() {
    this.querySelector('.out-3-inner').classList.toggle('hide');
}

document.querySelector('.out-3').addEventListener('click', t03);


// Task 04
// При клике на блоке функция должна окрашивать (background, цвет 'orange') блок на котором кликнули. Применяйте this.


function t04() {
    this.style.background = 'orange';
}

document.querySelector('.out-4-1').addEventListener('click', t04);
document.querySelector('.out-4-2').addEventListener('click', t04);


// Task 05
// Функция должна окращивать (background, color 'orange') элемент li, по которому пользователь кликнули. Применяйте this. 


function t05() {
    this.style.background = 'orange';
}

document.querySelectorAll('.ul-5 li').forEach(item => item.addEventListener('click', t05));



// Task 06
// Напишите функцию, которая выводит в out-6 имя тега (через tagName) элемента, на котором произошел клик. Применяйте this. Если трудности - спросите.

function t06() {
    const out6 = document.querySelector(".out-6");
    out6.textContent = this.tagName;
}


document.querySelectorAll('.div-6 *').forEach(item => item.addEventListener('click', t06));



// Task 07
//  Напишите функцию, которая в .out-7 выводит this.value. 


function t07() {
    const out7 = document.querySelector(".out-7");
    out7.textContent = this.value;
}

document.querySelector('.s-7').addEventListener('change', t07);


// Task 08
//  Напишите функцию, которая в .out-8 выводит this.value. 

function t08() {
    const out8 = document.querySelector(".out-8");
    out8.textContent = this.value;
}

document.querySelector('.b-8').addEventListener('click', t08);


// Task 09
// Запустите функцию, изучите работу

function t09() {
    document.querySelector('.out-9').textContent = this.value;
}

document.querySelector('.b-9').addEventListener('click', () => {
    t09.call(document.querySelector('.s-9'));
});



// Task 10
// Запустите функцию, изучите работу

function t10() {
    this.style.backgroundColor = 'coral';
}

document.querySelector('.b-10').addEventListener('click', () => {
    t10.call(document.querySelector('.out-10'));
});


// Task 11
// Допишите в объект obj_11 свойство sum, равное нулю. Выведите объект в консоль.

const obj_11 = {
    a: 10,
    b: 20,
    sum: 0,
    summa: function () {
        this.sum = this.a + this.b;
    },
    getSum: function () {
        if (this.sum > 0) return this.sum;
        else return 0
    },
}
console.log(obj_11);


// Task 12
// Допишите в obj_11 метод summa, который суммирует свойства a и b объекта и присваивает результат свойству sum объекта obj_11.

// Проверка - снимите комментарий.

obj_11.summa();
console.log(obj_11.sum);


// Task 13
// Допишите в obj_11 метод getSum, который берет this.sum и проверяет. Если this.sum больше нуля, то возвращает this.sum, если меньше нуля - то возвращает нуль.

// Проверка - снимите комментарий.
console.log(obj_11.getSum());

// Task 14
// Создайте объект monitor, со свойствами h равное нулю и w равное нулю. Добавьте метод screen(), который возвращает объект c ключами width, который вычислите как window.screeen.width и height, который вычисляет как window.screen.height.

const monitor = {
    h: 0,
    w: 0,
    screen: function () {
        return {
            width: window.screen.width,
            height: window.screen.height
        }
    },
    isPortrait: function () {
        let a = this.screen();
        return a.height > a.width;
    },
    innerSize: function () {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    },
    webpageSize: function () {
        return {
            pageHeight: document.documentElement.scrollHeight,
            pageWidth: document.documentElement.scrollWidth,
        }

    },
    isVerticalScrolling: function () {
        let b = this.innerSize();
        let c = this.webpageSize();
        return c.pageHeight > b.height
    },
    pageYOffset: function () {
        return Math.round(window.scrollY);
    },
    aspectRatio: function () {
        const { width, height } = this.screen();
        const ratios = {
            125: '5:4',
            133: '4:3',
            160: '16:9',
            177: '16:10',
            80: '4:5',
            75: '3:4',
            56: '9:16',
            62: '10:16'
        };
        const mathRatio = Math.trunc((width / height) * 100);
        return ratios[mathRatio];
    },
}

// Проверка - снимите комментарий.
console.log(monitor.screen());

// Task 15
// Допишите в monitor метод isPortrait который возвращает true если ориентация экрана портретная и false в противном случае. Понять можно сравнив ширину и высоту значений в методе screen().


// Проверка - снимите комментарий.
console.log(monitor.isPortrait());


// Task 16
// Допишите в monitor метод innerSize, который возвращает объект с ключами width, height со значениями -  window.innerWidth и window.innerHeight


// Проверка - снимите комментарий.
console.log(monitor.innerSize());


// Task 17
// Допишите в monitor метод webpageSize, который возвращает объект с ключами pageHeight, pageWidth, которые вычисляются как document.documentElement.scrollWidth и document.documentElement.scrollHeight.

// Проверка - снимите комментарий.
console.log(monitor.webpageSize());


// Task 18
// Допишите в monitor метод isVerticalScrolling, который возвращает true, если страница не вмещается в окне браузера и false если вмещается. Имеется ввиду проверка вертикального размера.


// Проверка - снимите комментарий.
console.log(monitor.isVerticalScrolling());


// Task 19
// Допишите метод, который называется pageYOffset, который возвращает значение window.scrollY. Сделайте округление значения Math.round.


// Проверка - снимите комментарий.
console.log(monitor.pageYOffset());


// Task 20
// Допишите в monitor метод aspectRatio, который выводит (на основе работы предыдущих методов) информацию о соотношении сторон монитора. Должна возвращаться строка '5:4', '4:3', '16:10', '16:9' и наоборот: '4:5', '3:4', '10:16', '9:16'.


// Проверка - снимите комментарий.
console.log(monitor.aspectRatio());