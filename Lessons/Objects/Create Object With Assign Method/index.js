/*
    - Object:
        --- Create Object With assign Method:
            ------ concat betweeen objects;
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
        return this.prop1;
    },
};

let obj2 = {
    prop2: 2,
    meth2: function () {
        return this.prop2;
    },
};

let targetObject = {
    prop1: 100,
    prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);
// two props with same name => get only last one => (prop1);

finalObject.prop1 = 200; // update prop1;
finalObject.prop4 = 4; // add prop4;

console.log(finalObject);
/*
    {
        prop1: 200,
        prop3: 3,
        meth1: [Function: meth1],
        prop2: 2,
        meth2: [Function: meth2],
        prop4: 4
    }
*/

console.log('-'.repeat(50));

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);
// {prop1: 1, meth1: [Function: meth1], prop5: 5, prop6: 6};