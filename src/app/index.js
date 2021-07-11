// const {routes} = require('./app.routing.ts');
// const {bodyParser}= require('./bodyParser.js');
const { dbConnect } = require('./dbConnection.js');

const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();
// bodyParser();
// routes(app);

app.listen(PORT, () =>{
    console.log('Example app listening at localhost:'+PORT)
})

