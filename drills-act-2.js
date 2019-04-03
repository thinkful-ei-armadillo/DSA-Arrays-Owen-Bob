'use strict';

//Problem 5

const urlify = (string) => {
  let newString= '';
  for(let i = 0; i < string.length; i++) {
    let value = string.charAt(i);
    if (string.charAt(i) === ' ') {
      value = '%20';
    }
    newString += value;
  }

  return newString;
};

// console.log(urlify('tauhida parveen'));
// console.log(urlify('www.thinkful.com /tauh ida parv een'));

//Problem 6

const filter = (arr) => {
  let newArr = [];
  arr.forEach((item, index) => {
    if (item >= 5) {
      newArr.push(item);
    }
  });
  return newArr;
};

//console.log(filter([1,5,6,9,10,7,8,1,3,4,7,2]));


//Problem 7

// input    [4, 6, -3, 5, -2, 1]
// output    12
/**
  possibleSums[] = a list of indices of pos nums w/o pos num in front of it -- also list of all 'starting points'
  
negative
 */

// const maxSum = (arr) => {
//   let possibleSums = [];
//   const someRecursion = (subArr, sum = 0) => {
//     subArr.forEach((item, index) => {
//       if (item >= 0) {
//         sum += item;
//       }
//       if (item < 0) {
//         subArr.slice(index).reduce((a,b) => a+b);
//       }
//     })
//   }

//   arr.forEach((item, index) => {
//     if (item > 0) {
//       someRecursion(arr.slice(index));
//     }
//   })
// }

//Problem 8