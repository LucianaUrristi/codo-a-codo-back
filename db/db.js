const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión: ', err);
    } else {
        console.log('Conectado a la base de datos');
    }
});

module.exports = connection;