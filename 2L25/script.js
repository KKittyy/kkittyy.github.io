$(document).ready(function(){
	$(".hour").knob({
		'min':0,
		'max':24,
		'bgColor': '#960300',
		'fgColor':'#cf1e1b',
		'displayInput':false,
		'width':300,
		'height':300,
		'thickness':0.3
	})
	$(".minute").knob({
		'min':0,
		'max':60,
		'bgColor': '#00547a',
		'fgColor':'#0486c2',
		'displayInput':false,
		'width':200,
		'height':200,
		'thickness':0.4
	})
	$(".second").knob({
		'min':0,
		'max':60,
		'bgColor': '#c28802',
		'fgColor':'#ffd500',
		'displayInput':false,
		'width':100,
		'height':100,
		'thickness':0.6
	})
})

function clock(){
	let $h = $(".hour")
	let $m = $(".minute")
	let $s = $(".second")

	d = new Date(),
	h = d.getHours(),
	m = d.getMinutes();
	s = d.getSeconds();

	$h.val(h).trigger("change")
	$m.val(m).trigger("change");
	$s.val(s).trigger("change");

	setTimeout("clock()",1000)
}
clock();