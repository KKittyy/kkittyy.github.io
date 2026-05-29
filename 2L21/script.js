$(document).ready(function(){
	$("#b1").click(function(){
		$("ol").append("<li>god</li>")
	})
	$("#b2").click(function(){
		$("ol").prepend("<li>chud</li>")
	})
	// $("ol").after("Element<br><br>");
	// $("ol").before("Element");
})

$(document).ready(function(){
	$("#btn1").click(function(){
		$(".team1 li:last-child").after(`<li>${$("#name").val()}</li>`)
		$("#name").val("")
	})
	$("#btn2").click(function(){
		$(".team2 li:last-child").after(`<li>${$("#name").val()}</li>`)
		$("#name").val("")
	})
})

$(document).ready(function(){
	$("#btn").click(function(){
		$(`${$("#text").val()}`).remove()
	})
})