function arrayAvg(numbers){
    const oddNum =[];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 1){
            // console.log(number);
            oddNum.push(number);
        }
    }
    console.log(oddNum);
    sum = 0;
    for(const number of oddNum){
        sum = sum + number;
    }
        const count = oddNum.length;
        const avg = sum / count;
        
        // console.log(sum);
        
        return avg;
        
        
        
    
   
    
}
const arrayNumber =[12 ,23 , 45,44 ,66,76,97, 88 ,90,];

console.log(arrayAvg(arrayNumber));


// const avgNumber = oddNum(number);
// console.log(avgNumber);
