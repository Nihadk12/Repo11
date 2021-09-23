temps = [
    monday = [31, 32, 19, 37],
    tuesday = [29, 27, 55, 36],
    wednesday = [17, 27, 42, 46],
    thursday = [29, 52, 21, 64],
    friday = [91, 27, 31, 61]
];

function myArrayFunction(arr) {
    var newTemps = [...arr];
    var averageDayTemp = [];

    for(var i=0; i<temps.length ; i++){
         averageDayTemp.push(temps[i].reduce((acc, c) => acc + c, 0)/temps[i].length); 
         for(k=0; k<temps[i].length;k++) {
              temps[i][k]; 
         }
    }
    return averageDayTemp;  
}
console.log(myArrayFunction(temps));
module.exports = myArrayFunction;