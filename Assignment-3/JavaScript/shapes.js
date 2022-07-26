//to find the diagnal of a square
function findDiagonal(square)
{
    return Math.sqrt(2) * square;
}

let square = 9;

console.log ("The diagonal of a square");

console.log (findDiagonal(square).toFixed(6));

//to find the area of a triangle
let side1 = 5;
let side2 = 6;
let side3 = 7;

let triangle = (side1 + side2 + side3) / 2;

let area = Math.sqrt(triangle * ((triangle - side1) * (triangle - side2) * (triangle - side3)));

console.log ("The area of a triangle");

console.log (area);

//to find the circumference of a circle
let circleRadius = 4;

let circumference = 2*Math.PI*circleRadius;

console.log ("The circumference of a circle");

console.log (circumference);

//to find the surface area of a circle
let surfaceArea = Math.PI*circleRadius*circleRadius;

console.log ("The surface area of a circle");

console.log (surfaceArea);