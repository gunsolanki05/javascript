const arr=["sun","mon","tue"]
const my_arr=["thurs","fri","sat"]
arr.push(my_arr)
//console.log(arr[3][1]);
const days=[...arr,...my_arr]
console.log(arr.join(" "));
console.log(days);
console.log(Array.isArray("shinchan"))//comparison
console.log(Array.from("shinchan"));//string to array
console.log(Array.of(7))//creates array with single element 7
let score1=100;
let score2=200;
let score3=300;
let scores=[score1,score2,score3]
console.log(Array.of(score1,score2,score3));//creates array with multiple elements

