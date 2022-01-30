/*
    * Switch Statement:
        switch(expression) {
            Case 1:
            // Code Block
            break;
            Case 2:
            // Code Block
            break;
            Default:
            // Code Block
        }
    - Default Ordering
    - Multiple Match
    - === => swithch compare using identical operator;
*/

let day = 7;

switch (day) {
    // default:
    //     console.log("Unknown Day");
    //     break;
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday");
        break;
    case 2: 
        console.log("Monday")
    case 3:
        console.log("Thusday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Unknown Day");
        break;
}