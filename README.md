# reacttodolist
To Do List em react para o trabalho de desenvolvimento web 
Alunos: Eduardo Sestren, Thais Muller, Guilherme Klosowski

Trabalho 03: React

A API desenvolvida é uma ToDoList, usada para marcar a lista de afazeres em relação a estudos, adicionando uma nova tarefa, listando as tarefas existentes no banco de dados, atualizando as tarefas conforme clica no icone da caneta, para edição e deletando a tarefa clicando no icone da lixeira para exclusão.

O servidor utilizado para a hospedagem do banco de dados é o: http://localhost:3333, podendo então acessar a lista através do./todos.

Para o desenvolvimento foi utilizado os métodos de manipulação do CRUD:
GET: Lista em tela todos as tarefas a fazer e feitas existentes no banco de dados.
POST: Adiciona na lista uma nova tarefa a ser feita.
PUT: Edita as tarefas existes, alterando o nome das mesmas baseado no id delas, selecionando o ícone de caneta ao lado da tarefa.
DELETE: Remove uma tarefa do banco de dados, clicando no ícone de lixeira ao lado da tarefa que deseja remover.

Para realizar a alteração do status, sendo uma tarefa concluída ou não, basta selecionar o marcador ao lado da tarefa em questão, mantendo as com status “false” (não concluídas) como desmarcadas (em branco) e as com status “true” (concluídas) como marcadas (em roxo).


Para verificar em vídeo como está o projeto, acesse : https://drive.google.com/file/d/1rE3upTeqIHl1HCnjxzPD8VSPscdgjetB/view
