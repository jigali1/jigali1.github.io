let screen = document.body;
//screen.addEventListener('click', seekmouse)
screen.addEventListener('keydown', changeSpeed)
var div = document.getElementById('a');
/*div.style['top'] = "100px";
div.style['left'] = "100px";*/

const x0 = 65;
const y0 = 65;
const xMax = 1015;
const yMax = 865;

var x = x0;
var y = y0;
//let box = document.getElementsById('box');

var stepX = 10;
var stepY = 6;
let t = setInterval(fly, 25);





function fly() {
	if (x > xMax || x < x0) {
		stepX = -stepX;
	}
	if (y > yMax || y < y0) {
		stepY = -stepY;
	} 
	x = stepX + x;
	y = stepY + y;
	showDiv(x,y);
	
}
	


function showDiv(x, y) {
	div.style['top'] = y+'px';
	div.style['left'] = x+'px';

}

function changeSpeed(event) {
	switch(event.key) {
		case 'd' :
			stepX+=1;
			break;
		case 'a' :
			stepX-=1;
			break;
		case 's' :
			stepY+=1;	
			break;
		case 'w' :
			stepY-=1;	
	}
}


/*function showDiv() {
	let div = document.getElementById('a');
	if (div.hidden) {
		div.hidden = false;
	} else {
		div.hidden = true;
	}
}

function seekmouse(event) {
	console.log(event);
	let div = document.getElementById('a');
	let x = event.clientX;
	let y = event.clientY;
	div.style['top'] = y+"px";
	div.style['left'] = x+"px";
}

function moveOn(event) {
	let div = document.getElementById('a');
	let x = div.style['left'];
	let y = div.style['top'];
	x = parseInt(x.match(/\d+/));
	y = parseInt(y.match(/\d+/));
	console.log(x);
	switch(event.key) {
		case 'd' :
			x+=75;
			break;
		case 'a' :
			x-=78;
			break;
		case 's' :
			y+=68;	
			break;
		case 'w' :
			y-=60;	
	}
	div.style['left'] = x + 'px';
	div.style['top'] = y + 'px'

}*/
