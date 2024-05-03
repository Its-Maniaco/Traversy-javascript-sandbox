let x = 10

console.log(x, " in global scope")

function change () {
    console.log(x, " in function before changing")
    //changed, wouldnt have worked if const obviously
    x = 5
    console.log(x, " in function after changing")
}
change()

console.log(x, " in global scope after function call")

function shadowing () {
    const x = 1000
    console.log(x, " now x is different because of shadowing")
}
shadowing()

console.log(x, " in global scope after shadowing call")