//if
const isUserLoggedIn = true;
if (isUserLoggedIn) {
   // console.log("Welcome back, user!");
} else {
    //console.log("Please log in to continue.");
}
if(2!=3){
    console.log("2 is not equal to 3");
}
const score=200
if(score>=100){
    let power="flying0"
    console.log(`You have unlocked the power of ${power}`);
}
//console.log(`You have unlocked the power of ${power}`); // This will cause an error because 'power' is not defined in this scope


const balance=1000
if(balance<500  )   {
    console.log("Your balance is low. Please add funds.");
} else if (balance>=500 && balance<1500) {
    console.log("Your balance is sufficient.");
} else {
    console.log("You have a high balance. Consider investing.");
}

// Ternary Operator
const age = 20;
const canVote = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";
//console.log(canVote);

// Nested if-else
const temperature = 30;
if (temperature > 30) {
    //console.log("It's a hot day.");
} else {
    if (temperature >= 20 && temperature <= 30) {
        //console.log("It's a warm day.");
    } else {
        //console.log("It's a cold day.");
    }
}

// Switch case as an alternative to multiple if-else
const day = 3;
switch (day) {
    case 1:
        //console.log("Monday");
        break;
    case 2:
        //console.log("Tuesday");
        break;
    case 3:
        //console.log("Wednesday");
        break;
    case 4:
        //console.log("Thursday");
        break;
    case 5:
        //console.log("Friday");
        break;
    case 6:
        //console.log("Saturday");
        break;
    case 7:
        //console.log("Sunday");
        break;
    default:
        //console.log("Invalid day");
}                   
