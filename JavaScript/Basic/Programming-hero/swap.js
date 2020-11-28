var a = 10;
var b = 5;
console.log("Before swap = a:",a, "b:", b );
var tem = a;
a = b ;
b = tem;

console.log("after swap = a:",a, "b:", b );
//================================================//

var x = 13;
var y = 20;
x= x+y;
y=x-y;
x= x-y;
console.log("after swap = x:",x, "y:", y );
//================================================//

var p = 1123;
var q = 23;
[p,q]=[q,p];
console.log("after swap = p:",p, "q:", q );