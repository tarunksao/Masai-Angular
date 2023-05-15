"use strict";
/* let message: (string | number | boolean) = 'welcome to your life, there is no turning back';
message = 555;
// let message: any = 'welcome to your life, there is no turning back';

// alert(message);

let message1: string[] = ['welcome', 'hello', 'good day'];
let message2: Array<string> = ['day1', 'week1', 'month1'];

alert(message1[Math.round(Math.random() * (message1.length - 1))]);
enum Power { weak, recovering, strong };        // weak = 0, recovering = 1, strong = 2;
// enum Power { weak = 1, recovering, strong }; // weak = 1, recovering = 2, strong = 3;
// enum Power { weak = 5, recovering, strong }; // weak = 5, recovering = 6, strong = 7;

let heroPower: Power = Power.recovering; // console.log(heroPower) // 6 as per the previous line
let powerString = Power[heroPower]; // console.log(powerString) // recovering

console.log(powerString); */
function adder(num1, num2) {
    return num1 + num2;
}
// default return type of a function is undefined.
// Optional Parameter :- num2?:number
console.log(adder(5, 6));
