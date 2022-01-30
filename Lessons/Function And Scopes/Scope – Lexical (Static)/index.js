/*
    * Scope:
        - Lexical Scope

    * Search:
        - Execution Context;
        - Lexical Environment;
*/

function parent() {

    let a = 10;

    function child() {

        console.log(a); // 10;
        // console.log(`From Child ${b}`); // Error: b is not defined;

        function grand() {
            let b = 100;
            console.log(`From Grand ${a}`); // From Grand 10;
            console.log(`From Grand ${b}`); // From Grand 100;
        }

        grand();

    }

    child();

}

parent();