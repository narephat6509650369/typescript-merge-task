
export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const result: number[] = [];
  let i = 0; // Pointer for collection_1 (Ascending)
  let j = collection_2.length - 1; // Pointer for collection_2 (Descending -> we read it backward)
  let k = 0; // Pointer for collection_3 (Ascending)

  // Continue while there are elements in any of the three arrays
  while (i < collection_1.length || j >= 0 || k < collection_3.length) {
    const val1 = i < collection_1.length ? collection_1[i]! : Infinity;
    const val2 = j >= 0 ? collection_2[j]! : Infinity;
    const val3 = k < collection_3.length ? collection_3[k]! : Infinity;

    // Find the minimum among the current pointers
    const minVal = Math.min(val1, val2, val3);

    result.push(minVal);

    // Advance the pointer of the array that provided the minimum value
    if (minVal === val1) {
      i++;
    } else if (minVal === val2) {
      j--;
    } else {
      k++;
    }
  }

  return result;
}