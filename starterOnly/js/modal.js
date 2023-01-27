function editNav() {
	var x = document.getElementById("myTopnav");
	console.log(x);
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtnModal = document.querySelector(".close");
const confirmationBtn = document.getElementById("confirmation-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
	modalbg.style.display = "block";
}

//close modal event
closeBtnModal.addEventListener("click", closeModal);
confirmationBtn.addEventListener("click", closeModal);

//close modal form
function closeModal() {
	modalbg.style.display = "none";
	form.style.display = "block";
	confirmationMsg.style.display = "none";
}
