function BinaryTreeNode(value){
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree(){
    this._root = null;
}

BinarySearchTree.prototype.insert = function(value){
    var thisNode = {left: null, right: null, value: value};
    if(!this._root){
        this._root = thisNode;
    } else {
        var currRoot = this._root;
        while(true){
            if(currRoot.value > value){
                if(currRoot.left != null){
                    currRoot = currRoot.left;
                } else {
                    currRoot.left = thisNode;
                    break;
                }
            }else if(currRoot.value < value){
                if(currRoot.right != null){
                    currRoot = currRoot.right;
                }else{
                    currRoot.right = thisNode;
                    break;
                }
            }else break;
            
        }
    }
}

BinarySearchTree.prototype.delete = function(value){
    return deleteRecursively(this._root, value);

    function deleteRecursively(root, value){
        if(!root) return null;
        else if(root.value > value){
            deleteRecursively(root.left, value);
        }else if(root.value < value){
            deleteRecursively(root.right, value);
        }else{
            if(!root.left && !root.right){
                return null;
            }else if(!root.left){
                root = root.right;
                return root;
            }else if(!root.right){
                root = root.left;
                return root;
            }else{
                var temp = findMin(root.right);
                root.value = temp.value;
                root.right = deleteRecursively(root.right, temp.value);
                return root;
            }
        }
        return root;
    }

    function findMin(root){
        while(root.left){
            root = root.left;
        }
        return root;
    }
}

BinarySearchTree.prototype.search = function(value){
    var currRoot = this._root;
    var found = false;

    while(currRoot){
        if(currRoot.value > value){
            currRoot = currRoot.left;
        }else if(currRoot.value < value){
            currRoot = currRoot.right;
        }else{
            found = true;
            break;
        }
    }
    return found;

}
var bst1 = new BinarySearchTree();
bst1.insert(4);
bst1.insert(2);
bst1.insert(3);
bst1.insert(1);
bst1.insert(6);
bst1.insert(5);
bst1.insert(8);
bst1.insert(7);
bst1.delete(4);

console.log(bst1.search(1));