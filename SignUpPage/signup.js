
function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender;
    var favPlayer = document.contactForm.favPlayer;
  
    

    var nameErr = emailErr = mobileErr = countryErr = genderErr = farPlayer = true; 

    if(name == ""){
        printError("nameErr", "Please enter your name");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(email == ""){
        printError("emailErr", "Please enter your email");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false){
            printError("emailErr", "Please enter a valid email address");
        }else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    if(mobile == ""){
        printError("mobileErr", "Please enter your phone number");
    }else{
        var regex = /^[0-9]{10}$/;
        if(regex.test(mobile) === false){
            printError("mobileErr", "Please enter a valid phone number");
        }else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    if(country == ""){
        printError("countryErr", "Please enter your country name");
    }else{
        printError("countryErr", "");
        countryErr = false;
    }
    
    for(var i = 0; i < gender.length; i++){
        if(!gender[i].checked){
            printError("genderErr", "Please select your gender");
        }else{
            printError("genderErr", "");
        genderErr = false;
        }
    }
    
    if(favPlayer == ""){
        printError("nameErr", "Pleae enter your favorite player from FC Barcelona.");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(nameErr || emailErr || mobileErr || countryErr || genderErr == true){
        return false;
    }else{
        alert('CONGRATULATIONS!!! You are now an official member of FC Barcelona fan club');
    }
}
