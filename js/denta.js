/*
  Toggle
*/
var navLinks = document.getElementById("navLinks")
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}
/*
  Login Page
*/
var form = document.getElementById("formAction");
var emailInput = document.getElementById("email");
var emailError = document.getElementById("emailError");

// Email
if (emailInput) {
  function validateEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailInput.value)) {
      emailError.textContent = "Please enter a valid email";
      emailError.style.display = "block";
      return false;
    } else {
      emailError.textContent = "";
      emailError.style.display = "none";
      return true;
    }
  }
}

// Password
var passwordInput = document.getElementById("password");
var passError = document.getElementById("passwordError");

if (passwordInput) {
  passwordInput.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  function validatePassword() {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  
    if (!passwordRegex.test(passwordInput.value)) {
      passError.textContent ="Password must be at least 5 characters long and contain a number";
      passError.style.display = "block";
      return false;
    } else {
      passError.textContent = "";
      passError.style.display = "none";
      return true;
    }
  }
}

if (passwordInput && emailInput) {
  emailInput.onblur = validateEmail;
  passwordInput.onblur = validatePassword;

  function validateEmailAndPassword() {
    if (validateEmail() && validatePassword()) {
      window.location.href = "home.html";
      return false;
    }
    return false;
  }
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmailAndPassword();
  });
}


var passwordInputs = document.querySelectorAll("input[type='password']");
var showPasswordIcons = document.querySelectorAll(".eye");
var hidePasswordIcons = document.querySelectorAll(".eye-slash");

// Show Password
showPasswordIcons.forEach(function(showIcon, index) {
  showIcon.addEventListener("click", function() {
    passwordInputs[index].type = "text";
    showIcon.style.display = "none";
    hidePasswordIcons[index].style.display = "block";
  });
});

// Hide Password
hidePasswordIcons.forEach(function(hideIcon, index) {
  hideIcon.addEventListener("click", function() {
    passwordInputs[index].type = "password";
    hideIcon.style.display = "none";
    showPasswordIcons[index].style.display = "block";
  });
});

/*
  Sign Up Page
*/








/*
  Go To Sign In Page
*/

var signInButton = document.getElementById("signIn");
if (signInButton) {
    signInButton.addEventListener("click", function() {
        window.location.href = "signin.html";
    });
}
/*
  Go To Sign Up Page
*/

var signUpButton = document.getElementById("signUp");
if (signUpButton) {
    signUpButton.addEventListener("click", function() {
        window.location.href = "signup.html";
    });
}


const signBtns = document.querySelectorAll(".sign__btn");
signBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      signBtns.forEach((e) => e.classList.remove("active"));
        btn.classList.add("active");
    });
});








