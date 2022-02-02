import Character from '../src/js/character.js';

describe('Character', () => {

  let character1;

  beforeEach(() => {
    character1 = new Character("monkey")
  });

  test('should create character object', () => {
    expect(character1.type).toEqual("monkey");
  });
});