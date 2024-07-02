require('dotenv').config();
const exp = require('constants');
// const http = require('http');
const express = require("express");
const app = express();

//const path = require('path');

const cors = require('cors');
app.use(cors());

//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/usuario', require('./routes/usuario.router'))
app.get('/', (req, res) => {
    res.send('deploy');
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


// const server = http.createServer(app);

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });






// app.use(express.static(path.join(__dirname + 'public')));


// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     const pathFile = path.join(__dirname, 'public', 'index.html');
//     const html = fs.readFileSync(pathFile);
    
    
//         res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.end(html);
// });



