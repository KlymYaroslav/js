// //зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//
// let mas=[2,17,13,6,22,31,45,66,100,-18];
//
// //1. перебрати його циклом while
//
// let i = 0
// while (i<= 9){
//     console.log(mas[i])
// i++
// }
//
// //     2. перебрати його циклом for
//  for (let i = 0; i < mas.length; i++){
//      console.log(mas[i]);
//  }
//
// // 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//  i = 0;
//  while (i < mas.length){
//      if (i%2 !== 0){
//         console.log(mas[i]);
//     }
//     i++
// }
//
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//  for (let i = 0; i < mas.length; i++){
//      if (i%2 !== 0){
//         console.log(mas[i]);
//      }
//  }
//
// // // 5. перебрати циклом while та вивести  числа тільки парні  значення
//  i = 0;
//  while (i < mas.length){
//      if (i%2 === 0){
//          console.log(mas[i]);
//      }
//      i++
//  }
//
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
//  for (let i = 0; i < mas.length; i++){
//     if (i%2 === 0){
//         console.log(mas[i]);
//      }
// }
//
// // 7. замінити кожне число кратне 3 на слово "okten"
//  for (let i = 0; i < mas.length; i++){
//      if (mas[i]%3 === 0){
//         mas[i] = "okten";
//         console.log(mas[i]);
//     }
//  }
//  console.log(mas);
//
//
//
// // 8. вивести масив в зворотньому порядку.
//  let mass = [2,17,13,6,22,31,45,66,100,-18];
//  for (let i = mass.length-1; i >= 0; i--){
//      console.log(mass[i]);
//  }