function replaceForm() {
	
	const form = document.getElementById('form1');
	const replaceform = document.getElementById('rform');
	const firstName = document.getElementById('fname').value;
	const lastname = document.getElementById('lname').value;
	const email = document.getElementById('email').value;
	const Subject = document.getElementById('Subject').value;
	const Message = document.getElementById('Message').value;
	const firstNameError = document.getElementById('error1');
	const lastnameError = document.getElementById('error2');
	const emailError = document.getElementById('error3');
	const SubjectError = document.getElementById('error4');
	const MessageError = document.getElementById('error5'); 

	let text;

	if(firstName === ""){
		text = "Name Is Required";
		firstNameError.innerHTML = text;
	}else{
		firstNameError.style.display= "none" ;
	}

	if(lastname === ""){
		text = "Name Is Required";
		lastnameError.innerHTML = text;
	}else{
		lastnameError.style.display= "none" ;
	}


	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Email Is Required. <br> Please Enter Valid Email";
		emailError.innerHTML = text;
	}else{
		emailError.style.display= "none" ;
	}

	if(Subject === ""){
		text = "Subject Is Required";
		SubjectError.innerHTML = text;
	}else{
		SubjectError.style.display= "none" ;
	}

	if(Message === "" || Message.length < 10){
		text = "Message Is Required";
		MessageError.innerHTML = text;
		return false;
	}else{
		MessageError.style.display= "none" ;
	}

	if(form1.style.display == "none"){
		form1.style.display = "block";
	}else{
		form1.style.display = "none";
		replaceform.style.display = "block";
	}


}