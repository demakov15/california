const formEmail = document.querySelector("#form-email");
const formErr = document.querySelector("#form-err");
const emailInput = document.querySelector("#email");
const formButt = document.querySelector(".anything__block-butt");
formErr.style.color = "red";

let inputResult = "";

emailInput.addEventListener("input", (e) => {
	if (e.target.value === "") {
		formButt.disabled = true;
		formErr.textContent = "";
		formErr.classList.remove("show");
	} else if (
		!e.target.value.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
	) {
		formErr.textContent = "Please, enter valid email";
		formButt.disabled = false;
		formErr.classList.add("show");
	} else {
		setTimeout(() => {
			formErr.textContent = "";
			formErr.classList.remove("show");
		}, 1000);
	}
});

const modal = document.querySelector("#modal");
const blur = document.querySelector(".blur");

const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

formEmail.addEventListener("submit", (e) => {
	modal.classList.toggle("show");
	blur.classList.toggle("show");
	document.body.style.overflow = "hidden";

	e.preventDefault();

	setTimeout(() => {
		blur.classList.toggle("show");
		modal.classList.toggle("show");
		document.body.style.overflow = "auto";
	}, 3000);
});
