require('dotenv').config();
const exp = require('constants');

const path = require('path');
const express = require("express");
const app = express();


const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/fanarts', require('./routes/fan_art.router'));
app.use('/usuario', require('./routes/usuario.router'));
app.get('/', (req, res) => {
    res.send('deploy');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));




