function onChangeEmail() {
  toggleButtonsDisable();
  toggleEmailErrors(); 
}

function onChangePassword() {
  toggleButtonsDisable();
  togglePasswordError();
}

function login() {
  showLoading();
  firebase.auth().signInWithEmailAndPassword(
    form.email().value, form.password().value
  ).then(response => {
    hideLoading();
    window.location.href = "home.html"
}).catch(error => {
  hideLoading();
    alert(getErrorMessage(error));   
});

}
 
function getErrorMessage(error){
  if (error.code = "auth/invalid-credential") {
    return "Usuario não encontrado";
  }
  return error.messagem;
}
 

function register () {
  window.location.href = "register.html"
}

function isEmailValid() {
  const email = form.email().value;
  if (!email) {
    return false;
  }
  return validateEmail(email);
}

function toggleEmailErrors() {
  const email = form.email().value;
  form.emailRequiredError().style.display = email ? "none" : "block";

  form.emaiInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordError() {
  const password = form.password().value;

  form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
  const emailValid = isEmailValid();
  form.recoverPassword().disabled = !emailValid;

  const passwordValid = isPasswordValid();
  form.loginButton().disabled = !emailValid || !passwordValid;

}

function isPasswordValid() {
  const password = form.password().value;
  if (!password) {
    return false;
  }
  return true;
}

const form = {
  email: () => document.getElementById('email'),
  emaiInvalidError: () => document.getElementById('email-invalid-error'),
  emailRequiredError: () => document.getElementById('email-required-error'),
  loginButton: () => document.getElementById('login-botton'),
  password: () => document.getElementById('password'),
  passwordRequiredError: () => document.getElementById('password-required-error'),
  recoverPassword: () => document.getElementById('recover-password-button'),
}

