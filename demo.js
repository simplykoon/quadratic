var a = document.getElementById("a").value; 
var b = document.getElementById("b").value; 
var c = document.getElementById("c").value; 

var button = document.getElementsByTagName("button");
var answer = document.getElementById("answer");
function calc(){
				if(a != 0 && a != "" && b != 0 && b != "" && c != 0 && c != "" ){
		
var a = document.getElementById("a").value; 
var b = document.getElementById("b").value; 
var c = document.getElementById("c").value;
var answer = document.getElementById("answer");
  
  	let r = (-b) / (2 * a);
  let m = 	(b ** 2) - (4 * a * c);
		let n =		Math.sqrt(m);
		let x1 = (-b + n) / (2 * a); 
		let x2 = (-b - n) / (2 * a);
answer.innerHTML = "The roots of the equation, x<sub>1</sub> and x<sub>2</sub> are "+ x1 +" and " +x2;
answer.style.display = "block";
  if(m < 0){
				let p = Math.sqrt(-m);
				let q = (p)/ (2 * a); 
     let s = (-b) / (2 * a);
answer.innerHTML = "The roots of the equation, x<sub>1</sub> and x<sub>2</sub> are " + s + "+" +  q + "i and " + s + "-" + q + "i";
answer.style.display = "block";
				}	
			}
	else {
					alert("Please enter three non-zero numbers")
					}
				}
button[0].addEventListener("click", calc)
