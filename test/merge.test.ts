import { describe, expect, test } from '@jest/globals';
import { merge } from '../src/merge.js';

describe('Merge Function', () => {
  test('should merge three arrays into a sorted ascending array', () => {
    const col1 = [1, 4, 7];
    const col2 = [8, 5, 2]; // Max to Min
    const col3 = [3, 6, 9];
    
    expect(merge(col1, col2, col3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should handle arrays of different lengths', () => {
    const col1 = [1, 10];
    const col2 = [15, 5];
    const col3 = [2, 8, 12];
    
    expect(merge(col1, col2, col3)).toEqual([1, 2, 5, 8, 10, 12, 15]);
  });

  test('should handle empty arrays', () => {
    expect(merge([], [3, 1], [2])).toEqual([1, 2, 3]);
  });
});