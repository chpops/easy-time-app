const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: String,
    isCompleted: String,
    list: String
});

module.exports = model('Todo', todoSchema, 'todos');