$(document).ready(function(){
	$(".b1").click(function(){
		$("p").addClass("text");
	})
})

$(document).ready(function(){
	$(".b2").click(function(){
		$("div").removeClass("box")
	})
})

$(document).ready(function(){
	$(".b3").click(function(){
		$("h2").toggleClass("h2")
	})
})

$(document).ready(function(){
	$(".b4").css({
		"background":"gold",
		"padding":"5px 20px",
		"color":"white"
	});
})