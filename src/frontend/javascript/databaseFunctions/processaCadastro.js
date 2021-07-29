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

async function cadastro() {
    // Pega os campos do usuario
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var addres = document.getElementById("addres").value;
    var number = document.getElementById("number").value;
    var complement = document.getElementById("complement").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    // Validações da entrada
    if(password1 != password2) {
        alert("Senhas diferentes, tente novamente!");
        flag_erro = true;
        return;
    }
    if(name == "" || email == "" || phone == "" || addres == "" || number == "" || password1 == "") {
        alert("Algum campo está nulo, tente novamente!");
        flag_erro = true;
        return;
    }

    var flag_erro = false;
    // Consulta todos os usuários cadastrados para verificar o login
    await axios.get('/getUser').then(resp => {
        var resposta = resp.data;
        console.log(resposta);
        // Verifica se o usuário cadastrado está na base de dados    
        for(var i = 0; i < resposta.length; i++) {
            // Nome de usuário já existe
            if(username == resposta[i]['username']) {
                alert("Username já existe, tente novamente com outro nome!");
                flag_erro = true;
                return;
            }
        }
    });
    if(!flag_erro) {
        // O username não existe, basta cadastrar
        if(!flag_erro) {

            var cargo = 'Cliente';
            var data_cadastro = new Date();
            console.log("Vai fazer o post");
            axios({
                method: 'post',
                url: '/postUser',
                data: {
                    username: username,
                    nome: name,
                    email: email,
                    telefone: phone,
                    hash_senha: password1,
                    logradouro: addres,
                    numero: number,
                    complemento: complement,
                    cargo: cargo,
                    data_cadastro: data_cadastro
                }
            }).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
        
            // Cria os cookies, que duram uma hora no máximo
            var data_cadastro = new Date();
            data_cadastro.setTime(data_cadastro.getTime() + 1 * 3600 * 1000);
            document.cookie = "username="+username+"; expires=" + data_cadastro.toUTCString() + "; path=/";
            document.cookie = "cargo="+cargo+"; expires=" + data_cadastro.toUTCString() + "; path=/";
            // O carrinho é configurado como cookie dentro de uma string JSON
            var cart = [];
            var cart_json = JSON.stringify(cart);
            document.cookie = "cart="+cart_json+"; expires=" + data_cadastro.toUTCString() + "; path=/";

            alert("Parabéns, cadastro concluído com sucesso");
            window.location.href = "\areaCliente";
        }
    }

}

document.getElementById("botao-cadastro").addEventListener("click", cadastro);