function Animal(name, animalType){
    this.name = name;
    this.animalType = animalType;
}

Animal.prototype.getName = function(){
    console.log(this.name);
}

Animal.prototype.getAnimalType = function(){
    console.log(this.animalType);
}

function Dog(name){
    Animal.call(this, name, "dog");
}

Dog.prototype = Object.create(Animal.prototype);
var myAnimal = new Animal("ditto", "pokemon");
myAnimal.getName();
myAnimal.getAnimalType();

var myDog = new Dog("Snoopy");
myDog.getName();
myDog.getAnimalType();