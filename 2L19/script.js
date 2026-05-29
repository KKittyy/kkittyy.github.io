$(document).ready(function(){
	$(".return").click(function(){
		$(this).fadeOut("slow",function(){
			$(this).fadeIn("fast")
		})
	})
})

$(document).ready(function(){
	$(".b1").click(function(){
		$(".box1").animate({left:'1420px'},"slow")
		$(".box1").animate({top:'200px'},"slow")
		$(".box1").animate({left:'0px'},"slow")
		$(".box1").animate({top:'0px'},"slow")
	})
})

$(document).ready(function(){
	$(".b2").click(function(){
		$(".box2").animate({height:"300px",opacity:0.4},"slow")
		$(".box2").animate({width:"300px",opacity:0.9},"slow")
		$(".box2").animate({height:"100px",opacity:0.4},"slow")
		$(".box2").animate({width:"100px",opacity:0.9},"slow")
	})
})

$(document).ready(function(){
	$(".b3").click(function(){
		$(".box3").animate({left:"300px",width:"200px",height:"200px",opacity:0.4},"slow")
		$(".box3").animate({left:"0px",width:"100px",height:"100px",opacity:1},"slow")
	})
})