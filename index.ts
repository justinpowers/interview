// Return the k-th largest element from an unordered array.
// List: [8, 1, 4, 3, 7, 9], K: 3, Output: 7

// on further thought,
//   instead of creating a sorted subset of the unsorted original
//   which then requires either the below linear search or a faster binary search
//   and instead of going through trouble of implementing a heap in js
//   just use an in-place selection algo on the unsorted original
//   quickselect seems likely to be best
function search(base: Array<number>, comparand: number): number {

  if (base.length == 0) {
    return 0
  }

  let ix = base.length - 1
  while(comparand > base[ix] && ix >= 0) ix--

  return ix + 1
}


const insert = (el: number, arr: Array<number>, ix: number): Array<number> => arr.slice(0, ix).concat([el]).concat(arr.slice(ix,))


const trimToMaxLength = (arr: Array<number>, maxLength: number): Array<number> => arr.length > maxLength ? arr.slice(0, maxLength - arr.length) : arr


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

  nums.forEach(num => {
      const pos = search(base, num)
      base = insert(num, base, pos)
      base = trimToMaxLength(base, k)
  })

  return base.pop() as number
}

console.log(getKthLargest([3,4,7,2,-4,-4,2,4,100],5))

