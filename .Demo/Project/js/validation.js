function validateForm() {
    for (i = 0; i < myform.elements.length; i++) {
        if (myform.elements[i].className == 'req' && myform.elements[i].value.length == 0) {
            alert("Please fill in all the required fields");
            return false;
        }
    }

    var email = document.getElementById('email').value;
    var atpos = email.indexOf('@');
    var dotpos = email.lastIndexOf('.');

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {

        alert("Please enter a valid Email Address");
        return false;
    }


}