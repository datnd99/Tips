/**
 * Get product by product type
 */

// way 1
// using switch key
function getProductUseSwitchCase(productType) {
  switch (productType) {
    case 1:
      return "car";
    case 2:
      return "book";
    case 3:
      return "phone";
    default:
      return "not found";
  }
}

console.log(getProductUseSwitchCase(1)); // "cat"


// way 2
// using new Map
function getProductUseMap(productType) {
  const products = new Map([
    [1, "cat"],
    [2, "book"],
    [3, "phone"],
  ]);

  return products.get(productType) ?? "not found";
}

console.log(getProductUseMap(1)); // "cat"
