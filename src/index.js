const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.unsubscribe(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(3000);

