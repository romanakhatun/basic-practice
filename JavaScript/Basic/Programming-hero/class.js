class Person {
    constructor(fristname, lastname, salary) {
        this.fristname = fristname,
            this.lastname = lastname,
            this.salary = salary
    }
}
const heroParson = new Person('romana', 'khatun', 2000)
console.log(heroParson);
const friendlyPerson = new Person('saiyan', 'sirat', 3000)
console.log(friendlyPerson)

function person1(fristName, lastName, salary) {
    this.fristName = fristName,
        this.lastName = lastName,
        this.salary = salary
}
const oldPerson = new person1('grand', 'papia', 3000)
console.log(oldPerson)