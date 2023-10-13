/* Function to validate email using regular expression */ 

function validateEmail (){
    /* Create a regex variable for checking if input is valid */ 
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  
    /* Create a variable to store user's input */ 
    let userInput = document.getElementById("user-input");

    // const para = document.createElement("p");
    // const node = document.createTextNode("Please enter valid email");
    // para.appendChild(node);

    // const validEmailMessage = document.getElementById("email-form");
    // const childElement = document.querySelector("form > p ")

    // validEmailMessage.insertBefore(para, childElement);



    
    // .insertBefore(para, child)




}

/* Create a p element */ 
// const para = document.createElement("p");
// /* Assign the text 'please enter a valid email' to that p tag */ 
// const node = document.createTextNode("Please enter valid email");
// /* Combine these two together */ 
// para.appendChild(node);

// const validEmailMessage = document.getElementById("email-form");
// const childElement = document.querySelector("form > label ");

// validEmailMessage.insertBefore(para, childElement);

// validEmailMessage.style.fontSize = "2em";

// document.querySelector("form > p").style.outline = "thick solid #0000FF";
// document.querySelector("form > p").style.fontSize = "1rem";
// document.querySelector

const form = document.querySelector('form');
const emailAlert = document.createElement("p");
emailAlert.textContent = "Please enter a valid email address";
form.prepend(emailAlert);

emailAlert.style.float = "right";
emailAlert.style.fontSize = ".8rem";
emailAlert.style.color = "#FF6257";



// const div = document.querySelector('div')
// const newChild = document.createElement('p')
// newChild.textContent = 'foo'
// div.prepend(newChild)

// emailAlert.prepend()

// div.prepend(newChild)



/* If 

user types in an invalid address

OR 

there is no input 

*/ 