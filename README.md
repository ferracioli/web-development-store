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

1. Utilizar o comando git clone para obter o repositório completo;
2. Possuir instalados o node.js, MongoDB Community server e NPM;
3. Utilizar os seguintes comandos dentro do repositório do projeto:
  * npm init -y
  * npm add express mongoose
  * npm install axios --save
  * nodemon -D
  * npm run dev
4. O último comando inciará um servidor local na porta 8080, então basta acessar digitar `localhost:8000` na barra de endereços do navegador.
5. Ao abrir o MongoDB, logar por mongodb://localhost:27017/web-development-store e então criar a base de dados **web-development-store-main** com as coleções _Product_ e _User_;
6. Popular a base de dados do servidor _MongoDB Community_ acessando `collection` -> `import data` e adicionando o _dump_ salvo **UserDatabase.json** para a coleção _User_.

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

Foi testada cada uma das telas em três navegadores diferentes (Firefox, Google Chrome e Microsoft Edge), do formato máximo (visualização em computador) ao mínimo (uso em telefone celular), mais especificamente:
* Mexer no carrossel da tela inicial;
* Criar novo perfil;
* Entrar como administrador:
  - Adicionar _skin_;
  - Editar _skin_;
  - Apagar _skin_;
  - Promover usuário;
  - Rebaixar usuário;
  - Excluir usuário;
  - Editar perfil.
* Entrar como cliente:
  - Visualizar _skin_;
  - Visualizar _spotlight_;
  - Adicionar _skin_ ao carrinho;
  - Comprar _skin_;
  - Remover _skin_ do carrinho;
  - Finalizar compra;
  - Editar perfil.

### 2.2.2 Resultados

Com os testes supracitados, obteu-se:
* Mexer no carrossel da tela inicial - OK;
* Criar novo perfil - OK;
* Entrar como administrador:
  - Adicionar _skin_ - OK;
  - Editar _skin_ - OK;
  - Apagar _skin_ - OK;
  - Promover usuário - OK;
  - Rebaixar usuário - OK;
  - Excluir usuário - OK;
  - Editar perfil - OK.
* Entrar como cliente:
  - Visualizar _skin_ - OK;
  - Visualizar _spotlight_ - OK;
  - Adicionar _skin_ ao carrinho - OK;
  - Comprar _skin_ - OK;
  - Remover _skin_ do carrinho - OK;
  - Finalizar compra - OK;
  - Editar perfil - OK.

### 2.3 Comentários

Não há nenhum comentário a ser feito.

# 3. Problemas

Os principais problemas foram o [Marvel](https://marvelapp.com/) não ser muito intuitivo nem gerar o código do site modelado e, principalmente, integrar o _frontend_ com o _backend_.

# 4. Conclusões

O processo de criação foi de grande aprendizado, sendo necessário o uso de diferentes tecnologias, conhecimentos, linguagens e estratégias. O site foi focado nas funcionalidades necessárias para uma boa experiência do cliente, evitando erros de funcionalidade que gerassem qualquer inconsistência de dados, mantendo uma liberdade razoável para clientes e administradores. Por fim, acreditamos que o trabalho foi bem executado e que toda parte técnica e prática teve um desempenho bem satisfatório e que, caso fosse aplicada a uma loja real, um usuário poderia realizar suas comprar com uma experiência agradável e em uma plataforma amigável.
