var button = document.getElementById("enter");
var textfield = document.getElementById("listinput");
var ul = document.querySelector("ul");

function inputLength() {
	return textfield.value.length;
}

function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(textfield.value));
		ul.appendChild(li);
		textfield.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick)

textfield.addEventListener("keypress", addListAfterKeypress)