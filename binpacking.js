function binPacking(arr){
    var count = 0;
    var binRem = [];
    var n = 3;
    for(let i = 0; i < arr.length;i++){
        let j;
        for(j = 0; j < count;j++){
            if(binRem[j] >= arr[i]){
                binRem[j] = binRem[j] - arr[i];
                break;
            }
        }
        if(j == count){
            binRem[count] = n - arr[j];
            count++;
        }
    }
    return count;
}


console.log(binPacking([1.01,1.99,2.5,1.5,1.01]));