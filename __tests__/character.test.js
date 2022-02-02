import Character from '../src/js/character.js';

describe('Character', () => {

  let character1;

  beforeEach(() => {
    character1 = new Character("monkey")
  });

  test('should create character object', () => {
    expect(character1.type).toEqual("monkey");
  });

  test('should increase fullness depending on food that was eaten', () => {
    expect(character1.fullness).toEqual(2);
  })
});
