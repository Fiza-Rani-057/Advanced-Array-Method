//  ============================================
 //            Advanced Array 
//  =============================================

    // ================  forEach()  ===============
//  array k andar k element pr call back function chlata ha.

 const arr = [1 , 2 , 3 , 4 , 5];

 arr.forEach((e)=>{
  console.log(e);
 });

  let arr2 = ["Fiza", "Rani"];

  arr2.forEach((e)=>{
   console.log(e);
  });


  const name = ["Ali" , "Sajid" , "Sadia"];

  name.forEach((Name)=>{
    console.log(Name);
  });

// =============.map()===============
// new array return krta ha jise variable me store krsakty hen.


 const arr3 = [21 , 23 , 34, 56 , 67];
 const result = arr.map((element)=>{
   return element;
 });
 console.log(result);

  
 let arr4 = [23 , 45 , 67, 89];

 const result2 = arr4.map((e)=>{
   return e;
 });
 console.log(result2);


 const arr5 = ["a" , "b" , "c" , "d" , "e"];

 const result3 = arr5.map((element)=>{
    return element;
 });
 console.log(result3);