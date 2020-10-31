
function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    var fname = document.contactForm.firstname.value;
    var lname = document.contactForm.lastname.value;
    var country = document.contactForm.country.value;
    var subject = document.contactForm.subject.value;
    var message = document.contactForm.message.value;
  

    var firstNameErr = lastNameErr = countryErr = subjectErr = messageErr = true; 

    if(fname == ""){
        printError("firstNameErr", "Firstname is mandatory.");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(fname) === false){
            printError("firstNameErr", "Please enter a valid first name");
        }else{
            printError("firstNameErr", "");
            firstNameErr = false;
            }
        }

    if(lname == ""){
        printError("lastNameErr", "Lastname is mandatory.");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lname) === false){
            printError("lastNameErr", "Please enter a valid last name");
        }else{
            printError("lastNameErr", "");
            lastNameErr = false;
            }
        }   

    if(country == ""){
        printError("countryErr", "Country name is mandatory.");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(country) === false){
            printError("countryErr", "Please enter a valid country name.");
        }else{
            printError("countryErr", "");
            countryErr = false;
            }
        }  

    if(subject == ""){
        printError("subjectErr", "Specific subject is mandatory. ")
    } else {
        printError("subjectErr", "");
        subjectErr = false;
    }    

    if(message == ""){
        printError("messageErr", "Message is mandatory");
        }else{
            printError("messagetErr", "");
            messageErr = false;
        }

    if(firstNameErr || lastNameErr || countryErr || subjectErr || messageErr == true){
        return false;
    }else{
        alert( "Thank you contacting us. We will reach back to you ASAP.");
    }
}
