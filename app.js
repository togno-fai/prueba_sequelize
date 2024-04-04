const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send("hi"));

app.use('/', require('./routes/routes.js'));

app.listen(PORT, () => console.log("escuchando en puerto: " + PORT));

