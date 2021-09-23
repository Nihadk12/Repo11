var monitorListArray = ["Apple", "Peach","Barry"];

function myMonitorFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorList = [];
    
        for (let i = 0; i < monitorListArray.length ; i++) {
            monitorList[i] = [monitorListArray[i] , i+1];
          
        }
    
    return monitorList;

}
console.log(myMonitorFunction(monitorListArray));
module.exports = myMonitorFunction;