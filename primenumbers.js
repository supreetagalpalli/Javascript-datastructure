function isPrime(n){
    if(n <= 1)
        return false
    for(var i = 2; i < n; i++ ){
        if(n % i == 0)
        return false
    }
    return true;
}
//Time complexity is O(n)
isPrime(5);

function isPrimeEfficient(n){
    if(n <= 1) 
        return false
    if(n <= 3)
        return true
    if(n % 2 == 0 || n % 3 == 0)
        return false
    for(var i = 5; i * i <= n; i +=6){ 
        /* traverse only till square root of number
        because if squareroot is not prime then number is also not prime*/
        if(n % i == 0 || n % (i+2) == 0)
            return false
    }
    return true
}

//Time complexity is O(sqrt(n)) of isPrimeEfficient function

function primeFactors(n){
    while(n % 2 == 0){
        console.log(2)
        n = n / 2
    }
    for(var i = 3; i*i <= n; i += 2){
        while(n % i == 0){
            console.log(i)
            n = n / i
        }
    }
    if(n > 2){
        console.log(n);
    }      
}

	
/*Given three numbers x, y, and p, compute (xˆy) % p. 
Here, x is the base, y is exponent, and p is the modulus.*/
 
function modularExpo(base, exponent, modulus){
    var value = 1;
    if(modulus == 1) return 0;
    for(var i = 0; i < exponent; i++){
        value = (value * base) % modulus;
    }
    return value;
}

//Check if a number is prime number
function isPrime(n){
    /*checks three base cases
    1. If n is 1 or less than 1
    2. If n is 2 or 3
    3. If n is divisible by 2 or 3
    and then checks for other numbers divisible by n
    */
    if(n <= 1) 
        return false
    if(n <= 3)
        return true
    if(n % 2 == 0 || n % 3 == 0)
        return false
    for(var i = 5; i * i <= n; i +=6){ 
        /* traverse only till square root of number
        because if squareroot is not prime then number is also not prime*/
        if(n % i == 0 || n % (i+2) == 0)
            return false
    }
    return true
}

//Time complexity is O(sqrt(n)) of isPrime function

//Find factors of prime numbers
function primeFactors(n){

    while(n % 2 == 0){
        console.log(2)
        n = n / 2
    }
    for(var i = 3; i*i <= n; i += 2){
        while(n % i == 0){
            console.log(i)
            n = n / i
        }
    }
    if(n > 2){
        console.log(n);
    }      
}

	
/*Given three numbers x, y, and p, compute (xˆy) % p. 
Here, x is the base, y is exponent, and p is the modulus.*/
 
function modularExpo(base, exponent, modulus){
    var value = 1;
    if(modulus == 1) return 0;
    for(var i = 0; i < exponent; i++){
        value = (value * base) % modulus;
    }
    return value;
}

/* Print all prime numbers less than n */
function allPrimesLessThanN(n){
    for(var i = 0; i < n; i++){
        if(isPrime(i)){
            console.log(i)
        }           
    }
}