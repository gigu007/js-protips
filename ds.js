//basics of data-structures and algorithms

// const binarySearch =(arr,key)=>{
    
//     let start =0;
//     let mid = Math.floor(arr.length/2);
//     let element =arr[mid];
//     if(key <element){
//         return binarySearch(arr.splice(start,mid),key)
//     }
//     if(key>element){
//         return binarySearch(arr.splice(mid),key);

//     }
//     if(key === element){
//         return true;
//     }
    
//         return false;
    

// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9],6));

// var letters =[];
// var word= 'racecar';
// var rword='';
// for(let i=0;i<word.length;i++){
//     letters.push(word[i]);
// }
// for(let i=0;i<word.length;i++){
//     rword +=letters.pop()
// }
// const isPalindrome =(word)=>{
//    word=word.toLowerCase().trim();
//     var letters = [];
//     var reverseWord='';
//     for(let i=0;i<word.length;i++){
//         letters.push(word[i]);
//     }
//     for(let i=0;i<word.length;i++){
//         reverseWord+=letters.pop();
//     }
//    return reverseWord === word?true: false;
//     }
    
// console.log(isPalindrome('dad'));



// const foo={name:"gigu",age:24,'date of birth':1997}
// const loo={name:'graham',age:26,'date of birth':2007}
// const boo={name:'gideon',age:27,'date of birth':1992}
// console.log({foo,loo,boo});
// console.table([foo,loo,boo]);


// console.time('looper')
// let i=0
// while(i<100000000){i++}
// console.timeEnd('looper');


//destructuring
// const turtle={
//     name:'Bob',
//     legs:4,
//     shell:true,
//     type:'amphibian',
//     meal:10,
//     diet:'beries'
// }
// function feedBob(){
//     //bad coding practice
//     // return `Feed ${turtle.name} ${turtle.meal} ${turtle.diet} per day`
//    // a better way of coding
//    const {name,meal,diet}=turtle;
//   return `Feed ${name} ${meal} ${diet} per day`
// }
// console.log(feedBob())


//Template literals
// const horse ={
//     name:'Topher',
//     size:'large',
//     skills:['jousting','racing'],
//     age:7
// }
// const {name, size,skills}=horse
// let bio=`${name} is a ${size} animal skilled in ${skills.reverse().join(' and ')}`
// console.log(bio)

// Advance
// function horseAGe(str,age){
//     const ageStr=age>5?'old':'young'
//     return `${str[0]} ${ageStr} at ${age} years`
// }
// const bio2=horseAGe`This horse is ${horse.age}`
// console.log(bio2)

//spread-syntax
const pikachu ={name:'Pikachu'}
const stats ={hp:40,attack:60,defense:45}

//Bad code
// pikachu['hp']=stats.hp
// pikachu['attack']=stats.attack
// pikachu['defense']=stats.defense

// //OR
// const lvlo=Object.assign(pikachu,stats)
// const lvli=Object.assign(pikachu,{hp:45})

//Good code
const lvlo={...pikachu,...stats}
const lvli={...pikachu,hp:45};
console.log(lvli)


//array
let pokeman=['arbok','raichu','sandshrew'];
//bad array code
// pokeman.push('newman')
// pokeman.push('relief')
// pokeman.push('green')


//good code push
pokeman=[...pokeman,'newman','relief','green']

//unshift
pokeman = ['brown','red','scared',...pokeman]

console.log(pokeman)