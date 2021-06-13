'use strict';


document.getElementById('icon').addEventListener('click',function(){
	let x = document.getElementById("topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }
);

function user(){
	
	var user = document.getElementById('user_info');
	
	if( sessionStorage.getItem('first name')!==null || sessionStorage.getItem('last name')!==null ){
		user.innerHTML= "Logged in as temporary user " + sessionStorage.getItem('first name') +" "+ sessionStorage.getItem('last name');
	} else {	
		user.innerHTML= "Logged in as " + localStorage.getItem('first name') +" "+ localStorage.getItem('last name');
	}
}

user();


document.getElementById('logout').addEventListener('click',function(){
	
	sessionStorage.removeItem('first name');
	sessionStorage.removeItem('last name');
	localStorage.removeItem('first name');
	localStorage.removeItem('last name');
	window.location.href="../index.html";
},false);










