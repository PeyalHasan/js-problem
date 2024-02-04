/**
 * function takes an array as parameter 
 * give me the average of the odd numbers in the array
 */

function oddAvg(numbers){
    let sum = 0; 
    let odds = [];
    for(let number of numbers){
        if(number % 2 !== 0){
            odds.push(number);
        }
    }
    for(let odd of odds){
        sum = sum + odd;
        
    }
    const count= odds.length;
    const avg = sum / count;
    return avg;
}


const numbers = [12, 11, 23, 54, 67, 90, 57, 87];
const odAv = oddAvg(numbers);
console.log(odAv)
