// Generate a random number between 10 to 20.fu
function generateRandomNumber (){
    var randomNumber = Math.random();
    var scaledNumber = randomNumber * (20 - 10)+10 ;
    var result = Math.round(scaledNumber);
    return result;
}
var randomNum = generateRandomNumber();
console.log(randomNum);
