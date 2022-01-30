/*
    * BOM [Browser Object Model]:
        - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
        - close() => close window that open with open() method;
        - Window Features
        --- left [Num]
        --- top [Num]
        --- width [Num]
        --- height [Num]
        --- menubar [yes || no]

    * Search:
        - Window.Open Window Features
*/

setTimeout(function () {
    window.open("", "_self", "", false);
}, 1000);

setTimeout(function () {
    window.open("https://google.com",
    "_blank", "width = 400, height = 400, left = 200, top = 100");
}, 1000);