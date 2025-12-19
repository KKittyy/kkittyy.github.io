/*
// let i = 0
// while(i<3){
// 	alert(i)
// 	i++;
// }
*/

//sarcina 1

// let count = prompt("mesaj (numar pls)");
// let i = count;
// let idk;

// while(i>0){
// 	idk = Math.floor(Math.random()*100)
// 	console.log(`random n_${count-i +1}: ${idk}`)
// 	i--;
// }

// let i = 0
// do{
// 	alert(i);
// 	i++;
// }while(i<3)

//sarcina2

// let max = 0;
// let n;

// do{
// 	n = Number(prompt("introdu un numar: (bleeh)"));
// 	if(n > max){
// 		max = n
// 	}
// }while(n != 0);

// alert(`numarul maxium era uhhhh ${max}`);

// for(let i=0;i<3;i++){
// 	alert(i)
// }

//sartcima3


let n = +prompt("Introduce un numar:::::::: eubugigt")
let sum = 0

console.log(`numarul erarrt-ogiotig ${n}`);
console.log('');

for(let i = n; i > 0;i--){
	if(n % i == 0){
		sum += i;
	}
}

console.log(`Suma este mi se pare ${sum}`);