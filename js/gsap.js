// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline with the animation
const portada = gsap.timeline({
  scrollTrigger: {
    trigger: '.portada_aux',  
    start: 'top center',  
    // end: '.portada_aux_salida bottom',      
    scrub: true,    
    markers: false, 
  },
});
// Add animations to the timeline
  portada.to('.portada_escondida_tenis1', {
    bottom:'-200%',
    transform: 'rotate(-210deg)',
    // transform: 'rotate(-210deg) translateY(-200vh)',
  });
  portada.to('.portada_escondida_pulsera', {
    bottom:'-190%', 
    transform: 'rotate(210deg)',
    left: '120%'
  }, '<')
  portada.to('.portada_escondida_chamarra1', {
    bottom:'-50%',
    transform: 'rotate(20deg)',
    // left: '80%'
  }, '<');
  portada.to('.portada_escondida_lentes', {
    bottom:'-90%',
    transform: 'rotate(120deg)',
    // left: '20%'
  }, '<');
  portada.to('.portada_escondida_tenis2', {
    bottom:'-180%',
    transform: 'rotate(60deg)',
    left: '18%'
  }, '<');
  portada.to('.portada_escondida_lentes2', {
    bottom:'-170%',
    transform: 'rotate(-140deg)',
    // left: '75%'
  }, '<');
  portada.to('.portada_escondida_jeans2', {
    bottom:'-200%',
    transform: 'rotate(-260deg)',
  }, '<');
  
  portada.to('.portada_escondida_jeans21', {
    bottom:'-200%',
    transform: 'rotate(350deg)',
    // left: '90%'
  }, '<');
  portada.to('.portada_escondida_pulsera2', {
    bottom:'-100%',
    transform: 'rotate(240deg)',
    // left: '40%'
  }, '<');
  portada.to('.portada_escondida_tenis11', {
    bottom:'-210%',
    transform: 'rotate(-345deg)',
    left: '100%'
  }, '<');

  portada.to('.portada_escondida_chamarra11', {
    bottom:'-240%',
    transform: 'rotate(350deg)',
    // left: '20%'
  }, '<');
  portada.to('.portada_escondida_ropa1', {
    bottom: '-180%',
    left:'80%',
  }, '<');

const portada2 = gsap.timeline({
  scrollTrigger: {
    trigger: '.portada_pregunta_sticky',  
    start: 'top 15%',  
    end: 'bottom center',   
    scrub: true,    
    markers: false, 
  },
});
// Portada 2
  portada2.to('.portada_pregunta_sticky', {
    position:'fixed',
    top:'15%',
  });

const portada3 = gsap.timeline({
  scrollTrigger: {
    trigger: '.portada_aux_ropa_sale',  
    start: 'top bottom',  
    end: 'bottom top',   
    scrub: true,    
    markers: false, 
  },
});
// Portada 3
  
  portada3.to('.portada_escondida_tenis1', {
    bottom: '-580%',
    // transform: 'rotate(-210deg) translateY(-250)',
  })
  portada3.to('.portada_escondida_pulsera', {
    // left: '200%',
    bottom: '-580%',
  }, '<')
  portada3.to('.portada_escondida_chamarra1', {
    // left: '200%',
    bottom: '-580%',
  }, '<');
  portada3.to('.portada_escondida_lentes', {
    // left: '-70%',
    bottom: '-580%',
  }, '<');
  portada3.to('.portada_escondida_tenis2', {
    // left: '-50%',
    bottom: '-580%'
  }, '<');
  portada3.to('.portada_escondida_jeans2', {
    // left: '-80%',
    bottom: '-580%'
  }, '<');
  portada3.to('.portada_escondida_lentes2', {
    // left: '165%', 
    bottom: '-580%'
  }, '<');
  portada3.to('.portada_escondida_jeans21', {
    // left: '190%',
    bottom: '-580%'
  }, '<');
  // portada3.to('.portada_escondida_pulsera2', {
  //   left: '40%,
  bottom: '-580%'
  // }, '<');
  portada3.to('.portada_escondida_tenis11', {
    // left: '180%',
    bottom: '-580%'
  }, '<');
  portada3.to('.portada_escondida_chamarra11', {
    // left: '-80%',
    bottom: '-580%'
  }, '<');
  portada3.to('.portada_escondida_ropa1', {
    // left:'240%',
    bottom:'-580%'
  }, '<');



// Create a GSAP timeline with the animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.portada_aux_salida',  
    start: 'bottom center',  
    end: 'bottom top',   
    scrub: true,    
    markers: false, 
  },
});
// aux salida
  timeline.to('#gota1', {
    scale: 90,
  });   
  timeline.to('.intro1_centro', {
    top: '0',
  });   

// Primer animación con ballena
const timeline01 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro01',  
    start: 'bottom center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, 
  },
});
// Intro 01
  timeline01.to('.intro1_nuestroplaneta', {
      top: '8%',
      left: '-50%',
  })
  timeline01.to('.portada_pregunta_sticky', {
      visibility:'hidden'
    });
  timeline01.to('.portada_escondida_tenis1', {
      display:'none',
    })
    timeline01.to('.portada_escondida_pulsera', {
     display:'none',
    }, '<')
    timeline01.to('.portada_escondida_chamarra1', {
      display:'none',
    }, '<');
    timeline01.to('.portada_escondida_lentes', {
      display:'none',
    }, '<');
    timeline01.to('.portada_escondida_tenis2', {
    display:'none',
    }, '<');
    timeline01.to('.portada_escondida_jeans2', {
      display:'none',
    }, '<');
    timeline01.to('.portada_escondida_lentes2', {
      display:'none',
    }, '<');
    timeline01.to('.portada_escondida_jeans21', {
      display:'none',
    }, '<');
    timeline01.to('.portada_escondida_pulsera2', {
      display:'none',
    }, '<');
    timeline01.to('.portada_escondida_tenis11', {
  display:'none',
    }, '<');
    timeline01.to('.portada_escondida_chamarra11', {
  display:'none',
    }, '<');
    timeline01.to('.portada_escondida_ropa1', {
  display:'none',
    }, '<');

const timeline02 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro02',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 02
  timeline02.to('#planeta1_gota', {
      top:'20%',
      visibility:'hidden'
  });
  timeline02.to('#planeta1_arriba', {
      rotate: 0,
  })


const timeline03 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro03',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 03
  timeline03.to('#planeta1_ballena', {
      top:'24vh',
      right:'-4%',
  });
  timeline03.to('#planeta1_gota', {
      visibility:'visible'
  });

const timeline04 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro04',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 04
  timeline04.to('#planeta1_gota', {
      top:'50vh',
      right:'-50%',
      // zIndex:'20'
  });

const timeline05 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro05',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 05
  timeline05.to('.intro1_texto', {
    left:'-75%',
  });

const timeline06 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro06',  
    start: 'top center',  
    end: 'bottom 10%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 06
  timeline06.to('#planeta1_arriba', {
      top:'-80%'
  }, '<');

  timeline06.to('#planeta1_ballena', {
      top:'45vh',
      right:'10%'
  }, '<');

  timeline06.to('.intro1_nuestroplaneta', {
      top: '-80%',
      left: '-50%',
  }, '<')

  timeline06.to('.intro1_texto', {
    left:'10%',
  }, '<');

const timeline07 = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro07',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 07
  timeline07.to('#gota1', {
      attr: { src: './img/intro/gota_azul.svg' }
  });

  timeline07.to('.intro1_nuestroplaneta', {
      display: 'none'
  });

  timeline07.to('.intro1_texto', {
      display: 'none'
  });
  timeline07.to('#planeta1_gota', {
      top: '20vh',
      scale:5, 
      transformOrigin:'center'
  });

  timeline07.to('.div_planeta1_abajo', {
      scale: 1.6,
  }, '<');


const timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro2',  
    start: 'top center',  
    end: 'bottom 10%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
// Intro 2
  timeline2.to('.div_planeta1_abajo', {
     zIndex:2000
  });

  timeline2.to('.div_planeta1_abajo', {
      top: '38vh',
      scale: 1
  }, '<');
  timeline2.to('#planeta1_gota', {
      top: '20vh',
      scale:75, 
      transformOrigin:'center'
  }, '<');
  timeline2.to('.intro1', {
      backgroundColor:'var(--lima)'
  }, '<');
  timeline2.to('.intro1', {
      backgroundImage:'url("./img/intro/textura-planeta2x.png")',
      backgroundSize:'100%'
  }, '<');

const timeline021 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro021',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});

timeline021.to('#planeta1_gota', {
    display:'none'
});
timeline021.to('#gota1', {
    attr: { src: './img/portada/gota.svg' }
});
timeline021.to('#gota1', {
    display:'none'
});
timeline021.to('#planeta1_ballena', {
    display:'none'
});

// tim

const timeline3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro3',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline3.to('.intro3_texto-97', {
    left: '-60%', 
});


const timeline31 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro31',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline31.to('#planeta1_bottom', {
    rotate: '10deg'
});


const timeline32 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro32',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline32.to('.intro3_texto-2', {
    left: '-30%', 
    bottom:'8%'
});
timeline32.to('#planeta2_gota', {
    scale: '10', 
    visibility:'visible',
});

const timeline33 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro33',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});



const timeline34 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro34',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});

timeline34.to('#planeta2_gota', {
    // width: '8.5%'
    scale: 65, 
    left: '75.5%'
}, '<');
timeline34.to('.div_planeta1_abajo', {
    top: '2vh'
}, '<');
timeline34.to('#planeta2_gota', {
    top: '55vh'
}, '<');
timeline34.to('.intro3_texto-97', {
    bottom: '75vh'
}, '<');
timeline34.to('.intro3_texto-2', {
    bottom: '43vh'
}, '<');

const timeline35 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro35',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline35.to('.div_planeta1_abajo', {
    top: '-125%'
}, '<');
timeline35.to('#planeta2_gota', {
    top: '15%'
}, '<');
timeline35.to('.intro3_texto-97', {
    bottom: '175%'
}, '<');
timeline35.to('.intro3_texto-2', {
    bottom: '143%'
}, '<');



const timeline36 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro36',  
    start: 'top center',  
    end: 'bottom 10%', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline36.to('#planeta2_gota', {
    top: '15%',
    scale: 2000,
    transformOrigin: 'center'
    // width: '20%'
});
timeline36.to('.intro4', {
    backgroundColor: 'var(--azul)',
});
timeline36.to('.intro4', {
    visibility: 'visible',
});


const timeline37 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro37',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});

timeline37.to('.intro1', {
    backgroundColor:'var(--azul)'
}, '<');
timeline37.to('.intro1', {
    backgroundImage:'none',
}, '<');
timeline37.to('#planeta2_gota', {
    display: 'none'
}, '<');
timeline37.to('#gota1', {
    display: 'none'
    // width: '20%'
}, '<');
timeline37.to('#gota1', {
    display: 'none'
}, '<');
timeline37.to('.intro4_gota', {
    top: '0',
});



const timeline38 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro38',  
    start: 'top bottom',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});

const timeline41 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro41',  
    start: 'top center',  
    end: 'bottom 20%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});

timeline41.to('.intro4_65', {
   left: '100%',
   top:'15%',
});


const timeline42 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro42',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline42.to('.intro4_gota2', {
   rotate:'0'
});
timeline42.to('.intro4_30', {
   left: '-60%',
   top:'55%',
});
timeline42.to('.intro4_gota3', {
   rotate:'25',
   x: '-20%',
   y: '75%',
});


const timeline43 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro43',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline43.to('.intro4_gota3', {
   rotate:'0',
   x: '-25%',
   y: '75%',
});
timeline43.to('.intro4_04', {
   top: '75%',
   left:'-42%',
});

const timeline44 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro44',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline44.to('.intro4_gotaverde', {
   scale: 20,
   top: '88%',
   visibility:'visible'
});

const timeline45 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro45',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline45.to('.intro4_gota', {
  top: '-35%'
});

const timeline46 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro46',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline46.to('#intro4_gotaverde', {
  scale: 150,
  zIndex:20,
});

const timeline47 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro47',  
    start: 'top center',  
    end: 'bottom 15%',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline47.to('#intro4_gotaverde', {
  scale: 2000,
  transformOrigin: 'center',
});

const timeline48= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro48',  
    start: 'top 80%',  
    end: 'bottom top',   
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline47.to('.intro4_gota', {
  top: '-135%'
});
timeline48.to('#intro4_gotaverde', {
  display:'none'
});
timeline48.to('.intro4', {
  backgroundColor: 'var(--lima)'
});
timeline48.to('.intro4_gota', {
  top: '-125%'
});
timeline48.to('.intro5', {
  visibility:'visible'
});
timeline48.to('.intro5_img', {
  right:'0'
});

const timeline49= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro49',  
    start: 'top center',  
    end: 'bottom top', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline49.to('.intro4_nuestroplaneta', {
  top: '20%',
  left: '25vw'
});

const timeline492= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro492',  
    start: 'top center',  
    end: 'bottom top', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline492.to('.intro5_texto', {
  top:'53%'
});
timeline492.to('.intro5_azul', {
  opacity:'1'
});
const timeline50= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro51',  
    start: 'top center',  
    end: 'bottom top', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline50.to('.intro52', {
  top:0
});
timeline50.to('.intro4', {
  position:'absolute',
});
timeline50.to('.intro5', {
  position:'absolute',
  top:'-120%'
});
const timeline52= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro520',  
    start: 'top center',  
    end: 'bottom 10%', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline52.to('.intro52_inicio', {
  opacity:'1'
});
timeline52.to('.intro4', {
  position:'absolute',
});
timeline52.to('.intro5', {
  position:'absolute',
  top:'-120%'
});

const timeline53= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro530',  
    start: 'top center',  
    end: 'bottom 10%', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline53.to('.intro52_impacto', {
  opacity:'1'
});

const timeline54= gsap.timeline({
  scrollTrigger: {
    trigger: '#intro540',  
    start: 'top center',  
    end: 'bottom 10%', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline54.to('.intro52_huella', {
  opacity:'1'
});

const timeline55= gsap.timeline({
  scrollTrigger: {
    trigger: '.section_ciclo',  
    start: 'top bottom',  
    end: 'bottom top', 
    scrub: true,    
    markers: false, // Display markers for debugging (optional)
  },
});
timeline55.to('.btn-main', {
  backgroundColor:'rgba(211, 235, 107, .5)'
});








    /*transform: scale(20) translateY(45%);*/

// var lastScrollTop = 0;

// window.addEventListener('wheel', function(event) {
//   var currentScrollTop = window.scrollY || document.documentElement.scrollTop;
//   console.log(currentScrollTop+ " vs "+lastScrollTop)


//   if (currentScrollTop <= lastScrollTop) {
//    // Scrolling up
//     document.getElementById('planeta1_arriba').style.transitionDelay = '1s'
//     document.getElementById('planeta1_ballena').style.transitionDelay = '0';
//     console.log('up')
//   } else {
//     // Scrolling down
//      document.getElementById('planeta1_arriba').style.transitionDelay = '0';
//     document.getElementById('planeta1_ballena').style.transitionDelay = '1s'
//     console.log('down')
//   }

//   lastScrollTop = currentScrollTop;
// });







// Efecto para que la gota se vea que caiga un poco antes de hacerse grande
function handleScroll() {
  const portada_pregunta = document.getElementById('portada_pregunta_sticky');
  const portada_preguntaBounding = portada_pregunta.getBoundingClientRect();
  const gota1 = document.getElementById('gota1');


  const windowHeight = window.innerHeight;

  // Calculate the bottom position of the element
  const portada_preguntaBottomPosition = portada_preguntaBounding.bottom;

  // Check if the bottom position is within the bottom 10% of the viewport
  if (portada_preguntaBottomPosition <= windowHeight * 0.7) {
    // Move the element to the fixed position at the bottom
    gota1.style.position = "fixed";
    gota1.style.bottom = "15%";
    document.querySelector('.portada_pregunta-botones').style.display = "flex";
  } else {
    // Restore the absolute position
    gota1.style.position = "absolute";
    gota1.style.bottom = "15%";
    document.querySelector('.portada_pregunta-botones').style.display = "none";
  }

 
}

// Attach the handleScroll function to the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check when the page loads
handleScroll();
