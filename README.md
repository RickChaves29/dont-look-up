# Don’t Look Up API

> Challenge by coodesh
> 

Projeto desenvolvido como desafio de código, para testa meus conhecimento no Back-End

## O que é o projeto ?

O projeto é uma API que disponibiliza dados artigos sobre eventos espaciais, os dados são coletados de uma outra API chamada [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation) através de um script de coleta de dados, e também tem disponível um processo que coleta sempre as 9:00AM os dados mais recentes para deixa a API sempre atualizada, é possível ler um ou mais artigos, atualizar e excluir.

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
    "summary": "string",
}
```

### Para atualizar informações de um artigo

```bash
PATCH/articles/:id
```

É possível atualizar as informações de forma parcial ou seja você pode informa apenas o campo que queira atualizar

```json
{
		"title": "string" | null,
    "url": "string" | null,
    "imageUrl": "string" | null,
    "newsSite": "string" | null,
    "summary": "string" | null,
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