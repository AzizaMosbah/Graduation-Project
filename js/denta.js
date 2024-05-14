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
      window.location.href = "services.html";
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

// Drag & Drop Image
const dropArea = document.querySelector(".drag-area");
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

/* 
  Sidebar
*/
document.addEventListener('DOMContentLoaded', function() {
  var icons = document.querySelectorAll('.icon');
  icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
      var target = this.getAttribute('data-target');
      var contents = document.querySelectorAll('.content');
      
      contents.forEach(function(content) {
        if (content.classList.contains(target)) {
          content.classList.add('active');
          content.classList.remove('inactive');
        } else {
          content.classList.remove('active');
          content.classList.add('inactive');
        }
      });

      icons.forEach(function(icon) {
        icon.classList.remove('active');
      });

      this.classList.add('active');
    });
  });
});

/* 
  Calender
*/

document.addEventListener('DOMContentLoaded', function() {
  var patientHeaders = document.querySelectorAll('.item');
  var checkboxes = document.querySelectorAll('.checkbox');

  patientHeaders.forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.add('active');

      if (item.classList.contains('finish')) {
        checkboxes.forEach(function(checkbox) {
          checkbox.style.display = 'none';
        });
      } else {
        checkboxes.forEach(function(checkbox) {
          checkbox.style.display = 'block';
        });
      }

      patientHeaders.forEach(function(e) {
        if (e !== item) {
          e.classList.remove('active');
        }
      });
    });
  });
});

/*
  Settings
*/

document.addEventListener('DOMContentLoaded', function() {
  const list = document.querySelectorAll('.list__items');

  list.forEach(function(item) {
    item.addEventListener('click', function() {
      let target = this.getAttribute('data-target');
      let contents = document.querySelectorAll('.cont');
      
      contents.forEach(function(content) {
        if (content.classList.contains(target)) {
          content.classList.add('active');
          content.classList.remove('inactive');
        } else {
          content.classList.remove('active');
          content.classList.add('inactive');
        }
      });

      list.forEach(function(item) {
        item.classList.remove('active');
      });

      this.classList.add('active');
    });
  });
});