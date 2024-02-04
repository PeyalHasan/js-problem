// Task-1

function celsToFrh(cels){
    let Frh = cels * (9/5)+32;
    return Frh;
}
// console.log(celsToFrh(25) + ' F');

// Task 

const numbers = [5, 6, 11, 12, 98, 5];
function find5(count){
    let counts = 0;
    for(let number of count){
        if(count[number] === 5){
            counts++
        }
    }
    return counts;
}
const data = find5(numbers);
console.log(data)

function find15(count){
    let find = 0;
    for(number of count){
        if(count[number] === 15){
            find++
        }
    }

    return find;
}
// const search = find15(numbers);
// console.log(search)

// Task - 3

// const sentence = 'I am a student. I want to know about Web development';

// function viole(sentence){
//     let contain = 0;
//     let vowels = 'aeiouAEIOU'
//     for(let i = 0; i < sentence.length; i++){
//         if(vowels.includes(sentence[i]) ){
//             contain++
//         }
//     }
//     return contain;
// }

// const result = viole(sentence)
// console.log(result)

// Task -4

const learn = 'I am learning Programming to become a programmer';
function findLongestWord(sentence){
    const words = sentence.split(' ')
    let longestword = '';
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestword.length){
            longestword = words[i]
        }
    }
    return longestword
}

// const longestWordResult = findLongestWord(learn);
// console.log(longestWordResult)

function randomNumber (min, max){
    return Math.floor(Math.random() * (min , max));
}
const num = randomNumber(10, 20)
console.log(num)

console.log(Math.pow(2,3))
if(typeof parameter === undefined)

