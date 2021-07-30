import Views from "./Views.js";
import getCookie from "./GetCookie.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Login");
    }

    async getHtml() {

        if(getCookie('cargo') != null) {
            if(getCookie('cargo') == 'Admin')
                window.location.href = "/areaAdmin";
            else if(getCookie('cargo') == 'Cliente')
                window.location.href = "/areaCliente";
        }

        return `
            <h1>Faça seu Login!</h1>
                    
            <!-- Formulário de login -->
            <form id="login-form" method="POST">
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
            <a href="/cadastro" class=simple-button>Ainda não é nosso cliente?</a>
        `;
    }

    executeViewScript() {
        var css = document.createElement('link');
        css.type = "text/css";
        css.rel='stylesheet';
        css.href= "/frontend/css/form.css";
        document.getElementsByTagName('head')[0].appendChild(css);

        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/databaseFunctions/verificaLogin.js";
        document.body.appendChild(script);
    }
}