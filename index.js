const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send('deploy');
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// const path = require('path');
// app.use(express.static(path.join(__dirname + 'public')));


// const fs = require('fs');

// const server = http.createServer((req, res) =>{
//     const pathFile = path.join(__dirname, 'public', 'index.html');
//     const html = fs.readFileSync(pathFile);
    
    
//         res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.end(html);
// });



