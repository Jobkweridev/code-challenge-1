function DemeritPoints(speed) {
    const speedLimit = 70;

// setting speed limit

    const kmPerDemeritPoint = 5;

//setting the demerit points per kilometre


    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
//Calculations for the number of demerit points
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log("Demerit points: " + demeritPoints);
    }
//setting the limit for max number of demerit points befor suspension of license
    if (Demeritpoints> 12){
        return 'License Suspended'
    }
}
 DemeritPoints(80);



















