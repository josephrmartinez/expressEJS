const express = require("express")
const router = express.Router()



router.use(logger)

router.get('/', (req, res) => {
    res.send('user list')
})

router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({name: req.body.firstName, city: "None"})
        res.redirect(`/users/${users.length - 1}`)
    }
    console.log(req.body.firstName)
    res.send("Hi")
})


const users = [{name: "Joseph", city: "New York"}, {name: "Yuval", city: "Rome"}]

router
    .route('/:id')
    .get((req, res) => {
        res.send(`User: ${userInfo.name}  City: ${userInfo.city}`)
    })
    .put((req, res) => {
        res.send(`Update user: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User: ${req.params.id}`)
    })

router.param("id", (req, res, next, id) => {
    userInfo = users[id]
    next()
})


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = router