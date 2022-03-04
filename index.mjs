import * as fOne from "./utilities/fileOne.mjs";
import { lgNum, cut3 } from "./utilities/fileTwo.mjs";
const arr1 = [1, 2, 34, 5];
const arr2 = [2, 3, 45, 6];
console.log(fOne.sum(arr1));
console.log(fOne.concat(arr1, arr2));
console.log(lgNum(arr2));
console.log(cut3(arr1));
