//Find index of 2 elements in array whose sum is equal to given weight
function findSum(arr, weight){
    var hashtable = {}
    for(var i = 0; i < arr.length ; i++){
        var currElem = arr[i];
        var difference = weight - currElem;
        
        if(hashtable[currElem] != undefined){
            return[i,hashtable[currElem]];
        }else{
            console.log(" hashtable[currElem] "+hashtable[currElem])
            hashtable[difference] = i 
        }
    }
    return -1;
}

//findSum([1,2,3,4,5], 9);

//Implemented array slice function
function arraySlice(arr, beginIndex, endIndex){
    if(!beginIndex && !endIndex){
        return arr;
    }

    var partArray = []
    if(!endIndex)
    for(var i = beginIndex; i < arr.length; i++){
        partArray.push(arr[i]);
    }else
    for(var i = beginIndex; i < endIndex; i++){
        partArray.push(arr[i]);
    }
    return partArray;
}

//Common elements in k-sorted arrays
function commonElements(kArray){
    var hashmap = {};
    var last ;
    var answer = [];
    for(var i = 0; i < kArray.length; i++){
        var currArray = kArray[i];
        last = null
        for(var j = 0; j < currArray.length; j++){
            var currElement = currArray[j];
            if(last != currElement){
                if(!hashmap[currElement]){
                    hashmap[currElement] = 1
                }else{
                    hashmap[currElement]++
                }
            }
            last = currElement;
        }
    }

    for(var index in hashmap){
        if(hashmap[index] == kArray.length){
            answer.push(parseInt (index))
        }
    }

    return answer;
}

commonElements([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]]);
