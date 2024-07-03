const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")

const admin = { email: "admin@admin.com", pass: "testing123", role: "admin" };

router.post('/', (req, res) => {
    const { email, password } = req.body;


    if (admin.email === email && admin.pass === password) {
        const token = jwt.sign({ role: admin.role }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });
        return res.send({ auth: true, token });
    } else {
        return res.status(400).send("Wrong credentials.");
    }
})

module.exports = router;