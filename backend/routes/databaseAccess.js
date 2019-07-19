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
  TodoItem.findByIdAndRemove(req.body.id)
    .then(response => res.send(response))
    .catch(error => res.send(error));
});

router.post('/toggle', (req, res) => {
  TodoItem.findById(req.body.id)
    .then(todo => {
      todo.completed = !todo.completed;
      todo.save()
        .then(response => res.send(response))
        .catch(error => res.send(error));
    })
    .catch(error => res.send(error));

})

module.exports = router;
