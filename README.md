
   
<p align="center">
  <img width="460" height="300" src="https://rocketseat.com.br/static/images/update/melhores-tecnologias.svg">
</p>   
 
 ## :rocket: **Sobre o desafio**
Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### **Rotas:** 
*  ``POST / projects: `` A rota deve receber id e title dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: ```{ id: "1", title: 'Novo projeto', tasks: [] };``` Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.


* ``GET / projects:`` Rota que lista todos projetos e suas tarefas;

* ```PUT / projects/``` 🆔 A rota deve alterar apenas o título do projeto com o id presente nos parâmetros da rota;

* ``DELETE / projects/`` 🆔 A rota deve deletar o projeto com o id presente nos parâmetros da rota;

* ``POST / projects/:id/tasks:`` A rota deve receber um campo title e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

### **Exemplo**
Se eu chamar a rota POST /projects repassando ```{ id: 1, title: 'Novo projeto' }``` e a rota ``POST /projects/1/tasks`` com ```{ title: 'Nova tarefa' },```  meu array de projetos deve ficar assim:


```
[

{
   id: "1",
   title: "Novo projeto",
   tasks: ["Nova tarefa"]
 }
];
```

### **Middlewares**
* Criação de um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir ele ira retorne um erro, caso contrário permita a requisição continuar normalmente;

* Criação de um middleware global chamado em todas requisições que imprime (console.log) uma contagem de quantas requisições foram feitas na aplicação até então;

 ### **📝 Licença**
Esse projeto está sob a licença MIT.
