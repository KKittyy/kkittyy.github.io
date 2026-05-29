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
		'bgColor':'#c69dd4',
		'fgColor':'#8d1eb3'
	})
	startRebus(num)
})

let num = Math.floor(1 + Math.random() * 10);
let answer = ["cat","dog","bunny","hamster","cow","horse","wolf","fox","raccoon","elephant"];
let was = [];
let progress = 0;

function startRebus(arg){
	$("#picture").attr("src",`img/${arg}.png`)
}

$(document).ready(function(){
	$("#btnTask1").click(function(){
		if($("#inputTask1").val().toLowerCase() == `${answer[num-1]}`){
			alertify.success("cool answer i guess.")
			$("#inputTask1").val("");
			progress++;
			$(".progress").val(progress).trigger('change');
			was.push(num);
			console.log(was);

			if(progress < 5){
				do{
					num = Math.floor(1 + Math.random()*10);
				}while(was.includes(num));
				console.log(num);
				startRebus(num);
			}else{
				$(".img, #btnTask1,#inputTask1").css({
					'display':'none'
				});
				$("#nextTask").css({
					'display':'flex'
				})
			}
		}else{
			alertify.error("LMAO THIS LITTLE BITCH GOT THE ANSWE WRONG LAUGH AT THEM LAUGH AT THEM!!!!")
		}
	})
})