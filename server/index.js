const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [
  {
    id: 1,
    title: "First Todo",
    description: "First Description",
  },
  {
    id: 2,
    title: "Second Todo",
    description: "Second Description",
  },
  {
    id: 3,
    title: "Third Todo",
    description: "Third Description",
  },
  {
    id: 4,
    title: "Fourth Todo",
    description: "Fourth Description",
  },
];

app.get("/", (req, res) => {
  res.send({
    myNetworks: 10,
    jobs: 10,
    messagin: 13,
    notification: 18,
  });
});

app.get("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id); // Convert the id to a number
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo) {
    res.send(todo);
  } else {
    res.status(404).send("Todo not found");
  }
});
app.get("/todos", (req, res) => {
  const id = parseInt(req.query.id); // Extract the id query parameter
  if (!id) {
    res.json(todos);
  }
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: "Todo not found" });
  }
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
