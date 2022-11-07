//Declaration of variables

let next_btn = document.querySelector(".carousel-control-next");
let prev_btn = document.querySelector(".carousel-control-prev");
let img_desc_block = document.querySelector(".img_description");

// Event-Listeners

next_btn.addEventListener("click", description);

// Functions

window.onload = () => {
	var client = new XMLHttpRequest();
	client.open("GET", "./txt/mathura.txt");
	client.onreadystatechange = () => {
		let para = document.querySelector(".car_para");
		let content = client.responseText;
		para.innerHTML = content;
	};
	client.send();
}

function description() {
	//let active_img = document.querySelector(".active img");
	let active_img = document.querySelector(".carousel-item-next img");
	let alt = active_img.getAttribute("alt");
	console.log(alt);
	let txt_path = "./txt/" + alt + ".txt";

	var client = new XMLHttpRequest();
	client.open("GET", txt_path);
	client.onreadystatechange = () => {
		let para = document.querySelector(".car_para");
		let content = client.responseText;
		para.innerHTML = content;
	};
	client.send();
}

