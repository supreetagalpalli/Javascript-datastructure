//Implementing finacci seres in sequential way
function fibonacciSequential(n){
    if(n <= 1) {
        return n;
    }
    var sum = 0,
    last = 1,
    lastlast = 0;
    for(var i = 1; i < n; i++){
        sum = lastlast + last;
        lastlast = last;
        last = sum;
    }
    return sum;
}

//Recursive function
function fibonacciRecursive(n){
    if(n <= 1){
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

//Tail recursive
function fibonacciTailRecursive(n, lastlast, last){
    if(n == 0) return lastlast;
    if(n == 1) return last;
    return fibonacciTailRecursive(n - 1, last, last + lastlast)
}

