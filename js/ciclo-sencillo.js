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
    // Change the fill attribute to #ca7650 on mouseover
      k_rotor.style.transform = 'rotate(30deg)';
      rotor_aux_div.style.transform = 'rotate(30deg)';

      images.forEach((image) => {
        image.style.backgroundImage = 'url(../img/ciclo/fibra.png)';
      });

      textPathRotorElements.forEach(function(textPathRotor) {
          textPathRotor.setAttribute("fill", "#fff");
      });

      document.getElementById("ciclo_aux_fibra").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', offsetTop: -250 });

    // Actions for index 0 (fibra.png)
      cicloh2.style.color = '#cde35f';
      ciclop.style.color = '#fff';
      ciclop2.style.color = '#fff';

      slice1.style.height = "100%"
      slice2.style.height = "100%"
      slice3.style.height = "100%"
      slice1.style.backgroundColor = "#cde35f"
      slice2.style.backgroundColor = "#cde35f"
      slice3.style.backgroundColor = "#cde35f"
      slice1.style.top = "0%"
      slice2.style.top = "0%"
      slice3.style.top = "0%"

      sectionCiclo.style.backgroundColor = '#1f4a4f';
      kcircle1.style.borderColor = 'rgba(31, 74, 79)';
      kcircle1.style.opacity = '.76';
      kcircle1.style.borderWidth = '40px';

      kcircle2.style.visibility = 'visible';
      kcircle2.style.borderColor = 'rgba(31, 74, 79)';

      kcircle3.style.backgroundColor = 'transparent';
      kcircle3.style.opacity = '1';
      kcircle3.style.borderColor = 'rgba(212, 236, 107)';
      kcircle3.style.width = '82%';
      kcircle3.style.height = '82%';
      kcircle3.style.top = '9%';
      kcircle3.style.left = '9%';
      kcircle3.style.zIndex = '600';

      kcircle4.style.width = '94%';
      kcircle4.style.height = '94%';
      kcircle4.style.top = '3%';
      kcircle4.style.left = '3%';
      kcircle4.style.visibility = 'visible';
      kcircle4.style.borderColor = 'rgba(212,236,107)';

      cuadro1.style.visibility = 'visible';
      cuadro2.style.visibility = 'visible';
});

// Diseño
var textPathDis = document.getElementById("textpath-dis");

document.getElementById("aux-dis").addEventListener("click", function() {
    // Change the fill attribute to #ca7650 on mouseover
      k_rotor.style.transform = 'rotate(-30deg)';
      rotor_aux_div.style.transform = 'rotate(-30deg)';

      images.forEach((image) => {
        image.style.backgroundImage = 'url(../img/ciclo/diseño.png)';
      });

      textPathRotorElements.forEach(function(textPathRotor) {
          textPathRotor.setAttribute("fill", "#fff");
      });

    // Scroll to the element
      document.getElementById("ciclo_aux_dis").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', offsetTop: -250 });

    // Actions for index 1 (diseño.png)
      cicloh2.style.color = '#cde35f';
      ciclop.style.color = '#fff';
      ciclop2.style.color = '#fff';

      slice1.style.height = "95%"
      slice2.style.height = "95%"
      slice3.style.height = "95%"
      slice1.style.top = "2.5%"
      slice2.style.top = "2.5%"
      slice3.style.top = "2.5%"
      slice1.style.backgroundColor = "#cde35f"
      slice2.style.backgroundColor = "#cde35f"
      slice3.style.backgroundColor = "#cde35f"

      sectionCiclo.style.backgroundColor = '#4444db';
      kcircle1.style.borderColor = 'rgba(212, 236, 107)';
      kcircle1.style.opacity = '.36';
      kcircle1.style.borderWidth = '35px';


      kcircle2.style.visibility = 'hidden';

      kcircle3.style.backgroundColor = 'rgba(212, 236, 107)';
      kcircle3.style.opacity = '.6';
      kcircle3.style.borderColor = 'rgba(212, 236, 107)';
      kcircle3.style.width = '88%';
      kcircle3.style.height = '88%';
      kcircle3.style.top = '6%';
      kcircle3.style.left = '6%';
      kcircle3.style.zIndex = '0';



      kcircle4.style.width = '90%';
      kcircle4.style.height = '90%';
      kcircle4.style.top = '5%';
      kcircle4.style.left = '5%';
      kcircle4.style.borderColor = 'rgba(212,236,107)';

      cuadro1.style.visibility = 'hidden';
      cuadro2.style.visibility = 'hidden';
});

// Manufactura
var textPathManufactura = document.getElementById("textpath-manufactura");

// Add a mouseout event listener to the element with the ID "aux-fibra"
document.getElementById("aux-manufactura").addEventListener("click", function() {
    // Actions for index 2 (manufactura.png)
      k_rotor.style.transform = 'rotate(-88deg)';
      rotor_aux_div.style.transform = 'rotate(-88deg)';

      textPathRotorElements.forEach(function(textPathRotor) {
          textPathRotor.setAttribute("fill", "#2c4c51");
      });

      images.forEach((image) => {
        image.style.backgroundImage = 'url(../img/ciclo/manufactura.png)';
      });

      document.getElementById("ciclo_aux_manufactura").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', offsetTop: -250 });

      cicloh2.style.color = '#1f4a4f';
      ciclop.style.color = '#1f4a4f';
      ciclop2.style.color = '#1f4a4f';

      slice1.style.height = "95%"
      slice2.style.height = "95%"
      slice3.style.height = "95%"
      slice1.style.top = "2.5%"
      slice2.style.top = "2.5%"
      slice3.style.top = "2.5%"
      slice1.style.backgroundColor = "rgba(44,76,81,.36)"
      slice2.style.backgroundColor = "rgba(44,76,81,.36)"
      slice3.style.backgroundColor = "rgba(44,76,81,.36)"

      // prevBtnImg.src="./img/ciclo/prev-azul.png"
      // nextBtnImg.src="./img/ciclo/next-azul.png"

      sectionCiclo.style.backgroundColor = '#d4ec6b';
      kcircle1.style.borderColor = '#1f4a4f';
      kcircle1.style.opacity = '.36';
      kcircle1.style.borderWidth = '1px';

      kcircle2.style.visibility = 'hidden';

      kcircle3.style.backgroundColor = 'rgba(31, 74, 79)';
      kcircle3.style.opacity = '.4';
      kcircle3.style.borderColor = 'rgba(212, 236, 107)';
      kcircle3.style.width = '88%';
      kcircle3.style.height = '88%';
      kcircle3.style.top = '6%';
      kcircle3.style.left = '6%';
      kcircle3.style.zIndex = '0';

      kcircle4.style.width = '86%';
      kcircle4.style.height = '86%';
      kcircle4.style.top = '7%';
      kcircle4.style.left = '7%';
      kcircle4.style.borderColor = 'rgba(31,74,79,.4)';


      cuadro1.style.visibility = 'hidden';
      cuadro2.style.visibility = 'hidden';
});

// Logistica
var textPathLogistica = document.getElementById("textpath-logistica");

// Add a mouseout event listener to the element with the ID "aux-fibra"
document.getElementById("aux-logistica").addEventListener("click", function() {
    // k_rotor.style.transform = 'rotate(-142deg)';
    // rotor_aux_div.style.transform = 'rotate(-142deg)';

    // images.forEach((image) => {
    //     image.style.backgroundImage = 'url(../img/ciclo/logistica.png)';
    //   });

    // textPathRotorElements.forEach(function(textPathRotor) {
    //       textPathRotor.setAttribute("fill", "#2c4c51");
    //   });

    document.getElementById("ciclo_aux_logistica").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', offsetTop: -250 });

    // cicloh2.style.color = '#1f4a4f';
    // ciclop.style.color = '#1f4a4f';
    // ciclop2.style.color = '#1f4a4f';

    // slice1.style.height = "95%"
    // slice2.style.height = "95%"
    // slice3.style.height = "95%"
    // slice1.style.top = "2.5%"
    // slice2.style.top = "2.5%"
    // slice3.style.top = "2.5%"
    // slice1.style.backgroundColor = "rgba(44,76,81,.36)"
    // slice2.style.backgroundColor = "rgba(44,76,81,.36)"
    // slice3.style.backgroundColor = "rgba(44,76,81,.36)"


    // //  prevBtnImg.src="./img/ciclo/prev-azul.png"
    // // nextBtnImg.src="./img/ciclo/next-azul.png"

    // sectionCiclo.style.backgroundColor = '#ddd9d6';
    // kcircle1.style.borderColor = 'rgba(68,68,219)';
    // kcircle1.style.opacity = '.36';
    // kcircle1.style.borderWidth = '35px';

    // kcircle2.style.visibility = 'hidden';

    // kcircle3.style.backgroundColor = 'rgba(68, 68, 219)';
    // kcircle3.style.opacity = '.8';
    // kcircle3.style.borderColor = 'rgba(68, 68, 219)';
    // kcircle3.style.width = '88%';
    // kcircle3.style.height = '88%';
    // kcircle3.style.top = '6%';
    // kcircle3.style.left = '6%';
    // kcircle3.style.zIndex = '0';

    // kcircle4.style.width = '90%';
    // kcircle4.style.height = '90%';
    // kcircle4.style.top = '5%';
    // kcircle4.style.left = '5%';
    // kcircle4.style.visibility = 'hidden';

    // cuadro1.style.visibility = 'hidden';
    // cuadro2.style.visibility = 'hidden';
});

// Uso
var textPathUso = document.getElementById("textpath-uso");

// Add a mouseout event listener to the element with the ID "aux-fibra"
document.getElementById("aux-uso").addEventListener("click", function() {
    k_rotor.style.transform = 'rotate(-210deg)';
    rotor_aux_div.style.transform = 'rotate(-210deg)';

    images.forEach((image) => {
        image.style.backgroundImage = 'url(../img/ciclo/uso.png)';
      });

    textPathRotorElements.forEach(function(textPathRotor) {
          textPathRotor.setAttribute("fill", "#fff");
      });

    document.getElementById("ciclo_aux_uso").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', offsetTop: -250 });

    cicloh2.style.color = '#cde35f';
    ciclop.style.color = '#fff';
    ciclop2.style.color = '#fff';

    slice1.style.height = "95%"
    slice2.style.height = "95%"
    slice3.style.height = "95%"
    slice1.style.top = "2.5%"
    slice2.style.top = "2.5%"
    slice3.style.top = "2.5%"
    slice1.style.backgroundColor = "rgba(44,76,81,.36)"
    slice2.style.backgroundColor = "rgba(44,76,81,.36)"
    slice3.style.backgroundColor = "rgba(44,76,81,.36)"


    //  prevBtnImg.src="./img/ciclo/prev.png"
    // nextBtnImg.src="./img/ciclo/next.png"

    sectionCiclo.style.backgroundColor = '#df7e57';
    kcircle1.style.borderColor = 'rgba(212, 236, 107)';
    kcircle1.style.opacity = '.36';
    kcircle1.style.borderWidth = '35px';

    kcircle2.style.visibility = 'hidden';

    kcircle3.style.backgroundColor = 'rgba(212, 236, 107)';
    kcircle3.style.opacity = '.6';
    kcircle3.style.borderColor = 'rgba(212, 236, 107)';
    kcircle3.style.width = '88%';
    kcircle3.style.height = '88%';
    kcircle3.style.top = '6%';
    kcircle3.style.left = '6%';
    kcircle3.style.zIndex = '0';

    kcircle4.style.width = '86%';
    kcircle4.style.height = '86%';
    kcircle4.style.top = '7%';
    kcircle4.style.left = '7%';
    kcircle4.style.visibility = 'visible';
    kcircle4.style.borderColor = 'rgba(44, 76, 81,.36)';


    cuadro1.style.visibility = 'hidden';
    cuadro2.style.visibility = 'hidden';
});

// Nueva Vida
var textPathNuevaVida = document.getElementById("textpath-nuevavida");

// Add a mouseover event listener to the element with the ID "aux-fibra"
document.getElementById("aux-nuevavida").addEventListener("click", function() {
    k_rotor.style.transform = 'rotate(-265deg)';
    rotor_aux_div.style.transform = 'rotate(-265deg)';

    images.forEach((image) => {
        image.style.backgroundImage = 'url(../img/ciclo/nueva_vida.png)';
      });

    textPathRotorElements.forEach(function(textPathRotor) {
          textPathRotor.setAttribute("fill", "#fff");
      });

    document.getElementById("ciclo_aux_nuevavida").scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center', offsetTop: -250 });

    cicloh2.style.color = '#cde35f';
    ciclop.style.color = '#fff';
    ciclop2.style.color = '#fff';

    slice1.style.height = "95%"
    slice2.style.height = "95%"
    slice3.style.height = "95%"
    slice1.style.top = "2.5%"
    slice2.style.top = "2.5%"
    slice3.style.top = "2.5%"
    slice1.style.backgroundColor = "rgba(44,76,81,.36)"
    slice2.style.backgroundColor = "rgba(44,76,81,.36)"
    slice3.style.backgroundColor = "rgba(44,76,81,.36)"


    //  prevBtnImg.src="./img/ciclo/prev.png"
    // nextBtnImg.src="./img/ciclo/next.png"

    sectionCiclo.style.backgroundColor = '#5a75cd';
    kcircle1.style.borderColor = 'rgba(68,68,219)';
    kcircle1.style.opacity = '.36';
     kcircle1.style.borderWidth = '35px';

    kcircle2.style.visibility = 'hidden';

    kcircle3.style.backgroundColor = 'rgba(68, 68, 219)';
    kcircle3.style.opacity = '.7';
    kcircle3.style.borderColor = 'transparent';
    kcircle3.style.width = '88%';
    kcircle3.style.height = '88%';
    kcircle3.style.top = '6%';
    kcircle3.style.left = '6%';
    kcircle3.style.zIndex = '0';

    kcircle4.style.width = '86%';
    kcircle4.style.height = '86%';
    kcircle4.style.top = '7%';
    kcircle4.style.left = '7%';
    kcircle4.style.visibility = 'visible';
    kcircle4.style.borderColor = 'rgba(44, 76, 81)';


    cuadro1.style.visibility = 'hidden';
    cuadro2.style.visibility = 'hidden';
});

})
