## Como roda o projeto

1 - tem que efetuar o download

via Git - HTTPS

```bash
git clone https://github.com/RickChaves29/dont-look-up.git
```

via Git - SSH

```bash
git clone git@github.com:RickChaves29/dont-look-up.git
```

2 - Entrar na pasta **back-end/** e digita no terminal os comandos

Para instalar as dependencias do projeto

```bash
npm install
```

Para rodar o projeto de forma local

```bash
npm run start:dev
```

OPS: para rodar o projeto de forma local você de ter banco de dados rodando em sua maquina e por as credencias no arquivo **.env.example** e renomear o arquivo para **.env**

## Como o funciona a API ?

Está API é baseada no arquitetura de APIs REST

### Para obter uma lista os artigos

```bash
 GET/articles
```

OBS: por padrão a API retorna apenas uma lista com 5 artigos, para exibir mas artigos é necessário usa o parâmetro de consulta “limit”

Exemplo:

```bash
GET/articles?limit=10
```

A API possui também um modo de paginação, para isso é possível usa o parâmetro de consulta “page”, lembrando que por padrão o API sempre retornara a “page” de número 0

Exemplo:

```bash
GET/articles?page=2
```

### Para obter apenas um artigo com base em seu id

```bash
GET/articles/:id
```

Deve ser retornado a seguinte estrutura

```json
{
  "id": 0,
  "title": "string",
  "url": "string",
  "imageUrl": "string",
  "newsSite": "string",
  "summary": "string",
  "publishedAt": "string"
}
```

### Para criar um novo artigo

```bash
POST/articles
```

Os dados devem ser enviado apenas pelo corpo do site no formato JSON

Exemplo:

```json
{
  "title": "string",
  "url": "string",
  "imageUrl": "string",
  "newsSite": "string",
  "summary": "string"
}
```

### Para atualizar informações de um artigo

```bash
PATCH/articles/:id
```

É possível atualizar as informações de forma parcial ou seja você pode informa apenas o campo que queira atualizar

```json
{
  "title": "string",
  "url": "string",
  "imageUrl": "string",
  "newsSite": "string",
  "summary": "string"
}
```

### Para excluir um artigo com base no seu id

```bash
DELETE/articles/:id
```

## Tecnologias usadas

- Javascript/Typecript
- Node.js
- Nest.js
- Prisma ORM
- Docker

### Fluxo de branches usado

Main ⇒ Main

OBS: é eu sei que é um má pratica
