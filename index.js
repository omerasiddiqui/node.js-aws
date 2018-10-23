const express = require('express')
const path = require('path');
const app = express()

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, '../current/public', 'privacy.html'));
});

app.get('donate-button', (req, res) => {
    res.sendFile(path.join(__dirname, '../current/public/assets/images/', 'paypal-button.png')
})

app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
