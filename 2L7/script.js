let fructe = ["mar","uhhh apa","rosie","capaube"]

// alert(fructe[1]);
fructe[2] = 'joh doe'
// alert(fructe)

// alert(fructe.length)
// alert(fructe);
// alert(fructe.pop());
// alert(fructe);
// alert(fructe.push("altceva idkbro"))
// alert(fructe);

// alert(fructe.shift());
// alert(fructe);
// fructe.unshift("toilet ananas nasdas")
// alert(fructe);
// for(let i=0;i<fructe.length;i++){
// 	console.log(fructe[i])
// }

// let tab = ['Ion',true,12,5.8,false,function(){alert("johndoe")}]
// alert(tab);

// alert(tab[5])



// let n = +prompt("introduvt numar de ototkjhikgogfghgktied")
// let tab = [];
// for(let i = 0;i<n;i++){
// 	tab.push(Math.floor(Math.random()*100));
// }
// console.log("tabloul era uguhufrugturd:", tab)

// function sum(s){
// 	let suma = 0;
// 	for(let i=0;i<s.length;i++){
// 		suma += s[i];
// 	}
// 	return suma
// }
// console.log("suma este",sum(tab))




let elem;
let tablou = [];

for(let i=0;i<10;i++){
	tablou[i] = Math.floor(Math.random()*100)
}
function print(tab){
	for(let i = 0;i<tab.length;i++){
		console.log(`tablou[${i}] = ${tablou[i]}`)
	}
}
print(tablou)