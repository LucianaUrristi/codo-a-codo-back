const mysql = require('mysql2');
// require('dotenv').config();

// console.log('DB_HOST:', process.env.DB__HOST);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASS);
// console.log('DB_NAME:', process.env.DB_NAME);

//no puedo hacer funcionar el dotenv

const connection = mysql.createConnection({
    // host: process.env.DB__HOST,
    // user: process.env.DB__USER,
    // password: process.env.DB__PASS,
    // database: process.env.DB__DATANAME
    host: "mysql-lurristi.alwaysdata.net",
    user: "lurristi",
    password: "Lula080794",
    database: "lurristi_demon-slayer"
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión: ', err);
    } else {
        console.log('Conectado a la base de datos');
    }
});

module.exports = connection;