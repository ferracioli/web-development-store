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

function abreVideo() {
    var playerDoSpotlight = document.getElementById("spotlightVideo");
    // Mostra o vídeo e o contorno para poder fechá-lo
    document.getElementById('popup').style.display = 'block';
    document.getElementById('fechaVideo').style.display = 'block';
    // Inicia o vídeo
    playerDoSpotlight.play();
}
  
function fechaVideo() {
    // Esconde o vídeo e o contorno para poder fechá-lo
    var playerDoSpotlight = document.getElementById("spotlightVideo");
    document.getElementById('popup').style.display = 'none';
    document.getElementById('fechaVideo').style.display = 'none';
    // Reinicia o vídeo
    playerDoSpotlight.currentTime = 0;
    playerDoSpotlight.load();
}

function buildList(product) {
    document.getElementById("items").innerHTML =
    "<div class='responsive-user-crud individual'>"+

        "<div class='vertical'>"+
            "<img id='spotlightImage' src='frontend/img/products/"+product.foto+"'>"+

            "<div id='popup'>"+
                "<video id='spotlightVideo' width='540' height='auto' controls>"+
                    "<source src='frontend/media/"+product.spotlight+"' type='video/mp4'>"+
                "</video>"+
            "</div>"+
                
            "<div id='fechaVideo' onClick='fechaVideo();'></div>"+
            "<div>"+
                "<a id='spotlightButton' onclick='abreVideo();'>Ver spotlight</a>"+
            "</div>"+
        "</div>"+

        "<div class='vertical'>"+
            "<h3>"+product.nome+"</h3>"+
            "<h2>R$"+product.preco.toFixed(2)+"</h2>"+
            "<div id='spotlightOptions' class='horizontal'>"+
                "<button id='comprar' class='buy_skin' >Comprar</button>"+
                "<button id='addCarrinho' class='spot_edit'>Adicionar ao carrinho</button>"+
            "</div>"+
        "</div></div>"+

        "<div class = 'products'>"+
            "<div class='vertical'>"+
                "<text class='text'><b>Nome: </b>"+product.nome+"</text>"+
                "<text class='text'><b>Jogo: </b>"+product.jogo+"</text>"+
                "<text class='text'><b>Disponíveis: </b>"+product.disponiveis+"</text>"+
                "<text class='text'><b>Descrição:</b><br>"+product.descricao+"</text>"+
            "</div>"+
        "</div>"+

    "</div>";
    
    // Botão de comprar (adiciona e vai direto pro carrinho)
    var comprar = document.getElementById("comprar");
    comprar.onclick=function(){
        var json_cart = getCookie('cart');
        var cart = JSON.parse(json_cart);
        if(cart.filter(x => x==id).length < product.disponiveis){
            // Adiciona o id do novo produto
            cart.push(id);
            // Atualiza o cookie
            var cart_json = JSON.stringify(cart);
            var now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";

            document.getElementById("addCarrinho").value = "Adicionado";
            console.log("Adicionado");
        }

        window.location.href = "/carrinho";
    }

    // Botão de adicionar no carrinho
    var addCarrinho = document.getElementById("addCarrinho");
    addCarrinho.onclick = function(){
        
        var json_cart = getCookie('cart');
        var cart = JSON.parse(json_cart);
        // Adiciona o id do novo produto
        console.log(cart);
        if(cart.filter(x => x==id).length < product.disponiveis){
            cart.push(id);
            // Atualiza o cookie
            var cart_json = JSON.stringify(cart);
            var now = new Date();
            now.setTime(now.getTime() + 1 * 3600 * 1000);
            document.cookie = "cart="+cart_json+"; expires=" + now.toUTCString() + "; path=/";

            document.getElementById("addCarrinho").value = "Adicionado";
            console.log("Adicionado");
            alert('Produto adicionado ao carrinho com sucesso!');
        }
        else
            alert("Estoque insuficiente!");
    }
}

var url_string = window.location.href;
var url = new URL(url_string);

var id = url.searchParams.get("id");

for(var i = 0; i < products.length; i++) {
    if(products[i].id == id) {
        
        buildList(products[i]);
        break;
    }
}