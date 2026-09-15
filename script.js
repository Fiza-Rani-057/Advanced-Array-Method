//  ============================================
//            Advanced Array 
//  =============================================

// ================  forEach()  ===============
//  array k andar k element pr call back function chlata ha.

const arr = [1, 2, 3, 4, 5];

arr.forEach((e) => {
    console.log(e);
});

let arr2 = ["Fiza", "Rani"];

arr2.forEach((e) => {
    console.log(e);
});


const name = ["Ali", "Sajid", "Sadia"];

name.forEach((Name) => {
    console.log(Name);
});

// =============.map()===============
// new array return krta ha jise variable me store krsakty hen.


const arr3 = [21, 23, 34, 56, 67];
const result = arr.map((element) => {
    return element;
});
console.log(result);


let arr4 = [23, 45, 67, 89];

const result2 = arr4.map((e) => {
    return e;
});
console.log(result2);


const arr5 = ["a", "b", "c", "d", "e"];

const result3 = arr5.map((element) => {
    return element;
});
console.log(result3);

//  ====================.filter()======================

// srf whi element new array me rkta ha jo condition ko satisfy krty hen.

const arr6 = [1, 3, 4, 6];
const newArray = arr6.filter((e) => {
    return e % 2 === 0
});
console.log(newArray);

const num = [21, 45, 67, 12];
const numbers = num.filter((num) => {
    return num > 30;
});

console.log(numbers);

const names = ["Ali", "Sara", "Sana", "Ahmed", "Sajid"];
const result4 = names.filter((names) => {
    return names.length > 4;
});

console.log(result4);


//  =================.sort()=================

//  array k elemets ko ak specific order me arrange krta ha.

const Names = ['Alina', 'Ayesha', 'Sana', 'Alisha'];
Names.sort();
console.log(Names);


const nums = [12, 45, 67, 89, 20];
nums.sort();
console.log(nums);

const prices = [1500, 3000, 9000, 7000];

prices.sort();
console.log(prices);

//  ================== includes() ====================

//  check krta ha array me koi specific value mojood ha ya nhi.

const names2 = ["Ali", "Shariq"];
console.log(names2.includes("Sara"));

const names3 = [21, 34];
console.log(names3.includes(34));

const nums2 = [23, 56, 67];
console.log(nums2.includes(67));


//  ================== every()=======================

// har element ko check krta ha sare conditions k 
// satisfy hony pr hi true return krta ha .

const array2 = [21, 45, 90, 48];
const result5 = array2.every((num) => {
    return num < 10
});

console.log(result5);

const marks = [70, 80, 65, 90];
const result6 = marks.every((mark) => {
    return mark > 50;
});

console.log(result6);


const ages = [10, 40, 70, 35];
const age = ages.every((age) => {
    return age > 12;
});
console.log(age);


//  ============= indexOf =====================
//  array ka index return krta ha 

let index = [1, 3, 4, 6, 7];

console.log(index.indexOf(4));
console.log(index.indexOf(3));
console.log(index.indexOf(6));
console.log(index.indexOf(1));
console.log(index.indexOf(7));


//  ================ reduce() =====================
//  sare element ko one by one process kr k ak single value return krta ha 


const array3 = [1200, 5000, 6000];
const result7 = array3.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 8);

console.log(result7);

const array4 = [1000, 4000];
const result8 = array4.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 9);
console.log(result8);

const array5 = [5000, 6000];
const result9 = array5.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 70);
console.log(result9);

//  ==================== .find()=====================
//  plehla matching element return krta ha 

const arrays = [21, 45, 68, 76];
const arrResult = arrays.find((nums) => {
    return nums > 20;
});
console.log(arrResult);


//  =================== .findLast()====================
// sb se ple last se jo value mily whi return krta ha 
const arrays1 = ["ali", "Alina"];
const arrResult1 = arrays1.findLast((e) => {
    return e.length > 1;
});
console.log(arrResult1);

//   ==============.findIndex()===================
// matching element ka index return krta ha 

let numbers1 = [10, 20, 30, 40];

let result10 = numbers.findIndex(function (num) {
    return num > 25;
});
console.log(result);


// ======================.some()=======================
const results = numbers.some((nums) => {
    return nums > 20;
});
console.log(results);


const marks1 = [30, 35, 25, 60];
const results2 = marks.some((mark)=> {
    return mark  > 30;
});

console.log(result);

// ===========================.flat()============================
// nested array ko single array me convert krta ha.

 const arrays2 = [
   ["Alian" , "Sana"],
   ["Hira" , "Tania"],
   ["Alina" , "Dharia"]
 ];
 const arrResult2 = arrays2.flat()
 console.log(arrResult2);


//  ====================.flatmap()======================
const arrays3 = [
    ["Alian", "Sana"],
    ["Hira", "Tania"],
    ["Alina", "Dharia"]
];

const arrResult3 = arrays3.flatMap(function(e) {
    return e;
});

console.log(arrResult3);