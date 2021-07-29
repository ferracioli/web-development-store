import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Editar perfil");
    }

    async getHtml() {
        return `
            <!-- Conteúdo da página -->
			<div id="page-body" class="vertical center">
				<h1>Altere seus dados de cadastro!</h1>
                <form id="registrer-form" action="#" method="POST">
                    
                    <!-- Chama a função que usa a base de dados local (JSON) -->
                    <script type="module" src="../javascript/Temp/editarPerfil.js"></script>

                </form>
                <button id="botao-editar">Editar</button>
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

        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/databaseFunctions/formPerfil.js";
        document.body.appendChild(script);

        var script2 = document.createElement('script');
        script2.type='text/javascript';
        script2.src= "/frontend/javascript/databaseFunctions/processaPerfil.js";
        document.body.appendChild(script2);
    }
}