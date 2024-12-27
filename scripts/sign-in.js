// // Form Validation

// // Sign In Page

const email = document.getElementById("emailInput");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");

const form = document.getElementById("signinForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();  // Prevent form submission

const storedEmail = localStorage.getItem("userEmail")
const storedPass = localStorage.getItem("userPassword")

if(email.value===storedEmail && password.value ===storedPass){
  setTimeout(function(){        // To clear the styling after submitting
    alert("Login Succeeded")
    window.location.href = "/index.html"  // To Redirect To the homepage
  },1000)
}
else if(email.value===storedEmail && password.value !=storedPass){
  alert("Sorry Wrong Password")
}
else if(email.value !=storedEmail && password.value ===storedPass){
  alert("Sorry Wrong Email")
}
else{
  alert("Please Enter Valid Input")
}

  if ((email.value === "") || (password.value === "")) {
    password.style.border = "2px solid red"
    email.style.border = "2px solid red";
    emailError.textContent = "Please Enter Email"
    emailError.style.color = "red";
    emailError.style.fontSize = "14px";
    emailError.style.marginTop = "8px";
    passError.textContent = "Please Enter Password"
    passError.style.color = "red";
    passError.style.fontSize = "14px";
    passError.style.marginTop = "8px";
  }
  else {
    passError.style.display = "none"
    emailError.style.display = "none"
    password.style.border = "2px solid green"
    email.style.border = "2px solid green";
  }

  if ((email.value) && (password.value === "")) {
    password.style.border = "2px solid red"
    emailError.style.display = "none";
    email.style.border = "2px solid green";
    passError.textContent = "Please Enter Password"
    passError.style.color = "red";
    passError.style.fontSize = "14px";
    passError.style.marginTop = "8px";
  }
  else if ((email.value === "") && (password.value)) {
    email.style.border = "2px solid red";
    passError.style.display = "none";
    password.style.border = "2px solid green"
    emailError.textContent = "Please Enter Email"
    emailError.style.color = "red";
    emailError.style.fontSize = "14px";
    emailError.style.marginTop = "8px";
  }

})