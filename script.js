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

 const names = ["Ali" , "Sara" , "Sana" , "Ahmed" , "Sajid"];
 const result4 = names.filter((names)=>{
    return names.length > 4;
 });

 console.log(result4);


//  =================.sort()=================

//  array k elemets ko ak specific order me arrange krta ha.

const Names = ['Alina' , 'Ayesha' , 'Sana' , 'Alisha'];
   Names.sort();
   console.log(Names);


   const nums = [12 , 45 , 67 , 89, 20];
   nums.sort();
   console.log(nums);

   const prices = [1500 , 3000 , 9000 , 7000];

   prices.sort();
   console.log(prices);
