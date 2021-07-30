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
function getCookie(name) {
    name = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
        }
    }
}

// Gera a estrutura de cada produto
function buildList(product) {
    // Cria as tags de HTML
    const a = document.createElement("a");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const text1 = document.createElement("text1");
    const text2 = document.createElement("text2");

    const items = document.querySelector("#items-list");

    // Coloca o botão na lista
    items.append(a);

    // Coloca todos os textos dentro da única div do bloco
    div.append(img);
    div.append(text1);
    div.append(text2);

    // Coloca a div dentro da div principal
    a.append(div);

    a.setAttribute("href", "/spotlight?id="+product.id);
    a.setAttribute("class", "no-hyperlink");
    div.setAttribute("Class", "vertical center cart-item");
    img.setAttribute("src", "frontend/img/products/" + product.foto);
    text1.innerHTML = product.nome;
    text2.innerHTML = "R$ " + product.preco.toFixed(2);
};

function findProduct(id) {
    for(var j = 0; j < products.length; j++) {
        if(products[j].id == id)
            return products[j];
    }
    return null;
}

// Pega a lista de produtos do carrinho:
var carrinho_json = getCookie('cart');
var carrinho = JSON.parse(carrinho_json);
var price = 0;

for(var i = 0; i < carrinho.length; i++) {
    var carrinhoTemp = findProduct(carrinho[i]);
    price += carrinhoTemp.preco;
    buildList(carrinhoTemp);
}

document.getElementById("price").innerHTML = "Custo total: R$"+price.toFixed(2) + "<br><br>";

// Apaga os produtos do carrinho após a compra
function deleteAllCookies() {
    var carrinhoCodigo = document.getElementById("carrinhoCodigo").value;
    var carrinhoValidade = document.getElementById("carrinhoValidade").value;
    var carrinhoSeguranca = document.getElementById("carrinhoSeguranca").value;

    if(carrinhoCodigo == "" || carrinhoValidade == "" || carrinhoSeguranca == "") {
        alert("Preencha todos os campos de pagamento para finalizar a compra!");
        return;
    }


    var carrinho_json = getCookie('cart');
    var carrinho = JSON.parse(carrinho_json);
    carrinho = []
    var cart_json = JSON.stringify(carrinho);
    var now = new Date();
    now.setTime(now.getTime() + 1 * 3600 * 1000);
    document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";
    console.log("Comprado(s)");

    alert('Parabéns, sua compra foi realizada com sucesso! Em breve você receberá um email com as instruções para a aquisição das skins.');
    location.reload();
}

document.getElementById("finalizar").addEventListener("click", deleteAllCookies);