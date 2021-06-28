// Função temporária que mimetiza o login do usuário 
function direcionaUsuario() {
    var username = document.getElementById("username").value;;
    var password = document.getElementById("password").value;;
    // ATENÇÃO: essa prática não é segura, e está sendo usada apenas enquanto não temos uma base de dados
    
    if(username=="admin" && password=="admin")
        // Se é um adm, vai para a página de gerenciamento
        window.location.href = "../html/areaAdmin.html";
    else
        // Se é um usuário comum, vai para a área de cliente
        window.location.href = "../html/areaCliente.html";
    return;
}