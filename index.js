const express = require('express')
const app = express()
const port = 3001

app.get('/home', (req, res) => {
    let a = 1;
    let b = 2;
    let c = 3;
    let d = a + b + c;
    res.send('Hello World aaaA!')
})

app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`)
})