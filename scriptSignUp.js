let password = document.getElementById("userPassword"),
    passwordConfirm = document.getElementById("confirmPassword"),
    submit = document.querySelector(".createAcc"),
    errorMsg = document.querySelector(".passwordError"),
    form = document.getElementById("formSignUp");

   
errorMsg.style.display = "none"


submit.addEventListener("click", ()=> {
    if (password.value != passwordConfirm.value)
    {
        errorMsg.style.display = "block"
        password.style.border = "red solid 1px"
        passwordConfirm.style.border = "red solid 1px"
        
        
    } else {
        errorMsg.style.display = "none"
        password.style.border = "rgb(207, 204, 202) solid 1px";
        passwordConfirm.style.border = "rgb(207, 204, 202) solid 1px";
    }
}
);

