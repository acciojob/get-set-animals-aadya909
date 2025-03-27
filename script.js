//complete this code
class Animal {
	constructor(species :string )
	this.species=species;
}

makeSound():void{
	console.log(`This ${this.species} makes a sound`);
}
class Dog extends Animal {
	bark():void{
		console.log("woof");
	}
}

class Cat extends Animal {
	purr():void{
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
