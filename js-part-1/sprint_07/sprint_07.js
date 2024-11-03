const goods = document.querySelector('.goods');
const square = document.querySelector('.square');
const layer = document.querySelector('.layer');
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');
const goodsImg = document.querySelector('.goods-img');

function calcMaterials(){
    let expenditure = 0;
    let k = 0;
    let price = 0;

    const value = goods.value;
    if(square.value < 1) square.value = 1;
    if(square.value > 10000) square.value = 1;
    if(square.value.trim() === '') square.value = 1;
      
    if(layer.value < 1) layer.value = 1;
    if(layer.value > 100) layer.value = 100;
    if(layer.value.trim() === '') layer.value = 1;
    
    switch(value){
        case 'budmaster':
            console.log('budmaster');
            k = 1.9;
            price = 157;
            break
        case 'ceresit':
            console.log('ceresit');
            k = 2;
            price = 136;
            break
        case 'siltek':
            console.log('siltek');
            k = 2;
            price = 151;
            break
        case 'polimin':
            console.log('polimin');
            k = 1;
            price = 110;
            break
    }
    expenditure = square.value * layer.value * k;
    out1.textContent = expenditure + 'кг';
    out2.textContent = Math.ceil(expenditure / 25) + 'мешка / мешков';
    out3.textContent = price * Math.ceil(expenditure / 25) + 'uan';
}

function changeImg(){
    const value = goods.value;
    goodsImg.src = `images/${value}.jpg`;
    out1.textContent = '';
    out2.textContent = '';
    out3.textContent = '';
}

goods.onchange = changeImg;
document.querySelector('.b-1').onclick = calcMaterials;
