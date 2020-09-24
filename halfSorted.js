// Write a function that takes in an array, and sorts the first
// half of the array in ascending order, and the second half 
// of the array in descending order

// you may use methods for this. 

// 13 elements
let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7]

// 11 elements
let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45]


// const halfSorted = function (arr) {

//   let firstHalf = arr.slice(0, Math.floor(arr.length / 2));
//   let secondHalf = arr.slice(Math.floor(arr.length / 2) + 1);

//   let sortedFirstHalf = firstHalf.sort((a, b) => a - b);
//   let sortedSecondHalf = secondHalf.sort((a, b) => b - a);

//   return firstHalf.concat(secondHalf);

// };

const halfSorted = function (arr) {

  let first = function (arr) {
    let firstArray = [];

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      firstArray.push(arr[i]);
    }

    let sortedFirstHalf = firstArray.sort((a, b) => a - b);

    return sortedFirstHalf;
  }
  let firstHalf = first(arr);

  let second = function (arr) {
    let secondArray = [];
    
    for (let i = Math.floor(arr.length / 2); i < arr.length; i++) {
      secondArray.push(arr[i]);
    }

    let sortedSecondHalf = secondArray.sort((a, b) => b - a);

    return sortedSecondHalf;
  }
  let secondHalf = second(arr);

  return firstHalf.concat(secondHalf);
}


console.log(halfSorted(arr1));

//results --> [2, 4, 8, 34, 54, 78, 567, 99, 77, 45, 23, 7, 6]

console.log(halfSorted(arr2));

//results --> [3, 4, 56, 58, 65, 98, 90, 68, 45, 34, 12]