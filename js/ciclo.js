document.addEventListener("DOMContentLoaded", function () {

const images = document.querySelectorAll('.image');

const cicloh2 = document.getElementById('cicloh2');
const ciclop = document.getElementById('ciclop');
const ciclop2 = document.getElementById('ciclop2');
const sectionCiclo = document.getElementById('section_ciclo');
const kcircle1 = document.getElementById('k_circle_1');
const kcircle2 = document.getElementById('k_circle_2');
const kcircle3 = document.getElementById('k_circle_3');
const kcircle4 = document.getElementById('k_circle_4');
const cuadro1 = document.getElementById('cuadro1');
const cuadro2 = document.getElementById('cuadro2');
const slice1 = document.getElementById('slice1');
const slice2 = document.getElementById('slice2');
const slice3 = document.getElementById('slice3');
const slice = document.querySelectorAll('.slice');
const k_rotor = document.getElementById('k_rotor');
const rotor_aux_div = document.getElementById('rotor_aux_div');
// Fibra
var textPathRotorElements = document.querySelectorAll(".textPath-rotor");

document.getElementById("aux-fibra").addEventListener("click", function() {
    
      var offsetFibra = -410; // Adjust this value based on your requirement
      var targetScrollPositionFibra = document.getElementById("ciclo_aux_fibra").getBoundingClientRect().top + window.scrollY + offsetFibra;

      window.scrollTo({ top: targetScrollPositionFibra, behavior: 'smooth' });

   
});

// Diseño
var textPathDis = document.getElementById("textpath-dis");

document.getElementById("aux-dis").addEventListener("click", function() {

      var offsetDis = -410; // Adjust this value based on your requirement
      var targetScrollPositionDis = document.getElementById("ciclo_aux_dis").getBoundingClientRect().top + window.scrollY + offsetDis;

      window.scrollTo({ top: targetScrollPositionDis, behavior: 'smooth' });

});

// Manufactura
var textPathManufactura = document.getElementById("textpath-manufactura");

// Add a mouseout event listener to the element with the ID "aux-fibra"
document.getElementById("aux-manufactura").addEventListener("click", function() {
    

      var offsetMan = -410; // Adjust this value based on your requirement
      var targetScrollPositionMan = document.getElementById("ciclo_aux_manufactura").getBoundingClientRect().top + window.scrollY + offsetMan;

      window.scrollTo({ top: targetScrollPositionMan, behavior: 'smooth' });


});

// Logistica
var textPathLogistica = document.getElementById("textpath-logistica");

// Add a mouseout event listener to the element with the ID "aux-fibra"
document.getElementById("aux-logistica").addEventListener("click", function() {
   
    var offsetLogistica = -410; // Adjust this value based on your requirement
    var targetScrollPositionLogistica = document.getElementById("ciclo_aux_logistica").getBoundingClientRect().top + window.scrollY + offsetLogistica;

    window.scrollTo({ top: targetScrollPositionLogistica, behavior: 'smooth' });

   
});

// Uso
var textPathUso = document.getElementById("textpath-uso");

// Add a mouseout event listener to the element with the ID "aux-fibra"
document.getElementById("aux-uso").addEventListener("click", function() {
   

    var offsetUso = -410; // Adjust this value based on your requirement
    var targetScrollPositionUso = document.getElementById("ciclo_aux_uso").getBoundingClientRect().top + window.scrollY + offsetUso;

    window.scrollTo({ top: targetScrollPositionUso, behavior: 'smooth' });


    
});

// Nueva Vida
var textPathNuevaVida = document.getElementById("textpath-nuevavida");

// Add a mouseover event listener to the element with the ID "aux-fibra"
document.getElementById("aux-nuevavida").addEventListener("click", function() {
  

    var offsetNuevaVida = -410; // Adjust this value based on your requirement
    var targetScrollPositiotNuevaVida = document.getElementById("ciclo_aux_nuevavida").getBoundingClientRect().top + window.scrollY + offsetNuevaVida;

    window.scrollTo({ top: targetScrollPositiotNuevaVida, behavior: 'smooth' });


   
});

})
