class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      //Code here 

      const newNode = new Node(value);
      if(this.root === null) { 
          this.root = newNode; 
          return this;
      }
    //Traverse to parent node 
      let iterator = this.root; 
      while(true) { 
        
        if(value > iterator.value) { 
            if(iterator.right == null) { 
                iterator.right = newNode; 
                return this; 
            } 
            iterator = iterator.right;
        } else { 
            if(iterator.left == null) { 
                iterator.left = newNode; 
                return  this;
            } 
            iterator = iterator.left;
        } 
      }  


    }
    lookup(value){
      //Code here 
      let currentNode = this.root;
      while(currentNode !== null) { 
        if(currentNode.value === value) { 
            return currentNode;
        } 
        if(value > currentNode.value) { 
            currentNode = currentNode.right;
        } else { 
            currentNode = currentNode.left;
        } 
      } 
      return null; 
    }
    // remove
  }
  
  const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(6)
tree.insert(170)
tree.insert(15)
tree.insert(1) 
console.log(JSON.stringify(traverse(tree.root)))
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  
  
  
  
  
  