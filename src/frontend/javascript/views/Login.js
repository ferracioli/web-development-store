// frontend/frontend/js/views/Dashboard.js
import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {

        axios.get('/user').then(resp => {
            var resposta = resp.data
            console.log(resposta);
            console.log(resposta[0]['username']);
        });

        return `
            <h1>Faça seu Login!</h1>
                    
            <!-- Formulário de login -->
            <form id="login-form" action="#" method="POST">
                <div class="vertical center">
                    <label class="text">Nome de Usuário</label>
                    <input name="username" id="username" class="text" type="text" title="Username" placeholder="seu username">
                    <label class="text">Senha</label>
                    <input name="password" id="password" class="text" type="password" title="password" placeholder="Sua senha">
                    
                    <br>
                    <!-- O segundo botão é temporário, para que possa trocar de tela -->
                    <!--<button type="submit" class="bt-moderadores texto branco">Login</button>-->
                </div>
            </form>
            
            <button id ="loginButton">Login</button><br>
            <script type="module" src="../javascript/Temp/login.js"></script>
            <a href="/cadastro" class=simple-button>Ainda não é nosso cliente?</a>
        `;
    }

    async executeViewScript() {
        var css = document.createElement('link');
        css.type = "text/css";
        css.rel='stylesheet';
        css.href= "/frontend/css/form.css";
        document.getElementsByTagName('head')[0].appendChild(css);
    }
}