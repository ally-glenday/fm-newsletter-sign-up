/* Function to validate email using regular expression */ 
function validateEmail (){

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    /* Create a variable to store user's input */ 
    var userInput = document.getElementById("user-input");
    const placeholder = document.querySelector("placeholder");
    
    var form = document.querySelector('form');
    var emailAlert = document.createElement("p");
    emailAlert.textContent = "Valid email required";
    form.prepend(emailAlert);

    
    if(userInput != validRegex || userInput == ""){
   
    
    /* Alert message styling (Valid email required) */
    emailAlert.style.float = "right";
    emailAlert.style.fontSize = ".8rem";
    emailAlert.style.color = "#FF6257";
    emailAlert.style.fontWeight = "bold";
    
    /* Email address / user input styling */
    userInput.style.backgroundColor = "#ffe8e6";
    userInput.style.border = "solid #FF6257 1px";
    userInput:placeholder.style.border = "solid #FF6257 1px";
        validateEmail();
        return false;
          
     }
    

}




// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   } 









