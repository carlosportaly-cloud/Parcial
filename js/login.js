function ingresar(){

    const usuario = document.getElementById("usuario").value;

    const password = document.getElementById("password").value;

    if(usuario === "admin" && password === "1234"){

    window.location.href = "http://localhost:5173/";

}
else{

    alert("Usuario o contraseña incorrectos");

}

}