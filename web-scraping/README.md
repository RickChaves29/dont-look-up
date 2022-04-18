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

2 - Entrar na pasta **web-scraping/** e digita no terminal os comandos

Para instalar as dependencias do projeto

```bash
npm install
```

Para rodar o projeto de forma local

```bash
npm start
```

OPS: para rodar o projeto de forma local você de ter banco de dados rodando em sua maquina e por as credencias no arquivo **.env.example** e renomear o arquivo para **.env**

## Como funciona o script

É um script básico de coleta de dados
Ele faz a requisição de 100 artigos da api e adiciona ao banco de dados
