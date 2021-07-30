import Views from "./Views.js";
import getCookie from "./GetCookie.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Gerenciar Usuários");
    }

    async getHtml() {
        if(getCookie('username') == null || getCookie('cargo')=="Cliente")
            window.location.href = "/";

        return `
                <!-- Ferramenta de busca por nome -->
                <div class="search-container horizontal">
                    <div class="horizontal-space"></div>
                    <!--<form action=#>-->
                        <div class="horizontal">
                            <input id="search_bar" type="text" placeholder="Digite o nome do usuário" name="search">
                            <button type="submit" onclick="
                                var temp = window.location.href;
                                temp = temp.split('?', 1)[0];
                                window.location.href = temp + '?name=' + document.getElementById('search_bar').value;
                            ">
                                <i class="search-button"><img src="frontend/img/lupa.png"></i> 
                            </button>  
                        </div>
                    <!--</form>-->
                </div>

                <div class="responsive-search">

                    <!-- Ferramenta de filtro -->
                    <!--<form action=#>-->
                        <div class="vertical">
                            <text class="white text">Filtros</text>
                            <div class="vertical-space"></div>

                            <label for="ordem" class="white text">Ordenar por:</label>
                            <select name="ordem" id="ordem">
                                <option value="old">Mais antigos</option>
                                <option value="new">Mais recentes</option>
                            </select>

                            <label for="cargo" class="white text">Cargo:</label>
                            <select name="cargo" id="cargo">
                                <option value="all">Todos</option>
                                <option value="Cliente">Cliente</option>
                                <option value="Admin">Administrador</option>
                            </select>

                            <button onclick="
                                var temp = window.location.href;

                                if(temp.includes('datetime')) {
                                    // Se já usou esse filtro antes: apaga o antigo
                                    temp = temp.split('?', 1)[0];
                                    temp += '?';
                                }
                                else {
                                    // Se só tem o filtro de nome
                                    if(temp.includes('?'))
                                        temp += '&';

                                    // Não tem nenhum filtro ainda
                                    else
                                        temp += '?';
                                }

                                temp += 'datetime=' + document.getElementById('ordem').value;
                                temp += '&cargo=' + document.getElementById('cargo').value;
                                window.location.href = temp;
                            ">Filtrar</button>
                        </div>
                    <!--</form>-->

                    <div class="space"></div>

                    <!-- Listagem dos usuários com o painel de opções -->
                    <div class="vertical" id="items"> 

                        <!-- Chama a função que usa a base de dados local (JSON) -->
                        <script type="module" src="../javascript/Temp/usersCRUD.js"></script>    
                        
                    </div>
                </div>
        `;
    }

    async executeViewScript() {
        // Inclui scripts e css exclusivos dessa tela
        var css1 = document.createElement('link');
        css1.type = "text/css";
        css1.rel='stylesheet';
        css1.href= "/frontend/css/form.css";
        document.getElementsByTagName('head')[0].appendChild(css1);


        var css2 = document.createElement('link');
        css2.type = "text/css";
        css2.rel='stylesheet';
        css2.href= "/frontend/css/search.css";
        document.getElementsByTagName('head')[0].appendChild(css2);
    }
}