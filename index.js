const fOne = require("./utilities/fileOne");
const fTwo = require("./utilities/fileTwo");
const arr1 = [1, 2, 34, 5];
const arr2 = [2, 3, 45, 6];
console.log(fOne.sum(arr1));
console.log(fOne.concat(arr1, arr2));
console.log(fTwo.cut3(arr2));
console.log(fTwo.lgNum(arr1));
