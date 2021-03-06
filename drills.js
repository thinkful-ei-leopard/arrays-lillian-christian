'use strict';
// 2.1
// Array { length: 1, _capacity: 3, ptr: 0 }

//2.2
//Array { length: 5, _capacity: 12, ptr: 3 }

//3
//Array { length: 3, _capacity: 12, ptr: 3 }

//4 
//prints: 5
//NaN; b/c the memory class coerces numbers into decimals, but not strings
//resize function increases the size and memory so the array is moved to its proper place; is also a provate function (_)

//5

// function urlify(str){
//   const splitStr = str.split(' ');
//   const url = splitStr.join('%20');
//   return url;
// }

// console.log(urlify('tauhida parveen'));

//6

// function filter(arr) {
//   if (arr.length === 0){
//     return 'empty array';
//   }
//   let filteredArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if (arr[i] >= 5) {
//       filteredArr = [...filteredArr, arr[i]];
//     }
//   }
//   return filteredArr;
// }

// console.log(filter([4, 6, -3, 5, -2, 1]));

//7

// function maxSum(arr){
//     let max = arr[0];
//     for (let i = 1; i <= arr.length; i++) {
//         for (let j = 0; j < arr.length; i++) {
//             const sum = arr.slice(j, i + j).reduce((sum, num) => sum += num);
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//     }
//     return max;
// }
// console.log(maxSum([4, 6, -3, 5, -2, 1]));

//8 

// function merge(arr1, arr2) {
//   let result = [...arr1, ...arr2];
//   return result.sort((a, b) => a-b);
// }
// console.log(merge([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

//9

// function removeChar(str){
//   let noVowels = '';
//   for(let i = 0; i < str.length; i++){
//     if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u') {
//       noVowels += str[i];
//     }
//   }
//   return noVowels;
// }

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny'));


//10

// function products(arr) {
//   let products = [];
//   for(let i = 0; i < arr.length; i++){
//     let x = 1;
//     for(let j = 0; j < arr.length; j++){
//       if (j !== i){
//         x = x * arr[j];
//       }
//     }
//     products.push(x);
//   }
//   return products;
// }

// console.log(products([1, 3, 9, 4]));

//11

// function twoD(arr) {
//     let outputArray = arr;
//     let columns = [];
//     let rows = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[0].length; j++) {
//             if (arr[i][j] === 0) {
//             rows.push(i);
//             columns.push(j);
//         }
//     }
// }

// rows.forEach(row => {
//     for(let i = 0; i < outputArray[0].length; i++) {
//         outputArray[row][i] = 0;
//     }
// })
// columns.forEach(column => {
//     for(let i = 0; i < outputArray.length; i++) {
//         outputArray[i][column] = 0;
//     }
// })
// return outputArray
// }

// console.log(twoD([
//     [1,0,1,1,0],
//     [0,1,1,1,0],
//     [1,1,1,1,1],
//     [1,0,1,1,1],
//     [1,1,1,1,1]]))

//12

function strRot(str1, str2) {
    for(let i = 0; i < str2.length; i++) {
        str2 = str2.slice(1) + str2[0];
        if (str1 === str2) {
            return true;
        }
    }
    return false;
}
console.log(strRot('amazon', 'zonama'))
