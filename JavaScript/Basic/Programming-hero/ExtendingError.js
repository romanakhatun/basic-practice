

class Error {
    constructor(message) {
        this.message = message;
        this.name = "Error";
    }
}

function test() {
    throw new Error("Whoops!");
}

try {
    test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
}
