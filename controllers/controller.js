const db = require('../db');

const getAllUser = (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, result) => {
        if (err) throw err; 
        res.json(result);
    });
};