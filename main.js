let email = document.querySelector("form input[type='email']");
let userName = document.querySelector("form input[type='text']");
let phone = document.querySelector("form .phone");
let password = document.querySelector("form input[type='password']");
let submit = document.querySelector("form input[type='submit']");
let reset = document.querySelector("form input[type='reset']");

submit.addEventListener("click", (e) => {
  if (
    checkUsername(userName.value) &&
    ValidateEmail(email.value) &&
    validatePassword(password.value) &&
    validatePhoneNumber(phone.value)
  ) {
    return true;
  } else {
    e.preventDefault();
  }
});

reset.addEventListener("click", (e) => {
  check(false, userName);
  check(false, email);
  check(false, phone);
  check(false, password);
});

userName.addEventListener("input", () => {
  check(checkUsername(userName.value), userName);
});

email.addEventListener("input", () => {
  check(ValidateEmail(email.value), email);
});

phone.addEventListener("input", () => {
  check(validatePhoneNumber(phone.value), phone);
});

password.addEventListener("input", () => {
  check(validatePassword(password.value), password);
});

function checkUsername(userName) {
  let regexPattern = /^[a-zA-Z0-9]+$/;

  return userName.match(regexPattern);
}

function ValidateEmail(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex);
}

function validatePhoneNumber(phone) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phone);
}

function validatePassword(password) {
  return password.length >= 8;
}

function check(isTrue, ele) {
  if (isTrue) {
    ele.nextElementSibling.classList.remove("fa-circle-exclamation");
    ele.nextElementSibling.classList.add("fa-circle-check");
    ele.style.borderColor = "#2196f3";
    ele.style.boxShadow = "0 0 5px #2196f3";
  } else {
    ele.nextElementSibling.classList.remove("fa-circle-check");
    ele.nextElementSibling.classList.add("fa-circle-exclamation");
    ele.style.borderColor = "#f44336";
    ele.style.boxShadow = "0 0 5px #f44336";
  }
}
