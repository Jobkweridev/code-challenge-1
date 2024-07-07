function studentGradeGenerator() {
    // prompt for enteringinput
    const input = prompt("Enter the student's points (between 0 and 100):");
    const points= input;


    //setting the buondaries for the data type to be inp
      if ( points>= 0 && points <= 100) {
        const grade = Grade(points);
        alert(`The grade for the points ${points} is ${grade}.`);
        } else {
        alert("Please enter a valid points between 0 and 100.");
      }
}

//function for calculating the grade according to the points input
function Grade(points) {
    if (points > 79) {
        return 'A';
    } else if (points >= 60 && points <= 79) {
        return 'B';
    } else if (points >= 50 && points <= 59) {
        return 'C';
    } else if (points >= 40 && points <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
studentGradeGenerator(Grade)