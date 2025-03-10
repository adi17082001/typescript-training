"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(5, 10);
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(5, 10, 10, 20);
// declare an array of shapes: initially empty
let myShapes = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);
for (let tempShape of myShapes) {
    console.log(tempShape.getInfo());
}
