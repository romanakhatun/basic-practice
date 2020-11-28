var wm = new WeakMap()
var o1 = {};

console.log(wm.set(o1, 20))
console.log(wm.get(o1))//20
console.log(wm.has(o1))//true

console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));