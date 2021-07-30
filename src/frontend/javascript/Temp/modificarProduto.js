const products = [
    // OBS: repare que as datas de publicação são crescentes, juntamente com o id
    {
        id: 1,
        nome: "Anivia caçadora de noxus",
        descricao: "Anivia é um espírito alado e benevolente que suporta infinitos ciclos de vida, morte e renascimento para proteger Freljord.",
        jogo: "League of Legends",
        preco: 12.99,
        foto: "anivia.png",
        spotlight: "AniviaNoxusHunter.mp4",
        disponiveis: 3,
        vendidos: 9,
        data_publicacao: "2019-02-28"
    },
    {
        id: 2,
        nome: "Roupa de aventureiro",
        descricao: "Originada diretamente dos filmes da época de ouro de Harrison Ford, essa skin te deixará muito mais estiloso entre seus amigos!",
        jogo: "Among us",
        preco: 1.89,
        foto: "aventureiro.png",
        spotlight: "AniviaNoxusHunter.mp4",
        disponiveis: 63,
        vendidos: 22,
        data_publicacao: "2019-03-28"
    },
    {
        id: 3,
        nome: "Caitlyn Fliperama",
        descricao: "Conhecida como sua melhor pacificadora, Caitlyn também é a melhor escolha de Piltover para livrar a cidade de seus elementos criminosos elusivos.",
        jogo: "League of Legends",
        preco: 99.99,
        foto: "cait flip.jpg",
        spotlight: "CaitlynFliperama.mp4",
        disponiveis: 1,
        vendidos: 9,
        data_publicacao: "2019-04-28"
    },
    {
        id: 4,
        nome: "Teemo Astronauta",
        descricao: "Eu virei astronauta e fui para outro planeta. Explore todo o universo com este equipamento do Teemo.",
        jogo: "League of Legends",
        preco: 1.00,
        foto: "teemo.png",
        spotlight: "AniviaNoxusHunter.mp4",
        disponiveis: 1,
        vendidos: 0,
        data_publicacao: "2019-05-28"
    },
    {
        id: 5,
        nome: "Ana Cybermédica",
        descricao: "Skin exclusiva dos desafios semanais. Como é algo semana, é uma skin muito rara.",
        jogo: "Overwatch",
        preco: 10.25,
        foto: "ana.png",
        spotlight: "Ana.mp4",
        disponiveis: 12,
        vendidos: 3,
        data_publicacao: "2019-06-28"
    }
];

function buildList(product) {

    // Monta o formulário de edição do produto
    document.getElementById("product").innerHTML =
        "<div class='vertical'>"+
            "<label class='text'>Imagem atual do produto:</label>"+
            "<text>"+product.foto+"</text><br>"+

            "<b class='text'>Alterar imagem:</b>"+
            "<input name='productFile' type='File'><br>"+

            "<label class='text'>Spotlight atual do produto:</label>"+
            "<text>"+product.spotlight+"</text><br>"+

            "<b class='text'>Alterar spotlight:</b>"+
            "<input name='spotlightFile' type='File'>"+
        "</div>"+

        "<div style='margin: 20px 0;' class='vertical'>"+

            "<div class='vertical'>"+
                "<label class='text gold'>Nome:</label>"+
                "<input style='width:300px;' class='text' type='text' title='nome' required value='"+ product.nome +"'>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Jogo:</label>"+
                "<select style='width:300px;' name='Jogo'>"+
                    "<option value = '"+product.jogo+"' selected>"+product.jogo+"</option>"+   
                    "<option value = 'League of Legends'>League of Legends</option>"+    
                    "<option value = 'Among Us'>Among Us</option>"+
                    "<option value = 'Overwatch'>Overwatch</option>"+
                    "<option value = 'Valorant'>Valorant</option>"+
                "</select>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Descrição:</label>"+
                "<textarea style='width:300px;' rows='5' cols='60' name='description' required>"+product.descricao+"</textarea>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Estoque:</label>"+
                "<input style='width:300px;' class='text' type='number' min='1' step='1' title='estoque' onkeypress='return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57' required value='"+product.disponiveis+"'>"+
            "</div>"+
            "<div class='vertical'>"+
                "<label class='text gold'>Preço:</label>"+
                "<input type='number' min='0.01' step='any' title='preco' required value='"+product.preco.toFixed(2)+"'>"+
            "</div>"+
        "</div>";

};

var url_string = window.location.href;
var url = new URL(url_string);

var id = url.searchParams.get("id");

for(var i = products.length-1; i >= 0; i--) {
    if(products[i].id == id) {
        buildList(products[i]);
        break;
    }
}