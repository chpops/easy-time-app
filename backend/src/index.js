const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('../src/routes/index');

require('./database');

app.set('port', process.env.PORT || 4000)

app.use(express.json());
app.use(cors());

app.use(todoRoutes);
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server started on port', app.get('port'));