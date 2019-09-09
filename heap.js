function Heap(){
    this.items = [];
}

Heap.prototype.swap = function(index1, index2){
    var temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.parentIndex = function(n){
    return (Math.floor((n-1)/2));
}

Heap.prototype.leftChildIndex = function(n){
    return (n * 2 + 1);
}
Heap.prototype.rightChildIndex = function(n){
    return (n * 2 + 2);
}
Heap.prototype.parent = function(n){
    return this.items[this.parentIndex(n)];
}

Heap.prototype.leftChild = function(n){
    return this.items[this.leftChildIndex(n)];
}
Heap.prototype.rightChild = function(n){
    return this.items[this.rightChildIndex(n)];
}

Heap.prototype.peek = function(){
    return this.items[0];
}
Heap.prototype.size = function(){
    return this.items.length;
}

function MinHeap(){
    this.items = [];
}

MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.bubbleDown = function(){
    var index = 0;
    while(this.leftChild(index) && 
    this.leftChild(index) < this.items[index] 
    || this.rightChild(index) < this.items[index]){
        var smallerIndex = this.leftChildIndex(index);
        if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex]){
            smallerIndex = this.rightChildIndex(index);
        }
        this.swap(smallerIndex,index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function(){
    var index = this.items.length - 1;
    while(this.parent(index) && this.parent(index) > this.items[index]){
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

MinHeap.prototype.add = function(item){
    this.items[this.items.length] = item;
    this.bubbleUp();
}

MinHeap.prototype.poll = function(){
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

var mh1 = new MinHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

console.log(mh1); 
console.log(mh1.poll()); // 1
console.log(mh1.poll()); // 5
console.log(mh1.poll()); // 8
console.log(mh1.poll()); // 10
console.log(mh1.poll()); // 100

function MaxHeap(){
    this.items = [];
}

MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.bubbleDown = function(){
    var index = 0;
    while(this.leftChild(index) && 
    this.leftChild(index) > this.items[index] 
    || this.rightChild(index) > this.items[index]){
        var largerIndex = this.leftChildIndex(index);
        if(this.rightChild(index) && this.rightChild(index) > this.items[largerIndex]){
            largerIndex = this.rightChildIndex(index);
        }
        this.swap(largerIndex,index);
        index = largerIndex;
    }
}

MaxHeap.prototype.bubbleUp = function(){
    var index = this.items.length - 1;
    while(this.parent(index) && this.parent(index) < this.items[index]){
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

MaxHeap.prototype.poll = function() {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

MaxHeap.prototype.add = function(item){
    this.items[this.items.length] = item;
    this.bubbleUp();
}
var mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(100);
mh2.add(8);

console.log(mh2.poll()); // 100
console.log(mh2.poll()); // 10
console.log(mh2.poll()); // 8
console.log(mh2.poll()); // 5
console.log(mh2.poll()); // 1

//Find smallest kth element
var array1 = [12, 3, 13, 4, 2, 40, 23];
function kthSmallestElement(array, k){
    var minHeap = new MinHeap();
    for(var i = 0; i < array.length; i++){
        minHeap.add(array[i]);
    }

    for(var i = 1; i < k; i++){
        minHeap.poll();
    }
    return minHeap.poll();
}

console.log("Smallest "+kthSmallestElement(array1, 2));

function kthLargestElement(array, k){
    var maxHeap = new MaxHeap();
    for(var i = 0; i < array.length; i++){
        maxHeap.add(array[i]);
    }

    for(var i = 1; i < k; i++){
        maxHeap.poll();
    }
    return maxHeap.poll();
}
console.log("Largest "+kthLargestElement(array1, 2));
