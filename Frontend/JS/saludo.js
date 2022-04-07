
// primer funcion de agregar funcionalidad a un boton
function saludar(){
    alert("Hola mundo");
}


// segunda forma para agregar funcionalidad  a un boton 
// variable para guardar el boton
var btn = document.getElementById('btnSaludar2');
//doom
btn.addEventListener('click',function saludar2(){
    alert('hola mundo2')
})



// forma de traer informacion de una API
function getPokemons(){
    let url = 'http://localhost:4000/usuario';
    fetch(url)
    .then((res)=> res.json())
    .then((data) => {
        console.log(data)
    })
}



// otra forma de hacer un fetch con metodo post
async function suma(){
    let url = 'http://localhost:4000/envio';
    // creando un json
    var data = {
        dato1: 2,
        dato2: 3
    }
    const respuestas = await fetch(url,{
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
        'Content-Type': 'application/json'
        }
    })
    .then((res)=> res.json())
    .then((data) => {
        return data
    })
    console.log(respuestas)
}