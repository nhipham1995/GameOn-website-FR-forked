// DOM
const modal = document.querySelector(".modal-body");
const form = document.querySelector("#form");
const confirmationMsg = document.querySelector(".modal-success-confirmation");
const firstnameInput = document.getElementById("first");
const lastnameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const quantityInput = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const locationsCheckbox = document.querySelectorAll('input[type="radio"]');
const conditionCheckbox = document.getElementById("checkbox1");
const errMsg1 = document.getElementById("errMsg1");
const errMsg2 = document.getElementById("errMsg2");
const errMsg3 = document.getElementById("errMsg3");
const errMsg4 = document.getElementById("errMsg4");
const errMsg5 = document.getElementById("errMsg5");
const errMsg6 = document.getElementById("errMsg6");
const errMsg7 = document.getElementById("errMsg7");

let clickedLocation = false;

//functions for checking the value of inputs
function inputValidation(type, value) {
	const value1 = value;
	switch (type) {
		case "nametype":
			if (value1 === null || value1.length < 2) return false;
			return true;
		case "mail":
			const regex = /^[\w-\.]+@([\w-]+\.)+[a-z\.]{2,6}$/;
			let mailvalue = emailInput.value;
			return regex.test(mailvalue);
		case "date":
			if (!birthdate.value) return false;
			return true;
		case "quantity":
			const regex2 = /^(0|[1-9][0-9]*)$/;
			return regex2.test(quantityInput.value);
		case "location":
			for (const location of locationsCheckbox) {
				if (location.checked) {
					clickedLocation = true;
					break;
				}
			}
			return clickedLocation;
		case "condition":
			return !conditionCheckbox.checked;
	}
}

//function for showing the error message when the value of input is bad
function errorMsg(input, msgForm, msg) {
	msgForm.textContent = msg;
	if (input) {
		input.style.border = "solid 1.8px red";
	}
}

//remove the error message when the value of input is good
function refresh(input, errMsgForm) {
	if (input) {
		input.style.border = "none";
	}
	errMsgForm.textContent = "";
}

// Action Form Submit
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let successValidation = true;
	if (!inputValidation("nametype", firstnameInput.value)) {
		errorMsg(
			firstnameInput,
			errMsg1,
			"Veuillez entrer 2 caractères ou plus pour le champ du prénom."
		);
		successValidation = false;
	} else refresh(firstnameInput, errMsg1);

	if (!inputValidation("nametype", lastnameInput.value)) {
		errorMsg(
			lastnameInput,
			errMsg2,
			"Veuillez entrer 2 caractères ou plus pour le champ du nom."
		);
		successValidation = false;
	} else refresh(lastnameInput, errMsg2);

	if (!inputValidation("mail")) {
		errorMsg(emailInput, errMsg3, "Veuillez entrer mail");
		successValidation = false;
	} else refresh(emailInput, errMsg3);

	if (!inputValidation("date")) {
		errorMsg(
			birthdate,
			errMsg4,
			"Vous devez entrer votre date de naissance."
		);
		successValidation = false;
	} else refresh(birthdate, errMsg4);

	if (!inputValidation("quantity")) {
		errorMsg(quantityInput, errMsg5, "Quantity devrait être un nombre.");
		successValidation = false;
	} else refresh(quantityInput, errMsg5);

	if (!inputValidation("location")) {
		errorMsg(null, errMsg6, "Vous devez choisir une option.");
		successValidation = false;
	} else refresh(null, errMsg6);

	if (inputValidation("condition")) {
		errorMsg(
			null,
			errMsg7,
			"Vous devez vérifier que vous acceptez les termes et conditions."
		);
		successValidation = false;
	} else refresh(null, errMsg7);
	// form.submit();
	if (successValidation) {
		form.style.display = "none";
		confirmationMsg.style.display = "block";
		form.reset();
	}
});

// Disapear the error note when changing the input
firstnameInput.addEventListener("change", () => {
	if (inputValidation("nametype", firstnameInput.value))
		refresh(firstnameInput, errMsg1);
});

lastnameInput.addEventListener("change", () => {
	if (inputValidation("nametype", lastnameInput.value))
		refresh(lastnameInput, errMsg2);
});

emailInput.addEventListener("change", () => {
	if (inputValidation("mail")) refresh(emailInput, errMsg3);
});

birthdate.addEventListener("change", () => {
	if (inputValidation("date")) refresh(birthdate, errMsg4);
});

quantityInput.addEventListener("change", () => {
	if (inputValidation("quantity")) refresh(quantityInput, errMsg5);
});

for (const location of locationsCheckbox) {
	location.addEventListener("change", () => {
		if (location.checked) {
			clickedLocation = true;
			return refresh(null, errMsg6);
		}
	});
}

conditionCheckbox.addEventListener("change", () => {
	if (conditionCheckbox.checked) return refresh(null, errMsg7);
});
