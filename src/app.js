const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Server On')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});