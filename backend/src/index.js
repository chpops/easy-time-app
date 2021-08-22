const express = require('express');
const cors = require('cors');
const app = express();
const todoRoutes = require('../src/routes/index');

require('./database');

app.set('port', process.env.PORT || 4000)

app.use(todoRoutes);
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));