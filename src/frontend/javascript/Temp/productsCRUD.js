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
        spotlight: "AniviaNoxusHunter.mp4",
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
        spotlight: "AniviaNoxusHunter.mp4",
        disponiveis: 12,
        vendidos: 3,
        data_publicacao: "2019-06-28"
    }
];

function buildList(product) {
    // Cria as tags de HTML
    const parent_div = document.createElement("div");
    const first_child = document.createElement("div");
    const second_child = document.createElement("div");
    const third_child = document.createElement("div");
    const miniature_img = document.createElement("img");
    const texto1 = document.createElement("text");
    const texto2 = document.createElement("text");
    const texto3 = document.createElement("text");
    const texto4 = document.createElement("text");
    const price = document.createElement("h2");
    const botao1 = document.createElement("button");
    const botao2 = document.createElement("button");

    const items = document.querySelector("#items");

    // Coloca a div inteira dentro do id Items (hierarquia geral)
    items.append(parent_div);

    // Coloca a imagem dentro da primeira div filha
    first_child.append(miniature_img);

    // Coloca todos os textos dentro da segunda div filha
    second_child.append(texto1);
    second_child.append(texto2);
    second_child.append(texto3);
    second_child.append(texto4);

    // Coloca o preço e os botões dentro da terceira div filha
    third_child.append(price);
    third_child.append(botao1);
    third_child.append(botao2);

    // Coloca as três divs dentro da div principal
    parent_div.append(first_child);
    parent_div.append(second_child);
    parent_div.append(third_child);

    // Adiciona classes, estilo e texto às tags e outros atributos
    parent_div.setAttribute("class", "products responsive-user-crud");
    second_child.setAttribute("Class", "vertical");
    third_child.setAttribute("Class", "vertical end");
    third_child.setAttribute("Style", "Margin:0");
    miniature_img.setAttribute("src", "frontend/img/products/" + product.foto);
    miniature_img.setAttribute("style", "width: 140px;height: 140px;");

    texto1.setAttribute("Class", "text");
    texto2.setAttribute("Class", "text");
    texto3.setAttribute("Class", "text");
    texto4.setAttribute("Class", "text");
    texto1.innerHTML = "<b>Nome:</b> " + product.nome;
    texto2.innerHTML = "<b>Jogo:</b> " + product.jogo;
    texto3.innerHTML = "<b>Disponívels:</b> " + product.disponiveis + ", <b>Vendidos:</b> " + product.vendidos;
    texto4.innerHTML = "<b>Descrição:</b> " + product.descricao;
    price.innerHTML = "R$" + product.preco.toFixed(2);
    price.setAttribute("Class", "text black");
    price.setAttribute("Style", "margin: 10px 15px;");
    botao1.innerHTML = "Excluir";
    botao1.setAttribute("Class", "add_exclude");
    botao1.setAttribute("Onclick", "alert('O produto será efetivamente removido na entrega 3!');");
    botao2.innerHTML = "Editar";
    botao2.setAttribute("Class", "spot_edit");
    // OBS: essa parte é crucial, pois precisamos passar o id para a tela de ediçãos
    botao2.setAttribute("Onclick", "window.location.href = '/modificarProduto?id=" + product.id + "';");
};

var url_string = window.location.href;
var url = new URL(url_string);

var nomeSkin = url.searchParams.get("name");
if(nomeSkin == null)
    nomeSkin = "";
    
var game = url.searchParams.get("game");
if(game == null)
    game = "all";

var datetime = url.searchParams.get("datetime");

if(datetime && datetime == "new") {
    // Imprime dos novos para os mais antigos
    for(var i = products.length-1; i >= 0; i--) {

        // Filtra caso tenha algum jogo específico
        if(game && game != "all") {
            if(products[i].jogo != game)
                continue;
        }

        // Filtra se tiver busca por um nome específico
        if(nomeSkin && nomeSkin != "") {
            if(!products[i].nome.includes(nomeSkin))
                continue;
        }

        buildList(products[i]);
    }
}
else {
    // Se não tem filtro de data ou é o filtro dos mais antigos
    for(var i = 0; i < products.length; i++) {

        // Filtra caso tenha algum jogo específico
        if(game && game != "all") {
            if(products[i].jogo != game)
                continue;
        }

        // Filtra se tiver busca por um nome específico
        if(nomeSkin && nomeSkin != "") {
            if(!products[i].nome.includes(nomeSkin))
                continue;
        }

        buildList(products[i]);
    }
}