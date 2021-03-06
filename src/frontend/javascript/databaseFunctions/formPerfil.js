function getCookie(name) {
    name = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
        }
    }
}

function buildList(user) {
    document.getElementById("registrer-form").innerHTML =
    "<div class='vertical center'>"+

    "<div class='responsive-form'>"+
        "<div class='vertical'>"+
            "<label class='text'>Nome e Sobrenome</label>"+
            "<input id='nome' name='Name' class='text' type='text' title='Name'  value = '"+user.nome+"'>"+
        "</div>"+
        
        "<div class='horizontal-space'></div>"+
        
        "<div class='vertical'>"+
            "<label class='text'>Nome de Usuário</label>"+
            "<input style='color:black;background-color:white' disabled='disabled' name='username' class='text' type='text' title='Username'  value = '"+user.username+"'>"+
        "</div>"+
    "</div>"+

    "<div class='responsive-form'>"+
        "<div class='vertical'>"+
            "<label class='text'>Email</label>"+
            "<input id='email' name='email' class='text' type='text' title='email'  value = '"+user.email+"'>"+
        "</div>"+
        
        "<div class='horizontal-space'></div>"+
        
        "<div class='vertical'>"+
            "<label class='text'>Telefone</label>"+
            "<input id='telefone' name='phone' class='text' type='text' title='phone' value = '"+user.telefone+"'>"+
        "</div>"+
    "</div>";

    if(user.cargo == "Cliente") {
    
        document.getElementById("registrer-form").innerHTML +=
        "<div class='vertical'>"+
            "<label class='text'>Logradouro</label>"+
            "<input id='logradouro' class='text' type='text' name='adress' value = '"+user.logradouro+"'>"+
        "</div>"+

        "<div class='responsive-form'>"+
            "<div class='vertical'>"+
                "<label class='text'>Número</label>"+
                "<input id='numero' class='text' type='text' name='number'  value = '"+user.numero+"'>"+
            "</div>"+
            
            "<div class='horizontal-space'></div>"+
            
            "<div class='vertical'>"+
                "<label class='text'>Complemento</label>"+
                "<input id='complemento' class='text' type='text' name='complement' value = '"+user.complemento+"'>"+
            "</div>"+
        "</div>";
    }

    document.getElementById("registrer-form").innerHTML +=
    "<div class='responsive-form'>"+
        "<div class='vertical'>"+
            "<label class='text'>Senha</label>"+
            "<input id='password1' name='password' class='text' type='password' title='password' value='"+user.hash_senha+"'>"+
        "</div>"+

        "<div class='horizontal-space'></div>"+
        
        "<div class='vertical'>"+
            "<label class='text'>Confirmar senha</label>"+
            "<input id='password2' name='password2' class='text' type='password' title='password2' value='"+user.hash_senha+"'>"+
        "</div><br>"+
    "</div>";
}

var username = getCookie('username');

axios.get('/getUser').then(resp => {
    resposta = resp.data;
    for(var i=0; i < resposta.length; i++) {
        if(resposta[i]['username'] == username) {
            buildList(resposta[i]);
            break;
        }
    }
});
console.log("Adicionou onclick no botão");