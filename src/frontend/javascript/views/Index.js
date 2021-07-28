import Views from "./Views.js";

export default class extends Views {
    constructor(params) {
        super(params);
        this.setTitle("Página Inicial");
    }

    async getHtml() {
        return `
            <h1>A melhor loja de skins para jogos online do Brasil!</h1>
            <!-- Slider que mostra os jogos com skins disponíveis na loja -->
            <div class="slider-imagens">
                <div class="pagina-individual">
                    <img onload="mostraSlide(slide_atual)" src="frontend/img/overwatch.jpeg">
                    <h3 class= "center-title" style="margin:2px 0 10px 0;">Overwatch</h3>
                </div>

                <div class="pagina-individual">
                    <img src="frontend/img/lol.jpeg">
                    <h3 class= "center-title" style="margin:2px 0 10px 0;">League of Legends</h3>
                </div>
                
                <div class="pagina-individual">
                    <img src="frontend/img/valorant.jpeg">
                    <h3 class= "center-title" style="margin:2px 0 10px 0;">Valorant</h3>
                </div>

                <div class="pagina-individual">
                    <img src="frontend/img/abong.jpeg">
                    <h3 class= "center-title" style="margin:2px 0 10px 0;">Among Us</h3>
                </div>


                <a class="seta-anterior" onclick="saltaSlide(-1)">&#10094;</a>
                <a class="seta-proximo" onclick="saltaSlide(1)">&#10095;</a>
            </div>
        `;
    }

    async executeViewScript() {
        // Inclui scripts e css exclusivos dessa tela
        var script = document.createElement('script');
        script.type='text/javascript';
        script.src= "/frontend/javascript/slider.js";
        document.getElementsByTagName('body')[0].appendChild(script);


        var css = document.createElement('link');
        css.type = "text/css";
        css.rel='stylesheet';
        css.href= "/frontend/css/inicial.css";
        document.getElementsByTagName('head')[0].appendChild(css);
    }
}