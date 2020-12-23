//Write a function that takes a base number and an exponent. 
//It must return the base number to the power of the exponent.
//Write one function using **recursion** and a second function using **iteration**. You are not allowed to use the `**` operator nor the `Math.pow` function.


//BASE CASE is the key in any recurtive function.
var power = function(base, exponent) {  
    //the exposent checked to see if it is zero.
    if (exponent === 0) {
        // if it is then it return 1.
        return 1;
    } else {
        // and here the final result returned.
        return base * power(base, exponent - 1);
    }
}

power(10, 3) // -> 1000
power(2, 4) // -> 16
power(0, 100) // -> 0
power(1, 1000) // -> 1
