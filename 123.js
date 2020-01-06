let screen = document.body;

let xBoard = BOARD_LEFT;

let x = BALL_LEFT;
let y = BALL_TOP;

let board = document.getElementById('board');
board.style['top'] = BOARD_TOP + 'px';
board.style['left'] = BOARD_LEFT + 'px';

let ball = document.getElementById('ball');
ball.style['top'] = BALL_TOP + 'px';
ball.style['left'] = BALL_LEFT + 'px';

screen.addEventListener('keydown', pressKey);

var t = setInterval(moveBall, 9999999);

/*var s = setInterval(speedUp, 99999999);

function speedUp() {
	ballStepX > 0 ? ballStepX+=2 : ballStepX-=2;
	ballStepY > 0 ? ballStepY+=2 : ballStepY-=2;
}*/


function showBoard(xBoard) {
	board.style['left'] = xBoard + 'px';
}

function pressKey(event) {
	switch(event.key) {
		case 'd' :
			if (xBoard <= 880-STEP) xBoard+=STEP;
			showBoard(xBoard);
			break;
		case 'a' :
			if (xBoard >= STEP) xBoard-=STEP;
			showBoard(xBoard);
			break;
		case ' ' :
			t = setInterval(moveBall, 47);
			//s = setInterval(speedUp, 1000);
			break;
	}
	//console.log(xBoard);clearInterval(t);
	//console.log(event.key);
	
}

function restart() {
	clearInterval(t);
	//clearInterval(s);

	board.style['top'] = BOARD_TOP + 'px';
	board.style['left'] = BOARD_LEFT + 'px';

	ball.style['top'] = BALL_TOP + 'px';
	ball.style['left'] = BALL_LEFT + 'px';

	ballStepX = -6;
	ballStepY = 12;
}

function moveBall() {
	if (x > X_MAX || x < 0) {
		ballStepX = -ballStepX;
	}
	if ( y < -26 ) {
		ballStepY = -ballStepY;
	} 
	if (y >= BOARD_TOP-56) {
		if (x >= xBoard-24 && x <= xBoard+124) {
			ballStepY = -ballStepY;
		}
		else {
			alert('Ты проиграл! Game over!');
			document.location.reload();
			//restart();
			//return;
			//console.log(t);
			
		}
	} 
	x = ballStepX + x;
	y = ballStepY + y;
	ball.style['top'] = y + 'px';
	ball.style['left'] = x + 'px';
}


