function validateForm() {

	/* Validate the first_name field of the form */
	var fn = document.forms['contactForm'].first_name.value;

	/* If the Name string is empty or less than 3 characters then return false and show warning. */
	if (fn.trim() == "") {
		alert("First name must be filled out");
		document.forms['contactForm'].first_name.value = '';
		return false;
	} else if (fn.length <= 2) {
		alert("Your first name must more than two characters");
		document.forms['contactForm'].first_name.value = '';
		return false;
	}
	
	/* Validate the last_name field of the form */
	var ln = document.forms["contactForm"]["last_name"].value;
	
	/* If the last_name string is empty or less than 3 characters then return false. */
	if (ln.trim() == ""){
		alert("Last name must be filled out");
		document.forms['contactForm'].last_name.value = '';
		return false;
	  }else if(ln.length <= 2){
		alert("Your last name must be more than two characters");
		document.forms['contactForm'].last_name.value = '';
		return false;
	  }

	/* Check to see if the user's email is valid. */
	var email = document.forms["contactForm"]["user_email"].value;
	
	/* Get the position of the @ symbol in the email string */
	var atpos = email.indexOf("@");
	
	/* Get the position of the dot (.) within the email string */
	var dotpos = email.lastIndexOf(".");
	
	/* The form returns false if:
		1) the @ symbol is the first character
		2) a dot (.) is present within the string and after the @symbol
		3) there is less than 2 characters before the end. */
	if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length){
		alert("Not a valid e-mail address");
		return false;
	}

	/* Validate the Message field of the form. */
	var mes = document.forms["contactForm"]["message"].value;
	
	/* If the message string is empty or less than 10 characters then return false. */
	if (mes.trim() == ""){
		alert("The message must be filled out");
		return false;
	  }else if (mes.length <= 9){
		alert("Your message must be more than 10 characters long");
		return false;
	  }	
	
	/* If all the checks have been passed then return true and submit the form. */
	return true;
}