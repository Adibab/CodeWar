
function adjacentElementsProduct(array) {
  // max product
  let product = []
  array.forEach((element, i) => {
    product.push(array[i] * array[i+1])
  });
  return Math.max(...product.slice(0, -1))
}
let numbers = [-23, 4, -5, 99, -27, 329, -2, 7, -921];
let numbers2 = [9, 5, 10, 2, 24, -1, -48];
let numbers3 = [5, 6, -4, 2, 3, 2, -23];

console.log(adjacentElementsProduct(numbers));
console.log(adjacentElementsProduct(numbers2));
console.log(adjacentElementsProduct(numbers3));
