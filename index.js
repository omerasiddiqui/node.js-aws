const express = require('express')
const path = require('path');
const app = express()

app.get('/privacy', (req, res) => {
    res.send('<h1>Privacy Policy</h1>');
});

app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
