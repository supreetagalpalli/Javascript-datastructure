function intersection(set1, set2){
    var result = new Set();

    for(var elem of set1){
        if(set2.has(elem)){
            result.add(elem);
        }
    }
    return result;
}

function isSuperset(set1, set2){
    for(var elem of set2){
        if(!set1.has(elem)){
            return false;
        }
    }
    return true;
}

function union(set1, set2){
    var result = new Set(set1);
    for(var elem of set2){
        result.add(elem);
    }
    return result;
}

function difference(set1, set2){
    var result = new Set();
    for(var elem of set1){
        if(!set2.has(elem)){
            result.add(elem)
        }
    }
    return result;
}

function checkDuplicates(arr){
    var newSet = new Set(arr);
    return newSet.size != arr.length
}

function uniqueArray(arr1, arr2){
    var result = new Set(arr1.concat(arr2));
    return Array.from(result);
}