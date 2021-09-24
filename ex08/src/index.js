function myMutation (arr) {
    var a ="Niho";
    newStr = arr[0].indexOf(arr[1]) != -1;

    return newStr;

}
console.log(myMutation(["hello","hey"]));
console.log(myMutation(["hello","Hello"]));
console.log(myMutation(["zyxwvutsrqponmlkjihgfedcba","qrstu"]));
console.log(myMutation(["Marty","Army"]));
console.log(myMutation(["Mary","Aarmy"]));
console.log(myMutation(["Alien","line"]));
console.log(myMutation(["Floor","for"]));
console.log(myMutation(["hello","neo"]));
console.log(myMutation(["voodoo","no"]));
console.log(myMutation(["ate","date"]));
console.log(myMutation(["Tiger","Zebra"]));
console.log(myMutation(["Noel","Ole"]));
module.exports = myMutation;