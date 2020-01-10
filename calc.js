let screen = document.body
screen.addEventListener('mousedown', pressKeyAnim);
screen.addEventListener('mouseup', pressKeyAnim);
screen.addEventListener('click', pressKey);
let display = document.getElementById('screen');

let key;
let i = 0;
let x = new Array();
let z;

function pressKeyAnim(event) {
	key = event.target;
	let classN = key.className;
	console.log(classN.includes('button'));
	if (!classN.includes('button')) {return;}
	if (event.type == 'mousedown') {
		
		key.classList.add("button_pressed");
	}
	if (event.type == 'mouseup') {
		key.classList.remove("button_pressed");
	}
}

function pressKey(event) {
	let classN = key.className;
	if (!classN.includes('button')) {return;}
	let pKey = key.innerHTML;
	let w;
	console.log(pKey==","); 
	if (pKey.match(/[0-9]/) != null || pKey == ".") {
		display.innerHTML += pKey;
		return;
	}
	if (pKey == 'C') {
		display.innerHTML = '';
		i = 0;
		return;
	}
	if (i == 0) {
		x[i] = display.innerHTML;
		i++;
		z = pKey;
		display.innerHTML += z;
	} else {
		x[1] = display.innerHTML.slice(x[0].length+1);
	switch (z) {
		case "+" :
		w = +x[0] + +x[1];
		display.innerHTML = w;
		i = 0;
		break;
		case "-" :
		w = +x[0] - +x[1];
		display.innerHTML = w;
		i = 0;
		break;
		case "/" :
		w = +x[0] / +x[1];
		display.innerHTML = w;
		i = 0;
		break;
		case "*" :
		w = +x[0] * +x[1];
		display.innerHTML = w;
		i = 0;
		break;
	}
	}

}
