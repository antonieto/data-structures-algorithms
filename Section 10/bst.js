class TreeNode{ 
  constructor(value) { 
      this.right = null; 
      this.left = null; 
      this.value = value; 
  }
} 

class BinarySearchTree { 
  constructor() { 
      this.root = null; 
  }  

  insert( value ) {  

      const node = new TreeNode(value); 
      if( this.root == null ) { 
          this.root = node; 
          return this;
      } 
      let iterator = this.root;
      
      if( this.lookup(value) != null ){ 
          return this;
      } 

      while( true ) { 
          if(value > iterator.value ) { 
              if( !iterator.right ) { 
                  iterator.right = node; 
                  return this;
              } 
              iterator = iterator.right;
          } else { 
              if( !iterator.left ) { 
                  iterator.left = node;
                  return this;
              } 
              iterator = iterator.left;
          }
      } 
  }  

  lookup( value  ){ 
      
      let iterator = this.root; 

      if( value === iterator.value ) { 
          return { target: iterator, parent: null };
      }

      while( iterator != null) { 
          const parentNode = iterator; 

          if( value > iterator.value ) { 
              iterator = iterator.right;
          } else { 
              iterator = iterator.left;
          }

          if( iterator != null) { 
              if(iterator.value === value ) { 
                  return { target: iterator, parent: parentNode};
              }
          }
      }
      return null;

  }
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
  
  
  
  
  
  