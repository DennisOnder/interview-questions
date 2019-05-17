const hero = {
  name: "Batman",
  getName: function() {
    return this.name;
  }
};

const name = hero.getName;

console.log(name());
console.log(hero.getName());
