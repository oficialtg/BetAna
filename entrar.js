function logar(){
    var login = document.getElementById('username').value;
    var senha = document.getElementById('password').value;

    if(login == "admin" && senha == "1234567" ){
        alert('Sucesso');
        location.href = "inicio.html";
    }else{
        alert('Usuário ou senha incorretos');
        
    }
}