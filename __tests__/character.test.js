import Character from '../src/js/character.js';

describe('Character', () => {

  let character1;
  let character2;
  let character3;
  let character4;

  beforeEach(() => {
    character1 = new Character("monkey")
    character2 = new Character("cat")
    character3 = new Character("raccoon")
    character4 = new Character("dog")
  });

  test('should create character object', () => {
    expect(character1.type).toEqual("monkey");
  });

  const eatCases = [
    ["monkey"],
    ["cat"],
    ["raccoon"],
    ["dog"]
  ]

  test.each(eatCases)('given %p as arguments, return greater than or equal to 0', (character) => {
    test = new Character(character)
    test.eat()
    expect(test.fullness).toBeGreaterThanOrEqual(0);
  })

  
  const monkeyCases = [
    ["taco", 2],
    ["banana", 3], 
    ["poo", 3], 
    ["pizza", 3]
  ]
  
  test.each(monkeyCases)('given %p as arguments, return %p', (a,expected) => {
    character1.food = a;
    character1.monkeyEat();
    expect(character1.fullness).toEqual(expected);
  })
  
  const catCases = [
    ["taco", 4],
    ["banana", 1], 
    ["poo", 4], 
    ["pizza", 2]
  ]
  test.each(catCases)('given %p as arguments, return %p', (a,expected) => {
    character2.food = a;
    character2.catEat();
    expect(character2.fullness).toEqual(expected);
  })
  
  const dogCases = [
    ["taco", 2],
    ["banana", 0], 
    ["poo", 6], 
    ["pizza", 3]
  ]
  test.each(dogCases)('given %p as arguments, return %p', (a,expected) => {
    character4.food = a;
    character4.dogEat();
    expect(character4.fullness).toEqual(expected);
  })
  
  const raccoonCases = [
    ["taco", 1],
    ["banana", 1], 
    ["poo", 4], 
    ["pizza", 5]
  ]
  test.each(raccoonCases)('given %p as arguments, return %p', (a,expected) => {
    character3.food = a;
    character3.raccoonEat();
    expect(character3.fullness).toEqual(expected);
  })
});

// test('should increase fullness depending on food that was eaten', () => {
//   character1.eat();
//   expect(character1.fullness).toBeGreaterThan(0);
// })

// test('should increase fullness depending on food that was eaten', () => {
//   character2.eat();
//   expect(character2.fullness).toBeGreaterThan(0);
// })

// test('should increase fullness depending on food that was eaten', () => {
//   character3.eat();
//   expect(character3.fullness).toBeGreaterThan(0);
// })

// test('should increase fullness depending on food that was eaten', () => {
//   character4.eat();
//   expect(character4.fullness).toBeGreaterThanOrEqual(0);
// })