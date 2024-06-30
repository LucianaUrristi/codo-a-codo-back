const db = require('../db/db');

const index = (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, rows) => {
        if (err) {
            return res.status(500).json({err: "Intente más tarde"});
        } 
        res.json(rows);
    });
};

const show = (req, res) =>{
    const usuario = usuario.find((elemento) => elemento.id === req.params.id);
    const {id} = req.params;

    const sql = 'SELECT * FROM usuario WHERE id = ?';
    db.query(sql, [id], (err, rows) => {
        if (err) {
           return res.status(500).json({err: "Intente más tarde"});
        } 

        if(rows.length == 0){
            return  res.status(404).json({err: "No existe el usuario"});
        }
        res.json(rows[0]);
    });

}

module.exports = {
    index,
    show, 
};