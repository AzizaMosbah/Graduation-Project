/*
  Toggle
*/
var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

/*
  Go To Sign In Page
*/

var signInButton = document.getElementById("signIn");
if (signInButton) {
  signInButton.addEventListener("click", function () {
    window.location.href = "signin.html";
  });
}
/*
  Go To Sign Up Page
*/

var signUpButton = document.getElementById("signUp");
if (signUpButton) {
  signUpButton.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
}

/*
  Show & Hide Password
*/

document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('toggle')) {
      var passwordFields = document.querySelectorAll(".password");
      var confirmPasswordField = document.querySelectorAll(".ConfirmPassword");
      passwordFields.forEach(function(field) {
          var state = field.getAttribute("type");
          if (state === 'password') {
              field.setAttribute("type", "text");
              event.target.style.color = '#265073';
          } else {
              field.setAttribute("type", "password");
              event.target.style.color = '#7a797e';
          }
      });
      
  }
});


document.addEventListener('click', function(event) {
  if (event.target && event.target.classList.contains('confirmToggle')) {

      var confirmPasswordField = document.querySelectorAll(".ConfirmPassword");

      confirmPasswordField.forEach(function(field) {
          var state = field.getAttribute("type");
          if (state === 'password') {
              field.setAttribute("type", "text");
              event.target.style.color = '#265073';
          } else {
              field.setAttribute("type", "password");
              event.target.style.color = '#7a797e';
          }
      });
      
  }
});



/*
  Login Page
*/
var SignInForm = document.getElementById("SignInForm");
var SignInEmail = document.getElementById("SignInEmail");
var SignInEmailError = document.getElementById("SignInEmailError");

// Email
if (SignInEmail) {
  function validateEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(SignInEmail.value)) {
      SignInEmailError.textContent = "Please enter a valid email";
      SignInEmailError.style.display = "block";
      return false;
    } else {
      SignInEmailError.textContent = "";
      SignInEmailError.style.display = "none";
      return true;
    }
  }
}

// Password
var SignInPassword = document.getElementById("SignInPassword");
var signInPasswordError = document.getElementById("signInPasswordError");

if (SignInPassword) {
  SignInPassword.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  function validatePassword() {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(SignInPassword.value)) {
      signInPasswordError.textContent =
        "Password must be at least 5 characters long and contain a number";
      signInPasswordError.style.display = "block";
      return false;
    } else {
      signInPasswordError.textContent = "";
      signInPasswordError.style.display = "none";
      return true;
    }
  }
}

if (SignInPassword && SignInEmail) {
  SignInEmail.onblur = validateEmail;
  SignInPassword.onblur = validatePassword;

  function validateEmailAndPassword() {
    if (validateEmail() && validatePassword()) {
      window.location.href = "services.html";
      return false;
    }
    return false;
  }

  SignInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmailAndPassword();
  });
}



/*
  Sign Up Page
*/

// buttons

const signBtns = document.querySelectorAll(".sign__btn");
signBtns.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault(); 
    signBtns.forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");
  });
});

var signUpForm = document.getElementById("signupForm");
var signUpFirst = document.getElementById("signUpFirst");
var signUpLast = document.getElementById("signUpLast");

if (signUpFirst) {
  function validateFirstName() {
    if (signUpFirst.value.trim() === "") {
      signUpFirstError.textContent = "Please enter your first name";
      signUpFirstError.style.display = "block";
      return false;
    } else {
      signUpFirstError.textContent = "";
      signUpFirstError.style.display = "none";
      return true;
    }
  }
}
if (signUpFirst) {
  signUpFirst.addEventListener("input", function() {
    if (signUpFirstError.style.display === "block" && signUpFirst.value.trim() !== "") {
      signUpFirstError.textContent = "";
      signUpFirstError.style.display = "none";
    }
  });
}

if (signUpLast) {
  function validateLastName() {
    if (signUpLast.value.trim() === "") {
      signUpLastError.textContent = "Please enter your last name";
      signUpLastError.style.display = "block";
      return false;
    } else {
      signUpLastError.textContent = "";
      signUpLastError.style.display = "none";
      return true;
    }
  }
}

var signUpEmail = document.getElementById("signUpEmail");
var signUpEmailError = document.getElementById("signUpEmailError");

if (signUpEmail) {
  function validateSignUpEmail() {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpEmail.value)) {
      signUpEmailError.textContent = "Please enter a valid email";
      signUpEmailError.style.display = "block";
      return false;
    } else {
      signUpEmailError.textContent = "";
      signUpEmailError.style.display = "none";
      return true;
    }
  }
}

var signUpPhone = document.getElementById("signUpPhone");
var signUpPhoneError = document.getElementById("signUpPhoneError");

if (signUpPhone) {
  function validateSignUpPhone() {
    let phoneRegex = /^(01[0-2]|015)\d{8}$/;
    if (!phoneRegex.test(signUpPhone.value)) {
      signUpPhoneError.textContent = "Please enter a valid phone number";
      signUpPhoneError.style.display = "block";
      return false;
    } else {
      signUpPhoneError.textContent = "";
      signUpPhoneError.style.display = "none";
      return true;
    }
  }
}

var signUpPassword = document.getElementById("signUpPassword");
var signUpPasswordError = document.getElementById("signUpPasswordError");

if (signUpPassword) {
  function validatePassword() {
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordRegex.test(signUpPassword.value)) {
      signUpPasswordError.textContent = "Password must be at least 5 characters long and contain a number";
      signUpPasswordError.style.display = "block";
      return false;
    } else {
      signUpPasswordError.textContent = "";
      signUpPasswordError.style.display = "none";
      return true;
    }
  }
}

var confirmPassword = document.getElementById("confirmPassword");
var confirmPasswordError = document.getElementById("signUpConfirmError");

if (confirmPassword) {
  function validateConfirmPassword() {
    if (confirmPassword.value !== signUpPassword.value) {
      confirmPasswordError.textContent = "Passwords do not match";
      confirmPasswordError.style.display = "block";
      return false;
    } else {
      confirmPasswordError.textContent = "";
      confirmPasswordError.style.display = "none";
      return true;
    }
  }
}


if (signUpFirst) {
  signUpFirst.addEventListener("blur", validateFirstName);
}

if (signUpLast) {
  signUpLast.addEventListener("blur", validateLastName);
}

if (signUpEmail) {
  signUpEmail.addEventListener("blur", validateSignUpEmail);
}

if (signUpPhone) {
  signUpPhone.addEventListener("blur", validateSignUpPhone);
}

if (signUpPassword) {
  signUpPassword.addEventListener("blur", validatePassword);
}

if (confirmPassword) {
  confirmPassword.addEventListener("blur", validateConfirmPassword);
}

if (signUpForm) {
  signUpForm.addEventListener("submit", function(e){
    e.preventDefault();
    var validFirstName = validateFirstName();
    var validLastName = validateLastName();
    var validEmail = validateSignUpEmail();
    var validPhone = validateSignUpPhone();
    var validPassword = validatePassword();
    var validConfirmPassword = validateConfirmPassword();
  
    if (validFirstName && validLastName && validEmail && validPhone && validPassword && validConfirmPassword) {
      window.location.href = "continue.html"; 
    }
  })
}


// Drag & Drop Image
const dropArea = document.querySelector(".drag-area");

if (dropArea) {
  const dragText = document.getElementById("header");

  let button = dropArea.querySelector(".button");
  let input = dropArea.querySelector("input");
  let file;

  button.onclick = () => {
    input.click();
  };
  // when browse
  input.addEventListener("change", function () {
    file = this.files[0];
    dropArea.classList.add("active");
    displayFile();
  });
  // when file is inside drag area
  dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload";
    // console.log('File is inside the drag area');
  });
  // when file leave the drag area
  dropArea.addEventListener("dragleave", () => {
    dropArea.classList.remove("active");
    // console.log('File left the drag area');
    dragText.textContent = "Drag & Drop";
  });
  // when file is dropped
  dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    // console.log('File is dropped in drag area');  file = event.dataTransfer.files[0]; // grab single file even of user selects multiple files
    // console.log(file);
    displayFile();
  });

  function displayFile() {
    let fileType = file.type;
    // console.log(fileType);
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtensions.includes(fileType)) {
      // console.log('This is an image file');
      let fileReader = new FileReader();
      fileReader.onload = () => {
        let fileURL = fileReader.result;
        // console.log(fileURL);
        let imgTag = `<img src="${fileURL}" alt="">`;
        dropArea.innerHTML = imgTag;
      };
      fileReader.readAsDataURL(file);
    } else {
      alert("This is not an Image File");
      dropArea.classList.remove("active");
    }
  }
}

/* 
  Sidebar
*/
document.addEventListener("DOMContentLoaded", function () {
  var icons = document.querySelectorAll(".icon");
  icons.forEach(function (icon) {
    icon.addEventListener("click", function () {
      var target = this.getAttribute("data-target");
      var contents = document.querySelectorAll(".content");

      contents.forEach(function (content) {
        if (content.classList.contains(target)) {
          content.classList.add("active");
          content.classList.remove("inactive");
        } else {
          content.classList.remove("active");
          content.classList.add("inactive");
        }
      });

      icons.forEach(function (icon) {
        icon.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});

/* 
  Calender
*/

document.addEventListener("DOMContentLoaded", function () {
  var patientHeaders = document.querySelectorAll(".item");
  var checkboxes = document.querySelectorAll(".checkbox");

  patientHeaders.forEach(function (item) {
    item.addEventListener("click", function () {
      item.classList.add("active");

      if (item.classList.contains("finish")) {
        checkboxes.forEach(function (checkbox) {
          checkbox.style.display = "none";
        });
      } else {
        checkboxes.forEach(function (checkbox) {
          checkbox.style.display = "block";
        });
      }

      patientHeaders.forEach(function (e) {
        if (e !== item) {
          e.classList.remove("active");
        }
      });
    });
  });
});

/*
  Settings
*/

document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelectorAll(".list__items");

  list.forEach(function (item) {
    item.addEventListener("click", function () {
      let target = this.getAttribute("data-target");
      let contents = document.querySelectorAll(".cont");

      contents.forEach(function (content) {
        if (content.classList.contains(target)) {
          content.classList.add("active");
          content.classList.remove("inactive");
        } else {
          content.classList.remove("active");
          content.classList.add("inactive");
        }
      });

      list.forEach(function (item) {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});