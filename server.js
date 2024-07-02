const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

function receiveUser(req, res){
    console.log("print");
    res.sendStatus(200);
}

app.use(cors());

app.post('/users', receiveUser);

app.listen(port, () => {
    console.log("Server running");
});