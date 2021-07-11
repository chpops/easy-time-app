const { MongoClient } = require('mongodb');

function dbConnect(){
    const connectionString = 'mongodb+srv://admin:qwerty123321@mongodev.1kxd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    const client = new MongoClient(connectionString, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

    client.connect(err => {
    const collection = client.db("Auth").collection("Users")
        .then(() => console.log('MongoDB connection OK'))
        .catch(err => console.log(err))
    client.close();
    });
}

module.exports = dbConnect;