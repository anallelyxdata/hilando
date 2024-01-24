function handleScroll() {
  const portada_pregunta = document.getElementById('portada_pregunta_sticky');
  const portada_preguntaBounding = portada_pregunta.getBoundingClientRect();
  const gota1 = document.getElementById('gota1');
  const gotaI1 = document.getElementById('gotaI1');
  const gotaI2 = document.getElementById('gotaI2');

  const windowHeight = window.innerHeight;

  // Calculate the bottom position of the element
  const portada_preguntaBottomPosition = portada_preguntaBounding.bottom;

  // Check if the bottom position is within the bottom 10% of the viewport
  if (portada_preguntaBottomPosition <= windowHeight * 0.7) {
    // Move the element to the fixed position at the bottom
    gota1.style.position = "fixed";
    gota1.style.bottom = "15%";
    gotaI1.style.display = "block";
    gota1.style.transform = "scale(1) translateX(0)"
    document.querySelector('.portada_pregunta-botones').style.display = "flex";
  } else {
    // Restore the absolute position
    gota1.style.position = "absolute";
    gotaI1.style.display = "block";
    gota1.style.bottom = "15%";
    document.querySelector('.portada_pregunta-botones').style.display = "none";
  }

  const planetaBallena = document.querySelector('.intro1_planeta');
  const planetaBallenaBounding = planetaBallena.getBoundingClientRect();
  const planetaBallenaBottomPosition = planetaBallenaBounding.bottom;

  // Check if the bottom position of planetaBallena is within the bottom 10% of the viewport
  if (planetaBallenaBottomPosition <= windowHeight * 1.11) {
    // Move planetaBallena to the fixed position at the bottom
      gota1.style.position = "absolute";
      gotaI1.style.display = "block";
  } else {
      gotaI1.style.display = "none";
  }

  // Restore the absolute position for planetaBallena
    const intro2Planeta = document.querySelector('.intro2_planeta');
    const intro2PlanetaBounding = intro2Planeta.getBoundingClientRect();
    const intro2PlanetaBottomPosition = intro2PlanetaBounding.bottom;

    // Check if the bottom position of intro2Planeta is within the bottom 10% of the viewport
    if (intro2PlanetaBottomPosition <= windowHeight * 2) {
        gota1.style.position = "fixed";
        gota1.style.bottom = "55%";
        gota1.style.transform = "scale(5.9) translateX(-5%)"
        gotaI1.style.display = "none";
        // aqui se debe hacer grande
    } else {
    }

    // Check if the bottom position of planetaBallena is within the bottom 10% of the viewport
    if (intro2PlanetaBottomPosition <= windowHeight * 1.3) {
      // Move planetaBallena to the fixed position at the bottom
        gota1.style.position = "absolute";
        gotaI2.style.display = "block";
    } else {
      gotaI2.style.display = "none";
    }
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();

// EFECTO DE QUE LA GOTA SE HACE GRANDE 

// var leftItem = document.getElementById('gota2');

// // Throttle function
// var throttle = function (type, name, obj) {
//   var obj = obj || window;
//   var running = false;
//   var func = function () {
//     if (running) {
//       return;
//     }
//     running = true;
//     requestAnimationFrame(function () {
//       obj.dispatchEvent(new CustomEvent(name));
//       running = false;
//     });
//   };
//   obj.addEventListener(type, func);
// };

// throttle("scroll", "optimizedScroll");

// // Your existing logic to start the animation when scrolling
// window.addEventListener("optimizedScroll", function () {
//   const targetSticky = document.querySelector(".portada_pregunta_sticky");
//   const targetBotonesIntro = document.querySelector("#botones-intro");
//   const intro = document.querySelector(".portada_intro");
  
//   // Get the bounding rectangles for both elements
//   const stickyRect = targetSticky.getBoundingClientRect();
//   const botonesIntroRect = targetBotonesIntro.getBoundingClientRect();

//   if (stickyRect.top <= window.innerHeight * 0.05 && botonesIntroRect.top >= 50) {
//     // Calculate the scale factor based on the scroll position
//     const scaleFactor = Math.max(1, 1 + (window.pageYOffset / 10));

//     // Apply the transform with the scale factor
//     leftItem.style.transform = "scale(" + scaleFactor + ")";
//   } else {
//     // Reset the scale when the conditions are not met
//     leftItem.style.transform = "scale(1)";
//     intro.style.backgroundColor="var(--lima)"
//   }

// });

// // Initial check when the page loads
// window.addEventListener('load', function () {
//   // Trigger the scroll event to check the initial position
//   window.dispatchEvent(new Event('scroll'));
// });
