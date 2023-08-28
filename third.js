

const findSum = (arr, sum) => {

    for(let i = 0; i < arr.length - 1; i++) {
        let needAdd = sum - arr[i];
        let addIndex = arr.findIndex( (item, index) => item === needAdd && index !== i)
        if(addIndex !== -1)
            return [i, addIndex]
    }

    return [];
}

const findSumBin = (arr, sum) => {

    for(let i = 0; i < arr.length - 1; i++) {
        let needAdd = sum - arr[i];
        let index = findNum(arr, needAdd, i, arr.length)
        if(index !== -1)
            return [i, index]

    }
    return []
}

const findNum = (arr, n, start, end) => {
  if(end < 1 || end -1 === start) return -1;

  const center = Math.floor(( start + ( end - start ) / 2 ));

  if (n == arr[center]) return center; 
  return (n > arr[center]) ? findNum(arr, n, center, end) : findNum(arr, n, start, center);
}
//Описание:
//Мы берем каждый элемент массива. 
//Получаем разницу между суммой и числом.
//Ищем недостающую число среди элементов.
//Если находим, то возвращаем массив из 2 чисел, иначе идем дальше по массиву.

console.log(findSumBin([1,2,3,4,5,6], 4))
console.log(findSumBin([1,2,3,4,5,6], 44))
console.log(findSumBin([1,2,3,4,5,6], 11))
console.log(findSumBin([1,2,3,4,5,6], 1))
console.log(findSumBin([100,120,123,212,315,333,344,527], 527))
console.log(findSumBin([1,2,4,5,6,], 4))

console.log(findSum([1,2,3,4,5,6], 4))
console.log(findSum([1,2,3,4,5,6], 44))
console.log(findSum([1,2,3,4,5,6], 11))
console.log(findSum([1,2,3,4,5,6], 1))
console.log(findSum([100,120,123,212,315,333,344,527], 527))
console.log(findSum([1,2,4,5,6,], 4))
