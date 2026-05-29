$(document).ready(function(){
	$(".catch").mouseenter(function(){
		$(this).css({
			"left": `${random(700)}px`,
			"top": `${random(450)}px`,
			"background": `rgb(${random(256)}, ${random(256)}, ${random(256)})`,
		})
	})
})

function random(max){
	return Math.floor(Math.random()*max);
}

$(document).ready(function(){
	$("#right").click(function(){
		$("#box").css({
			left: '+=50px'
		})
	})
	$("#left").click(function(){
		$("#box").css({
			left: '-=50px'
		})
	})
	$("#down").click(function(){
		$("#box").css({
			top: '+=50px'
		})
	})
	$("#up").click(function(){
		$("#box").css({
			top: '-=50px'
		})
	})
})
