var tenisImage = document.querySelector('.portada_escondida_tenis1');
var chamarra1Image = document.querySelector('.portada_escondida_chamarra1');
var lentesImage = document.querySelector('.portada_escondida_lentes');
var pulseraImage = document.querySelector('.portada_escondida_pulsera');
var tenis2Image = document.querySelector('.portada_escondida_tenis2');
var jeans2Image = document.querySelector('.portada_escondida_jeans2');
var chamarra21Image = document.querySelector('.portada_escondida_chamarra21');
var jeans21Image = document.querySelector('.portada_escondida_jeans21');
var lentes2Image = document.querySelector('.portada_escondida_lentes2');
var ropa1Image = document.querySelector('.portada_escondida_ropa1');
var pulsera2Image = document.querySelector('.portada_escondida_pulsera2');
var tenis11Image = document.querySelector('.portada_escondida_tenis11');
var chamarra2Image = document.querySelector('.portada_escondida_chamarra2');
var chamarra11Image = document.querySelector('.portada_escondida_chamarra11');


window.addEventListener('load', function() {
});

function handleScroll(imageElement, startBottom, finalBottom, initialRotation, finalRotation, startLeft, finalLeft, initialScale) {
  var imageTop = imageElement.getBoundingClientRect().top - 110;

  // Get the initial scroll position
  var initialScroll = window.scrollY;

  // Calculate the initial scroll distance relative to the image's top position
  var initialScrollDistance = Math.max(-startBottom - 10, initialScroll - imageTop);

  // Calculate the initial position based on the initial scroll distance
  var initialTargetBottom = -(initialScrollDistance * ((finalBottom) / 100));

  window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    imageElement.style.transform = "rotate(" + initialRotation + "deg) scale(" + initialScale + ")";

    // Calculate the distance scrolled relative to the image's top position
    var scrollDistance = Math.max(-startBottom - 10, scrolled - imageTop);

    // Calculate the final and start positions
    var targetBottom = -(scrollDistance * ((finalBottom) / 100));
    var targetLeft = -(scrollDistance * ((finalLeft) / 100));

    // console.log("T: "+targetBottom)

    // Limit the targetBottom to prevent it from going beyond the final position
    var maxTargetBottom = -(finalBottom - startBottom);
    // Comenta esta linea para mostrar otro efecto
    // targetBottom = Math.max(targetBottom, maxTargetBottom);


    var maxTargetLeft = -(finalLeft - startLeft);
    targetLeft = Math.max(targetLeft, maxTargetLeft);

    // If the user has scrolled, use the updated targetBottom, otherwise use the initial position
    imageElement.style.bottom = scrolled > imageTop ? targetBottom + '%' : initialTargetBottom + '%';
    imageElement.style.left = targetLeft + '%';

    // Move the image down based on scroll position
    if (scrolled > imageTop) {
      imageElement.style.transform = "scale(.9) rotate(" + ((finalRotation * (window.pageYOffset / window.innerHeight))) + "deg)";
    }

  });
}

//(imageElement, startBottom, finalBottom, initialRotation, finalRotation, startLeft, finalLeft, initialScale)

handleScroll(tenisImage, 0, 30, -36.5, 46.5, 0, 5,1);

handleScroll(chamarra1Image, 3,51, -11.75, 350, 30, -10, .5);

handleScroll(lentesImage, 0, 26, -157, 124, 26, 10, 1);

handleScroll(pulseraImage, 3, 50, 20, 60, -23, -38, 1);

handleScroll(tenis2Image, 3, 29, -33.53, 14);

handleScroll(jeans2Image, 0, 41, -62.7, 204);

// handleScroll(chamarra21Image, -10, 20, -201.98, -201.98, 35, 5,1);

handleScroll(jeans21Image, 3, 32, -357.32, 162.7, 62.5 , 15);

handleScroll(lentes2Image, 3, 37, -333.53, 46);

handleScroll(ropa1Image, 3, 40, -3.03, 48, 70, 17, 1);

handleScroll(pulsera2Image, 3, 25, -20, 148, 74.3, 10, 1);

handleScroll(tenis11Image, 23, 55, 11, 340, 65, 0, 1);

handleScroll(chamarra2Image, -40, 22, -102, 159, 70, 2, .9);

// handleScroll(chamarra11Image, -30, 20, -112, 23, 68, -5, .2);

//(imageElement, startBottom, finalBottom, initialRotation, finalRotation, startLeft, finalLeft, initialScale)
