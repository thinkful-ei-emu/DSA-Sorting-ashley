// 1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40
// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// What are the first 2 lists to be merged?
// Which two lists would be merged on the 7th merge?

// 2. Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.
// The pivot could have been 17, but could not have been 14
// The pivot could have been either 14 or 17
// Neither 14 nor 17 could have been the pivot
// The pivot could have been 14, but could not have been 17
// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.
// When using the last item on the list as a pivot
// When using the first item on the list as a pivot

// 3. Implementing quicksort
// Write a function qSort that sorts a dataset using the quicksort algorithm. The dataset to sort is: 89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5.
function createArr (){
  let str = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
  let newArr = str.split(' ');
  let resultArr =[];
  for(let i=0; i< newArr.length; i++){
    resultArr.push(Number(newArr[i]))
  }
  return resultArr;
}


function qSort(array, start= 0, end = array.length){

  if(start >= end){
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}
function partition(array, start, end){
  const pivot = array[end-1];
  let j = start;
  for(let i = start; i < end -1; i++){
    if (array[i] <= pivot){
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
}

function swap(array, i, j){
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

let testArr = createArr();
// console.log(qSort(testArr));


function mSort(array){
  if(array.length <= 1){
    return array;
  }
  const middle = Math.floor(array.length/2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

function merge(left, right, array){
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]){
      array[outputIndex++] = left[leftIndex++]
    }
    else{
      array[outputIndex++] = right[rightIndex++]
    }
  }
  for (let i = leftIndex; i < left.length; i++){
    array[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++){
    array[outputIndex++] = right[i];
  }
  return array;
}

console.log(mSort(testArr))


// 4. Implementing merge sort
// Write a function mSort that sorts the dataset above using the merge sort algorithm.

// 5. Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use arr.splice(), shift() or unshift() for this exercise.

// 7. Sort in place
// Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).

// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and them implement your algorithm.