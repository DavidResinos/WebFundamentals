

var elevatorUp = true;
var elevatorDown = true;
var elevatorBroken = true;
var elevatorisStuckWhileWeAreInIt = true;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going Up!")
} else{
	console.log("Going Down!")
}

if(elevatorBroken===false){
	console.log("Sucks to be You!")
}else {
	console.log("Which  FLoor?")
}

if (elevatorisStuckWhileWeAreInIt){
	console.log("We are going to die!")
}else{
	console.log("Have a nice day!")
}


if(elevatorBroken || elevatorDown){
	console.log("Oh NO!!")
}


if (elevatorNumber === 13 && elevatorisStuckWhileWeAreInIt) {
	console.log("I hope you said your Goodbyes!")
}