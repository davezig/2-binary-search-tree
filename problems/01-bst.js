class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}
class BST {
  constructor() {
          this.root = null;
      }
      // new TreeNode(val)
  insert(val, root = this.root) {
      if (root === null) {
          this.root = new TreeNode(val)
          return;
      }
      let value = new TreeNode(val)
      if (val < root.val) {
          if (!root.left) {
              root.left = value
          } else {
              this.insert(val, root.left)
          }
      }
      if (val >= root.val) {
          if (!root.right) {
              root.right = value
          } else {
              this.insert(val, root.right)
          }
      }
  }
  searchRecur(val, root = this.root) {
      if (root === null) return false;
      if (val < root.val) {
          return this.searchRecur(val, root.left) //! 9 - 9
      } else if (val > root.val) {
          return this.searchRecur(val, root.right)
      } else {
          return true
      }
  }
  searchIter(val) {
      let root = this.root
          //! looping 
      while (root !== null) {
          if (val < root.val) {
              root = root.left
          } else if (val > root.val) {
              root = root.right
          } else {
              return true
          }
      }
      return false
  }
}
module.exports = {
  TreeNode,
  BST
};
let tree1 = new BST()
tree1.insert(10);
tree1.insert(9);
tree1.insert(7);
tree1.insert(16);
tree1.insert(7);
tree1.insert(8);