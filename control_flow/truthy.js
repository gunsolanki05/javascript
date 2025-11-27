const userEmail= "user@example.com";
if (userEmail) {// Check if userEmail is truthy if empty toh manlo false
    console.log("Email is provided:", userEmail);
} else {
    console.log("No email provided.");
}//falsy values
// "", null, undefined, 0, NaN, false -0 ,bigint 0n ,false
//truthy values
//"hello", "0",42, [], {}, true , -42 ,3.14 ,bigint 1n ,Infinity ,function(){}   
if(userEmail==0){// Check if userEmail has length
    console.log("Email length is zero.");
} 
const emptyobject = {};
if (emptyobject==0) {// Check if emptyobject is truthy
    console.log("object is truthy.");
} else {
    console.log("Empty object is falsy.");
}
//nullish coalescing operator(??):null or undefined
let val1;
val1=5 ?? 10; // val1 will be 5
console.log(val1);
//val1=null ?? 10;
val1=null ?? 10 // val1 will be 10 because left side is null smae for undefined
console.log(val1);
val1=undefined ?? 10; // val1 will be 10 because left side is undefined
console.log(val1);
val1=0 ?? 10; // val1 will be 0 because left side is neither null nor undefined
console.log(val1);
val1="" ?? "default"; // val1 will be "" because left side is neither null nor undefined
console.log(val1);
//ternary operator
//condition ? expr1 : expr2
const age=20;
const canVote= (age>=18) ? "Yes, can vote." : "No, cannot vote.";
console.log(canVote);

