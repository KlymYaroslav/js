// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
// - Напишіть код, який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let x = document.getElementById("content")
console.log(x)
let y = document.getElementById("rules")
console.log(y)

x.innerText = "Hi okten";
y.innerText = "My name Yaroslav";

x.style.color = "red";
y.style.color = "blue";

y.children
console.log(y)

let z = document.getElementsByClassName("fc_rules")
for (const zElement of z) {
    zElement.style.color = "red"
}

