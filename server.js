// fundaments of java script
// arrays and objects 
// function return 
// async js coding

// foreach map filter find indexof

var arr = [1,2,3,4];
// to change anything in each element of the array we use forEach
arr.forEach(function(val){
    console.log(val + "hello");           // so basically we are adding hello in each element of the array one by one
})
//map 
// map gives you the new array of the same length of the already given after making the changes you made,, it is used when you want to create a new array with the help of the previous array....

var ans = arr.map(function(val){
  return val*3;
})
console.log(ans);

//filter
// filter gives you the new array like map after making changes 

var ans = arr.filter(function(val){
  if(val > 3){return true;}
  else return false;
})
console.log(ans);         // the new array will only contain 4..

// find 
// find is used to find elements and return the first appered of the no....
var ans = arr.find(function(val){
  if(val === 3){return true;}
})
console.log(ans);

//indexOf 
// give the index of the no. and -1 if the no. is not found in the index
 
var ans = arr.indexOf(3);
console.log(ans);