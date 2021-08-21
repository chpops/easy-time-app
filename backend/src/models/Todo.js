const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
        title: String,
        isCompleted: Boolean,
        list: String
    }
);

module.exports = model('todo', todoSchema, 'todos');