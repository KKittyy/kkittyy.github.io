let canvas = document.getElementById('canvas')
let ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 500;

// ctx.lineWidth = 5
// ctx.moveTo(50,50)
// ctx.lineTo(200,50)
// ctx.stroke()

// bifa

// ctx.lineWidth = 7
// ctx.moveTo(270,200)
// ctx.lineTo(350,300)
// ctx.lineTo(450,150)
// ctx.stroke()



ctx.lineWidth = 7
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'blue'

ctx.beginPath()
ctx.arc(100,100,40,0,2*Math.PI)
ctx.closePath()
ctx.fill()

ctx.beginPath()
ctx.arc(600,100,40,0,2*Math.PI)
ctx.closePath()
ctx.fill()

// ctx.moveTo(270,200)
// ctx.lineTo(350,300)
// ctx.lineTo(430,200)
// ctx.stroke()

// ctx.strokeRect(270,200,150,100)
ctx.fillStyle = 'lightblue'
ctx.fillRect(50, 375, 100, 100)
ctx.fillRect(575, 375, 100, 70)

// sarcaina
ctx.strokeStyle = '#ffb700'
ctx.fillStyle = 'yellow'
ctx.beginPath()
ctx.arc(350,250,100,(20*Math.PI)/180,(340*Math.PI)/180)
ctx.lineTo(350,250)
ctx.closePath()
ctx.fill()
ctx.lineWidth = 7
ctx.stroke()

ctx.fillStyle = '#ffb700'
ctx.beginPath()
ctx.arc(380,200,12,0,2*Math.PI)
ctx.fill()

ctx.fillStyle = '#fdff6e'
ctx.beginPath()
ctx.arc(500,250,12,0,2*Math.PI)
ctx.fill()
ctx.strokeStyle = '#f2f555'
ctx.lineWidth = 3
ctx.stroke()