/*
 * Returns a random integer between min (inclusive) and max (exclusive)
 */
function getRandomInt(min, max) {
	let r = Math.random();
	return Math.floor(Math.random() * (max - min) + min);
}

/*
 * This function shuffles an array into a random order.
 */
function shuffle(a) {
	for (let i = a.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[a[i - 1], a[j]] = [a[j], a[i - 1]];
	}
}

/*
 * This function generates an array of increasing integers of length n,
 * with values from 1 to n.
 */
function generateIncreasingArray(n) {
	a = [...Array(n + 1).keys()].slice(1, n + 1);
	return a;
}

/*
 * This function generates an array of increasing integers of length n.
 */
function generateDecreasingArray(n) {
	a = generateIncreasingArray(n);
	a.reverse();
	return a;
}


/*
 * This function generates an array of random integers of length n.
 */
function generateRandomArray(n) {
	a = generateIncreasingArray(n);
	shuffle(a);
	return a;
}

/*
 * This function generates an array of *almost* sorted integers of length n.
 * There are about log(n) pairs that are swapped out of order.
 */
function generateAlmostSortedArray(n) {
	a = generateIncreasingArray(n);

	for (let i = 0; i < Math.log(a.length); i++) {
		index = getRandomInt(0, n - 1);
		swap(a, index, index + 1);
	}
	return a;
}

/*
 * This function returns the left-most index between left and
 * right.
 */
function getLeftPivot(array, left, right) {
	return left;
}

/*
 * This function returns the right-most index between left and
 * right.
 */
function getRightPivot(array, left, right) {
	return right;
	// TODO: Function logic left as an exercise.
}

/*
 * This function returns a random index between left and right.
 */
function getRandomPivot(array, left, right) {
	// TODO: Function logic left as an exercise.
	// (hint: there is a function in this file to help)
	return getRandomInt(left, right)
}

/*
 * This function returns the integer midpoint between left and 
 * right.
 */
function getMidpointPivot(array, left, right) {
	return (Math.floor((left + right)/2))
	// TODO: Function logic left as an exercise.
}

/* 
 * This function finds three values: the left-most element, the
 * right-most element, and the center element, and finds the median 
 * of them, and then returns the index of that median. 
 */
function getMedianOfThreePivot(array, left, right) {
	// TODO: Function logic left as an exercise.
	leftPivot = getLeftPivot(array, left, right);
	rightPivot = getRightPivot(array, left, right);
	centerPivot = getMidpointPivot(array, left, right);

	if(((array[leftPivot] < array[rightPivot])&&(array[leftPivot] > array[centerPivot]))||((array[leftPivot] > array[rightPivot])&&(array[leftPivot] < array[centerPivot]))){
		return leftPivot;
	} else if (((array[rightPivot] < array[leftPivot])&&(array[rightPivot] > array[centerPivot]))||((array[rightPivot] > array[leftPivot])&&(array[rightPivot] < array[centerPivot]))){
		return rightPivot;
	} else {
		return centerPivot;
	}

}

/*
 * This function swaps elements at indices i and j in the provided array.
 */
function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

/*
 * this function acts as the main quicksort controller
 * it utilizes the partition method and uses itself recursivly
 */
function quicksort(pivotFunction, array, left, right) {
	left = left || 0;
	right = right || array.length - 1;

	var pivot = partition(pivotFunction, array, left, right);

	displayProgress(array, left, right, pivot)

	if (left < pivot - 2) {
		quicksort(pivotFunction, array, left, pivot - 2);
	}

	if (right > pivot) {
		quicksort(pivotFunction, array, pivot, right);
	}

	return array;
}

/*
 * executes the lomuto method to partition the array
 */
function partition(pivotFunction, array, left, right) {
	let originalLeft = left;
	let pivot = pivotFunction(array, originalLeft, right);
	let pivotValue = array[pivot];

	swap(array, pivot, originalLeft);
	left++;

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

	swap(array, originalLeft, left - 1);

	return left;
}
