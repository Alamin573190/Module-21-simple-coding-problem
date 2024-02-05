const biriyaniKhur =['harun','fahim','alamin','hoosain','harun','aminul'];
function noDoplicate(array){
    // console.log(array);
    const pureArray=[];
    for(const item of array ){
        if(pureArray.includes(item) === false){
            pureArray.push(item);
        }

    }
    return pureArray;
}
const newArray = noDoplicate(biriyaniKhur);
console.log(newArray);



