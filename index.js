const express = require('express')
const app = express()

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, './privacy.html'));
   });

app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))
