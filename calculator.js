
var numberStore = ["",""];
var numberIndex = 0;
var operator;
var result = 0;
var run_state = 0;

function putNumInDisplay(num1) {
	console.log("hi");
	numberStore[numberIndex] += num1.toString();
	
	
	document.querySelector("#top-field").value += num1;
	console.log(numberStore);
	
}

function myFunct(op) {
	if(run_state==1){
		numberStore[0] = document.querySelector("#bottom-field").value;
		topfield.value = document.querySelector("#bottom-field").value;
		bottomfield.value='';
		//move result to top and clear result, carry on as normal
	}
	numberIndex = 1;
	operator = op;
	document.querySelector('#top-field').value += op;
	console.log(operator);
}


function clearEquation(){
	document.querySelector('#top-field').value = "";
	numberStore = ["",""];
	numberIndex = 0;
	document.querySelector('#bottom-field').value = "";
	run_state = 0;
}

function calculate(){
	console.log("hello");
	console.log(operator);
	var num1 = numberStore[0];
	var num2 = numberStore[1];
	
	if (operator == "+"){
		 result = parseInt(num1) + parseInt(num2);
		
	} else if (operator == "-"){
	  result = parseInt(num1) - parseInt(num2);
		
	} else if (operator == "*"){
		result = parseInt(num1) * parseInt(num2);
	} else if (operator == "/"){
		result = parseInt(num1)/parseInt(num2);
	}
	else {
		alert("invalid operator");
	}
	
	console.log(result);
	
	displayResults();
	run_state = 1;
	
}


function displayResults() {
	document.querySelector("#bottom-field").value = result;
	
}
function moveResult() {
	//if (operator == "+", "-", "*", "/"){
	document.querySelector("#top-field").value = result;
	document.querySelector("#bottom-field"). value = "";
}

