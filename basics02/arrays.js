const my_arr=[0,1,2,3,4,5,6]
const myHeroes=["shaktiman","naagraj"]
//node basics02/arrays.jsconst myArr2=new Array(1,2,3,4,5)
//console.log(my_arr);

// array method
//my_arr.push(6)
//my_arr.pop()
//my_arr.unshift(9)
//my_arr.shift()
//console.log(my_arr);
//console.log(my_arr.includes(9));
//arrays method

my_arr.push(7)
my_arr.push(8)
my_arr.push(9)
console.log(my_arr);
console.log(my_arr.indexOf(5));
console.log(my_arr.join("-"));
console.log(my_arr.reverse());
console.log(my_arr.slice(2,5));//print in range,no change in original array return new array after removal
my_arr.splice(2,3)//(start index,no of elements to be removed)chnge in original array returned removed elements
console.log(my_arr);
const newarr=my_arr.join()
console.log(newarr);



