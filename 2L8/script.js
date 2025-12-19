let elem_h1 = document.querySelector("h1");
elem_h1.style.background = 'yellow';

let elem_p = document.getElementById("text")
elem_p.style.color = 'red';

let elem_a = document.getElementsByClassName("link");
for(let i=0;i<elem_a.length; i++){
	elem_a[i].style.color = "green"
}

function block1(){
	let elem = document.getElementById('box1')
	elem.style.borderRadius = '20px'
}

function block2(){
	let elem = document.getElementById('box2');
	elem.style.fontStyle = '25px';
	elem.style.color = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}

function block3(){
	let elem = document.getElementById('box3');
	elem.style.background = `rgb(${rnd(255)}, ${rnd(255)}, ${rnd(255)})`;
}

function rnd(arg){
	return Math.floor(Math.random()*arg)
}