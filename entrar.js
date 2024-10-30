function logar(){
    var login = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    if(login == "tripinho" && senha == "1234567" ){
        alert('Sucesso');
        location.href = "inicio.html";
    }else{
        alert('Usuário ou senha incorretos');
        
    }
}