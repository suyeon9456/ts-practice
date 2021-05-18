"use strict";
var message = 'test';
console.log('message', message);
var count = 0;
count += 1;
count = 'test';
var result = true;
var list = [1, 2];
var txtList = ['1', '2'];
txtList.push(2);
var mightBeUndefined = undefined;
var nullableNum = null;
var nickname = 'woogie';
function sum(a, b) {
    return a + b;
}
var sumResult = sum(1, 2);
console.log(sumResult);
function sumArray(list) {
    return list.reduce(function (acc, current) { return acc + current; }, 0);
}
var sumArrayResult = sumArray([1, 2, 3]);
function test() {
    // return 'd'
}
test();
