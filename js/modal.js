const emailInput = document.querySelector("#email");
const formButt = document.querySelector(".anything__block-butt");
const formErr = document.querySelector("#form-err");

formButt.disabled = true;
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
		formButt.disabled = true;
		formErr.classList.add("show");
	} else {
		setTimeout(() => {
			formErr.textContent = "";
			formButt.disabled = false;
			formErr.classList.remove("show");
		}, 200);
	}
});

const formEmail = document.querySelector("#form-email");
const blur = document.querySelector(".blur");
const modal = document.querySelector("#modal");

formEmail.addEventListener("submit", (e) => {
	modal.classList.toggle("show");
	blur.classList.toggle("show");
	document.body.style.overflow = "hidden";

	e.preventDefault();

	setTimeout(() => {
		blur.classList.toggle("show");
		modal.classList.toggle("show");
		document.body.style.overflow = "auto";
	}, 2000);
});
