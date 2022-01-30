console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // End Grand Child Group;
console.groupEnd(); // End Child Group 1;
console.group("Child Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // End Child Group 2;
console.groupEnd(); // End Group 1;
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // End Group 2;
console.groupCollapsed("Group 3");
console.log("Message One");
console.log("Message Two");
console.groupEnd(); // End Group 2;
/*
    * console.group() vs console.groupCollapsed():
        - console.groupCollapsed() method is similar of console.group();
        - but the new block (console.groupCollapsed()) is collapsed, and requires clicking a disclosure button to read it.
*/