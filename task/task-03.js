function foundVowel(string){
    string = string.toLowerCase();
     const vowels ='aeiou';
     let vowelsCount = 0;
     for(let i = 0;i < string.length; i++){
        if(vowels.includes(string[i])){

            vowelsCount++;
        }
     }
     return vowelsCount;
}
const string ='md ';
console.log(foundVowel(string));