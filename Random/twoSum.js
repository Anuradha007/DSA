const twoSum = (arr, target) => {
    for(let x= 0; x < arr.length; x++){
        for(y = x + 1; y < arr.length; y++){
            if(arr[x] + arr[y] === target){
                return [x, y];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 18));
console.log(twoSum([2, 7, 11, 15], 20));
