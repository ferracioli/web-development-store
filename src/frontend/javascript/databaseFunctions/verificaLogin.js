// Link original:
// // https://daily-dev-tips.com/posts/vanilla-javascript-cookies-%F0%9F%8D%AA/
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

function login() {

    // Usuário já logado, redireciona para a área de usuário
    if(getCookie('cargo')) {
        if(getCookie('cargo') == 'admin') {
            window.location.href = "localhost/areaAdmin";
        }
        if(getCookie('cargo') == 'cliente') {
            window.location.href = "localhost/areaCliente";
        }
    }

    var resposta = {};
    // Consulta todos os usuários cadastrados para verificar o login
    axios.get('/getUser').then(resp => {
        resposta = resp.data;

        // Pega as entradas do usuário
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var flag = false;

        // Verifica se o usuário cadastrado está na base de dados    
        for(var i = 0; i < resposta.length; i++) {

            if(resposta[i]['username'] == username && resposta[i]['hash_senha'] == password) {

                // Apaga qualquer cookie que possa existir
                if(getCookie('username'))
                    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                if(getCookie('cart'))
                    document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
                if(getCookie('cargo'))
                    document.cookie = 'cargo=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';

                // Login bem sucedido, fazemos um cookie do id do usuário e do seu nome
                flag = true;
                // Os cookies duram uma hora no máximo
                var now = new Date();
                now.setTime(now.getTime() + 1 * 3600 * 1000);
                document.cookie = "username="+resposta[i]['username']+"; expires=" + now.toUTCString() + "; path=/";
                document.cookie = "cargo="+resposta[i]['cargo']+"; expires=" + now.toUTCString() + "; path=/";
                // O carrinho é configurado como cookie dentro de uma string JSON
                var cart = [];
                var cart_json = JSON.stringify(cart);
                document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";


                if(resposta[i]['cargo'] == "Admin")
                    window.location.href = "/areaAdmin";
                else
                    window.location.href = "/areaCliente"; 
            }
        }
        if(!flag)
            alert("Não foi possível fazer login, tente novamente!");
    });
}

document.getElementById("loginButton").addEventListener("click", login);