function inchToFeet(inch){
    const feet = inch / 12 ;
    return feet;
}


function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inches = inch % 12 ;
    const result = feetNumber + ' ft ' + inches + ' inch';
    return result;
}

// const myHeight = inchToFeet2 (64);
// console.log(myHeight)

function mileToKilometer(mile){
    const kilo = mile * 1.60934 ;
    return kilo;
}
// console.log(mileToKilometer(2))

function kmToMiles(km){
    const miles = km * 0.621371;
    return miles;
}
// console.log(kmToMiles(1))

function gmToKm(gm){
    const km = gm * 0.001;
    return km;
}
// console.log(gmToKm(1000))

function mlToCm (ml){
    const cm = ml * 0.01;
    return cm ;
}
// console.log(mlToCm(300))
