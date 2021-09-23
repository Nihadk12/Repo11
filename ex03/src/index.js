var myPetsArray = ["Dog", "Cat"];

function myArrayFunction(myPets) {

    var myNewPets = [...myPets];

    myNewPets.push("Bird","Fish");
    myNewPets.pop("Fish");

    firstPet = myNewPets[0];
    lastPet = myNewPets[myNewPets.length - 1];



    return myNewPets;

}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;