const express = require('express')
const app = express()
const path = require('path')

const sequelize = require('./utils/database')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))

app.use(require('./routes/stagiaires'))

void (async function(){
    try {
        await sequelize.sync()
    } catch (error) {
        throw error
    }
}())

app.listen(3000)