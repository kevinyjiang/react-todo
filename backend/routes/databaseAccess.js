const express = require('express');
const router = express.Router();

const TodoItem = require('../models/TodoItem');

router.get('/all', (req, res) => {
  TodoItem.find()
    .then(todos => res.send(todos))
    .catch(error => res.send(error));
});

router.post('/add', (req, res) => {
  const newTodo = new TodoItem({
    taskText: req.body.task
  });

  newTodo.save()
    .then(response => res.send(response))
    .catch(error => res.send(error));
});

router.post('/remove', (req, res) => {
  console.log(req.body)
  TodoItem.findByIdAndRemove(req.body.id)
    .then(response => res.send(response))
    .catch(error => res.send(error));
});

module.exports = router;
