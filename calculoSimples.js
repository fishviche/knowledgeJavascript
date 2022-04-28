// // // Add an eventListener to prevent refresh of my page
const formAll = document.querySelectorAll("form");
formAll.forEach(el => {
    el.addEventListener('submit', function(e) {
        e.preventDefault();
    });
})
// // // SQUARE
const sideSquareInput = document.getElementById('sideSquare');
const perimeterSquareFunction = (side) => side*4 ;
const areaSquareFunction = (side) => side*side;
// Square permiter
const getPerimeterSquare = () => {
    alert("Square perimter is: " + perimeterSquareFunction(sideSquareInput.value));
}
// Square area
const getAreaSquare = () => {
    alert("Square area is: " + areaSquareFunction(sideSquareInput.value));
}

// // // TRIANGULE
const sideTriangleAInput = document.getElementById('sideTriangleA');
const sideTriangleBInput = document.getElementById('sideTriangleB');
const baseTriangleInput = document.getElementById('baseTriangle');
const heightTriangleInput = document.getElementById('heightTriangle');

const perimeterTriangleFunction = (side1,side2,base) => parseInt(side1) + parseInt(side2) + parseInt(base);
const areaTriangleFunction = (base, height) => parseInt(base)*parseInt(height)/2;
// Triangule perimeter
const getPerimeterTriangle = () => {
    alert("Triangle perimter is: " + perimeterTriangleFunction(sideTriangleAInput.value,sideTriangleBInput.value,baseTriangleInput.value));

}
// Area of Triangle
const getAreaTriangle = () => {
    alert("Triangle area is: " + areaTriangleFunction(baseTriangleInput.value,heightTriangleInput.value));
}


// // // CIRCLE
const radiusCircleInput = document.getElementById('radiusCircle');
const PI = Math.PI;
const perimeterCircleFunction = (radius) => 2*parseInt(radius)*PI;
const areaCircleFunction = (radius) => parseInt(radius)*parseInt(radius)*PI;
// Perimeter of circle
const getPerimeterCircle = () => {
    alert("Circle perimeter is: " + perimeterCircleFunction(radiusCircleInput.value));
}
// Area of Circle
const getAreaCircle = () => {
    alert("Circle Area is: " + areaCircleFunction(radiusCircleInput.value));
}