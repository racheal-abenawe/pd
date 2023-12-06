let firstName, lastName;
firstName = "ABENAWE";
lastName = "RACHEAL";

document.getElementById("demo").innerHTML = firstName;
document.getElementById("demo1").innerHTML = lastName;

let x, y, sum;
x = 3;
y = 5;
sum = x + y;

document.getElementById("demo2").innerHTML = sum;

const paragraph = document.querySelector("h1")
paragraph.addEventListener("click", updateName);


function updateName() {
 let name = prompt("enter your firstName");
 paragraph.textcontent = `i am : ${name}`;
}