// frontend/frontend/js/views/Dashboard.js
import Views from "./Views.js";

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
export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Área de Cliente");
    }

    async getHtml() {
        if(getCookie('username') == null || getCookie('cargo') == "Admin")
            window.location.href = "/";
        return `
            <!-- Painel de controle do cliente -->
            <div class="vertical">
                <div class="padding">
                    <script type="module" src="../javascript/Temp/areaUsuario.js"></script>
                    <h1 id="greetings">Olá, `+getCookie('username')+`</h1>
                    <a class="simple-button" id="logout">Sair</a>
                    <script type="module" src="../javascript/Temp/logout.js"></script>
                </div>
                <div id="actions" class="responsive-div">
                    <a href="/buscaProduto">
                        <div class="card">
                            <img class="icon" src="frontend/img/lupa.png">
                            <text>Buscar skin</text>
                        </div>
                    </a>
                    <a href="/carrinho">
                        <div class="card">
                            <img class="icon" src="frontend/img/carrinho.png">
                            <text>Meu carrinho</text>
                        </div>
                    </a>
                    <a href="/editarPerfil">
                        <div class="card">
                            <img class="icon black" src="frontend/img/perfil.png">
                            <text>Editar perfil</text>
                        </div>
                    </a>
                </div>
            </div>

            <!-- Listagem de produtos mais vendidos -->
            <div id="sale" class="vertical center">

                <h2>Skins mais vendidas</h2>
                
                <div id="products" class="responsive-div">
                    <!-- Chama a função que usa a base de dados local (JSON) -->
                    <script type="module" src="../javascript/Temp/mostSold.js"></script>  
                    
                </div>
            </div>  
        `;
    }

    async executeViewScript() {
        // Inclui scripts e css exclusivos dessa tela
        var css1 = document.createElement('link');
        css1.type = "text/css";
        css1.rel='stylesheet';
        css1.href= "/frontend/css/global.css";
        document.getElementsByTagName('head')[0].appendChild(css1);

        var css2 = document.createElement('link');
        css2.type = "text/css";
        css2.rel='stylesheet';
        css2.href= "/frontend/css/customer.css";
        document.getElementsByTagName('head')[0].appendChild(css2);

        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/databaseFunctions/logout.js";
        document.body.appendChild(script);
    }
}