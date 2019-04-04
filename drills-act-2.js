'use strict';

//Problem 5

const urlify = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
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

const filter = arr => {
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

//Problem 8 Array Merger
const arrayMerger = (arr1, arr2) => {
  let outputArr = [];
  while (arr1.length !== 0 || arr2.length !== 0) {
    if (!arr1[0]) {
      outputArr.push(arr2[0]);
      arr2 = arr2.slice(1);
    } else if (!arr2[0]) {
      outputArr.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else if (arr1[0] < arr2[0]) {
      outputArr.push(arr1[0]);
      arr1 = arr1.slice(1);
    } else {
      outputArr.push(arr2[0]);
      arr2 = arr2.slice(1);
    }
  }
  return outputArr;
};

let a1 = [1, 3, 6, 8, 11];
let a2 = [2, 3, 5, 8, 9, 10];

// console.log(arrayMerger(a1, a2));

//Problem 9 Remove Characters

//input: 'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
//output: 'Bttl f th Vwls: Hw vs. Grzny'

const removeCharacters = (string, tbRemove) => {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let value = string.charAt(i);
    for (let x = 0; x < tbRemove.length; x++) {
      if (string.charAt(i) === tbRemove.charAt(x)) {
        value = '';
      }
    }
    newString += value;
  }

  return newString;
};

let string = 'Battle of the Vowels: Hawaii vs. Grozny';
let removal = 'aeiou';

// console.log(removeCharacters(string, removal));

//problem 10 Products
// find out the products of every other number except the number at each index
// input [1, 3, 9, 4]
// output [108, 36, 12, 27]

const products = arr => {
  let outputArr = [];

  arr.forEach((item, index) => {
    let productArr = [...arr];
    productArr.splice(index, 1);
    let product = 1;
    productArr.forEach(item => {
      product *= item;
    });
    outputArr.push(product);
  });
  return outputArr;
};

// console.log(products([1, 3, 9, 4]));

// problem 11 2D Array
// input: [[1,0,1,1,0],
// [0, 1, 1, 1, 0],
//   [1, 1, 1, 1, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1]];

// output: [[0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 1, 1, 0],
// [0, 0, 0, 0, 0],
// [0, 0, 1, 1, 0]];

const twoDArray = matrix => {
  let outputMatrix = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];

  matrix.forEach((row, index) => {
    row.forEach((item, col) => {
      if (item === 0) {
        outputMatrix[index].fill(0);
        outputMatrix.forEach(innerRow => {
          // console.log(matrix);
          innerRow[col] = 0;
        });
        // ouput on row [index] = 0
        // outputmatrix on [any][col] = 0
        // break back to matrix.foreach
      }
    });
  });

  return outputMatrix;
};

const matrixInput = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

console.log(twoDArray(matrixInput));
