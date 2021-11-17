//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function p(a, b) {
    let sp = a * b;
    return sp;
}

console.log(p(6, 4));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function s(r) {
    let kolo = 3.14 * Math.pow(r, 2);
    return kolo;
}

console.log(s(6))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function culindr(h, r) {
    let plosha = 2 * 3.14 * r * h;
    return plosha;
}

console.log(culindr(10, 10))

//- створити функцію яка приймає масив та виводить кожен його елемент
let a = [2, 4, 5, 7];

function masiv(a) {
    for (let i = 0; i < a.length; i++) {
        console.log((a))

    }
}

masiv(a);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function text(a) {
    document.write(`<p>${a}</p>`)
}

text("messi10");


//  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function l(b) {

    document.write(`<ul>`)
    document.write(`<li>${b}</li>`)
    document.write(`<li>${b}</li>`)
    document.write(`<li>${b}</li>`)
    document.write(`</ul>`)
}

l("ronaldo7");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function book(a, b) {
    document.write(`<ul>`)
    for (let i = 0; i <= b; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)

}

book('neymar11', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let aa = [27, "двадцять сім", true];

function ppp(a) {
    document.write(`<ul>`)
    for (i = 0; i < aa.length; i++) {
        document.write(`<li>${a}</li>`)
    }
    document.write(`</ul>`)

}

ppp(aa);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let Array = [{id: 1, name: 'Yaroslav', age: 22}, {id: 2, name: 'Bogdan', age: 34}, {id: 3, name: 'Taras', age: 31}];
 function objArray(array) {
     for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
   }
}
objArray(Array);
