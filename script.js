const userInput = document.getElementById("user-input");
const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   /* Saves user's email in local storage */
const emailAddress = localStorage.setItem("emailAddress", userInput.value);
const errorMessage = document.getElementById("error-message");

const spanUserInput = document.getElementById("display-user-input");

spanUserInput.addEventListener("DOMContentLoaded", displayPage);


function validateEmail() {
    if (userInput.value.match(mailFormat)) {
        /* If input is valid, opens success window in the same tab (_self) window */
        window.open("success.html", "_self");
    } else if (userInput.value == "") {
        errorMessage.textContent = "Valid email required";
        userInput.classList.add("error-state");
    } else {
        errorMessage.textContent = "Valid email required";
        userInput.classList.add("error-state");
    }

}



// subscribeButton.addEventListener("click", displayPage);



// const subscribeButton = document.getElementById("subscribe-Button"); //get elements from site to use in script
// const inputField = document.getElementById("input-field");


function displayPage() {
    let displayElement = document.getElementById("display-user-input"); // display inputed adress email
    const userEmailAddress =  displayElement.value;
  
    displayElement.textContent = userEmailAddress;
  }



  
//   const subscribeButton = document.getElementById("subscribe-Button"); //get elements from site to use in script
//   const inputField = document.getElementById("input-field");
  
//   subscribeButton.addEventListener("click", validate);
//   subscribeButton.addEventListener("click", displayPage);

//   function displayPage() {
//     let displayElement = document.getElementById("displayEmail"); // display inputed adress email
//     const inputValue = inputField.value;
  
//     displayElement.textContent = inputValue;
//   }
        
      
        // document.getElementById("test").style.border = "5px solid blue";
       

        // var userEmail = console.log(userInput.value);
        // alert(userInput.value);









//   var blue = document.getElementById("display-user-input");





// window.onload = function(){
//     var name = prompt("What's your name?");
//     var lengthOfName = name.length

//     document.getElementById('output').innerHTML = lengthOfName;
// };

// displayUserEmail();























// var form = document.getElementById('email-form');
// var emailAlert = document.createElement("p");
// emailAlert.style.float = "right";
// emailAlert.style.fontSize = ".8rem";
// emailAlert.style.color = "#FF6257";
// emailAlert.style.fontWeight = "bold";
// emailAlert.textContent = "Valid email required";


// userInput.style.backgroundColor = "#ffe8e6";
// userInput.style.border = "solid #FF6257 1px";
// placeholder.style.border = "solid #FF6257 1px";


// form.prepend(emailAlert); 





//   function validateEmail(inputText) {
//     var mailFormat =  /\S+@\S+\.\S+/;
//     if (inputText.value.match(mailFormat)) {
//       alert("Valid address!");
//       return true;
//     } else {
//       alert("Invalid address!");
//       return false;
//     }
//   }









// function successMessage(){
//     alert("Success!");
// }

// var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// function validateEmail(){


//     /* Create a variable to store user's input */ 
//     var userInput = document.getElementById("user-input");
//     // var placeholder = document.getElementById("placeholder");



//     if(userInput == validRegex){
//         alert("Nice work!");
//     }
//     else{
//         alert("Not valid I'm afraid");
//     }


// }


// const validateEmail = (email) => {
//     return email.match(
//       /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     )
//     ;

//  function(){

//  }   





// var form = document.getElementById('email-form');
// var emailAlert = document.createElement("p");
// emailAlert.style.float = "right";
// emailAlert.style.fontSize = ".8rem";
// emailAlert.style.color = "#FF6257";
// emailAlert.style.fontWeight = "bold";
// emailAlert.textContent = "Valid email required";


// userInput.style.backgroundColor = "#ffe8e6";
// userInput.style.border = "solid #FF6257 1px";
// placeholder.style.border = "solid #FF6257 1px";


// form.prepend(emailAlert); 




/* Function to validate email using regular expression */
// function validateEmail(){

//     do{
//         emailAlert.style.float = "right";
//         emailAlert.style.fontSize = ".8rem";
//         emailAlert.style.color = "#FF6257";
//         emailAlert.style.fontWeight = "bold";
//         emailAlert.textContent = "Valid email required";
//         form.prepend(emailAlert); 
//         return false;
//     }

//     while(userInput !== validRegex || userInput == "");




// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)


// }










/* 

 /* Alert message styling (Valid email required) */
// emailAlert.style.float = "right";
// emailAlert.style.fontSize = ".8rem";
// emailAlert.style.color = "#FF6257";
// emailAlert.style.fontWeight = "bold";



/* Email address / user input styling */
// userInput.style.backgroundColor = "#ffe8e6";
// userInput.style.border = "solid #FF6257 1px";
// placeholder.style.border = "solid #FF6257 1px";











// IF

// button is clicked with no input 

// i.e. userInput = "";

// OR 

// userInput is not valid 

// i.e. userInput != regex 

// THEN

// return emailAlert 




// */