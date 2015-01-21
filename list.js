
var myTR = document.createElement("tr");
document.getElementById("tbl").appendChild(myTR);
var myTD1 = myTR.appendChild(document.createElement("th"));
myTD1.innerHTML = "Description";
var myTD2 = myTR.appendChild(document.createElement("th"));
myTD2.innerHTML = "Completed";
var myTD3 = myTR.appendChild(document.createElement("th"));
myTD3.innerHTML = "Remove";

document.getElementById("btn").onclick = function(){
	var input = document.getElementById("tb").value;

	console.log(input);

	var myTR2 = document.createElement("tr");
	document.getElementById('tbl').appendChild(myTR2);

	var myTD4 = myTR2.appendChild(document.createElement("td"));
	myTD4.innerHTML = input;
	var myTD5 = myTR2.appendChild(document.createElement("td"));
	myTD5.innerHTML = "<input type = checkbox>";
	var myTD6 = myTR2.appendChild(document.createElement("td"));
	myTD6.innerHTML = "<input type = checkbox>";

}


