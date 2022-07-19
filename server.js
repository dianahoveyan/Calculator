const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});
app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.listen(9090, () => {
    console.log('Application listening on port 9090!');
});
