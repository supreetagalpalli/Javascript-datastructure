function node(data){
    this.data = data;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.size = 0
}


DoublyLinkedList.prototype.insertAtHead = function(value){
    if(this.head == null){
        this.head = new node(value);
        this.tail = this.head;
    }else{
        var temp = new node(value);
        temp.next = this.head;
        this.head.prev = temp;
        this.head = temp;
    }
    this.size++;
}

DoublyLinkedList.prototype.insertAtTail = function(value){
    if(this.tail == null){
        this.tail = new node(value);
        this.head = this.tail;
    }else{
        var temp = new node(value);
        this.tail.next = temp;
        temp.prev = this.tail;
        this.tail = temp;
    }
    this.size++;
}

DoublyLinkedList.prototype.deleteAtHead = function(){
    if(this.head !== null){
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
    }
}

DoublyLinkedList.prototype.deleteAtTail = function(){
    if(this.tail !== null){
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--
    }
}

DoublyLinkedList.prototype.search = function(value){
    var currHead = this.head;
    while(currHead){
        if(currHead.data == value){
            return true;
        }
        currHead = currHead.next;
    }
    return false;
}

function deleteDuplicate(linkedList){
   var track = {};
   var temp = linkedList.head;
   var prev = null;
   while(temp){
       if(track[temp.data]){
           prev.next = temp.next;
           linkedList.size--;
       }else{
           track[temp.data] = true;
           prev = temp;
       }
       temp = temp.next;
   }
    return linkedList;
}


var dll1 = new DoublyLinkedList();
dll1.insertAtHead(50);
dll1.insertAtHead(40);
dll1.insertAtHead(40);
dll1.insertAtHead(30);
dll1.insertAtHead(20);
dll1.insertAtHead(10);
dll1.insertAtTail(60);

console.log(deleteDuplicate(dll1));