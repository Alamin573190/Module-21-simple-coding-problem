const heights2 = "I am student of sherpur poly";
const separate = heights2.split(' ');
// console.log(separate);
function shortNameOfArray(names){
    
    


    let shortName =names[0];
    for(let name of names){
        if(name.length > shortName.length){
            shortName = name;
        }
    }
    return shortName;
   
}
const namess=shortNameOfArray(separate);
console.log(namess);