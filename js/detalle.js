const reserva = JSON.parse(localStorage.getItem("reserva"));

document.getElementById("nombre").innerHTML = reserva.nombre;
document.getElementById("correo").innerHTML = reserva.correo;
document.getElementById("telefono").innerHTML = reserva.telefono;
document.getElementById("fecha").innerHTML = reserva.fecha;
document.getElementById("hora").innerHTML = reserva.hora;
document.getElementById("mesa").innerHTML = reserva.mesa;
document.getElementById("personas").innerHTML = reserva.personas;