var c=800
if(true){
    let a=10
const b=20
var c=30

}
//console.log(c);//30
function one(){
    const username="gunn"
    function two(){
        const password="1234"
        console.log(username);//gunn
    }
    //console.log(password);//error: password is not defined
    two()
  
}
one()
//console.log(username);//error: username is not defined
if(true){
    const username="gunn"
    if(username==="gunn"){
        const password=" 1234"
        console.log(username + password);//gunn
        }
        console.log(password);//gunn
    
}
//+++++++++++++++++interesting+++++++++++++
function addone(){
    return num + 1;
}
addone();
const addTwo = function(){
    return num + 2;
}
addTwo(5);
