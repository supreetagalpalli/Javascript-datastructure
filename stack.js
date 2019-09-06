function Stack(array){
    this.array = [];
    if(array) this.array = array;
}
Stack.prototype.getBuffer = function(){
    return this.array.slice();
}

Stack.prototype.isEmpty = function(){
    return this.array.length == 0
}

var stack1 = new Stack();

console.log(stack1);

Stack.prototype.peek = function(){
    return this.array[this.array.length - 1];
}

Stack.prototype.push = function(n){
    return this.array.push(n);
}

Stack.prototype.pop = function(){
    return this.array.pop();
}

//get element at specific node from top
function accessnNode(stack,n){
    var arrayBuffer = stack.getBuffer();
    if(n <= 0) throw "error";
    var bufferStack = new Stack(arrayBuffer);
    while(--n != 0){
        bufferStack.pop();
    }
    return bufferStack.pop();
}

function search(stack, elem){
    var arrayBuffer = stack.getBuffer();
    var bufferStack = new Stack(arrayBuffer);
    while(!bufferStack.isEmpty()){
        if(bufferStack.pop == elem){
            return true;
        }
    }
    return false;
}
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
console.log(search(stack1, 3));
console.log(accessnNode(stack1, 3));
