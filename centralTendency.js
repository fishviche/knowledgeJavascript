// // // Add an eventListener to prevent refresh of my page
const formAll = document.querySelectorAll("form");
formAll.forEach(el => {
    el.addEventListener('submit', function(e) {
        e.preventDefault();
    });
})

// // // VARIABLES
const arrayNumbersInput = document.getElementById('arrayNumbers')

// // // MEAN
const meanArray = (listAllNumbers) => listAllNumbers.reduce(
    (accuValue = 0, newElement) => accuValue + newElement)/listAllNumbers.length;

// Get Mean
const getMean = () => {
    stringArray = arrayNumbersInput.value
    const arrayNumber = stringArray.split(",").map(Number);
    alert(meanArray(arrayNumber))
}

// // // // Mode
// const meanArray = (listAllNumbers) => listAllNumbers.reduce(
//     (accuValue = 0, newElement) => accuValue + newElement)/listAllNumbers.length;

// // Get Mean
// const getMean = () => {
//     stringArray = arrayNumbersInput.value
//     const arrayNumber = stringArray.split(",").map(Number);
//     alert(meanArray(arrayNumber))
// }

// // // MEDIAN
// Get Mean
const getMedian = () => {
    stringArray = arrayNumbersInput.value
    const arrayNumber = stringArray.split(",").map(Number);
    const halfLength = parseInt(arrayNumber.length/2);
    arrayNumber.sort((a, b) => b - a)
    const median = arrayNumber.length%2===0?(arrayNumber[halfLength]+arrayNumber[halfLength-1])/2:arrayNumber[halfLength]
    alert(median)
}
