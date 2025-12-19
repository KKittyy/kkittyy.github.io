
// let user = "robocode"

// function Message(){
// 	let masaj = "helo, mi sunt javispcritp"
// 	alert(masaj);
// }

// function Message2(){
// 	let masaj2 = "heli "+user;
// 	alert(masaj2)
// }

// Message();
// Message2();


// function Show(name,text){
// 	alert(name + ": "+text)
// }

// Show("john toe","i drink water");
// Show("jan tue","cool.")

// function suma(a,b){
// 	return a+b
// }

// let rezult = suma(7,8)
// alert(rezult)

//sarici 1

// let latimea = +prompt("introdu un latime bro trust me");
// let lungimea = +prompt("aceasi chestie dar cu lungimea");
// let inaltimea = +prompt("aceasi chestie dar cu inaltimea");

// function volum(x,y,z){
// 	return x*y*z;
// }

// alert("volumul la uh cuboid e "+volum(latimea,lungimea,inaltimea));

//sarcin 2

let n1 = +prompt("introdu numAR PRim")
let oper = prompt("ce operatie vreti")
let n2 = +prompt("introdu numARUL al DOIlea bro...")
let rez;

console.log("numarul intai era " +n1)
console.log("あなたの手術は " +oper)
console.log("Hello, your second number was " +n2)

function add(a,b){
	return a+b;
}
function divide(a,b){
	return a/b;
}
function minus(a,b){
	return a-b;
}
function multiply(a,b){
	return a*b;
}
switch(oper){
	case '+':
	rez = add(n1,n2)
	break;
	case '/':
	rez = divide(n1,n2)
	break;
	case '-':
	rez = minus(n1,n2)
	break;
	case '*':
	rez = multiply(n1,n2)
	break;
}
console.log(n1+" "+oper+" "+n2+" = "+rez)