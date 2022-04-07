const { Router } = require('express');
const router = Router();



router.get('/prueba',(req,res)=>{
    var respuesta = {
        Mensaje:"Hola mundo"
    }
    res.send(respuesta);
});


module.exports = router;