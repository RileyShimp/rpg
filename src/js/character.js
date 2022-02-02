export default class Character {
  constructor(type) {
    this.type = type;
    this.fullness = 0;
    this.foodList = ["banana","taco","poo", "pizza"];
    this.food = "";
    this.level = 1;
  }

  eat() {
    this.food = this.foodList[(Math.floor(Math.random() * 4))];
    if(this.type === "monkey"){
      return this.monkeyEat();
    }
    else if(this.type === "cat"){
      return this.catEat();
    }
    else if(this.type === "raccoon"){
      return this.raccoonEat();
    }
    else {
      return this.dogEat();
    }
  }

  monkeyEat() {
    if (this.food === "taco"){
      return this.fullness += 2;
    }
    else if (this.food === "banana"){
      return this.fullness += 3;
    }
    else if (this.food === "poo"){
      return this.fullness += 3;
    }
    else {
      return this.fullness += 3;
    }
  }

  catEat () {
    if (this.food === "taco"){
      this.fullness += 4;
    }
    else if (this.food === "banana"){
      this.fullness += 1;
    }
    else if (this.food === "poo"){
      this.fullness += 4;
    }
    else {
    this.fullness += 2;
    }
  }

  raccoonEat() {
    if (this.food === "taco"){
      return this.fullness += 1;
    }
    else if (this.food === "banana"){
      return this.fullness += 1;
    }
    else if (this.food === "poo"){
      return this.fullness += 4;
    }
    else {
      return this.fullness += 5;
    }
  }

  dogEat() {
    if (this.food === "taco"){
      return this.fullness += 2;
    }
    else if (this.food === "banana"){
      return this.fullness += 0;
    }
    else if (this.food === "poo"){
      return this.fullness += 6;
    }
    else {
      return this.fullness += 3;
    }
  }
}