let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML="Nome inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML='Nome Válido'
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1|| email.value.indexOf('.') == -1){
        txtEmail.innerHTML="E-mail inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML='E-mail Válido'
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML="Assunto inválido"
        txtAssunto.style.color = "red"
    }else{
        txtAssunto.innerHTML='Assunto Válido'
        txtAssunto.style.color = "green"
        assuntoOk = true
        /*txtAssunto.style.display = 'none'*/
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }

