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
    const { id } = req.params;

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

const usuarios = (req, res) => {
    const { nombre, apellido, email, turno, edad, fanArt } = req.body;
    const sql = 'INSERT INTO usuario (nombre, apellido, email, turno, edad, fanArt) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, email, turno, edad, fanArt], (err, result) => {
        if(err){
            return res.status(500).json({err: "Intente más tarde."});
        }

        const user = {...res.body, id: result.insertId};
        res.json(user);
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, turno, edad, fanArt } = req.body;
    const sql = 'UPDATE usuario SET nombre =?, apellido =?, email =?, turno =?, edad =?, fanArt =? WHERE id =?';
    db.query(sql, [nombre, apellido, email, turno, edad, fanArt, id], (err, result) => {
        if(err){
            return res.status(500).json({err: "Intente más tardee."});
        }

        if(result.affectedRows == 0) {
            return  res.status(404).json({err: "Ninguna fila afectada. Usuario inexistente."});
        }

        const user = {...res.body, ...req.params};
        res.json(user);
    });
}

const destroy = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuario WHERE id =?';
    db.query(sql, [id], (err, result) => {
        if(err){
            return res.status(500).json({err: "Intente más tarde."});
        };

        if(result.affectedRows == 0) {
            return  res.status(404).json({err: "Ninguna fila afectada. Usuario inexistente."});
        }

        res.json({mensaje: `Usuario ${id} eliminado.`});

    });
};

module.exports = {
    index,
    show, 
    usuarios,
    update,
    destroy,
};