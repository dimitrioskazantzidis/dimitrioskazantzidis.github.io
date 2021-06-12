'use strict';


document.getElementById('playerAge').addEventListener('mouseover',function(){calculateAge('playerAge',new Date(1990,7,15))},false);
document.getElementById('playerAge').addEventListener('mouseout',function(){document.getElementById('playerAge').innerHTML = 'born 15/08/1990'},false);



function calculateAge(id,dob) {
	let x = document.getElementById(id);
	let diff = Date.now() - dob.getTime();
	let age_dif = new Date(diff);
	let age = Math.abs(age_dif.getUTCFullYear() - 1970);
	x.innerHTML = age + ' years old';
	return x  ;
}