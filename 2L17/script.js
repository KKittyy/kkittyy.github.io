// let startTime = $.now();

// $(document).ready(function(){
// 	alert(`tis document is ready!!1! time is uhh ${$.now()-startTime} milliseconds`)
// })

$(document).ready(function(){
	$("h1").click(function(){
		alert("it's spelled jquery btw.")
	})
	$("p").click(function(){
		alert("ughh, ughhh, ugh, UGHHHHHHHHHHHH-")
	})
	$("a").click(function(){
		alert("who is this?")
	})
})

$(document).ready(function(){
	$('#btnShow').click(function(){
		$("p").show();
	})
	$('#btnHide').click(function(){
		$("#text").hide();
	})
})

$(document).ready(function(){
	$(".btn").click(function(){
		$(this).hide();
	})
})

$(document).ready(function(){
	$(".box1").click(function(){
		$(this).hide("slow")
	})
	$(".box2").click(function(){
		$(this).hide("fast")
	})
	$(".box3").click(function(){
		$(this).hide(3140)
	})
	$(".box4").click(function(){
		$(this).hide(1000, function(){
			alert("blcok 4 sa stins lamo")
		})
	})
	$(".box5").click(function(){
		$(".box").show("fast")
	})
})

// $(document).ready(function(){
// 	let isShown = true;
// 	$(".panel").click(function(){
// 		if(isShown){
// 			$(".not").hide();
// 			isShown = !isShown
// 		}else{
// 			$(".not").show();
// 			isShown = !isShown
// 		}
// 	})
// })

$(document).ready(function(){
	$(".panel").click(function(){
		$(".not").toggle()
	})
})

let opacity = 1;

$(document).ready(function(){
	$(".content").click(function(){
		opacity -=0.1;
		$(this).fadeTo(10, opacity)
	})
})