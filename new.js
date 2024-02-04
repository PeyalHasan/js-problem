
const numbers = [5, 6, 11, 12, 98, 5];
function find5(count,find){
    let counts = 0;
    let has = 0;
    for(let number of count){
        if(number === find){
            counts++;
        }
        if(number === findNum){
            has++;
        }
    }
    return `find: ${find}, count: ${counts}, findNum: ${findNum}, count: ${has}`
}
const findNum = 5;
const find = 25;
const data = find5(numbers, find);
console.log(data)
