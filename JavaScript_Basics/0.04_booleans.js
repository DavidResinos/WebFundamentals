//functions

function Hello() {
	console.log("Hello!!!")
}

Hello();



var hey = function () {
	console.log("hey!")
} 

hey();

function Girlfriend(){
	console.log("BabyGirl")
}
Girlfriend();




function addTwos() {
	var x= 2;
	var y= 2;
	console.log(x+y);
}

addTwos ();


function times(){
	var z = 10;
	var x = 2;
	console.log(z*x);
}

times();



function numberentered(x) {
	console.log("The number entered", x);
}

numberentered(5);
numberentered(10000);
numberentered(7465);

function AddNumber (x,y){
	console.log("The sum is",x + y);
}

AddNumber(1000, 10);

function Name(first,last){
	console.log(first+" "+last);
}

Name("David","Resinos");

function petNameAndBreed(name, breed){
	var details = name +"," +breed;
	return details;
}
petNameAndBreed("Clifford", "The Big Red Dog");

function PriceCalc(Price, tax){
	var tax = 0.07;
	console.log(Price *tax + Price);
}
PriceCalc(12,12);