//

function acao1(){
    let inputEmail = document.getElementById("email").value;

    if(inputEmail === ""){
        document.getElementById("main-login--login-error").innerText = "Login errado ou não foi preenchido";
    } else {
        document.getElementById("main-login--login-error").innerText = "";
    }
}

function acao2(){
    let inputSenha = document.getElementById("password").value;

    if(inputSenha === ""){
        document.getElementById("main-login--senha-error").innerText = "Senha errada ou não foi preenchida";
    } else {
        document.getElementById("main-login--senha-error").innerText = "";
    }
}

function onclickEntrar(){
    acao1();
    acao2();
}