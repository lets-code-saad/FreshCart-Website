const form = document.getElementById("signupForm");
const firstNameInput = document.getElementById("firstName");
const secondNameInput = document.getElementById("secondName");
const email = document.getElementById("emailInput");
const pass = document.getElementById("passInput");
const firstNameErrMsg = document.getElementById("firstNameError")
const secondNameErrMsg = document.getElementById("secondNameError")
const emailErrMsg = document.getElementById("emailError");
const passErrMsg = document.getElementById("passwordError");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("userEmail", email.value)
    localStorage.setItem("userPassword",pass.value)

    // Checking If All Inputs Are Empty
    if (firstNameInput.value === "" && secondNameInput.value === "" && email.value === "" && pass.value === "") {
        firstNameInput.style.border = "1px solid red";
        firstNameErrMsg.textContent = "Please Enter First Name";
        firstNameErrMsg.style.fontSize = "14px";
        firstNameErrMsg.style.color = "red";
        firstNameErrMsg.style.marginTop = "8px";

        secondNameInput.style.border = "1px solid red";
        secondNameErrMsg.textContent = "Please Enter Second Name";
        secondNameErrMsg.style.fontSize = "14px";
        secondNameErrMsg.style.color = "red";
        secondNameErrMsg.style.marginTop = "8px";

        emailInput.style.border = "1px solid red";
        emailErrMsg.textContent = "Please Enter Email Address";
        emailErrMsg.style.fontSize = "14px";
        emailErrMsg.style.color = "red";
        emailErrMsg.style.marginTop = "8px";

        passInput.style.border = "1px solid red";
        passErrMsg.textContent = "Please Create A Strong Password";
        passErrMsg.style.fontSize = "14px";
        passErrMsg.style.color = "red";
        passErrMsg.style.marginTop = "8px";

    }

    // Checking If Only One Input Is Filled And All Others Are Empty
    else if (firstNameInput.value && secondNameInput.value === "" && emailInput.value === "" && passInput.value === "") {
        firstNameErrMsg.style.display = "none";
        firstNameInput.style.border = "1px solid green"

        secondNameInput.style.border = "1px solid red";
        secondNameErrMsg.textContent = "Please Enter Second Name";
        secondNameErrMsg.style.fontSize = "14px";
        secondNameErrMsg.style.color = "red";
        secondNameErrMsg.style.marginTop = "8px";

        emailInput.style.border = "1px solid red";
        emailErrMsg.textContent = "Please Enter Email Address";
        emailErrMsg.style.fontSize = "14px";
        emailErrMsg.style.color = "red";
        emailErrMsg.style.marginTop = "8px";

        passInput.style.border = "1px solid red";
        passErrMsg.textContent = "Please Create A Strong Password";
        passErrMsg.style.fontSize = "14px";
        passErrMsg.style.color = "red";
        passErrMsg.style.marginTop = "8px";
    }

    else if (secondNameInput.value && firstNameInput.value === "" && emailInput.value === "" && passInput.value === "") {
        secondNameErrMsg.style.display = "none";
        secondNameInput.style.border = "1px solid green"

        firstNameInput.style.border = "1px solid red";
        firstNameErrMsg.textContent = "Please Enter First Name";
        firstNameErrMsg.style.fontSize = "14px";
        firstNameErrMsg.style.color = "red";
        firstNameErrMsg.style.marginTop = "8px";

        emailInput.style.border = "1px solid red";
        emailErrMsg.textContent = "Please Enter Email Address";
        emailErrMsg.style.fontSize = "14px";
        emailErrMsg.style.color = "red";
        emailErrMsg.style.marginTop = "8px";

        passInput.style.border = "1px solid red";
        passErrMsg.textContent = "Please Create A Strong Password";
        passErrMsg.style.fontSize = "14px";
        passErrMsg.style.color = "red";
        passErrMsg.style.marginTop = "8px";
    }

    else if (emailInput.value && firstNameInput.value === "" && secondNameInput.value === "" && passInput.value === "") {
        emailErrMsg.style.display = "none";
        emailInput.style.border = "1px solid green"

        firstNameInput.style.border = "1px solid red";
        firstNameErrMsg.textContent = "Please Enter First Name";
        firstNameErrMsg.style.fontSize = "14px";
        firstNameErrMsg.style.color = "red";
        firstNameErrMsg.style.marginTop = "8px";

        secondNameInput.style.border = "1px solid red";
        secondNameErrMsg.textContent = "Please Enter Second Name";
        secondNameErrMsg.style.fontSize = "14px";
        secondNameErrMsg.style.color = "red";
        secondNameErrMsg.style.marginTop = "8px";

        passInput.style.border = "1px solid red";
        passErrMsg.textContent = "Please Create A Strong Password";
        passErrMsg.style.fontSize = "14px";
        passErrMsg.style.color = "red";
        passErrMsg.style.marginTop = "8px";
    }
    else if (passInput.value && firstNameInput.value === "" && secondNameInput.value === "" && emailInput.value === "" && passInput.value === "") {
        passErrMsg.style.display = "none";
        passInput.style.border = "1px solid green"

        firstNameInput.style.border = "1px solid red";
        firstNameErrMsg.textContent = "Please Enter First Name";
        firstNameErrMsg.style.fontSize = "14px";
        firstNameErrMsg.style.color = "red";
        firstNameErrMsg.style.marginTop = "8px";

        secondNameInput.style.border = "1px solid red";
        secondNameErrMsg.textContent = "Please Enter Second Name";
        secondNameErrMsg.style.fontSize = "14px";
        secondNameErrMsg.style.color = "red";
        secondNameErrMsg.style.marginTop = "8px";

        emailInput.style.border = "1px solid red";
        emailErrMsg.textContent = "Please Enter Email Address";
        emailErrMsg.style.fontSize = "14px";
        emailErrMsg.style.color = "red";
        emailErrMsg.style.marginTop = "8px";
    }

    // Checking If Two Inputs Are Filled And All Others Are Empty
    else if (firstNameInput.value && secondNameInput.value && emailInput.value === "" && passInput.value === "") {
        firstNameErrMsg.style.display = "none";
        firstNameInput.style.border = "1px solid green"

        secondNameErrMsg.style.display = "none";
        secondNameInput.style.border = "1px solid green"

        emailInput.style.border = "1px solid red";
        emailErrMsg.textContent = "Please Enter Email Address";
        emailErrMsg.style.fontSize = "14px";
        emailErrMsg.style.color = "red";
        emailErrMsg.style.marginTop = "8px";

        passInput.style.border = "1px solid red";
        passErrMsg.textContent = "Please Create A Strong Password";
        passErrMsg.style.fontSize = "14px";
        passErrMsg.style.color = "red";
        passErrMsg.style.marginTop = "8px";
    }

    else if (emailInput.value && passInput.value && firstNameInput.value === "" && secondNameInput.value === "") {
        emailErrMsg.style.display = "none";
        emailInput.style.border = "1px solid green"

        passErrMsg.style.display = "none";
        passInput.style.border = "1px solid green"

        firstNameInput.style.border = "1px solid red";
        firstNameErrMsg.textContent = "Please Enter First Name";
        firstNameErrMsg.style.fontSize = "14px";
        firstNameErrMsg.style.color = "red";
        firstNameErrMsg.style.marginTop = "8px";

        secondNameInput.style.border = "1px solid red";
        secondNameErrMsg.textContent = "Please Enter Second Name";
        secondNameErrMsg.style.fontSize = "14px";
        secondNameErrMsg.style.color = "red";
        secondNameErrMsg.style.marginTop = "8px";
    }

    // Checking If Three Inputs Are Filled And Only One Is Empty
    else if (firstNameInput.value && secondNameInput.value && emailInput.value && passInput.value === "") {
        firstNameErrMsg.style.display = "none";
        firstNameInput.style.border = "1px solid green"

        secondNameErrMsg.style.display = "none";
        secondNameInput.style.border = "1px solid green"

        emailErrMsg.style.display = "none";
        emailInput.style.border = "1px solid green"

        passInput.style.border = "1px solid red";
        passErrMsg.textContent = "Please Create A Strong Password";
        passErrMsg.style.fontSize = "14px";
        passErrMsg.style.color = "red";
        passErrMsg.style.marginTop = "8px";
    }

    else if (firstNameInput.value && secondNameInput.value && emailInput.value==="" && passInput.value){
        firstNameErrMsg.style.display = "none";
        firstNameInput.style.border = "1px solid green"
        secondNameErrMsg.style.display = "none";
        secondNameInput.style.border = "1px solid green"
        passErrMsg.style.display = "none";
        passInput.style.border = "1px solid green"

        emailInput.style.border = "1px solid red";
        emailErrMsg.textContent = "Please Enter Email Address";
        emailErrMsg.style.fontSize = "14px";
        emailErrMsg.style.color = "red";
        emailErrMsg.style.marginTop = "8px";
    }

    else if (firstNameInput.value && secondNameInput.value==="" && emailInput.value && passInput.value){
        firstNameErrMsg.style.display = "none";
        firstNameInput.style.border = "1px solid green"
        emailErrMsg.style.display = "none";
        emailInput.style.border = "1px solid green"
        passErrMsg.style.display = "none";
        passInput.style.border = "1px solid green"

        secondNameInput.style.border = "1px solid red";
        secondNameErrMsg.textContent = "Please Enter Second Name";
        secondNameErrMsg.style.fontSize = "14px";
        secondNameErrMsg.style.color = "red";
        secondNameErrMsg.style.marginTop = "8px";
    }

    else if (firstNameInput.value==="" && secondNameInput.value && emailInput.value && passInput.value){
        firstNameInput.style.border = "1px solid red";
        firstNameErrMsg.textContent = "Please Enter First Name";
        firstNameErrMsg.style.fontSize = "14px";
        firstNameErrMsg.style.color = "red";
        firstNameErrMsg.style.marginTop = "8px";

        secondNameErrMsg.style.display = "none";
        secondNameInput.style.border = "1px solid green"
        emailErrMsg.style.display = "none";
        emailInput.style.border = "1px solid green"
        passErrMsg.style.display = "none";
        passInput.style.border = "1px solid green"
    }
    else {
        firstNameErrMsg.style.display = "none";
        firstNameInput.style.border = "1px solid green"
        secondNameErrMsg.style.display = "none";
        secondNameInput.style.border = "1px solid green"
        emailErrMsg.style.display = "none";
        emailInput.style.border = "1px solid green"
        passErrMsg.style.display = "none";
        passInput.style.border = "1px solid green"
setTimeout(function(){
    alert("Congratulations!! Your Account Has Been Created Successfully")
},1000);
window.location.href="/pages/sign-in.html";
        
    }

})