window.addEventListener("DOMContentLoaded", () => {
	const changeColorBtn = document.querySelector("#btn");
	const backgroundTitle = document.querySelector("#background-title");
	const hexBtn = document.querySelector("#hex-btn");
	const rgbBtn = document.querySelector("#rgb-btn");
	let typeOfColor = "hex";

	hexBtn.addEventListener("click", () => {
		typeOfColor = "hex";
		hexBtn.classList.add("selected");
		rgbBtn.classList.remove("selected");
	});

	rgbBtn.addEventListener("click", () => {
		typeOfColor = "rgb";
		rgbBtn.classList.add("selected");
		hexBtn.classList.remove("selected");
	});

	function generateRandomHexColor() {
		const color =
			"#" +
			Array(6)
				.fill(0)
				.map(() => Math.floor(Math.random() * 16).toString(16))
				.join("");
		return color;
	}

	function generateRandomRgbColor() {
		const red = Math.floor(Math.random() * 255);
		const green = Math.floor(Math.random() * 255);
		const blue = Math.floor(Math.random() * 255);
		const rgbColor = `rgb(${red}, ${green}, ${blue})`;
		return rgbColor;
	}

	function changeColor(typeOfColor) {
		let newColor;
		switch (typeOfColor) {
			case "hex":
				newColor = generateRandomHexColor();
				document.body.style.backgroundColor = newColor;
				backgroundTitle.textContent = `Background color: ${newColor}`;
				break;
			case "rgb":
				newColor = generateRandomRgbColor();
				document.body.style.backgroundColor = newColor;
				backgroundTitle.textContent = `Background color: ${newColor}`;
				break;
		}
	}

	changeColorBtn.addEventListener("click", () => {
		changeColor(typeOfColor);
	});

	changeColor(typeOfColor);
});
