const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log('Node Project');
});