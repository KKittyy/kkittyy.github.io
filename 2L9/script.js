function block1(){
	document.body.style.background = `rgb(${rnd(255)},${rnd(255)},${rnd(255)})`;
}

function rnd(arg){
	return Math.floor(Math.random()*arg);
}

let elem = document.getElementById('img');

setInterval(blink, 1000);

function blink(){
	elem.hidden = !elem.hidden;
}

function change(){
	let val = document.getElementById('text').value;
	document.body.style.background = val
}