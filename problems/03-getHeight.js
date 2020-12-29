function getHeight(root) {
  if (!root) return -1
  let i = 0
  while (root.left) {
      // let left = getHeight(root.left)
      counter++
    }
  while (root.right) {
      counter++
  }
  return counter
      // let right = getHeight(root.right)
}
module.exports = {
  getHeight
};