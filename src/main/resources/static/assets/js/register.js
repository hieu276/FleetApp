document.addEventListener("DOMContentLoaded", function() {
	
	var password = document.getElementById('yourPassword');
	var confirmPassword = document.getElementById('confirmPassword');
	
	function validatePassword(){
	  if(password.value != confirmPassword.value) {
		    confirmPassword.setCustomValidity("Passwords Don't Match");
			confirmPassword.reportValidity();
		  } else {
		    confirmPassword.setCustomValidity('');
		  }
	}
	password.onchange = validatePassword;
	confirmPassword.onkeyup = validatePassword;
	/*
	var acceptBox = document.getElementById('acceptTerms');
	document.getElementById('createButton').addEventListener('click', function(event){
		if()
	}
		
	}*/
});


