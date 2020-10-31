
function printError(element, msg){
    document.getElementById(element).innerHTML = msg;
}

function validateForm(){
    
    var name = document.contactForm.name.value;
    var heading  = document.contactForm.heading.value;
    var venue = document.contactForm.venue;
    var content = document.contactForm.content;
  
    

    var nameErr = headingErr = venueErr = contentErr = true;

    if(name == ""){
        printError("nameErr", "Display name for each post is mandatory");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false){
            printError("nameErr", "Please enter a valid name");
        }else{
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(heading == ""){
        printError("headingErr", "A suitable heading is mandatory. ")
    } else {
        printError("headingErr", "");
        headingErr = false;
    }

    for(var i = 0; i < venue.length; i++){
        if(!venue[i].checked){
                printError("venueErr", "Select if the match was home or away.");
            }else{
                printError("venueErr", "");
            venueErr = false;
            }
        }

    if(content == ""){
        printError("contentErr", "Content is mandatory");
        }else{
         if(content.length < 50){
             printError("contentErr", "At lest 50 characters are required");
            }else{
                printError("contentErr", "");
                contentErr = false;
                }
            }

    if(nameErr || headingErr || venueErr || contentErr == true){
        return false;
    }else{
        alert('Thank you for posting your content.');
    }
}
