var express = require('express')
var app = express()
var port = 3000

//Setting view Engine
app.set('view engine', 'ejs');

//Define handlers in considering Middlewares

//1.Homepage
app.get('/', (req, res) => {
    res.render('index')
})

//2. 404 page
//Use Method run on every type of Request including post 
app.use((req, res) => {
    res.status(404).render('404')
})

app.listen(port, () => console.log(`app listening on port ${port}!`))