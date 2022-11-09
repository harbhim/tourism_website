//Declaration of variables

let next_btn = document.querySelector(".carousel-control-next");
let prev_btn = document.querySelector(".carousel-control-prev");
let bot_btn = document.querySelector(".carousel-indicators");
let img_desc_block = document.querySelector(".img_description");

// Event-Listeners

let fp = "./txt/mathura.txt";
window.onload = () => getting_text_file(fp);
next_btn.addEventListener("click", common_data);
prev_btn.addEventListener("click", common_data);
bot_btn.addEventListener("click", common_data);

// Functions

function common_data(){
	let next_img = document.querySelector(".carousel-item-next");
	let active_img;
	if (next_img == null){
		active_img = document.querySelector(".carousel-item-prev img");
	}
	else{
		active_img = document.querySelector(".carousel-item-next img");
	}
	let alt = active_img.getAttribute("alt");
	let txt_path = "./txt/" + alt + ".txt";
	getting_text_file(txt_path);
}

function getting_text_file(para){
	var client = new XMLHttpRequest();
	client.open("GET", para);
	client.onreadystatechange = () => {
		let para = document.querySelector(".car_para");
		let content = client.responseText;
		para.innerHTML = content;
	};
	client.send();
} 
