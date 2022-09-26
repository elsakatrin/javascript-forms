const form = document.querySelector('form') 


form.addEventListener ('submit', (event) => {
    event.preventDefault () //This prevents the page from being refreshed every time you push the send button
    console.log("form submission")
})


//Here I want to remind people to fill inn all required fields (Full name, Email and Subject)
const sendbtn = document.getElementById('sendbtn'); //Making a 'name' for the sendbtn so I can use it in javascript by ID of it in the HMTL

const validate = (e) => {
    const name = document.getElementById('full-name'); //Here I carify that when I say Name I mean the element with the ID of full-name and so on
    const emailAddress = document.getElementById('email');
    const subject = document.getElementById('subject');
    const failureIcon = document.getElementsByClassName('failure-icon') //Here I make the name from the class of the Icon in the HTML 
    const successIcon = document.getElementsByClassName('success-icon')
    
    if (name.value === "") { //When the input field is empty the things below take action
        alert("please enter your full name"); //The alert that comes up if people try to click send before entering required fields
        name.focus();
        failureIcon[0].style.opacity="1"; //Icon appears if field is empty 
        return false;  //When this returns False then the alert pops up (if the field is empty)
    }
    else {
        successIcon[0].style.opacity="1"; //If the field isn't empty this Icon appears 
    }

    if (emailAddress.value === "") {
        alert ("Please enter your email address");
        emailAddress.focus();
        failureIcon[1].style.opacity="1";
        return false;
    }
    else {
        successIcon[1].style.opacity="1";
    }
    if (subject.value === "" ) {
        alert ("Please enter your subject");
        subject.focus();
        failureIcon[2].style.opacity="1";
        return false;
    } 
    else {
        successIcon[2].style.opacity="1";
    } //Now I have told Javascript that If the fields are not filled out they should alert and make the red failure icon appear but if the fields are filled out the green success icon appears


    //Here we're checking if the email address is vaild
    if (!emailIsValid(emailAddress.value)) {
        alert("Please enter a valid email address.");
        failureIcon[3].style.opacity="1";
        emailAddress.focus();
        return false;
      }
      
      return true; 
    }
    
    const emailIsValid = email => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //This is so the email is an valid email with @ and not other icon like $ 


}

//sendbtn.addEventListener('click', validate) //Here I ask the button to validate if these fields are filled out, if not the alert goes into action


//Here am I doing a success screen. When a mail has been sent successfully we get a popup screen that says thank you
let modalwindow = document.getElementById('modalwindow') //Modal window is the window with the low opacity that fills the screen on popup
    sendbtn.onclick = function () { //Here I make an onclick function that ways when I click send button modal window appears

    const noError = validate () //This is so if there are no errors in the input fields the Modal window appears 
        if (noError) {
               modalwindow.style.display = "block";
        if (validate === "modalwindow") modalwindow.style.display = "block"; //If there are no errors and everything is validated modal window appears 
        }
    
}
//This function is to close the success screen (Modal window)
modalwindow.onclick = function (e) {  //Here's another on click function 
    if (e.target.id === "modalwindow") modalwindow.style.display = "none"; //This says event on target ID is modal window so you can only click on modal window not the modal content to close
}






