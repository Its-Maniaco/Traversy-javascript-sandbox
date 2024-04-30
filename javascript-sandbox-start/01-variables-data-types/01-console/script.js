console.log(100)

console.log("Hello World", "All")

const x = 10
console.log(x)

console.error("What happen")
console.warn("Just a warning")

// for objects - {k:v}
console.table({name: "Test Name", id: 12345, status: false})

// Group all these under a single group
console.group("Group 1")
console.log("Start of Group 1")
console.log(x)
console.warn("Group Ending")
console.log("End of Group 1")
console.groupEnd()

console.group("Group 2")
console.log("Start of Group 2")
console.log(x)
console.warn("Group Ending")
console.log("End of Group 2")
console.groupEnd()

// Styling console
const styles = "padding: 10px; background-color: white; color: green";
console.log("%cHello World", styles)