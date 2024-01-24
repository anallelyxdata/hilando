// EFECTO DE QUE LA GOTA SE HACE GRANDE 

var leftItem = document.getElementById('gota2');

// Throttle function
var throttle = function (type, name, obj) {
  var obj = obj || window;
  var running = false;
  var func = function () {
    if (running) {
      return;
    }
    running = true;
    requestAnimationFrame(function () {
      obj.dispatchEvent(new CustomEvent(name));
      running = false;
    });
  };
  obj.addEventListener(type, func);
};

throttle("scroll", "optimizedScroll");

// Your existing logic to start the animation when scrolling
window.addEventListener("optimizedScroll", function () {
  const targetSticky = document.querySelector(".portada_pregunta_sticky");
  const targetBotonesIntro = document.querySelector("#botones-intro");
  const intro = document.querySelector(".intro1");
  
  // Get the bounding rectangles for both elements
  const stickyRect = targetSticky.getBoundingClientRect();
  const botonesIntroRect = targetBotonesIntro.getBoundingClientRect();

  if (stickyRect.top <= window.innerHeight * 0.05 && botonesIntroRect.top >= 50) {
    // Calculate the scale factor based on the scroll position
    const scaleFactor = Math.max(1, 1 + (window.pageYOffset / 10));

    // Apply the transform with the scale factor
    leftItem.style.transform = "scale(" + scaleFactor + ")";
  } else {
    // Reset the scale when the conditions are not met
    leftItem.style.transform = "scale(1)";
    intro.style.backgroundColor="var(--lima)"
  }

});

// Initial check when the page loads
window.addEventListener('load', function () {
  // Trigger the scroll event to check the initial position
  window.dispatchEvent(new Event('scroll'));
});
