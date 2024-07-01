const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-lurristi.alwaysdata.net',
    user: 'lurristi',
    password: 'Lula080794',
    database: 'lurristi_demon-slayer'
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión: ', err);
    } else {
        console.log('Conectado a la base de datos');
    }
});

module.exports = connection;