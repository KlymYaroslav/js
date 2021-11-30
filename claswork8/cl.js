// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

let x = document.getElementById('main_header')
x.innerText = 'mon-year'

// b) робить шириниу елементу ul 400px

let y = document.getElementsByTagName('ul');
console.log(y);
y[0].style.border = '1px solid red';
y[0].style.width = '400px';


// c) робить шириниу всіх елементів з класом linkList шириною 50%
let z = document.getElementsByClassName('linkList');

z[0].style.width = '50%';
z[1].style.width = '50%';
z[2].style.width = '50%';
console.log(z);


// d) отримує текст який зберігається в елементі з класом listElement2

let d = document.getElementsByClassName('listElement2');
console.log(d[0].innerText);


// e) отримує всі елементи li та змінює ім колір фону на сірий

let e = document.getElementsByClassName('linkList');
for (const fElement of e) {
    fElement.style.background = 'silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let f = document.getElementsByTagName('a')
for (const fElement of f) {
  fElement.classList.add('anhor');
}
console.log(f);


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let g = document.getElementsByTagName('a');
for (const gElement of g) {

    if( gElement.innerText === 'link3'){gElement.style.fontSize = '40px'}

}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let h = document.getElementsByTagName('a');
for (const hElement of h) {

    let a = hElement.innerText;
    hElement.classList.add(`element_${a}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let i = document.getElementsByClassName('sub-header');
// console.log(i);
// for (const iElement of i) {
//     iElement.style.background = prompt('Введіть колір')
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let i = document.getElementsByClassName('sub-header');
// console.log(i);
// for (const iElement of i) {
//
//    if(iElement.innerText === 'content 2 segment' ){
//        iElement.style.color = prompt('Введіть колір')
//    }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let k = document.getElementsByClassName('content_1');
// console.log(k);
// for (const kElement of k) {
//     console.log(kElement);
//     if (kElement.innerText.includes('Lorem')) {
//         kElement.innerText = prompt('Введіть текст')
//     }
// }


// l) отримати елементи p та змінити їм padding на 20px
let l = document.getElementsByTagName('p');
console.log(l);
for (const lElement of l) {
    lElement.style.padding = '20px';
    }




// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let m = document.getElementsByClassName('text2');
console.log(m);
for (const lElement of m) {
    lElement.innerText = 'mon-year. Пример sep-2021';
}










