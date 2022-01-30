/*
    * DOM [CSS]:
        - style;
        - cssText;
        - removeProperty(propertyName) [Inline, Stylesheet];
        - setProperty(propertyName, value, priority) [Inline, Stylesheet];
*/

let myDiv = document.querySelector(".my-div");

// style:
myDiv.style.color = "red";
myDiv.style.fontWeight = "bold";

// cssText:
myDiv.style.cssText = `
    font-weight: bold;
    color: red;
    opacity: .8;
`;

// removeProperty(propertyName) => Inline Style:
myDiv.style.removeProperty("color");

// setProperty(propertyName, value, priority) => Inline Style:
myDiv.style.setProperty("font-size", "40px", "important");

/* 
    * StyleSheet:
        - styleSheets;
        - rules;
        - removeProperty(propertyName);
        - setProperty(propertyName, value, priority);
*/

console.log(document.styleSheets);
// StyleSheetList {0: CSSStyleSheet, length: 1} => styles.css;

console.log('-'.repeat(50));

console.log(document.styleSheets[0]);
/*
    CSSStyleSheet {ownerRule: null, cssRules: CSSRuleList, rules: CSSRuleList, type: 'text/css', href: 'http://127.0.0.1:5500/Dom/CSS%20Styling%20And%20Stylesheets/styles.css', …}
*/

console.log('-'.repeat(50));

console.log(document.styleSheets[0].rules);
/*
    * 2 rules (0: *, 1: .my-div);
        - CSSRuleList {0: CSSStyleRule, 1: CSSStyleRule, length: 2};
*/

console.log('-'.repeat(50));

console.log(document.styleSheets[0].rules[1]);
/*
    .my-div {
        font-size: 20px;
        line-height: 24px;
        font-style: italic;
    }
*/

console.log(document.styleSheets[0].rules[1].style.removeProperty("font-style"));

console.log(document.styleSheets[0].rules[1].style.setProperty("line-height", "40px", "important"));

console.log(document.styleSheets[0].rules[1].style.setProperty("margin", "20px"));