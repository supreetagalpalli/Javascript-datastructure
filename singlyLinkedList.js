function node(data){
    this.data = data;
    this.next = null;
}

function SinglyLinkedList(){
    this.head = null;
    this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function(){
    return this.size == 0;
}

SinglyLinkedList.prototype.insert = function(value){
    if(this.head == null){
        this.head = new node(value);
    }else{
        var temp = this.head;
        this.head = new node(value);
        this.head.next = temp;
    }
    this.size++;
}

SinglyLinkedList.prototype.delete = function(value){
    var currHead = this.head;
    if(currHead.data == value){
        this.head = currHead.next;
        this.size--;
    }else{
        var prev = currHead;
        while(currHead.next){
            if(currHead.data == value){
                prev.next = currHead.next;
                prev = currHead;
                currHead = currHead.next;
                break;
            }
            prev = currHead;
            currHead = currHead.next;
        }
        if(currHead.data == value){
            prev.next = null;
        }
        this.size--;
    }
}

SinglyLinkedList.prototype.search = function(value){
    var currHead = this.head;
    while(currHead){
        if(currHead.data == value){
            return true;
        }
        currHead = currHead.next;
    }
    return false;
}

function reverseString(linkedList){
    var llnode = linkedList.head;
    var prev = null;
    while(llnode){
        var temp = llnode.next;
        llnode.next = prev;
        prev = llnode;
        if(!temp) break;
        llnode = temp;
    }
    return llnode;
}
var singlyLinkedList1 = new SinglyLinkedList();
singlyLinkedList1.insert(50);
singlyLinkedList1.insert(40);
singlyLinkedList1.insert(30);
singlyLinkedList1.insert(20);
singlyLinkedList1.insert(10);
console.log(reverseString(singlyLinkedList1));
