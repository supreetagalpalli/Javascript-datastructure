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

//Implementing Queue using two stacks
function TwoStackQueue(){
    this.inbox = new Stack();
    this.outbox = new Stack();
}

TwoStackQueue.prototype.enqueue = function(value){
    this.inbox.push(value);
}

TwoStackQueue.prototype.dequeue = function(){
    if(this.outbox.isEmpty()){
        while(!this.inbox.isEmpty()){
            this.outbox.push(this.inbox.pop());
        }
    }
    return this.outbox.pop();
};

var queue = new TwoStackQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();

//DESIGN A PARENTHESIS VALIDATION CHECKER USING A STACK

function isParenthesisValid(validationString){
    var stack = new Stack();
    for(var pos = 0; pos < validationString.length;pos++){
        var currentChar = validationString.charAt(pos); 
        if(currentChar == "("){
            stack.push(currentChar);
        }else if(currentChar == ")"){
            if(stack.isEmpty())
                return false;
            stack.pop();
        }
    }
    return stack.isEmpty();
}

//Implement a sortable stack
function sortableStack(size){
    this.size = size;

    this.mainStack = new Stack();
    this.sortedStack = new Stack();
    
    for(var i = 0; i < this.size; i++){
        this.mainStack.push(Math.floor(Math.random() * 11));
    }
}

sortableStack.prototype.sortStackDescending = function(){
    while(!this.mainStack.isEmpty()){
        var temp = this.mainStack.pop();
        while(!this.sortedStack.isEmpty() && this.sortedStack.peek()<temp){
            this.mainStack.push(this.sortedStack.pop());
        }
        this.sortedStack.push(temp);
    }
}



var stack5 = new sortableStack(10);
console.log(stack5);
stack5.sortStackDescending();
console.log(stack5.sortedStack); 