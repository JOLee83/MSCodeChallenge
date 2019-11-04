//implement linked list
const head = new LinkedListNode(1)
head.next = new LinkedListNode(1)
head.next.next = new LinkedListNode(2)
head.next.next.next = new LinkedListNode(3)

function LinkedListNode(value) {
	this.value = value
	this.next = null
}

function reverse(head) {
	let node = head,
		previous,
		tmp

	console.log('before: ', node)
	// iterate through and reverse
	while (node) {
		// save "next" before overwrite
		tmp = node.next

		// reverse pointer
		node.next = previous

		// step forward in the list
		previous = node
		node = tmp
	}
	console.log('after: ', previous)
}
reverse(head)
