const express = require('express');

const server = express();

server.use(express.json());

const Projects = [];
let numbersOfRequest = 0;

// middleware para checagem de existencia de projetos
function checkProjectExists(require, response, next) {

  const { id } = require.params;

  const project = Projects.find( params => params.id == id );

  if(!project) {

    return response.status(400).json({ error: 'User does not exists' });
  }

  return next();
}


// // middleware para contagem de requesições
function countRequestions(require, response, next) {

  numbersOfRequest++;

  console.log(`Number of requests is ${numbersOfRequest}`);

  return next();
}

server.use(countRequestions);


server.get('/projects',(require ,response) => {
  return response.json(Projects);
});

// criação do projeto
server.post('/projects', (require, response) => {

  const { id, title } = require.body;

  const project = {
    id,
    title,
    tasks: []
  };

  Projects.push(project);

  return response.json(project);

});

// alteração de título de projeto
server.put('/projects/:id', checkProjectExists,(require, response) => {

  const { id } = require.params;
  const { title } = require.body;

  const project = Projects.find( params => params.id == id );

  project.title = title;

  return response.json(project);
    
});

// adicionar uma nova tarefa
server.post('/projects/:id/tasks', checkProjectExists, (require, response) => {

  const { id } = require.params;
  const { title } = require.body;

  const project = Projects.find( params => params.id == id );

  Projects.tasks.push(title);
  return response.json(project);
});

// deletar projeto
server.delete('/projects/:id', checkProjectExists, (require, response) => {

  const { id } = require.params;

  const projectIndex = Projects.findIndex( params => params.id == id );

  Projects.splice(projectIndex, 1);

  return response.send();
});

server.listen(3000);
