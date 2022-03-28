# front-13-projeto-web


### Baixando a aplicação
- `git clone https://github.com/iwtrainingbr/front-13-projeto-web/`

### Instalando as dependencias
- `cd front-13-projeto-web`
- `npm install`
- `npm install -g json-server`

### Subindo o servidor do banco de dados
No diretório da aplicação, crie um novo arquivo chamado `db.json` e copie para ele o conteúdo do arquivo `db.json.dist`

Execute no terminal:
```shell
npx json-server --watch db.json --port 8000
```

### Executando a aplicação
Execute o arquivo `index.html` usando algum navegador web e pronto!
