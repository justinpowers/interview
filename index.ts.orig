// Return the k-th largest element from an unordered array.
// List: [8, 1, 4, 3, 7, 9], K: 3, Output: 7

function getKthLargest(nums: Array<number>, k: number): number {
  if (nums.length < 1) {
    throw 'nums must contain at least on element';
  }

  if (k < 1) {
    throw 'k must be an integer greater than 0';
  }

  if (k > nums.length) {
    throw 'k must be less than or equal to the number of elements in nums'
  }

  let base: Array<number> = []

  for (let i = 0; i < nums.length; i++) {
      const comparand = nums[i];
      
      let j = base.length - 1;

      // on further thought,
      //   instead of creating a sorted subset of the unsorted original
      //   which then requires either the below linear search or a faster binary search
      //   and instead of going through trouble of implementing a heap in js
      //   just use an in-place selection algo on the unsorted original
      //   quickselect seems likely to be best
      while(comparand > base[j]) {
          j--
      }

      base = base.slice(0,j + 1).concat([comparand]).concat(base.slice(j + 1,))

      if (base.length > k) {
          base.pop()
      }
      console.log(comparand, base)
  }

  return base.pop() as number  // needed because TS can't be sure it won't be undefined
}
