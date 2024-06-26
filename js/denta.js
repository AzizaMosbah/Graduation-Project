/*---------------------------- Navbar Toggle ----------------------------*/

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

/*---------------------------- Go To Sign In Page ----------------------------*/

var signInButton = document.getElementById("signIn");
if (signInButton) {
  signInButton.addEventListener("click", function () {
    window.location.href = "signin.html";
  });
}

/*---------------------------- Go To Sign Up Page ----------------------------*/

var signUpButton = document.getElementById("signUp");
if (signUpButton) {
  signUpButton.addEventListener("click", function () {
    window.location.href = "signup.html";
  });
}

/*---------------------------- Show & Hide Password ----------------------------*/

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("toggle")) {
    var passwordFields = document.querySelectorAll(".password");
    var confirmPasswordField = document.querySelectorAll(".ConfirmPassword");
    passwordFields.forEach(function (field) {
      var state = field.getAttribute("type");
      if (state === "password") {
        field.setAttribute("type", "text");
        event.target.style.color = "#265073";
      } else {
        field.setAttribute("type", "password");
        event.target.style.color = "#7a797e";
      }
    });
  }
});

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("confirmToggle")) {
    var confirmPasswordField = document.querySelectorAll(".ConfirmPassword");

    confirmPasswordField.forEach(function (field) {
      var state = field.getAttribute("type");
      if (state === "password") {
        field.setAttribute("type", "text");
        event.target.style.color = "#265073";
      } else {
        field.setAttribute("type", "password");
        event.target.style.color = "#7a797e";
      }
    });
  }
});

/*---------------------------- Login Page ----------------------------*/

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
      window.location.href = "index.html";
      return false;
    }
    return false;
  }

  SignInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateEmailAndPassword();
  });
}

/*---------------------------- Sign Up Page ----------------------------*/
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
  signUpFirst.addEventListener("input", function () {
    if (
      signUpFirstError.style.display === "block" &&
      signUpFirst.value.trim() !== ""
    ) {
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
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordRegex.test(signUpPassword.value)) {
      signUpPasswordError.textContent =
        "Password must be at least 5 characters long and contain a number";
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
  signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var validFirstName = validateFirstName();
    var validLastName = validateLastName();
    var validEmail = validateSignUpEmail();
    var validPhone = validateSignUpPhone();
    var validPassword = validatePassword();
    var validConfirmPassword = validateConfirmPassword();

    if (
      validFirstName &&
      validLastName &&
      validEmail &&
      validPhone &&
      validPassword &&
      validConfirmPassword
    ) {
      window.location.href = "continue.html";
    }
  });
}
/*---------------------------- Continue Sign Up Page ----------------------------*/

function updateFileName(input, labelId) {
  var label = document.getElementById(labelId);
  var files = input.files;
  if (files && files.length > 0) {
    label.innerHTML = files[0].name;
  } else {
    label.innerHTML = "Choose a file&hellip;";
  }
}

var continueBtn = document.getElementById("continue");

if (continueBtn) {
  continueBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "registrationSuccess.html";
  });
}

/*---------------------------- Forget Password Page ----------------------------*/

var forgetpasswordForm = document.getElementById("forgetpasswordForm");
var emailPhoneInput = document.getElementById("forgetPassword");

if (forgetpasswordForm && emailPhoneInput) {
  function validateForgetForm() {
    const emailPhoneValue = emailPhoneInput.value;
    const forgetError = document.getElementById("forgetEmailPhoneError");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^01[0-2,5]{1}[0-9]{8}$/;

    forgetError.textContent = "";

    if (emailPattern.test(emailPhoneValue)) {
      return true;
    } else if (phonePattern.test(emailPhoneValue)) {
      return true;
    } else if (isNaN(emailPhoneValue)) {
      forgetError.textContent = "Please enter a valid email";
      forgetError.style.display = "block";
      return false;
    } else {
      forgetError.textContent = "Please enter a valid phone number";
      forgetError.style.display = "block";
      return false;
    }
  }

  emailPhoneInput.addEventListener("blur", validateForgetForm);

  forgetpasswordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForgetForm()) {
      window.location.href = "otp.html";
    }
  });
}

/*---------------------------- Otp Page ----------------------------*/

var otpForm = document.getElementById("otpForm");

if (otpForm) {
  const otpInputs = document.querySelectorAll(".otpInputs");
  const submitButton = document.querySelector(
    '.signInSubmit input[type="submit"]'
  );

  window.addEventListener("load", () => {
    otpInputs.forEach((input) => {
      input.value = "";
      input.disabled = true;
    });
    otpInputs[0].disabled = false;
    submitButton.classList.add("disabled");
  });

  otpInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      if (input.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].disabled = false;
        otpInputs[index + 1].focus();
      }
      checkAllInputs();
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (input.value.length === 0 && index > 0) {
          otpInputs[index - 1].value = "";
          otpInputs[index - 1].focus();
          otpInputs[index].disabled = true;
        } else {
          input.value = "";
        }
      }
    });

    input.addEventListener("focus", () => {
      if (index > 0 && otpInputs[index - 1].value.length === 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  function checkAllInputs() {
    const allFilled = [...otpInputs].every((input) => input.value.length === 1);
    if (allFilled) {
      submitButton.classList.remove("disabled");
    } else {
      submitButton.classList.add("disabled");
    }
    return allFilled;
  }

  otpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!submitButton.classList.contains("disabled") && checkAllInputs()) {
      window.location.href = "changePass.html";
    }
  });
}

/*---------------------------- Change Password Page ----------------------------*/

var changePasswordForm = document.getElementById("changePasswordForm");
var changePasswordInput = document.getElementById("changePassword");
var changePasswordError = document.getElementById("changePasswordError");
var changePasswordConfirmInput = document.getElementById(
  "changePasswordConfirm"
);
var changePasswordConfirmError = document.getElementById(
  "changePasswordConfirmError"
);

if (changePasswordInput) {
  function validatePassword() {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    if (!passwordRegex.test(changePasswordInput.value)) {
      changePasswordError.textContent =
        "Password must be at least 5 characters long and contain a number";
      changePasswordError.style.display = "block";
      return false;
    } else {
      changePasswordError.textContent = "";
      changePasswordError.style.display = "none";
      return true;
    }
  }
  changePasswordInput.addEventListener("blur", validatePassword);
}

if (changePasswordConfirmInput) {
  function validateConfirmPassword() {
    if (changePasswordConfirmInput.value !== changePasswordInput.value) {
      changePasswordConfirmError.textContent = "Passwords do not match";
      changePasswordConfirmError.style.display = "block";
      return false;
    } else {
      changePasswordConfirmError.textContent = "";
      changePasswordConfirmError.style.display = "none";
      return true;
    }
  }
  changePasswordConfirmInput.addEventListener("blur", validateConfirmPassword);
}

if (changePasswordForm) {
  changePasswordForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var validChangePassword = validatePassword();
    var validChangeConfirmPassword = validateConfirmPassword();

    if (validChangePassword && validChangeConfirmPassword) {
      window.location.href = "changeSuccess.html";
    }
  });
}

/*---------------------------- Success Page ----------------------------*/
var loginButton = document.getElementById("loginButton");

if (loginButton) {
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "index.html";
  });
}

/*---------------------------- Drag & Drop Image ----------------------------*/

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

/*---------------------------- Sidebar ----------------------------*/

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

/*---------------------------- Calender ----------------------------*/

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

/*---------------------------- Settings ----------------------------*/

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



/*---------------------------- Scan Button  ---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  var nextScanBtn = document.getElementById("nextScan");
  var scanXray = document.querySelector(".scan_xray");
  var nextXray = document.querySelector(".next__xray");
  var backBtn = document.getElementById("backBtn");

  if (nextScanBtn) {
    nextScanBtn.addEventListener('click', function () {
      scanXray.classList.add("hide");
      nextXray.classList.remove("hide");
    });
  }
  
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      scanXray.classList.remove("hide");
      nextXray.classList.add("hide");
    });
  }
  
});


/*---------------------------- Change Password & Contact Information  ---------------------------*/
document.addEventListener('DOMContentLoaded', function() {
  const changeContact = document.querySelector('.change__contact');
  const changePassDiv = document.querySelector('.changePass');
  const contactInformationDiv = document.querySelector('.contactInformation');
  const goToChangePass = document.querySelector('.goToChangePass');
  const goToContactInformation = document.querySelector('.goToContactInformation');
  const backIcons = document.querySelectorAll('.backIcon');

  if (changePassDiv) {
    changePassDiv.classList.add('hidden');
  contactInformationDiv.classList.add('hidden');

  goToChangePass.addEventListener('click', function() {
    changePassDiv.classList.remove('hidden');
    changeContact.classList.add('hidden');
  });
  }
  
  if (goToContactInformation) {
    goToContactInformation.addEventListener('click', function() {
      contactInformationDiv.classList.remove('hidden');
      changeContact.classList.add('hidden');
    });
  }
  
  if (backIcons) {
    backIcons.forEach(function(backIcon) {
      backIcon.addEventListener('click', function() {
        changePassDiv.classList.add('hidden');
        contactInformationDiv.classList.add('hidden');
        changeContact.classList.remove('hidden');
      });
    });
  }
  
});


const optionElements = document.querySelectorAll('.options');

optionElements.forEach(function(option) {
  option.addEventListener('click', function(event) {
    event.stopPropagation();

    const dropdown = option.closest('.contactOne').querySelector('.dropDown');

    dropdown.classList.toggle('show');
  });
});

document.addEventListener('click', function() {
  document.querySelectorAll('.dropDown').forEach(function(dropdown) {
    dropdown.classList.remove('show');
  });
});


var newEmailAndNumber = document.querySelector('.newEmailAndNumber');
var contactFour = document.querySelector('.contactFour');

if (contactFour) {
  contactFour.addEventListener('click', function() {
    newEmailAndNumber.classList.toggle('hidden');
});

}


var logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
  logoutButton.addEventListener('click', function() {
    window.location.href = 'signin.html';
  });
}
