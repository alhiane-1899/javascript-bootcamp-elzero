/*
    - Object:
        --- Create Object With assign Method:
*/

let user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2; // return user.age * 2;
    },
};

console.log(user); // user: { age: 20, doubleAge: [Function: doubleAge]};
console.log(user.age); // 20;
console.log(user.doubleAge()); // 40;

console.log('-'.repeat(50));

let obj = Object.create({});
obj.a = 100;
console.log(obj); // obj: {a: 100};

console.log('-'.repeat(50));

let copyObj = Object.create(user);

copyObj.age = 23;

console.log(copyObj); // copyObj: { age: 23 } => prototype;
console.log(copyObj.age); // 23;
console.log(copyObj.doubleAge()); // 46;

/*
    let user = {
        age: 20,
        doubleAge: function () {
            return this.age * 2; // return user.age * 2;
        },
    };

    => copyObj => user.age = 20 => copyObj.doubleAge() = 40 Not 46;
*/