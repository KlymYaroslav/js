// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
document.body.appendChild(div);
div.classList.add('wrap','collapse','alpha','beta')
div.innerText = 'hello';
div.style.fontSize = '100px';
div.style.color = 'blue';
div.style.background = 'orange';
div.style.marginBottom = '30px';

let divclone = div.cloneNode(true);
document.body.appendChild(divclone);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


let menuccc = 1


let array =  ['Main','Products','About us','Contacts'];

for (const element of array) {
   let li = document.createElement('li');
   li.innerText = element;
   li.setAttribute(`menu`,`menu-` + menuccc);
   menuccc++
   document.body.appendChild(li);
   li.style.marginBottom = '10px'
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let i = 1

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const ArrayElement of coursesAndDurationArray) {
   let div = document.createElement('div');
   div.innerText = ArrayElement.title + ' ' + ArrayElement.monthDuration;
   div.setAttribute(`menu`,`menu-` + i);
   i++
   document.body.appendChild(div);
   div.style.marginBottom = "10px"
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//Завдання робити через цикли.



let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const arrayElement of coursesAndDurationArray2) {
    let div = document.createElement('div');
    div.classList.add('item')
    let h1 = document.createElement('h1')
    h1.classList.add('heading')
    h1.innerText = arrayElement.title
    let p = document.createElement('p')
    p.classList.add('description')
    p.innerText = arrayElement.monthDuration

    document.body.appendChild(div);
    div.appendChild(h1)
    div.appendChild(p)
    div.style.marginBottom = "12px"
}