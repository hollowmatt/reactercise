export function Objects() {
  const dog = {};
  dog.name = "Logan";
  dog.legs = 4;
  dog.color = "whilte";
  dog.age = 5;
  dog.bark = function() {
    return "woof, woof";
  };
  dog.breed = 'Greyhound';
  dog.getDogInfo = function() {
    return(`${this.name} is a ${this.age} year old ${this.breed}, with a ${this.color} coat, and ${this.legs} legs.`);
  }
  console.log(dog.bark());
  console.log(dog.getDogInfo());
}