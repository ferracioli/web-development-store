# Projeto de Introdução ao Desenvolvimento Web (SCC0219) - Barão das Skins

Diogo Castanho Emídio - 11297274

Gabriel Monteiro Ferracioli - 11219129

Paulo Henrique Sebastião de Moura - 10310471

# 1. Introdução

## 1.1 Sobre o projeto

O presente projeto é um site de uma loja online que vende *skins* de diversos jogos. Àqueles que não sabem, *skins* são visuais alternativos a elementos de um jogo, podendo ser de personagens (como roupas) ou de itens (designs diferentes para armas, por exemplo). No caso, este site é exclusivo para compras de *skins* de personagens dos seguintes jogos:
* Overwatch;
* League of Legends;
* Valorant;
* Among Us.

O site possui 2 (dois) tipos de usuários:
* Administrador (Admin): responsável por registrar/gerenciar administradores, usuários e *skins*. Tem registrado: nome, nome de usuário, e-mail, telefone e senha (o nome de usuário e a senha são **admin**);
* Cliente: usuário padrão, que acessa o site para comprar *skins*. Tem registrado: nome, nome de usuário, e-mail, telefone, endereço e senha (o nome de usuário e a senha são **cliente**).

As *skins*, por sua vez, são registradas com: nome, id, jogo a que pertencem, imagem, *spotlight* (animação de como ficam no jogo, sendo essa a funcionalidade específica do site), descrição, quantidades vendida e em estoque e preço. Por fim, todas as informações dos usuários (administradores e clientes) e dos produtos ficam salvas no servidor.

## 1.2 Como instalar

1. Fazer o download do projeto (através do botão _Code_);
2. Extrair os arquivos da pasta compactada;
3. Abrir o terminal dentro da pasta extraída (**web-development-store-main**) e digitar o comando `python3 -m http.server 8000` (necessário Python 3 instalado). Se não funcionar, digite `python -m http.server 8000`;
4. Na barra de endereços do navegador, digitar `localhost:8000`.

O uso é intuitivo, porém o diagrama pode ser útil caso haja dificuldades na navegação (ver seção **Navegação**, em **Descrição do Software**).

# 2. Descrição do Software

## 2.1 Navegação

![Diagrama](https://github.com/gabriel3224/web-development-store/blob/main/documentation/diagrama.png)

Funcionalidades:
* [Página inicial](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/p%C3%A1gina%20inicial.png): descrição do site;
* [Entrar](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/entrar.png): fazer login;
* [Cadastrar](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/cadastrar.png): fazer cadastro;
* Administrador:
  - [Área de usuário](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/%C3%A1rea%20de%20usu%C3%A1rio%20(admin).png): escolher ação;
  - [Buscar produtos](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/buscar%20produtos%20(admin).png): procurar e excluir produtos;
  - [Produto](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/produto%20(admin).png): ver e editar produto (imagem, *spotlight* e informações);
  - [Adicionar produto](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/adicionar%20produto.png): criar produto;
  - [Editar perfil](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/editar%20perfil%20(admin).png): alterar informações próprias;
  - [Buscar usuários](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/buscar%20usu%C3%A1rios.png): ver, editar (conceder ou remover permissão de administrador) e excluir usuários.
* Cliente:
  - [Área de usuário](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/%C3%A1rea%20de%20usu%C3%A1rio%20(cliente).png): escolher ação;
  - [Buscar produtos](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/buscar%20produtos%20(cliente).png): procurar e adicionar produtos ao carrinho;
  - [Produto](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/produto%20(cliente).png): ver (imagem, *spotlight* e informações) e adicionar produto ao carrinho;
  - [Carrinho](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/carrinho.png): comprar produto(s);
  - [Editar perfil](https://github.com/gabriel3224/web-development-store/blob/main/documentation/telas/editar%20perfil%20(cliente).png): alterar informações próprias.

Uma observação a ser feita: todas as telas levam à página inicial e à respectiva área de usuário, porém isso não foi incluído no diagrama para não poluir a imagem.

## 2.2 Testes

### 2.2.1 Plano de teste

Para o *backend*, foi testada cada uma das telas em três navegadores diferentes (Firefox, Google Chrome e Microsoft Edge), do formato máximo (visualização em computador) ao mínimo (uso em telefone celular).

Para o *backend*, por sua vez, pretende-se usar o [Postman](https://www.postman.com/).

### 2.2.2 Resultados

Foram detectados defeitos na estética (sobretudo no tocante à responsividade e ao uso otimizado da tela) e em pequenas funcionalidades (vide botões). Esses últimos foram todos reparados, enquanto dos primeiros sanou-se os mais gerais e comprometedores. De resto, o software atende ao esperado.

### 2.3 Comentários

Pretende-se implementar ainda uma confirmação de compra por e-mail.

# 3. Problemas

O principal problema foi o [Marvel](https://marvelapp.com/) não ser muito intuitivo nem gerar o código do site modelado.

# 4. Conclusões


