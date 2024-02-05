function inchToFeet(inch){
    const inchDivi = inch / 12;
    const inchParsint =parseInt(inchDivi);
    const inchModu = inch % 12 ;
    const result = inchParsint + ' ft ' + inchModu + ' inch ';
    return result;
}
const convert = inchToFeet(75);
console.log(convert);