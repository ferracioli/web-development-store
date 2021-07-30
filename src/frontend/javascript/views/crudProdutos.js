import Views from "./Views.js";
import getCookie from "./GetCookie.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Gerenciar produtos");
    }

    async getHtml() {
        if(getCookie('username') == null || getCookie('cargo')=="Cliente")
            window.location.href = "/";

        return `
            <!-- Ferramenta de busca e de inserção de produto -->
            <div class="search-container horizontal">
                <!--<form action=#>-->
                    <div class="horizontal">
                        <a onclick="window.location.href = '/criarProduto';" class="spot_edit" >
                            <div class="search-button horizontal center">
                                <img src="frontend/img/plus.png"> 
                            </div>
                        </a>
                        <input id="search_bar" type="text" placeholder="Digite o nome do produto" name="search">
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

                        <label for="jogo" class="white text">Jogo:</label>
                        <select name="jogo" id="jogo">
                            <option value="all">Todos</option>
                            <option value="Among us">Among us</option>
                            <option value="Overwatch">Overwatch</option>
                            <option value="League of Legends">LoL</option>
                            <option value="Valorant">Valorant</option>
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
                            temp += '&game=' + document.getElementById('jogo').value;
                            window.location.href = temp;
                        ">Filtrar</button>
                    </div>
                <!--</form>-->

                <div class="space"></div>

                <!-- Listagem dos produtos voltada para a manutenção da loja -->
                <div class="vertical" id="items"> 

                    <!-- Chama a função que usa a base de dados local (JSON) -->
                    <script type="module" src="../javascript/Temp/productsCRUD.js"></script>    

                </div>
            </div>
            <div class="vertical-space"></div>
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

        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/Temp/productsCRUD.js";
        document.body.appendChild(script);
    }
}