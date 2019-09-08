function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinaryTree(){
    this._root = null;
}

BinaryTree.prototype.proorderTraversal = function(){
    preorderTraversalHelper(this._root);

    function preorderTraversalHelper(node){
        if(!node) return;
        console.log(node.value);
        preorderTraversalHelper(node.left);
        preorderTraversalHelper(node.right);
    }
}

BinaryTree.prototype.inorderTraversal = function(){
    inorderTraversalHelper(this._root);

    function inorderTraversalHelper(node){
        if(!node) return;
        inorderTraversalHelper(node.left);
        console.log(node.value);
        inorderTraversalHelper(node.right);
    }
}

BinaryTree.prototype.postorderTraversal = function(){
    postorderTraversalHelper(this._root);

    function postorderTraversalHelper(node){
        if(node.left) postorderTraversalHelper(node.left);
        if(node.right) postorderTraversalHelper(node.right);
        console.log(node.value);
    }
}

//Breadth-First Traversal
BinaryTree.prototype.breadthFirstTraversal = function(){
    var root = this._root;
    var queue = [];

    if(!root)return;
    queue.push(root);
    while(queue.length){
        var temp = queue.shift();
        console.log(temp.value);
        if(temp.left) queue.push(temp.left);
        if(temp.right) queue.push(temp.right);
    }
}