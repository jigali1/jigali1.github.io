let screen = document.body
screen.addEventListener('mousedown', pressKeyAnim);
screen.addEventListener('mouseup', pressKeyAnim);
screen.addEventListener('click', pressKey);
let display = document.getElementById('screen');

let key;

function pressKeyAnim(event) {
	
	if (event.type == 'mousedown') {
		key = event.target;
		key.classList.add("button_pressed");
	}
	if (event.type == 'mouseup') {
		key.classList.remove("button_pressed");
	}
	//key.style['border-top'] = '#000';
	//key.style['border-left'] = '#fff';
	//key.style['border-right'] = '#fff';
	//key.style['border-bottom']
}
function pressKey(event) {
	console.log(key.innerHTML)
	let pKey = key.innerHTML;
	display.innerHTML += pKey;
}