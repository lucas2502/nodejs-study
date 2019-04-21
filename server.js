const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({  extended: true }));
app.use(bodyParser.json());

const port = process.env.port || 8000;
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "WellCome!"})
});

app.use('/api', router);

app.listen(port);
console.log("iniciando o app na porta: " + port);

