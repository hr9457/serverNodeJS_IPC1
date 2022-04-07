function entrar(){
    var usserPrueba = 'hector';

    var ussername = document.getElementById('usser').value;
    console.log(ussername);
    if(usserPrueba == ussername){
        alert('bienvenido');
        location.href = "html/home.html";
    } else {
        alert('login mal');
    }
}