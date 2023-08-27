

const findSum = (arr, sum) => {

    for(let i = 0; i < arr.length - 1; i++) {
        let needAdd = sum - arr[i];
        let addIndex = arr.findIndex( (item, index) => item === needAdd && index !== i)
        if(addIndex !== -1)
            return [i, addIndex]
    }

    return [];
}

//Описание:
//Мы берем каждый элемент массива. 
//Получаем разницу между суммой и числом.
//Ищем недостающую число среди элементов.
//Если находим, то возвращаем массив из 2 чисел, иначе идем дальше по массиву.

console.log(findSum([1,2,3,4,5,6], 4))
console.log(findSum([1,2,3,4,5,6], 44))
console.log(findSum([1,2,3,4,5,6], 11))
console.log(findSum([1,2,3,4,5,6], 1))
console.log(findSum([100,120,123,212,315,333,344,527], 527))
console.log(findSum([1,2,4,5,6,], 4))
