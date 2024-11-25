import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";

let myShape = new Shape(5,10);
let myCircle = new Circle(5,10,20);
let myRectangle = new Rectangle(5,10,10,20);

// declare an array of shapes: initially empty

let myShapes: Shape[] = [];
myShapes.push(myShape);
myShapes.push(myCircle);
myShapes.push(myRectangle);

for(let tempShape of myShapes){
    console.log(tempShape.getInfo());
}