//user page
const showHiddenPwd = (loginPwd, loginEye) => {
  const pwdInput = document.getElementById(login - pwd),
    iconEye = document.getElementById(login - eye);

  iconEye.addEventListener("click", () => {
    if (pwdInput.type === "password") {
      pwdInput.type = "text";
    }
  });
};
showHiddenPwd = ("login-pwd", "login-eye");
