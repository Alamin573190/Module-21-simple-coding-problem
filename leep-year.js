function isLeepYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isyear =isLeepYear(2024);
// console.log(isyear);


// leepyear 02
function isLeepYear02(year){
   if((year % 4 === 0) && (year % 100 !== 0)){
    return true;
   }  
   else if((year % 100 === 0) && (year % 400)){
    return true;
   }
   else{
    return false;
   }
}
const isleepYear1 =isLeepYear02(2052);
console.log(isleepYear1);
 