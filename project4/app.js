const enterButton = document.getElementById("enter");
const input = document.getElementById("Input");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteItem);

	function deleteItem(){
		li.classList.add("delete")
	}
}


function Click(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function Keypress(event) {
	if (inputLength() > 0) {
		createListElement();
	} 
}

input.addEventListener("keypress", Keypress);
enterButton.addEventListener("click",Click);

