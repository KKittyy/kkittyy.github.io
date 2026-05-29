$(document).ready(function(){
	$(".slideRules").click(function(){
		$("#rules").slideToggle()
	})

	$(".progress").knob({
		'min':0,
		'max':5,
		'angleOffset':-60,
		'angleArc':120,
		'readOnly':true,
		'width':'100%',
		'thickness':0.2,
		'lineCap':'round',
		'displayInput':false,
		'fgColor':'#e8025e',
		'bgColor':'#ff42a7'
	})
	$(".time").knob({
		'min':0,
		'max':300,
		'angleOffset':0,
		'angleArc':360,
		'readOnly':true,
		'width':'100%',
		'thickness':0.2,
		'lineCap':'butt',
		'displayInput':false,
		'fgColor':'#e8025e',
		'bgColor':'#ff42a7'
	})
	$("#start").click(function(){
		
		startTime();
	})
})

let progress = 0;

function startTime(){
	let time = 300;
	localStorage.setItem("time",time)
	$(".time").val(time).trigger('change');
	let timer = setInterval(function(){
		time--;
		$(".time").val(time).trigger("change");
		if(time <= 0){
			clearInterval(timer);
			alertify.error("your taking too long");
			localStorage.removeItem("time");
			setTimeout(() =>{
				window.open("../task1/index.html","_self");
			},3000)
		}else{
			localStorage.setItem("time",item);
		}
	},1000);
}