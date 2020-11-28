// function explainCallback(nam, hoby) {
//     console.log('My name is', nam)
//     console.log('My favorite hobby is', hoby)
//     work()
// }
// function work() {
//     console.log('You should everyday hard work')
// }
// explainCallback('mina', 'song')
// explainCallback('rina', 'dance')

/////
function explainCallback(name, hobby, task) {
    console.log('My name is', name)
    console.log('My favorite hobby is', hobby)
    task()
}
function work() {
    console.log('You should everyday hard work')
} function school() {
    console.log('rina read in class eight')
}
explainCallback('mina', 'song', work)
explainCallback('rina', 'dance', school)


