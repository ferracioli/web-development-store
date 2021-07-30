import Views from "./Views.js";
import getCookie from "./GetCookie.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Carrinho");
    }

    async getHtml() {
        if(getCookie('username') == null || getCookie('cargo')=="Admin")
            window.location.href = "/";

        return `
        <div id = "items">
                <div class="products horizontal"> 
                    <img id="icon" src="frontend/img/carrinho.png">
                    <div class="horizontal-space"></div>
                    <h1 class="black">Meu carrinho</h1>
                </div>

                <!-- Lista todos os produtos que estão no carrinho -->
                <div class="cart-wrap" id="items-list">

                    <!-- Chama a função que usa a base de dados local (JSON) -->
                    <script src="https://code.jquery.com/jquery-1.9.1.js"></script>
                    <script type="module" src="../javascript/Temp/carrinho.js"></script> 
                    
                </div>
                
                <!-- Formulário com os dados do cartão de crédito (não salva os dados por segurança) -->
                <div id="payment">
                    <div class="vertical center">
                        <h2>Informações do pagamento</h2>
                        <text class="text" id="price"></text><br>
                        <label class="text gold">Código do cartão de crédito:</label>
                        <input id="carrinhoCodigo" style="width:300px;" class="text" type="text" placeholder="XXXX XXXX XXXX XXXX" required>

                        <label class="text gold">Validade do cartão de crédito:</label>
                        <input id="carrinhoValidade" style="width:300px;" class="text" type="text" placeholder="MM/AA" required>

                        <label class="text gold">Código de segurança:</label>
                        <input id="carrinhoSeguranca" style="width:300px;" class="text" type="text" placeholder="abc" required>
                    </div>
                    <!-- Botão para finalizar a compra -->
                    <div id="finalizar">
                        <button>Finalizar compra</button>
                    </div>
                </div>

            </div>

            <a href="buscaProduto.html" class=simple-button>Continuar comprando</a>
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
        css2.href= "/frontend/css/carrinho.css";
        document.getElementsByTagName('head')[0].appendChild(css2);

        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/Temp/carrinho.js";
        document.body.appendChild(script);
    }
}