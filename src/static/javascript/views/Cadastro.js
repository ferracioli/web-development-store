import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Cadastro");
    }

    async getHtml() {
        return `
        <h1>Faça seu cadastro!</h1>
        <!-- Formulário com todas as informações essenciais dos clientes -->
        <form id="registrer-form" action="#" method="POST">
            <div class="vertical center">

                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Nome e Sobrenome</label>
                        <input name="Name" class="text" type="text" title="Name" placeholder="Seu nome completo">
                    </div>

                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text">Nome de Usuário</label>
                        <input name="username" class="text" type="text" title="Username" placeholder="Seu username">
                    </div>
                </div>
                
                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Email</label>
                        <input name="email" class="text" type="text" title="email" placeholder="Seu email">
                    </div>

                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text gold">Telefone</label>
                        <input name="phone" class="text" type="text" title="phone" placeholder="(xx) xxxxx-xxxx">
                    </div>
                </div>

                <div class="vertical">
                    <label class="text">Logradouro</label>
                    <input class="text" type="text" name="adress" value = "Seu logradouro">
                </div>

                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Número</label>
                        <input class="text" type="text" name="number"  value = "Seu número">
                    </div>
                    
                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text">Complemento</label>
                        <input class="text" type="text" name="complement" value = "Algum complemento(opcional)">
                    </div>
                </div>
                
                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Senha</label>
                        <input name="password" class="text" type="password" title="password" placeholder="Sua senha">
                    </div>

                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text">Confirmar senha</label>
                        <input name="password2" class="text" type="password" title="password2" placeholder="Confirme a senha">
                    </div>

                </div>
                
                <br>
                <!-- O segundo botão é temporário, para que possa trocar de tela -->
                <!--<button type="submit" class="bt-moderadores texto branco">Login</button>-->
            </div>
        </form>
        <button onclick="window.location.href='login.html', alert('O usuario será efetivamente cadastrado na entrega 3!');">Cadastrar</button>
        <a href="login.html" class=simple-button>Já é nosso cliente?</a>
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
        css2.href= "/static/css/search.css";
        document.getElementsByTagName('head')[0].appendChild(css2);
    }
}