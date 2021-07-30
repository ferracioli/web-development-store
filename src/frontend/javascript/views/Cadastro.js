import Views from "./Views.js";
import getCookie from "./GetCookie.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Cadastro");
    }

    async getHtml() {

        if(getCookie('cargo') != null) {
            if(getCookie('cargo') == 'Admin')
                window.location.href = "/areaAdmin";
            else if(getCookie('cargo') == 'Cliente')
                window.location.href = "/areaCliente";
        }

        return `
        <h1>Faça seu cadastro!</h1>
        <!-- Formulário com todas as informações essenciais dos clientes -->
        <form id="registrer-form" action="#" method="POST">
            <div class="vertical center">

                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Nome e Sobrenome</label>
                        <input id="name" class="text" type="text" title="Name" placeholder="Seu nome completo">
                    </div>

                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text">Nome de Usuário</label>
                        <input id="username" class="text" type="text" title="Username" placeholder="Seu username">
                    </div>
                </div>
                
                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Email</label>
                        <input id="email" class="text" type="text" title="email" placeholder="Seu email">
                    </div>

                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text gold">Telefone</label>
                        <input id="phone" class="text" type="text" title="phone" placeholder="(xx) xxxxx-xxxx">
                    </div>
                </div>

                <div class="vertical">
                    <label class="text">Logradouro</label>
                    <input id="addres" type="text" name="adress" placeholder = "Seu logradouro">
                </div>

                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Número</label>
                        <input id="number" class="text" type="text" name="number"  placeholder = "Seu número">
                    </div>
                    
                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text">Complemento</label>
                        <input id="complement" class="text" type="text" name="complement" placeholder = "Algum complemento(opcional)">
                    </div>
                </div>
                
                <div class="responsive-form">
                    <div class="vertical">
                        <label class="text">Senha</label>
                        <input id="password1" name="password" class="text" type="password" title="password" placeholder="Sua senha">
                    </div>

                    <div class="horizontal-space"></div>
                    
                    <div class="vertical">
                        <label class="text">Confirmar senha</label>
                        <input id="password2" name="password2" class="text" type="password" title="password2" placeholder="Confirme a senha">
                    </div>

                </div>
                
                <br>
                <!-- O segundo botão é temporário, para que possa trocar de tela -->
                <!--<button type="submit" class="bt-moderadores texto branco">Login</button>-->
            </div>
        </form>
        <button id="botao-cadastro" onclick=alert('O usuario será efetivamente cadastrado na entrega 3!');">Cadastrar</button>
        <a href="login.html" class=simple-button>Já é nosso cliente?</a>
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
        script.src= "/frontend/javascript/databaseFunctions/processaCadastro.js";
        document.body.appendChild(script);
    }
}