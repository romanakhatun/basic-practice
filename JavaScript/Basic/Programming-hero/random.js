var num = 4.8444;
var floor = Math.floor(num);
var ceil = Math.ceil(num)
var round = Math.round(num);

var random = Math.random()*10;
var output = Math.round(random);

console.log(floor, ceil, round,random, output);

//============================================//
var number = 6.1200;
for (let i = 0; i < 10; i++) {
    var random = Math.random()*6;
    var specificOutput = Math.round(random);

    console.log(specificOutput);
}