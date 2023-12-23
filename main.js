const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan');
const cors = require('cors')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(cors());
app.use(morgan('dev'))

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', require('./router'))
app.use(express.static(path.join(__dirname,'public')));


app.listen(process.env.PORT || 3000, () =>{
    console.log('Conexión exitosa!')
    console.log('Servidor activo en http://localhost:3000')
})
