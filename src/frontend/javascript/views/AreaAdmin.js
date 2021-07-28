// frontend/frontend/js/views/Dashboard.js
import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Área de Administrador");
    }

    async getHtml() {
        return `
            <!-- Painel de controle do administrador -->
            <div class="vertical">
                <div class="padding">
                    <script type="module" src="../javascript/Temp/areaUsuario.js"></script>
                    <h1 id="greetings"></h1>
                    <a class="simple-button" id="logout">Sair</a>
                    <script type="module" src="../javascript/Temp/logout.js"></script>
                </div>
                <div id="actions" class="responsive-div">
                    <a href="/crudProdutos">
                        <div class="card">
                            <img class="icon" src="frontend/img/caixa.png">
                            <text>Gerenciar Produtos</text>
                        </div>
                    </a>
                    <a href="/crudUsuarios">
                        <div class="card">
                            <img class="icon" src="frontend/img/usuarios.png">
                            <text>Gerenciar usuarios</text>
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
        var css = document.createElement('link');
        css.type = "text/css";
        css.rel='stylesheet';
        css.href= "/frontend/css/customer.css";
        document.getElementsByTagName('head')[0].appendChild(css);
    }
}