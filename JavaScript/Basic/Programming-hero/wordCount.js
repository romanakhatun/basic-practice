// var speak = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ipsam corporis debitis suscipit ipsa asperiores eos sed ad voluptatibus, magnam quae non harum culpa! Amet.";

// console.log(speak[23]);
// console.log(speak.length);

//=====================//
var speech = "Lorem ipsum dolor sit amet consectetur      adipisicing elit.";

var count = 0;
for (let i = 0; i < speech.length; i++) {
    const character = speech[i];
    if (character == " " && speech[i-1] !=" ") {
        count++
    }
}
count++;
console.log(count)