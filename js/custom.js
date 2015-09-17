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

function button_clear(){
	 document.getElementById("display-input").value=document.getElementById("display-input").value="";
	 document.getElementById("final_result").value=document.getElementById("final_result").value="0.00";
}

function button_equal(){
	var final_result = parseFloat(document.getElementById("display-input").value);
	document.getElementById("final_result").value=gh+
	".00";
}