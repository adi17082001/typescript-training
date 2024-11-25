import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

// declare an array of coaches: initially empty

let myCoaches: Coach[] = [];
myCoaches.push(myCricketCoach);
myCoaches.push(myGolfCoach);

for(let tempCoach of myCoaches){
    console.log(tempCoach.getDailyWorkout());
}