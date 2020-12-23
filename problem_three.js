//Write a function that takes a base number and an exponent. 
//It must return the base number to the power of the exponent.
//Write one function using **recursion** and a second function using **iteration**. You are not allowed to use the `**` operator nor the `Math.pow` function.

var power = function(base, exponent) {  
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

power(10, 3) // -> 1000
power(2, 4) // -> 16
power(0, 100) // -> 0
power(1, 1000) // -> 1