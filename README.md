# Trabalho_twm_2023

# Smart view

```jsx
https://github.com/FabioRSJunior/Trabalho_twm_2023
```

Bem-vindo ao nosso ecossistema inovador, onde a colaboração entre empresas e startups redefine os limites do progresso. Nosso site é a ponte que conecta visionários empreendedores a oportunidades valiosas, proporcionando uma vitrine digital para destacar o trabalho incrível das startups. 

A aplicação opera de maneira simples: uma startup interessada realiza o cadastro de suas informações na página designada. Em seguida, um administrador revisa essas informações em sua página de controle. Se o administrador concordar com as informações, a startup é aceita e passa a ser exibida no campo "exibir startups". Qualquer pessoa pode acessar essa seção para entrar em contato com a startup cadastrada, seja visitando seu site, enviando um email, acessando um link ou ligando para o telefone fornecido. Dessa forma, a aplicação facilita a conexão entre empresas enfrentando desafios e aquelas que oferecem soluções disruptivas.

**Sumario:** 

### Instalação

**server**:

Faça download de toda a  aplicação, no diretório startview-back execute o comando: 

```jsx
npm install 
```

Após isso, execute o comando: 

```jsx
node index.js
```

O terminal deverá ficar aberto, com a aplicação rodando na porta  O servidor da aplicação roda em node, na porta 5001. 

F**ront:**

Dentro do diretório startview-app, execute os comando 

```jsx
npm install 
```

Para executar o front, é necessário executar: 

```jsx
npm start
```

Uma vez que o servidor e o frontend estiverem rodando juntos é possível utilizar o programa.  

### Descrição geral

1. **Páginas Principais:**
    - As páginas principais, denominadas "pag_", têm a função de renderizar as diferentes páginas que carregam componentes.
2. **Componentes Comuns:**
    - A "Navbar" e o "Footer" são componentes presentes em todas as páginas, responsáveis pela barra de navegação e rodapé, respectivamente.
3. **Outros Componentes:**
    - Os demais arquivos representam diferentes componentes.
4. **Rota Administrativa Oculta:**
    - Existe uma rota não disponibilizada por links na "Navbar" ([http://localhost:3000/pagadm](http://localhost:3000/pagadm)), chamada "Pag_Admin". Essa página exibe dois componentes:
        - [StartupList]: Lista startups pendentes de aprovação.
        - [StartupListativas]: Lista todas as startups atualmente exibidas no site.
    - Ambos os componentes permitem a gestão das empresas, movendo-as entre listas de pendentes e aprovadas, ou removendo-as permanentemente.

### Comunicação [JSON]

A comunicação entre front e back é feito através de requisições htpp com documentos em Json. para um cadastro de startups temos o seguinte Json: 

```json
{
  "id": "",
  "nomeStartup": "",
  "emailResponsavel": "",
  "telefone": "",
  "cep": "",
  "modalidadeList": [],
  "imagem": "",
  "descricao": "",
  "tecnologiasUtilizadas": [],
  "anoFundacao": 0,
  "setorIndustria": "",
  "linkedin": "",
  "site": "",
  "startupImagemId": ""
}
```

### Rotas

 O endereço do backend é o seguinte: 

```json
http://localhost:5001/
```

Para acessar as rotas individualmente, podemos utilizar: 

1. **Rota de Boas-Vindas:**
    - **Endpoint:** **`/`**
    - **Método:** GET
    - **Descrição:** Retorna uma mensagem de boas-vindas ao backend do startview.
2. **Rota de Cadastro de Startup:**
    - **Endpoint:** **`/cadastraStartup`**
    - **Método:** POST
    - **Descrição:** Cadastra uma nova startup. Lê as startups do arquivo, gera um ID único, adiciona a startup à lista e atualiza o arquivo JSON.
3. **Rota de Listagem de Startups Ativas:**
    - **Endpoint:** **`/startupativas`**
    - **Método:** GET
    - **Descrição:** Retorna a lista de startups ativas lidas do arquivo "startups_aprovadas.json".
4. **Rota de Remoção de Startup Ativa:**
    - **Endpoint:** **`/startupsativas/:id`**
    - **Método:** DELETE
    - **Descrição:** Remove uma startup ativa com o ID fornecido da lista e atualiza o arquivo JSON.
5. **Rota de Listagem de Todas as Startups:**
    - **Endpoint:** **`/startupsall`**
    - **Método:** GET
    - **Descrição:** Retorna a lista de todas as startups lidas do arquivo "startups.json".
6. **Rota de Remoção de Qualquer Startup:**
    - **Endpoint:** **`/startupsall/:id`**
    - **Método:** DELETE
    - **Descrição:** Remove uma startup (ativa ou não) com o ID fornecido da lista e atualiza o arquivo JSON.
7. **Rota de Aprovação de Startup:**
    - **Endpoint:** **`/startups/aprovar/:id`**
    - **Método:** POST
    - **Descrição:** Move uma startup da lista de todas as startups para a lista de startups aprovadas. Atualiza os respectivos arquivos JSON.

### BackEnd

O backend opera de maneira simplificada, composto por dois arquivos que desempenham o papel de banco de dados. O servidor administra esses documentos da seguinte maneira: toda startup cadastrada é registrada no arquivo "startups.json", enquanto as startups aprovadas pelo administrador são armazenadas no arquivo "startups_aprovadas.json". Quando as startups são apresentadas aos usuários, são aquelas contidas na lista "startups_aprovadas
