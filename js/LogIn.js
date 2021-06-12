'use strict';

function store(){

    var fName = document.getElementById('firstName');
    var lName = document.getElementById('lastName');
	var userRemember = document.getElementById("rememberMe");
	
	if(fName.value.length == 0){
        alert('Please fill in first name');

    }else if(lName.value.length == 0){
        alert('Please fill in last name');
		
	}else if(fName.value.length == 0 && lName.value.length == 0){
        alert('Please fill in first name and last name');	
	
	}else if (userRemember.checked == false){
        sessionStorage.setItem('first name', fName.value);
        sessionStorage.setItem('last name', lName.value);
        
    } else {
		localStorage.setItem('first name', fName.value);
        localStorage.setItem('last name', lName.value);
	}
}

//checking
function check(){
    var storedfName = localStorage.getItem('first name');
    var storedlName = localStorage.getItem('last name');
	var sesstoredfName = sessionStorage.getItem('first name');
	var sesstoredlName = sessionStorage.getItem('last name');

    var userfName = document.getElementById('firstName');
    var userlName = document.getElementById('lastName');
    

    if(userfName.value == storedfName && userlName.value == storedlName){
        window.location.href="html/Homepage.html";
    }else if (userfName.value == sesstoredfName && userlName.value == sesstoredlName){
		window.location.href="html/Homepage.html";
    } else {
		alert('Error on login');
	}
}

document.getElementById('login_btn').addEventListener('click',function(){store()},false);
document.getElementById('login_btn').addEventListener('click',function(){check()},false);


function autoLog(){
	let storedfName = localStorage.getItem('first name');
    let storedlName = localStorage.getItem('last name');
	
	if(storedfName !== null && storedlName !== null ){
		window.location.href="html/Homepage.html";
	}
}

autoLog();

