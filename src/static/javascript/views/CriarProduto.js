import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Cadastrar produto");
    }

    async getHtml() {
        return `
            <form action="#">
                <div id="product" class="responsive-div">
                    <div class="vertical">
                        <label class="text">Imagem do produto:</label>
                        <input name="productFile" type="File">
                        <br>

                        <label class="text">Spotlight atual do produto:</label>
                        <input name="spotlightFile" type="File">
                    </div>
                    <div style="margin: 20px 0;" class="vertical">

                        <div class="vertical">
                            <label class="text gold">Nome:</label>
                            <input style="width:300px;" class="text" type="text" title="nome" placeholder="Insira o nome aqui" required>
                        </div>
                        <div class="vertical">
                            <label class="text gold">Jogo:</label>
                            <select style="width:300px;" name="Jogo">
                                <option value = "League of Legends">League of Legends</option>    
                                <option value = "Valorant" selected>Valorant</option>
                                <option value = "Among Us">Among Us</option>
                                <option value = "Overwatch">Overwatch</option>
                            </select>
                        </div>
                        <div class="vertical">
                            <label class="text gold">Descrição:</label>
                            <textarea style="width:300px;" rows="5" cols="60" name="description" required></textarea>
                        </div>
                        <div class="vertical">
                            <label class="text gold">Estoque:</label>
                            <input style="width:300px;" class="text" type="number" min='1' step="1" title="estoque" placeholder="ex: 2" onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57" required>
                        </div>
                        <div class="vertical">
                            <label class="text gold">Preço (R$):</label>
                            <input type="number" min="0.01" step="any" title="preco" placeholder="ex: 1.99" required>
                        </div>
                    </div>

                </div>
            </form>
            
            <div class="horizontal">
                <button onclick="window.location.href = 'crudProdutos.html';" class="cancel">Cancelar</button>
                <div class="horizontal-space"></div>
                <button onclick="alert('Produto cadastrado com sucesso');" class="edit">Adicionar</button>
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