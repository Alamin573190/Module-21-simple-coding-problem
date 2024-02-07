function countDuplicates(arr){
    let counts = {};
    arr.forEach(function(num)  {
        counts[num] = (counts [num] || 0 )+1;
        
    });
    let duplicates = {};
    for(let num in counts){
        if(counts[num] > 1){
            duplicates[num] = counts[num];
        }
    }
    return duplicates;
}
let array = [1, 2, 3,1, 5, 6, 2, 7, 8,3,];
console.log(countDuplicates(array));