const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// creacion de la app
const app = express();




//configuraciones
app.set('port',4000);


// usando morgan para middlewares
app.use(morgan('dev')); // para poder visualizar los estados de nuestro servidor
app.use(express.json()); // para poder manjar los json




// informacion de forma general
var data = [{
    Titulo: 'Saludo',
    Mensaje:'Bienvenidos a la pagina principal',
    Tipo:'string' 
},
{
    Titulo: 'Saludo2',
    Mensaje:'Bienvenida2',
    Tipo:'string'
}
];






//routes
app.get('/',(req,res)=>{
    res.send('Hola mundo desde mi primer Backend con NodeJS');
})


app.get('/home',(req,res)=>{
    res.send(data);
})



app.get('/usuario',(req,res)=>{
    var db = require('./users.json');
    res.send(db);
})


app.post('/envio',(req,res)=>{
    var dato1 = req.body.dato1;
    var dato2 = req.body.dato2;
    var suma = dato1 + dato2;
    var respuesta = {
        titulo:"operacion",
        resultado:suma
    }
    res.send(respuesta);
})


app.use(require('./routes/bienvenida.js'));





// inicializando mi servidor
// app.listen(4000) -> opcion 1 para iniciar el server
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: '+app.get('port'));
})



// correr el servidor busco la ruta del archivo index
// node src/index.js

// con nodemon cambia a npm run dev

// comando utilizados
// npm install express
// npm install morgan
// npm install nodemon -D
// npm install cors

