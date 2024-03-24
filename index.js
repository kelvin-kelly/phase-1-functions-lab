// Code your solution in this file!
//a function called distanceFromHqInBlocks()

//  distanceFromHqInBlocks()
 //  returns a distance in blocks
 //  returns a distance in blocks
 //  calculates distances below 42nd street

//distanceFromHqInBlocks function calculates the number of blocks from Scuber headquarters based on the pickup location.

function distanceFromHqInBlocks(pickup){
    const headquarters = 42;
    return Math.abs( pickup - headquarters) ;
    
}


// distanceFromHqInFeet()
//       returns a distance in feet
//       returns a distance in feet
//       calculates distances below 42nd street

//distanceFromHqInFeet function utilizes distanceFromHqInBlocks to calculate the distance in feet from Scuber headquarters.
function distanceFromHqInFeet(pickup) {
    const feetPerBlock = 264;
    return distanceFromHqInBlocks(pickup) * feetPerBlock;
}

// distanceTravelledInFeet()
//       returns the distance travelled in feet
//       returns a distance in feet
//       returns distance when destination is below distance

//istanceTravelledInFeet, calculates the number of feet traveled based on the start and the end of the  blocks.
function distanceTravelledInFeet(startOfTheBlock, endOfTheBlock) {
    const feetPerBlock = 264;
    return Math.abs(startOfTheBlock - endOfTheBlock) * feetPerBlock;
}

// calculatesFarePrice(start, destination)
//       gives customers a free sample
//       charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
//       charges 25 dollars for a distance over 2000 feet
//       does not allow rides over 2500 feet

//using switch case
function calculatesFarePrice(startOfTheBlock, endOfTheBlock) {
    const distance = distanceTravelledInFeet(startOfTheBlock, endOfTheBlock);
    let farePrice = 0;

    switch (true) {

        case distance <= 400:
            farePrice = 0;
            break;

        case distance > 400 && distance <= 2000:
            farePrice = (distance - 400) * 0.02;
            break;

        case distance > 2000 && distance <= 2500:
            farePrice = 25;
            break;
            
        default:
            farePrice = 'cannot travel that far';
            break;
    }

    return farePrice;
}
