function myname(){
  //  console.log("Your Name");
}
myname();

function addNumbers(num1, num2){
    return num1 + num2;
}

let sum = addNumbers(5, 10);
//console.log(sum);

function greetUser(name){
    console.log("Hello, " + name + "!");
}

greetUser("Alice");
function loginuser(username){
    if(username === undefined){
        return "Please provide a username"
    }
    return `${username} has logged in`
}
//console.log(loginuser("gunn"));
//console.log(loginuser());



function calculateArea(length, width){
    return length * width;
}

let area = calculateArea(5, 10);
//console.log("Area:", area);



function calculateprice(val1,val2,...num1){
    return num1
}
console.log(calculateprice(1,2,3,4,5,6,7,8,9));//1 and 2 will go in val1 and val2 and rest will go in num1 as array