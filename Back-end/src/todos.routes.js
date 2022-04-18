const { response } = require("express");
const express = require("express");

const allTodos = [{ nome: "aaaa", status: false }];
const todosRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//Create
todosRoutes.post("/todos", async (request, response) => {
    const { name } = request.body;
    const todo = await prisma.todo.create({
        data: {
            name,
        },
    });
    return response.status(201).json(todo);
});
//Read
todosRoutes.get("/todos", async (request, response) => {
    const todos = await prisma.todo.findMany();
    return response.status(200).json(todos);
});
//Update
todosRoutes.put("/todos", async (request, response) => {
    const { name, id, status } = request.body

    if (!id) {
        return response.status(400).json("É necessário informar um ID");
    }

    const todoExist = await prisma.todo.findUnique({ where: { id } });

    if (!todoExist) {
        return response.status(404).json("A ToDo não existe");
    }

    const todo = await prisma.todo.update({
        where: {
            id,
        },
        data: {
            name,
            status,
        }
    });

    return response.status(200).json(todo);
});
//Delete
todosRoutes.delete("/todos/:id", async (request, response) => {
    const { id } = request.params;

    const intId = parseInt(id);

    if (!intId) {
        return response.status(400).json("É necessário informar um ID");
    }

    const todoExist = await prisma.todo.findUnique({ where: { id: intId } });

    if (!todoExist) {
        return response.status(404).json("A ToDo não existe");
    }

    await prisma.todo.delete({ where: { id: intId } });

    return response.status(200).send();
})

module.exports = todosRoutes;
