// const sentence = 'The quick brown fox jumps over brown'
// const searchTerm = 'brown'
// const indexOfTerm = sentence.indexOf(searchTerm);

// console.log("From the beginning " + searchTerm + " is" + ' "' + indexOfTerm + '"');
// console.log("From the 2nd " + searchTerm + " is " + ' "' + sentence.indexOf(searchTerm, (indexOfTerm + 2)) + '"');


// const pa = 'Contrary to popular text  belief, Lorem Ipsum is not simply random text'
// const serchTerm = 'text'
// const indexOfPa = pa.indexOf(serchTerm);

// console.log("2nd text is " + pa.indexOf(serchTerm, (indexOfPa)));

// //
// console.log('hello world'.indexOf('', 3));
// console.log('Blue Whale'.indexOf('Blue'));
// console.log('Blue Whale'.indexOf('Whale'));
// console.log(' It is a better way'.indexOf(' '));
// console.log('Blue Whale'.indexOf('Whalet'));

//Last indexOf

let paragraph = 'Contrary to popular simply  belief, Lorem Ipsum is not simply random simply'
let serchParagraph = 'simply'
let lastIndexOf = paragraph.lastIndexOf(serchParagraph)

console.log('The ' + serchParagraph + ' word positoion is' + ' "' + lastIndexOf + '"')

//
// console.log('Blue Whale, Killer Whale'.lastIndexOf('Whale'))
// console.log('Blue Whale, Killer Blue Blue'.lastIndexOf('Whale'))
