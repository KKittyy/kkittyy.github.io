// let age = Number(prompt("what is your age"))
// console.log("their age is " + age)
// if (age < 18){
// 	alert("you're too young!")
// }else{
// 	alert("welcome random user!!")
// }

function changeText(){
	document.getElementById("text").innerHTML = "impressed?"
}

let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

ctx.lineWidth = 7
ctx.fillStyle = 'red'
ctx.strokeStyle = 'red'

let x = 50
let y = 50

function drawCircle(){
	ctx.clearRect(0,0, canvas.width, canvas.height)
	ctx.beginPath()
	ctx.arc(x,y,40,0,2*Math.PI)
	ctx.closePath()
	ctx.fill()
}

setInterval(function(){
	x += 5;
	drawCircle()
}, 100)

drawCircle()

const button = document.getElementById("btn")
const box = document.getElementById("box")

button.addEventListener("click", function(){
	box.fadeOut(2000).slideUp(2000)
})