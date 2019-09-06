function pascalTriangle(row,col){
    if(col == 0){
        return 1;
    }
    if(row == 0){
        return 0;
    }
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1,col - 1);
}

pascalTriangle(4,1);

function decimalToBinary(n){
    var binaryString = "";
    function decimalToBinaryHelper(n){
        if(n < 2){
            binaryString += n;
            return;
        }else{
            decimalToBinaryHelper(Math.floor(n / 2));
            decimalToBinaryHelper(n%2);
        }
        
    }
    decimalToBinaryHelper(n);
    return binaryString;
}