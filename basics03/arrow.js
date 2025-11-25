const user={
    name: "Alice",
    price: 100,
    welcomeMessage: function(){
        console.log(`Welcome, ${this.name}! Your price is $${this.price}.`);//current context refers to user object    

}
}
//user.welcomeMessage();
//user.name="Bob";
//user.welcomeMessage();
console.log(this);//in global context this refers to global object(window in browsers)
function chai(){
    console.log(this);//in regular function call this refers to global object(window in browsers)
}
const addtwo=(num1,num2) => {
    return num1+num2;//implicit return jisme return and brackets nhi aate and next line of code should be in same line()bracket are used
}
console.log(addtwo(3,4));