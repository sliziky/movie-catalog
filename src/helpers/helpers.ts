import { Movie } from "../types/types";

/**
 * [1, 2, 3, 4, 5] (Each 2nd) -> [[1, 2], [3, 4], [5]]
 * @param array - Array
 * @param eachN - Each n-th element
 * @returns Slices the array in each n-th element 
 */
export function createSubarrayEachNthItem<T> (array: T[], eachN: number) : T[][] {
  let newMovies : T[][] = [];
  for(let i = 0; i < array.length; i = i + eachN) {
    newMovies.push(array.slice(i, i + eachN));
  }
  return newMovies;
}