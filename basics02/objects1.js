//const tinder_user=new object()
const tinder_user={};//object literal
tinder_user.name="gargi";
tinder_user.age=21;
tinder_user.isloggedin=true;
//console.log(tinder_user);
const regular_user={
    name:"rocky",
    age:23,
    isloggedin:false,
    email:"rocky@google.com"
}
console.log(regular_user.age);
console.log(Object.keys(regular_user));//prints all keys
console.log(Object.values(regular_user));//prints all values
console.log(regular_user);//prints entire object