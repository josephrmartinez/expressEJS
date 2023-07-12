const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("here you are")
    res.render('index', { text: "world"})
})

app.get('/users', (req, res) => {
    res.send('user list')
})

app.get('/users/new', (req, res) => {
    res.send('new user')
})



app.listen(3200)

