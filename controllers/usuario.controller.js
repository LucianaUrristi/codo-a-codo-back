const db = require('../db/db');

const index = (req, res) => {
    const sql = 'SELECT * FROM usuario';
    db.query(sql, (err, rows) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return res.status(500).json({ err: "Intente más tarde." });
        }
        res.json(rows);
    });
};

const show = (req, res) => {
    const { id } = req.params;

    //const sql = 'SELECT * FROM usuario WHERE id = ?';

    const sql = `
        SELECT usuario.*, fan_art.personaje_id, fan_art.fecha, fan_art.imagen
        FROM usuario
        LEFT JOIN fan_art ON usuario.id = fan_art.usuario_id
        LEFT JOIN personaje ON fan_art.personaje_id = personaje.id
        WHERE usuario.id = ?
    `;
    db.query(sql, [id], (err, rows) => {
        if (err) {
            return res.status(500).json({ err: "Intente más tarde." });
        }

        if (rows.length == 0) {
            return res.status(404).json({ err: "No existe el usuario" });
        }
        res.json(rows[0]);
    });
}

const usuarios = (req, res) => {
    console.log(req.file); //para ver caracteristicas de las imagenes que se suben
    const { nombre, apellido, email, turno, edad, fanArt } = req.body;
    const sql = 'INSERT INTO usuario (nombre, apellido, email, turno, edad, fanArt) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [nombre, apellido, email, turno, edad, fanArt], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ err: "Intente más tarde." });
        }

        const user = { ...res.body, id: result.insertId };
        //res.json(user);
        if (fanArt) {
            // FALTA AGREGAR QUE SEGUN EL NOMBRE DE LA IMAGEN ASIGNE EL ID DE  DE LA TABLA PERSONAJE
            const { personaje_id } = req.body;

            let currentDate = new Date();

            let year = currentDate.getFullYear();   // Get the 4-digit year (e.g., 2024)
            let month = currentDate.getMonth() + 1; // Get the month (0-11, add 1 to get 1-12)
            let day = currentDate.getDate();        // Get the day of the month (1-31)
            
            let formattedDate = `${year}-${month}-${day}`;

            const sqlFanArt = 'INSERT INTO fan_art (usuario_id, personaje_id, fecha, imagen) VALUES (?, ?, ?, ?)';
            db.query(sqlFanArt, [result.insertId, personaje_id, formattedDate, req.file.filename], (err, resultFanArt) => {
                if (err) {
                    console.error('Error al insertar fanArt:', err);
                    return res.status(500).json({ err: "Error al insertar fanArt" });
                }
                res.json(user);
            });
        } else {
            res.json(user);
        }
    });
};

const update = (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email, turno, edad, fanArt } = req.body;
    const sql = 'UPDATE usuario SET nombre =?, apellido =?, email =?, turno =?, edad =?, fanArt =? WHERE id =?';
    db.query(sql, [nombre, apellido, email, turno, edad, fanArt, id], (err, result) => {
        if (err) {
            return res.status(500).json({ err: "Intente más tardee." });
        }

        if (result.affectedRows == 0) {
            return res.status(404).json({ err: "Ninguna fila afectada. Usuario inexistente." });
        }

        const user = { ...res.body, ...req.params };
        res.json(user);
    });
}

const destroy = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM usuario WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ err: "Intente más tarde." });
        };

        if (result.affectedRows == 0) {
            return res.status(404).json({ err: "Ninguna fila afectada. Usuario inexistente." });
        }

        res.json({ mensaje: `Usuario ${id} eliminado.` });

    });
};

module.exports = {
    index,
    show,
    usuarios,
    update,
    destroy
};