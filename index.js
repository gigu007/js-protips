// const bubbleSort=(arr)=>{
//     for(let i=0; i<arr.length;i++){
//         for(let j=0;j<arr.length;j++){
//            if(arr[j]>arr[j+1]){
//                let temp =arr[j];
//                arr[j]=arr[j+1];
//                arr[j+1]=temp;
//            }
//         }
//     }
//     return arr
// }
      

const mergeSort =(arr1,arr2)=>{
    let result =[];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else{
           result.push(arr2[j]);
           j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
 
}
const merge = (arr)=>{
    if(arr.length<=1)return arr;
    let mid = Math.floor(arr.length/2);
    let left = merge(arr.slice(0,mid));
    let right = merge(arr.slice(mid));
    return  mergeSort(left,right);
}

console.log(merge([2,3,41,6,74,6,823,56,9]));


// const seniorMember = (data)=>{
//     data.map((info)=>{//if we use foreach there will be no return value .foreach doesn't have a return value
//         if(info[0]>=55 && info[1]>7){
//           return 'senior';
//         }
//         else {
//             return 'open';}
//     })
    
// }
// console.log(seniorMember([[23,45],[26,45],[76,23],[56,8]]));
// const seniorMember =(data)=>data.map(([age,handicap])=>(age>54 && handicap>7))?'senior member':open

const songDecoder =(song)=>{
   console.log(song.replaceAll('wub',' '));
   //or
   
   return song.replace(/wub +/g,' ').trim();//the double slash is a regular expression which is a way we can find something in a string 
   //the g above is global
   //log on to regex 101 for regular expressionf
   //.trim() method removes white spaces
}
console.log(songDecoder('wubgigiwubiswubhere'));

const adup=(numbers)=>{
    let result= numbers.sort((a,b)=>{a-b});
    return result[0] + result[1];
    //or
    //const [firstNumber,secondNumber]=numbers.sort((a,b)=>{a-b})
    //return firstNumber + secondNumber
}

//you willl create a function that takes a 
//list of non-negative integers and strings and returns a new list
//with the strings filtered out
//i.e you are required to replace every letter with its position in the alphabet
//["the sunset set at twelve ."] should return
//' 20 8 5 19 21 14 19 5 20 19 1 20 20 23 5 12 22 5 '

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
const getThePositionOfLetters=(text)=>{
    
    return text
    .toLowerCase()
    .replace(/[^a-zA-Z]/g, "")
    .split("")
    .map((letter)=>alphabetArray.indexOf(letter)+1)
    .join(" ");//helps to join an array into a string
}
console.log(getThePositionOfLetters("the sunset set at twelve"));
const vowelCounts = (letters)=>{
    let count =0;
    for(const char of letters) {
        if(char.match(/[aeiou]/g)){
            count++;
        }
    }
    
    return count;
     
}
console.log(vowelCounts('redgnolsdie'));
console.log('qertyu'.split(''));//this splits a string into an array of letters
//output ['q','e','r','t','y']
console.log(['e','r','t','u','o'].join(''))//this converts it to a string
//output is ertuo

const countVowelLetters =(letters)=>{
    let lettersArray= letters.split('');
    let vowels='aeiou'.split('');
    let count =0;
    for(let i =0; i<lettersArray.length;i++){
       
        let letter = lettersArray[i]  ;
        for(let j=0;j<vowels.length;j++){
            if(letter === vowels[j]){
                count++;
            }
        }
    }
   return count;
}
console.log(countVowelLetters('ertuiosgdhks'))


const getCount = (str)=>{
return str.split("").reduce((acc,letter)=>
    (letter.match(/[aeiou]/g)? acc + 1: acc), 0)


};
console.log(getCount('ertuiosgdhks'))

const getvowe =(str)=>{
    return str.match(/[aeiou]/g || []).length;
}
console.log(getvowe('ertuiosgdhks'));

