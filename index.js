const express = require('express')
const app = express()
app.get('/', (req, res) =>j {
  res.send('Hello fam! What's up?')
})

app.listen(3000, () => console.log('Server running on port 3000'))