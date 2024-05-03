// Challenge 1

const getCelsius = temperature => ((temperature - 32) * 5) / 9
console.log(getCelsius(99))

// Challenge 2
const minMax = (numbers) => {
    max = Math.max.apply(null, numbers)
    min = Math.min.apply(null, numbers)
   return {max, min}
};
console.log(minMax([1,5,2,5,213,56,4,32,412]));
// If I do not put semicolo after above console.log
//below fails https://stackoverflow.com/a/31013390

// Challenge 3
((length, width ) => {
    console.log(`Length: ${length}, Width: ${width}`);
})(10,5);