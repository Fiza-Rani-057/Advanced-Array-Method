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

// // har elemet par call back function chlata ha 
// array k har ak element ko aka ka kr k call back function me bjta ha.

 const arr3 = [21 , 23 , 34, 56 , 67];
 const result = arr.map((element)=>{
   return element;
 });
 console.log(result);


