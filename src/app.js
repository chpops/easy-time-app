function TestFunc(){
    const mysql = require('mysql2')

    const myconnect = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'auth',
        password: 'qwerty123321'
        });

    myconnect.connect(async function(err){
        if (err) {
            return console.error('Ошибка ' + err.message);
        } else {
            console.log('Подключение к серверу MySQL успешно установлено!');
        }
    });
    
    myconnect.execute('SELECT * FROM users', async function (err, results){
        console.log(err);
        console.log(results);
    });
}