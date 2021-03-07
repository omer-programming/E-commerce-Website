function replaceform() {

	const form = document.getElementById('form1');
	const replaceForm = document.getElementById('RForm');
	const email= document.getElementById('emailid').value;
	const EmailError = document.getElementById('error1');
	let text;

	EmailError.style.display ="block";
	
	if(email.indexOf("@") == -1 || email.length < 6){
		text = "Email Is Required";
		EmailError.innerHTML = text;
		return false;
	}else{
		EmailError.style.display ="none";
	}

	if(form.style.display === "none"){
		form.style.display = "block"
	}else{
		form.style.display = "none";
		replaceForm.style.display = "block";
	}
}