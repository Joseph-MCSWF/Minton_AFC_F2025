//Foundation

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Route handlers
app.get('/', (req, res) => {
    res.send('Hello World!');
})

//Listener

app.listen(port, () => {
    console.log(`Express server is running on port ${port}.`);
})