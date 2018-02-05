

//Persistent data structures for efficient immutablity

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === "dining room") {
    weapon = "knife";
    solved = true;
    suspect = "Mr. Parkes";
} else if (room === "gallery") {
    weapon = "trophy"
    solved = true;
    suspect = "Ms. Van Cleve";
} else if (room == "ballroom") {
    weapon = "poison";
    solved = true;
    suspect = "Mr. Kalehoff";
} else {
    weapon = "pool stick";
    solved = true;
    suspect = "Mrs. Sparr";

}

if (solved) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */
var time = 60;


while (time >= 0) {
    switch (time){
        case 50:
            console.log("Orbiter transfers from ground to internal power (T- " + time + " seconds)");
            break;
        case 31:
            console.log("Ground launch sequencer is go for auto sequence start (T- " + time + " seconds)");
            break;
        case 16:
            console.log("Activate launch pad sound suppression system (T- " + time + " seconds)");
            break;
        case 10:
            console.log("Activate main engine hydrogen burnoff system (T- " + time + " seconds)");
            break;
        case 6:
            console.log("Main engine start (T- " + time + " seconds)");
            break;
        case 0:
            console.log("Solid rocket booster ignition and liftoff! (T- " + time + " seconds)");
            break;
        default:
            console.log("T- " + time + " seconds");
    }
    time = time - 1;
}


for(var t = 60; t >= 0; t--){
  if(t === 50){
    console.log("Orbiter transfers from ground to internal power (T- " + t + " seconds)")
  } else if (t === 31){
    console.log("Ground launch sequencer is go for auto sequence start (T- " + t + " seconds)");
  } else if (t === 16){
    console.log("Activate launch pad sound suppression system (T- " + t + " seconds)");
  } else if (t === 10){
    console.log("Activate main engine hydrogen burnoff system (T- " + t + " seconds)");
  } else if (t === 6){
    console.log("Main engine start (T- " + t+ " seconds)");
  } else if (t === 0){
    console.log("Solid rocket booster ignition and liftoff! (T- " + t + " seconds)");
  } else {
    console.log("T- " + t + " seconds");
  }
}
