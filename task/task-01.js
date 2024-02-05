// Write a function to convert temperature from Celsius to Fahrenheit.



function celciusToFarenheit(celcius){
    let farenheit =(celcius * 9/2)+ 32;
    return farenheit;
}
let celcius = 20;
let farenheighttem =celciusToFarenheit(celcius);
console.log('farenheight tem :',farenheighttem);