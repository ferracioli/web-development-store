function logout() {
    // Destrói todos os cookies e volta para a página inicial
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'cargo=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    window.location.href = "/";
}
document.getElementById("logout").addEventListener("click", logout);