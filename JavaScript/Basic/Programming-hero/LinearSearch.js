function linearSearch(data, searchQuery) {
    var answer = 'not found';
    for (var i = 0, len = data.length; i < len; i++) {
        if (data[i] === searchQuery) {
            answer = i;
        }
    }
    return answer;
}

var names = ["Romana", "Salma", "Nanziba"]
var result = linearSearch(names, "Nanziba");
console.log(result);