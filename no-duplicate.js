/**
 * array has some duplicate elements 
 * []
 */

const numbers = [1, 2, 4, 35,34,22,1, 2, 3, 4, 65, 34]
let newArray = [];

function noDuplicate(array){
   for(const item of array){
    if(newArray.includes(item) === false){
        newArray.push(item);
    }
   }
   return newArray;
}

const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray)





const names = ['Ami', 'Tomi', 'Komi', 'Tomi', 'Ami'];

let chalo = [];

function noDabule(array){
    for(let name of array){
        if(chalo.includes(name) === false){
            chalo.push(name);
        }
    }
    return chalo;
}

const valueOfArray = noDabule(names)
console.log(valueOfArray)