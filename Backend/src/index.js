const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// creacion de la app o mi API
const app = express();




//configuraciones
app.set('port',4000);


// usando morgan para middlewares
app.use(morgan('dev')); // para poder visualizar los estados de nuestro servidor
app.use(express.json()); // para poder manjar los json
app.use(cors())




// informacion de forma general
var data = [
    {
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


//ruta para mi pokedes
app.get('/pokedex',(req,res)=>{
    let pokedex = require('./pokedex.json');
    res.send(pokedex);
});


app.get('/retornoPokemon',(req,res)=>{
    let pokedex = require('./pokedex.json');
    var nombre = 'bulbasu'
    if (pokedex[0].Nombre == nombre){
        res.send(pokedex);
    } else {
        res.send({Mensaje:"Error"});
    }
});



app.get('/ejemplo',(req,res)=>{
    var ejemplo = {
        "Usuario":"Hector",
        "Curso":"IPC1B",
        "Horaio":"jueves"
    }
    res.send(ejemplo);
})


app.get('/home',(req,res)=>{
    res.send(data);
})



app.get('/usuario',(req,res)=>{
    var db = require('./users.json');
    res.send(db);
})


// post para que el usuario nos envie informacion
app.post('/envio',(req,res)=>{
    console.log(req.body);
    var dato1 = req.body.dato1;
    var dato2 = req.body.dato2;
    var suma = dato1 + dato2;
    var respuesta = {
        titulo:"operacion",
        resultado:suma
    }
    res.send(respuesta);
})

// router mas avanzado
app.use(require('./routes/bienvenida.js'));





// inicializando mi servidor
// app.listen(4000) -> opcion 1 para iniciar el server
app.listen(app.get('port'),()=>{
    console.log('Servidor iniciado en el puerto: '+app.get('port'));
})



// correr el servidor busco la ruta del archivo index
// node src/index.js

// COMANDO PARA CORRER LA API DE EJEMPLO DEL LABORATORIO
// con nodemon cambia a npm run dev

// comando utilizados
// npm install express
// npm install morgan
// npm install nodemon -D
// npm install cors

