var BinarySearchTree = function(value) {
	var instance = Object.create(BinarySearchTree.prototype)

	instance.value = value
	// a BST where all values are higher than than the current value.
	instance.right = undefined
	// a BST where all values are lower than than the current value.
	instance.left = undefined

	return instance
}

BinarySearchTree.prototype.insert = function(value) {
	// accepts a value and places in the tree in the correct position.
	var node = BinarySearchTree(value)

	function recurse(bst) {
		if (bst.value > value && bst.left === undefined) {
			bst.left = node
		} else if (bst.value > value) {
			recurse(bst.left)
		} else if (bst.value < value && bst.right === undefined) {
			bst.right = node
		} else if (bst.value < value) {
			recurse(bst.right)
		}
	}

	recurse(this)
}
var maxDepth = function(root) {
	var fringe = [{ node: root, depth: 1 }]
	var current = fringe.pop()
	var max = 0

	while (current && current.node) {
		var node = current.node

		// Find all children of this node.
		if (node.left) {
			fringe.push({ node: node.left, depth: current.depth + 1 })
		}
		if (node.right) {
			fringe.push({ node: node.right, depth: current.depth + 1 })
		}

		if (current.depth > max) {
			max = current.depth
		}

		current = fringe.pop()
	}
	console.log(max)
	return max
}
let root = new BinarySearchTree(10)
root.insert(2)
root.insert(15)
root.insert(11)
maxDepth(root)
console.log(root)
