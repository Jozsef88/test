let button = document.getElementById("enter");
let textfield = document.getElementById("listinput");
let ul = document.querySelector("ul");

const inputLength = () => {return textfield.value.length;}

const createListElement = () => {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(textfield.value));
		ul.appendChild(li);
		textfield.value = "";
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick)

textfield.addEventListener("keypress", addListAfterKeypress)

// border

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

const setGradient = () => {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)