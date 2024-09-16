function validateFields() {
  const emailValid = isEmailValid();
 document.getElementById("recover-password-button").disabled = !emailValid;

 const passwordValid = isPasswordValid();
 document.getElementById('login-botton').disabled = !emailValid || !passwordValid;

  function isEmailValid() {
    const email = document.getElementById("email").value;
    if (!email) {
      return false;
    }
    return validateEmail(email);
  }

  function isPasswordValid() {
    const password = document.getElementById("password").value;
    if (!password) {
      return false;
    }
    return true;
  }
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // pegar o valor do campo de email
  // verifica se  o email não é vazío e se é valido
  // se verdadeiro, então habilitar o botão de recuperar senha
  // se falto, então dessabilitar o botão de recuperar senha
}
