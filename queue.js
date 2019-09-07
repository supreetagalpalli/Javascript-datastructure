function Queue(array){
    this.array = [];
    if(array)this.array = array;
}

Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Queue.prototype.peek = function(){
    return this.array[0];
}

Queue.prototype.enqueue = function(value){
    return this.array.push(value);
}

Queue.prototype.dequeue = function(){
    return this.array.shift();
}

//get element at specific node from top
function accessnNode(queue,n){
    var arrayBuffer = queue.getBuffer();
    if(n <= 0) throw "error";
    var bufferQueue = new Queue(arrayBuffer);
    while(--n != 0){
        bufferQueue.dequeue();
    }
    return bufferQueue.dequeue();
}

function search(queue, elem){
    var arrayBuffer = queue.getBuffer();
    var bufferQueue = new Queue(arrayBuffer);
    while(!bufferQueue.isEmpty()){
        if(bufferQueue.dequeue() == elem) return true
    }
    return false
}

var queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);

//Implementing Stack using queue
function QueueStack(){
    this.inbox = new Queue();
}

QueueStack.prototype.push = function(value){
    this.inbox.enqueue(value);
}

QueueStack.prototype.pop = function(){
    var size = this.inbox.length - 1;
    var counter = 0;
    var bufferqueue = new Queue();

    while(++counter <= size){
        bufferqueue.enqueue(this.inbox.dequeue());
    }
    var popped = this.inbox.dequeue();
    this.inbox = bufferqueue;
    return popped;
}

var stack = new QueueStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop());

//DESIGN A CASHIER CLASS THAT TAKES IN A CUSTOMER OBJECT AND 
//HANDLES FOOD ORDERING ON A FIRST-COME, FIRST-SERVED BASIS

function Customer(name, order){
    this.name = name;
    this.order = order;
}

function Cashier(){
    this.customers = new Queue();
}

Cashier.prototype.addOrder = function(customer){
    this.customers.enqueue(customer);
}

Cashier.prototype.deliveryOrder = function(){
    var finishedCustomer = this.customers.dequeue();
    console.log(finishedCustomer.name + "! Your "+ finishedCustomer.order+ " is finished");
}

var cashier = new Cashier();
var customer1 = new Customer("Supreeta", "Pizza");
var customer2 = new Customer("Sunil", "Pasta");
var customer3 = new Customer("Sam", "Tacos");
cashier.addOrder(customer1);
cashier.addOrder(customer2);
cashier.addOrder(customer3);
cashier.deliveryOrder();
cashier.deliveryOrder();
cashier.deliveryOrder();

console.log(cashier);