/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Types For Info Is
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/

function showDetails(...info) {
    let name, age, isHire;
    for (let i = 0; i < info.length; i++) {
        if (typeof info[i] === 'string') {
            name = info[i];
        } else if (typeof info[i] === 'number') {
            age = info[i];
        } else {
            isHire = info[i];
        }
    }
    console.log(`Hello ${name}, Your Age Is ${age}, ${isHire ? "You Are Available For Hire" : "You Are Not Available For Hire"}`);
}

showDetails("Alhiane", 24, true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 18, "Aicha"); 
// "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails("Latifa", false, 17); 
// "Hello Osama, Your Age Is 38, You Are Not Available For Hire"