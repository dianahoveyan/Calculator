const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));
/*app.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.send(`${__dirname}/build/index.html`)
})*/
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.listen(9090, () => {
    console.log('Application listening on port 9090!');
});
