const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Update on Review stage: Test App on AWS - Hello World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
