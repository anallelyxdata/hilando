// var image = document.querySelector('.portada_escondida_tenis1');
// var startPercentage = 3;
// var imageTop = image.getBoundingClientRect().top - 110;
// var isMoving = false;

// window.addEventListener('scroll', function() {
//   var scrolled = window.scrollY;
//   // console.log("s: " + scrolled + "i: " + imageTop)

//   // Calculate the distance scrolled relative to the image's top position
//   var scrollDistance = Math.max(0, scrolled - imageTop);

//   // Calculate the final and start positions
//   var finalPosition = 45; // 45% from the bottom
//   var startPosition = startPercentage; // 3% from the bottom
//   var targetBottom = -(scrollDistance * ((finalPosition) / 100));
//     image.style.transform = "rotate(-36.5deg)";


//   // Limit the targetBottom to prevent it from going beyond the final position
//   var maxTargetBottom = -(finalPosition - startPosition);
//   targetBottom = Math.max(targetBottom, maxTargetBottom);

//     image.style.bottom = targetBottom + '%';

//   // Move the image down based on scroll position
//   if(scrolled > imageTop){
//     image.style.transform = "rotate(" + ((46 * (window.pageYOffset / window.innerHeight))) + "deg)";
//   }

// });

function handleScroll(imageElement, startPercentage, finalPosition, initialRotation, finalRotation) {
  var imageTop = imageElement.getBoundingClientRect().top - 110;
  var isMoving = false;

  window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    // Calculate the distance scrolled relative to the image's top position
    var scrollDistance = Math.max(0, scrolled - imageTop);

    // Calculate the final and start positions
    // var finalPosition = finalPosition; // 45% from the bottom
    var targetBottom = -(scrollDistance * ((finalPosition) / 100));
      imageElement.style.transform = "rotate(" + initialRotation +"deg)";


    // Limit the targetBottom to prevent it from going beyond the final position
    var maxTargetBottom = -(finalPosition - startPercentage);
    targetBottom = Math.max(targetBottom, maxTargetBottom);

    imageElement.style.bottom = targetBottom + '%';

    // Move the image down based on scroll position
    if(scrolled > imageTop){
      imageElement.style.transform = "rotate(" + ((finalRotation * (window.pageYOffset / window.innerHeight))) + "deg)";
    }
  });
}

var tenisImage = document.querySelector('.portada_escondida_tenis1');
handleScroll(tenisImage, 3, 45, -36.5, 46.5);

var tenisImage = document.querySelector('.portada_escondida_chamarra1');
handleScroll(tenisImage, 0, 55, -11.75, 350);

var tenisImage = document.querySelector('.portada_escondida_lentes');
handleScroll(tenisImage, 3, 25, -157, 124);

var tenisImage = document.querySelector('.portada_escondida_pulsera');
handleScroll(tenisImage, 3, 30, 20, 20);

var tenisImage = document.querySelector('.portada_escondida_tenis2');
handleScroll(tenisImage, 3, 25, -33.53, 14);

var tenisImage = document.querySelector('.portada_escondida_jeans2');
handleScroll(tenisImage, 3, 45, -62.7, 204);

var tenisImage = document.querySelector('.portada_escondida_chamarra21');
handleScroll(tenisImage, 3, 45, -201.98, -201.98);

var tenisImage = document.querySelector('.portada_escondida_jeans21');
handleScroll(tenisImage, 3, 35, -357.32, 162.7);

var tenisImage = document.querySelector('.portada_escondida_lentes2');
handleScroll(tenisImage, 3, 35, -333.53, 46);

var tenisImage = document.querySelector('.portada_escondida_ropa1');
handleScroll(tenisImage, 3, 40, -3.03, 48);

var tenisImage = document.querySelector('.portada_escondida_pulsera2');
handleScroll(tenisImage, 3, 40, -20, 148);

var tenisImage = document.querySelector('.portada_escondida_tenis11');
handleScroll(tenisImage, 3, 40, 343, 17);

var tenisImage = document.querySelector('.portada_escondida_chamarra2');
handleScroll(tenisImage, 3, 55, -112, 159);

var tenisImage = document.querySelector('.portada_escondida_chamarra11');
handleScroll(tenisImage, 3, 55, -112, 23);
