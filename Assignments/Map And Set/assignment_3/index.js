let myInfo = new Map([
    ['username', "Osama"],
    ['role', "Admin"],
    ['country', "Egypt"]
]);

console.log(myInfo);
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'};

console.log(myInfo.size); // 3;

console.log(myInfo.has("role")); // true;