const path = require('path');
const express = require('express');
const cors = require('cors');
const fs = require('fs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const {calculatorValue} = require('./Models/dbmodels')

app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './../build')));

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.post('/saved', async (req, res) => {
    try {
        try {
            await calculatorValue.deleteMany();
            console.log('All Data successfully deleted');
        } catch (err) {
            console.log(err);
        }
        const myAddedValue = new calculatorValue({...req.body, createdTime: Date.now()});
        const test  = await myAddedValue.save()
        // fs.writeFileSync('testFile.txt', JSON.stringify(req.body));
        // console.log("File created successfully!");
        res.sendStatus(201);
    } catch(error) {
        // console.log("Failed to create file!", error);
        console.log("unable to save to database", error);
        res.status(500).end();
    }
});

router.route("/saved").get(function(req, res) {
    calculatorValue.findOne({}, function(err, result)
    {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
        .sort({ createdTime: -1 });
});

// app.get("/saved", (req, res, next) => {
//     try {
//        const data = fs.readFileSync("testFile.txt", "utf8");
//        const dataJson = JSON.parse(data)
//         res.status(200).send(dataJson);
//     } catch(error) {
//         console.log("Failed to create file!", error);
//         res.status(500).end();
//     }
// });

app.listen(9090, async () => {
    await mongoose.connect('mongodb://localhost:27017/testTest');

    console.log('Application listening on port 9090!');
});

