// TODO Завдання 1. Порахувати суму елементів в довільному числовому масиві(без reduce)

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum +=  arr[i];
}
console.log(sum);


// arr.forEach(value => sum += value);
// console.log(sum);

// for (let value of arr) {
//   sum += value;
// }
// console.log(sum);


