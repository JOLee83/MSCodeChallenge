// sorted array
let array = [1, 3, 5, 7, 8, 9]
// element to search for
let element = 10
// iterative binary search function
const binarySearch = (arr, el) => {
	let start = 0,
		end = arr.length - 1
	// iterates through array until element is found or until starting index is more than ending index
	while (start <= end) {
		let mid = Math.floor((start + end) / 2)
		if (arr[mid] === el) {
			// break from function if element is found
			console.log('Element found!')
			return true
		}
		// look for element in left or right half of array
		else if (arr[mid] < el) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	// when element is not found
	console.log('Element not found!')
	return false
}
binarySearch(array, element)
