const express = require('express');

// Creación Del Servidor
const app = express();
const port = 3000;

console.log("Server is Running");

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});