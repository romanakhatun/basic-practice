const normalParson = {
    fristName: "Sinigdha",
    lastName: "sorker",
    salary: 1000,
    getFullName: function () {
        console.log(this.fristName, this.lastName)
    },
    chargeBill: function (amount, tax) {
        this.salary = this.salary - amount - tax;
        return this.salary
    }
}
const heroPerson = {
    fristName: "Senaha",
    lastName: "sorker",
    salary: 500
}
const friendlyPerson = {
    fristName: "Salma",
    lastName: "khatun",
    salary: 500
}
// const heroChargeBill = normalParson.chargeBill.bind(heroPerson)
// // heroChargeBill(100)
// console.log(heroPerson.salary)

normalParson.chargeBill(100)
console.log(normalParson.salary)

normalParson.chargeBill.call(heroPerson, 100, 200)
console.log(heroPerson.salary)

normalParson.chargeBill.apply(friendlyPerson, [100, 200])
console.log(friendlyPerson.salary)







