let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

let lw = 10;
let myColor = 'black'
let isMouseDown = false

let colorPicker = document.getElementById('color')
let lineW = document.getElementById('lineW')
let lineWeightValue = document.getElementById('lineWeightValue')

colorPicker.addEventListener("change", function(){
	myColor = colorPicker.value;
});

function fillIn(){
	ctx.fillStyle = myColor
	ctx.fillRect(0,0,canvas.width, canvas.height)
}
function clearAll(){
	ctx.clearRect(0,0,canvas.width, canvas.height)
}

ctx.lineWidth = lw;
lineW.addEventListener("change", function(){
	lw = lineW.value;
	ctx.lineWidth = lw;
})

setInterval(()=>lineWeightValue.innerHTML = lineW.value,0);

canvas.addEventListener('mousedown', function(){
	isMouseDown = true
});
canvas.addEventListener('mouseup', function(){
	isMouseDown = false;
	ctx.beginPath()
})

canvas.addEventListener('mousemove', function(event){
	if(isMouseDown){
	ctx.fillStyle = myColor
	ctx.strokeStyle = myColor
	ctx.lineTo(event.clientX, event.clientY)
	ctx.stroke()

	ctx.beginPath()
	ctx.arc(event.clientX, event.clientY, lw/2,0, Math.PI*2)
	ctx.fill()

	ctx.beginPath()
	ctx.moveTo(event.clientX, event.clientY)
}
})