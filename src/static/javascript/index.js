// Imports
import AreaAdmin from "./views/AreaAdmin.js"; 
import AreaCliente from "./views/AreaCliente.js";
import BuscaProduto from "./views/BuscaProduto.js";
import Cadastro from "./views/Cadastro.js";
import Carrinho from "./views/Carrinho.js";
import CriarProduto from "./views/CriarProduto.js";
import CrudProdutos from "./views/CrudProdutos.js";
import CrudUsuarios from "./views/CrudUsuarios.js";
import EditarPerfil from "./views/EditarPerfil.js";
import Index from "./views/Index.js";
import Login from "./views/Login.js";
import ModificarProduto from "./views/ModificarProduto.js";
import Spotlight from "./views/Spotlight.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
// pathToRegex("/posts/:id") -> /^\/posts\/(.+)$/

// Roteador
var routes = [
    { path: "/areaAdmin", view: AreaAdmin },
    { path: "/areaCliente", view: AreaCliente },
    { path: "/cadastro", view: Cadastro },
    { path: "/carrinho", view: Carrinho },
    { path: "/buscaProduto", view: BuscaProduto },
    { path: "/criarProduto", view: CriarProduto },
    { path: "/crudProdutos", view: CrudProdutos },
    { path: "/crudUsuarios", view: CrudUsuarios },
    { path: "/editarPerfil", view: EditarPerfil },
    { path: "/", view: Index },
    { path: "/login", view: Login },
    { path: "/modificarProduto", view: ModificarProduto },
    { path: "/spotlight", view: Spotlight }
];

const router = async () => {
    routes = [
        { path: "/areaAdmin", view: AreaAdmin },
        { path: "/areaCliente", view: AreaCliente },
        { path: "/cadastro", view: Cadastro },
        { path: "/carrinho", view: Carrinho },
        { path: "/buscaProduto", view: BuscaProduto },
        { path: "/criarProduto", view: CriarProduto },
        { path: "/crudProdutos", view: CrudProdutos },
        { path: "/crudUsuarios", view: CrudUsuarios },
        { path: "/editarPerfil", view: EditarPerfil },
        { path: "/", view: Index },
        { path: "/login", view: Login },
        { path: "/modificarProduto", view: ModificarProduto },
        { path: "/spotlight", view: Spotlight }
    ];
}

// Testa as rotas
const potentialMatches = routes.map(route => {
    return {
        route,
        result: location.pathname.match(pathToRegex(route.path))
    };
});

let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

// Inicia a página
/* Route not found - return first route OR a specific "not-found" route */
if (!match) {
    match = {
        route: routes[0],
        result: [location.pathname]
    };
}

console.log(match);

// Navegador
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    /* Document has loaded -  run the router! */
    router();
});

window.addEventListener("popstate", router);

// Continuação
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const view = new match.route.view(getParams(match));
document.querySelector("#app").innerHTML = await view.getHtml();

await view.executeViewScript();