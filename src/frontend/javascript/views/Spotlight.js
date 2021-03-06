import Views from "./Views.js";
import getCookie from "./GetCookie.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Spotlight");
    }

    async getHtml() {
        if(getCookie('username') == null || getCookie('cargo')=="Admin")
            window.location.href = "/";

        return `
            <div class="start-title" style="width: 60vw;">
                <a class="simple-button" href="javascript:history.go(-1)">Retornar</a>
            </div>

            <div id="items"> 

                <!-- Chama a função que usa a base de dados local (JSON) -->
                <script type="module" src="../javascript/Temp/spotlightView.js"></script>  

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


        var css3 = document.createElement('link');
        css3.type = "text/css";
        css3.rel='stylesheet';
        css3.href= "/frontend/css/spotlight.css";
        document.getElementsByTagName('head')[0].appendChild(css3);

        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/Temp/spotlightView.js";
        document.body.appendChild(script);
    }
}