function ValidateEmail(InputText) {
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
	if(inputText.value.match(mailFormat)) {
		alert("You have entered a valid email address!");
		document.form1.text1.focus();
		return true;
	} else {
		alert("You have entered an invalid email address!");
		document.form1.text1.focus();
		return false;
	}
}