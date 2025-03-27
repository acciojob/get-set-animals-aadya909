class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  get species(): string {
    return this._species;
  }

  set species(value: string) {
    this._species = value;
  }

  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("woof");
  }
}

class Cat extends Animal {
  purr(): void {
    console.log("purr");
  }
}

// Do not change the code below this line
(window as any).Animal = Animal;
(window as any).Dog = Dog;
(window as any).Cat = Cat;

