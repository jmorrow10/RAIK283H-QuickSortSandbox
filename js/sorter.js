num_recurses = 0;
/*
 * Returns a random integer between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
	let r = Math.random();
	return Math.floor(Math.random() * (max - min) + min);
}


function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}

/*
 * This function generates an array of random integers of length n.
 */
function generateRandomArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);
	shuffle(a);
	return a;
}

/*
 * This function generates an array of increasing integers of length n.
 */
function generateIncreasingArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);
	return a;
}

/*
 * This function generates an array of increasing integers of length n.
 */
function generateDecreasingArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);
	a.reverse();
	return a;
}

/*
 * This function generates an array of *almost* sorted integers of length n.
 * There are about log(n) pairs that are swapped out of order.
 */
function generateAlmostSortedArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);

	for(let i=0;i<Math.log(a.length);i++){
		index = getRandomInt(0,n-1);
		swap(a,index,index+1);
	}
	return a;
}

/*
 * This function returns the left-most index between left and
 * right.
 */
function getLeftPivot(left,right){
	return left;
}

/*
 * This function returns the right-most index between left and
 * right.
 */
function getRightPivot(left,right){
	// TODO
}

/*
 * This function returns a random index between left and right.
 */
function getRandomPivot(left,right){
	// TODO
}

/*
 * This function returns the integer midpoint between left and 
 * right.
 */
function getMidpointPivot(left,right){
	// TODO (hint: there is a function in this file to help you)
}

/* 
 * This function finds three values: the left-most element, the
 * right-most element, and the center element, and finds the median 
 * of them, and then returns the index of that median. 
 */
function getMedianOfThreePivot(left,right){
	// TODO
}


function swap(array, left, right) {
	let temp = array[left];
	array[left] = array[right];
	array[right] = temp;
}

// quicksort algorithm
function quicksort(pivotFunction, array, left, right) {
	left = left || 0;
	right = right || array.length - 1;

	var pivot = partition(pivotFunction, array, left, right); // you can play with both partition
	displayProgress(array, left, right, pivot)
	if (left < pivot - 1) {
		quicksort(pivotFunction, array, left, pivot - 1);
	}
	if (right > pivot) {
		quicksort(pivotFunction, array, pivot, right);
	}
	return array;
}

// partition scheme, similar to Hoare's partition scheme, but allows for the pivot to be anywhere
function partition(pivotFunction, array, left, right) {
	let originalLeft = left;
	let pivot = pivotFunction(left,right);
	let pivotValue = array[pivot];
	
	swap(array,pivot,left);

	while (left <= right) {
		while (array[left] < pivotValue) {
			left++;
		}
		while (array[right] > pivotValue) {
			right--;
		}
		if (left <= right) {
			swap(array, left, right);
			left++;
			right--;
		}
	}
	
	return left;
}