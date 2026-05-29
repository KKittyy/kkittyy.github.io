let theme = 0;

$(document).ready(function(){
	$(".theme").on('click', function(){
		theme = 1 - theme;
		if(theme){
			$(this).addClass("light")
			$(this).text("Light theme")
			$("body").css("background-image","linear-gradient(270deg, #123b57 0%, #603767 100%")
			$("section, footer, a").addClass("dark")
		}else{
			$(this).removeClass("light")
			$(this).text("Dark theme")
			$("body").css("background-image","linear-gradient(270deg, #2376ae 0%, #c16ecf 100%")
			$("section, footer, a").removeClass("dark")
		}
	})
})