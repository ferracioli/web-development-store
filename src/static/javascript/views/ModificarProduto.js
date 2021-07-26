import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Modificar produto");
    }

    async getHtml() {
        return `
            <!-- Formulário com as informações atuais do produto para modificações -->
            <!--<form action="#">-->

                <div id="product" class="responsive-div">
                    <!-- Chama a função que usa a base de dados local (JSON) -->
                    <script type="module" src="../javascript/Temp/modificarProduto.js"></script> 
                </div>

            <!--</form>-->
            
            <div class="horizontal">
                <button onclick="window.location.href = 'crudProdutos.html';" class="cancel" >Cancelar</button>
                <div class="horizontal-space"></div>
                <button onclick="alert('Produto atualizado com sucesso');" class="edit" >Atualizar</button>
            </div>
        `;
    }

    async executeViewScript() {
        // Inclui scripts e css exclusivos dessa tela
        var css1 = document.createElement('link');
        css1.type = "text/css";
        css1.rel='stylesheet';
        css1.href= "/static/css/form.css";
        document.getElementsByTagName('head')[0].appendChild(css1);


        var css2 = document.createElement('link');
        css2.type = "text/css";
        css2.rel='stylesheet';
        css2.href= "/static/css/product.css";
        document.getElementsByTagName('head')[0].appendChild(css2);
    }
}