// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let number = [10, 2, 4, 7, 9];
let string = ['messi', 'ronaldo', 'neymar', 'bale', 'hazard'];
let bool = [10, 2, 4, 7, 9,'messi', 'ronaldo', 'neymar', 'bale', 'hazard', true, false, true, false, true];
console.log(number);
console.log(string);
console.log(bool);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let xxx = [10, 2, 4, 7, 9];
xxx[0]=1
xxx[1]=2
xxx[2]=3
console.log(xxx);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


for (let i = 0; i <= 9; i++) {
    document.write('<div>masha</div>')
}

for (let i = 0; i <= 9; i++) {
    document.write(`<div>natasha ${i}</div>`)
}

let i = 0;
while (i <= 19){
    document.write(`<div><h1>yaroslav</h1></div>`)
    i++;
}

let x = 0;
while (x <= 19){
    document.write(`<div><h1>yaroslav ${i}</h1></div>`)
    x++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let array = [1,2,3,4,5,6,7,8,9,9];
for (let i = 0; i < array.length; i++) {
    console.log(array);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let array2 = [`a`,`a`,`a`,`a`,`a`,`a`,`a`,`a`,`a`,`a`];
for (let i = 0; i < array2.length; i++) {
    console.log(array2);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let array3 = [`a`,`a`,`a`,`a`,1,1,1,1,true,false];
for (let i = 0; i < array3.length; i++) {
    console.log(array3);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let array4 = [`a`,`a`,`a`,`a`,1,1,1,1,true,false];
for (let i = 0; i <= 10; i++) {
if (typeof array4[i] === 'boolean'){
    console.log(array4[i]);}
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array5 = [`a`,`a`,`a`,`a`,1,1,1,1,true,false];
for (let i = 0; i <= 10; i++) {
    if (typeof array5[i] === 'number'){
        console.log(array5[i]);}
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let array6 = [`a`,`a`,`a`,`a`,1,1,1,1,true,false];
for (let i = 0; i <= 10; i++) {
    if (typeof array6[i] === 'string'){
        console.log(array6[i]);}
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let yyy = [];
yyy[0]=1
yyy[1]=2
yyy[2]=3
yyy[3]=4
yyy[4]='a'
yyy[5]='b'
yyy[6]='c'
yyy[7]='d'
yyy[8]=true
yyy[9]=false
for (let i = 0; i<yyy.length; i++){
    console.log(yyy);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<10; i++){
    console.log('крок iтерацій : ' + i + ' ');
    document.write('крок ітерацій : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<100; i++){
    console.log('крок iтерацій : ' + i + ' ');
    document.write('крок ітерацій : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i<100; i+=2){
    console.log('крок iтерацій : ' + i + ' ');
    document.write('крок ітерацій : ' + i + ' ');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i<100; i++){
    if(i % 2 === 0) {
        console.log(`${i}`)
        document.write(`${i}`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i<100; i++){
    if(i % 2 === 1) {
        console.log(`${i}`)
        document.write(`${i}`)
    }
}


