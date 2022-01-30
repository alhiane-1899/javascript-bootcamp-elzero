function ageInTime(theAge) {
    console.log(`Months Example => ${theAge * 12} Months`);
    console.log(`Week Example => ${theAge * (4 * 12)} Weeks`);
    console.log(`Day Example => ${theAge * 365} Days`);
    console.log(`Hour Example => ${theAge * (365 * 24)} Hours`);
    console.log(`Minute Example => ${theAge * ((365 * 24) * 60)} Minutes`);
    console.log(`Second Example => ${theAge * (((365 * 24) * 60) * 60)} Seconds`);
}

// Needed Output:
// ageInTime(110); // Age Out Of Range;
ageInTime(1); // Months Example => 456 Months;