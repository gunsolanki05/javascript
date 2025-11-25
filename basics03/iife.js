//immediately invoked function expression (IIFE)
//1.immeadiat chl jaye,2.variable ko global scope me nhi rkhna 
(function hello(){
    console.log("IIFE executed")
})();
//global scope k pollution se bchata hai ye pattern
(function code(){
    const a=10;
    const b=20;
    console.log(a+b);
})
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*js execution context
1.global execution context
2.function execution context
3.eval execution context(deprecated) prop of global execution context
1.memory creation phase sirf memory allocate krta hai
2.execution phase code ko execute krta hai



sabse pehle global execution context bnta hai
phir function call hone pr function execution context bnta hai
    


call stack=>LIFO(last in first out)


*/