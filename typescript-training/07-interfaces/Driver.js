"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
// declare an array of coaches: initially empty
let myCoaches = [];
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);
for (let tempCoach of myCoaches) {
    console.log(tempCoach.getDailyWorkout());
}
