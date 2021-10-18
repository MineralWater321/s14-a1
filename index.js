
// 2. Inside "index.js" file, console log the message "Hello World" to ensure that the script file is properly associated with the html file.
console.log("Hello World");

//3. Create multiple variables that will store the different JavaScript data types containing information relating to user details.
let firstName = "John";
let lastName = "Smith";
let age = 30;
let Hobbies = ["Biking", "Mountain Climbing", "Swimming"];
let workAddress = {
	city: "Lincoln",
	houseNumber: "32",
	state: "Nebraska",
	street: "Washington"
}

function printInfo(firstName, lastName, age){
	console.log(firstName + " " + lastName + " is " + age + "years of age");
	console.log(Hobbies);
	console.log(workAddress);
}

printInfo(firstName, lastName, age);

let isMarried = true;

function returnValue(isMarried){
	return isMarried;
}

console.log("The value of isMarried is: " + returnValue(isMarried));