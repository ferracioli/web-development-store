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

async function processaPerfil() {
    console.log("Entrou no processaPerfil");

    var username = getCookie('username');
    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("telefone").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var addres = "";
    var number = "";
    var complement = "";

    if(getCookie('cargo') == 'Cliente') {
        addres = document.getElementById("logradouro").value;
        number = document.getElementById("numbero").value;
        complement = document.getElementById("complemento").value;
    }
    // Validações da entrada
    if(password1 != password2) {
        alert("Senhas diferentes, tente novamente!");
        flag_erro = true;
        return;
    }
    if(name == "" || email == "" || phone == "" || password1 == "") {
        alert("Algum campo está nulo, tente novamente!");
        flag_erro = true;
        return;
    }

    var flag_erro = false;

    if(!flag_erro) {
        if(getCookie('cargo') == 'Admin') {
            await axios.put('/putUser', { 
                username: username,
                nome: name,
                email: email,
                telefone: phone,
                hash_senha: password1,
            });
        }
        else {
            await axios.put('/putUser', { 
                username: username,
                nome: name,
                email: email,
                telefone: phone,
                hash_senha: password1,
                logradouro: addres,
                numero: number,
                complemento: complement,
                });
        }
    
        // Cria os cookies, que duram uma hora no máximo
        var data_atual = new Date();
        data_atual.setTime(data_atual.getTime() + 1 * 3600 * 1000);
        document.cookie = "username="+username+"; expires=" + data_atual.toUTCString() + "; path=/";
        document.cookie = "cargo="+cargo+"; expires=" + data_atual.toUTCString() + "; path=/";
        // O carrinho é configurado como cookie dentro de uma string JSON
        var cart = [];
        var cart_json = JSON.stringify(cart);
        document.cookie = "cart="+cart_json+"; expires=" + data_atual.toUTCString() + "; path=/";

        alert("Perfil atualizado com sucesso");
        if(getCookie('cargo') == 'Cliente')
            window.location.href = "\areaCliente";
        else
        window.location.href = "\areaAdmin";
    }
}
document.getElementById("botao-editar").addEventListener("click", processaPerfil);