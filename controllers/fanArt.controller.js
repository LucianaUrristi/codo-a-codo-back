const db = require('../db/db');

const index = (req, res) => {
    const sql = `
                SELECT fan_art.id AS fan_art_id, personaje.id AS personaje_id, personaje.pjnombre AS personaje, fan_art.imagen, usuario.nombre 
                FROM fan_art 
                JOIN personaje ON fan_art.personaje_id = personaje.id 
                JOIN usuario ON fan_art.usuario_id = usuario.id;
                `
    db.query(sql, (err, rows) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return res.status(500).json({ err: "Intente más tarde." });
        }
        res.json(rows);
    });
};


module.exports = {
    index,
};