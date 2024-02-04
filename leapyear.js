/***
 * Simple role.
 */

function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false
    }
}
// console.log(leapYear(2020))


/***
 * 1. Those year that is not divisible by 100 and if year is divisible by 4 : then it will be a leap year.
 * 2. if the year is divisible by 400 and divisible by 100 : then it is a leap year.
 * 3. else : it is not a leap year
 */

function leapYear2(year){
    if(year % 100 !==0 && year % 4 === 0){
        return true;
    }
    if(year % 100 === 0 && year % 400 === 0){
        return true;
    }
    return false;
}
console.log(leapYear2(2100))
console.log(leapYear2(2400))
console.log(leapYear2(1900))
console.log(leapYear2(2020))