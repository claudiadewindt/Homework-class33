'use strict';
/*
Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(basket, allergicItem) {
  const newBasket = basket.filter(item => item !== allergicItem);
  return newBasket;
}
sanitizeFruitBasket(fruitBasket, 'lemon');
// ! Unit tests (using Jest)
describe('sanitizeFruitBasket', () => {
  test('should take two parameters', () => {
    expect(sanitizeFruitBasket.length).toBe(2);
  });

  test('should not modify the original `fruitBasket` array', () => {
    
    const originalFruitBasketContents = [...fruitBasket];

    sanitizeFruitBasket(originalFruitBasketContents, 'lemon');
    expect([
      'apple',
      'lemon',
      'grapefruit',
      'lemon',
      'banana',
      'watermelon',
      'lemon',
    ]).toStrictEqual(fruitBasket);
  });

  test('should return a new array that does not include the unwanted `lemon`', () => {
    expect([
      'apple',
      'grapefruit',
      'banana',
      'watermelon',
    ]).toStrictEqual(sanitizeFruitBasket(fruitBasket, 'lemon'));
  });
});
