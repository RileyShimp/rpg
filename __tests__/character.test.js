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
  

  test('should increase fullness depending on food that was eaten', () => {
    character1.eat();
    expect(character1.fullness).toBeGreaterThan(0);
  })

  test('should increase fullness depending on food that was eaten', () => {
    character2.eat();
    expect(character2.fullness).toBeGreaterThan(0);
  })

  test('should increase fullness depending on food that was eaten', () => {
    character3.eat();
    expect(character3.fullness).toBeGreaterThan(0);
  })

  test('should increase fullness depending on food that was eaten', () => {
    character4.eat();
    expect(character4.fullness).toBeGreaterThanOrEqual(0);
  })

  test('should increase fullness by 2 if food = taco', () => {
    character1.food = "taco";
    character1.monkeyEat();
    expect(character1.fullness).toEqual(2);
  })

  test('should increase fullness by 3 if food = banana', () => {
    character1.food = "banana";
    character1.monkeyEat();
    expect(character1.fullness).toEqual(3);
  })

  test('should increase fullness by 4 if food = poo', () => {
    character1.food = "poo";
    character1.monkeyEat();
    expect(character1.fullness).toEqual(4);
  })

  test('should increase fullness by 3 if food = pizza', () => {
    character1.food = "pizza";
    character1.monkeyEat();
    expect(character1.fullness).toEqual(3);
  })

  test('should increase fullness by 4 if food = taco', () => {
    character2.food = "taco";
    character2.catEat();
    expect(character2.fullness).toEqual(4);
  })

  test('should increase fullness by 1 if food = banana', () => {
    character2.food = "banana";
    character2.catEat();
    expect(character2.fullness).toEqual(1);
  })

  test('should increase fullness by 4 if food = poo', () => {
    character2.food = "poo";
    character2.catEat();
    expect(character2.fullness).toEqual(4);
  })

  test('should increase fullness by 2 if food = pizza', () => {
    character2.food = "pizza";
    character2.catEat();
    expect(character2.fullness).toEqual(2);
  })

  test('should increase fullness by 2 if food = taco', () => {
    character4.food = "taco";
    character4.dogEat();
    expect(character4.fullness).toEqual(2);
  })
  
  test('should increase fullness by 0 if food = banana', () => {
    character4.food = "banana";
    character4.dogEat();
    expect(character4.fullness).toEqual(0);
  })
  
  test('should increase fullness by 6 if food = poo', () => {
    character4.food = "poo";
    character4.dogEat();
    expect(character4.fullness).toEqual(6);
  })
  
  test('should increase fullness by 3 if food = pizza', () => {
    character4.food = "pizza";
    character4.dogEat();
    expect(character4.fullness).toEqual(3);
  })
  
  test('should increase fullness by 1 if food = taco', () => {
    character3.food = "taco";
    character3.raccoonEat();
    expect(character3.fullness).toEqual(1);
  })
  
  test('should increase fullness by 1 if food = banana', () => {
    character3.food = "banana";
    character3.raccoonEat();
    expect(character3.fullness).toEqual(1);
  })
  
  test('should increase fullness by 4 if food = poo', () => {
    character3.food = "poo";
    character3.raccoonEat();
    expect(character3.fullness).toEqual(4);
  })
  
  test('should increase fullness by 5 if food = pizza', () => {
    character3.food = "pizza";
    character3.raccoonEat();
    expect(character3.fullness).toEqual(5);
  })
});
