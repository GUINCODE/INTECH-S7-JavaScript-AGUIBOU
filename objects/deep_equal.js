const deepEqual = (tab1, tab2) => {
  let arr1 = [];
  let arr2 = [];
  if (typeof tab1 != String) {
    arr1 = JSON.stringify(tab1);
  } else {
    arr1 = tab1;
  }

  if (typeof tab2 != String) {
    arr2 = JSON.stringify(tab2);
  } else {
    arr2 = tab2;
  }

  if (arr1 === arr2) return true;
  else return false;
};

const a1 = [1, 2, [3, 4], 5];
const a2 = JSON.parse(JSON.stringify(a1)); // Deep copy
console.log(a1===a2); //=> false
console.log(deepEqual(a1, a2)); // => true
