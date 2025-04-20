//your JS code here. If required.
let count = 0;
let counter = document.querySelector("#counter");
let btn = document.querySelector("#incrementBtn");
btn.onclick = function() {
	
	alert(count)
	count++;
	counter.innerHTML = count; 
	
	 }