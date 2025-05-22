/* const fruits = ["apple", "plum", "pear", "orange"];

if (fruits.length >= 3) {
  console.log("можна поїсти");
} else {
  console.log("ходи голодний");
} */

/* function getOrderQuantity(order) {
  return order.length;
}

console.log(getOrderQuantity(["apple", "peach", "pear", "banana"]));
console.log(getOrderQuantity(["apple", "banana"]));
console.log(getOrderQuantity(["apple", "banana", "pear"]));
console.log(getOrderQuantity([])); */

/* const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]);
 */

/* function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}
console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
 */
/* 
let a = 5;

let b = a;
console.log(a);
console.log(b);
a = 10;
console.log(a);
console.log(b);
 */

/* const a = ["Mango", "Poly"];
const b = a;
console.log(a + 3); // ["Mango", "Poly"]
console.log(b);
 */
/* 
const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

if (emptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}

if (nonEmptyArray) {
  console.log("if is in progress");
} else {
  console.log("else is not performed");
}
 */
/* 
function getLength(array) {
  return array.join(" ");
}

console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
console.log(getLength(["M", "a", "n", "g", "o"]));
console.log(getLength(["top", "picks", "for", "you"]));
 */

/* const name = "Mango";
const letters = name.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
console.log(slugParts); // ["amazing", "french", "recipes"]
 */
/* 
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
console.log(calculateEngravingPrice("Web-development is creative work", 20));
 */

/* const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);
 */
/* 
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allCilents = oldClients.concat(newClients);

console.log(allCilents);
 */
/* 
const tags = [];

for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}

console.log(tags);
 */

/* function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));
console.log(createArrayOfNumbers(29, 34));
 */
/* 
function calculateTotalPrice(order) {
  let total = 0;

  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
 */

/* function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
console.log(getEvenNumbers(6, 12));
console.log(getEvenNumbers(8, 8));
console.log(getEvenNumbers(7, 7)); */

/* function checkStorage(storage, item) {
  const lowercasedItem = item.toLowerCase();

  for (let i = 0; i < storage.length; i++) {
    if (storage[i].toLowerCase() === lowercasedItem) {
      return `${storage[i]} is available to order!`;
    }
  }

  return "Sorry! We are out of stock!";
}

console.log(checkStorage(["apple", "plum", "pear"], "plum"));
console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
console.log(checkStorage(["apple", "plum", "pear"], "pear"));
console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
console.log(checkStorage(["apple", "plum", "pear"], "orange"));
console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
 */

/* function getCommonElements(array1, array2) {
  const commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];

    if (array2.includes(element)) {
      commonElements.push(element);
    }
  }

  return commonElements;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
 */

/* function calculateTotalPrice(order) {
  let total = 0;

  for (const number of order) {
    total += number;
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
console.log(calculateTotalPrice([]));
 */

/* function createReversedArray(...args) {
  return args.toReversed();
}

console.log(createReversedArray(12, 85, 37, 4));
console.log(createReversedArray(164, 48, 291));
console.log(createReversedArray(412, 371, 94, 63, 176));
console.log(createReversedArray());
 */

/* function calculateTax(amount, taxRate = 0.2) {
  return amount * taxRate;
}
console.log(calculateTax(100, 0.1));
console.log(calculateTax(200, 0.1));
console.log(calculateTax(100, 0.2));
console.log(calculateTax(200, 0.2));
console.log(calculateTax(100, 0.3));
console.log(calculateTax(200, 0.3));
console.log(calculateTax(100));
console.log(calculateTax(200));
 */
