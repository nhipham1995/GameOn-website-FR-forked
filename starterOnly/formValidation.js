const form = document.querySelector("#form");
const firstnameInput = document.getElementById("first");
const lastnameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const notification = document.getElementById("notification");
const locationsCheckbox = document.querySelectorAll('input[type="radio"]');
const conditionCheckbox = document.getElementById("checkbox1");

let clickedLocation = false;

function nameValidation(value) {
	if (value === null || value.length < 2) return false;
	return true;
}
function mailValidation() {
	const regex = /^[\w-\.]+@([\w-]+\.)+[a-z\.]{2,6}$/;
	let value = emailInput.value;
	return regex.test(value);
}

function quantityValidation() {
	const regex = /^(0|[1-9][0-9]*)$/;
	return regex.test(quantityInput.value);
}

function locationValidation() {
	for (const location of locationsCheckbox) {
		if (location.checked) {
			clickedLocation = true;
			break;
		}
	}
	return clickedLocation;
}

function errorMsg(msg) {
	notification.textContent = msg;
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!nameValidation(firstnameInput.value)) {
		return errorMsg("Firstname must contain at least 2 characters.");
	}
	if (!nameValidation(lastnameInput.value)) {
		return errorMsg("Lastname must contain at least 2 characters.");
	}
	if (!mailValidation()) {
		return errorMsg("Email is not good form");
	}
	if (!quantityValidation()) {
		return errorMsg("Quantity must be a number");
	}
	if (!locationValidation()) {
		return errorMsg("You must choose at least 1 city");
	}
	if (!conditionCheckbox.checked) {
		return errorMsg("You must agree with the condition of utilisation ");
	}
	notification.style.display = "none";
	return form.submit();
});
