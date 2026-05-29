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
		'bgColor':'#007FFF',
		'fgColor':'#0070BB'
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
		'bgColor':'#007FFF',
		'fgColor':'#0070BB'
	})
	$("#start").click(function(){
		$("#start").css('display','none')
		fillBoard()
		startTime();
		$(".card").on('click', cardClicked)
	})
})

let progress = 0;
let firstCard = null;
let secondCard = null;
let cards = [
	{
		name: "php",
		img: "images/chinnotchilla.png",
		id:1
	},
	{
		name: "css3",
		img: "images/diahgonal krih.png",
		id:2
	},
	{
		name: "html5",
		img: "images/disintegrating-squirrel.png",
		id:3
	},
	{
		name: "jquery",
		img: "images/fatsquirrel.png",
		id:4
	},
	{
		name: "javascript",
		img: "images/fino.png",
		id:5
	},
	{
		name: "node",
		img: "images/hm.jpeg",
		id:6
	},
	{
		name: "photoshop",
		img: "images/miau-miau-cat.png",
		id:7
	},
	{
		name: "python",
		img: "images/rat-tu.png",
		id:8
	},
	{
		name: "rails",
		img: "images/starecat.png",
		id:9
	},
	{
		name: "sass",
		img: "images/tu-cat.jpg",
		id:10
	},
	{
		name: "sublime",
		img: "images/tu-cat2.png",
		id:11
	},
	{
		name: "wordpress",
		img: "images/whatcat.png",
		id:12
	}
]

function fillBoard(){
	let board = shuffle([...cards, ...cards]);
	for(let i = 0;i<board.length;i++){
		let cardHtml = `<div class="card" data-id="${board[i].id}">
						<div class="front">ROBOCODE</div>
						<div class="back">
							<img src="${board[i].img}">
						</div>
						</div>`;
		$('.gameBoard').append(cardHtml);
	}
}

function shuffle(array){
	let counter = array.length;
	let temp;
	let index;
	while(counter > 0){
		index = Math.floor(Math.random() * counter);
		counter--;
		temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	return array;
}

function cardClicked(event){
	if(secondCard || $(this).hasClass('matched')){
		return
	}
	if(!firstCard){
		firstCard = $(this);
		firstCard.addClass('flip');
		return
	}
	if(firstCard){
		secondCard = $(this);
		secondCard.addClass('flip');
		if(firstCard.attr('data-id')==secondCard.attr('data-id')){
			firstCard.addClass('matched');
			secondCard.addClass('matched');
			firstCard = null;
			secondCard = null;
			progress++;
			$('.progress').val(progress).trigger('change');
			if(progress == 12){
				win()
			}
			return
		}
		else{
			setTimeout(function(){
				firstCard.removeClass('flip');
				secondCard.removeClass('flip')
				firstCard = null
				secondCard = null
			},600)
		}
	}
}

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

function win(){
	$(".gameBoard").css({
		'display': 'none'
	})
	$("#win").css({
		'display':'flex'
	})
	localStorage.removeItem("time")
}