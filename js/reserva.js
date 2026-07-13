
const usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario){

    document.getElementById("nombre").value = usuario.nombre;

    document.getElementById("correo").value = usuario.correo;

    document.getElementById("telefono").value = usuario.telefono;

}




// ============================
// BOTONES
// ============================

const btnFecha = document.getElementById("btnFecha");
const btnHora = document.getElementById("btnHora");
const btnMesa = document.getElementById("btnMesa");
const btnPersonas = document.getElementById("btnPersonas");

// ============================
// MODALES
// ============================

const modalFecha = document.getElementById("modalFecha");
const modalHora = document.getElementById("modalHora");
const modalMesa = document.getElementById("modalMesa");
const modalPersonas = document.getElementById("modalPersonas");

// ============================
// ABRIR MODALES
// ============================

btnFecha.onclick = () => {

    modalFecha.style.display = "flex";

}

btnHora.onclick = () => {

    modalHora.style.display = "flex";

}

btnMesa.onclick = () => {

    modalMesa.style.display = "flex";

}

btnPersonas.onclick = () => {

    modalPersonas.style.display = "flex";

}

// ============================
// CERRAR CON LA X
// ============================

document.querySelectorAll(".cerrar").forEach((cerrar)=>{

    cerrar.onclick = function(){

        this.parentElement.parentElement.style.display="none";

    }

});

// ============================
// CERRAR AL HACER CLICK AFUERA
// ============================

window.onclick = function(event){

    if(event.target==modalFecha){

        modalFecha.style.display="none";

    }

    if(event.target==modalHora){

        modalHora.style.display="none";

    }

    if(event.target==modalMesa){

        modalMesa.style.display="none";

    }

    if(event.target==modalPersonas){

        modalPersonas.style.display="none";

    }

}


// ============================
// SELECCIONAR HORA
// ============================
document.querySelectorAll(".opcionHora").forEach(hora => {

    hora.onclick = function(){

        btnHora.innerHTML = this.innerHTML;

        modalHora.style.display = "none";

    }

});

document.querySelectorAll(".dia").forEach(dia=>{

    dia.onclick=function(){

        btnFecha.innerHTML=this.innerHTML + "/07/2026";

        modalFecha.style.display="none";

    }

});
// ============================
// SELECCIONAR MESA
// ============================

document.querySelectorAll(".disponible").forEach(mesa=>{

    mesa.onclick=function(){

        btnMesa.innerHTML=this.innerHTML;

        modalMesa.style.display="none";

    }

});

// ============================
// SELECCIONAR PERSONAS
// ============================

document.querySelectorAll(".persona").forEach(persona=>{

    persona.onclick=function(){

        btnPersonas.innerHTML=this.innerHTML + " Persona(s)";

        modalPersonas.style.display="none";

    }
    // ============================
// VALIDAR RESERVA
// ============================

const reservar=document.getElementById("btnReservar");

reservar.onclick=function(){

    if(

        btnFecha.innerHTML=="Seleccionar Fecha" ||

        btnHora.innerHTML=="Seleccionar Hora" ||

        btnMesa.innerHTML=="Seleccionar Mesa" ||

        btnPersonas.innerHTML=="Seleccionar Personas"

    ){

        alert("⚠️ Debe completar todos los datos de la reserva.");

        return;

    }

    //=============================
// VALIDAR Y GUARDAR RESERVA
//=============================

const reservar = document.getElementById("btnReservar");

reservar.onclick = function(){

    if(

        btnFecha.innerHTML=="Seleccionar Fecha" ||

        btnHora.innerHTML=="Seleccionar Hora" ||

        btnMesa.innerHTML=="Seleccionar Mesa" ||

        btnPersonas.innerHTML=="Seleccionar Personas"

    ){

        alert("⚠️ Debe completar todos los datos de la reserva.");

        return;

    }

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const reserva = {

        nombre: usuario.nombre,

        correo: usuario.correo,

        telefono: usuario.telefono,

        fecha: btnFecha.innerHTML,

        hora: btnHora.innerHTML,

        mesa: btnMesa.innerHTML,

        personas: btnPersonas.innerHTML

    };

    localStorage.setItem("reserva", JSON.stringify(reserva));

    window.location.href="detalle.html";

}

    // Más adelante abriremos detalle.html
    // window.location.href="detalle.html";

}


});

