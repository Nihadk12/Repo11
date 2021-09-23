myArr = [2, 4, 0, 8, 10];

function myArrayFunction(arr) {
    var myIthems = [...arr];
    
    myIthems = myArr;
    myIthems[2] = 6;

    return myIthems;
}
console.log(myArrayFunction(myArr));
module.exports = myArrayFunction;