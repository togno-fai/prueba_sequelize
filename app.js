const express = require('express');
const PORT = 5000;

app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send("hi"));

app.use('/', require('./routes/routes.js'));

app.listen(PORT, () => console.log("escuchando en puerto: " + PORT));

