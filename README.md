# ApiBlog_Express

Este é um projeto de API de blog construído com Express.js. Ele permite que os usuários visualizem, postem e excluam notícias.

## Começando

Estas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

O que você precisa para instalar o software e como instalá-lo:

- Node.js
- npm

### Instalação

1. Clone o repositório
2. Instale as dependências
   - npm install
3. Inicie o servidor
   - npx nodemon app
  

## Rotas da API

- `GET /news`: Mostra todas as notícias
- `POST /news`: Posta uma nova notícia
- `DELETE /news/:id`: Exclui uma notícia pelo ID
