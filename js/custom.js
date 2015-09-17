function button_one(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"1";
}
function button_two(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"2";
}
function button_three(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"3";
}
function button_minus(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"-";
}

function button_four(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"4";
}
function button_five(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"5";
}
function button_six(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"6";
}
function button_multiply(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"*";
}

function button_seven(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"7";
}
function button_eight(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"8";
}
function button_nine(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"9";
}
function button_divide(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"/";
}

function button_zero(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"0";
}

function button_dzero(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"00";
}

function button_point(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+".";
}

function button_add(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value+"+";
}

function button_clear(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value="";
	 document.getElementById("final_result").value=document.getElementById("final_result").value="0.00";
}

function button_equal(){
	var final_result = document.getElementById("display-input").value;
	final_result = parseInt(parseFloat(final_result));
	document.getElementById("final_result").value=final_result;
	//document.getElementById("final_result").value=final_result;
}


/* ---------------------------------------------------------------- */

// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// Get the input and button values
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		
		// Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		// If eval key is pressed, calculate and display the result
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		// Basic functionality of the calculator is complete. But there are some problems like 
		// 1. No two operators should be added consecutively.
		// 2. The equation shouldn't start from an operator except minus
		// 3. not more than 1 decimal should be there in a number
		
		// We'll fix these issues using some simple checks
		
		// indexOf works only in IE9+
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = inputVal[inputVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			input.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();
	} 
}