$(document).ready(function(){
	$(".slideRules").click(function(){
		$("#rules").slideToggle()
	})

	$(".progress").knob({
		'min':0,
		'max':12,
		'angleOffset':-60,
		'angleArc':120,
		'readOnly':true,
		'width':'100%',
		'thickness':0.2,
		'lineCap':'round',
		'displayInput':false,
		'fgColor':'#4284f5',
		'bgColor':'#a6bae0'
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
		'fgColor':'#4284f5',
		'bgColor':'#a6bae0'
	})
	$("#start").click(function(){
		$("#start").css('display','none');
		$(".sound").css('display','block');
		startPlay(num);
		startTime();
	})
})

let num = Math.floor(1+ Math.random()*15);
let was = [];
let progress = 0;
let answer = ["heartache","spear of justice","another medium","spider dance","core","undertale","asgore","finale","hopes and dreams","save the world","reunited","last goodbye","battle against a true hero","death by glamour","its raining somewhere else"];

function startPlay(arg){
	$("#melody").attr("src",`sound/${arg}.mp3`);
}

$("#btnTask2").click(function(){
	if($("#inputTask2").val().toLowerCase()== `${answer[num-1]}`){
		alertify.success("NERD ALERT!!")
		$("#inputTask2").val("");
		progress++;
		$(".progress").val(progress).trigger('change');
		was.push(num);
		console.log(was);

		if(progress<5){
			do{
				num = Math.floor(1+ Math.random()*15);
			}while(was.includes(num));
			startPlay(num);
		}else{
			$(".sound, #btnTask2, #inputTask2").css({
				'display': "none"
			});
			$("#nextTask").css({
				'display':"flex"
			})
		}
	}else{
		alertify.error("HOW DARE YOU NOT KNOW UNDERTALE SONGS??? YOU ARE SO SO SO EVIL!!!")
	}
})

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