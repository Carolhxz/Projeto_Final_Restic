# Projeto Final Restic

**Projeto Final Restic** é uma aplicação desenvolvida com o objetivo de fornecer uma plataforma interativa e eficiente para a gestão de vagas e usuários. O projeto utiliza uma API para manipulação de dados, incluindo o CRUD de usuários e vagas, autenticação e outras funcionalidades essenciais para o gerenciamento de informações.

## Introdução

O **Projeto Final Restic** tem como objetivo principal a criação de uma aplicação que permita aos usuários e administradores a gestão de vagas e informações associadas a cada usuário. Além disso, a plataforma oferece funcionalidades de login, autenticação e persistência de dados para uma experiência mais fluída e eficiente.

### Principais Funcionalidades:

- **Gestão de Usuários:**
  - Cadastro, edição e remoção de usuários.
  - Exibição de informações detalhadas de cada usuário.
  
- **Gestão de Vagas:**
  - Criação, edição e remoção de vagas.
  - Visualização de vagas disponíveis e suas informações detalhadas.

- **Autenticação de Usuário:**
  - Login e logout para garantir a segurança dos dados.
  - Persistência do estado de autenticação utilizando **AsyncStorage**.

- **Persistência de Dados:**
  - Uso de **SQLite** e **Sequelize** para armazenamento e manipulação de dados no backend.

- **Navegação:**
  - Navegação entre as telas da aplicação utilizando **React Navigation**.

## Tecnologias Utilizadas

- **React Native:** Para o desenvolvimento do aplicativo mobile.
- **Node.js & Express:** Para o backend da aplicação, utilizando a API para gerenciar usuários e vagas.
- **React Navigation:** Biblioteca para navegação entre as telas do aplicativo.
- **AsyncStorage:** Para armazenamento local de dados de autenticação.
- **Expo:** Ferramenta para facilitar o desenvolvimento e execução do aplicativo em dispositivos móveis.
- **Sequelize & SQLite:** Para gerenciamento do banco de dados.

## Principais Telas e Fluxos do Usuário

- **Tela de Login:** Tela onde o usuário realiza o login para acessar a plataforma.
- **Tela Inicial:** Acesso à área principal do aplicativo com informações sobre as vagas.
- **Cadastro de Vagas:** Tela onde os administradores podem cadastrar novas vagas.
- **Gestão de Usuários:** Tela para visualização e gestão dos usuários cadastrados.
- **Perfil de Usuário:** Tela que permite editar as informações do perfil do usuário.

## Instalação

### Pré-requisitos

Antes de rodar o projeto, você precisa ter o [Node.js](https://nodejs.org/) instalado em seu computador. Você pode verificar se o Node.js já está instalado com o comando:

```bash
node -v

Além disso, você precisará do Expo CLI para rodar o projeto

npm install -g expo-cli
1. Clonando o Repositório
Clone o repositório com o comando abaixo:

git clone https://github.com/Carolhxz/Projeto_Final_Restic.git
2. Navegar até o Diretório do Projeto
UM

cd Projeto_Final_Restic
3. Instalando as Dependências
Instale as dependências de permissão para rodar o projeto com o comando:

npm install
Esse comando vai inst

4. Executando o Projeto
Para executar o aplicativo, use o seguinte comando:

npm start
Esse comando iniciará o servidor de

Você pode digitalizar o código QR com o Expo Go no seu dispositivo móvel para visualizar o aplicativo em tempo real,

Contribuição
Se você deseja

Passos para Contribuir:
Faça um fork deste repositório.
Crie uma nova branch:
git checkout -b feature-nome-da-feature
Faça as alterações desejadas.
Faça suas alterações:
git commit -m "Adicionando nova feature"
Envie para o repositório remoto:
git push origin feature-nome-da-feature







