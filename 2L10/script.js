function changeColor(){
	let links = document.querySelectorAll('a');
	for(let link of links){
		let href = link.getAttribute('href')
		if(!href) continue;
		if(!href.includes('://')) continue;

		link.style.color = 'orange'
	}
}

function reset(){
	let links = document.querySelectorAll('a')
	for(let link of links){
		link.style.color = 'blue'
	}
}

let list = document.getElementById('list')

let elem = document.createElement('li')
elem.innerHTML = "john toe"
list.prepend(elem);

let elem2 = document.createElement('li')
elem2.innerHTML = "jane toe"
list.append(elem2);

list.before('noob toe')
list.after('veeronica (third wheel idk)')