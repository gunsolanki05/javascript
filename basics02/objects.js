//singleton=array with single element
//object literal={}; key-value pairs
const mysymbol=Symbol("my symbol")
const jsuser={
    name:"gungun",
    age:21,
    location:"india",
    [mysymbol]:"myvalue",
    email:"gun@google.com",
    isactive:true
}
//console.log(jsuser);
console.log(jsuser[mysymbol]);
console.log(jsuser.phone);
console.log(typeof jsuser.mysymbol);
//undefined
jsuser.email="newemail@google.com";
//Object.freeze(jsuser);
jsuser.email="anotheremail@google.com";
console.log(jsuser.email);//remains unchanged due to freeze
console.log(jsuser);
jsuser.greetings=function(){
    console.log("hello jsuser");
}
console.log(jsuser.greetings());//function inside object
