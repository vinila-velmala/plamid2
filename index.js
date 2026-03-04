const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber  = document.getElementById('phone number ');
const password = document.getElementById('password ');
const confirmpassword = document.getElementById('confirmm password');

const username_error = document.getElementById('username_error');
const email_error = document.getElementById('email_error');
const phonenumber_error  = document.getElementById('phone number_error ');
const password_error  = document.getElementById('password_error ');
const confirmpassword_error = document.getElementById('confirmpassword_error');


form.addEventListener("submit", (e) =>
   {
      
    var email_check = "/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+([A-Za-z]{2,4})$/"

    if(username.value === '' || username.value == null)
    {
      e.preventDefault();
      username_error.innerHTML= " username is required";
    }

    if(!email.value.match(email_check));
    {
     e.preventDefault();
     email_error.innerHTML =" valid email is required";
    }
    

    if(phonenumber && digitsOnlyRegex.test(phonenumber))
    {
     console.log("phone number is not empty and contains Only digits.");
    }else{
      console.log("Invalid phone number format (must be digits only).");
      <a href="tel:1234567890">call now</a>

    }    

    if(password.value.length ="<5");
    {
     e.preventDefault();
    password_error.innerHTML="Password must be  8 characters";
    }
    if(confirmpassword.value);
    {
    e.preventDefault();
    confirmpassword_error.innerHTML="Password must be 8 characters";

    }
    
});









